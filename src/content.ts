window.onload = () => {
  // Regular expression to match the keywords "AI" or "GPT"
  const keywordRegex =
    /\b(AI|GPT|GPT-3|GPT3|GPT4|GPT-4|GPT-4o|LLM|LLAMA|OPENAI)\b/i;

  const submissions = document.querySelectorAll('tr.athing');

  for (const submission of submissions) {
    const title = submission.querySelector('.titleline a')?.textContent;
    if (!title) continue;

    if (keywordRegex.test(title)) {
      submission.nextSibling?.nextSibling?.nextSibling?.remove();
      submission.nextSibling?.nextSibling?.remove();
      submission.nextSibling?.remove();
      submission.remove();
    }
  }
};
