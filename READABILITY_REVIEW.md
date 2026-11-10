# Rà soát cách diễn đạt bài học

## Mục tiêu và tiêu chí

Rà soát toàn bộ 142 bài trong `lessons/`. Viết lại những phần nội dung còn khó hiểu với người Việt mới học, theo cách diễn đạt của bài “Khả năng và giới hạn” đã được người dùng cung cấp.

- Giải thích thuật ngữ khi xuất hiện; giữ tên kỹ thuật để người học tra cứu.
- Tách câu chứa nhiều ý; nêu rõ chủ thể thực hiện và thứ tự xử lý.
- Dùng ví dụ cụ thể khi giúp hiểu khái niệm.
- Giữ ý kỹ thuật, điều kiện áp dụng và lưu ý về phạm vi của ví dụ.
- Giữ nguồn, ghi công và giấy phép. Đối chiếu câu hỏi với nội dung mới; sửa câu dịch khó hiểu khi cần, không đổi đáp án đúng.
- Đây là rà soát cách diễn đạt từ tài liệu trong dự án, không phải xác minh lại tính năng sản phẩm hiện hành.

## Tiến độ

Đã hoàn tất rà soát 142/142 bài và các ghi chú đối chiếu nguồn trong 80 bài có phần này. Không còn bài chờ xử lý.

Phần nội dung chính của 139 bài khác bản gốc trong Git: gồm bài FLUENCY-05 đã sửa theo nội dung người dùng và 138 bài viết lại trong nhiệm vụ này. Giữ phần nội dung chính của API-01, API-45 và EXAM-14 vì đã có định nghĩa dễ hiểu, diễn giải từng bước và ví dụ rõ. Các ghi chú nguồn của API-01 và API-45 vẫn được cải thiện trong lượt rà soát cuối.

| Nhóm | Đã rà soát | Kết quả |
| --- | --- | --- |
| FLUENCY-01 đến FLUENCY-14 | 14/14 | Bài 05 đã sửa theo nội dung người dùng; viết lại phần bài học của 13 bài còn lại, giải nghĩa 4D và thêm ví dụ. |
| CLAUDE101-01 đến CLAUDE101-13 | 13/13 | Viết lại phần bài học, giải thích tính năng và phân biệt dữ liệu, hướng dẫn, quyền truy cập. |
| CODE-01 đến CODE-09 | 9/9 | Viết lại phần bài học, làm rõ thuật ngữ và trách nhiệm kiểm chứng. Sửa câu hỏi 2, lựa chọn A câu 3 và giải thích đáp án 2 của CODE-06 để bỏ câu dịch chồng từ; giữ đáp án. |
| API-01 đến API-09 | 9/9 | Giữ API-01 vì đã có giải thích từng bước và ví dụ rõ. Viết lại phần bài học của API-02 đến API-09, gồm phần thực hành trước câu hỏi ở API-02. |
| API-10 đến API-72 | 63/63 | Giữ API-45 vì phần giải thích embedding đã rõ. Viết lại 62 bài còn lại: giải thích thuật ngữ, luồng công cụ/MCP, cách đánh giá và các giới hạn của ví dụ. |
| BEDROCK | 14/14 | Viết lại phần nội dung chính, làm rõ vai trò nhà cung cấp, thực thi, dữ liệu và giới hạn của ví dụ. |
| EXAM | 18/18 | Giữ EXAM-14 vì đã giải thích từng bước. Viết lại 17 bài còn lại, giữ các điều kiện và phân biệt kỹ thuật cần cho câu hỏi tình huống. |
| MCP | 1/1 | Viết lại MCP-01: giải nghĩa ba thành phần, bên chủ động lựa chọn và quyền thực thi. |
| VERTEX | 1/1 | Viết lại VERTEX-01: phân biệt đăng nhập CLI, danh tính ứng dụng, dự án, vùng và quyền. |

## Rà soát cuối và kiểm chứng

- Đã đọc và viết lại ghi chú đối chiếu của cả 80 bài có phụ lục: tách giải thích khỏi danh sách nguồn, diễn giải thuật ngữ, giữ phân biệt văn bản bài học, ghi chú chính thức, phụ đề và bằng chứng kiểm tra trực quan. Không biến việc chỉnh câu chữ thành tuyên bố mới về xác minh nguồn hoặc tính năng hiện hành.
- Đã sửa các tiêu đề đối chiếu bị dịch chồng từ, đổi tiêu đề MCP-01 sang tiếng Việt rõ nghĩa và đồng bộ mục lục. Sửa một số câu hỏi, lựa chọn hoặc lời giải bị trộn ngôn ngữ, lặp từ hay dính số: CODE-06, API-29, API-51, API-52, API-61, BEDROCK-04, BEDROCK-07, EXAM-06, EXAM-16 và EXAM-17. Không thay đáp án đúng.
- Kiểm tra toàn bộ 142 bài: giữ nguyên nguồn và ghi công ở đầu bài, tập đường dẫn web và tệp nguồn của từng bài; giữ đủ 426 câu hỏi, mỗi câu đủ bốn lựa chọn và đúng loại chọn một/chọn nhiều. Tất cả đáp án khớp bản gốc. Nội dung bài học và ghi chú đều đọc được thành HTML.
- Danh sách đã rà soát khớp chính xác toàn bộ 142 mã bài, không trùng và không thiếu; danh sách ghi chú khớp cả 80 bài có phần này. Các phần giữ nguyên đã được đánh giá về độ dễ hiểu, không chỉ bỏ qua vì kiểm thử đạt.
- Bộ kiểm thử `node --test study-web/study.test.cjs` đạt 5/5. `git diff --check` không phát hiện lỗi khoảng trắng. Kiểm tra không thấy ký tự lỗi mã hóa hoặc dấu tạm dùng khi biên tập.
- Không sửa `package-lock.json`: đây là thay đổi đã có trước nhiệm vụ.
