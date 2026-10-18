(() => {
  const grid = document.getElementById("gallery-grid");
  const viewer = document.getElementById("photo-viewer");
  const full = document.getElementById("photo-full");
  const title = document.getElementById("photo-title");
  const caption = document.getElementById("photo-caption");
  viewer.querySelector("button").addEventListener("click", () => viewer.close());
  viewer.addEventListener("click", (event) => {
    if (event.target !== viewer) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
  });

  fetch("/assets/data/gallery.json")
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
        const info = document.createElement("figcaption");
        const category = document.createElement("span");
        category.className = "gallery-category";
        category.textContent = photo.category || "Moments";
        const heading = document.createElement("h2");
        heading.textContent = photo.title;
        info.append(category, heading);
        if (photo.caption) {
          const description = document.createElement("p");
          description.textContent = photo.caption;
          info.append(description);
        }
        link.append(image);
        card.append(link, info);
        link.addEventListener("click", (event) => {
          if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey ||
              typeof viewer.showModal !== "function") return;
          event.preventDefault();
          full.src = url.href;
          full.alt = photo.alt || photo.title;
          title.textContent = photo.title;
          caption.textContent = photo.caption || "";
          caption.hidden = !photo.caption;
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
