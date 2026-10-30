const fs=require('fs');
let changed=0;
for(const name of fs.readdirSync('lessons').filter(x=>x.endsWith('.md')&&x!=='README.md')){
 const path='lessons/'+name;const text=fs.readFileSync(path,'utf8');
 const formatted=text.replace(/\n(?=[A-D]\. )/g,'\n\n').replace(/\n{3,}/g,'\n\n');
 if(formatted!==text){fs.writeFileSync(path,formatted);changed++;}
}
console.log('Formatted options in '+changed+' lesson files');
