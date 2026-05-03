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
      <div class="mx-auto max-w-7xl px-4 py-5">
        <div class="flex items-center justify-between gap-4">

          <a href="/" class="flex items-center gap-3">
            <img src="/assets/images/logo/logo.png" alt="DataBENKI" class="h-12 w-auto" />
          </a>

          <div class="flex items-center gap-2 md:hidden">
            <button type="button" data-nav-toggle
              class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-main-200 text-main-700 transition hover:bg-main-50"
              aria-label="Open menu" aria-expanded="false">
              <i class="bi bi-list text-xl"></i>
            </button>
          </div>

          <nav class="hidden items-center gap-1 md:flex" aria-label="Primary navigation">

            <a href="/" class="nav-link uppercase rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:text-main-900">Home</a>
            <span class="text-main-600">|</span>

            <a href="/about/" class="nav-link uppercase rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:text-main-900">About us</a>
            <span class="text-main-600">|</span>

            <!-- SERVICE -->
            <div class="relative" data-dropdown>
              <button type="button" data-dropdown-trigger
                class="nav-link uppercase inline-flex items-center gap-1 rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:text-main-900"
                aria-expanded="false">
                Service
                <i class="bi bi-chevron-down text-sm"></i>
              </button>

              <div data-dropdown-menu
                class="absolute left-0 top-full z-50 hidden w-56 bg-white shadow-lg border-t border-main-200">

                <a href="/land/"
                   class="group relative block w-full px-4 py-2.5 text-sm text-main-700 overflow-hidden border-b border-main-200 hover:border-0">
                  <span class="absolute inset-0 bg-primary-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 pointer-events-none"></span>
                  <span class="relative z-10 group-hover:text-white transition-colors duration-200">Land registration</span>
                </a>

                <a href="/data/"
                   class="group relative block w-full px-4 py-2.5 text-sm text-main-700 overflow-hidden border-b border-main-200 hover:border-primary-0">
                  <span class="absolute inset-0 bg-primary-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 pointer-events-none"></span>
                  <span class="relative z-10 group-hover:text-white transition-colors duration-200">Data Services</span>
                </a>

                <a href="/aerial/"
                   class="group relative block w-full px-4 py-2.5 text-sm text-main-700 overflow-hidden border-b border-main-200 hover:border-0">
                  <span class="absolute inset-0 bg-primary-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 pointer-events-none"></span>
                  <span class="relative z-10 group-hover:text-white transition-colors duration-200">UAV Services</span>
                </a>
              </div>
            </div>

            <span class="text-main-600">|</span>

            <a href="/contact/" class="nav-link uppercase rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:text-main-900">
              Contact
            </a>

            <span class="text-main-600">|</span>

            <!-- RESOURCE -->
            <div class="relative" data-dropdown>
              <button type="button" data-dropdown-trigger
                class="nav-link uppercase inline-flex items-center gap-1 rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:text-main-900"
                aria-expanded="false">
                Resource
                <i class="bi bi-chevron-down text-sm"></i>
              </button>

              <div data-dropdown-menu
                class="absolute left-0 top-full z-50 hidden w-48 border-t border-main-200 bg-white shadow-lg">

                <a href="/projects/"
                   class="group relative block w-full px-4 py-2.5 text-sm text-main-700 overflow-hidden border-b border-main-200 hover:border-0">
                  <span class="absolute inset-0 bg-primary-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 pointer-events-none"></span>
                  <span class="relative z-10 group-hover:text-white transition-colors duration-200">Portfolio</span>
                </a>

                <a href="/faq/"
                   class="group relative block w-full px-4 py-2.5 text-sm text-main-700 overflow-hiddenborder-b border-main-200 hover:border-0">
                  <span class="absolute inset-0 bg-primary-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 pointer-events-none"></span>
                  <span class="relative z-10 group-hover:text-white transition-colors duration-200">FAQ</span>
                </a>
              </div>
            </div>

            <span class="text-main-600">|</span>

            <a href="https://www.databenki.com/gps/"
              class="nav-link uppercase rounded-lg px-3 py-2 text-lg font-medium text-main-500 transition hover:text-main-900">
              Self Service
            </a>

          </nav>
        </div>

        <!-- MOBILE -->
        <div data-mobile-nav class="mt-4 hidden border border-main-200 bg-white p-2 md:hidden">

          <a href="/" class="block px-3 py-2 text-sm font-medium">Home</a>
          <a href="/about/" class="block px-3 py-2 text-sm font-medium">About us</a>

          <div data-mobile-dropdown>
            <button type="button" data-mobile-dropdown-trigger class="flex w-full justify-between px-3 py-2 text-sm font-medium">
              Service <i class="bi bi-chevron-down"></i>
            </button>

            <div data-mobile-dropdown-menu class="hidden px-2 pb-2">

              <a href="/land/" class="group relative block w-full px-3 py-2 text-sm overflow-hidden">
                <span class="absolute inset-0 bg-primary-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 pointer-events-none"></span>
                <span class="relative z-10 group-hover:text-white">Land registration</span>
              </a>

              <a href="/data/" class="group relative block w-full px-3 py-2 text-sm overflow-hidden">
                <span class="absolute inset-0 bg-primary-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 pointer-events-none"></span>
                <span class="relative z-10 group-hover:text-white">Data Services</span>
              </a>

              <a href="/aerial/" class="group relative block w-full px-3 py-2 text-sm overflow-hidden">
                <span class="absolute inset-0 bg-primary-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 pointer-events-none"></span>
                <span class="relative z-10 group-hover:text-white">UAV Services</span>
              </a>

            </div>
          </div>

          <a href="/contact/" class="block px-3 py-2 text-sm font-medium">Contact</a>

          <div data-mobile-dropdown>
            <button type="button" data-mobile-dropdown-trigger class="flex w-full justify-between px-3 py-2 text-sm font-medium">
              Resource <i class="bi bi-chevron-down"></i>
            </button>

            <div data-mobile-dropdown-menu class="hidden px-2 pb-2">

              <a href="/project/" class="group relative block w-full px-3 py-2 text-sm overflow-hidden">
                <span class="absolute inset-0 bg-primary-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 pointer-events-none"></span>
                <span class="relative z-10 group-hover:text-white">Portfolio</span>
              </a>

              <a href="/faq/" class="group relative block w-full px-3 py-2 text-sm overflow-hidden">
                <span class="absolute inset-0 bg-primary-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 pointer-events-none"></span>
                <span class="relative z-10 group-hover:text-white">FAQ</span>
              </a>

            </div>
          </div>

          <a href="https://www.databenki.com/gps/" class="block px-3 py-2 text-sm font-medium">
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
        link.classList.add("text-main-900", "font-semibold");
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