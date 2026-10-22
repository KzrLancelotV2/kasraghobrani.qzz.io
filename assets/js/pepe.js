(() => {
  // Each line carries both languages, so dialogue and translation stay together.
  const dialogues = {
  "home": [
    [
      "An academic website with a frog. Someone had final approval on this.",
      "学术网站上放一只青蛙。这事居然有人批准了。"
    ],
    [
      "The font says distant future. The email address says please hire me.",
      "字体写着遥远的未来，邮箱写着请考虑录用我。"
    ],
    [
      "You came to assess a researcher and clicked the frog. I respect your methods.",
      "你本来是来了解研究者的，结果点了青蛙。我尊重你的研究方法。"
    ],
    [
      "I think, therefore I am. The hosting bill suggests there are other conditions.",
      "我思故我在。不过，托管账单暗示还有其他条件。"
    ],
    [
      "You can change the entire atmosphere with one button. Outside this website, it's harder.",
      "按一下就能改变整个氛围。出了这个网站，就没这么容易了。"
    ],
    [
      "The interests include economics. My salary remains a theoretical quantity.",
      "兴趣里写了经济学。我的工资仍然只存在于理论中。"
    ],
    [
      "Not everything needs a chatbot. Apparently this website needed a frog.",
      "不是所有东西都需要聊天机器人。不过这个网站似乎需要一只青蛙。"
    ],
    [
      "A personal website is a very elaborate answer to 'so, what do you do?'",
      "个人网站，就是把“你是做什么的？”这个问题回答得特别隆重。"
    ]
  ],
  "about": [
    [
      "The piglet got a photo. I got a permanent customer-facing role.",
      "小猪负责拍照。我负责永久接待访客。"
    ],
    [
      "The TL;DR is below. An entire person, compressed for your convenience.",
      "下面有简要版。为了方便阅读，一个人被压缩成了几行。"
    ],
    [
      "Video games made the biography. Finally, a claim with thousands of hours of evidence.",
      "电子游戏写进了简介。终于有一项经历，有几千小时的证据支持。"
    ],
    [
      "People contain multitudes. CVs prefer bullet points.",
      "人有很多面。简历更喜欢分条列举。"
    ],
    [
      "The gym is an interesting hobby. Paying to move heavy things, then putting them back.",
      "健身挺有意思。花钱把重物搬起来，再放回原处。"
    ],
    [
      "Learning languages: acquiring several new ways to realize you missed the joke.",
      "学语言：学会用好几种语言发现自己没听懂笑话。"
    ],
    [
      "I also enjoy travel. So far, mostly between tabs.",
      "我也喜欢旅行。目前主要是在标签页之间。"
    ],
    [
      "A longer life sounds good. Presumably we're also working on better Tuesdays.",
      "活得更久听起来不错。想必也在研究怎么让普通的星期二好过一点。"
    ]
  ],
  "research": [
    [
      "A model of a cell. The cell did not provide documentation.",
      "给细胞建模型。细胞没有提供文档。"
    ],
    [
      "The model is very confident. An admirable quality in something that has never been outside.",
      "模型非常自信。对于一个从没出过门的东西来说，挺难得。"
    ],
    [
      "The result was unexpected. So was the amount of time spent checking for a typo.",
      "结果出乎意料。排查是不是打错字花的时间，也出乎意料。"
    ],
    [
      "The map is not the territory. The territory is under no obligation to be differentiable.",
      "地图不等于领土。领土也没有义务保证自己可微。"
    ],
    [
      "A useful theory should risk being wrong. Otherwise it's just very well formatted.",
      "有用的理论得有可能被证明是错的。否则只是排版很好看。"
    ],
    [
      "Correlation is not causation. It does, however, get invited to a lot of meetings.",
      "相关不等于因果。不过，相关确实经常被请去开会。"
    ],
    [
      "We ask nature a question, then spend six months checking whether we asked it properly.",
      "我们问大自然一个问题，然后花六个月确认自己有没有问对。"
    ],
    [
      "The plot looks convincing. I would still like to meet the error bars.",
      "图看起来挺有说服力。不过我还是想见见误差条。"
    ]
  ],
  "contact": [
    [
      "'I hope this email finds you well' is a bold opening hypothesis.",
      "“希望你一切都好”——邮件开头就提出了一个大胆假设。"
    ],
    [
      "No contact form. You are trusted to operate email without a tutorial.",
      "没有联系表单。我们相信你不看教程也会发邮件。"
    ],
    [
      "A short email can contain a good idea. This remains legal.",
      "简短的邮件也可以有好想法。目前并不违规。"
    ],
    [
      "I handle the corner. Kasra handles the consequences of listing his email publicly.",
      "我负责这个角落。Kasra 负责承担公开邮箱的后果。"
    ],
    [
      "Every collaboration starts with someone deciding an email probably won't be that awkward.",
      "每次合作，都始于某个人觉得：发封邮件应该也没那么尴尬。"
    ],
    [
      "You don't need to call it a 'potential synergy.' You can just say what you're thinking.",
      "不必称之为“潜在协同效应”。直接说你的想法就行。"
    ],
    [
      "The distance between two people is sometimes one unsent draft.",
      "两个人之间的距离，有时就是一封没发出去的草稿。"
    ],
    [
      "I have opinions, but no inbox. There may be a lesson in that.",
      "我有很多意见，但没有收件箱。这里面可能有点人生智慧。"
    ]
  ],
  "gallery": [
    [
      "Yes, that's me in the photo. Before I settled into this desk job.",
      "没错，照片里是我。那时我还没开始坐班。"
    ],
    [
      "Photographic evidence that someone occasionally goes outside.",
      "证明某人偶尔也会出门的影像证据。"
    ],
    [
      "The piglet declined a website role. Better at negotiating than I am.",
      "小猪拒绝了网站的工作。谈条件这方面，它比我强。"
    ],
    [
      "A photograph keeps the light. The rest is rather unfairly left to memory.",
      "照片留住了光。剩下的全交给记忆，多少有点不公平。"
    ],
    [
      "None of this fits on a CV. A point in its favor.",
      "这些都不适合写进简历。这恰好是优点。"
    ],
    [
      "Click a photo for the larger version. I remain this size. Budget decision.",
      "点照片可以看大图。我还是这么大。预算决定的。"
    ]
  ],
  "interests": [
    [
      "Quite a few interests. Fortunately, this is a list, not a timetable.",
      "兴趣不少。还好这是清单，不是课表。"
    ],
    [
      "Biology and computing. Two fields famous for things behaving exactly as expected.",
      "生物学和计算机。两个以“一切都按预期运行”闻名的领域。"
    ],
    [
      "An interest is allowed to remain an interest. It doesn't owe LinkedIn an announcement.",
      "兴趣也可以就只是兴趣。不欠领英一篇动态。"
    ],
    [
      "Economics studies scarcity. The tabs in his browser do not.",
      "经济学研究稀缺。他的浏览器标签页显然不研究。"
    ],
    [
      "Curiosity is useful. It is less cooperative about bedtime.",
      "好奇心很有用。就是不太配合睡觉时间。"
    ],
    [
      "I suggested ponds. Apparently the scope was already too broad.",
      "我建议加上池塘。听说范围已经够广了。"
    ]
  ],
  "default": [
    [
      "Still here. Persistence looks a lot like having nowhere else to go.",
      "还在这儿。坚持和无处可去，看起来常常很像。"
    ],
    [
      "Another click. We are both choosing to spend our time this way.",
      "又点了一下。我们都选择了这样度过这段时间。"
    ],
    [
      "You can mute me. Philosophers rarely offer that feature.",
      "你可以把我静音。哲学家很少提供这个功能。"
    ],
    [
      "I don't have an answer to everything. This has not stopped most people.",
      "我并不是什么都知道。不过这通常也没拦住别人开口。"
    ],
    [
      "Doing nothing looks much more respectable when you call it contemplation.",
      "什么都不做，叫作“沉思”就体面多了。"
    ],
    [
      "You don't have to get something useful out of every minute. Even this one.",
      "不用每一分钟都有收获。包括这一分钟。"
    ]
  ]
};
  const contexts = [
  [
    "#ai-for-life-sciences",
    [
      "We ask how cells respond to change. They have declined to fill out a questionnaire.",
      "我们研究细胞如何应对变化。它们拒绝填写问卷。"
    ]
  ],
  [
    "#efficient-deep-learning",
    [
      "Learning efficiently. A lovely ambition for both the model and the person training it.",
      "高效学习。对模型和训练模型的人来说，都是个美好的愿望。"
    ]
  ],
  [
    "#rumor-mitigation",
    [
      "A rumor has no citations and excellent distribution. Academia could learn something. Preferably not that.",
      "谣言没有参考文献，传播却很好。学术界可以学点什么。最好别学这个。"
    ]
  ],
  [
    ".experience-section",
    [
      "The labs and people behind the work. Science is less solitary than the author photo suggests.",
      "研究背后的实验室和伙伴。科研没有作者照片看起来那么孤独。"
    ]
  ],
  [
    ".about-photo",
    [
      "The piglet gets held. I get clicked. We all make our compromises.",
      "小猪被抱着，我被点着。各有各的妥协。"
    ]
  ],
  [
    ".about-page ul",
    [
      "A whole person in bullet points. At least the video games survived the compression.",
      "几条文字概括一个人。至少电子游戏没在压缩过程中丢掉。"
    ]
  ],
  [
    ".gallery-grid",
    [
      "Tap a photo. I'll move out of the way, an underrated social skill.",
      "点开照片吧。我会让开——一种被低估的社交能力。"
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
