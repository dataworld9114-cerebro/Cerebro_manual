document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".md-header__title");

  if (!title) return;

  const path = window.location.pathname;

  const isIndex =
    path.endsWith("/") ||
    path.endsWith("/index.html") ||
    path.endsWith("/index/");

  if (isIndex) {
    title.innerHTML = `
      <span class="custom-header-title">CEREBRO INFO</span>
    `;
  } else {
    let pageTitle = document.querySelector(".md-content h1");
    let text = "CEREBRO AI MANUAL";

    if (pageTitle) {
      text = pageTitle.innerText.trim();
    }

    title.innerHTML = `
      <a class="custom-header-home" href="${getHomeUrl()}">HOME</a>
      <span class="custom-header-separator">|</span>
      <span class="custom-header-title">${text}</span>
    `;
  }

    function getHomeUrl() {
    const base = document.querySelector("base");

    if (base && base.href) {
        return base.href;
    }

    const path = window.location.pathname;

    // 로컬 mkdocs serve
    if (
        location.hostname === "127.0.0.1" ||
        location.hostname === "localhost"
    ) {
        return "/";
    }

    // GitHub Pages 프로젝트 페이지
    const parts = path.split("/").filter(Boolean);

    if (parts.length > 0) {
        return "/" + parts[0] + "/";
    }

    return "/";
    }
});