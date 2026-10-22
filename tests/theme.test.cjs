const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../assets/js/theme.js'), 'utf8');
function mount({ storage = new Map(), blocked = false, language = 'en', loading = false } = {}) {
  class Element extends EventTarget {
    constructor() { super(); this.dataset = {}; this.attrs = {}; this.hidden = true; }
    getAttribute(key) { return this.attrs[key]; }
    setAttribute(key, value) { this.attrs[key] = value; }
    click() { this.dispatchEvent(new Event('click')); }
  }
  const root = new Element(), button = new Element(), label = new Element(), icon = new Element();
  root.lang = 'en'; icon.attrs.href = '/images/pepe-favicon.svg?v=old';
  const document = new EventTarget(); document.documentElement = root;
  document.readyState = loading ? 'loading' : 'complete';
  document.querySelector = () => icon;
  document.getElementById = id => id === 'theme-toggle' ? button : label;
  const window = new EventTarget(); window.siteI18n = { language };
  vm.runInNewContext(source, { document, window, localStorage: {
    getItem(key) { if (blocked) throw Error('blocked'); return storage.get(key); },
    setItem(key, value) { if (blocked) throw Error('blocked'); storage.set(key, value); }
  } });
  return {root,button,label,icon,document,window,storage};
}
test('switches both ways and remembers palette on another page', () => {
  const p=mount(); assert.equal(p.root.dataset.palette,'original');
  p.button.click(); assert.equal(p.root.dataset.palette,'red-gold');
  assert.equal(p.button.attrs['aria-pressed'],'true');
  const q=mount({storage:p.storage}); assert.equal(q.root.dataset.palette,'red-gold');
  q.button.click(); assert.equal(q.root.dataset.palette,'original');
  assert.equal(q.icon.attrs.href,'/images/pepe-favicon-original.svg');
});
test('saved palette is applied in head before controls are initialized', () => {
  const p=mount({storage:new Map([['site-palette','red-gold']]),loading:true});
  assert.equal(p.root.dataset.palette,'red-gold'); assert.equal(p.button.hidden,true);
  p.document.dispatchEvent(new Event('DOMContentLoaded')); assert.equal(p.button.hidden,false);
});
test('Chinese labels follow language changes without changing palette', () => {
  const p=mount(); p.button.click(); p.window.siteI18n.language='zh';
  p.window.dispatchEvent(new Event('languagechange')); assert.equal(p.label.textContent,'红 / 金');
  assert.equal(p.root.dataset.palette,'red-gold'); p.button.click(); assert.equal(p.label.textContent,'青 / 粉');
});
test('works with unavailable storage, invalid preferences, and cross-tab updates', () => {
  const p=mount({blocked:true}); p.button.click(); assert.equal(p.root.dataset.palette,'red-gold');
  const q=mount({storage:new Map([['site-palette','invalid']])}); assert.equal(q.root.dataset.palette,'original');
  const e=new Event('storage');e.key='site-palette';e.newValue='red-gold';q.window.dispatchEvent(e);
  assert.equal(q.root.dataset.palette,'red-gold');assert.equal(q.label.textContent,'Red / Gold');
});
