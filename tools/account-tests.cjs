/* Local browser integration checks. Requires Playwright (use NODE_PATH if bundled).
   All Auth/database requests are intercepted; no external accounts or emails. */
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const testBackend = fs.readFileSync(path.join(root,'js/account-config.js'),'utf8').match(/supabaseUrl:\s*'([^']*)'/)[1] || 'https://cook-test.supabase.co';
const mime = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.webp':'image/webp' };
const server = http.createServer((req,res) => {
  const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (error, data) => { if(error)res.writeHead(404).end();else {res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');res.end(data);} });
});
const accounts = new Map(), rows = new Map(), calls = [];
let failWrites = false, writeDelay = 0;
function addAccount(email,id) { const value={id,email,email_confirmed_at:'2026-10-28T12:00:00Z',aud:'authenticated',role:'authenticated',app_metadata:{provider:'email'},user_metadata:{}};accounts.set(email,value);return value; }
const a=addAccount('peter@gmail.com','00000000-0000-4000-8000-000000000001');
const b=addAccount('peter+something@gmail.com','00000000-0000-4000-8000-000000000002');
function session(user) {
  const claims={sub:user.id,role:'authenticated',aud:'authenticated',exp:Math.floor(Date.now()/1000)+3600};
  const token=[{alg:'HS256',typ:'JWT'},claims].map(x=>Buffer.from(JSON.stringify(x)).toString('base64url')).join('.')+'.'+'x'.repeat(43);
  return {access_token:token,token_type:'bearer',expires_in:3600,expires_at:claims.exp,refresh_token:'local-test-'+user.id,user};
}
async function backend(route) {
  const request=route.request(), url=new URL(request.url());
  const body=request.postDataJSON(), method=request.method();
  calls.push({path:url.pathname,method,email:body?.email,body});
  let user;
  try {const token=request.headers().authorization?.split(' ')[1];const id=JSON.parse(Buffer.from(token.split('.')[1],'base64url')).sub;user=[...accounts.values()].find(x=>x.id===id);}catch{}
  function reply(value,status=200) { return route.fulfill({status,contentType:'application/json',body:JSON.stringify(value)}); }
  if(url.pathname==='/auth/v1/signup')return body.email==='smtp-fails@example.com'?route.fulfill({status:500,contentType:'application/json',headers:{'x-supabase-api-version':'2024-01-01'},body:JSON.stringify({code:'unexpected_failure',message:'Error sending confirmation email'})}):reply({user:{id:'unconfirmed',email:body.email,identities:[]},session:null});
  if(url.pathname==='/auth/v1/user'&&method==='PUT')return user?reply(user):reply({msg:'Not authenticated'},401);
  if(url.pathname==='/rest/v1/rpc/cook_delete_account') {
    if(!user)return reply({message:'Not authenticated'},401);
    if(body.p_password!=='other-test-password-123')return reply(false);
    accounts.delete(user.email);rows.delete(user.id);return reply(true);
  }
  if(url.pathname==='/auth/v1/token')return accounts.has(body.email)?reply(session(accounts.get(body.email))):reply({msg:'Invalid login credentials'},400);
  if(url.pathname==='/auth/v1/verify')return body.token_hash==='good-link'?reply(session(a)):reply({msg:'Expired link'},403);
  if(url.pathname==='/auth/v1/user')return user?reply(user):reply({msg:'Not authenticated'},401);
  if(url.pathname==='/auth/v1/logout'||url.pathname==='/auth/v1/recover'||url.pathname==='/auth/v1/resend')return reply({});
  if(url.pathname==='/rest/v1/user_settings') {
    if(!user)return reply({message:'Not authenticated'},401);
    if(method==='GET')return reply(rows.has(user.id)?[rows.get(user.id)]:[]);
    if(failWrites)return reply({message:'Simulated unavailable database'},503);
    if(writeDelay)await new Promise(resolve=>setTimeout(resolve,writeDelay));
    assert.equal(body.user_id,user.id);
    rows.set(user.id,body);return reply(null,201);
  }
  throw Error('Unexpected mock request: '+method+' '+url.pathname);
}
async function main() {
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const base='http://localhost:'+server.address().port;
  const browser=await chromium.launch({headless:true, ...(process.env.COOK_BROWSER_CHANNEL ? {channel:process.env.COOK_BROWSER_CHANNEL} : {})});
  try {
    const disabled=await browser.newContext();
    await disabled.route('**/js/account-config.js',route=>route.fulfill({contentType:'text/javascript',body:'window.COOK_ACCOUNT_CONFIG={registrationEnabled:false};'}));
    const off=await disabled.newPage();await off.goto(base+'/index.html');
    await off.locator('#btn-account').click();
    await off.locator('#account-status').filter({hasText:'not available yet'}).waitFor();
    assert(await off.locator('#account-submit').isDisabled());
    await off.locator('[data-close="account-dialog"]').click();
    await off.locator('#storage-close').click();
    await off.reload();assert(await off.locator('#storage-notice').isHidden());
    await off.locator('.account-footer [data-open-privacy]').click();assert(await off.locator('#privacy-dialog').isVisible());
    await disabled.close();
    const context=await browser.newContext();const errors=[];
    context.on('page',page=>page.on('pageerror',error=>errors.push(error.message)));
    await context.route('**/js/account-config.js',route=>route.fulfill({contentType:'text/javascript',body:'window.COOK_ACCOUNT_CONFIG='+JSON.stringify({supabaseUrl:testBackend,publishableKey:'sb_publishable_localtest',siteUrl:base+'/index.html',registrationEnabled:true})}));
    await context.route(testBackend+'/**',backend);
    await context.route('https://api.country.is/**',route=>route.fulfill({contentType:'application/json',body:'{"country":"HU"}'}));
    const page=await context.newPage();await page.goto(base+'/index.html');await page.locator('#storage-ok').click();
    await page.locator('#btn-account').click();
    assert.equal(await page.locator('#account-status').textContent(),'');
    assert.equal(await page.locator('#account-switch').textContent(),'Create account');
    await page.locator('#account-switch').click();
    assert.equal(await page.locator('#account-submit').textContent(),'Create account');
    assert.equal(await page.locator('#account-switch').textContent(),'Sign in');
    // A failed confirmation email names the reason and keeps the technical code visible.
    await page.locator('#account-email').fill('smtp-fails@example.com');await page.locator('#account-password').fill('a-test-password-123');await page.locator('#account-submit').click();
    await page.locator('#account-status').filter({hasText:'email could not be sent'}).waitFor();
    assert.match(await page.locator('#account-status').textContent(),/Error sending confirmation email/);
    await page.locator('#account-email').fill(b.email);await page.locator('#account-password').fill('a-test-password-123');await page.locator('#account-submit').click();
    await page.locator('#account-status').filter({hasText:'confirmation email'}).waitFor();
    assert(calls.some(x=>x.path==='/auth/v1/signup'&&x.email===b.email));
    await page.locator('#account-switch').click();
    await page.locator('#account-email').fill(a.email);await page.locator('#account-password').fill('a-test-password-123');await page.locator('#account-submit').click();
    // Signing in from the start page opens the recipe list.
    await page.waitForURL('**/recipes.html');await page.locator('#btn-account').click();
    await page.locator('#account-member:not([hidden])').waitFor();
    await page.locator('#account-status').filter({hasText:'Signed in.'}).waitFor();
    await page.locator('#account-save').click();await page.locator('#account-status').filter({hasText:'settings saved'}).waitFor();
    assert(rows.has(a.id));assert(!rows.has(b.id));
    const prefs=await page.evaluate(()=>window.CookPreferences.read());
    assert.deepEqual(Object.keys(prefs).sort(),['layout','layoutSaved','layoutTouched','layoutWide','textures','lang','theme','units'].sort());
    assert(!JSON.stringify(prefs).includes('password'));
    await page.locator('[data-close="account-dialog"]').click();
    await page.goto(base+'/index.html');
    await page.locator('#btn-options').click();await page.locator('input[name="theme"][value="dark"]').check();
    await page.locator('input[name="units"][value="imperial"]').check();await page.locator('#lang-select').selectOption('hu');
    writeDelay=200;
    await page.locator('#options-dialog button[value="save"]').click();
    await page.waitForFunction(()=>document.documentElement.getAttribute('data-theme')==='dark');
    await page.locator('#btn-welcome-layout').click();await page.waitForURL('**/kitchen.html?**');
    writeDelay=0;assert.equal(rows.get(a.id).preferences.units,'imperial');assert.equal(rows.get(a.id).preferences.lang,'hu');
    await page.locator('#btn-layout-save').click();await page.waitForURL('**/recipes.html');
    assert(rows.get(a.id).preferences.layoutSaved);assert(rows.get(a.id).preferences.layout.countertop);
    // Favorites: the star on a photo saves to the account; "Favorites only" lists just those.
    await page.locator('.filter-star').waitFor();
    // No favorites yet: a large note and "Check all recipes", which clears the filters.
    await page.locator('.filter-star').click();await page.locator('#fav-empty:not([hidden])').waitFor();
    assert.equal(await page.locator('.fav-card').count(),0);assert(await page.locator('#no-results').isHidden());
    await page.locator('#btn-fav-all').click();assert(await page.locator('#fav-empty').isHidden());
    assert.equal(await page.locator('.filter-star').getAttribute('aria-pressed'),'false');assert(await page.locator('.fav-card').count()>100);
    const firstFav=page.locator('.fav-card').first();const favId=await firstFav.getAttribute('data-fav');
    await firstFav.click();await page.waitForFunction(()=>document.querySelector('.fav-card').getAttribute('aria-pressed')==='true');
    await page.waitForFunction(()=>window.CookAccount.flushPending());
    assert.deepEqual(rows.get(a.id).preferences.favorites,[favId]);
    await page.locator('.filter-star').click();assert.equal(await page.locator('.fav-card').count(),1);
    await page.locator('.filter-star').click();
    // The page is in Hungarian now, so account texts must be translated.
    const tx=key=>page.evaluate(k=>window.CookI18n.t(k),key);assert.equal(await tx('accLoaded'),'A mentett konyhád és beállításaid betöltődtek.');
    await page.locator('#btn-account').click();await page.locator('#account-status').filter({hasText:await tx('accSaved')}).waitFor();
    assert.equal(await page.locator('#account-save').textContent(),await tx('accSave'));
    // With the account window open, a failed save is reported inside it (the page behind can't be clicked).
    failWrites=true;await page.locator('#account-save').click();await page.locator('#account-status').filter({hasText:await tx('accSaveFailed')}).waitFor();
    assert(await page.locator('#account-message').isHidden());
    assert(await page.evaluate(()=>window.CookPreferences.read().layoutSaved));
    failWrites=false;
    await page.locator('#account-save').click();await page.locator('#account-status').filter({hasText:await tx('accSaved')}).waitFor();
    await page.locator('#account-logout').click();await page.waitForURL('**/index.html');
    assert.equal(await page.evaluate(()=>window.CookPreferences.read().layoutSaved),false);
    assert.equal(await page.evaluate(()=>document.documentElement.getAttribute('data-theme')),'light');
    await page.locator('#btn-account').click();await page.locator('#account-email').fill(b.email);
    await page.locator('#account-password').fill('other-test-password-123');await page.locator('#account-submit').click();
    await page.waitForURL('**/recipes.html');await page.locator('#btn-account').click();
    await page.locator('#account-status').filter({hasText:'Signed in.'}).waitFor();
    assert.equal(await page.evaluate(()=>window.CookPreferences.read().layoutSaved),false);
    await page.locator('#account-save').click();await page.locator('#account-status').filter({hasText:'settings saved'}).waitFor();
    assert(rows.has(a.id)&&rows.has(b.id));assert.equal(rows.get(b.id).preferences.layoutSaved,false);
    // Delete account: a wrong password keeps it; the right one removes the account and its settings.
    await page.locator('#account-delete-open').click();assert(await page.locator('#account-delete').isVisible());
    await page.locator('#account-delete-password').fill('wrong-password-123');await page.locator('#account-delete button[type="submit"]').click();
    await page.locator('#account-status').filter({hasText:'Wrong password'}).waitFor();assert(accounts.has(b.email));
    await page.locator('#account-delete-password').fill('other-test-password-123');await page.locator('#account-delete button[type="submit"]').click();
    await page.locator('#account-message:not([hidden])').waitFor();assert.equal(await page.locator('#account-message-text').textContent(),'Your account has been deleted.');
    assert(!accounts.has(b.email));assert(!rows.has(b.id));assert(await page.locator('#account-guest').isVisible()===false);
    await page.locator('#account-message-ok').click();
    // Cross-browser confirmation, with an actual verification response required.
    // The confirmed new account lands on the recipe list; "verified" slides up and fades after 5 seconds.
    const verify=await context.newPage();await verify.goto(base+'/index.html#token_hash=good-link&type=email');
    await verify.waitForURL('**/recipes.html');
    await verify.locator('#account-message:not([hidden])').waitFor();assert.equal(await verify.locator('#account-message-text').textContent(),await verify.evaluate(()=>window.CookI18n.t('accConfirmed')));
    await verify.locator('#account-message').waitFor({state:'hidden',timeout:9000});
    assert.equal(new URL(verify.url()).hash,'');
    assert.equal(await verify.evaluate(()=>window.CookPreferences.read().units),'imperial');
    const invalid=await context.newPage();await invalid.goto(base+'/index.html#token_hash=expired&type=email');
    await invalid.locator('#account-message:not([hidden])').waitFor();assert.equal(await invalid.locator('#account-message-text').textContent(),await invalid.evaluate(()=>window.CookI18n.t('accLinkFailed')));
    assert.equal(new URL(invalid.url()).hash,'');
    const recovery=await context.newPage();await recovery.goto(base+'/index.html#token_hash=good-link&type=recovery');
    await recovery.locator('#account-recovery:not([hidden])').waitFor();
    assert.equal(await recovery.locator('#account-recovery-email').textContent(),a.email);
    await recovery.locator('#account-new-password').fill('new-test-password-123');await recovery.locator('#account-new-password2').fill('new-test-password-124');
    await recovery.locator('#account-recovery button').click();await recovery.waitForFunction(()=>document.getElementById('account-status').textContent===window.CookI18n.t('accMismatch'));
    await recovery.locator('#account-new-password2').fill('new-test-password-123');
    await recovery.locator('#account-recovery button').click();await recovery.waitForFunction(()=>document.getElementById('account-status').textContent===window.CookI18n.t('accPasswordUpdated'));
    // Browser storage snapshots/exports cannot accidentally contain auth credentials.
    const snapshot=await verify.evaluate(()=>window.CookSession.read());
    assert(!/access_token|refresh_token|password/.test(JSON.stringify(snapshot)));
    const mobile=await context.newPage();await mobile.setViewportSize({width:390,height:844});await mobile.goto(base+'/index.html');
    await mobile.locator('#btn-account').click();await mobile.locator('#account-switch').click();
    assert(await mobile.locator('#account-email').isVisible());
    assert(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    fs.mkdirSync(path.join(root,'.tmp'),{recursive:true});
    await mobile.screenshot({path:path.join(root,'.tmp/account-mobile.png')});
    await page.screenshot({path:path.join(root,'.tmp/account-desktop.png')});
    await mobile.locator('[data-close="account-dialog"]').click();
    await mobile.locator('#storage-close').click();
    await mobile.locator('.account-footer [data-open-privacy]').click();
    await mobile.screenshot({path:path.join(root,'.tmp/account-privacy.png')});
    await mobile.locator('[data-close="privacy-dialog"]').click();
    await mobile.locator('#storage-reopen').click();
    await mobile.waitForTimeout(300); // Allow the requested slide-up animation to finish.
    assert(await mobile.locator('#storage-notice').isVisible());
    const bar=await mobile.locator('#storage-notice').boundingBox();assert(bar.y>=0&&bar.y+bar.height<=844);
    await mobile.screenshot({path:path.join(root,'.tmp/account-storage.png')});
    assert.deepEqual(errors,[]);
    await context.close();
    console.log('PASS: disabled setup, OK/X storage notice, privacy, +aliases, sign-in, isolated accounts, kitchen/preferences save/reload, failure/retry, verification/expired links, recovery with repeat, sign-out, favorites, delete account, email-error reasons, mobile layout. Auth/database are mocked; live RLS/delivery not tested.');
  } finally { await browser.close(); }
}
main().catch(error=>{console.error(error);process.exitCode=1;}).finally(()=>server.close());
