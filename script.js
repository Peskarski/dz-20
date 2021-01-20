const buttonEl = document.querySelector('.btn-markdown');
const textAreaEl = document.querySelector('#textArea');
const resultAreaEl = document.querySelector('.result-area');

function renderText (text, container) {
  container.innerHTML = markdown(text);
}

buttonEl.addEventListener('click', () => {
  renderText(textAreaEl.value, resultAreaEl);
});

function markdown (text) {
  return text
  .replace(/\[--([^n]+)--\]/gim, '<span class="text-dang">$1</span>')
  .replace(/\[\+\+([^n]+)\+\+\]/gim, '<span class="text-sucs">$1</span>')
  .replace(/-\|/gim, '<br>')
  .replace(/---/gim, '<hr>')
  .replace(/\[([^\n]+)\]\(([^\n]+)\)/gim, '<a href="$2" target="_blank" rel="noopener">$1</a>')
  .replace(/~~([^\n]+)~~/gim, '<strike>$1</strike>')
  .replace(/\*\*([^\n]+)\*\*/gim, '<strong>$1</strong>')
  .replace(/(\*{1}\s([^\n]+)\n+)/gim, '<ul><li>$2</li></ul>')
  .replace(/#{4}\s([^\n]+)/gim, '<h4>$1</h4>')
  .replace(/#{3}\s([^\n]+)/gim, '<h3>$1</h3>')
  .replace(/#{2}\s([^\n]+)/gim, '<h2>$1</h2>')
  .replace(/#\s([^\n]+)/gim, '<h1>$1</h1>')
}
