const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'research.html'), 'utf8');
const source = fs.readFileSync(path.join(root, 'assets/js/research.js'), 'utf8');

// Read the actual markup into a minimal event fixture; no browser is used.
function mount() {
  class Element extends EventTarget {
    constructor(attrs) {
      super(); this.attrs = attrs; this.dataset = {}; this.textContent = '';
      this.hidden = 'hidden' in attrs; this.disabled = false; this.classes = new Set((attrs.class || '').split(' '));
      this.classList = { toggle: (name, active) => active ? this.classes.add(name) : this.classes.delete(name) };
      for (const [key, value] of Object.entries(attrs)) if (key.startsWith('data-')) this.dataset[key.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = value;
    }
    getAttribute(key) { return this.attrs[key]; }
    setAttribute(key, value) { this.attrs[key] = value; }
    click() { if (!this.disabled) this.dispatchEvent(new Event('click')); }
  }
  const nodes = [...html.matchAll(/<[a-z][\w-]*\b([^>]*)>/g)].map(match => {
    const attrs = Object.fromEntries([...match[1].matchAll(/([\w-]+)(?:="([^"]*)")?/g)].map(m => [m[1], m[2] || '']));
    return new Element(attrs);
  });
  const matches = (node, selector) => {
    const cls = selector.match(/\.([\w-]+)/)?.[1];
    const attr = selector.match(/\[([\w-]+)\]/)?.[1];
    return (!cls || node.classes.has(cls)) && (!attr || attr in node.attrs);
  };
  const all = selector => nodes.filter(node => selector.split(',').some(s => matches(node, s.trim())));
  const get = id => nodes.find(node => node.attrs.id === id);
  const document = { querySelectorAll: all, querySelector: s => all(s)[0], getElementById: get };
  const window = new EventTarget(); window.siteI18n = { language: 'en' };
  vm.runInNewContext(source, { document, window });
  return { all, get, language(lang) { window.siteI18n.language = lang; window.dispatchEvent(new Event('languagechange')); } };
}

test('topic filters show the correct projects and preserve selection across languages', () => {
  const p = mount();
  const visible = () => p.all('.work-card[data-topics]').filter(c => !c.hidden).map(c => c.attrs.id);
  assert.equal(visible().length, 3);
  p.all('[data-filter]').find(b => b.dataset.filter === 'ml').click();
  assert.deepEqual(visible(), ['ai-for-life-sciences', 'efficient-deep-learning']);
  p.language('zh'); assert.match(p.get('research-results').textContent, /显示 2 个项目/);
  assert.equal(visible().length, 2);
  p.all('[data-filter]').find(b => b.dataset.filter === 'networks').click();
  assert.deepEqual(visible(), ['rumor-mitigation']);
  p.all('[data-filter]').find(b => b.dataset.filter === 'bio').click();
  assert.deepEqual(visible(), ['ai-for-life-sciences']);
  p.all('[data-filter]').find(b => b.dataset.filter === 'all').click();
  assert.equal(visible().length, 3);
});

test('Bison walkthrough has one visible panel and retains its step on language switch', () => {
  const p = mount();
  assert.equal(p.get('bison-datasets').hidden, false);
  assert.equal(p.get('bison-shared').hidden, true);
  const button = p.all('[data-bison-step]').find(b => b.dataset.bisonStep === 'prediction');
  button.click(); p.language('zh');
  assert.equal(p.get('bison-datasets').hidden, true);
  assert.equal(p.get('bison-prediction').hidden, false);
  assert.equal(button.getAttribute('aria-pressed'), 'true');
});

test('audience overlap counts distinct people, limits selection, and supports reset', () => {
  const p = mount();
  const [a, b, c] = p.all('[data-source]');
  const result = () => p.get('coverage-result').textContent;
  assert.match(result(), /^3 of 6/);
  b.click(); assert.equal(result(), '4 of 6 people reached · 2 reached by both');
  assert.equal(c.disabled, true); c.click(); assert.match(result(), /^4 of 6/);
  assert.equal(p.all('[data-audience]').filter(n => n.classes.has('is-overlap')).length, 2);
  b.click(); c.click(); assert.equal(result(), '6 of 6 people reached · 0 reached by both');
  p.language('zh'); assert.equal(result(), '覆盖 6 / 6 人 · 其中 0 人被重复覆盖');
  a.click(); c.click(); assert.match(result(), /覆盖 0/);
  p.get('coverage-reset').click(); p.language('en'); assert.match(result(), /^3 of 6/);
  assert.equal(a.getAttribute('aria-pressed'), 'true');
});

test('paper links and no-JavaScript content are present without an HMI paper link', () => {
  assert.match(html, /href="https:\/\/arxiv.org\/abs\/2609.32467"/);
  assert.match(html, /href="https:\/\/arxiv.org\/pdf\/2609.32467"/);
  const hmi = html.split('id="rumor-mitigation"')[1].split('</article>')[0];
  assert.doesNotMatch(hmi, /href=/);
  assert.match(hmi, /<noscript>/);
  for (const panel of ['datasets', 'shared', 'prediction']) assert.doesNotMatch(html.match(new RegExp(`<section[^>]*id="bison-${panel}"[^>]*>`))[0], /hidden/);
});
