(() => {
  const grid = document.getElementById("gallery-grid");
  const viewer = document.getElementById("photo-viewer");
  const full = document.getElementById("photo-full");
  viewer.querySelector("button").addEventListener("click", () => viewer.close());
  viewer.addEventListener("click", (event) => {
    if (event.target !== viewer) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
  });

  fetch("/assets/data/gallery.json?v=586bf631d088")
    .then((response) => {
      if (!response.ok) throw new Error("Gallery unavailable");
      return response.json();
    })
    .then((photos) => {
      if (!Array.isArray(photos) || !photos.length) return;
      const cards = photos.map((photo) => {
        for (const field of ["title", "alt", "category", "caption"]) {
          window.siteI18n?.register(photo[field], photo[field + "_zh"]);
        }
        // Photos are repository assets; reject unexpected URL schemes or external hosts.
        const url = new URL(photo.src, location.origin);
        if (url.origin !== location.origin || !url.pathname.startsWith("/images/")) {
          throw new Error("Use a local image path for gallery photos");
        }
        const card = document.createElement("figure");
        card.className = "gallery-card";
        const link = document.createElement("a");
        link.href = url.href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", `Enlarge ${photo.title}`);
        const image = document.createElement("img");
        image.src = url.href;
        image.alt = photo.alt || photo.title;
        image.loading = "lazy";
        image.decoding = "async";
        link.append(image);
        card.append(link);
        link.addEventListener("click", (event) => {
          if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey ||
              typeof viewer.showModal !== "function") return;
          event.preventDefault();
          full.src = url.href;
          full.alt = photo.alt || photo.title;
          viewer.setAttribute("aria-label", photo.title);
          window.siteI18n?.apply();
          viewer.showModal();
        });
        return card;
      });
      grid.replaceChildren(...cards);
      window.siteI18n?.apply();
    })
    .catch(() => { /* Keep the static portrait available if the archive cannot load. */ });
})();
