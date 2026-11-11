# MCP scope và chọn công cụ khám phá codebase

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 2.4–2.5, trang PDF 11–12. Câu hỏi tự biên soạn theo đề cương, không phải bài video.

## Nội dung bài học


Theo cấu hình trong đề cương, MCP server dùng chung cho nhóm được đặt ở `.mcp.json` của dự án. Server cá nhân hoặc thử nghiệm dùng phạm vi người dùng (user scope), được mô tả là lưu tại `~/.claude.json`.

Dùng tham chiếu biến môi trường như `${GITHUB_TOKEN}` thay vì ghi khóa bí mật vào tệp chia sẻ. Mỗi thành viên cung cấp giá trị và quyền phù hợp trên máy mình. Có tên server trong cấu hình chưa chứng minh đã kết nối; cần kiểm tra danh sách công cụ thực sự được phát hiện và quyền sử dụng.

Nhiều server có thể cùng cung cấp công cụ. Mô tả rõ đầu vào, đầu ra và khi nào nên dùng giúp mô hình chọn đúng. Ví dụ: công cụ MCP tìm tài liệu theo ý nghĩa cần giải thích điểm khác với Grep chỉ tìm nội dung khớp trong tệp.

Resource dạng danh mục (catalog) giúp ứng dụng biết nguồn nào có sẵn trước khi chọn nội dung: danh sách yêu cầu hỗ trợ kèm tóm tắt, cây tài liệu hoặc cấu trúc cơ sở dữ liệu. Vẫn cần thao tác đọc resource và kiểm tra quyền.

Với nhu cầu phổ biến như tích hợp Jira, có thể cân nhắc server sẵn có đã được đánh giá phù hợp. Quy trình đặc thù mới có thể cần server riêng. Không chọn chỉ vì tìm thấy một server.

Khi đọc và sửa kho mã, phân biệt các công cụ:

- Glob tìm đường dẫn theo mẫu, chẳng hạn `**/*.test.tsx`.
- Grep tìm nội dung trong tệp.
- Read đọc nội dung.
- Edit thay một phần dựa trên đoạn dùng làm mốc nhận diện (anchor).
- Write ghi nội dung tệp.

Nếu mốc của Edit xuất hiện nhiều lần và không xác định được vị trí duy nhất, hãy đọc đầy đủ rồi chỉnh hoặc ghi có kiểm soát, kiểm tra diff sau đó. Khám phá mã từng bước từ điểm bắt đầu, theo phần nhập mô-đun và luồng gọi, thay vì nạp mọi tệp cùng lúc. Nếu hàm được xuất qua lớp trung gian, tìm các tên được xuất rồi tìm từng tên để không bỏ sót nơi gọi.

## Tự kiểm tra — tình huống Architect

**Câu 1 — Chọn một.** Một MCP server ticket hoạt động trên máy tác giả nhưng đồng đội không thấy khi clone repo. Cấu hình nằm ở user scope. Cách sửa phù hợp cho dùng chung và credential riêng?

A. Commit cả cấu hình user cùng token đang hoạt động.

B. Version cấu hình dự án; credential/quyền riêng từng người.

C. Yêu cầu mọi người dùng chung tài khoản máy tác giả.

D. Thêm mô tả server vào README và giữ nguyên scope.

**Câu 2 — Chọn một.** Bạn cần tìm file **/*.test.tsx có gọi saveOrder, nhưng repository rất lớn. Trình tự nào thu hẹp tìm kiếm đúng loại dữ liệu?

A. Grep chuỗi “.test.tsx” trong nội dung rồi đọc mọi file khớp.

B. Read lần lượt mọi thư mục rồi tìm bằng mắt.

C. Glob tên test, Grep nội dung, Read ngữ cảnh khớp.

D. Glob chuỗi saveOrder vì đó là tên hàm cần tìm.

**Câu 3 — Chọn hai.** Edit báo anchor xuất hiện ba lần. File vừa được người khác sửa. Hai hành động nào giảm nguy cơ ghi đè hoặc sửa nhầm?

A. Read lại phiên bản hiện tại và lấy ngữ cảnh đủ phân biệt vị trí.

B. Dùng kết quả Read cũ để Write cả file với thay đổi mong muốn.

C. Sửa với anchor duy nhất hoặc thay thế có kiểm soát, rồi kiểm tra diff.

D. Chọn lần xuất hiện đầu tiên vì công cụ đã xác nhận có chuỗi cần sửa.

**Câu 4 — Chọn một.** Grep tên fetchRecord chỉ thấy một caller, nhưng hàm còn được re-export thành loadCustomer qua wrapper. Trước khi đổi chữ ký hàm, bước nào cần làm?

A. Coi grep đã bao phủ vì implementation chỉ có một tên.

B. Đổi chữ ký rồi dựa vào production logs tìm caller bị lỗi.

C. Tìm mọi file chứa từ “Record” và sửa đồng loạt.

D. Truy alias/export; đọc wrapper và caller của từng tên.

**Câu 5 — Chọn hai.** Đưa MCP server vào project scope giúp đồng đội nhìn thấy cấu hình. Hai điều nào vẫn cần kiểm tra trên mỗi môi trường?

A. Credential thực tế và quyền trên hệ thống đích.

B. Việc server đã được tác giả dùng thành công thay cho kiểm tra kết nối.

C. Phê duyệt/cấu hình môi trường và khả năng truy cập server.

D. Tính nhất quán quyền ghi của mọi người chỉ từ file cấu hình được commit.

## Đáp án và giải thích

1. **B.** B chia sẻ định nghĩa kết nối mà giữ credential theo người/môi trường. A phát tán bí mật; C trộn quyền và danh tính; D hướng dẫn không làm cấu hình user trở thành cấu hình dự án.

2. **C.** C phân biệt tìm tên đường dẫn, tìm nội dung và đọc ngữ cảnh. A tìm sai miền dữ liệu; B tốn công chưa thu hẹp; D tên hàm trong nội dung không phải mẫu đường dẫn.

3. **A, C.** A cập nhật trạng thái; C kiểm tra đúng phạm vi sửa. B có thể ghi đè thay đổi mới. D xác nhận tồn tại không chứng minh đó là vị trí đúng.

4. **D.** D theo quan hệ ký hiệu và luồng dữ liệu. A bỏ alias; B đẩy phát hiện lỗi sang production; C vừa có false positive vừa không bảo đảm bắt tên alias khác.

5. **A, C.** A và C quyết định kết nối có dùng được trong môi trường mới. B chỉ là bằng chứng ở môi trường khác. D chia sẻ cấu hình không tự cấp cùng quyền hay cùng danh tính.
