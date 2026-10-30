const fs=require('fs');
// Pairs reviewed against the full collected lesson texts, not title matching.
const pairs=[['296689','API-21-intro-mcp.md'],['296690','API-22-mcp-clients.md'],['296697','API-23-define-mcp-tools.md'],['296693','API-24-mcp-inspector.md'],['296696','API-25-mcp-client-implementation.md'],['296699','API-26-resources.md'],['296695','API-27-access-resources.md'],['296698','API-28-define-prompts.md'],['296692','API-29-client-prompts.md']];
const mappings=[];
for(const [id,file]of pairs){
 const record=JSON.parse(fs.readFileSync('sources/mcp-lessons/'+id+'.json','utf8'));
 const target='lessons/'+file;
 let text=fs.readFileSync(target,'utf8');
 if(!text.includes(record.url))text+='\n## Đối chiếu khóa MCP riêng\n\nĐã đọc và đối chiếu ['+record.lesson+']('+record.url+') trong Introduction to MCP. Các khái niệm chính của bài được tóm tắt tại đây; dùng cùng bộ câu hỏi để tránh học lặp. Nguồn đối chiếu: sources/mcp-lessons/'+id+'.json. Hai bản diễn đạt không hoàn toàn giống nhau; không tuyên bố là bản sao nguyên văn.\n';
 fs.writeFileSync(target,text);
 mappings.push({id,source:record.url,lesson:file,status:'concepts_reviewed_shared_summary'});
}
fs.writeFileSync('sources/mcp-reviewed-mappings.json',JSON.stringify(mappings,null,2));
console.log('Mapped '+mappings.length+' reviewed lesson pairs');
