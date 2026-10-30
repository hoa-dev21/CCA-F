# Ôn Claude Certified Architect – Foundations

Hiện có **142 bài, 426 câu hỏi tự biên soạn có đáp án và giải thích**: 124 bài từ nội dung khóa học và 18 bài bổ trợ theo Exam Guide. Đã đối chiếu nội dung tóm tắt với 30/30 mục tiêu thi. Đã có bài tóm tắt/câu hỏi cho cả 282 mục nội dung trong 7 khóa; các nội dung trùng được dùng chung bài để tránh học lặp. Đối chiếu này không chứng nhận mức sẵn sàng thi.

Để ôn nhanh, bắt đầu các bài EXAM bên dưới; đọc phần API về tool loop, prompting và MCP cùng phần Claude Code để củng cố. AI Fluency là nền tảng đọc nhanh. Đây là thứ tự học đề xuất, không phải cam kết đủ để thi đỗ.

## Nguồn và độ bao phủ

- [Kế hoạch ôn](../ON_TAP_NHANH.md).
- [Đối chiếu 30 mục tiêu thi](../BLUEPRINT_AUDIT.md).
- [Kiểm tra bàn giao](../COMPLETION_AUDIT.md).
- [Tiến độ API](../COVERAGE.md), [Code](../COVERAGE-code.md), [MCP](../COVERAGE-mcp.md), [Fluency](../COVERAGE-fluency.md).

Chín bài kỹ thuật của khóa Introduction to MCP đã được đọc và đối chiếu với API-21 đến API-29, dùng chung bài và câu hỏi tương đương. Không đếm lặp chín bộ câu hỏi. Các nguồn đối chiếu có trong từng bài. Nguồn được phân biệt là văn bản trang, phụ đề chính thức, ghi chú chính thức hoặc review notebook/report hiển thị trong video. Bài Vertex289173 không có track phụ đề tiếng Anh; bằng chứng review trực quan được ghi rõ trong API72 và bảng coverage.

## Bổ trợ theo Exam Guide — ưu tiên khi ôn gấp

- [Điều phối nhiều agent và truyền ngữ cảnh](EXAM-01-multi-agent.md) — 3 câu.
- [Gate nghiệp vụ và bàn giao cho con người](EXAM-02-escalation.md) — 3 câu.
- [Lỗi có cấu trúc và nguồn của kết luận](EXAM-03-errors-provenance.md) — 3 câu.
- [Hiệu chỉnh confidence và chọn mẫu kiểm tra](EXAM-04-confidence.md) — 3 câu.
- [Structured output — Schema và lựa chọn công cụ](EXAM-05-structured-output.md) — 3 câu.
- [Validation và retry có phản hồi lỗi](EXAM-06-validation-retry.md) — 3 câu.
- [Batch processing — Chọn theo độ trễ được phép](EXAM-07-batches.md) — 3 câu.
- [Review độc lập và review nhiều lượt](EXAM-08-multi-pass-review.md) — 3 câu.
- [MCP scope và chọn công cụ khám phá codebase](EXAM-09-mcp-scope-tools.md) — 3 câu.
- [Quy tắc theo đường dẫn và phạm vi skills/commands](EXAM-10-rules-skills-scope.md) — 3 câu.
- [Phân loại lỗi và phân phối công cụ theo vai trò](EXAM-11-errors-tool-scope.md) — 3 câu.
- [Resume, fork và trạng thái qua ranh giới context](EXAM-12-session-context.md) — 3 câu.
- [Tiêu chí review, phản hồi và CI có thể kiểm tra](EXAM-13-review-feedback-ci.md) — 3 câu.
- [Điều kiện dừng và chia nhiệm vụ thích ứng](EXAM-14-loop-decomposition.md) — 3 câu.
- [Tình huống tool contract, lỗi và lựa chọn công cụ](EXAM-15-tool-contract-scenarios.md) — 3 câu.
- [Tình huống cấu hình Claude Code và lặp sửa theo bằng chứng](EXAM-16-code-config-iteration.md) — 3 câu.
- [Tình huống few-shot, false positives và độ trễ batch](EXAM-17-quality-examples-batch.md) — 3 câu.
- [Tình huống context dài, nguồn mâu thuẫn và review có chọn mẫu](EXAM-18-context-source-review.md) — 3 câu.

## Building with the Claude API

- [Introducing tool use — Kết nối Claude với dữ liệu bên ngoài](API-01-tool-use.md) — 3 câu.
- [Multi-Turn conversations — Duy trì hội thoại nhiều lượt](API-02-multi-turn.md) — 3 câu.
- [System prompts — Định hướng vai trò và cách trả lời](API-03-system-prompts.md) — 3 câu.
- [Prompt evaluation — Đo chất lượng thay vì chỉ thử vài lần](API-04-prompt-evaluation.md) — 3 câu.
- [A typical eval workflow — Quy trình đánh giá](API-05-eval-workflow.md) — 3 câu.
- [Generating test datasets — Tạo tập đầu vào kiểm thử](API-06-test-datasets.md) — 3 câu.
- [Running the eval — Tổ chức pipeline đánh giá](API-07-running-eval.md) — 3 câu.
- [Model based grading — Chấm bằng mô hình](API-08-model-grading.md) — 3 câu.
- [Code based grading — Chấm bằng mã chương trình](API-09-code-grading.md) — 3 câu.
- [Prompt engineering — Cải tiến có kiểm chứng](API-10-prompt-engineering.md) — 3 câu.
- [Being clear and direct — Giao nhiệm vụ rõ ràng](API-11-clear-direct.md) — 3 câu.
- [Being specific — Nêu tiêu chí và bước xử lý](API-12-specificity.md) — 3 câu.
- [Structure with XML tags — Phân ranh giới nội dung](API-13-xml.md) — 3 câu.
- [Providing examples — Dạy bằng ví dụ đầu vào và đầu ra](API-14-examples.md) — 3 câu.
- [Tool schemas — Hợp đồng gọi công cụ](API-15-tool-schemas.md) — 3 câu.
- [Handling message blocks — Giữ đầy đủ cấu trúc phản hồi](API-16-message-blocks.md) — 3 câu.
- [Sending tool results — Trả kết quả đúng lần gọi](API-17-tool-results.md) — 3 câu.
- [Multi-turn conversations with tools — Công cụ qua nhiều lượt](API-18-tools-multi-turn.md) — 3 câu.
- [Implementing multiple turns — Triển khai vòng lặp công cụ](API-19-implement-loop.md) — 3 câu.
- [Using multiple tools — Mở rộng tập công cụ](API-20-multiple-tools.md) — 3 câu.
- [Introducing MCP — Chuẩn hóa lớp tích hợp](API-21-intro-mcp.md) — 3 câu.
- [MCP clients — Khám phá và gọi công cụ](API-22-mcp-clients.md) — 3 câu.
- [Defining tools with MCP — Mô tả hàm và tham số](API-23-define-mcp-tools.md) — 3 câu.
- [The server inspector — Kiểm tra MCP server độc lập](API-24-mcp-inspector.md) — 3 câu.
- [Implementing a client — Quản lý session và giao diện gọi](API-25-mcp-client-implementation.md) — 3 câu.
- [Defining resources — Cung cấp dữ liệu theo URI](API-26-resources.md) — 3 câu.
- [Accessing resources — Đưa tài liệu vào ngữ cảnh](API-27-access-resources.md) — 3 câu.
- [Defining prompts — Đóng gói mẫu hướng dẫn](API-28-define-prompts.md) — 3 câu.
- [Prompts in the client — Khám phá và lấy mẫu có tham số](API-29-client-prompts.md) — 3 câu.
- [Claude Code in action — Ngữ cảnh, kế hoạch, thực thi](API-30-code-workflow.md) — 3 câu.
- [Enhancements with MCP servers — Mở rộng Claude Code](API-31-code-mcp.md) — 3 câu.
- [Agents and workflows — Chọn cách điều phối](API-32-agents-workflows.md) — 3 câu.
- [Parallelization workflows — Phân tích độc lập rồi tổng hợp](API-33-parallel.md) — 3 câu.
- [Chaining workflows — Chia bước theo phụ thuộc](API-34-chaining.md) — 3 câu.
- [Routing workflows — Chọn nhánh chuyên biệt](API-35-routing.md) — 3 câu.
- [Agents and tools — Công cụ có thể kết hợp](API-36-agent-tools.md) — 3 câu.
- [Environment inspection — Quan sát kết quả hành động](API-37-environment.md) — 3 câu.
- [Workflows vs agents — Đánh đổi giữa dự đoán và linh hoạt](API-38-workflow-tradeoffs.md) — 3 câu.
- [Making a request](API-39-request.md) — 3 câu.
- [Temperature — Độ biến thiên đầu ra](API-40-temperature.md) — 3 câu.
- [Project overview — Thiết kế hệ thống nhắc việc](API-41-reminder-project.md) — 3 câu.
- [Tool functions — Hàm thực thi và lỗi hữu ích](API-42-tool-functions.md) — 3 câu.
- [Introducing Retrieval Augmented Generation](API-43-rag-intro.md) — 3 câu.
- [Text chunking strategies](API-44-chunking.md) — 3 câu.
- [Text embeddings](API-45-embeddings.md) — 3 câu.
- [The full RAG flow](API-46-rag-flow.md) — 3 câu.
- [Implementing the RAG flow](API-47-rag-implementation.md) — 3 câu.
- [BM25 lexical search](API-48-bm25.md) — 3 câu.
- [A Multi-Index RAG pipeline](API-49-hybrid.md) — 3 câu.
- [Fine grained tool calling](API-50-tool-streaming.md) — 3 câu.
- [The text edit tool](API-51-text-editor.md) — 3 câu.
- [The web search tool](API-52-web-search.md) — 3 câu.
- [Citations — Liên kết câu trả lời với tài liệu](API-53-citations.md) — 3 câu.
- [Prompt caching](API-54-cache-intro.md) — 3 câu.
- [Rules of prompt caching](API-55-cache-rules.md) — 3 câu.
- [Prompt caching in action](API-56-cache-observation.md) — 3 câu.
- [Code execution and the Files API](API-57-files-execution.md) — 3 câu.
- [PDF support](API-58-pdf-input.md) — 3 câu.
- [Image support](API-59-images.md) — 3 câu.
- [Extended thinking](API-60-thinking.md) — 3 câu.
- [Response streaming](API-61-response-streaming.md) — 3 câu.
- [Accessing the API](API-62-api-lifecycle.md) — 3 câu.
- [Getting an API key](API-63-api-key.md) — 3 câu.
- [Structured data — Ví dụ prefill và stop sequence](API-64-structured-historical.md) — 3 câu.
- [Project setup — CLI và server tài liệu](API-65-mcp-project-setup.md) — 3 câu.
- [Anthropic apps — Ví dụ agent thực tế](API-66-apps.md) — 3 câu.
- [Claude Code setup](API-67-code-setup.md) — 3 câu.
- [Welcome — Bản đồ nội dung và cách luyện thực hành](API-68-course-orientation.md) — 3 câu.
- [System prompts exercise — Vai trò và tính súc tích](API-69-system-exercise.md) — 3 câu.
- [Structured data exercise — Prefill, delimiter và giới hạn bảo đảm](API-70-structured-exercise.md) — 3 câu.
- [Exercise on prompt evals — Truyền tiêu chí cho grader](API-71-eval-exercise.md) — 3 câu.
- [Exercise on prompting — Trích chủ đề theo output contract](API-72-prompting-exercise.md) — 3 câu.

## Claude Code in Action

- [Steering Long Sessions — Điều hướng phiên dài](CODE-01-steering.md) — 3 câu.
- [A CLAUDE.md That Follows — Đặt hướng dẫn đúng chỗ](CODE-02-claude-md.md) — 3 câu.
- [Verification Skills — Quy trình kiểm chứng dùng lại](CODE-03-verification-skills.md) — 3 câu.
- [Permission Modes — Quyền thực thi và kiểm chứng](CODE-04-permissions.md) — 3 câu.
- [Hooks — Chặn trước, kiểm tra sau](CODE-05-hooks.md) — 3 câu.
- [Routines and Headless — Chọn nơi chạy tự động](CODE-06-headless.md) — 3 câu.
- [GitHub Actions and Code Review — Review quản lý và CI tùy biến](CODE-07-ci-review.md) — 3 câu.
- [Verifying Unsupervised Runs — Kiểm chứng phiên tự chạy](CODE-08-unsupervised.md) — 3 câu.
- [Plugins — Đóng gói cấu hình cho nhóm](CODE-09-plugins.md) — 3 câu.

## Introduction to MCP — phần riêng

- [MCP review — Ai kiểm soát từng primitive?](MCP-01-control-patterns.md) — 3 câu.

## AI Fluency — nền tảng

- [Introduction to AI Fluency — Học cách cộng tác](FLUENCY-01-introduction.md) — 3 câu.
- [Why do we need AI Fluency? — Ba cách cộng tác](FLUENCY-02-collaboration.md) — 3 câu.
- [The 4D Framework — Bốn năng lực](FLUENCY-03-four-d.md) — 3 câu.
- [Generative AI fundamentals — Mô hình nền tảng](FLUENCY-04-generative-ai.md) — 3 câu.
- [Capabilities & limitations — Khả năng và giới hạn](FLUENCY-05-limits.md) — 3 câu.
- [A closer look at Delegation — Phân công có chủ đích](FLUENCY-06-delegation.md) — 3 câu.
- [Project planning and Delegation](FLUENCY-07-planning.md) — 3 câu.
- [A closer look at Description](FLUENCY-08-description.md) — 3 câu.
- [Effective prompting techniques](FLUENCY-09-prompting.md) — 3 câu.
- [A closer look at Discernment](FLUENCY-10-discernment.md) — 3 câu.
- [The Description-Discernment loop](FLUENCY-11-feedback-loop.md) — 3 câu.
- [A closer look at Diligence](FLUENCY-12-diligence.md) — 3 câu.
- [Conclusion — Tích hợp bốn năng lực](FLUENCY-13-conclusion.md) — 3 câu.
- [Additional activities — Duy trì thực hành](FLUENCY-14-activities.md) — 3 câu.

## Claude 101

- [What is Claude?](CLAUDE101-01-overview.md) — 3 câu.
- [Your first conversation with Claude](CLAUDE101-02-conversation.md) — 3 câu.
- [Getting better results](CLAUDE101-03-better-results.md) — 3 câu.
- [Introduction to projects](CLAUDE101-04-projects.md) — 3 câu.
- [Working with skills](CLAUDE101-05-skills.md) — 3 câu.
- [Connecting your tools](CLAUDE101-06-connectors.md) — 3 câu.
- [Enterprise search](CLAUDE101-07-enterprise-search.md) — 3 câu.
- [Research for deep dives](CLAUDE101-08-research.md) — 3 câu.
- [Claude in action: use-cases by role](CLAUDE101-09-roles.md) — 3 câu.
- [What’s next? — Chọn bước thực hành](CLAUDE101-10-next.md) — 3 câu.
- [How you’ll work with Claude on your desktop](CLAUDE101-11-desktop.md) — 3 câu.
- [Creating with artifacts](CLAUDE101-12-artifacts.md) — 3 câu.
- [Other ways to work with Claude](CLAUDE101-13-interfaces.md) — 3 câu.

## Claude with Amazon Bedrock

- [Introduction to the course](BEDROCK-01-introduction.md) — 3 câu.
- [Overview of Claude Models — Chọn theo đánh đổi](BEDROCK-02-model-tradeoffs.md) — 3 câu.
- [Accessing the API — Luồng qua Bedrock](BEDROCK-03-request-flow.md) — 3 câu.
- [Making a request — Adapter Converse](BEDROCK-04-converse-request.md) — 3 câu.
- [Controlling model output — Prefill và dấu dừng](BEDROCK-05-output-control.md) — 3 câu.
- [Batch tool use — Gom lời gọi khác với chạy đồng thời](BEDROCK-06-batch-tool.md) — 3 câu.
- [Flexible tool extraction — Linh hoạt và hợp đồng chặt](BEDROCK-07-flexible-extraction.md) — 3 câu.
- [Reranking results — Xếp lại các ứng viên](BEDROCK-08-reranking.md) — 3 câu.
- [Contextual retrieval — Giữ bối cảnh của chunk](BEDROCK-09-contextual-retrieval.md) — 3 câu.
- [Parallelizing Claude Code — Cô lập công việc song song](BEDROCK-10-parallel-code.md) — 3 câu.
- [Automated debugging — Từ log đến PR có kiểm chứng](BEDROCK-11-automated-debugging.md) — 3 câu.
- [Computer Use — Kiểm thử giao diện qua phản hồi trực quan](BEDROCK-12-computer-use.md) — 3 câu.
- [How Computer Use works — Ứng dụng thực thi vòng tool](BEDROCK-13-computer-use-loop.md) — 3 câu.
- [Qualities of agents — Quan sát, hành động, đánh giá](BEDROCK-14-agent-qualities.md) — 3 câu.

## Claude on Google Cloud

- [Vertex AI Setup — Xác thực và quyền truy cập đúng provider](VERTEX-01-setup.md) — 3 câu.

## Đối chiếu bổ sung

- [Tiến độ Claude 101](../COVERAGE-claude101.md).
- [Tiến độ Bedrock](../COVERAGE-bedrock.md).
- [Tiến độ Vertex](../COVERAGE-vertex.md).

Các bài cloud đã đối chiếu có dẫn nguồn ngay trong bài chung và ghi chú khác biệt provider. Không đếm các câu hỏi dùng lại thành câu mới.

## Cách học

Đọc tóm tắt, làm câu hỏi trước khi mở đáp án, rồi ghi nguyên nhân câu sai. Câu hỏi được biên soạn cho việc học; không phải câu thi thật hay bộ mô phỏng đã được chuẩn hóa tâm trắc. Các bài AI Fluency có ghi công và giấy phép CC BY-NC-SA 4.0 trong từng file.
