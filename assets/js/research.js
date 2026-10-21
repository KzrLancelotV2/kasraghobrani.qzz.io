(() => {
  'use strict';
  const cards = [...document.querySelectorAll('.work-card[data-topics]')];
  if (!cards.length) return;
  const filters = [...document.querySelectorAll('[data-filter]')];
  const steps = [...document.querySelectorAll('[data-bison-step]')];
  const sources = [...document.querySelectorAll('[data-source]')];
  const audiences = { A: [1, 2, 3], B: [2, 3, 4], C: [4, 5, 6] };
  let filter = 'all';
  let selected = new Set(['A']);
  const chinese = () => window.siteI18n?.language === 'zh';

  function renderFilter() {
    let count = 0;
    cards.forEach(card => {
      card.hidden = filter !== 'all' && !card.dataset.topics.split(' ').includes(filter);
      if (!card.hidden) count++;
    });
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    document.getElementById('research-results').textContent = chinese()
      ? `显示 ${count} 个项目，共 ${cards.length} 个`
      : `Showing ${count} of ${cards.length} projects`;
  }

  function renderStep(step) {
    steps.forEach(button => {
      const active = button.dataset.bisonStep === step;
      button.setAttribute('aria-pressed', String(active));
      document.getElementById(button.getAttribute('aria-controls')).hidden = !active;
    });
  }

  function renderCoverage() {
    const counts = new Map();
    selected.forEach(source => audiences[source].forEach(person => counts.set(person, (counts.get(person) || 0) + 1)));
    sources.forEach(button => {
      const active = selected.has(button.dataset.source);
      button.setAttribute('aria-pressed', String(active));
      button.disabled = !active && selected.size === 2;
    });
    document.querySelectorAll('[data-start], [data-edge]').forEach(node =>
      node.classList.toggle('is-active', selected.has(node.dataset.start || node.dataset.edge)));
    document.querySelectorAll('[data-audience]').forEach(node => {
      const count = counts.get(Number(node.dataset.audience)) || 0;
      node.classList.toggle('is-active', count > 0);
      node.classList.toggle('is-overlap', count > 1);
    });
    const overlap = [...counts.values()].filter(count => count > 1).length;
    document.getElementById('coverage-result').textContent = chinese()
      ? `覆盖 ${counts.size} / 6 人 · 其中 ${overlap} 人被重复覆盖`
      : `${counts.size} of 6 people reached · ${overlap} reached by both`;
  }

  filters.forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    renderFilter();
  }));
  steps.forEach(button => button.addEventListener('click', () => renderStep(button.dataset.bisonStep)));
  sources.forEach(button => button.addEventListener('click', () => {
    const source = button.dataset.source;
    if (selected.has(source)) selected.delete(source);
    else if (selected.size < 2) selected.add(source);
    renderCoverage();
  }));
  document.getElementById('coverage-reset').addEventListener('click', () => {
    selected = new Set(['A']);
    renderCoverage();
  });
  window.addEventListener('languagechange', () => { renderFilter(); renderCoverage(); });
  renderFilter();
  renderStep('datasets');
  renderCoverage();
  document.querySelector('.research-filters').hidden = false;
  document.querySelector('.bison-controls').hidden = false;
  document.getElementById('coverage-example').hidden = false;
})();
