# Linh hoạt và hợp đồng chặt

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-in-amazon-bedrock/276763), sources/bedrock-lessons/276763.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Bài dùng công cụ `to_json` có đầu vào là một đối tượng dữ liệu linh hoạt, còn các trường mong muốn được mô tả trong prompt. Cách này giúp thử nhanh khi bản mẫu ứng dụng thường xuyên đổi yêu cầu.

Đổi lại, schema — bản mô tả cấu trúc dữ liệu — không bắt buộc chặt những trường và kiểu dữ liệu cụ thể. Ví dụ: bước tiếp theo cần `amount` là số, nhưng schema cho phép mọi đối tượng. Ép mô hình gọi `to_json` chưa chứng minh `amount` tồn tại và có đúng kiểu.

Khi dữ liệu quan trọng hoặc có cấu trúc lồng nhau phức tạp, cần cân nhắc schema riêng cho nhiệm vụ và kiểm tra phù hợp. JSON hợp lệ vẫn có thể thiếu trường, sai giá trị hoặc không đáp ứng yêu cầu nghiệp vụ.

Thêm một trường vào prompt không tự cập nhật quy định dữ liệu của hệ thống nhận. Hãy chọn mức linh hoạt dựa trên mức độ quan trọng, độ phức tạp và kết quả kiểm thử. Tỷ lệ lợi ích được nêu trong khóa chỉ là minh họa, không phải số đo có thể áp dụng chung.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Prototype dùng to_json với schema object linh hoạt. Downstream mới yêu cầu amount là số bắt buộc. Chỉ thêm “amount phải là số” vào prompt có đủ cưỡng chế hợp đồng không?

A. Có, vì tool_choice đã buộc gọi đúng tool.

B. Có, nếu JSON parse được ở mọi ví dụ demo.

C. Chưa; cần schema và validation cho hợp đồng cụ thể.

D. Chưa, chỉ cần tăng temperature để mô hình thử nhiều kiểu hơn.

**Câu 2 — Chọn hai.** Nhóm thử nhiều cấu trúc đầu ra trong prototype, chưa có consumer cố định. Hai nhận định nào đúng về schema linh hoạt?

A. Giảm công sửa schema khi thử trường mới.

B. Cưỡng chế mọi trường/kiểu chỉ từ tên to_json.

C. Đổi lấy kiểm soát yếu hơn và vẫn cần kiểm tra theo mục tiêu thử nghiệm.

D. Cho phép bỏ đánh giá vì JSON object luôn có ích.

**Câu 3 — Chọn một.** Hóa đơn tài chính có cấu trúc lồng nhau và lỗi số tiền gây tác động lớn. Nhóm muốn giữ schema generic vì nhanh viết prompt. Lựa chọn phù hợp nhất?

A. Giữ schema generic, chuyển các bản confidence thấp sang người duyệt.

B. Schema nhiệm vụ, validation và eval ca khó.

C. Giữ schema generic, thêm few-shot đúng cấu trúc rồi chỉ kiểm tra parse.

D. Bỏ trường khó trước khi gửi để consumer dùng mặc định theo hợp đồng cũ.

**Câu 4 — Chọn một.** Prompt được thêm trường currency, nhưng consumer vẫn chỉ nhận amount và tự dùng tiền tệ mặc định. Cần làm gì trước rollout?

A. Coi prompt là nguồn cập nhật mọi thành phần tự động.

B. Cho consumer bỏ currency để giữ tương thích mã cũ.

C. Gửi trường mới, để consumer tự hiểu.

D. Cập nhật hợp đồng/adapter và kiểm thử tiền tệ.

**Câu 5 — Chọn hai.** Đầu ra to_json parse được, đủ trường, nhưng tổng các dòng khác tổng hóa đơn. Hai bước nào phù hợp?

A. Phân biệt lỗi ngữ nghĩa với thành công parse/cấu trúc.

B. Chấp nhận vì nhiệm vụ của tool chỉ là tạo object.

C. Giữ bằng chứng nguồn và kiểm tra/đánh dấu xung đột theo hợp đồng.

D. Sửa các dòng tự động để luôn bằng tổng mà không lưu dấu vết.

## Đáp án và giải thích

1. **C.** C phân biệt chọn tool, cấu trúc JSON và hợp đồng cụ thể. A không chứng minh trường/kiểu. B demo không bảo đảm mọi đầu vào. D tăng biến thiên không cưỡng chế kiểu dữ liệu.

2. **A, C.** A là lợi ích thử nhanh; C là tradeoff cần quản lý. B tên công cụ không tạo hợp đồng. D parse được không chứng minh nội dung phục vụ mục tiêu.

3. **B.** B tăng kiểm soát phù hợp tác động và độ phức tạp. A phụ thuộc confidence chưa được hiệu chỉnh và không cưỡng chế cấu trúc. C ví dụ/parse không kiểm tra nghiệp vụ. D giá trị mặc định có thể làm sai dữ liệu quan trọng thay vì giải quyết thiếu hụt.

4. **D.** D phối hợp bên tạo và bên nhận. A không có cơ chế cập nhật tự động. B có thể dùng sai tiền tệ. C có dữ liệu mới nhưng chưa có hành vi diễn giải đúng.

5. **A, C.** A xác định tầng lỗi; C xử lý mà giữ căn cứ. B bỏ yêu cầu nghiệp vụ của hệ thống. D tạo sự nhất quán giả và có thể thay đổi dữ liệu đúng thành sai.
