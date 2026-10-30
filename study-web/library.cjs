const fs = require('node:fs');
const path = require('node:path');
const { Marked } = require('marked');
const ROOT = path.resolve(__dirname, '..');
const GROUPS = {
  EXAM: { name: 'Trọng tâm bài thi', label: 'ÔN ƯU TIÊN', color: 'teal' },
  API: { name: 'Claude API', label: 'NỀN TẢNG KỸ THUẬT' },
  CODE: { name: 'Claude Code', label: 'CÔNG CỤ & QUY TRÌNH' },
  MCP: { name: 'Model Context Protocol', label: 'KẾT NỐI CÔNG CỤ' },
  FLUENCY: { name: 'AI Fluency', label: 'NỀN TẢNG TƯ DUY' },
  CLAUDE101: { name: 'Claude 101', label: 'LÀM QUEN CLAUDE' },
  BEDROCK: { name: 'Amazon Bedrock', label: 'NỀN TẢNG CLOUD' },
  VERTEX: { name: 'Google Vertex', label: 'NỀN TẢNG CLOUD' },
};
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const markdown = new Marked({ gfm: true, breaks: false, renderer: {
  html({ text }) { return escape(text); },
  image({ text }) { return escape(text || 'Hình minh họa'); },
  link({ href, tokens, text }) {
    const label = tokens ? this.parser.parseInline(tokens) : escape(text);
    if (/^https:\/\//i.test(href)) return `<a href="${escape(href)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
    const file = href.split('/').at(-1);
    if (/^(API|EXAM|CODE|MCP|FLUENCY|CLAUDE101|BEDROCK|VERTEX)-[\w-]+\.md$/.test(file)) return `<a href="#lesson=${encodeURIComponent(file)}">${label}</a>`;
    return label;
  },
}});
const render = text => markdown.parse(text || '');
const inline = text => markdown.parseInline(text || '');
function parseLesson(file) {
  const raw = fs.readFileSync(path.join(ROOT, 'lessons', file), 'utf8');
  const id = file;
  const group = file.split('-')[0];
  const title = raw.match(/^# (.+)$/m)?.[1] || file;
  const answerAt = raw.search(/^## Đáp án/m);
  const body = raw.slice(0, answerAt);
  const heads = [...body.matchAll(/^\*\*(?:Câu )?(\d+)[. —]*Chọn (một|hai)[^*]*\*\*\s*(.*)$/gm)];
  const answerBody = raw.slice(answerAt);
  const answerHeads = [...answerBody.matchAll(/^\s*(\d+)\.\s+\*\*([ABCD](?:\s*,\s*[ABCD])*)\.?\*\*/gm)];
  const questions = heads.map((h, i) => {
    const block = body.slice(h.index + h[0].length, heads[i + 1]?.index ?? body.length);
    const options = [...block.matchAll(/^([ABCD])\.\s+(.+)$/gm)];
    const a = answerHeads.find(x => x[1] === h[1]);
    const next = answerHeads[answerHeads.indexOf(a) + 1];
    let explanation = answerBody.slice(a.index + a[0].length, next?.index ?? answerBody.length);
    explanation = explanation.split(/^## /m)[0].trim();
    return { id: `${id}:${h[1]}`, number: +h[1], multiple: h[2] === 'hai',
      prompt: h[3] + block.slice(0, options[0]?.index ?? 0),
      promptHtml: render(h[3] + block.slice(0, options[0]?.index ?? 0)),
      options: options.map(o => ({ key: o[1], text: o[2], html: inline(o[2]) })),
      correct: a[2].split(/\s*,\s*/), explanation, explanationHtml: render(explanation), lessonId: id, lessonTitle: title };
  });
  const before = body.slice(0, heads[0]?.index ?? body.length);
  const questionHeading = before.lastIndexOf('\n## ');
  const summary = (questionHeading >= 0 ? before.slice(0, questionHeading) : before).replace(/^# .+\r?\n/, '').trim();
  const appendixStart = answerBody.indexOf('\n## ', 3);
  const notes = appendixStart >= 0 ? answerBody.slice(appendixStart).trim() : '';
  const words = summary.replace(/\S+:\/\/\S+/g, '').split(/\s+/).length;
  return { id, file, group, title, questions, readingMinutes: Math.max(2, Math.round(words / 170)),
    summary, summaryHtml: render(summary), notesHtml: render(notes), raw,
    shortTitle: title.includes(' — ') ? title.split(' — ').slice(1).join(' — ') : title };
}
const files = fs.readdirSync(path.join(ROOT, 'lessons')).filter(f => /^(API|EXAM|CODE|MCP|FLUENCY|CLAUDE101|BEDROCK|VERTEX)-.*\.md$/.test(f));
const lessons = new Map(files.map(f => [f, parseLesson(f)]));
const recommended = ['EXAM-14-loop-decomposition.md','EXAM-01-multi-agent.md','EXAM-02-escalation.md','EXAM-11-errors-tool-scope.md','EXAM-09-mcp-scope-tools.md','EXAM-15-tool-contract-scenarios.md','EXAM-10-rules-skills-scope.md','EXAM-13-review-feedback-ci.md','EXAM-16-code-config-iteration.md','EXAM-05-structured-output.md','EXAM-06-validation-retry.md','EXAM-07-batches.md','EXAM-08-multi-pass-review.md','EXAM-17-quality-examples-batch.md','EXAM-12-session-context.md','EXAM-03-errors-provenance.md','EXAM-04-confidence.md','EXAM-18-context-source-review.md'];
const ordered = [...recommended, ...files.filter(f => !recommended.includes(f)).sort()];
const library = ordered.map(id => {const l = lessons.get(id); return {id,group:l.group,title:l.title,shortTitle:l.shortTitle,questions:l.questions.length,readingMinutes:l.readingMinutes};});
function chatContext(lessonId, questionId) {
  const l = lessons.get(lessonId);
  if (!l) throw new Error('Bài học không tồn tại.');
  const q = l.questions.find(q => q.id === questionId);
  return `Bài đang học: ${l.title}\n\n${l.summary}\n\n${q ? `Câu đang hỏi: ${q.number}. ${q.prompt}\n${q.options.map(o=>o.key+'. '+o.text).join('\n')}\nĐáp án tham chiếu cho gia sư: ${q.correct.join(', ')}. ${q.explanation}` : l.questions.map(q=>`Câu ${q.number}: ${q.prompt}\n${q.options.map(o=>o.key+'. '+o.text).join('\n')}\nĐáp án tham chiếu cho gia sư: ${q.correct.join(', ')}. ${q.explanation}`).join('\n\n')}`;
}
module.exports = { ROOT, GROUPS, lessons, library, recommended, render, escape, chatContext };
