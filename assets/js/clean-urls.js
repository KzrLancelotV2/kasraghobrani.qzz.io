(() => {
  const target = document.documentElement.dataset.redirect;
  if (target) {
    location.replace(target + location.search + location.hash);
  } else if (location.pathname.endsWith('/index.html')) {
    // The directory serves the same index file, including on a fresh reload.
    history.replaceState(history.state, '', location.pathname.slice(0, -10) + location.search + location.hash);
  }
})();
