(() => {
  const root = document.documentElement;
  const valid = value => value === 'red-gold' ? 'red-gold' : 'original';
  let palette = valid(root.dataset.defaultPalette);
  try { const stored = localStorage.getItem('site-palette'); if (stored) palette = valid(stored); } catch (_) {}
  // Run in the head so a saved palette is applied before the first paint.
  function apply() {
    root.dataset.palette = palette;
    const icon = document.querySelector('link[rel="icon"]');
    if (icon) {
      if (!icon.dataset.paletteBase) icon.dataset.paletteBase = icon.getAttribute('href').replace(/pepe-favicon(?:-original)?\.svg.*$/, '');
      icon.setAttribute('href', icon.dataset.paletteBase + (palette === 'original' ? 'pepe-favicon-original.svg' : 'pepe-favicon.svg'));
    }
  }
  apply();
  function init() {
    const button = document.getElementById('theme-toggle');
    if (!button) return;
    const label = document.getElementById('theme-label');
    function labels() {
      const red = palette === 'red-gold';
      const zh = (window.siteI18n?.language || root.lang || 'en').startsWith('zh');
      label.textContent = zh ? (red ? '红 / 金' : '青 / 粉') : (red ? 'Red / Gold' : 'Cyan / Pink');
      button.setAttribute('aria-label', zh ? '使用红金配色' : 'Use red and gold palette');
      button.setAttribute('aria-pressed', String(red));
      button.setAttribute('title', zh ? (red ? '切换至青粉配色' : '切换至红金配色') : (red ? 'Switch to cyan and pink' : 'Switch to red and gold'));
    }
    button.addEventListener('click', () => {
      palette = palette === 'original' ? 'red-gold' : 'original';
      try { localStorage.setItem('site-palette', palette); } catch (_) {}
      apply(); labels();
    });
    window.addEventListener('languagechange', labels);
    window.addEventListener('storage', event => {
      if (event.key === 'site-palette' || event.key === null) {
        palette = valid(event.newValue); apply(); labels();
      }
    });
    labels(); button.hidden = false;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
