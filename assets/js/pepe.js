(function () {
  function initPepe() {
    if (document.getElementById("pepe-mascot")) return;

    const pepe = document.createElement("img");
    pepe.id = "pepe-mascot";
    pepe.src = "/images/pepe.png";
    pepe.alt = "Pepe assistant";

    Object.assign(pepe.style, {
      position: "fixed",
      right: "18px",
      bottom: "18px",
      width: "75px",
      height: "auto",
      zIndex: "9999999",
      cursor: "pointer",
      userSelect: "none"
    });

    document.body.appendChild(pepe);

    pepe.onclick = () => {
      alert("Pepe is alive.");
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPepe);
  } else {
    initPepe();
  }
})();