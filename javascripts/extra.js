document.addEventListener("DOMContentLoaded", function () {

    const title = document.querySelector(".md-header__title");

    if (!title) return;

    const path = window.location.pathname;

    const isIndex =
        path.endsWith("/") ||
        path.endsWith("/index.html") ||
        path.endsWith("/index/");

    // index.md
    if (isIndex) {

        title.innerHTML = `
            <span class="custom-header-title">
                CEREBRO INFO
            </span>
        `;

    } else {

        // 현재 md 문서의 H1 가져오기
        let pageTitle = document.querySelector(".md-content h1");

        let text = "CEREBRO AI MANUAL";

        if (pageTitle) {
            text = pageTitle.innerText.trim();
        }

        title.innerHTML = `
            <a class="custom-header-home" href="${getHomeUrl()}">
                HOME
            </a>

            <span class="custom-header-separator">|</span>

            <span class="custom-header-title">
                ${text}
            </span>
        `;
    }

    function getHomeUrl() {

        const base = document.querySelector("base");

        if (base && base.href) {
            return base.href;
        }

        return "/";
    }

});