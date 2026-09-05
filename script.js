"use strict";

const STORAGE = {
  reports: "okaken-local-reports-v1",
  visits: "okaken-visitor-count-v1"
};

const CANONICAL_POSTS = [
  {
    id: "hello-okaken",
    title: "はじめまっぴー、オカ研特命隊長の天王寺でっす♪",
    category: "未分類",
    date: "2011-07-18",
    author: "天王寺",
    popularity: 98,
    body: [
      "このたび、我がオカルト研究会（通称OKA☆KEN）は活動を再開することになりましたーっ。わー、どんどんどん、ぱふぱふぱふっ！",
      "風祭市にある様々な都市伝説を、海綿……じゃなくて解明するのが俺たちの使命。身近で見聞きした疑問や事件を、下の投稿フォームから教えてくれ！"
    ],
    comments: [
      { name: "会長", text: "文章が軽すぎる。あと誤字を直しなさい。" },
      { name: "特命隊長", text: "親しみやすさを重視した結果です！" }
    ]
  },
  {
    id: "tsuchinoko-question",
    title: "あれってツチノコじゃない？",
    category: "UMA",
    date: "2011-08-04",
    author: "Unknown",
    popularity: 91,
    body: [
      "部活の後、中庭で変な蛇を見かけたっていうんで、気になって見に行ったら、何か丸っこいのが目の前をビューッて飛んでったの！",
      "ツチノコって、誰かすごいジャンプとかするんだよね？　もう、正体を暴いちゃってください！"
    ],
    comments: [
      { name: "瑚太朗", text: "情報ありがとう。現場の土と目撃時間も教えてくれ。" }
    ]
  },
  {
    id: "saw-it-too",
    title: "俺も見た見た！",
    category: "UMA",
    date: "2011-08-05",
    author: "Unknown",
    popularity: 84,
    body: [
      "昼休み、中庭で飯を食ってたら茂みから飛び出してきた何かに、昼飯を持っていかれた。",
      "あれ絶対ツチノコだよ！　丸々と太ってうまそうだったし！"
    ],
    comments: [
      { name: "匿名希望", text: "それ、ただの太った犬じゃない？" },
      { name: "Unknown", text: "犬は飛ばないって！" }
    ]
  },
  {
    id: "up-article",
    title: "↑の記事",
    category: "UMA",
    date: "2011-08-05",
    author: "Unknown",
    popularity: 38,
    body: [
      "やあ、腹痛で朝から保健室に行っていたはずの柳沢くんじゃないか。説教食わせてやるから、放課後職員室な。"
    ],
    comments: []
  },
  {
    id: "kizamatsuri-transformation",
    title: "風祭市の変身伝説",
    category: "都市伝説",
    date: "2011-09-03",
    author: "天王寺",
    popularity: 76,
    body: [
      "かのフーテン王国がこの風祭市に財宝を隠したという噂を追う。聞き込みでは『夕暮れにだけ別人になる男』の話まで出てきた。",
      "案外、隠された財宝の勇者だったりするわけ？　続報を待て！"
    ],
    comments: [
      { name: "一般生徒A", text: "フーテン王国ってどこですか。" }
    ]
  },
  {
    id: "excalibur",
    title: "マジでエクスカリバーだった",
    category: "都市伝説",
    date: "2011-09-11",
    author: "天王寺",
    popularity: 89,
    body: [
      "前回の記事を読んで、俺も現場に体験しに行ったんだけどさ。これ、ひょっともしねえ！　あれはマジで聖剣エクスカリバーだわ。",
      "本当にあるんだな。抜いたら一躍救世主になれると思う。"
    ],
    comments: [
      { name: "会長", text: "何を体験したのか具体的に書きなさい。" },
      { name: "匿名", text: "抜けました？" }
    ]
  },
  {
    id: "trial-for-heroes",
    title: "真の勇者を待ち受ける試練……",
    category: "都市伝説",
    date: "2011-09-12",
    author: "天王寺",
    popularity: 81,
    body: [
      "その神々しき佇まいは、さながら選別を課しているかのようだ。選ばれし者以外、決して触れてはいけない。",
      "私はここに忠告する。聖剣の眠りを妨げるな。やがて来るべき時は来る……。"
    ],
    comments: []
  },
  {
    id: "holy-sword-report",
    title: "私も聖剣見てきました☆",
    category: "体験談",
    date: "2011-09-14",
    author: "星空きらら",
    popularity: 73,
    body: [
      "はじめまして☆　私も噂の聖剣を見てきました！　な〜んであんな場所にあるんでしょうね？",
      "不思議な気配がしたので、写真は撮らずに帰りました。"
    ],
    comments: [
      { name: "Moon", text: "写真がなくても報告ありがとう！" }
    ]
  },
  {
    id: "old-school-whisper",
    title: "旧校舎、三階のささやき声",
    category: "怪談",
    date: "2011-10-02",
    author: "オカ研調査班",
    popularity: 67,
    body: [
      "下校時刻を過ぎた旧校舎で、誰もいない教室から名前を呼ぶ声がするという。窓は閉まり、足跡もなかった。",
      "録音班を編成して再調査する。ひとりで行くのは禁止。"
    ],
    comments: [
      { name: "静流", text: "廊下の突き当たりは風が強い。たぶんそれ。" }
    ]
  },
  {
    id: "forest-light",
    title: "森で青い光を目撃",
    category: "心霊スポット",
    date: "2011-10-09",
    author: "匿名希望",
    popularity: 87,
    body: [
      "風祭の外れ、立入禁止の看板がある森で青白い光を見た。懐中電灯とは違って、木々の間をゆっくり上へ移動していた。",
      "近づくと消えたので場所だけ地図に印をつけておく。"
    ],
    comments: [
      { name: "天王寺", text: "危険なので単独で入らないように。場所はこっちで確認する。" }
    ]
  },
  {
    id: "ufo-over-tower",
    title: "電波塔の上に止まる光",
    category: "UFO",
    date: "2011-10-17",
    author: "校内天文部員",
    popularity: 62,
    body: [
      "午後九時ごろ、南東の電波塔上空に赤い光が三つ並んだ。星図にも航空灯にも一致しない。約二分後、三方向へ同時に消えた。",
      "同じ時間に見た人がいたら方角を教えてほしい。"
    ],
    comments: []
  },
  {
    id: "club-news-reopens",
    title: "オカ研・調査活動を再開します",
    category: "ニュース",
    date: "2011-10-24",
    author: "OKA☆KEN",
    popularity: 70,
    body: [
      "部室の片付けが完了しました。今週から現地調査を再開します。情報提供者にはこちらから連絡する場合があります。",
      "調査してほしい噂は投稿フォームへどうぞ。"
    ],
    comments: [
      { name: "ちはや", text: "片付けたのはほとんど私ですけどね！" }
    ]
  }
];

const GUESTBOOK_POSTS = [
  {
    id: "guestbook-1",
    title: "掲示板を開設しました",
    category: "掲示板",
    date: "2011-10-26",
    author: "管理人",
    popularity: 1,
    body: ["調査記録への感想、オカ研への応援、サイトの不具合はこちらへどうぞ。荒らしは会長権限で消去します。"],
    comments: [
      { name: "しまこ", text: "祝・開設です。" },
      { name: "匿名", text: "背景が赤すぎて目が痛いです。" },
      { name: "管理人", text: "仕様です。カッコいいだろ？" }
    ]
  }
];

const pageContext = document.querySelector("#page-context");
const articleList = document.querySelector("#article-list");
const articleTemplate = document.querySelector("#article-template");
const resultsSummary = document.querySelector("#results-summary");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const archiveSelect = document.querySelector("#archive-select");
const submissionDialog = document.querySelector("#submission-dialog");
const submissionForm = document.querySelector("#submit-report-form");

let state = {
  route: "home",
  category: "",
  query: "",
  archive: "",
  post: ""
};

function readLocalReports() {
  try {
    const reports = JSON.parse(localStorage.getItem(STORAGE.reports) || "[]");
    return Array.isArray(reports) ? reports : [];
  } catch {
    return [];
  }
}

function allPosts() {
  return [...readLocalReports(), ...CANONICAL_POSTS];
}

function formatDate(date) {
  return date.replace(/-/g, ".");
}

function textParagraphs(lines) {
  const fragment = document.createDocumentFragment();
  for (const line of lines) {
    const paragraph = document.createElement("p");
    paragraph.textContent = line;
    fragment.append(paragraph);
  }
  return fragment;
}

function createArticle(post) {
  const article = articleTemplate.content.firstElementChild.cloneNode(true);
  const titleLink = article.querySelector("h2 a");
  const meta = article.querySelector(".article-meta");
  const body = article.querySelector(".article-body");
  const time = article.querySelector("time");
  const commentToggle = article.querySelector(".comment-toggle");
  const comments = article.querySelector(".comments");

  article.dataset.postId = post.id;
  titleLink.href = `#post/${encodeURIComponent(post.id)}`;
  titleLink.textContent = post.title;
  meta.textContent = `カテゴリ：${post.category}　${post.author}`;
  body.append(textParagraphs(post.body));
  time.dateTime = post.date;
  time.textContent = `${formatDate(post.date)} UP`;
  commentToggle.textContent = `[コメントする${post.comments.length ? `・${post.comments.length}件` : ""}]`;
  commentToggle.setAttribute("aria-expanded", "false");

  if (post.comments.length) {
    const heading = document.createElement("h3");
    heading.textContent = `コメント（${post.comments.length}）`;
    comments.append(heading);

    for (const entry of post.comments) {
      const paragraph = document.createElement("p");
      const name = document.createElement("strong");
      paragraph.className = "comment";
      name.textContent = `${entry.name}：`;
      paragraph.append(name, document.createTextNode(entry.text));
      comments.append(paragraph);
    }
  } else {
    const paragraph = document.createElement("p");
    paragraph.className = "comment";
    paragraph.textContent = "まだコメントはありません。情報を知っている人は投稿フォームから教えてください。";
    comments.append(paragraph);
  }

  commentToggle.addEventListener("click", () => {
    const willOpen = comments.hidden;
    comments.hidden = !willOpen;
    commentToggle.setAttribute("aria-expanded", String(willOpen));
  });

  return article;
}

function getVisiblePosts() {
  let posts = state.route === "guestbook" ? [...GUESTBOOK_POSTS] : allPosts();

  if (state.route === "home" && !state.category && !state.query && !state.archive && !state.post) {
    posts = posts.filter((post) => post.id === "hello-okaken");
  }

  if (state.post) {
    posts = posts.filter((post) => post.id === state.post);
  }

  if (state.category) {
    posts = posts.filter((post) => post.category === state.category);
  }

  if (state.archive) {
    posts = posts.filter((post) => post.date.startsWith(state.archive));
  }

  if (state.query) {
    const needle = state.query.toLocaleLowerCase("ja");
    posts = posts.filter((post) =>
      [post.title, post.category, post.author, ...post.body]
        .join(" ")
        .toLocaleLowerCase("ja")
        .includes(needle)
    );
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

function setPageContext() {
  if (state.post) {
    pageContext.textContent = "調査記録";
  } else if (state.route === "guestbook") {
    pageContext.textContent = "掲示板";
  } else if (state.query) {
    pageContext.textContent = `検索結果：「${state.query}」`;
  } else if (state.category) {
    pageContext.textContent = `カテゴリ：${state.category}`;
  } else if (state.archive) {
    const [year, month] = state.archive.split("-");
    pageContext.textContent = `${year}年${Number(month)}月の記事`;
  } else {
    pageContext.textContent = "当ブログについて";
  }
}

function updateCurrentNavigation() {
  document.querySelectorAll("[aria-current='page']").forEach((element) => {
    element.removeAttribute("aria-current");
  });

  let selector = '[data-route="home"]';
  if (state.route === "guestbook") selector = '[data-route="guestbook"]';
  if (state.category) selector = `[data-category="${CSS.escape(state.category)}"]`;

  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute("aria-current", "page");
  });

  if (state.category) {
    document.querySelectorAll("#category-list a").forEach((link) => {
      if (decodeURIComponent(link.hash.replace("#category/", "")) === state.category) {
        link.setAttribute("aria-current", "page");
      }
    });
  }
}

function renderPosts() {
  const posts = getVisiblePosts();
  const fragment = document.createDocumentFragment();
  articleList.replaceChildren();

  if (posts.length) {
    for (const post of posts) fragment.append(createArticle(post));
  } else {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = "<strong>該当する調査記録はありません</strong><span>条件を変えてもう一度探してみてください。</span>";
    fragment.append(empty);
  }

  articleList.append(fragment);
  resultsSummary.hidden = !(state.query || state.archive);
  resultsSummary.textContent = `${posts.length}件の調査記録が見つかりました。`;
  setPageContext();
  updateCurrentNavigation();
}

function setHashSilently(hash) {
  history.replaceState(null, "", `${location.pathname}${location.search}${hash}`);
}

function applyHashRoute() {
  const rawHash = location.hash.slice(1);
  const [rawRoute = "home", rawValue = ""] = rawHash.split("/");
  const value = decodeURIComponent(rawValue);

  state.route = rawRoute || "home";
  state.category = rawRoute === "category" ? value : "";
  state.post = rawRoute === "post" ? value : "";

  if (rawRoute === "search") {
    state.query = value;
    state.archive = "";
    searchInput.value = value;
    archiveSelect.value = "";
  }

  if (rawRoute === "archive") {
    state.archive = value;
    state.query = "";
    archiveSelect.value = value;
    searchInput.value = "";
  }

  if (!["search", "archive"].includes(rawRoute)) {
    state.query = "";
    state.archive = "";
    searchInput.value = "";
    archiveSelect.value = "";
  }

  if (!rawHash) setHashSilently("#home");
  renderPosts();
}

function populateSideLists() {
  const popular = [...CANONICAL_POSTS].sort((a, b) => b.popularity - a.popularity).slice(0, 11);
  const recent = [...CANONICAL_POSTS].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6);

  const appendLink = (list, post) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#post/${encodeURIComponent(post.id)}`;
    link.textContent = post.title;
    item.append(link);
    list.append(item);
  };

  popular.forEach((post) => appendLink(document.querySelector("#popular-posts"), post));
  recent.forEach((post) => appendLink(document.querySelector("#recent-posts"), post));
}

function updateVisitorCounter() {
  let count = Number.parseInt(localStorage.getItem(STORAGE.visits) || "18427", 10);
  if (!Number.isFinite(count)) count = 18427;
  count += 1;
  localStorage.setItem(STORAGE.visits, String(count));
  document.querySelector("#visitor-counter").textContent = String(count).padStart(8, "0");
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();
  state = { route: "search", category: "", query, archive: "", post: "" };
  archiveSelect.value = "";
  setHashSilently(`#search/${encodeURIComponent(query)}`);
  renderPosts();
});

archiveSelect.addEventListener("change", () => {
  const archive = archiveSelect.value;
  state = { route: "archive", category: "", query: "", archive, post: "" };
  searchInput.value = "";
  setHashSilently(archive ? `#archive/${archive}` : "#home");
  renderPosts();
});

document.querySelector("#open-submission").addEventListener("click", () => {
  if (typeof submissionDialog.showModal === "function") {
    submissionDialog.showModal();
  } else {
    submissionDialog.setAttribute("open", "");
  }
});

document.querySelector("#cancel-submission").addEventListener("click", () => {
  submissionDialog.close();
});

submissionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(submissionForm);
  const report = {
    id: `local-${Date.now()}`,
    title: String(data.get("title")).trim(),
    category: String(data.get("category")),
    date: "2011-10-27",
    author: String(data.get("name")).trim(),
    popularity: 0,
    body: String(data.get("body")).trim().split(/\n+/),
    comments: []
  };

  const reports = readLocalReports();
  reports.unshift(report);
  localStorage.setItem(STORAGE.reports, JSON.stringify(reports));
  submissionForm.reset();
  submissionDialog.close();
  location.hash = `#post/${report.id}`;
});

document.querySelector("#reset-local-data").addEventListener("click", () => {
  const reports = readLocalReports();
  if (!reports.length) {
    window.alert("このブラウザに保存された投稿はありません。");
    return;
  }

  if (window.confirm("このブラウザに保存された投稿をすべて消去しますか？")) {
    localStorage.removeItem(STORAGE.reports);
    location.hash = "#home";
    renderPosts();
  }
});

window.addEventListener("hashchange", applyHashRoute);

populateSideLists();
updateVisitorCounter();
applyHashRoute();
