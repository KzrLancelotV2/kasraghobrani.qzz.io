(() => {
  // Each line carries both languages, so dialogue and translation stay together.
  const dialogues = {
  "home": [
    [
      "Hi. I'm Pepe. I mostly look after this corner.",
      "你好，我是 Pepe。我主要负责看着这个角落。"
    ],
    [
      "The short version: computer engineering, with an interest in biology.",
      "简单来说：学计算机工程，也对生物学感兴趣。"
    ],
    [
      "Research is one tab over. I'll come along.",
      "科研就在旁边那个标签页。我也会跟过去。"
    ],
    [
      "You can mute me. No hard feelings.",
      "可以把我静音。我不会介意。"
    ],
    [
      "The Google Scholar link has the papers. I have the commentary.",
      "论文在谷歌学术链接里。我负责说两句。"
    ],
    [
      "Not everything needs a chatbot. Apparently this website needed a frog.",
      "不是所有东西都需要聊天机器人。不过这个网站似乎需要一只青蛙。"
    ]
  ],
  "about": [
    [
      "That's a piglet in the photo. We work in different departments.",
      "照片里是只小猪。我们不在同一个部门。"
    ],
    [
      "The TL;DR is below, if you're just having a quick look.",
      "如果只想快速了解一下，下面有简要介绍。"
    ],
    [
      "Yes, the video games made it onto the academic website.",
      "没错，电子游戏也写进了学术网站。"
    ],
    [
      "I was not consulted about the choice of photo.",
      "选照片的时候没有征求我的意见。"
    ],
    [
      "Biology is a reasonable interest for someone who keeps a frog around.",
      "身边有只青蛙，对生物学感兴趣也很合理。"
    ],
    [
      "There is a person behind the research links. This is that part.",
      "科研链接背后也是个普通人。这一页讲的就是这些。"
    ]
  ],
  "research": [
    [
      "The project summaries are up here; the research experience is below.",
      "上面是项目简介，下面是科研经历。"
    ],
    [
      "A useful model should survive a question it wasn't expecting.",
      "有用的模型应该经得起意料之外的问题。"
    ],
    [
      "The interesting part is usually what the model gets wrong.",
      "模型出错的地方往往最有意思。"
    ],
    [
      "Biology does not always cooperate with a neat diagram.",
      "生物学不总是配合我们画出整齐的示意图。"
    ],
    [
      "The papers are linked at the top. No frog commentary in those.",
      "论文链接在顶部。里面没有青蛙的点评。"
    ],
    [
      "I can point you to the summaries. I cannot peer-review the work.",
      "我可以给你指指简介在哪儿。同行评审就不行了。"
    ],
    [
      "A clean result is nice. Knowing why it works is better.",
      "结果漂亮固然好，知道它为什么有效更好。"
    ],
    [
      "Sometimes the next experiment is a better question.",
      "有时候，下一步实验就是提出一个更好的问题。"
    ]
  ],
  "contact": [
    [
      "The email addresses are here. I don't have access to the inbox.",
      "邮箱地址在这里。我没有收件箱的访问权限。"
    ],
    [
      "A little context in your message is always helpful.",
      "发消息时带上一点背景信息，总是有帮助的。"
    ],
    [
      "GitHub is here too, if you'd rather start with the code.",
      "如果想先看代码，这里也有 GitHub 链接。"
    ],
    [
      "I handle the corner. Kasra handles the correspondence.",
      "我负责这个角落。Kasra 负责回信。"
    ],
    [
      "This is probably the most practical page on the site.",
      "这大概是整个网站最实用的一页。"
    ],
    [
      "No contact form. Just the addresses.",
      "没有联系表单，直接用这里的地址就好。"
    ]
  ],
  "gallery": [
    [
      "Yes, that's me in the photo. I'm taller in person.",
      "没错，照片里那个就是我。我本人更高。"
    ],
    [
      "There seems to be a recurring frog theme here.",
      "这里好像经常出现青蛙。"
    ],
    [
      "Tap a photo to see the full version.",
      "点开照片就能看大图。"
    ],
    [
      "The piglet has not agreed to become a website assistant.",
      "小猪还没答应来当网站助手。"
    ],
    [
      "A few things that don't fit on a CV.",
      "一些不太适合写进简历的日常。"
    ],
    [
      "I'll step aside while you look at a photo.",
      "你看大图的时候，我会先让开。"
    ]
  ],
  "interests": [
    [
      "Quite a few interests. Fortunately, this is a list, not a timetable.",
      "兴趣不少。还好这是清单，不是课表。"
    ],
    [
      "Biology and computing have plenty to talk about.",
      "生物学和计算机之间有很多值得聊的东西。"
    ],
    [
      "The research page shows where some of these interests lead.",
      "其中一些兴趣走向了哪些研究，可以去科研页看看。"
    ],
    [
      "Networks turn up in more places than you'd expect.",
      "网络出现的地方，比想象中还多。"
    ],
    [
      "An interest is allowed to remain an interest.",
      "兴趣也可以就只是兴趣。"
    ],
    [
      "I would add ponds, but this isn't my website.",
      "我想加上池塘，不过这不是我的网站。"
    ]
  ],
  "default": [
    [
      "Still here, in the corner.",
      "我还在这里，在角落里。"
    ],
    [
      "Tap again if you'd like another thought.",
      "想再听一句的话，可以再点一下。"
    ],
    [
      "You can mute me whenever you like.",
      "随时都可以把我静音。"
    ],
    [
      "I'll keep this brief.",
      "我就简单说两句。"
    ],
    [
      "I don't have an answer to everything. A useful quality in a frog.",
      "我并不是什么都知道。对一只青蛙来说，这是个优点。"
    ],
    [
      "Take your time. I'm not going anywhere.",
      "慢慢看，我不会跑的。"
    ]
  ]
};
  const contexts = [
  [
    "#ai-for-life-sciences",
    [
      "Here the question is how cells respond when something changes.",
      "这里关注的是：当条件发生变化时，细胞会怎样响应。"
    ]
  ],
  [
    "#efficient-deep-learning",
    [
      "This project looks at learning methods and training efficiency.",
      "这个项目关注学习方法和训练效率。"
    ]
  ],
  [
    "#rumor-mitigation",
    [
      "A network can carry information. It can carry a rumor just as well.",
      "网络能传播信息，也同样能传播谣言。"
    ]
  ],
  [
    ".experience-section",
    [
      "These are the labs and people behind the work.",
      "这里是这些研究背后的实验室和指导老师。"
    ]
  ],
  [
    ".about-photo",
    [
      "A different animal gets the spotlight on this page. I'm fine with it.",
      "这一页的主角换成了另一种动物。我没意见。"
    ]
  ],
  [
    ".about-page ul",
    [
      "The quick version. Including the important bit about video games.",
      "这是简要版，也包括电子游戏这个重要部分。"
    ]
  ],
  [
    ".gallery-grid",
    [
      "Tap a photo; I'll stay out of the way while it's open.",
      "点开照片吧，看大图的时候我会先让开。"
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
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
