const fs=require('fs');
const rows=[
['69','system-exercise','287724','System prompts exercise — Vai trò và tính súc tích',
`Bài yêu cầu tạo hàm Python kiểm tra ký tự trùng trong một chuỗi. Đầu ra ban đầu có nhiều code, comment và giải thích. Người học thêm system prompt gán vai trò kỹ sư Python viết code súc tích rồi so sánh kết quả, giữ nguyên yêu cầu chức năng.

Điểm cần hiểu là hướng dẫn thường trực về vai trò/phong cách có thể ảnh hưởng cách trả lời. “Súc tích hơn” không tự chứng minh code đúng hoặc tốt hơn ở mọi tiêu chí: vẫn kiểm tra hành vi với chuỗi rỗng, ký tự lặp, phân biệt hoa/thường và yêu cầu thực của ứng dụng. Không tối ưu số dòng bằng cách bỏ validation hay đổi semantics.

Liên hệ Architect: chọn nơi đặt hướng dẫn và đo hiệu quả; role prompt là hướng dẫn cho model, không là cơ chế cưỡng chế code thực thi. Không suy một lần demo ngắn hơn thành bảo đảm đầu ra luôn có đúng định dạng.`,
[
['Đã thêm role “kỹ sư Python viết code súc tích” và code ngắn hơn. Bằng chứng nào còn cần trước khi chấp nhận?', ['Không cần gì vì ngắn hơn luôn tốt hơn.','Chỉ đếm số token đầu ra.','Kiểm tra chức năng/edge cases và yêu cầu ban đầu vẫn được đáp ứng.','Chỉ tăng confidence model.'],'C','A/B chỉ đo độ dài; D không xác minh hành vi.'],
['Tính súc tích là yêu cầu chung qua nhiều lượt, còn tác vụ cụ thể thay đổi. Trong mẫu bài, đặt ở đâu?', ['System prompt được wrapper truyền đúng vào request.','Chỉ trong câu trả lời cũ không gửi lại.','Trong tên biến của client.','Chỉ ở comment Python không đưa vào context.'],'A','B/C/D không cung cấp hướng dẫn thường trực cho request theo cách mẫu triển khai.'],
['Code rút gọn bắt đầu coi “A” và “a” là cùng ký tự dù yêu cầu chưa nói vậy. Đánh giá phù hợp?', ['Chấp nhận vì ít dòng hơn.','Thêm thật nhiều từ concise.','Bỏ ca chữ hoa khỏi eval.','Làm rõ semantics và kiểm thử; thay đổi phong cách không được âm thầm đổi yêu cầu.'],'D','A bỏ correctness; B không xác định semantics; C làm yếu phép đo.']
]],
['70','structured-exercise','287729','Structured data exercise — Prefill, delimiter và giới hạn bảo đảm',
`Yêu cầu bài tập là giữ nguyên prompt sinh ba lệnh AWS CLI, chỉ chỉnh assistant prefill và stop sequences để đầu ra có cả ba lệnh trong một khối, không giải thích/comment. Đây là bài về điều khiển định dạng, không thực thi các lệnh.

Prefill chỉ có ba backticks có thể khiến phần text mới bắt đầu bằng nhãn ngôn ngữ bash. Thêm bash vào phần prefill giải quyết nhãn đó, nhưng model vẫn có thể tách nhiều code blocks hoặc thêm comment shell. Video bổ sung câu dẫn trong prefill nêu cả ba lệnh ở một khối không comment, rồi mở code fence bash; stop ở fence đóng.

Stop marker có thể chặn ngay sau lệnh đầu nếu model tạo nhiều blocks. Prefill/stop trong video là kỹ thuật theo model/phiên bản; kiểm tra khả năng hỗ trợ và validation đầu ra thực. Không coi định dạng sạch là bằng chứng lệnh đúng, an toàn hoặc được phép chạy; extraction/schema khi cần vẫn phải theo contract được hỗ trợ.`,
[
['Prefill chỉ mở code fence, phần sinh bắt đầu bằng từ bash ngoài mong muốn. Vì sao?', ['Model luôn bỏ qua prefill.','Model đang hoàn thiện nhãn ngôn ngữ của code fence.','API đã thực thi lệnh bash.','Stop sequence tự thêm chữ bash.'],'B','A không đúng hiện tượng; C nhầm sinh với thực thi; D không phải vai trò stop marker.'],
['Stop ở fence đóng nhưng chỉ nhận một trong ba lệnh. Nguyên nhân sát ví dụ?', ['Model không hỗ trợ số ba.','Response luôn bị cắt vì mạng.','Không thể có nhiều code blocks trong Markdown.','Model định viết mỗi lệnh trong một block; marker đầu tiên đã kết thúc generation.'],'D','A/B không có bằng chứng; C sai về Markdown.'],
['Đầu ra có đủ ba dòng lệnh và không comment. Có thể tự động chạy ngay không?', ['Chưa; cần kiểm tra nội dung, quyền và tác động, định dạng không chứng minh tính đúng.','Có, mọi lệnh do model sinh đều an toàn.','Có, prefill là cơ chế cấp quyền.','Có, stop sequence validate AWS parameters.'],'A','B suy rộng sai; C/D gán cho kỹ thuật định dạng khả năng authorization/validation không có.']
]],
['71','eval-exercise','287738','Exercise on prompt evals — Truyền tiêu chí cho grader',
`Bài cải thiện model grader bằng hai thay đổi nối tiếp. Trước hết, prompt tạo dataset sinh thêm solution_criteria cho từng test case ngoài task/format. Sau đó, prompt grade_by_model nhận tiêu chí của đúng test case cùng tác vụ gốc và output cần chấm.

Phải tái sinh/lưu dataset rồi chạy lại pipeline để criteria mới thực sự đi vào grader; chỉ sửa file generator mà vẫn dùng dataset cũ không tạo thêm context. Xem kết quả từng ca và lời giải thích để biết tiêu chí được áp dụng, không chỉ nhìn điểm trung bình.

Criteria sinh bằng model cần review về độ đúng, liên quan và khả năng đo. Grader giải thích dài hơn hay cho điểm cao hơn không chứng minh chất lượng tăng. So sánh trên tiêu chí ổn định có nhãn/kiểm tra phù hợp và giữ tập test độc lập; tránh để output đang chấm tự quyết định rubric có lợi cho chính nó.`,
[
['Đã thêm solution_criteria vào generator nhưng grader không đổi. Bước kiểm tra trực tiếp nhất?', ['Tăng max_tokens cho mọi ca.','Chỉ đổi tên trường score.','Kiểm tra dataset thực dùng có criteria và prompt grader đã nhận criteria đúng test case.','Bỏ task gốc khỏi grader.'],'C','A/B không sửa luồng dữ liệu; D làm mất tiêu chí nhiệm vụ.'],
['Model sinh rubric có một yêu cầu không tồn tại trong task. Xử lý phù hợp?', ['Coi mọi tiêu chí sinh ra là chuẩn vàng.','Review/sửa rubric theo task và kiểm tra nhãn trước khi dùng chấm.','Ép output thêm điều không được yêu cầu để tăng điểm.','Chỉ bỏ ca điểm thấp khỏi report.'],'B','A bỏ kiểm chứng; C đổi mục tiêu; D thiên lệch phép đo.'],
['Sau khi truyền criteria, reasoning của grader dài hơn. Có thể kết luận gì?', ['Accuracy của sản phẩm chắc chắn tăng.','Mọi điểm9 đều đúng.','Không cần human/code checks nữa.','Grader có thêm context; độ đúng của chấm vẫn cần đối chiếu và đo.'],'D','A/B/C nhầm thay đổi hình thức phản hồi với bằng chứng chất lượng.']
]],
['72','prompting-exercise','287748','Exercise on prompting — Trích chủ đề theo output contract',
`Bài dùng một đoạn văn từ bài nghiên cứu làm input content, yêu cầu trích các chủ đề thành JSON array of strings. Người học chạy baseline, xem report.html và tìm nhóm lỗi; trong ví dụ, output không đúng cấu trúc mong muốn là nguyên nhân rõ đầu tiên.

Sửa prompt bằng câu đầu trực tiếp nêu hành động, nguồn và định dạng; bọc content bằng XML tags để phân ranh; thêm các bước xác định chủ đề, đưa vào array và chỉ trả array. Few-shot có thể bổ sung nếu ca khó cần minh họa. Các điểm2.8/9.5 trong video thuộc dataset/rubric demo, không là benchmark hay bằng chứng sẵn sàng production.

Ngoài JSON parse/type validation, cần kiểm tra coverage và grounding: topic phải có trong nguồn, không thêm chủ đề chỉ vì liên tưởng; cũng không bỏ chủ đề quan trọng dù format hợp lệ. XML giúp tổ chức prompt nhưng không tự tạo ranh giới tin cậy. Đo lại trên dữ liệu mới/holdout để tránh chỉ học theo bộ phát triển.`,
[
['Baseline có lời giải thích và danh sách bullet thay JSON array. Thay đổi đầu tiên sát bài nhất?', ['Nêu rõ trích chủ đề được đề cập thành JSON array of strings, rồi kiểm tra output.','Chỉ thêm câu hãy thông minh.','Chỉ tăng temperature.','Chấp nhận mọi text có vẻ liên quan.'],'A','B/C không xác định contract; D bỏ yêu cầu downstream.'],
['Output parse được nhưng có thêm topic không được đoạn văn đề cập. Loại lỗi chính?', ['Chắc chắn là cú pháp JSON.','Không có lỗi vì đúng kiểu array.','Lỗi grounding/ngữ nghĩa; kiểm tra từng topic với nguồn.','Chỉ là khác thụt dòng.'],'C','A/D nhầm cấu trúc với nội dung; B bỏ yêu cầu dựa trên nguồn.'],
['Một lần chạy demo đạt9.5 sau sửa prompt. Bước phù hợp trước khi kết luận hiệu quả tổng quát?', ['Bỏ mọi test khó.','Coi9.5là xác suất đỗ thi.','Dùng output đang chấm làm đáp án chuẩn.','Kiểm tra lỗi theo nhóm và đánh giá dữ liệu mới với rubric phù hợp.'],'D','A gây thiên lệch; B không có quy đổi; C tạo vòng tự xác nhận.']
]]
];
for(const [n,slug,id,title,body,qs]of rows){const r=JSON.parse(fs.readFileSync('sources/api-media/'+id+'.json','utf8'));let t='# '+title+'\n\nNguồn: [bài chính thức]('+r.url+'), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/'+id+'.json. Câu hỏi tự biên soạn, không phải đề thi thật.\n\n## Tóm tắt\n\n'+body+'\n\n## Câu hỏi\n\n';qs.forEach(([q,opts],i)=>t+='**'+(i+1)+'. Chọn một.** '+q+'\n\n'+opts.map((o,j)=>'ABCD'[j]+'. '+o).join('\n\n')+'\n\n');t+='## Đáp án\n\n'+qs.map(([,opts,a,why],i)=>(i+1)+'. **'+a+'.** '+opts['ABCD'.indexOf(a)]+' '+why).join('\n\n')+'\n';fs.writeFileSync('lessons/API-'+n+'-'+slug+'.md',t);}
console.log('Wrote4lessons/12questions');
