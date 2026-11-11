# Lỗi có cấu trúc và nguồn của kết luận

Nguồn bổ trợ: Exam Guide CCAR-F v1.0, mục 5.3 và 5.6, trang PDF 21, 23. Câu hỏi tự biên soạn.

## Nội dung bài học


Cần phân biệt tìm kiếm thành công nhưng không có kết quả với việc không truy cập được nguồn. Nếu yêu cầu hết thời gian chờ mà ứng dụng trả danh sách rỗng như một lần tìm thành công, tác nhân điều phối có thể hiểu nhầm rằng nguồn đã được kiểm tra và không có thông tin.

Tác nhân con nên thử xử lý lỗi tạm thời trong phạm vi cho phép. Nếu vẫn thất bại, báo rõ loại lỗi, truy vấn và các lần đã thử, dữ liệu lấy được một phần cùng phương án khác. Một câu “không hoạt động” không đủ để chọn cách khôi phục. Cũng không nhất thiết hủy toàn bộ nghiên cứu khi chỉ một nguồn lỗi; có thể hoàn thành phần có căn cứ và ghi rõ phần còn thiếu.

Mỗi phát hiện cần liên kết nhận định với nguồn, thường gọi là ánh xạ claim–source. Nên giữ nội dung nhận định, URL hoặc tên tài liệu, đoạn hay vị trí liên quan, ngày công bố hoặc thu thập và bối cảnh phương pháp. Bản tóm tắt phải giữ được liên kết đó, không chỉ gom một danh sách URL ở cuối.

Ví dụ: Hai nguồn đáng tin đưa tỷ lệ khác nhau nhưng đo ở hai năm khác nhau. Hãy giữ cả giá trị, thời điểm và phương pháp trước khi kết luận chúng mâu thuẫn. Không chọn số thuận mắt hoặc lấy trung bình khi chưa có cơ sở.

Nếu dữ liệu thực sự xung đột, tác nhân phân tích tài liệu hoàn tất phần của mình với chú thích rõ, rồi để tác nhân điều phối quyết định cách đối chiếu trước khi tổng hợp. Không tự xóa một giá trị ngay ở bước phân tích.

Kết quả có cấu trúc nên phân biệt phát hiện có căn cứ, còn tranh luận và chưa đủ dữ liệu. Giữ nguyên các hạn chế về phương pháp mà nguồn đã nêu. Chọn cách trình bày phù hợp: bảng cho số liệu cần so sánh, văn xuôi cho diễn biến, danh sách có cấu trúc cho phát hiện kỹ thuật. Nêu rõ chủ đề nào có bằng chứng và chủ đề nào còn trống do chưa truy cập được nguồn.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Search times out after two attempts, but one source has been read. The coordinator must decide whether to continue research or use a qualified result. Which handoff best supports that decision?

A. Report no results so the coordinator switches sources.

B. Include the error, query, attempt count, reviewed source, and unchecked scope.

C. Include only the source's conclusion to avoid distracting error details.

D. Provide a general uncertainty statement and an overall confidence score.

**Question 2 — Choose one.** Two credible reports give figures of 12% and 17%, using different years and sample definitions. What should happen before inferring a trend?

A. Average the figures because both sources are credible.

B. Keep only the newer figure.

C. Preserve measurement periods and methods, then assess comparability.

D. Label the figures contradictory and delegate all analysis to the user.

**Question 3 — Choose two.** An agent compresses 30 pages of evidence into two pages. Which TWO elements must remain so the conclusions can be checked?

A. A mapping from each important claim to its source and location.

B. All internal reasoning used to select each claim.

C. Dates, measurement scope, and notes about missing or conflicting evidence.

D. A final URL list with no mapping between claims and sources.

**Question 4 — Choose one.** Three websites reproduce one original source. A high-risk conclusion requires at least two independent sources. What should the report do?

A. Count the three domains as three sources.

B. Choose the two copies with the most different wording.

C. Use domain reputation to compensate for missing independence.

D. Count one original source and find independent evidence or disclose the shortfall.

**Question 5 — Choose two.** A search API returns HTTP 503 for one query. Another query succeeds but finds no relevant documents. Which TWO output states should remain distinct?

A. The failed query has an unknown result because access failed.

B. The successful query found nothing within the scope searched.

C. Both queries prove that no evidence exists anywhere.

D. The failed query proves the document does not exist, allowing one shared output schema.

## Đáp án và giải thích

1. **B.** B phân biệt lỗi truy cập với không có bằng chứng và giữ phần đã thu được. A đánh mất dữ liệu một phần. C che khoảng trống. D không chỉ ra nơi cần phục hồi.

2. **C.** C đánh giá tính tương thích của phép đo. A tạo thống kê không có cơ sở; B mất bối cảnh; D coi khác biệt phạm vi là mâu thuẫn trước khi kiểm tra.

3. **A, C.** A duy trì truy nguyên; C duy trì điều kiện diễn giải. B không cần cho kiểm chứng bằng chứng. D có nguồn nhưng không xác định nguồn nào hỗ trợ nhận định nào.

4. **D.** D xét quan hệ nguồn, không chỉ URL. A và B nhầm số bản sao với số phép quan sát. C đánh giá uy tín không giải quyết sự phụ thuộc của bằng chứng.

5. **A, B.** A giữ tính chưa biết; B giới hạn kết luận vào phạm vi truy vấn. C suy rộng quá dữ liệu. D biến lỗi hạ tầng thành kết luận nội dung chỉ để thống nhất cấu trúc.
