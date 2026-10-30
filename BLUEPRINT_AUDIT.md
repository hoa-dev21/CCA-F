# Kiểm toán phạm vi Exam Guide

Nguồn: sources/architect-exam-guide.pdf, CCAR-F v1.0 July2026. Kiểm tra từng knowledge/skill trong sources/blueprint-checklist.json; bằng chứng chi tiết trong sources/blueprint-audit-domain*.json. “Đã đối chiếu” nghĩa nội dung tóm tắt đã được đọc và ghép với từng yêu cầu, không chứng nhận mức sẵn sàng thi hoặc xác thực SDK hiện hành. Các mục chưa review vẫn để mở.

| Mục tiêu | Trang PDF | Đối chiếu | Bài học |
|---|---:|---|---|
| 1.1 — Vòng lặp agent | 5 | Đã đối chiếu 6 ý | [API-19-implement-loop](lessons/API-19-implement-loop.md), [API-32-agents-workflows](lessons/API-32-agents-workflows.md), [EXAM-14-loop-decomposition](lessons/EXAM-14-loop-decomposition.md) |
| 1.2 — Coordinator và nhiều agent | 5 | Đã đối chiếu 8 ý | [EXAM-01-multi-agent](lessons/EXAM-01-multi-agent.md) |
| 1.3 — Gọi nhánh và truyền context | 6 | Đã đối chiếu 8 ý | [EXAM-01-multi-agent](lessons/EXAM-01-multi-agent.md), [EXAM-12-session-context](lessons/EXAM-12-session-context.md) |
| 1.4 — Gate và handoff nhiều bước | 7 | Đã đối chiếu 6 ý | [EXAM-02-escalation](lessons/EXAM-02-escalation.md) |
| 1.5 — Hooks và chuẩn hóa tool results | 7 | Đã đối chiếu 6 ý | [EXAM-02-escalation](lessons/EXAM-02-escalation.md), [EXAM-14-loop-decomposition](lessons/EXAM-14-loop-decomposition.md) |
| 1.6 — Chia việc theo phụ thuộc | 8 | Đã đối chiếu 6 ý | [API-32-agents-workflows](lessons/API-32-agents-workflows.md), [API-34-chaining](lessons/API-34-chaining.md), [EXAM-08-multi-pass-review](lessons/EXAM-08-multi-pass-review.md), [EXAM-14-loop-decomposition](lessons/EXAM-14-loop-decomposition.md) |
| 1.7 — Resume, fork và session state | 8 | Đã đối chiếu 8 ý | [EXAM-12-session-context](lessons/EXAM-12-session-context.md) |
| 2.1 — Hợp đồng và mô tả tool | 9 | Đã đối chiếu 8 ý | [EXAM-11-errors-tool-scope](lessons/EXAM-11-errors-tool-scope.md), [API-15-tool-schemas](lessons/API-15-tool-schemas.md), [EXAM-15-tool-contract-scenarios](lessons/EXAM-15-tool-contract-scenarios.md) |
| 2.2 — Lỗi MCP có cấu trúc | 9 | Đã đối chiếu 8 ý | [EXAM-11-errors-tool-scope](lessons/EXAM-11-errors-tool-scope.md), [EXAM-15-tool-contract-scenarios](lessons/EXAM-15-tool-contract-scenarios.md), [API-19-implement-loop](lessons/API-19-implement-loop.md) |
| 2.3 — Phân quyền tool và tool choice | 10 | Đã đối chiếu 9 ý | [EXAM-11-errors-tool-scope](lessons/EXAM-11-errors-tool-scope.md), [EXAM-05-structured-output](lessons/EXAM-05-structured-output.md), [EXAM-15-tool-contract-scenarios](lessons/EXAM-15-tool-contract-scenarios.md) |
| 2.4 — Cấu hình MCP theo phạm vi | 11 | Đã đối chiếu 9 ý | [EXAM-09-mcp-scope-tools](lessons/EXAM-09-mcp-scope-tools.md), [API-26-resources](lessons/API-26-resources.md) |
| 2.5 — Chọn công cụ khám phá và sửa file | 11 | Đã đối chiếu 9 ý | [EXAM-09-mcp-scope-tools](lessons/EXAM-09-mcp-scope-tools.md), [EXAM-15-tool-contract-scenarios](lessons/EXAM-15-tool-contract-scenarios.md) |
| 3.1 — Phân cấp CLAUDE.md | 12 | Đã đối chiếu 8 ý | [EXAM-10-rules-skills-scope](lessons/EXAM-10-rules-skills-scope.md), [CODE-02-claude-md](lessons/CODE-02-claude-md.md), [EXAM-16-code-config-iteration](lessons/EXAM-16-code-config-iteration.md) |
| 3.2 — Commands và skills | 13 | Đã đối chiếu 9 ý | [EXAM-10-rules-skills-scope](lessons/EXAM-10-rules-skills-scope.md), [CODE-03-verification-skills](lessons/CODE-03-verification-skills.md) |
| 3.3 — Quy tắc theo đường dẫn | 13 | Đã đối chiếu 6 ý | [EXAM-10-rules-skills-scope](lessons/EXAM-10-rules-skills-scope.md), [EXAM-16-code-config-iteration](lessons/EXAM-16-code-config-iteration.md) |
| 3.4 — Plan mode và thực thi trực tiếp | 14 | Đã đối chiếu 8 ý | [EXAM-10-rules-skills-scope](lessons/EXAM-10-rules-skills-scope.md), [API-30-code-workflow](lessons/API-30-code-workflow.md) |
| 3.5 — Lặp cải thiện theo bằng chứng | 14 | Đã đối chiếu 9 ý | [EXAM-13-review-feedback-ci](lessons/EXAM-13-review-feedback-ci.md), [EXAM-16-code-config-iteration](lessons/EXAM-16-code-config-iteration.md), [API-30-code-workflow](lessons/API-30-code-workflow.md) |
| 3.6 — Claude Code trong CI | 15 | Đã đối chiếu 9 ý | [EXAM-13-review-feedback-ci](lessons/EXAM-13-review-feedback-ci.md), [CODE-06-headless](lessons/CODE-06-headless.md), [CODE-07-ci-review](lessons/CODE-07-ci-review.md), [EXAM-08-multi-pass-review](lessons/EXAM-08-multi-pass-review.md), [EXAM-16-code-config-iteration](lessons/EXAM-16-code-config-iteration.md) |
| 4.1 — Tiêu chí rõ và false positives | 16 | Đã đối chiếu 6 ý | [EXAM-13-review-feedback-ci](lessons/EXAM-13-review-feedback-ci.md), [EXAM-17-quality-examples-batch](lessons/EXAM-17-quality-examples-batch.md) |
| 4.2 — Few-shot theo tình huống | 16 | Đã đối chiếu 9 ý | [EXAM-13-review-feedback-ci](lessons/EXAM-13-review-feedback-ci.md), [EXAM-17-quality-examples-batch](lessons/EXAM-17-quality-examples-batch.md), [API-14-examples](lessons/API-14-examples.md) |
| 4.3 — Schema và structured output | 17 | Đã đối chiếu 10 ý | [EXAM-05-structured-output](lessons/EXAM-05-structured-output.md), [EXAM-11-errors-tool-scope](lessons/EXAM-11-errors-tool-scope.md), [EXAM-15-tool-contract-scenarios](lessons/EXAM-15-tool-contract-scenarios.md) |
| 4.4 — Validation và retry | 18 | Đã đối chiếu 8 ý | [EXAM-06-validation-retry](lessons/EXAM-06-validation-retry.md), [EXAM-13-review-feedback-ci](lessons/EXAM-13-review-feedback-ci.md) |
| 4.5 — Batch theo độ trễ | 18 | Đã đối chiếu 8 ý | [EXAM-07-batches](lessons/EXAM-07-batches.md), [EXAM-17-quality-examples-batch](lessons/EXAM-17-quality-examples-batch.md) |
| 4.6 — Review độc lập và nhiều lượt | 19 | Đã đối chiếu 6 ý | [EXAM-08-multi-pass-review](lessons/EXAM-08-multi-pass-review.md) |
| 5.1 — Giữ facts trong context dài | 19 | Đã đối chiếu 10 ý | [EXAM-12-session-context](lessons/EXAM-12-session-context.md), [EXAM-18-context-source-review](lessons/EXAM-18-context-source-review.md), [API-02-multi-turn](lessons/API-02-multi-turn.md), [API-19-implement-loop](lessons/API-19-implement-loop.md) |
| 5.2 — Escalation và xử lý mơ hồ | 20 | Đã đối chiếu 9 ý | [EXAM-02-escalation](lessons/EXAM-02-escalation.md) |
| 5.3 — Truyền lỗi giữa các agent | 21 | Đã đối chiếu 8 ý | [EXAM-03-errors-provenance](lessons/EXAM-03-errors-provenance.md), [EXAM-11-errors-tool-scope](lessons/EXAM-11-errors-tool-scope.md) |
| 5.4 — Context khi khám phá repo lớn | 21 | Đã đối chiếu 9 ý | [EXAM-12-session-context](lessons/EXAM-12-session-context.md), [EXAM-10-rules-skills-scope](lessons/EXAM-10-rules-skills-scope.md) |
| 5.5 — Confidence và human review | 22 | Đã đối chiếu 8 ý | [EXAM-04-confidence](lessons/EXAM-04-confidence.md), [EXAM-18-context-source-review](lessons/EXAM-18-context-source-review.md) |
| 5.6 — Nguồn gốc dữ liệu và bất định | 23 | Đã đối chiếu 9 ý | [EXAM-03-errors-provenance](lessons/EXAM-03-errors-provenance.md), [EXAM-18-context-source-review](lessons/EXAM-18-context-source-review.md) |

## 1.1 — Vòng lặp agent

**Kiến thức — diễn giải và nơi học**

1. API19: lifecycle/tool_use/end_turn và ngoại lệ.
2. API19: lưu assistant rồi user tool results có ID.
3. API19/API32: model chọn bước theo context, khác cây quyết định mã hóa.

**Kỹ năng — diễn giải và nơi học**

1. API19/EXAM14: tiếp tục tool_use, kết thúc end_turn, xử lý reason khác.
2. API19: thêm kết quả từng ID và is_error vào history.
3. API19/EXAM14: không parse lời nói, text hoặc cap để chứng minh thành công.

Câu hỏi liên quan: API-19 Q1–3; EXAM-14 Q1.

## 1.2 — Coordinator và nhiều agent

**Kiến thức — diễn giải và nơi học**

1. Tóm tắt: hub-and-spoke và coordinator định tuyến/xử lý lỗi.
2. Tóm tắt: context riêng, không tự kế thừa lịch sử.
3. Tóm tắt: coordinator phân tích, phân việc, chọn nhánh và tổng hợp.
4. Tóm tắt: chia hẹp quá gây bỏ sót nghiên cứu rộng.

**Kỹ năng — diễn giải và nơi học**

1. Tóm tắt/Q2: chọn agent theo yêu cầu, không gọi mọi nhánh.
2. Tóm tắt: chia theo subtopic/loại nguồn, giảm trùng.
3. Tóm tắt/Q3: tìm gap và giao lại truy vấn có mục tiêu trước tổng hợp.
4. Tóm tắt/Q2: định tuyến tập trung qua coordinator.

Câu hỏi liên quan: EXAM-01 Q1–3.

## 1.3 — Gọi nhánh và truyền context

**Kiến thức — diễn giải và nơi học**

1. EXAM01: Task phải có trong allowedTools theo giao diện đề cương.
2. EXAM01: prompt chứa context rõ, không shared memory ngầm.
3. EXAM01: AgentDefinition có description/system prompt/tool restrictions.
4. EXAM12: fork tạo nhánh từ baseline chung.

**Kỹ năng — diễn giải và nơi học**

1. EXAM01/Q1: truyền findings trước vào synthesis prompt.
2. EXAM01: tách findings khỏi URLs/names/pages/date.
3. EXAM01: nhiều yêu cầu độc lập cùng lượt cho song song.
4. EXAM01: giao mục tiêu/tiêu chí chất lượng/phạm vi thay kịch bản cứng.

Câu hỏi liên quan: EXAM-01 Q1–3; EXAM-12 Q1–2.

## 1.4 — Gate và handoff nhiều bước

**Kiến thức — diễn giải và nơi học**

1. Tóm tắt: gate mã khác prompt.
2. Tóm tắt/Q1: xác minh tài chính cần cưỡng chế.
3. Handoff: định danh, nguyên nhân, đề xuất cho người không có transcript.

**Kỹ năng — diễn giải và nơi học**

1. Tóm tắt/Q1: block refund nếu chưa xác minh hợp lệ.
2. Đoạn nhiều vấn đề: tách hạng mục, shared facts, điều tra độc lập song song, tổng hợp.
3. Handoff: customer ID/root cause/refund amount/recommended action rõ ràng.

Câu hỏi liên quan: EXAM-02 Q1–3.

## 1.5 — Hooks và chuẩn hóa tool results

**Kiến thức — diễn giải và nơi học**

1. EXAM02: PostToolUse chuẩn hóa kết quả trước model.
2. EXAM02/14: hook trước tool chặn hành động vượt ngưỡng.
3. EXAM02: deterministic enforcement khác compliance xác suất.

**Kỹ năng — diễn giải và nơi học**

1. EXAM02/14: Unix/ISO8601/numeric status theo contract và timezone, giữ nguồn.
2. EXAM02/14: gate trước refund vượt ngưỡng và redirect human.
3. EXAM02/Q1: chọn gate/hooks thay prompt khi cần cưỡng chế.

Câu hỏi liên quan: EXAM-14 Q3; EXAM-02 Q1.

## 1.6 — Chia việc theo phụ thuộc

**Kiến thức — diễn giải và nơi học**

1. API32/34: predictable chaining khác dynamic adaptive plan.
2. EXAM08/14: per-file rồi cross-file integration.
3. EXAM14: kế hoạch điều tra sinh nhiệm vụ theo findings.

**Kỹ năng — diễn giải và nơi học**

1. API32/EXAM14: chọn chaining cho bước biết trước, adaptive cho điều tra mở.
2. EXAM08 Q1/Q3: local review rồi integration tránh attention dilution.
3. EXAM14 Q2: map legacy repo, ưu tiên high-impact, cập nhật theo dependencies.

Câu hỏi liên quan: API-32 Q1–3; EXAM-08 Q1/Q3; EXAM-14 Q2.

## 1.7 — Resume, fork và session state

**Kiến thức — diễn giải và nơi học**

1. Đoạn bổ sung: --resume <session-name> chọn phiên đặt tên.
2. Tóm tắt: fork_session nhánh độc lập từ baseline.
3. Đoạn resume: thông báo file đã sửa.
4. Tóm tắt/Q1: summary mới khi tool results cũ nhiều.

**Kỹ năng — diễn giải và nơi học**

1. Đoạn bổ sung: resume named investigation theo đề cương.
2. Tóm tắt: fork so sánh phương án độc lập, không đồng bộ findings ngầm.
3. Tóm tắt/Q1: chọn resume nếu context còn đúng, summary mới nếu stale.
4. Đoạn bổ sung: nêu file thay đổi để targeted re-analysis.

Câu hỏi liên quan: EXAM-12 Q1–2.

## 2.1 — Hợp đồng và mô tả tool

**Kiến thức — diễn giải và nơi học**

1. EXAM11/API15: description là tín hiệu chọn tool, mô tả mơ hồ gây misroute.
2. EXAM11: formats, query examples, edge cases và ranh giới.
3. EXAM11: analyze_content/analyze_document có phạm vi trùng.
4. EXAM11: quy tắc system prompt gắn keyword với tool có thể lấn description.

**Kỹ năng — diễn giải và nơi học**

1. API15/EXAM11: nêu purpose/inputs/outputs và khi dùng so với tool khác.
2. EXAM11: rename extract_web_results và mô tả web-specific.
3. EXAM11: tách extract_data_points/summarize_content/verify_claim_against_source.
4. EXAM11: rà cả system instruction có quy tắc keyword sai.

Câu hỏi liên quan: EXAM-11 Q3; API-15 Q1–2.

## 2.2 — Lỗi MCP có cấu trúc

**Kiến thức — diễn giải và nơi học**

1. EXAM11: MCP isError khác API is_error.
2. EXAM11: transient/validation/business/permission và cách phục hồi khác nhau.
3. EXAM11/15: Operation failed chung làm mất tín hiệu.
4. EXAM11: retryability metadata tránh retry vô ích.

**Kỹ năng — diễn giải và nơi học**

1. EXAM11: payload errorCategory/isRetryable/description theo contract ứng dụng.
2. EXAM11/Q1: business retriable=false, lý do dễ hiểu và đường xử lý phù hợp.
3. EXAM11: subagent phục hồi cục bộ giới hạn rồi gửi lỗi còn lại/partial results/attempts.
4. EXAM11/15: successful empty khác access failure.

Câu hỏi liên quan: EXAM-11 Q1; EXAM-15 Q2; API-19 Q1.

## 2.3 — Phân quyền tool và tool choice

**Kiến thức — diễn giải và nơi học**

1. EXAM11: tool nhiều ngoài vai trò tăng decision complexity, số18/4–5 là ví dụ.
2. EXAM11: synthesis không nên nhận toàn bộ search/edit tools.
3. EXAM11/Q2: scope theo vai trò, verify_fact hẹp cho nhu cầu thường xuyên.
4. EXAM11/05: auto/any/forced-name khác nhau.

**Kỹ năng — diễn giải và nơi học**

1. EXAM11: giới hạn tools theo specialization.
2. EXAM11: thay fetch_url bằng load_document có URL validation thật.
3. EXAM11/Q2: verify_fact hẹp, việc phức tạp qua coordinator.
4. EXAM11/15Q1: force metadata rồi thực thi/validate/result, follow-up mở enrichment.
5. EXAM05/11: any buộc tool trong tập, không buộc tên.

Câu hỏi liên quan: EXAM-11 Q2; EXAM-05 Q1; EXAM-15 Q1.

## 2.4 — Cấu hình MCP theo phạm vi

**Kiến thức — diễn giải và nơi học**

1. EXAM09: project .mcp.json và user ~/.claude.json.
2. EXAM09: ${GITHUB_TOKEN}, không commit literal secret.
3. EXAM09: discovery khi kết nối, nhiều server đồng thời không tự loại trừ.
4. EXAM09: issue summaries/docs hierarchy/database schemas như catalogs.

**Kỹ năng — diễn giải và nơi học**

1. EXAM09/Q1: project shared config, mỗi thành viên cấp env/auth riêng.
2. EXAM09: personal experimental server ở user scope.
3. EXAM09: mô tả năng lực/output MCP rõ khi mạnh hơn Grep.
4. EXAM09: đánh giá server Jira/community cho tích hợp chuẩn, custom cho việc riêng.
5. EXAM09/API26: resource catalog hỗ trợ visibility không thử hàng loạt tool queries.

Câu hỏi liên quan: EXAM-09 Q1.

## 2.5 — Chọn công cụ khám phá và sửa file

**Kiến thức — diễn giải và nơi học**

1. EXAM09: Grep tìm nội dung function/error/import.
2. EXAM09: Glob tìm path theo pattern.
3. EXAM09: Read/Write full-file, Edit targeted anchor duy nhất.
4. EXAM09/Q3: fallback Read/Write kiểm soát khi anchor không duy nhất.

**Kỹ năng — diễn giải và nơi học**

1. EXAM09/Q2: Grep tìm function callers/nội dung.
2. EXAM09/Q2: Glob **/*.test.tsx.
3. EXAM09/Q3: đọc đầy đủ rồi Write và kiểm tra diff.
4. EXAM09: Grep entrypoints, Read imports/theo flow, không nạp tất cả trước.
5. EXAM09/15Q3: xác định exports/aliases wrapper, tìm từng tên.

Câu hỏi liên quan: EXAM-09 Q2–3; EXAM-15 Q3.

## 3.1 — Phân cấp CLAUDE.md

**Kiến thức — diễn giải và nơi học**

1. EXAM10: user/project/root/subdirectory CLAUDE.md paths.
2. EXAM10: user instructions không chia sẻ qua repo.
3. EXAM10/CODE02: @file import và context vẫn được nạp.
4. EXAM10: .claude/rules/ theo topic thay file lớn.

**Kỹ năng — diễn giải và nơi học**

1. EXAM10/16Q1: chẩn đoán team thiếu hướng dẫn do user scope.
2. EXAM10: chọn @standards/testing.md theo domain package.
3. EXAM10: testing/api-conventions/deployment rule files.
4. EXAM10: /memory kiểm tra files loaded.

Câu hỏi liên quan: EXAM-16 Q1; CODE-02 Q2–3.

## 3.2 — Commands và skills

**Kiến thức — diễn giải và nơi học**

1. EXAM10: project .claude/commands so với ~/.claude/commands.
2. EXAM10: .claude/skills/SKILL.md với frontmatter.
3. EXAM10 Q2: context fork cô lập verbose context.
4. EXAM10: ~/.claude/skills tên khác bản chia sẻ.

**Kỹ năng — diễn giải và nơi học**

1. EXAM10: project command version-controlled cho nhóm.
2. EXAM10 Q2: fork cho phân tích/khám phá dài và summary bàn giao.
3. EXAM10 Q3: allowed-tools theo workflow, không thay backend validation.
4. EXAM10 Q3: argument-hint gợi ý tham số, không là validation tuyệt đối.
5. EXAM10/CODE03: CLAUDE.md chuẩn chung, skill workflow theo nhu cầu.

Câu hỏi liên quan: EXAM-10 Q2–3; CODE-03 Q1/Q3.

## 3.3 — Quy tắc theo đường dẫn

**Kiến thức — diễn giải và nơi học**

1. EXAM10: YAML frontmatter paths chứa glob.
2. EXAM10: rule chỉ khớp phạm vi giảm irrelevant context.
3. EXAM10: glob theo loại file tốt hơn một directory file cho test rải rác.

**Kỹ năng — diễn giải và nơi học**

1. EXAM10: paths terraform/**/* giữa --- YAML boundaries.
2. EXAM10/16: **/*.test.tsx xuyên package.
3. EXAM10 Q1: chọn path rule thay CLAUDE.md chỉ một thư mục con.

Câu hỏi liên quan: EXAM-10 Q1; EXAM-16 Q1.

## 3.4 — Plan mode và thực thi trực tiếp

**Kiến thức — diễn giải và nơi học**

1. EXAM10: plan khi kiến trúc/nhiều file/phương án cạnh tranh.
2. EXAM10: direct cho conditional/bug phạm vi rõ.
3. EXAM10/API30: đọc/plan trước implement để giảm rework.
4. EXAM10: Explore trả summary, giữ verbose discovery ngoài context chính.

**Kỹ năng — diễn giải và nơi học**

1. EXAM10: migration45file và phương án hạ tầng cần plan.
2. EXAM10: date conditional một hàm có thể direct.
3. EXAM10: Explore cho multi-phase verbose discovery.
4. EXAM10/API30: investigation plan rồi execution phương án đã chọn.

Câu hỏi liên quan: API-30 Q1–3.

## 3.5 — Lặp cải thiện theo bằng chứng

**Kiến thức — diễn giải và nơi học**

1. EXAM13: cặp input/output thay prose mơ hồ.
2. EXAM13/API30: meaningful tests trước code, failures hướng sửa.
3. EXAM13: interview lộ cache invalidation/failure modes.
4. EXAM13: interacting issues cùng message, independent tuần tự.

**Kỹ năng — diễn giải và nơi học**

1. EXAM13/16Q2: 2–3 cặp input/output đã review.
2. EXAM13: hành vi/edge/performance test phù hợp rồi expected/actual failure.
3. EXAM13: interview lĩnh vực chưa quen trước quyết định thiết kế.
4. EXAM13/16Q2: null giữ null, phân biệt chuỗi rỗng và chuỗi null.
5. EXAM13: phối hợp issues cùng pipeline khi fix ảnh hưởng nhau.

Câu hỏi liên quan: EXAM-16 Q2; EXAM-13 Q1; API-30 Q2.

## 3.6 — Claude Code trong CI

**Kiến thức — diễn giải và nơi học**

1. EXAM13/CODE06: -p/--print non-interactive.
2. EXAM13/CODE06: --output-format json và --json-schema; envelope khác payload.
3. EXAM13: project standards/fixtures/review criteria trong CLAUDE.md.
4. EXAM08/13/16: reviewer instance riêng tránh context sinh code.

**Kỹ năng — diễn giải và nơi học**

1. EXAM16Q3/CODE06: -p cho unattended, tránh chờ UI.
2. EXAM13: validate findings file/location/schema trước adapter inline comment theo quyền.
3. EXAM13 Q2: prior findings + diff mới, chỉ report new/unresolved.
4. EXAM13 Q3: context test files hiện hữu chống đề xuất trùng.
5. EXAM13: testing standards/valuable criteria/fixtures và xác minh context CI thực sự đã nạp.

Câu hỏi liên quan: EXAM-13 Q2–3; EXAM-16 Q3; CODE-06 Q1–2; EXAM-08 Q2.

## 4.1 — Tiêu chí rõ và false positives

**Kiến thức — diễn giải và nơi học**

1. EXAM13: chỉ flag comment khi claimed behavior trái code.
2. EXAM13: be conservative/high confidence không thay categorical criteria.
3. EXAM13/17: nhiễu một nhóm làm mất trust nhóm đúng.

**Kỹ năng — diễn giải và nơi học**

1. EXAM13 Q1: report bug/security, skip style/local acceptable patterns.
2. EXAM13/17Q2: tạm disable category nhiễu trong khi cải tiến.
3. EXAM13: severity theo tác động, ví dụ tenant leak/null crash/style skip và output cụ thể.

Câu hỏi liên quan: EXAM-13 Q1; EXAM-17 Q2.

## 4.2 — Few-shot theo tình huống

**Kiến thức — diễn giải và nơi học**

1. EXAM13/API14: examples khi instructions vẫn không nhất quán.
2. EXAM13: ca mơ hồ, guard hợp lệ so với null bug.
3. EXAM13: áp nguyên tắc lên ca mới, không chỉ match mẫu.
4. EXAM13: extraction có inline/bibliography/embedded methodology/đơn vị không trang trọng.

**Kỹ năng — diễn giải và nơi học**

1. EXAM13: 2–4 targeted examples, lý do chọn hơn alternative.
2. EXAM13: file/location/issue/severity/suggested fix.
3. EXAM13: guarded dereference hợp lệ khác null crash tái hiện.
4. EXAM13: cấu trúc citation và methodology khác nhau.
5. EXAM17Q1: ví dụ extraction varied layout khi field có trong nguồn nhưng bị null.

Câu hỏi liên quan: EXAM-13 Q1; EXAM-17 Q1; API-14 Q1–3.

## 4.3 — Schema và structured output

**Kiến thức — diễn giải và nơi học**

1. EXAM05: extraction schema/tool-use input, phân biệt contract thông thường với strict support thật.
2. EXAM05/11: auto/any/forced-name.
3. EXAM05Q2: schema hợp lệ vẫn có semantic error tổng/nhầm trường.
4. EXAM05Q3: required/optional/null và other+detail.

**Kỹ năng — diễn giải và nơi học**

1. EXAM05: tool schema rồi lấy dữ liệu tool_use input.
2. EXAM05: any khi nhiều extraction schemas/document type chưa rõ.
3. EXAM05/15Q1: forced metadata trước enrichment theo turn/gate.
4. EXAM05Q3: optional khác nullable, thiếu dữ liệu không bịa.
5. EXAM05: unclear/other và detail cho ambiguity/extensibility.
6. EXAM05: normalization format trong prompt cùng schema và business validation.

Câu hỏi liên quan: EXAM-05 Q1–3; EXAM-15 Q1.

## 4.4 — Validation và retry

**Kiến thức — diễn giải và nơi học**

1. EXAM06Q1: retry kèm lỗi cụ thể.
2. EXAM06Q2: retry không tạo thông tin ở phụ lục chưa cung cấp.
3. EXAM06: detected_pattern phân tích dismissal.
4. EXAM06: semantic validation khác cú pháp/schema.

**Kỹ năng — diễn giải và nơi học**

1. EXAM06Q1: original document+failed extraction+specific errors.
2. EXAM06Q2: bổ sung nguồn hoặc missing/review khi thông tin vắng.
3. EXAM06: detected_pattern trong structured findings để xem false positives.
4. EXAM06Q3: stated_total/calculated_total/conflict_detected riêng, không ghi đè mâu thuẫn.

Câu hỏi liên quan: EXAM-06 Q1–3.

## 4.5 — Batch theo độ trễ

**Kiến thức — diễn giải và nơi học**

1. EXAM07: 50%/24giờ theo guide, không coi báo giá/SLA hiện hành đã xác minh.
2. EXAM07Q1: latency-tolerant khác blocking pre-merge.
3. EXAM07Q3: không có host-executed multiturn tools trong một request.
4. EXAM07: custom_id ghép kết quả, không theo vị trí.

**Kỹ năng — diễn giải và nơi học**

1. EXAM07Q1: realtime cho blocking, batch cho overnight.
2. EXAM07/17Q3: wait+processing,4giờ có đệm theo giả định.
3. EXAM07Q2: chỉ resubmit failed IDs, sửa nguyên nhân quá dài.
4. EXAM07: refine prompt trên sample trước xử lý lớn.

Câu hỏi liên quan: EXAM-07 Q1–3; EXAM-17 Q3.

## 4.6 — Review độc lập và nhiều lượt

**Kiến thức — diễn giải và nơi học**

1. EXAM08: self-review giữ giả định của generator.
2. EXAM08: reviewer context độc lập khác yêu cầu tự phản biện/thinking.
3. EXAM08Q1/Q3: per-file + integration tránh mất độ sâu/cross-file bugs.

**Kỹ năng — diễn giải và nơi học**

1. EXAM08Q2: independent instance nhận requirements/code, không generator reasoning.
2. EXAM08Q1/Q3: local và cross-file data-flow pass.
3. EXAM08: verification pass tự báo confidence từng finding, hiệu chỉnh với labels trước routing.

Câu hỏi liên quan: EXAM-08 Q1–3.

## 5.1 — Giữ facts trong context dài

**Kiến thức — diễn giải và nơi học**

1. EXAM12/18: progressive summary mất số/ngày/kỳ vọng.
2. EXAM12: lost-in-middle là rủi ro vị trí input dài.
3. EXAM12:40field chỉ5liên quan, lọc trước tích lũy.
4. API02/19: gửi context/history và content blocks cho request sau.

**Kỹ năng — diễn giải và nơi học**

1. EXAM12/18Q1: case facts theo issue trong mỗi request ngoài history nén.
2. EXAM12: context layer có cấu trúc theo order/issue.
3. EXAM12: chỉ field tool liên quan, giữ nguồn để lấy lại.
4. EXAM12: key findings đầu input, headers cho chi tiết.
5. EXAM12/03: metadata date/location/methodology giữ qua agents.
6. EXAM12: upstream key facts/citations/relevance thay verbose reasoning.

Câu hỏi liên quan: EXAM-12 Q3; EXAM-18 Q1; API-02 Q1–3.

## 5.2 — Escalation và xử lý mơ hồ

**Kiến thức — diễn giải và nơi học**

1. EXAM02: yêu cầu người, policy gap/exception, không tiến triển.
2. EXAM02Q2: explicit demand chuyển ngay, không ép điều tra.
3. EXAM02: sentiment/confidence không là proxy đáng tin.
4. EXAM02Q3: nhiều customer matches cần định danh thêm.

**Kỹ năng — diễn giải và nơi học**

1. EXAM02: few-shot khách bực nhưng có thể xử lý so với explicit human request.
2. EXAM02Q2: tôn trọng ngay yêu cầu rõ.
3. EXAM02: thừa nhận frustration/đề nghị xử lý, tôn trọng nếu khách chọn người.
4. EXAM02Q3: own-site price adjustment không suy competitor matching.
5. EXAM02Q3: hỏi identifier thay chọn theo heuristic.

Câu hỏi liên quan: EXAM-02 Q2–3.

## 5.3 — Truyền lỗi giữa các agent

**Kiến thức — diễn giải và nơi học**

1. EXAM03: failure/query/partial/alternatives cho coordinator.
2. EXAM03: access failure khác valid empty.
3. EXAM03: generic unavailable thiếu tín hiệu phục hồi.
4. EXAM03Q1: không che lỗi thành empty hoặc hủy mọi nhánh.

**Kỹ năng — diễn giải và nơi học**

1. EXAM03Q1: structured context và attempts.
2. EXAM03: báo đúng access failure/empty.
3. EXAM03/11: local transient recovery giới hạn, propagate unresolved cùng partial/attempts.
4. EXAM03: coverage annotations chủ đề có support và gaps unavailable sources.

Câu hỏi liên quan: EXAM-03 Q1/Q3; EXAM-11 Q1.

## 5.4 — Context khi khám phá repo lớn

**Kiến thức — diễn giải và nơi học**

1. EXAM12: typical-pattern answers thay class cụ thể/inconsistent findings là degradation.
2. EXAM12: scratchpad key findings có đường dẫn/bằng chứng.
3. EXAM12: nhánh khám phá giữ output dài, coordinator bức tranh tổng thể.
4. EXAM12Q2: state exports nơi biết trước và manifest nạp khi resume.

**Kỹ năng — diễn giải và nơi học**

1. EXAM12: câu hỏi hẹp find-tests/trace-refund cho nhánh riêng.
2. EXAM12: scratchpad ghi và tham chiếu findings cho câu sau.
3. EXAM12: summary phase trước đưa initial context phase sau.
4. EXAM12Q2: manifest/state phải được load/inject, không chỉ tồn tại.
5. EXAM12: /compact cho verbose discovery, giữ facts/state trước nén.

Câu hỏi liên quan: EXAM-12 Q1–2; EXAM-10 Q2.

## 5.5 — Confidence và human review

**Kiến thức — diễn giải và nơi học**

1. EXAM04:97%chung che field/loại hiếm yếu.
2. EXAM04: stratified random sampling nhóm cao đo lỗi mới.
3. EXAM04: field confidence cần labeled calibration.
4. EXAM04: verify accuracy theo type/field trước giảm review.

**Kỹ năng — diễn giải và nơi học**

1. EXAM04Q3/18Q3: tiếp tục stratified sampling high-confidence.
2. EXAM04Q1: phân tích theo field/doc type.
3. EXAM04Q2: model score không tự là xác suất đúng, calibrate threshold với nhãn.
4. EXAM04Q3: low confidence/ambiguity/conflict ưu tiên human capacity.

Câu hỏi liên quan: EXAM-04 Q1–3; EXAM-18 Q3.

## 5.6 — Nguồn gốc dữ liệu và bất định

**Kiến thức — diễn giải và nơi học**

1. EXAM03Q3: summary dễ làm mất claim-source mapping.
2. EXAM03: synthesis merge giữ liên kết claim/location/source.
3. EXAM03Q2: annotating conflicts thay chọn trung bình/tùy tiện.
4. EXAM03: publication/collection dates phân biệt temporal difference.

**Kỹ năng — diễn giải và nơi học**

1. EXAM03: structured findings URL/document/excerpt/location/date/methodology.
2. EXAM03: established/contested/gap sections giữ characterization nguồn.
3. EXAM03: document analysis giữ các giá trị, coordinator đối chiếu trước synthesis.
4. EXAM03Q2/18Q2: giữ date để không hiểu hai thời kỳ là contradiction.
5. EXAM03: financial tables/news prose/technical structured lists theo kiểu dữ liệu.

Câu hỏi liên quan: EXAM-03 Q2–3; EXAM-18 Q2.
