const template = document.createElement("template");

const MENU = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about/" },
  {
    label: "Service",
    children: [
      { label: "Land registration", href: "/land/" },
      { label: "Data Services", href: "/data/" },
      { label: "UAV Services", href: "/aerial/" }
    ]
  },
  { label: "Contact", href: "/contact/" },
  {
    label: "Resource",
    children: [
      { label: "Portfolio", href: "/projects/" },
      { label: "FAQ", href: "/faqs/" }
    ]
  },
  { label: "Self Service", href: "https://ardhi.co.tz/" }
];

function createLink(item) {
  return `
    <a href="${item.href}"
       class="nav-link uppercase rounded-lg px-3 py-2 text-md font-medium text-main-500 transition hover:text-main-900">
      ${item.label}
    </a>
  `;
}

function createDropdown(item) {
  return `
    <div class="relative" data-dropdown>
      <button type="button" data-dropdown-trigger
        class="nav-link uppercase inline-flex items-center gap-1 rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:text-main-900"
        aria-expanded="false">
        ${item.label}
        <i class="bi bi-chevron-down text-sm"></i>
      </button>

      <div data-dropdown-menu
        class="absolute left-0 top-full z-50 hidden w-56 bg-white shadow-lg border-t border-main-200">

        ${item.children.map(child => `
          <a href="${child.href}"
             class="group relative block w-full px-4 py-2.5 text-sm text-main-700 overflow-hidden border-b border-main-200">
            <span class="absolute inset-0 bg-primary-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            <span class="relative z-10 group-hover:text-white transition-colors duration-200">${child.label}</span>
          </a>
        `).join("")}

      </div>
    </div>
  `;
}

function renderDesktopMenu(menu) {
  return menu.map((item, i) => {
    const el = item.children ? createDropdown(item) : createLink(item);
    const sep = i < menu.length - 1 ? `<span class="px-4 text-2xl font-light text-main-600">/</span>` : "";
    return el + sep;
  }).join("");
}

function renderMobileMenu(menu) {
  return menu.map(item => {
    if (!item.children) {
      return `
        <a href="${item.href}"
           class="block border-b border-main-200 px-3 py-3 text-sm font-semibold uppercase text-main-600">
          ${item.label}
        </a>
      `;
    }

    return `
      <div data-mobile-dropdown>
        <button type="button" data-mobile-dropdown-trigger
          class="flex w-full items-center justify-between border-b border-main-200 text-sm font-semibold uppercase text-main-600">
          <span class="px-3 py-3">${item.label}</span>
          <span class="flex min-h-11 w-12 items-center justify-center border-l border-main-200">
            <i class="bi bi-chevron-down text-xs"></i>
          </span>
        </button>

        <div data-mobile-dropdown-menu class="hidden bg-main-50">
          ${item.children.map(child => `
            <a href="${child.href}" class="block border-b border-main-200 px-6 py-3 text-sm font-medium text-main-600">
              ${child.label}
            </a>
          `).join("")}
        </div>
      </div>
    `;
  }).join("");
}

template.innerHTML = `
<header class="relative w-full border-b border-primary-200 bg-white">

  <!-- TOP BAR -->
  <div class="bg-primary-700 text-white">
    <div class="flex flex-col items-center justify-center gap-3 px-4 py-4 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left lg:px-16">
      <div class="text-base font-semibold tracking-wide md:text-2xl">We are leading data firm!</div>

      <div class="flex items-center gap-2 text-sm md:gap-3 md:text-xl">
        <a href="#" class="inline-flex items-center justify-center transition hover:text-white/80"><i class="bi bi-facebook"></i></a>
        <a href="#" class="inline-flex items-center justify-center transition hover:text-white/80"><i class="bi bi-instagram"></i></a>
        <a href="#" class="inline-flex items-center justify-center transition hover:text-white/80"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </div>

  <!-- NAV -->
  <div id="topnav" class="bg-white transition-all duration-300">
    <div class="px-4 py-5 sm:px-8 md:py-9 lg:px-16">

      <div class="flex items-center justify-between md:justify-between">

        <button data-nav-toggle class="inline-flex h-10 w-10 items-center justify-start text-primary-700 md:hidden" aria-label="Open menu">
          <i class="bi bi-list text-2xl"></i>
        </button>

        <a href="/" class="flex items-center gap-3 md:mr-auto">
          <img src="/assets/images/logo/logo.png" class="h-8 md:h-12" />
        </a>

        <button type="button"
           data-search-toggle
           class="inline-flex h-10 w-10 items-center justify-end text-main-500 transition hover:text-main-900 md:hidden"
           aria-label="Open search"
           aria-expanded="false">
          <i class="bi bi-search text-xl"></i>
        </button>

        <div class="hidden md:flex items-center justify-end gap-10">
          <nav class="flex items-center gap-1">
            ${renderDesktopMenu(MENU)}
          </nav>

          <button type="button"
             data-search-toggle
             class="inline-flex h-8 w-8 items-center justify-center text-main-500 transition hover:text-main-900"
             aria-label="Open search"
             aria-expanded="false">
            <i class="bi bi-search text-2xl"></i>
          </button>
        </div>

      </div>

      <div data-mobile-nav class="hidden mt-5 border border-main-200 bg-white md:hidden">
        ${renderMobileMenu(MENU)}
      </div>

    </div>
  </div>

  <div data-search-panel class="absolute left-0 right-0 top-full z-40 hidden px-4 md:px-16">
    <form action="/collection/" method="get" class="ml-12 flex max-w-sm border border-main-200 bg-white shadow-sm md:ml-auto" style="width: calc(100% - 3rem);" role="search">
      <label for="topnav-search-input" class="sr-only">Search</label>
      <input id="topnav-search-input"
             data-search-input
             name="q"
             type="search"
             placeholder="Enter Your Search"
             class="h-12 min-w-0 flex-1 bg-white px-3 text-sm text-main-600 outline-none" />
      <button type="submit"
              class="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-primary-700 text-white transition hover:bg-primary-800"
              aria-label="Submit search">
        <i class="bi bi-search text-xl"></i>
      </button>
    </form>
  </div>

  <div data-nav-placeholder class="hidden"></div>

</header>
`;

class TopNav extends HTMLElement {
  connectedCallback() {
    if (this._rendered) return;
    this._rendered = true;

    this.appendChild(template.content.cloneNode(true));

    this.syncActive();
    this.wire();
  }

  syncActive() {
    const path = window.location.pathname;
    this.querySelectorAll("a[href]").forEach(a => {
      if (a.getAttribute("href") === path) {
        a.classList.add("text-main-900", "font-semibold");
      }
    });
  }

  wire() {
    const topnav = this.querySelector("#topnav");
    const navPlaceholder = this.querySelector("[data-nav-placeholder]");
    const navToggle = this.querySelector("[data-nav-toggle]");
    const mobileNav = this.querySelector("[data-mobile-nav]");
    const searchPanel = this.querySelector("[data-search-panel]");
    const searchInput = this.querySelector("[data-search-input]");
    const searchToggles = this.querySelectorAll("[data-search-toggle]");
    let pinNavTimer = null;
    let navPinned = false;

    const setNavPinned = pinned => {
      if (!topnav || !navPlaceholder) return;

      navPinned = pinned;
      navPlaceholder.style.height = pinned ? `${topnav.offsetHeight}px` : "0px";
      navPlaceholder.classList.toggle("hidden", !pinned);
      topnav.classList.toggle("fixed", pinned);
      topnav.classList.toggle("left-0", pinned);
      topnav.classList.toggle("right-0", pinned);
      topnav.classList.toggle("top-0", pinned);
      topnav.classList.toggle("z-50", pinned);
      topnav.classList.toggle("shadow-md", pinned);
    };

    const updatePinnedNav = () => {
      const isScrolled = window.scrollY > 0;

      if (!isScrolled) {
        clearTimeout(pinNavTimer);
        pinNavTimer = null;
        setNavPinned(false);
        return;
      }

      if (navPinned || pinNavTimer) return;

      pinNavTimer = setTimeout(() => {
        pinNavTimer = null;
        if (window.scrollY > 0) {
          setNavPinned(true);
        }
      }, 1200);
    };

    updatePinnedNav();
    window.addEventListener("scroll", updatePinnedNav, { passive: true });
    window.addEventListener("resize", () => {
      if (navPinned) {
        setNavPinned(true);
      }
    });

    navToggle?.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
    });

    const setSearchOpen = open => {
      searchPanel?.classList.toggle("hidden", !open);
      searchToggles.forEach(toggle => {
        toggle.setAttribute("aria-expanded", String(open));
      });

      if (open) {
        mobileNav?.classList.add("hidden");
        setTimeout(() => searchInput?.focus(), 0);
      }
    };

    searchToggles.forEach(toggle => {
      toggle.addEventListener("click", e => {
        e.preventDefault();
        setSearchOpen(searchPanel?.classList.contains("hidden"));
      });
    });

    const dropdowns = this.querySelectorAll("[data-dropdown]");

    const closeAll = () => {
      dropdowns.forEach(d => {
        d.querySelector("[data-dropdown-menu]")?.classList.add("hidden");
      });
    };

    dropdowns.forEach(d => {
      const btn = d.querySelector("[data-dropdown-trigger]");
      const menu = d.querySelector("[data-dropdown-menu]");

      d.addEventListener("mouseenter", () => {
        closeAll();
        menu.classList.remove("hidden");
      });

      d.addEventListener("mouseleave", () => {
        menu.classList.add("hidden");
      });

      btn.addEventListener("click", e => {
        e.preventDefault();
        menu.classList.toggle("hidden");
      });
    });

    // mobile dropdown
    this.querySelectorAll("[data-mobile-dropdown]").forEach(d => {
      const btn = d.querySelector("[data-mobile-dropdown-trigger]");
      const menu = d.querySelector("[data-mobile-dropdown-menu]");

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    });

    window.addEventListener("click", e => {
      if (!this.contains(e.target)) {
        this.querySelectorAll("[data-dropdown-menu]").forEach(m => m.classList.add("hidden"));
        setSearchOpen(false);
      }
    });
  }
}

customElements.define("top-nav", TopNav);
