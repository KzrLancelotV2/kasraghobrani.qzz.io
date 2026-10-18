(() => {
  const board = document.querySelector('.greeting-board');
  if (!board) return;
  // Inspired by the multilingual typing banner on KzrLancelotV2/KzrLancelotV2.
  const greetings = [
    { lang: 'en', label: 'English', text: "Hi, I'm Kasra!", dir: 'ltr' },
    { lang: 'zh-CN', label: '中文', text: '你好，我是 Kasra！', dir: 'ltr' },
    { lang: 'ja', label: '日本語', text: 'こんにちは、Kasraです！', dir: 'ltr' },
    { lang: 'es', label: 'Español', text: '¡Hola, soy Kasra!', dir: 'ltr' },
    { lang: 'de', label: 'Deutsch', text: 'Hallo, ich bin Kasra!', dir: 'ltr' },
    { lang: 'ru', label: 'Русский', text: 'Привет, я Касра!', dir: 'ltr' },
    { lang: 'it', label: 'Italiano', text: 'Ciao, sono Kasra!', dir: 'ltr' },
    { lang: 'hi', label: 'हिन्दी', text: 'नमस्ते, मैं कसरा हूँ!', dir: 'ltr' },
    { lang: 'tr', label: 'Türkçe', text: 'Merhaba, ben Kasra!', dir: 'ltr' },
    { lang: 'fa', label: 'فارسی', text: 'سلام، من کسرا هستم!', dir: 'rtl' },
    { lang: 'ko', label: '한국어', text: '안녕하세요, Kasra입니다!', dir: 'ltr' }
  ];
  const letters = board.querySelector('.board-letters');
  const message = board.querySelector('.board-message');
  const readable = board.querySelector('.board-sr-only');
  const language = board.querySelector('.board-language');
  const counter = board.querySelector('.board-counter');
  const toggle = board.querySelector('[data-board="toggle"]');
  const previous = board.querySelector('[data-board="previous"]');
  const next = board.querySelector('[data-board="next"]');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const segmenter = typeof Intl.Segmenter === 'function' ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null;
  let index = window.siteI18n?.language === 'zh' ? 1 : 0;
  let paused = motion.matches;
  let timer;
  const chunks = (text) => segmenter ? Array.from(segmenter.segment(text), (part) => part.segment) : Array.from(text);
  function clear() { clearTimeout(timer); }
  function schedule(callback, delay) {
    clear();
    if (!paused && !document.hidden) timer = setTimeout(callback, delay);
  }
  function labels() {
    const chinese = window.siteI18n?.language === 'zh';
    board.setAttribute('aria-label', chinese ? '多语言问候' : 'Multilingual greetings');
    board.querySelector('.board-heading').textContent = chinese ? '你好，世界' : 'HELLO, WORLD';
    previous.setAttribute('aria-label', chinese ? '上一种语言' : 'Previous greeting');
    next.setAttribute('aria-label', chinese ? '下一种语言' : 'Next greeting');
    toggle.textContent = paused ? (chinese ? '播放' : 'Play') : (chinese ? '暂停' : 'Pause');
    toggle.setAttribute('aria-label', paused ? (chinese ? '播放问候动画' : 'Play greetings') : (chinese ? '暂停问候动画' : 'Pause greetings'));
    board.dataset.paused = String(paused);
  }
  function show(animate = true) {
    clear();
    const current = greetings[index];
    message.lang = current.lang;
    message.dir = current.dir;
    readable.textContent = current.text;
    language.textContent = current.label;
    language.lang = current.lang;
    counter.textContent = `${String(index + 1).padStart(2, '0')} / ${greetings.length}`;
    labels();
    const characters = chunks(current.text);
    // Whole-line updates preserve joining scripts and reduced-motion preferences.
    if (!animate || paused || motion.matches || !segmenter || current.dir === 'rtl' || current.lang === 'hi') {
      letters.textContent = current.text;
      schedule(advance, 4200);
      return;
    }
    let count = 0;
    letters.textContent = '';
    function type() {
      letters.textContent = characters.slice(0, ++count).join('');
      if (count < characters.length) schedule(type, 85);
      else schedule(advance, 3200);
    }
    type();
  }
  function advance() { index = (index + 1) % greetings.length; show(); }
  function step(delta) {
    index = (index + delta + greetings.length) % greetings.length;
    show(false);
  }
  toggle.hidden = previous.hidden = next.hidden = false;
  toggle.addEventListener('click', () => { paused = !paused; show(false); });
  previous.addEventListener('click', () => step(-1));
  next.addEventListener('click', () => step(1));
  document.addEventListener('visibilitychange', () => { if (document.hidden) clear(); else show(false); });
  motion.addEventListener('change', () => { paused = motion.matches; show(false); });
  window.addEventListener('languagechange', () => { index = window.siteI18n?.language === 'zh' ? 1 : 0; show(false); });
  show(false);
})();
