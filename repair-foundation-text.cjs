const fs=require('fs');
for(const key of ['claude101','fluency']){
 const dir='sources/'+key+'-lessons';
 if(!fs.existsSync(dir))continue;
 for(const name of fs.readdirSync(dir).filter(x=>x.endsWith('.json'))){
  const file=dir+'/'+name;const r=JSON.parse(fs.readFileSync(file,'utf8'));
  r.mainText=r.text;r.extractionMethod='full_page_text_preserved';
  fs.writeFileSync(file,JSON.stringify(r,null,2));
 }
}
console.log('Restored full foundation lesson text; retained original collection metadata');
