const fs=require('fs');
const pairs=[['276731','API-04-prompt-evaluation.md'],['276732','API-05-eval-workflow.md'],['276733','API-06-test-datasets.md'],['276736','API-07-running-eval.md'],['276738','API-08-model-grading.md'],['276735','API-09-code-grading.md']];
const mappings=[];
for(const [id,file]of pairs){
 const source=JSON.parse(fs.readFileSync('sources/bedrock-lessons/'+id+'.json','utf8'));
 const path='lessons/'+file;let body=fs.readFileSync(path,'utf8');
 if(!body.includes(source.url)){body+='\n## Đối chiếu Bedrock\n\nĐã đọc và đối chiếu ['+source.lesson+']('+source.url+'), sources/bedrock-lessons/'+id+'.json. Dùng chung bản tóm tắt và câu hỏi về phương pháp eval vì các mục tiêu chính tương đương. Mã gọi provider vẫn cần adapter Converse phù hợp; ví dụ prefill/stop sequence và tên model không được coi là hỗ trợ hiện hành đã xác minh. Không tính lại một bộ câu hỏi mới cho cùng nội dung.\n';fs.writeFileSync(path,body);}
 mappings.push({id,url:source.url,lesson:file,review:'full_collected_text_read_and_concepts_compared'});
}
fs.writeFileSync('sources/bedrock-eval-mappings.json',JSON.stringify(mappings,null,2));
console.log('Mapped '+mappings.length+' reviewed evaluation lessons');
