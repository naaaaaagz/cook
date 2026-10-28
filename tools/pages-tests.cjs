/* Local targeted checks for document navigation and tab-session state. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const app=fs.readFileSync('js/app.js','utf8');
const files={'index.html':'welcome','recipes.html':'recipes','recipe.html':'details','kitchen.html':'layout','cook.html':'cook'};
let policy;
for(const [file,screen] of Object.entries(files)) {
  const html=fs.readFileSync(file,'utf8');
  assert(html.includes('data-page="'+screen+'"'));
  assert.deepEqual([...html.matchAll(/id="screen-([^"]+)"/g)].map(m=>m[1]),[screen]);
  const csp=html.match(/http-equiv="Content-Security-Policy" content="([^"]+)"/)[1];
  if(policy)assert.equal(csp,policy);else policy=csp;
  assert(!/<script(?![^>]*src=)[^>]*>\s*\S/.test(html));
  for(const m of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if(m[1].startsWith('data:')||m[1].startsWith('#'))continue;
    assert(!m[1].startsWith('/'),'Root-relative asset breaks project hosting: '+m[1]);
    assert(fs.existsSync(m[1].split('?')[0]),'Missing asset '+m[1]);
  }
}
function storageScope(pathname='/cook/recipe.html') {
  const map=new Map();
  const scope=vm.createContext({window:{},location:{pathname},sessionStorage:{getItem:k=>map.get(k)||null,setItem:(k,v)=>map.set(k,v)}});
  vm.runInContext(fs.readFileSync('js/page-session.js','utf8'),scope);
  return {scope,map,api:scope.window.CookSession};
}
const {scope,map,api}=storageScope();
assert.equal(JSON.stringify(api.read()),'{}');assert(api.save({picks:{x:{adults:4}}}));
assert.equal(api.read().picks.x.adults,4);assert.equal([...map.keys()][0],'cook:page-session:v1:/cook/');
map.set([...map.keys()][0],'{broken');assert.equal(JSON.stringify(api.read()),'{}');
map.set([...map.keys()][0],JSON.stringify({version:999,data:{picks:{}}}));assert.equal(JSON.stringify(api.read()),'{}');
scope.sessionStorage.getItem=()=>{throw Error('blocked');};scope.sessionStorage.setItem=()=>{throw Error('quota');};
assert.equal(JSON.stringify(api.read()),'{}');assert.equal(api.save({}),false);
const ui=vm.createContext({window:{},console,URLSearchParams,location:{search:'?id=spaghetti_carbonara',pathname:'/cook/recipe.html'},document:{querySelectorAll:()=>[]}});
for(const f of ['js/cook-core.js','js/recipes-sheet.js','js/recipes.js'])vm.runInContext(fs.readFileSync(f,'utf8'),ui);
vm.runInContext(app.slice(app.indexOf('  function defaultChoices'),app.indexOf('  // Filters are words')),ui);
vm.runInContext(app.slice(app.indexOf('  function cleanChoices'),app.indexOf('  function restoreSession')),ui);
vm.runInContext("function clamp(v,a,b){return Math.max(a,Math.min(b,v));}function isPerson(r){return !r.unit||r.unit==='person';}function setServings(r,c){c.servings=isPerson(r)?c.adults+c.kids*.5:c.adults;}",ui);
const r=ui.window.RECIPES[0];
const c=ui.cleanChoices(r,{adults:-50,kids:500,mode:'other',opt_meat:'bad',injected:'ignored'});
assert.equal(c.adults,0);assert.equal(c.kids,8);assert.equal(c.mode,'detailed');assert.equal(c.opt_meat,'guanciale');assert(!('injected'in c));
assert.equal(ui.cleanChoices(r,{adults:0,kids:0}).adults,1);
const jar=ui.window.RECIPES.find(r=>r.unit==='jar');assert.equal(ui.cleanChoices(jar,{adults:1,kids:4}).kids,0);
vm.runInContext("var state={recipe:window.RECIPES[0]},PAGES={welcome:'index.html',recipes:'recipes.html',details:'recipe.html',layout:'kitchen.html',cook:'cook.html'},pageScreen='details',pageParams=new URLSearchParams(location.search);",ui);
vm.runInContext(app.slice(app.indexOf('  function screenUrl'),app.indexOf('  function updateTitle')),ui);
for(const recipe of ui.window.RECIPES) {
  ui.pageParams=new URLSearchParams('?id='+encodeURIComponent(recipe.id));
  assert.equal(ui.route().recipe.id,recipe.id);
  const target=new URL(ui.screenUrl('details',recipe),'https://example.test/cook/recipes.html');
  assert.equal(target.pathname,'/cook/recipe.html');assert.equal(target.searchParams.get('id'),recipe.id);
}
ui.pageParams=new URLSearchParams('?id=../../bad');assert.equal(ui.route().recipe,null);
assert(!app.includes('history.pushState'));assert(!app.includes('location.hash'));
// A delayed speech-language lookup must not start the microphone after departure.
const fridge=fs.readFileSync('js/fridge.js','utf8');
const mic=vm.createContext({window:{isSecureContext:true},panel:{hidden:true},opening:0,want:false,SR:true,queued:[],starts:0,
  ready:{then(cb){mic.queued.push(cb);}},opts:{onClose(){}},t:key=>key,$:()=>({}),
  renderChips(){},renderTranscript(){},minimize(){},problem(){},setState(){},stopUI(){},stopListening(){},startListening(){mic.starts++;}});
vm.runInContext(fridge.slice(fridge.lastIndexOf('  var api = {'),fridge.lastIndexOf('  return api;')),mic);
mic.api.open();mic.api.stop();mic.queued[0](true);assert.equal(mic.starts,0);
mic.api.open();mic.queued[1](true);assert.equal(mic.starts,1);
mic.api.open();mic.api.close();mic.queued[2](true);assert.equal(mic.starts,1);
console.log('PASS: five single-screen documents, matching CSP, relative assets, session round trips/failures, validated choices, all '+ui.window.RECIPES.length+' recipe routes and project-subpath URLs.');
