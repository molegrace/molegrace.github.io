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
      { label: "FAQ", href: "/faq/" }
    ]
  },
  { label: "Self Service", href: "https://www.databenki.com/gps/" }
];

function createLink(item) {
  return `
    <a href="${item.href}"
       class="nav-link uppercase rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:text-main-900">
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
    const sep = i < menu.length - 1 ? `<span class="text-main-600">|</span>` : "";
    return el + sep;
  }).join("");
}

function renderMobileMenu(menu) {
  return menu.map(item => {
    if (!item.children) {
      return `<a href="${item.href}" class="block px-3 py-2 text-sm font-medium">${item.label}</a>`;
    }

    return `
      <div data-mobile-dropdown>
        <button type="button" data-mobile-dropdown-trigger
          class="flex w-full justify-between px-3 py-2 text-sm font-medium">
          ${item.label} <i class="bi bi-chevron-down"></i>
        </button>

        <div data-mobile-dropdown-menu class="hidden px-2 pb-2">
          ${item.children.map(child => `
            <a href="${child.href}" class="block px-3 py-2 text-sm">
              ${child.label}
            </a>
          `).join("")}
        </div>
      </div>
    `;
  }).join("");
}

template.innerHTML = `
<header class="w-full border-b border-primary-200 bg-white">

  <!-- TOP BAR -->
  <div class="bg-primary-700 text-white">
    <div class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
      <div class="text-sm font-medium tracking-wide">We are leading data firm!</div>

      <div class="flex items-center gap-2">
        <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"><i class="bi bi-facebook"></i></a>
        <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"><i class="bi bi-instagram"></i></a>
        <a href="#" class="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
  </div>

  <!-- NAV -->
  <div id="topnav" class="bg-white sticky top-0 z-50 transition-all duration-300">
    <div class="mx-auto max-w-7xl px-4 py-5">

      <div class="flex items-center justify-between">

        <a href="/" class="flex items-center gap-3">
          <img src="/assets/images/logo/logo.png" class="h-12" />
        </a>

        <button data-nav-toggle class="md:hidden h-10 w-10 border rounded-lg">
          <i class="bi bi-list text-xl"></i>
        </button>

        <nav class="hidden md:flex items-center gap-1">
          ${renderDesktopMenu(MENU)}
        </nav>

      </div>

      <div data-mobile-nav class="hidden mt-4 border p-2 md:hidden">
        ${renderMobileMenu(MENU)}
      </div>

    </div>
  </div>

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
    const navToggle = this.querySelector("[data-nav-toggle]");
    const mobileNav = this.querySelector("[data-mobile-nav]");

    navToggle?.addEventListener("click", () => {
      mobileNav.classList.toggle("hidden");
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
      }
    });
  }
}

customElements.define("top-nav", TopNav);