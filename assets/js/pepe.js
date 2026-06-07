const pepe = document.createElement("img");
pepe.id = "pepe-mascot";
pepe.src = "/images/pepe.png";
document.body.appendChild(pepe);

const bubble = document.createElement("div");
bubble.id = "pepe-bubble";
document.body.appendChild(bubble);

let x = 100;
let y = 100;
let targetX = 300;
let targetY = 200;
let lastActivity = Date.now();

const pageLines = {
  "/": "Welcome to Kasra's research swamp.",
  "/about/": "Lore section unlocked.",
  "/publications/": "No papers yet? We cookin'.",
  "/projects/": "Projects? Graphs? Biology? Very based.",
  "/cv/": "Inspecting the credentials...",
  "/interests/": "AI for Biology detected. Pepe approves."
};

const randomLines = [
  "bro is really building an academic website",
  "gene regulatory networks? sounds ribbiting",
  "this site is under construction, but spiritually complete",
  "hire him before the frog does",
  "network science moment",
  "computational biology arc begins"
];

function say(text, duration = 3000) {
  bubble.innerText = text;
  bubble.style.display = "block";

  setTimeout(() => {
    bubble.style.display = "none";
  }, duration);
}

function moveBubble() {
  bubble.style.left = x + 80 + "px";
  bubble.style.top = y - 20 + "px";
}

function chooseNewTarget() {
  targetX = Math.random() * (window.innerWidth - 120);
  targetY = Math.random() * (window.innerHeight - 120);
}

function animate() {
  x += (targetX - x) * 0.01;
  y += (targetY - y) * 0.01;

  pepe.style.left = x + "px";
  pepe.style.top = y + "px";

  moveBubble();

  if (Math.abs(targetX - x) < 10 && Math.abs(targetY - y) < 10) {
    chooseNewTarget();
  }

  if (Date.now() - lastActivity > 15000) {
    pepe.style.transform = "rotate(90deg)";
  } else {
    pepe.style.transform = "rotate(0deg)";
  }

  requestAnimationFrame(animate);
}

document.addEventListener("mousemove", () => {
  lastActivity = Date.now();
});

document.addEventListener("click", () => {
  lastActivity = Date.now();
});

pepe.addEventListener("click", () => {
  const line = randomLines[Math.floor(Math.random() * randomLines.length)];
  say(line);
});

window.addEventListener("load", () => {
  const path = window.location.pathname;
  say(pageLines[path] || "Pepe has entered the website.");
  chooseNewTarget();
  animate();
});

setInterval(() => {
  const line = randomLines[Math.floor(Math.random() * randomLines.length)];
  say(line, 2500);
}, 20000);