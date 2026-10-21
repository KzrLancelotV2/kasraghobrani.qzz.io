const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../assets/js/pepe.js'), 'utf8');
// A small event/DOM fixture: no browser, network, or real localStorage is used.
function mount({ page = 'index', storage = new Map(), blockedStorage = false } = {}) {
  const nodes = new Map(), timers = new Map();
  let now = 0, timerId = 0, observer;
  class Element extends EventTarget {
    constructor(id = '') { super(); this.id = id; this.hidden = false; this.dataset = {}; this.attrs = {}; this.textContent = ''; this.classes = new Set(); this.classList = { add: x => this.classes.add(x), remove: x => this.classes.delete(x) }; }
    set innerHTML(html) { for (const match of html.matchAll(/<\w+\b([^>]*\bid="([^"]+)"[^>]*)>/g)) { const element = new Element(match[2]); element.hidden = /\bhidden\b/.test(match[1]); nodes.set(element.id, element); } }
    querySelector(selector) { return nodes.get(selector.slice(1)) || null; }
    setAttribute(key, value) { this.attrs[key] = value; }
    focus() { document.activeElement = this; }
    contains(element) { return element === this || (this.id === 'pepe-bubble' && element?.id === 'pepe-dismiss'); }
    matches(selector) { return selector === this.selector; }
    click() { this.dispatchEvent(new Event('click')); }
  }
  const document = new EventTarget();
  document.readyState = 'complete'; document.hidden = false; document.documentElement = { lang: 'en' };
  document.createElement = () => new Element(); document.getElementById = id => nodes.get(id);
  document.querySelector = selector => selector === 'dialog[open]' ? (document.modalOpen ? {} : null) : nodes.get(selector) || null;
  document.body = { append: e => nodes.set(e.id, e) };
  for (const selector of ['#ai-for-life-sciences', '#efficient-deep-learning', '#rumor-mitigation', '.experience-section']) { const e = new Element(); e.selector = selector; nodes.set(selector, e); }
  const window = new EventTarget(); window.siteI18n = { language: 'en' };
  class Observer { constructor(fn) { observer = fn; } observe() {} }
  window.IntersectionObserver = Observer;
  vm.runInNewContext(source, { window, document, location: { pathname: `/${page}.html` },
    localStorage: { getItem: k => { if (blockedStorage) throw Error(); return storage.get(k); }, setItem: (k,v) => { if (blockedStorage) throw Error(); storage.set(k,v); } },
    Date: { now: () => now }, Math, IntersectionObserver: Observer,
    setTimeout: (fn, delay) => { timers.set(++timerId, { fn, at: now + delay }); return timerId; }, clearTimeout: id => timers.delete(id)
  });
  return { document, window, storage, get: id => nodes.get(id),
    advance(ms) { const end = now + ms; while (true) { const next = [...timers].filter(([,t]) => t.at <= end).sort((a,b) => a[1].at-b[1].at)[0]; if (!next) break; now = next[1].at; timers.delete(next[0]); next[1].fn(); } now = end; },
    enter(selector) { observer([{ target: nodes.get(selector), isIntersecting: true }]); },
    language(lang) { window.siteI18n.language = lang; window.dispatchEvent(new Event('languagechange')); }
  };
}
test('quiet initial state, discoverable hint, non-repeating dialogue cycle', () => {
  const p = mount(); assert.equal(p.get('pepe-bubble').hidden, true); assert.equal(p.get('pepe-hint').textContent, 'Tap to chat');
  p.advance(60000); assert.equal(p.get('pepe-bubble').hidden, true);
  const lines = new Set(); for (let i=0;i<6;i++) { p.get('pepe-chat').click(); lines.add(p.get('pepe-message').textContent); }
  assert.equal(lines.size, 6); assert.equal(p.get('pepe-chat').attrs['aria-expanded'], 'true');
});
test('mute closes speech and persists across page navigation; tapping restores it', () => {
  const p = mount(); p.get('pepe-chat').click(); p.get('pepe-mute').click(); assert.equal(p.get('pepe-bubble').hidden, true);
  const q = mount({page:'research',storage:p.storage}); q.enter('#ai-for-life-sciences'); q.advance(60000);
  assert.equal(q.get('pepe-hint').textContent, 'Tap to unmute'); assert.equal(q.get('pepe-bubble').hidden, true);
  q.get('pepe-chat').click(); assert.equal(q.storage.get('pepe-muted'),'false'); assert.equal(q.get('pepe-bubble').hidden,false);
});
test('Chinese switches current dialogue and controls without opening dismissed speech', () => {
  const p=mount(); p.get('pepe-chat').click(); const english=p.get('pepe-message').textContent;
  p.language('zh'); assert.match(p.get('pepe-message').textContent, /[\u4e00-\u9fff]/); assert.equal(p.get('pepe-mute').textContent,'静音');
  p.language('en'); assert.equal(p.get('pepe-message').textContent,english);
  p.get('pepe-dismiss').click(); p.language('zh'); assert.equal(p.get('pepe-bubble').hidden,true);
  assert.equal(p.document.activeElement,p.get('pepe-chat'));
});
test('auto-dismiss, Escape, hidden pages and photo dialogs', () => {
  const p=mount(); p.get('pepe-chat').click(); p.advance(12000); assert.equal(p.get('pepe-bubble').hidden,true);
  p.get('pepe-chat').click(); const escape=new Event('keydown'); escape.key='Escape'; p.document.dispatchEvent(escape); assert.equal(p.get('pepe-bubble').hidden,true);
  p.document.modalOpen=true; p.get('pepe-chat').click(); assert.equal(p.get('pepe-bubble').hidden,true);
  p.document.modalOpen=false; p.get('pepe-chat').click(); p.document.hidden=true; p.document.dispatchEvent(new Event('visibilitychange')); assert.equal(p.get('pepe-bubble').hidden,true);
});
test('section reaction requires engagement, respects cooldown, and occurs at most once', () => {
  const p=mount({page:'research'}); p.enter('#ai-for-life-sciences'); assert.equal(p.get('pepe-bubble').hidden,true);
  p.get('pepe-chat').click(); assert.match(p.get('pepe-message').textContent,/cells respond/);
  p.enter('#efficient-deep-learning'); assert.match(p.get('pepe-message').textContent,/cells respond/);
  p.advance(21000); p.enter('.experience-section'); assert.match(p.get('pepe-message').textContent,/labs and people/);
  p.advance(21000); p.enter('#rumor-mitigation'); assert.equal(p.get('pepe-bubble').hidden,true);
});
test('all page pools have bilingual lines and work without storage', () => {
  for (const page of ['index','about','research','gallery','contact','interests','unknown']) {
    const p=mount({page,blockedStorage:true});
    for (let i=0;i<8;i++) { p.language('en'); p.get('pepe-chat').click(); assert.ok(p.get('pepe-message').textContent.length>10); p.language('zh'); assert.match(p.get('pepe-message').textContent,/[\u4e00-\u9fff]/); }
  }
});
