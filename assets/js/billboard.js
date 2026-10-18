(() => {
  const board = document.querySelector('.greeting-board');
  if (!board) return;
  // Emoticons from the user's GitHub profile greeting banner.
  const greetings = [
    { lang: 'en', label: 'English', text: "Hi, I'm Kasra!", face: '(＾◡＾)っ', dir: 'ltr' },
    { lang: 'zh-CN', label: '中文', text: '你好，我是 Kasra！', face: '(ﾉ≧∀≦)ﾉ', dir: 'ltr' },
    { lang: 'ja', label: '日本語', text: 'こんにちは、Kasraです！', face: '(^▽^)/', dir: 'ltr' },
    { lang: 'es', label: 'Español', text: '¡Hola, soy Kasra!', face: '(〜￣▽￣)〜', dir: 'ltr' },
    { lang: 'de', label: 'Deutsch', text: 'Hallo, ich bin Kasra!', face: '(*≧ω≦)ノ', dir: 'ltr' },
    { lang: 'ru', label: 'Русский', text: 'Привет, я Касра!', face: '(o^▽^o)', dir: 'ltr' },
    { lang: 'it', label: 'Italiano', text: 'Ciao, sono Kasra!', face: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', dir: 'ltr' },
    { lang: 'hi', label: 'हिन्दी', text: 'नमस्ते, मैं कसरा हूँ!', face: '(^人^)', dir: 'ltr' },
    { lang: 'tr', label: 'Türkçe', text: 'Merhaba, ben Kasra!', face: '(＾▽＾)', dir: 'ltr' },
    { lang: 'fa', label: 'فارسی', text: 'سلام، من کسرا هستم!', face: '(❛◡❛✿)', dir: 'rtl' },
    { lang: 'ko', label: '한국어', text: '안녕하세요, Kasra입니다!', face: '(^０^)ノ', dir: 'ltr' }
  ];
  const letters = board.querySelector('.board-letters');
  const face = board.querySelector('.board-emoticon');
  const message = board.querySelector('.board-message');
  const language = board.querySelector('.board-language');
  const toggle = board.querySelector('[data-board="toggle"]');
  const previous = board.querySelector('[data-board="previous"]');
  const next = board.querySelector('[data-board="next"]');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let index = window.siteI18n?.language === 'zh' ? 1 : 0;
  // Reading comes first. Visitors can opt into a slow, whole-line rotation.
  let paused = true;
  let timer;
  function show() {
    clearTimeout(timer);
    const current = greetings[index];
    const chinese = window.siteI18n?.language === 'zh';
    message.lang = current.lang;
    message.dir = current.dir;
    letters.textContent = current.text;
    face.textContent = current.face;
    language.textContent = current.label;
    language.lang = current.lang;
    board.setAttribute('aria-label', chinese ? '多语言问候' : 'Multilingual greetings');
    previous.setAttribute('aria-label', chinese ? '上一种语言' : 'Previous greeting');
    next.setAttribute('aria-label', chinese ? '下一种语言' : 'Next greeting');
    toggle.textContent = paused ? (chinese ? '播放' : 'Play') : (chinese ? '暂停' : 'Pause');
    toggle.setAttribute('aria-label', paused ? (chinese ? '播放问候动画' : 'Play greetings') : (chinese ? '暂停问候动画' : 'Pause greetings'));
    board.dataset.paused = String(paused);
    if (!paused && !document.hidden) timer = setTimeout(() => step(1), 10000);
  }
  function step(delta) { index = (index + delta + greetings.length) % greetings.length; show(); }
  toggle.hidden = previous.hidden = next.hidden = false;
  toggle.addEventListener('click', () => { paused = !paused; show(); });
  previous.addEventListener('click', () => step(-1));
  next.addEventListener('click', () => step(1));
  document.addEventListener('visibilitychange', () => { if (document.hidden) clearTimeout(timer); else show(); });
  motion.addEventListener('change', () => { if (motion.matches) paused = true; show(); });
  window.addEventListener('languagechange', () => { index = window.siteI18n?.language === 'zh' ? 1 : 0; show(); });
  show();
})();
