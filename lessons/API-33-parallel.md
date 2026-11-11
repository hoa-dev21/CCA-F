# Phân tích độc lập rồi tổng hợp

Nguồn: [bài chính thức](https://anthropic-partners.skilljar.com/claude-with-the-anthropic-api/287804), sources/api-lessons/287804.json. Câu hỏi tự biên soạn.

## Nội dung bài học


Xử lý song song (parallelization) là chia một việc thành các phần độc lập, chạy đồng thời rồi tổng hợp. Mỗi phần có thể dùng yêu cầu hoặc tiêu chí riêng để tập trung vào một khía cạnh.

Ví dụ: Cùng một tài liệu được đánh giá riêng về khả năng bảo trì, mức dễ sử dụng và việc tuân thủ định dạng. Các nhánh đọc cùng tài liệu nhưng không cần kết quả của nhau, nên có thể chạy đồng thời.

Điều kiện quan trọng là đầu vào của mỗi nhánh đã sẵn sàng. Nếu B cần kết quả tính toán của A thì B phải chờ A; không nên đưa giá trị đoán vào B chỉ để chạy nhanh hơn.

Khi các nhánh hoàn tất, vẫn cần bước tổng hợp: đối chiếu phát hiện, giải quyết điểm khác nhau và đưa kết luận theo mục tiêu chung. Không mặc định chọn kết quả dài nhất hoặc bỏ những kết quả không đồng ý với nhau.

Chia nhánh giúp tập trung và cải thiện từng phần riêng, nhưng chất lượng cuối vẫn cần đánh giá. Không phải mọi nhiệm vụ đều tốt hơn khi chạy song song.

## Tự kiểm tra — tình huống Architect

**Question 1 — Choose one.** Three reviewers assess maintainability, user experience, and formatting independently. Which design reduces latency while preserving all perspectives?

A. Run independent branches and synthesize against shared criteria.

B. Force sequential reviews sharing previous opinions.

C. Run only whichever reviewer was fastest in a trial.

D. Choose the longest branch output.

**Question 2 — Choose one.** Step B requires the tax rate calculated by A. What is appropriate rather than guessing the rate to parallelize them?

A. Use a common rate and revise afterward.

B. Wait for A before running B.

C. Run both and choose by confidence.

D. Run B with two guessed rates and vote.

**Question 3 — Choose two.** Branches disagree because one prioritizes latency and another quality. Which TWO synthesis actions are needed?

A. Preserve each branch's criteria and evidence.

B. Remove the minority view.

C. Compare tradeoffs with system requirements and constraints.

D. Prefer the branch using more tokens.

**Question 4 — Choose one.** Two of three parallel branches finish; the third times out. The report requires all three criteria. What should happen?

A. Declare completion because a majority finished.

B. Invent the missing assessment during synthesis.

C. Rerun all three to synchronize results.

D. Preserve completed work and recover or disclose the missing criterion.

**Question 5 — Choose two.** Which TWO factors must be evaluated before splitting a prompt into parallel branches?

A. Required inputs are available without depending on another branch's output.

B. Different branch names prove independence.

C. Final quality, latency, and synthesis cost on representative tasks.

D. More branches always improve accuracy on identical evidence.

## Đáp án và giải thích

1. **A.** A dùng tính độc lập và có bước tích hợp. B tạo phụ thuộc không cần. C bỏ độ bao phủ. D độ dài không đại diện mức đúng hoặc sự cân bằng tiêu chí.

2. **B.** B giữ phụ thuộc dữ liệu. A có thể tạo đầu ra/tác động dựa trên giả định sai. C không thay được dữ liệu bắt buộc. D tăng công việc nhưng không bảo đảm đúng giá trị thực.

3. **A, C.** A giữ nguyên nhân khác biệt; C đưa quyết định về mục tiêu chung. B bỏ bằng chứng theo số phiếu. D lượng đầu ra không chứng minh quyết định phù hợp ràng buộc.

4. **D.** D giữ phần đã xong và biểu diễn thiếu hụt. A nhầm đa số với đủ tiêu chí. B tạo dữ liệu không có đánh giá. C lặp công việc không cần trừ khi đầu vào đã thay đổi.

5. **A, C.** A kiểm tra độc lập thực sự; C đo lợi ích toàn hệ. B tên gọi không xác định phụ thuộc. D nhiều nhánh có thể cùng sai hoặc tạo thêm chi phí/nhiễu.

## Đối chiếu Vertex

Ví dụ phân tích vật liệu chia thành các nhánh độc lập, cùng nhận ảnh nhưng có tiêu chí riêng, rồi tổng hợp. Chạy song song có thể giảm thời gian nhưng còn phụ thuộc số tác vụ chạy đồng thời, giới hạn tốc độ và thời gian tổng hợp. Chia chuyên môn không tự bảo đảm kết luận kỹ thuật đúng. Dùng chung câu hỏi.

Nguồn đối chiếu: [Parallelization workflows](https://anthropic-partners.skilljar.com/claude-with-google-vertex/289236). Bản lưu: `sources/vertex-lessons/289236.json`.
