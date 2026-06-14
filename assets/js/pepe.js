(function () {
  function initPepe() {
    if (document.getElementById("pepe-container")) return;

    const dialogues = {
      home: [
        "Welcome to Kasra's research swamp.",
        "Academic website detected. Very serious. Very professional. Very frog.",
        "Computer Science, AI, biology... bro is collecting skill trees.",
        "This homepage is under construction, but spiritually complete."
      ],

      about: [
        "About Me section. Character lore unlocked.",
        "Kasra origin story loading...",
        "This is where visitors pretend they read the bio carefully.",
        "Undergraduate arc. Research arc. Pepe observes."
      ],

      interests: [
        "AI for Biology detected. Pepe approves.",
        "Gene regulatory networks? Ribbiting.",
        "Network Science + Computational Biology = dangerous combo.",
        "This interests page has strong future-PhD energy."
      ],

      publications: [
        "Publication count is loading... patience, young scholar.",
        "No pressure, but Nature is waiting.",
        "This page may look empty now. That is called potential.",
        "Publications soon. Citations later. Glory eventually."
      ],

      projects: [
        "Projects page. This is where the real suffering lives.",
        "Graphs, models, datasets... classic research pain.",
        "Every project starts as curiosity and ends as debugging.",
        "Pepe predicts 3 bugs and 1 breakthrough."
      ],

      contact: [
        "Need to contact Kasra? Choose your weapon: email, GitHub, LinkedIn.",
        "Professional networking swamp entrance.",
        "Recruiters, professors, collaborators: proceed carefully.",
        "Pepe is not responsible for unread emails."
      ],

      default: [
        "Pepe has entered the page.",
        "This page is also part of the swamp.",
        "Navigation complete. Frog remains.",
        "Interesting tab. Pepe is watching."
      ]
    };

    function getPageKey() {
      const path = window.location.pathname.toLowerCase();

      if (path.includes("about")) return "about";
      if (path.includes("interest")) return "interests";
      if (path.includes("publication")) return "publications";
      if (path.includes("project")) return "projects";
      if (path.includes("contact")) return "contact";

      if (
        path === "/" ||
        path.includes("index") ||
        path.includes("home")
      ) {
        return "home";
      }

      return "default";
    }

    function getRandomDialogue(pageKey) {
      const pageDialogues = dialogues[pageKey] || dialogues.default;
      const storageKey = "pepe-last-dialogue-" + pageKey;

      const lastDialogue = localStorage.getItem(storageKey);

      let options = pageDialogues.filter(line => line !== lastDialogue);

      if (options.length === 0) {
        options = pageDialogues;
      }

      const chosen = options[Math.floor(Math.random() * options.length)];
      localStorage.setItem(storageKey, chosen);

      return chosen;
    }

    const container = document.createElement("div");
    container.id = "pepe-container";

    const bubble = document.createElement("div");
    bubble.id = "pepe-bubble";

    const pepe = document.createElement("img");
    pepe.id = "pepe-mascot";
    pepe.src = "/images/pepe.png";
    pepe.alt = "Pepe assistant";

    container.appendChild(bubble);
    container.appendChild(pepe);
    document.body.appendChild(container);

    function typeDialogue(text) {
      bubble.textContent = "";
      bubble.classList.add("visible");

      let i = 0;

      const typer = setInterval(() => {
        bubble.textContent += text.charAt(i);
        i++;

        if (i >= text.length) {
          clearInterval(typer);
        }
      }, 28);
    }

    function speakForCurrentPage() {
      const pageKey = getPageKey();
      const line = getRandomDialogue(pageKey);
      typeDialogue(line);
    }

    setTimeout(speakForCurrentPage, 700);

    pepe.addEventListener("click", speakForCurrentPage);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPepe);
  } else {
    initPepe();
  }
})();