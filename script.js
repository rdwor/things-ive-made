const gallery = document.querySelector('#projects');
const filters = document.querySelector('#filters');
const dialog = document.querySelector('#detail');
const content = document.querySelector('#detail-content');
let selected = 'All projects';
function element(tag, text, cls) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (cls) node.className = cls;
  return node;
}
function photo(src, title) {
  const placeholder = () => element('div', 'Photo coming soon', 'photo placeholder');
  if (!src) return placeholder();
  const img = element('img', '', 'photo');
  img.src = src; img.alt = title; img.loading = 'lazy';
  img.addEventListener('error', () => img.replaceWith(placeholder()));
  return img;
}
function render() {
  gallery.replaceChildren();
  for (const p of projects.filter(p => selected === 'All projects' || p.category === selected)) {
    const card = element('button', '', 'project');
    card.append(photo(p.images[0], p.title), element('h2', p.title), element('div', p.category, 'category'));
    card.addEventListener('click', () => openProject(p));
    gallery.append(card);
  }
  for (const b of filters.children) b.setAttribute('aria-pressed', String(b.textContent === selected));
}
function openProject(p) {
  content.replaceChildren(element('h2', p.title), element('div', [p.category, p.date].filter(Boolean).join(' · '), 'category'));
  if (p.description) content.append(element('p', p.description));
  if (p.materials) content.append(element('p', 'Materials: ' + p.materials));
  if (!p.images.length) content.append(photo(null, p.title));
  for (const [i, src] of p.images.entries()) {
    const img = photo(src, p.title + ' — photo ' + (i+1));
    img.style.aspectRatio = 'auto'; content.append(img);
  }
  dialog.showModal();
}
for (const category of ['All projects', ...new Set(projects.map(p => p.category))]) {
  const button = element('button', category);
  button.addEventListener('click', () => { selected = category; render(); });
  filters.append(button);
}
document.querySelector('#close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
render();
