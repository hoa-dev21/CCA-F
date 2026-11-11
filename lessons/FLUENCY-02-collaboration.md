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

**Question 1 — Choose one.** A project includes fixed-template summaries, collaborative message editing, and autonomous source monitoring for periodic reports. How should these be classified?

A. All are agency because one model is used.

B. Automation, augmentation, and agency, according to task allocation and autonomy.

C. All are augmentation if users see the final result.

D. Classify by chat-turn count alone.

**Question 2 — Choose one.** AI should monitor sources and draft reports, but customer notifications need human approval. What preserves appropriate agency scope?

A. Allow monitoring and drafting, with approval before external sending.

B. Auto-send any report matching an approved structure.

C. Keep send authority and apologize for errors afterward.

D. Use only manual chat because agency cannot include supervision.

**Question 3 — Choose two.** Which TWO situations most clearly demonstrate augmentation?

A. Convert 100 records to one fixed format on command.

B. A person selects an AI suggestion and gives feedback to develop it together.

C. AI independently monitors a source on schedule.

D. Person and AI iteratively test explanations against objectives and revise reasoning.

**Question 4 — Choose one.** A workflow makes five fixed AI calls without model-chosen tasks. Why does call count alone not establish agency?

A. Agency requires several models.

B. Every call requires a manually typed prompt.

C. Collaboration type depends on responsibility and decision autonomy.

D. Automation applies only to writing.

**Question 5 — Choose two.** Which TWO requirements remain when increasing AI autonomy?

A. Remove evaluation to enable freedom.

B. Define boundaries and escalation conditions.

C. Evaluate outcomes and retain human responsibility for use.

D. Transfer final accountability to AI.

## Đáp án và giải thích

1. **B.** B dựa vào cách chia việc và quyền chủ động. A nhầm loại mô hình với cách cộng tác. C việc review cuối không xóa khác biệt giữa ba kiểu. D số lượt không xác định mức tự chủ.

2. **A.** A cấp tự chủ trong phần đã định và giữ quyết định ngoài phạm vi. B dùng đúng cấu trúc thay cho phê duyệt nội dung. C xử lý sau tác động không đáp ứng yêu cầu. D giả định tự chủ phải là toàn bộ hoặc không có.

3. **B, D.** B và D có trao đổi nhằm cùng phát triển kết quả. A là thực hiện nhiệm vụ cụ thể theo chỉ dẫn. C có quyền chủ động trong phạm vi định trước, phù hợp agency hơn.

4. **C.** C xét quyền quyết định trong công việc. A không phải điều kiện phân loại. B nhầm sự tương tác của người với agency. D tự giới hạn automation theo loại nội dung mà bài không đặt ra.

5. **B, C.** B giúp tự chủ có giới hạn; C giữ vai trò kiểm chứng và trách nhiệm. A đánh đồng tự chủ với thiếu tiêu chí. D mức tự chủ không biến AI thành bên chịu trách nhiệm về việc người dùng triển khai kết quả.
