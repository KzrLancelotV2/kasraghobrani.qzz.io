const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const script=fs.readFileSync(path.join(root,'assets/js/clean-urls.js'),'utf8');
function run(pathname,target){
 let redirect,cleaned;
 vm.runInNewContext(script,{document:{documentElement:{dataset:{redirect:target}}},location:{pathname,search:'?ref=cv',hash:'#projects-heading',replace:url=>redirect=url},history:{state:null,replaceState:(_state,_title,url)=>cleaned=url}});
 return {redirect,cleaned};
}
test('legacy redirects preserve query and fragment, and index URLs normalize without loops',()=>{
 assert.equal(run('/research.html','/research/').redirect,'/research/?ref=cv#projects-heading');
 assert.equal(run('/index.html').cleaned,'/?ref=cv#projects-heading');
 assert.equal(run('/about/index.html').cleaned,'/about/?ref=cv#projects-heading');
 assert.deepEqual(run('/about/'),{redirect:undefined,cleaned:undefined});
});
test('clean routes contain content and all local links and assets resolve from their new locations',()=>{
 for(const route of ['/','/about/','/research/','/contact/']){
  const file=route+'index.html';const html=fs.readFileSync(path.join(root,file),'utf8');
  assert.match(html,/<main\b/);
  assert.ok(html.includes('href="https://kasraghobrani.qzz.io'+route+'"'));
  for(const [,ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
   const url=new URL(ref,'https://example.test'+file);
   if(url.origin!=='https://example.test')continue;
   const dest=path.join(root,url.pathname.endsWith('/')?url.pathname+'index.html':url.pathname);
   assert.ok(fs.existsSync(dest),file+' -> '+ref);
  }
 }
 for(const name of ['about','research','contact']){
  assert.ok(fs.readFileSync(path.join(root,name+'.html'),'utf8').includes('data-redirect="/'+name+'/"'));
 }
});
