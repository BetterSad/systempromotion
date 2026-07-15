const promotionTemplate = () => ({
  intro: "Порядок повышения по рангам.",
  note: "Если требуется много скриншотов, загружайте их на Imgur или аналогичный сервис.",
  cooldowns: [
    "Мидзуното, Мидзуноэ, Каното, Каноэ — 1 день",
    "Цучиното, Цучиноэ, Хиното, Хиноэ — 2 дня",
    "Киното, Киноэ — 3 дня"
  ],
  paths: [
    {
      label: "Мидзуното → Мидзуноэ",
      items: [
        "Пройди обряд первого наставления.",
        "Принеси первый трофей от имени отряда. Трофеем считается клинок, часть формы, накидка или иная вещь, снятая с истребителя."
      ]
    },
    {
      label: "Мидзуноэ → Каното",
      subtitle: "Демон низшей крови",
      items: [
        "Получи личное поручение от старшего состава и исполни его.",
        "Покажи уход за своим оружием: заточи катану после боя или приведи её в порядок перед старшим составом."
      ]
    },
    {
      label: "Каното → Каноэ",
      subtitle: "Демон средней крови",
      items: [
        "Получи личное поручение от старшего состава и исполни его.",
        "Получи рекомендацию I уровня."
      ]
    },
    {
      label: "Каноэ → Цучиното",
      items: [
        "Пройди проверку на знание клятв крови.",
        "Получи рекомендацию I уровня."
      ]
    },
    {
      label: "Цучиното → Цучиноэ",
      items: [
        "Выполни серьёзное поручение от старшего состава.",
        "Получи рекомендацию II уровня."
      ]
    },
    {
      label: "Цучиноэ → Хиното",
      subtitle: "Демон средней крови",
      items: [
        "Проведи спарринг с одним из старших членов отряда или наставником. Если членов отряда нет рядом, допускается спарринг с любым подходящим демоном.",
        "Получи рекомендацию III уровня."
      ]
    },
    {
      label: "Хиното → Хиноэ",
      items: [
        "Прими участие минимум в 2-х мероприятиях от Инструктора или старшего состава.",
        "Получи рекомендацию III уровня."
      ]
    },
    {
      label: "Хиноэ → Киното",
      items: [
        "Совместно с инструктором или старшим проведи тренировку. Если провести тренировку невозможно, допускается аналог: убийство 2-х хашир и выпытывание важной информации у пленного.",
        "Получи признание от старшего состава."
      ]
    },
    {
      label: "Киното → Киноэ",
      subtitle: "Демон высшей крови",
      items: [
        "Пройди главное испытание старшего звена Дзюнкоку.",
        "Получи кровь напрямую от Кибуцуджи или по решению высшего руководства."
      ]
    }
  ]
});



const siteData = {
  nav: [
    { key: "zenitsu", label: "Зеницу", href: "zenitsu.html" },
    { key: "nezuko", label: "Незуко", href: "nezuko.html" },
    { key: "Inosuke", label: "Иноске", href: "Inosuke.html" },
    { key: "Tazik", label: "Танджиро", href: "Tazik.html" },
    { key: "Kaigaku", label: "Кайгаку", href: "Kaigaku.html" },
    { key: "genia", label: "Генья", href: "genia.html" },
    { key: "Kanao", label: "Канао", href: "Kanao.html" }
  ],
  pages: {
    overview: {
      kicker: "Система повышения",
      title: "Лорные персонажи",
      text: "Система повышения для лорников."
    },
    genia: {
      kicker: "Генья Шинадзугава",
      title: "Система повышения Генья Шинадзугава",
      text: "Порядок повышения по рангам Дзюнкоку."
    },
    Kaigaku: {
      kicker: "Кайгаку",
      title: "Система повышения Кайгаку",
      text: "Порядок повышения по рангам Дзюнкоку."
    },
    Inosuke: {
      kicker: "Иноске Хашибира",
      title: "Система повышения Иноске Хашибира",
      text: "Порядок повышения по рангам Дзюнкоку."
    },
    zenitsu: {
      kicker: "Зеницу Агацума",
      title: "Система повышения Зеницу Агацума",
      text: "Порядок повышения по рангам Дзюнкоку."
    },
    nezuko: {
      kicker: "Незуко Комадо",
      title: "Система повышения Незуко Комадо",
      text: "Порядок повышения по рангам Дзюнкоку."
    },
    Tazik: {
      kicker: "Танджиро Комадо",
      title: "Система повышения Танджиро Комадо",
      text: "Порядок повышения по рангам Дзюнкоку."
    },
    Kanao: {
      kicker: "Канао Цуюри",
      title: "Система повышения Канао Цуюри",
      text: "Порядок повышения по рангам Дзюнкоку."
    }
  },
  overview: {
    intro: [
      "Дзюнкоку состоит из бывших истребителей, ставших демонами после встречи с Кокушибо.",
      "После превращения они сохранили путь мечника и были собраны в отдельный отряд."
    ],
    highlights: [
      {
        title: "Кто они",
        text: "Бывшие истребители, ставшие демонами-мечниками."
      },
      {
        title: "Статус",
        text: "Элитный дисциплинированный отряд."
      },
      {
        title: "Роль",
        text: "Особые задания и порядок внутри отряда."
      }
    ]
  },
  promotions: {
    genia: promotionTemplate(),
    Kaigaku: promotionTemplate(),
    Inosuke: promotionTemplate(),
    zenitsu: {
  intro: "Порядок повышения по рангам.",
  note: "Если требуется много скриншотов, загружайте их на Imgur или аналогичный сервис. * - задание нельзя пропустить с помощью рекомендации",
  cooldowns: [
    "Мидзуното, Мидзуноэ, Каното, Каноэ — 1 день",
    "Цучиното, Цучиноэ, Хиното, Хиноэ — 2 дня",
    "Киното, Киноэ — 3 дня"
  ],
  paths: [
    {
      label: "Мидзуното → Мидзуноэ",
      items: [
        "Принять участие в тренировке.",
        "Использовать первый стиль дыхания Грома (мин 10 действий).*",
        "Провести патрулирование территории (мин. 15 действий)."
      ]
    },
    {
      label: "Мидзуноэ → Каното",
      items: [
        "Пройти тренировку скорости и реакции.",
        "Заточи катану и приведи её в порядок. (мин. 10 действий)*",
        "Принять участие в сражении с демоном."
      ]
    },
    {
      label: "Каното → Каноэ",
      items: [
        "Получи личное поручение от Джигоро и исполни его.*",
        "Получи рекомендацию I уровня.",
        "Пройти проверку на знание устава.",
        "Получи поручение от Столпа Грома и исполни его.*"
      ]
    },
    {
      label: "Каноэ → Цучиното",
      items: [
        "Пройти тренировку с другим охотником.",
        "Победить демона в одиночку.",
        "Использовать первый стиль Дыхания Грома несколько раз (мин. 15 действий). *",
        "Провести тренировку (обязательно наличие хотя бы одного истребителя, привязки к рангу нет)"
      ]
    },
    {
      label: "Цучиното → Цучиноэ",
      items: [
        "Провести спарринг с одним из истребителей. (Разница в рангах не должна превышать 1 ранг.)",
        "Провести тренировку выносливости. (мин. 20 действий) (обязательно наличие хотя бы одного истребителя, привязки к рангу и дыханию нет) * ",
        "Получи рекомендацию II уровня. *"
      ]
    },
    {
      label: "Цучиноэ → Хиното",
      items: [
        "Проведи спарринг с одним из старших членов отряда или наставником. Если членов отряда нет рядом, допускается спарринг с любым подходящим демоном.",
        "Победи 7 демонов.",
        "Выполни поручение от Столпа Грома или Джигоро."
      ]
    },
    {
      label: "Хиното → Хиноэ",
      items: [
        "Прими участие минимум в 2-х мероприятиях.",
        "Проведи 2 тренировки с другим охотником. (обязательно наличие хотя бы одного истребителя, привязки к рангу нет)",
        "Проведи тренировку выносливости. (мин. 20 действий) (обязательно наличие хотя бы одного истребителя, привязки к рангу и дыханию нет) *",
        "Победи 10 демонов.",
        "Получи рекомендацию III уровня."
      ]
    },
    {
      label: "Хиноэ → Киното",
      items: [
        "Совместно с Джигоро проведи тренировку.",
        "Получи признание от от 2 столпов*.",
        "Победи 15 демонов.",
        "Победи демона что является Луной.*",
        "Пройди проверку на знание устава.*"
      ]
    },
    {
      label: "Киното → Киноэ",
      items: [
        "Прими участие в глобальном мероприятии.",
        "Получить признание от 3 столпов*.",
        "Победи демона что является Луной*",
        "Выполни поручение от Столпа Грома или Джигоро.*",
        "Выполни поручение от Столпа Ветра или Столпа Камня.*",
        "Выполни поручение от члена Семьи Убуяшики.*"
      ]
    }
  ]
},
    nezuko: promotionTemplate(),
    Tazik: promotionTemplate(),
    Kanao: promotionTemplate()
  }
};

const pageKey = document.body.dataset.page || "overview";
const quickNav = document.getElementById("quick-nav");
const heroKicker = document.getElementById("hero-kicker");
const heroTitle = document.getElementById("hero-title");
const heroText = document.getElementById("hero-text");
const app = document.getElementById("app");

function renderTopbar() {
  quickNav.innerHTML = siteData.nav
    .map((item) => `<a class="topbar-link ${item.key === pageKey ? "is-active" : ""}" href="${item.href}">${item.label}</a>`)
    .join("");
}

function renderHero() {
  const page = siteData.pages[pageKey] || siteData.pages.overview;
  heroKicker.textContent = page.kicker;
  heroTitle.textContent = page.title;
  heroText.textContent = page.text;
  document.title = `Система повышения | ${page.title}`;
}

function renderIndexedList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderOverviewPage() {
  app.innerHTML = `
    <section class="panel">
      <div class="section-heading">
        <div>
          <p class="section-kicker">Общая информация</p>
          <h2>Общая информация</h2>
        </div>
      </div>
      <article class="spotlight-card">
        ${siteData.overview.intro.map((text) => `<p class="page-copy">${text}</p>`).join("")}
        <div class="hero-actions">
          ${siteData.nav.map((item) => `<a class="hero-button" href="${item.href}">${item.label}</a>`).join("")}
        </div>
      </article>
    </section>
    <section class="panel">
      <div class="cards-grid">
        ${siteData.overview.highlights
          .map(
            (item, index) => `
              <article class="info-card">
                <div class="number-badge">${index + 1}</div>
                <h3>${item.title}</h3>
                <p class="page-copy">${item.text}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPromotionPage() {
  const promotion = siteData.promotions[pageKey];

  if (!promotion) {
    app.innerHTML = "";
    return;
  }

  app.innerHTML = `
    <section class="panel">
      <div class="section-heading">
        <div>
          <p class="section-kicker">Повышение</p>
          <h2>Повышение по ступеням</h2>
        </div>
      </div>
      <article class="spotlight-card">
        <p class="page-copy">${promotion.intro}</p>
      </article>
    </section>
    <section class="panel">
      <div class="promotion-tabs" id="promotion-tabs">
        ${promotion.paths
          .map(
            (path, index) => `
              <button class="tab-button ${index === 0 ? "is-active" : ""}" type="button" data-index="${index}">
                ${path.label}
              </button>
            `
          )
          .join("")}
      </div>
      <div id="promotion-panes">
        ${promotion.paths
          .map(
            (path, index) => `
              <section class="promotion-pane ${index === 0 ? "is-active" : ""}" data-index="${index}">
                <article class="step-card">
                  <div class="step-card__title">
                    <div class="index-badge">${index + 1}</div>
                    <div>
                      <h4>${path.label}</h4>
                      ${path.subtitle ? `<div class="rank-card__meta">${path.subtitle}</div>` : ""}
                    </div>
                  </div>
                  <ol class="ordered-list">
                    ${renderIndexedList(path.items)}
                  </ol>
                </article>
              </section>
            `
          )
          .join("")}
      </div>
      <div class="inline-note">${promotion.note}</div>
    </section>
    <section class="panel">
      <div class="section-heading">
        <div>
          <p class="section-kicker">КД</p>
          <h2>КД на повышение</h2>
        </div>
      </div>
      <div class="cooldown-grid">
        ${promotion.cooldowns
          .map(
            (item) => `
              <article class="simple-card">
                <p>${item}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;

  const buttons = document.querySelectorAll("#promotion-tabs .tab-button");
  const panes = document.querySelectorAll(".promotion-pane");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.dataset.index;

      buttons.forEach((item) => {
        item.classList.toggle("is-active", item.dataset.index === index);
      });

      panes.forEach((pane) => {
        pane.classList.toggle("is-active", pane.dataset.index === index);
      });
    });
  });
}

function renderPage() {
  if (pageKey === "overview") {
    renderOverviewPage();
  } else {
    renderPromotionPage();
  }
}

renderTopbar();
renderHero();
renderPage();
