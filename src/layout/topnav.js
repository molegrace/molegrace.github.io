const template = document.createElement("template");
template.innerHTML = `
  <header class="w-full border-b border-primary-200 bg-white">
    <div class="bg-primary-700 text-white">
      <div class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
        <div class="text-sm font-medium tracking-wide">We are leading data firm!</div>

        <div class="flex items-center gap-2">
          <a href="https://www.facebook.com/DataBENKI"
             class="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:bg-white/10 hover:text-white"
             aria-label="Facebook">
            <i class="bi bi-facebook"></i>
          </a>

          <a href="https://www.instagram.com/databenki/"
             class="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:bg-white/10 hover:text-white"
             aria-label="Instagram">
            <i class="bi bi-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/company/databenki"
             class="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:bg-white/10 hover:text-white"
             aria-label="LinkedIn">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>

    <div id="topnav" class="bg-white sticky top-0 z-50 transition-all duration-300">
      <div class="mx-auto max-w-7xl px-4 py-4">
        <div class="flex items-center justify-between gap-4">

          <a href="/" class="flex items-center gap-3">
            <img src="/assets/images/logo/logo.png" alt="DataBENKI" class="h-16 w-auto" />
          </a>

          <div class="flex items-center gap-2 md:hidden">
            <button type="button" data-nav-toggle
              class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50"
              aria-label="Open menu" aria-expanded="false">
              <i class="bi bi-list text-xl"></i>
            </button>
          </div>

          <nav class="hidden items-center gap-1 md:flex" aria-label="Primary navigation">

            <a href="/" class="nav-link uppercase rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:bg-main-0 hover:text-main-900">Home</a>

            <a href="/about/" class="nav-link uppercase rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:bg-main-0 hover:text-main-900">About us</a>

            <!-- Service -->
            <div class="relative" data-dropdown>
              <button type="button" data-dropdown-trigger
                class="nav-link uppercase inline-flex items-center gap-1 rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:bg-main-0 hover:text-main-900"
                aria-expanded="false">
                Service
                <i class="bi bi-chevron-down text-sm"></i>
              </button>

              <div data-dropdown-menu class="absolute left-0 top-full z-50 mt-2 hidden w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <a href="/land/" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">Land registration</a>
                <a href="/data/" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">Data Services</a>
                <a href="/aerial/" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">UAV Services</a>
              </div>
            </div>

            <a href="/contact/" class="nav-link uppercase rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:bg-main-0 hover:text-main-900">
              Contact
            </a>

            <!-- Resource (now same style as others) -->
            <div class="relative" data-dropdown>
              <button type="button" data-dropdown-trigger
                class="nav-link uppercase inline-flex items-center gap-1 rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:bg-main-0 hover:text-main-900"
                aria-expanded="false">
                Resource
                <i class="bi bi-chevron-down text-sm"></i>
              </button>

              <div data-dropdown-menu class="absolute left-0 top-full z-50 mt-2 hidden w-48 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <a href="/project/" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">Portfolio</a>
                <a href="/faq/" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">FAQ</a>
              </div>
            </div>

            <!-- Self Service (now same style as others, no CTA look) -->
            <a href="https://www.databenki.com/gps/"
              class="nav-link uppercase rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:bg-main-0 hover:text-main-900">
              Self Service
            </a>

          </nav>
        </div>

        <!-- mobile nav -->
        <div data-mobile-nav class="mt-4 hidden rounded-xl border border-slate-200 bg-white p-2 md:hidden">

          <a href="/" class="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-50">Home</a>
          <a href="/about/" class="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-50">About us</a>

          <div data-mobile-dropdown>
            <button type="button" data-mobile-dropdown-trigger class="flex w-full justify-between rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-50">
              Service
              <i class="bi bi-chevron-down"></i>
            </button>

            <div data-mobile-dropdown-menu class="hidden px-2 pb-2">
              <a href="/land/" class="block px-3 py-2 text-sm hover:bg-slate-50">Land registration</a>
              <a href="/data/" class="block px-3 py-2 text-sm hover:bg-slate-50">Data Services</a>
              <a href="/aerial/" class="block px-3 py-2 text-sm hover:bg-slate-50">UAV Services</a>
            </div>
          </div>

          <a href="/contact/" class="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-50">Contact</a>

          <div data-mobile-dropdown>
            <button type="button" data-mobile-dropdown-trigger class="flex w-full justify-between rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-50">
              Resource
              <i class="bi bi-chevron-down"></i>
            </button>

            <div data-mobile-dropdown-menu class="hidden px-2 pb-2">
              <a href="/project/" class="block px-3 py-2 text-sm hover:bg-slate-50">Portfolio</a>
              <a href="/faq/" class="block px-3 py-2 text-sm hover:bg-slate-50">FAQ</a>
            </div>
          </div>

          <a href="https://www.databenki.com/gps/"
             class="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-slate-50">
            Self Service
          </a>

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

    this.#syncActiveLink();
    this.#wireInteractions();
  }

  #syncActiveLink() {
    const currentPath = window.location.pathname || "/";
    this.querySelectorAll("a[href]").forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPath) {
        link.classList.add("text-slate-900", "font-semibold");
      }
    });
  }

  #wireInteractions() {
    const topnav = this.querySelector("#topnav");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) topnav.classList.add("shadow-md");
      else topnav.classList.remove("shadow-md");
    });

    const navToggle = this.querySelector("[data-nav-toggle]");
    const mobileNav = this.querySelector("[data-mobile-nav]");

    if (navToggle && mobileNav) {
      navToggle.addEventListener("click", () => {
        const open = !mobileNav.classList.contains("hidden");
        mobileNav.classList.toggle("hidden", open);
        navToggle.setAttribute("aria-expanded", String(!open));
      });
    }

    const dropdowns = this.querySelectorAll("[data-dropdown]");

    const closeAll = () => {
      dropdowns.forEach(d => {
        d.querySelector("[data-dropdown-menu]")?.classList.add("hidden");
        d.querySelector("[data-dropdown-trigger]")?.setAttribute("aria-expanded", "false");
      });
    };

    dropdowns.forEach(dropdown => {
      const menu = dropdown.querySelector("[data-dropdown-menu]");
      const btn = dropdown.querySelector("[data-dropdown-trigger]");
      if (!menu || !btn) return;

      const open = () => {
        closeAll();
        menu.classList.remove("hidden");
        btn.setAttribute("aria-expanded", "true");
      };

      const close = () => {
        menu.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");
      };

      dropdown.addEventListener("mouseenter", open);
      dropdown.addEventListener("mouseleave", close);

      btn.addEventListener("click", (e) => {
        e.preventDefault();
        menu.classList.contains("hidden") ? open() : close();
      });
    });

    window.addEventListener("click", (e) => {
      if (!this.contains(e.target)) closeAll();
    });
  }
}

if (!customElements.get("top-nav")) {
  customElements.define("top-nav", TopNav);
}