(() => {
  // Each line carries both languages, so dialogue and translation stay together.
  // Direct quotations checked against these editions; Chinese renderings are our translations.
  // Socrates in Plato, Apology 38a (Benjamin Jowett): https://www.gutenberg.org/files/1656/1656-h/1656-h.htm
  // Aristotle, Metaphysics I.1 (W. D. Ross): https://classics.mit.edu/Aristotle/metaphysics.1.i.html
  // Epictetus, Enchiridion 5 (T. W. Higginson): https://www.gutenberg.org/files/45109/45109-h/45109-h.htm
  const dialogues = {
  "home": [
    [
      "Go on. Click the frog instead of reading the page.",
      "继续吧。不看正文，先点青蛙。"
    ],
    [
      "Yes, I'm part of the website. No, this wasn't necessary.",
      "对，我是网站的一部分。没错，其实没必要。"
    ],
    [
      "You can switch the colors. I'll still be here judging them.",
      "配色随你换。我会继续在这儿挑剔。"
    ],
    [
      "I see we've both found a way to avoid what we were doing.",
      "看来我们都找到了一个不干正事的办法。"
    ],
    [
      "“Men are disturbed not by things, but by the views which they take of things.” — Epictetus, Enchiridion 5",
      "“困扰人的不是事物本身，而是人对事物的看法。”——爱比克泰德《手册》第5节"
    ],
    [
      "The research is his. The unnecessary commentary is mine.",
      "研究是他做的。多余的话是我说的。"
    ]
  ],
  "about": [
    [
      "Yes, that's a piglet. Try to stay focused.",
      "对，是只小猪。尽量别跑题。"
    ],
    [
      "He put gaming in the bio. At least we're being honest.",
      "他把打游戏写进简介了。至少够诚实。"
    ],
    [
      "You can read the short version. I won't tell him.",
      "看简要版就行。我不告诉他。"
    ],
    [
      "I had suggestions for the photo. Nobody asked.",
      "选照片这件事，我有意见。没人问。"
    ],
    [
      "There's more to a person than this page. Thankfully.",
      "一个人不止这一页写的这些。还好。"
    ],
    [
      "“The unexamined life is not worth living.” — Socrates, Plato's Apology 38a",
      "“未经审视的人生不值得过。”——苏格拉底，柏拉图《申辩篇》38a"
    ]
  ],
  "research": [
    [
      "It runs. We're trying not to confuse that with being correct.",
      "跑通了。正在努力不把这当成“做对了”。"
    ],
    [
      "A smooth loss curve. Suspicious.",
      "损失曲线这么平滑。可疑。"
    ],
    [
      "The explanation was simple until someone asked 'why?'",
      "解释本来很简单，直到有人问了句“为什么？”"
    ],
    [
      "Changing the random seed is a good way to ruin an afternoon.",
      "换个随机种子，是毁掉一个下午的好办法。"
    ],
    [
      "I'd like a second dataset before we get too excited.",
      "先换个数据集试试，再高兴也不迟。"
    ],
    [
      "“All men by nature desire to know.” — Aristotle, Metaphysics I.1",
      "“人天生就渴望求知。”——亚里士多德《形而上学》第一卷第一章"
    ]
  ],
  "contact": [
    [
      "His name is right there. We can probably skip 'Dear Sir/Madam.'",
      "名字就在那儿。“尊敬的先生／女士”大概可以省了。"
    ],
    [
      "You can just say hello. It doesn't need an abstract.",
      "打个招呼就行。不用附摘要。"
    ],
    [
      "If you've rewritten the first sentence five times, send it.",
      "第一句话要是已经改了五遍，就发吧。"
    ],
    [
      "Please don't ask me about response times. I'm a picture.",
      "别问我多久能回信。我是张图。"
    ],
    [
      "No, clicking me does not send him a notification.",
      "不会，点我不会给他发通知。"
    ],
    [
      "The email can be shorter than the time spent worrying about it.",
      "邮件可以比你纠结它的时间短。"
    ]
  ],
  "gallery": [
    [
      "Yes, that's also me in the photo. I get around.",
      "对，照片里也是我。到处都有我。"
    ],
    [
      "The piglet photographs well. Annoying.",
      "小猪挺上镜。烦人。"
    ],
    [
      "You can open the photo. I'll get out of the way.",
      "点开看吧。我让开。"
    ],
    [
      "No, there isn't a research angle to every photo.",
      "不是每张照片都得跟科研扯上关系。"
    ],
    [
      "Some days are worth keeping without explaining them.",
      "有些日子值得留下来，不用解释为什么。"
    ],
    [
      "I prefer the one with the frog. Obviously.",
      "我更喜欢有青蛙的那张。显然。"
    ]
  ],
  "interests": [
    [
      "An interesting question. There goes the evening.",
      "问题挺有意思。今晚又没了。"
    ],
    [
      "Yes, those fields are connected. No, that doesn't make the reading list shorter.",
      "对，这些领域有联系。不，这不会让书单变短。"
    ],
    [
      "Not every hobby needs to become a project.",
      "不是每个爱好都要变成项目。"
    ],
    [
      "'I'll just look that up.' Famous last words.",
      "“我就查一下。”通常是这么开始的。"
    ],
    [
      "I'm interested in doing less. It hasn't caught on here.",
      "我的兴趣是少干点。这里还不太流行。"
    ],
    [
      "“All men by nature desire to know.” — Aristotle, Metaphysics I.1",
      "“人天生就渴望求知。”——亚里士多德《形而上学》第一卷第一章"
    ]
  ],
  "default": [
    [
      "Still clicking? Fair enough.",
      "还点？行吧。"
    ],
    [
      "I was having a perfectly good silence.",
      "刚才安静得挺好的。"
    ],
    [
      "I have nothing to add. Unusual for this corner of the internet.",
      "我没什么要补充的。在网上，这倒是少见。"
    ],
    [
      "You don't have to agree with the frog.",
      "倒也不用认同一只青蛙。"
    ],
    [
      "We can leave that question unanswered for a minute.",
      "这个问题，可以先不急着回答。"
    ],
    [
      "“Men are disturbed not by things, but by the views which they take of things.” — Epictetus, Enchiridion 5",
      "“困扰人的不是事物本身，而是人对事物的看法。”——爱比克泰德《手册》第5节"
    ]
  ]
};
  const contexts = [
  [
    "#ai-for-life-sciences",
    [
      "How cells respond is the question. What we'd like them to do is a separate matter.",
      "问题是细胞会如何响应。我们希望它们怎么做，是另一回事。"
    ]
  ],
  [
    "#efficient-deep-learning",
    [
      "Less compute would be nice. The electricity is not theoretical.",
      "少算一点挺好。电费可不是理论上的。"
    ]
  ],
  [
    "#rumor-mitigation",
    [
      "Being repeated often seems to do a lot of work for a bad claim.",
      "有些说法没什么道理，架不住被反复说。"
    ]
  ],
  [
    ".experience-section",
    [
      "The labs and people behind the work. Nobody figures all of this out alone.",
      "这些是研究背后的实验室和伙伴。没人能独自弄明白一切。"
    ]
  ],
  [
    ".about-photo",
    [
      "Yes, that's a piglet. Try to stay focused.",
      "对，是只小猪。尽量别跑题。"
    ]
  ],
  [
    ".about-page ul",
    [
      "The short version. You're welcome.",
      "简要版。不客气。"
    ]
  ],
  [
    ".gallery-grid",
    [
      "You can open the photo. I'll get out of the way.",
      "点开看吧。我让开。"
    ]
  ]
];
  function init() {
    if (document.getElementById("pepe-container")) return;
    const read = (key) => { try { return localStorage.getItem(key); } catch (_) { return null; } };
    const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
    const translated = (pair) => pair[(window.siteI18n?.language || document.documentElement.lang).startsWith("zh") ? 1 : 0];
    const path = location.pathname.toLowerCase();
    const page = path.includes("research") || /project|publication/.test(path) ? "research" :
      path.includes("about") ? "about" : path.includes("gallery") ? "gallery" :
      path.includes("contact") ? "contact" : path.includes("interest") ? "interests" :
      path === "/" || /index|home/.test(path) ? "home" : "default";
    let muted = read("pepe-muted") === "true";
    let currentLine = null, interacted = false, hideTimer, reactionTimer, typingTimer;
    let lastSpoke = 0, automaticReactionUsed = false, currentContext = null;
    let bag = [];
    const seenContexts = new Set();
    const container = document.createElement("aside");
    container.id = "pepe-container";
    container.dataset.noTranslate = "";
    container.innerHTML = `
      <div id="pepe-bubble" hidden>
        <p id="pepe-message" aria-hidden="true"></p>
        <span id="pepe-announcement" role="status" aria-live="polite" aria-atomic="true"></span>
        <button type="button" id="pepe-dismiss">×</button>
      </div>
      <button type="button" id="pepe-chat" aria-controls="pepe-bubble" aria-expanded="false">
        <img id="pepe-mascot" src="/images/pepe.svg" alt="" aria-hidden="true" draggable="false">
        <span id="pepe-hint"></span>
      </button>
      <button type="button" id="pepe-mute"></button>`;
    document.body.append(container);
    const bubble = container.querySelector("#pepe-bubble");
    const message = container.querySelector("#pepe-message");
    const announcement = container.querySelector("#pepe-announcement");
    const chat = container.querySelector("#pepe-chat");
    const hint = container.querySelector("#pepe-hint");
    const mute = container.querySelector("#pepe-mute");
    const dismiss = container.querySelector("#pepe-dismiss");
    function labels() {
      container.setAttribute("aria-label", translated(["Pepe's corner", "Pepe 的角落"]));
      container.dataset.muted = String(muted);
      hint.textContent = translated(muted ? ["Tap to unmute", "点击取消静音"] : interacted ? ["Tap for another", "再点一下"] : ["Tap to chat", "点我聊聊"]);
      chat.setAttribute("aria-label", translated(muted ? ["Unmute Pepe and chat", "取消 Pepe 静音并聊天"] : ["Chat with Pepe", "和 Pepe 聊聊"]));
      mute.textContent = translated(muted ? ["Unmute", "取消静音"] : ["Mute", "静音"]);
      mute.setAttribute("aria-label", translated(["Mute Pepe", "将 Pepe 静音"]));
      mute.setAttribute("aria-pressed", String(muted));
      dismiss.setAttribute("aria-label", translated(["Dismiss message", "关闭消息"]));
    }
    function close() {
      clearTimeout(hideTimer);
      clearTimeout(typingTimer);
      bubble.hidden = true;
      message.textContent = "";
      announcement.textContent = "";
      chat.setAttribute("aria-expanded", "false");
      container.classList.remove("pepe-react");
    }
    function scheduleClose() {
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        if (bubble.matches(":hover") || bubble.contains(document.activeElement)) scheduleClose();
        else close();
      }, 12000);
    }
    function typeCurrentLine() {
      clearTimeout(typingTimer);
      clearTimeout(hideTimer);
      const text = translated(currentLine);
      const characters = Array.from(text);
      let index = 0;
      message.textContent = "";
      // Announce the complete line once, rather than every typed character.
      announcement.textContent = text;
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
        message.textContent = text;
        scheduleClose();
        return;
      }
      function tick() {
        message.textContent += characters[index++];
        if (index < characters.length) typingTimer = setTimeout(tick, 28);
        else scheduleClose();
      }
      typingTimer = setTimeout(tick, 28);
    }
    function speak(line) {
      if (muted || document.hidden || document.querySelector("dialog[open]")) return;
      currentLine = line;
      lastSpoke = Date.now();
      bubble.hidden = false;
      chat.setAttribute("aria-expanded", "true");
      clearTimeout(reactionTimer);
      container.classList.remove("pepe-react");
      // A short nod when a new message starts.
      void chat.offsetWidth;
      container.classList.add("pepe-react");
      reactionTimer = setTimeout(() => container.classList.remove("pepe-react"), 500);
      labels();
      typeCurrentLine();
    }
    function nextLine() {
      if (currentContext && !seenContexts.has(currentContext[0])) {
        seenContexts.add(currentContext[0]);
        return currentContext[1];
      }
      if (!bag.length) {
        bag = [...dialogues[page]];
        for (let i = bag.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [bag[i], bag[j]] = [bag[j], bag[i]];
        }
        const last = read("pepe-last-dialogue-" + page);
        if (bag[bag.length - 1][0] === last) bag.unshift(bag.pop());
      }
      const line = bag.pop();
      save("pepe-last-dialogue-" + page, line[0]);
      return line;
    }
    function setMuted(value) {
      muted = value;
      save("pepe-muted", String(muted));
      if (muted) close();
      labels();
    }
    chat.addEventListener("click", () => {
      if (muted) setMuted(false);
      interacted = true;
      speak(nextLine());
    });
    mute.addEventListener("click", () => setMuted(!muted));
    dismiss.addEventListener("click", () => { chat.focus(); close(); });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !bubble.hidden) {
        if (bubble.contains(document.activeElement)) chat.focus();
        close();
      }
    });
    window.addEventListener("languagechange", () => {
      labels();
      if (currentLine && !bubble.hidden) typeCurrentLine();
    });
    window.addEventListener("storage", (event) => {
      if (event.key === "pepe-muted") {
        muted = event.newValue === "true";
        if (muted) close();
        labels();
      }
    });
    document.addEventListener("visibilitychange", () => { if (document.hidden) close(); });
    document.getElementById("photo-viewer")?.addEventListener("close", close);
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          const context = contexts.find(([selector]) => entry.target.matches(selector));
          if (!entry.isIntersecting) {
            if (currentContext === context) currentContext = null;
            continue;
          }
          currentContext = context;
          // Only after a visitor engages, at most one unsolicited remark per page.
          if (interacted && !muted && !automaticReactionUsed && bubble.hidden &&
              !document.hidden && !document.querySelector("dialog[open]") &&
              Date.now() - lastSpoke > 20000 && !seenContexts.has(context[0])) {
            seenContexts.add(context[0]);
            automaticReactionUsed = true;
            speak(context[1]);
          }
        }
      }, { threshold: 0.35 });
      for (const [selector] of contexts) {
        const element = document.querySelector(selector);
        if (element) observer.observe(element);
      }
    }
    labels();
    // Greet on each page visit, including back/forward restores, without enabling scroll reactions.
    function greet() {
      if (!muted && !document.hidden) speak(nextLine());
    }
    greet();
    window.addEventListener("pageshow", event => { if (event.persisted) greet(); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
