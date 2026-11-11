# Truyền tiêu chí cho bộ chấm điểm

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287738), phụ đề tiếng Anh từ trình phát chính thức, sources/api-media/287738.json. Câu hỏi tự biên soạn, không phải đề thi thật.

## Nội dung bài học


Bài tập bổ sung tiêu chí cho từng trường hợp để mô hình chấm kết quả có căn cứ rõ hơn. Có hai thay đổi nối tiếp.

Trước hết, yêu cầu chương trình tạo dữ liệu sinh thêm trường `solution_criteria`, tức tiêu chí của lời giải, bên cạnh `task` và `format`. Sau đó, hàm `grade_by_model` phải nhận tiêu chí của đúng trường hợp, cùng nhiệm vụ gốc và câu trả lời cần chấm.

Cần tạo lại, lưu và dùng bộ dữ liệu mới khi chạy đánh giá. Nếu chỉ sửa mã tạo dữ liệu nhưng vẫn đọc tệp cũ, tiêu chí mới chưa thực sự đến được mô hình chấm. Hãy xem kết quả từng trường hợp và lời giải thích để biết tiêu chí được dùng ra sao.

Tiêu chí do AI tạo cũng cần rà soát. Nếu nó yêu cầu một điều không có trong nhiệm vụ, cần sửa trước khi chấm. Lời giải thích dài hơn hoặc điểm cao hơn chưa chứng minh việc chấm chính xác hơn.

Để so sánh đáng tin, dùng tiêu chí ổn định, đối chiếu với các mẫu đã được kiểm tra và giữ bộ kiểm thử độc lập. Không để câu trả lời đang được chấm tự tạo tiêu chí có lợi cho chính nó.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Generator đã thêm solution_criteria nhưng điểm chấm không đổi; job vẫn tải dataset từ đường dẫn cũ. Kiểm tra nào nên làm trước khi thay model grader?

A. Tăng số token của grader để nó tự suy ra các criteria còn thiếu.

B. Bỏ task gốc khỏi grader để buộc nó chú ý trường mới.

C. Kiểm tra dataset hiệu lực và criteria của từng case gửi chấm.

D. Thêm trọng số cho score để thay đổi được thể hiện rõ hơn.

**Câu 2 — Chọn hai.** Dataset sinh tự động chứa criteria bắt buộc lời giải dùng thư viện X, trong khi task cho phép mọi cách đúng. Hai bước nào giúp phép chấm đo đúng mục tiêu?

A. Loại khỏi báo cáo các ca không dùng X vì khác phong cách mẫu.

B. Đối chiếu grader với các đáp án đã kiểm tra, gồm lời giải đúng không dùng X.

C. Sửa mọi đáp án ứng viên để dùng X rồi công bố tỷ lệ đúng tăng.

D. Rà và sửa criteria theo yêu cầu nhiệm vụ trước khi dùng làm chuẩn.

**Câu 3 — Chọn một.** Sau khi thêm criteria, grader giải thích dài hơn và chấm trung bình từ 7 lên 9. Nhóm kết luận chất lượng sản phẩm tăng. Bằng chứng nào còn thiếu?

A. Xác nhận phần giải thích có nhiều từ kỹ thuật hơn baseline.

B. Đối chiếu nhãn chuẩn và đo trên tập giữ riêng.

C. Cho cùng grader tự đánh giá độ tin cậy của điểm vừa chấm.

D. Chuẩn hóa mọi score về thang 100 để thấy cải thiện rõ hơn.

**Câu 4 — Chọn một.** Mỗi câu trả lời ứng viên được yêu cầu tự tạo solution_criteria, rồi grader dùng chính criteria đó để chấm nó. Rủi ro chính và cách sửa phù hợp nhất?

A. Rubric có thể dài; cắt còn một câu do chính ứng viên đề xuất.

B. Chi phí hai lời gọi cao; gộp sinh đáp án và tự chấm vào một lần để tăng độ tin cậy.

C. Tiêu chí quá cụ thể; bỏ task và chỉ chấm tính trôi chảy để đồng nhất.

D. Tiêu chí có thể thích nghi có lợi cho ứng viên; dùng rubric gắn với task, được rà soát và cố định trước khi chấm.

**Câu 5 — Chọn hai.** Dataset đã có criteria đúng, nhưng sau bước shuffle, một số đáp án bị ghép tiêu chí của case khác. Hai thiết kế nào ngăn lỗi này và giúp phát hiện nó?

A. Kiểm tra mẫu payload và các ca đối chứng có tiêu chí khác biệt rõ.

B. Gắn task, criteria và answer theo case ID ổn định xuyên pipeline.

C. Tăng nhiệt độ grader để giảm ảnh hưởng của một criteria không phù hợp.

D. Chỉ so số lượng criteria và answers để khẳng định ánh xạ đúng.

## Đáp án và giải thích

1. **C.** A sai: Ngân sách đầu ra không truyền trường dữ liệu bị bỏ khỏi pipeline. B sai: Task gốc là căn cứ kiểm tra tiêu chí; bỏ nó làm mất ngữ cảnh quan trọng. C đúng: Thay generator chưa đủ nếu dữ liệu mới chưa đến bộ chấm. D sai: Đổi thang điểm không sửa việc grader chưa nhận tiêu chí.

2. **B, D.** A sai: Loại theo thuộc tính không được yêu cầu tạo thiên lệch và giấu lỗi chấm. B đúng: Ca đối chứng phát hiện grader trừng phạt cách giải hợp lệ vì rubric sai. C sai: Cách này đổi mục tiêu đánh giá theo lỗi rubric thay vì đo yêu cầu ban đầu. D đúng: Ràng buộc do generator thêm không được coi là yêu cầu gốc.

3. **B.** A sai: Tính chuyên môn của lời văn không là bằng chứng độ đúng của quyết định. B đúng: Điểm và văn phong của thước đo thay đổi không chứng minh sản phẩm tốt hơn. C sai: Tự xác nhận không cung cấp kiểm tra độc lập về độ đúng. D sai: Đổi đơn vị không xác nhận thước đo đã chính xác.

4. **D.** A sai: Rút ngắn không làm tiêu chí độc lập hoặc đúng yêu cầu hơn. B sai: Gộp request không loại xung đột của việc tự đặt tiêu chí. C sai: Tính trôi chảy không thay chất lượng đáp ứng nhiệm vụ. D đúng: Nhờ vậy các ứng viên được so theo cùng mục tiêu thay vì chuẩn do chính mình đặt.

5. **A, B.** A đúng: Quan sát trường hợp cụ thể phát hiện ghép nhầm mà điểm trung bình có thể che khuất. B đúng: Không phụ thuộc thứ tự hàng sau các bước sắp xếp hoặc xử lý song song. C sai: Biến thiên sinh không sửa liên kết dữ liệu giữa case và rubric. D sai: Hai danh sách cùng độ dài vẫn có thể ghép sai từng phần tử.

## Đối chiếu phụ đề chính thức

Phụ đề Bedrock xác nhận hai bước: thêm `solution_criteria` cho từng trường hợp, tạo lại bộ dữ liệu rồi truyền tiêu chí tương ứng vào `grade_by_model`. Điểm 9 hoặc lời giải thích dài hơn trong ví dụ chưa chứng minh mô hình chấm chính xác; vẫn cần kiểm tra tiêu chí và nhãn chuẩn. Dùng chung câu hỏi.

Nguồn đối chiếu: [Exercise on prompt evals](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276734). Bản lưu: `sources/bedrock-media/276734.json`.

## Đối chiếu phụ đề chính thức

Hồ sơ phụ đề Vertex cũng xác nhận tạo tiêu chí riêng cho từng trường hợp, sinh lại dữ liệu và gửi đúng tiêu chí cho bộ chấm. Điểm hoặc lời giải thích trong minh họa không phải bằng chứng chất lượng đã được hiệu chỉnh. Dùng chung câu hỏi.

Nguồn đối chiếu: [Exercise on prompt evals](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289164). Bản lưu: `sources/vertex-media/289164.json`.
