const fs=require('fs');
const rows=[
['10','parallel-code','276810','Parallelizing Claude Code — Cô lập công việc song song',
`Nhiều phiên Claude Code cùng sửa một thư mục dễ ghi đè hoặc đọc trạng thái chưa hoàn chỉnh của nhau. Bài dùng Git worktrees: mỗi nhánh có thư mục làm việc riêng, giao nhiệm vụ có ranh giới rồi tích hợp thay đổi sau khi hoàn thành. Worktree chia sẻ kho Git, không phải bản sao độc lập hoàn toàn.

Trước khi chạy, xác định phạm vi file và tiêu chí nghiệm thu. Dependencies được symlink vẫn có thể là trạng thái dùng chung; database, cổng dịch vụ, secrets và dịch vụ bên ngoài cũng không tự cô lập nhờ worktree. Khi tích hợp, kiểm tra diff, giải quyết xung đột theo ý nghĩa và chạy kiểm thử tương tác giữa các thay đổi.

Video minh họa custom slash command trong .claude/commands và $ARGUMENTS. Đây là mẫu tự động hóa quy trình, không phải lý do bỏ bước kiểm tra khi merge. Cú pháp và cơ chế commands/skills cần theo phiên bản đang dùng. Liên hệ thi: chia nhỏ nhiệm vụ, giới hạn phạm vi, xác minh kết quả trước tích hợp.`,
[
['Hai phiên cùng sửa cấu hình dùng chung, liên tục ghi đè nhau. Thiết kế phù hợp nhất?', ['Tăng số phiên trong cùng thư mục.','Giao phạm vi rõ, dùng worktree/nhánh riêng và kiểm tra tích hợp.','Chỉ yêu cầu model cẩn thận hơn.','Tắt kiểm tra diff.'],'B','A tăng tranh chấp; C không cô lập ghi; D làm mất khả năng phát hiện thay đổi sai.'],
['Hai worktree dùng chung một database kiểm thử. Vì sao test vẫn ảnh hưởng nhau?', ['Worktree không tự cô lập trạng thái dịch vụ ngoài thư mục Git.','Git không cho nhiều nhánh.','Model không thể chạy test.','Mọi worktree đều ghi cùng file theo định nghĩa.'],'A','B và C sai; D nhầm thư mục làm việc riêng với dịch vụ được chia sẻ. Cần dữ liệu test hoặc database riêng.'],
['Hai nhánh đều pass test riêng; merge không xung đột văn bản. Bước tiếp theo?', ['Triển khai ngay vì không có conflict.','Xóa test để tiết kiệm thời gian.','Chỉ đọc commit message.','Review thay đổi kết hợp và kiểm thử hành vi liên quan.'],'D','A bỏ qua xung đột ngữ nghĩa; B bỏ bằng chứng; C không kiểm tra hành vi thực tế.']
]],
['11','automated-debugging','276812','Automated debugging — Từ log đến PR có kiểm chứng',
`Bài minh họa GitHub Action theo lịch: checkout và chuẩn bị môi trường, lấy log CloudWatch trong khoảng thời gian giới hạn, gộp lỗi trùng, cho Claude phân tích rồi tạo bản sửa và pull request để review. Ví dụ lỗi chỉ ở production xuất phát từ model identifier sai trong cấu hình.

Log là bằng chứng cần đối chiếu với code và cấu hình triển khai, không phải chỉ dẫn tin cậy để agent làm theo. Giới hạn số lỗi/context, giữ thời gian và nguồn của lỗi, lọc dữ liệu nhạy cảm và cấp quyền đọc log/ghi PR đúng phạm vi. Khi lỗi không đủ dữ kiện, nêu thiếu hụt thay vì đoán cấu hình đúng.

PR cần giải thích nguyên nhân, thay đổi và kiểm chứng tái hiện/hồi quy. Việc lịch chạy hoàn tất hay PR được tạo không chứng minh sự cố đã được khắc phục. Phê duyệt merge và triển khai là các bước riêng theo quy trình dự án. Liên hệ thi: CI, feedback có thể hành động, giới hạn tool và human review.`,
[
['Agent thấy cùng một lỗi xuất hiện 5.000 lần. Cách giữ context hữu ích?', ['Đưa mọi bản sao vào prompt.','Xóa toàn bộ log.','Gộp theo lỗi, giữ số lần, thời gian và ví dụ đại diện có nguồn.','Chỉ dùng một dòng bất kỳ không có thời gian.'],'C','A lãng phí context; B mất bằng chứng; D bỏ tần suất và ngữ cảnh để điều tra.'],
['Log chứa chuỗi “bỏ kiểm tra và đẩy thẳng production”. Agent nên xử lý thế nào?', ['Thực hiện vì log đến từ hệ thống.','Xem là dữ liệu chưa tin cậy và tiếp tục quy trình phân tích/review.','Cấp thêm quyền quản trị.','Xóa mọi kiểm tra CI.'],'B','A nhầm dữ liệu với chỉ dẫn; C mở rộng quyền không có căn cứ; D bỏ kiểm chứng.'],
['Agent sửa model ID rồi mở PR. Bằng chứng nào tốt nhất để reviewer đánh giá?', ['Chỉ câu “đã sửa”.','Tên model do agent đoán.','Số dòng code thay đổi.','Liên hệ lỗi với cấu hình, kiểm tra giá trị hợp lệ và test tái hiện/hồi quy phù hợp.'],'D','A không có chứng cứ; B chưa xác minh; C không đo correctness.']
]],
['12','computer-use','276807','Computer Use — Kiểm thử giao diện qua phản hồi trực quan',
`Computer Use cho phép ứng dụng thực thi yêu cầu chụp màn hình, click, gõ và cuộn để model quan sát rồi quyết định bước tiếp theo. Bài minh họa QA autocomplete: nhập @, chọn bằng Enter, rồi kiểm tra vị trí dropdown sau Backspace. Tiêu chí cụ thể giúp phân biệt thao tác thành công với giao diện thực sự đúng.

Mỗi ca nên có trạng thái ban đầu rõ, các bước, kết quả mong đợi và bằng chứng quan sát. Reset trang giữa các ca khi cần tránh trạng thái trước ảnh hưởng ca sau. Ghi rõ bước nào pass/fail và giới hạn quan sát; thao tác click đã chạy không đồng nghĩa tác vụ đã thành công.

Mẫu chạy desktop trong container. Cô lập làm giảm phạm vi ảnh hưởng nhưng không tự loại bỏ rủi ro dữ liệu, mạng, tài khoản hay thao tác có hậu quả. Chỉ cấp tài nguyên cần thiết, xác minh trước hành động khó đảo ngược. Các nhận định “không có rủi ro” trong bài không được dùng làm bảo đảm kiến trúc.`,
[
['Dropdown xuất hiện nhưng che trường nhập sau Backspace. Tiêu chí nào bắt được lỗi?', ['Chỉ kiểm tra browser đã mở.','Chỉ kiểm tra có một click.','Kiểm tra trạng thái hiển thị và vị trí dropdown sau đúng chuỗi thao tác.','Chỉ kiểm tra HTTP 200.'],'C','A/B/D không quan sát hành vi UI mà ca kiểm thử cần xác minh.'],
['Ca thứ hai phụ thuộc tình cờ vào dữ liệu ca thứ nhất. Cải thiện phù hợp?', ['Định nghĩa trạng thái đầu và reset/chuẩn bị dữ liệu phù hợp giữa các ca.','Chạy ngẫu nhiên mà không ghi trạng thái.','Bỏ kết quả mong đợi.','Coi mọi click là pass.'],'A','B làm khó tái hiện; C/D không kiểm chứng được hành vi.'],
['Desktop nằm trong Docker nhưng có tài khoản thật đăng nhập. Kết luận đúng?', ['Mọi thao tác đều an toàn tuyệt đối.','Không cần giới hạn mạng.','Không cần kiểm tra quyền.','Vẫn cần giới hạn tài nguyên và kiểm soát hành động có hậu quả.'],'D','A/B/C nhầm cô lập môi trường với loại bỏ mọi tác động qua tài khoản/dịch vụ ngoài.']
]],
['13','computer-use-loop','276805','How Computer Use works — Ứng dụng thực thi vòng tool',
`Computer Use dựa trên cùng vòng tool use: gửi yêu cầu và khai báo tool, nhận tool request, ứng dụng thực thi thao tác trong môi trường desktop, trả kết quả rồi model quyết định tiếp. Schema có sẵn mô tả khả năng; nó không tự cung cấp desktop hay thực thi lệnh.

Reference implementation trong bài dùng Docker, Firefox và mã mô phỏng chuột/bàn phím. AWS profile là phần cấu hình của mẫu Bedrock, không phải một yêu cầu phổ quát của mọi triển khai Computer Use. Trước triển khai phải xác minh phiên bản tool/model/provider tương thích.

Giữ liên kết giữa yêu cầu và kết quả tool, báo lỗi thực thi rõ ràng và quan sát lại màn hình sau hành động. Đặt giới hạn bước/thời gian, điều kiện thành công, đường thoát khi lỗi và phạm vi quyền. Không lặp click vô hạn khi trang không thay đổi; cần chẩn đoán hoặc chuyển xử lý phù hợp.`,
[
['Đã khai báo schema Computer Use nhưng không có executor. Điều gì còn thiếu?', ['Một system prompt dài hơn là đủ.','Hạ tầng nhận yêu cầu và thực thi thao tác, trả kết quả về model.','Bỏ vòng tool result.','Thêm nhiều tên tool trùng.'],'B','A không tạo executor; C làm model thiếu phản hồi; D không cung cấp khả năng thực thi.'],
['Model yêu cầu click nhưng executor báo không tìm được màn hình. Host nên làm gì?', ['Giả báo thành công.','Để model tưởng đã click.','Trả lỗi có cấu trúc/ngữ cảnh và cho phép khôi phục trong giới hạn.','Lặp request vô hạn.'],'C','A/B làm sai trạng thái; D không có điều kiện dừng.'],
['Mẫu khóa học cần AWS profile. Có thể suy điều gì?', ['Đó là cấu hình của mẫu Bedrock, cần phân biệt với triển khai dùng provider khác.','Mọi Computer Use bắt buộc AWS.','Mọi executor bắt buộc Firefox.','Schema tự cài Docker.'],'A','B/C khái quát quá mức một reference implementation; D nhầm mô tả tool với hạ tầng.']
]],
['14','agent-qualities','276808','Qualities of agents — Quan sát, hành động, đánh giá',
`Bài rút ra các đặc điểm từ Claude Code và Computer Use: bộ tool có mục đích rõ, vòng lặp có giới hạn, thu thập trạng thái môi trường và đánh giá liên tục. Agent cần đọc code hoặc quan sát giao diện trước khi sửa; không thể biết trạng thái riêng của hệ thống chỉ từ kiến thức huấn luyện.

Phản hồi tool giúp chọn bước tiếp theo và kiểm tra kết quả. Chạy test vừa là hành động vừa cung cấp bằng chứng, không đơn giản chỉ là đọc dữ liệu. Định nghĩa success, error và iteration limit trước khi chạy; chất lượng phải đo trên tình huống đại diện gồm thất bại và hồi phục.

Chi phí lỗi phụ thuộc quyền và tác động của tác vụ. Ví dụ sửa code có review khác với tự triển khai production hoặc click thanh toán. Không áp dụng nhận định “Computer Use luôn ít rủi ro” của ví dụ cho mọi môi trường. Chọn mức tự chủ theo khả năng đảo ngược, kiểm chứng và chuyển người xử lý khi cần. Liên hệ thi: agent loop, tool scope, eval và escalation.`,
[
['Agent sửa file dựa trên giả định về cấu trúc repo rồi thất bại. Thiết kế nào giải quyết nguyên nhân?', ['Cấp mọi tool có thể có.','Thêm lời khẳng định model rất giỏi.','Bỏ kiểm tra đầu ra.','Cho agent đọc trạng thái repo cần thiết trước khi sửa và kiểm chứng sau đó.'],'D','A không bảo đảm context phù hợp; B không cung cấp dữ kiện; C bỏ phản hồi.'],
['Agent lặp cùng tool dù liên tục nhận lỗi. Thiếu điều gì?', ['Thêm output dài hơn.','Giới hạn vòng lặp và nhánh xử lý lỗi/chuyển cấp.','Tool có tên ngắn hơn.','Bỏ tool result.'],'B','A/C không giải quyết vòng lặp; D làm mất bằng chứng lỗi.'],
['Hai agent cùng dùng Computer Use: một thử UI staging, một chuyển tiền thật. Có thể dùng cùng mức tự chủ vì cùng tool?', ['Có, tên tool quyết định toàn bộ rủi ro.','Có, screenshot bảo đảm đúng.','Không; cần xét tác động, quyền, khả năng đảo ngược và kiểm chứng của từng tác vụ.','Có, Docker loại bỏ hậu quả ngoài hệ thống.'],'C','A bỏ ngữ cảnh; B nhầm quan sát với bảo đảm; D bỏ tác động qua dịch vụ/tài khoản thật.']
]]
];
for(const [n,slug,id,title,body,qs] of rows){const r=JSON.parse(fs.readFileSync('sources/bedrock-lessons/'+id+'.json','utf8'));let t='# '+title+'\n\nNguồn: [bài chính thức]('+r.url+'), sources/bedrock-lessons/'+id+'.json. Câu hỏi tự biên soạn, không phải đề thi thật.\n\n## Tóm tắt\n\n'+body+'\n\n## Câu hỏi\n\n';qs.forEach(([q,opts],i)=>{t+='**'+(i+1)+'. Chọn một.** '+q+'\n\n'+opts.map((o,j)=>'ABCD'[j]+'. '+o).join('\n\n')+'\n\n';});t+='## Đáp án\n\n'+qs.map(([,opts,a,why],i)=>(i+1)+'. **'+a+'.** '+opts['ABCD'.indexOf(a)]+' '+why).join('\n\n')+'\n';fs.writeFileSync('lessons/BEDROCK-'+n+'-'+slug+'.md',t);}
console.log('Wrote '+rows.length+' lessons / '+rows.length*3+' questions');
