# Ôn Claude Certified Architect – Foundations

Đã xác nhận đúng chứng chỉ **Architect** với người học. Bộ [bài học và câu hỏi](lessons/README.md) có **142 bài, 426 câu**, bao phủ 282 mục nội dung trong 7 khóa chuẩn bị sau khi dùng chung các phần trùng; có dẫn nguồn từng bài. [Bảng đối chiếu Exam Guide](BLUEPRINT_AUDIT.md) ghi bằng chứng cho 30 mục tiêu/240 ý, không phải chứng nhận sẵn sàng thi.

Nguồn: [trang chứng chỉ chính thức](https://anthropic-partners.skilljar.com/claude-certified-architect-foundations-certification), đọc trực tiếp qua Playwright ngày 30/10/2026. Bản chụp văn bản: sources/architect-exam-page.json.

## Phạm vi và ưu tiên

| Lĩnh vực | Trọng số | Phân bổ 10 giờ ôn chủ đề |
|---|---:|---:|
| Agentic Architecture & Orchestration | 27% | 2 giờ 42 phút |
| Tool Design & MCP Integration | 18% | 1 giờ 48 phút |
| Claude Code Configuration & Workflows | 20% | 2 giờ |
| Prompt Engineering & Structured Output | 20% | 2 giờ |
| Context Management & Reliability | 15% | 1 giờ 30 phút |

Phân bổ trên là đề xuất học tập theo trọng số, không phải cam kết đủ thời gian để thi đỗ. Điều chỉnh theo kết quả kiểm tra sau mỗi bài.

## Thông tin thi đã xác minh

- 60 câu trong 120 phút; dạng chọn một và chọn nhiều đáp án.
- Điểm đỗ 720 trên thang điểm quy đổi 100–1.000. Không suy ra trực tiếp tỷ lệ câu đúng từ điểm này.
- Trung bình 2 phút/câu; khi luyện nên dành thời gian cuối để kiểm tra câu đã đánh dấu.

## Vòng ôn ưu tiên khi ít thời gian

Đọc các nhóm dưới đây theo thứ tự, làm câu hỏi trước khi xem đáp án. Nếu đã hiểu một khái niệm, chuyển sang tình huống; nếu sai, đọc bài API/Code liên quan được dẫn trong bảng kiểm toán.

| Nhóm | Bài đọc ưu tiên | Cần tự giải thích được |
|---|---|---|
| Agent loop và điều phối | [EXAM14](lessons/EXAM-14-loop-decomposition.md), [EXAM01](lessons/EXAM-01-multi-agent.md), [EXAM02](lessons/EXAM-02-escalation.md) | tool_use/end_turn, context riêng, coordinator, gate trước hành động |
| Tool và MCP | [EXAM11](lessons/EXAM-11-errors-tool-scope.md), [EXAM09](lessons/EXAM-09-mcp-scope-tools.md), [EXAM15](lessons/EXAM-15-tool-contract-scenarios.md) | descriptions, error/retry, scopes, any/forced-name, Grep/Glob |
| Claude Code | [EXAM10](lessons/EXAM-10-rules-skills-scope.md), [EXAM13](lessons/EXAM-13-review-feedback-ci.md), [EXAM16](lessons/EXAM-16-code-config-iteration.md) | shared/personal rules, skill/fork, plan/direct, CI context và review độc lập |
| Prompt, extraction và batch | [EXAM05](lessons/EXAM-05-structured-output.md), [EXAM06](lessons/EXAM-06-validation-retry.md), [EXAM07](lessons/EXAM-07-batches.md), [EXAM08](lessons/EXAM-08-multi-pass-review.md), [EXAM17](lessons/EXAM-17-quality-examples-batch.md) | schema khác semantic correctness, few-shot, retry thiếu nguồn, latency budget |
| Context và độ tin cậy | [EXAM12](lessons/EXAM-12-session-context.md), [EXAM03](lessons/EXAM-03-errors-provenance.md), [EXAM04](lessons/EXAM-04-confidence.md), [EXAM18](lessons/EXAM-18-context-source-review.md) | facts không mất qua nén, source mapping, calibrated confidence và sampling |

Đây là18 bài bổ trợ theo đề cương, không thay thế toàn bộ các bài gốc. Các chi tiết embedding/vector search trong khóa API/cloud là kiến thức mở rộng; ưu tiên các quyết định kiến trúc trong bảng trên khi ôn gấp.

## Cách dùng từng bài

1. Đọc bản tóm tắt và tự giải thích các quyết định kiến trúc trong ví dụ.
2. Làm câu hỏi trước khi mở đáp án.
3. Với câu sai, ghi nguyên nhân: thiếu khái niệm, đọc sót ràng buộc, hoặc chọn giải pháp quá phức tạp.
4. Làm lại bằng tình huống khác để kiểm tra hiểu biết thay vì ghi nhớ chữ cái đáp án.

Mỗi bài có nguồn và câu hỏi tự biên soạn, giải thích các lựa chọn; không phải đề thi thật. Điểm làm bài luyện chỉ chỉ ra nội dung nên ôn lại, không quy đổi thành điểm thi hoặc xác suất đỗ.
