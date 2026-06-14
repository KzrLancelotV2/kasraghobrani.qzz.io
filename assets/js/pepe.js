(function () {
  function initPepe() {
    if (document.getElementById("pepe-mascot")) return;

    const pepe = document.createElement("img");
    pepe.id = "pepe-mascot";
    pepe.src = "/images/pepe.png";
    pepe.alt = "Pepe assistant";
    document.body.appendChild(pepe);

    const bubble = document.createElement("div");
    bubble.id = "pepe-bubble";
    document.body.appendChild(bubble);

    const lines = [
      "welcome to the research swamp",
      "bro is building an academic website",
      "AI for Biology arc detected",
      "gene regulatory networks? ribbiting",
      "clicking me increases publication probability by 0%",
      "this website is under construction but spiritually complete"
    ];

    function say(text, duration = 3000) {
      bubble.innerText = text;
      bubble.style.display = "block";

      setTimeout(() => {
        bubble.style.display = "none";
      }, duration);
    }

    pepe.addEventListener("click", function () {
      const line = lines[Math.floor(Math.random() * lines.length)];
      say(line);
    });

    setTimeout(() => {
      say("Pepe assistant online.");
    }, 700);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPepe);
  } else {
    initPepe();
  }
})();