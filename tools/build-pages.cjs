/* Local generator; no dependencies. node tools/build-pages.cjs [--check]
   The shared template contains all screens; each output contains only its own.
   Run after shared markup changes, not after recipe data changes. */
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(__dirname, 'page-template.html'), 'utf8').replace(/\r\n/g, '\n');
const pages = { 'index.html':'welcome', 'recipes.html':'recipes', 'recipe.html':'details', 'kitchen.html':'layout', 'cook.html':'cook' };
function screen(name) {
  const start = source.indexOf('<section id="screen-' + name + '"');
  if (start < 0) throw Error('Missing template screen: '+name);
  const tags = /<\/?section\b[^>]*>/g; tags.lastIndex=start;
  let depth=0, match;
  while((match=tags.exec(source))) {
    depth += match[0].startsWith('</') ? -1 : 1;
    if (!depth) return source.slice(start,tags.lastIndex).replace(/^(<section\b[^>]*?) hidden(?=>)/,'$1');
  }
  throw Error('Unclosed template screen: '+name);
}
const head=source.slice(0,source.indexOf('<main id="app">'));
const tail=source.slice(source.indexOf('</main>')+'</main>'.length);
let failed=false;
for (const [file,name] of Object.entries(pages)) {
  const html=(head+'<main id="app">\n  '+screen(name)+'\n</main>'+tail)
    .replace('<body>','<body data-page="'+name+'">')
    .replace('<script src="js/cook-core.js">','<script src="js/page-session.js"></script>\n<script src="js/cook-core.js">');
  const target=path.join(root,file);
  if(process.argv.includes('--check')) {
    if(!fs.existsSync(target)||fs.readFileSync(target,'utf8').replace(/\r\n/g,'\n')!==html) { console.error('Outdated page: '+file); failed=true; }
  } else fs.writeFileSync(target,html);
}
if(failed)process.exitCode=1;
else console.log('PASS: five separate HTML pages '+(process.argv.includes('--check')?'match the template.':'generated.'));
