# Ba cách cộng tác

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/ai-fluency-framework-foundations/291870), sources/fluency-lessons/291870.json. Tóm tắt tiếng Việt và câu hỏi tự biên soạn từ văn bản bài học.

Ghi công: Rick Dakan, Joseph Feller và Anthropic (2025), AI Fluency: Framework & Foundations; bản gốc và phần chuyển thể bài này theo [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Đây là bản rút gọn/chuyển ngữ, có ví dụ và câu hỏi mới.

## Nội dung bài học


Có ba cách chính để làm việc cùng AI. Bạn chọn cách phù hợp với từng phần công việc, dựa trên mục tiêu và mức giám sát cần thiết.

- Tự động hóa (Automation): giao AI một nhiệm vụ cụ thể theo chỉ dẫn, chẳng hạn tóm tắt văn bản thành năm ý chính.
- Cùng làm và cải thiện (Augmentation): bạn và AI trao đổi để phát triển kết quả. Ví dụ: AI đề xuất ba cách viết phần mở đầu, bạn nhận xét, rồi AI chỉnh lại.
- Giao quyền thực hiện (Agency): cho phép AI chủ động xử lý công việc thay bạn trong phạm vi đã xác định. Ví dụ: AI theo dõi một nguồn dữ liệu và tự chuẩn bị báo cáo định kỳ theo quy tắc bạn đặt ra.

Điểm khác nhau nằm ở cách chia việc và mức tự chủ của AI, không chỉ ở số câu yêu cầu bạn gửi. Một dự án có thể kết hợp cả ba cách. Dù AI làm việc độc lập đến đâu, người dùng vẫn cần đánh giá kết quả và chịu trách nhiệm khi sử dụng.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Một dự án gồm tóm tắt theo mẫu, cùng biên tập thông điệp và theo dõi nguồn để tự chuẩn bị báo cáo định kỳ. Cách phân loại nào phản ánh đúng sự khác biệt?

A. Cả ba là agency vì đều dùng chung một mô hình.

B. Automation, augmentation, agency: xét nhiệm vụ và mức tự chủ.

C. Cả ba là augmentation nếu người dùng xem kết quả cuối.

D. Phân loại theo số lượt chat: một lượt automation, nhiều lượt agency.

**Câu 2 — Chọn một.** Nhóm muốn AI theo dõi nguồn và soạn báo cáo định kỳ, nhưng mọi thông báo ra khách hàng phải có người duyệt. Thiết kế nào giữ đúng phạm vi agency?

A. Cho AI theo dõi và soạn, đặt bước duyệt trước khi gửi ra ngoài.

B. Cho AI tự gửi khi báo cáo có cùng cấu trúc mẫu đã duyệt.

C. Giữ quyền gửi cho AI nhưng yêu cầu xin lỗi nếu nội dung sai.

D. Chuyển mọi hoạt động thành chat thủ công vì agency không thể có giám sát.

**Câu 3 — Chọn hai.** Trong cùng dự án, hai tình huống nào thể hiện augmentation rõ nhất?

A. AI nhận lệnh chuyển 100 bản ghi sang một định dạng cố định rồi trả kết quả.

B. Người chọn một trong ba hướng AI đề xuất, nêu phản hồi để cùng phát triển bản tiếp theo.

C. AI tự theo dõi một nguồn và lập báo cáo theo lịch đã đặt.

D. Người và AI lần lượt thử cách giải thích, kiểm tra với mục tiêu và điều chỉnh lập luận.

**Câu 4 — Chọn một.** Một workflow gọi AI năm lần tự động theo các bước cố định, không cho AI chọn thêm nhiệm vụ. Vì sao chưa thể gọi đó là agency chỉ từ số lần gọi?

A. Vì agency bắt buộc phải dùng nhiều mô hình khác nhau.

B. Vì mỗi lần gọi phải có con người nhập prompt mới.

C. Kiểu cộng tác do phân công và mức chủ động quyết định.

D. Vì automation chỉ được dùng cho nhiệm vụ viết văn bản.

**Câu 5 — Chọn hai.** Nhóm tăng mức tự chủ của AI trong công việc nội bộ. Hai việc nào vẫn phải được duy trì?

A. Bỏ tiêu chí kiểm tra để AI có không gian tự chủ.

B. Xác định phạm vi và điều kiện chuyển cho người khi vượt phạm vi.

C. Đánh giá kết quả và xác định trách nhiệm sử dụng của con người.

D. Chuyển trách nhiệm cuối cho AI vì nó tự chọn bước thực hiện.

## Đáp án và giải thích

1. **B.** B dựa vào cách chia việc và quyền chủ động. A nhầm loại mô hình với cách cộng tác. C việc review cuối không xóa khác biệt giữa ba kiểu. D số lượt không xác định mức tự chủ.

2. **A.** A cấp tự chủ trong phần đã định và giữ quyết định ngoài phạm vi. B dùng đúng cấu trúc thay cho phê duyệt nội dung. C xử lý sau tác động không đáp ứng yêu cầu. D giả định tự chủ phải là toàn bộ hoặc không có.

3. **B, D.** B và D có trao đổi nhằm cùng phát triển kết quả. A là thực hiện nhiệm vụ cụ thể theo chỉ dẫn. C có quyền chủ động trong phạm vi định trước, phù hợp agency hơn.

4. **C.** C xét quyền quyết định trong công việc. A không phải điều kiện phân loại. B nhầm sự tương tác của người với agency. D tự giới hạn automation theo loại nội dung mà bài không đặt ra.

5. **B, C.** B giúp tự chủ có giới hạn; C giữ vai trò kiểm chứng và trách nhiệm. A đánh đồng tự chủ với thiếu tiêu chí. D mức tự chủ không biến AI thành bên chịu trách nhiệm về việc người dùng triển khai kết quả.
