import fs from 'node:fs';
import {getDocument} from 'pdfjs-dist/legacy/build/pdf.mjs';
const doc=await getDocument({data:new Uint8Array(fs.readFileSync('sources/architect-exam-guide.pdf')),useSystemFonts:true}).promise;
const pages=[];
for(let n=1;n<=doc.numPages;n++){
 const page=await doc.getPage(n);
 const content=await page.getTextContent();
 pages.push({page:n,text:content.items.map(x=>x.str+(x.hasEOL?'\n':' ')).join('')});
}
fs.writeFileSync('sources/architect-exam-guide-text.json',JSON.stringify(pages,null,2));
for(const p of pages)console.log('\nPAGE '+p.page+'\n'+p.text);
