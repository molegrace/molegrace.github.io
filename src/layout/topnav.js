const template = document.createElement("template");
template.innerHTML = `
  <header class="w-full border-b border-slate-200 bg-white">
    <div class="bg-slate-900 text-white">
      <div class="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
        <div class="text-sm font-medium tracking-wide">We are leading data firm!</div>
        <div class="flex items-center gap-2">
          <a class="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
             href="https://www.facebook.com/DataBENKI" aria-label="Facebook">
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z"/>
            </svg>
          </a>
          <a class="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
             href="https://www.instagram.com/databenki/" aria-label="Instagram">
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM18 6.2a1.2 1.2 0 1 1-1.2 1.2A1.2 1.2 0 0 1 18 6.2Z"/>
            </svg>
          </a>
          <a class="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
             href="https://www.linkedin.com/company/databenki" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M6.94 6.5A2.44 2.44 0 1 1 7 1.62a2.44 2.44 0 0 1-.06 4.88ZM2.5 22V8.2h4.9V22H2.5Zm7.9 0V8.2H15v1.9h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V22h-4.9v-6.1c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V22h-4.9Z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-4">
        <div class="flex items-center justify-between gap-4">
          <a href="/" class="flex items-center gap-3">
            <img src="/assets/images/logo/logo.png" alt="DataBENKI" class="h-10 w-auto" />
          </a>

          <div class="flex items-center gap-2 md:hidden">
            <button type="button" data-nav-toggle
              class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
              aria-label="Open menu" aria-expanded="false">
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-none stroke-current" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>

          <nav class="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            <a href="/" class="nav-link rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900">Home</a>
            <a href="/about/" class="nav-link rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900">About us</a>

            <div class="relative" data-dropdown>
              <button type="button" data-dropdown-trigger
                class="nav-link inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                aria-expanded="false">
                Service
                <svg viewBox="0 0 20 20" class="h-4 w-4 fill-current" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clip-rule="evenodd"/>
                </svg>
              </button>
              <div data-dropdown-menu class="absolute left-0 top-full z-50 mt-2 hidden w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <a href="/land/" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">Land registration</a>
                <a href="/data/" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">Data Services</a>
                <a href="/aerial/" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">UAV Services</a>
              </div>
            </div>

            <a href="/contact/" class="nav-link rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900">Contact</a>

            <div class="relative" data-dropdown>
              <button type="button" data-dropdown-trigger
                class="nav-link inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                aria-expanded="false">
                Resource
                <svg viewBox="0 0 20 20" class="h-4 w-4 fill-current" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clip-rule="evenodd"/>
                </svg>
              </button>
              <div data-dropdown-menu class="absolute left-0 top-full z-50 mt-2 hidden w-48 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                <a href="/project/" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">Portfolio</a>
                <a href="/faq/" class="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">FAQ</a>
              </div>
            </div>

            <a href="https://www.databenki.com/gps/"
              class="ml-2 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
              Self Service
            </a>

            <div class="relative" data-search>
              <button type="button" data-search-trigger
                class="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
                aria-label="Search" aria-expanded="false">
                <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"/>
                </svg>
              </button>
              <div data-search-menu class="absolute right-0 top-full z-50 mt-2 hidden w-72 rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
                <form action="#" class="flex items-center gap-2">
                  <input type="text" placeholder="Enter your search"
                    class="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
                  <button type="submit"
                    class="inline-flex h-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 px-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>

        <div data-mobile-nav class="mt-4 hidden rounded-xl border border-slate-200 bg-white p-2 md:hidden">
          <a href="/" class="nav-link block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Home</a>
          <a href="/about/" class="nav-link block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">About us</a>

          <div class="mt-1" data-mobile-dropdown>
            <button type="button" data-mobile-dropdown-trigger class="nav-link flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" aria-expanded="false">
              <span>Service</span>
              <svg viewBox="0 0 20 20" class="h-4 w-4 fill-current" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div data-mobile-dropdown-menu class="hidden px-2 pb-2">
              <a href="/land/" class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Land registration</a>
              <a href="/data/" class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Data Services</a>
              <a href="/aerial/" class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">UAV Services</a>
            </div>
          </div>

          <a href="/contact/" class="nav-link block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Contact</a>

          <div class="mt-1" data-mobile-dropdown>
            <button type="button" data-mobile-dropdown-trigger class="nav-link flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" aria-expanded="false">
              <span>Resource</span>
              <svg viewBox="0 0 20 20" class="h-4 w-4 fill-current" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div data-mobile-dropdown-menu class="hidden px-2 pb-2">
              <a href="/project/" class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">Portfolio</a>
              <a href="/faq/" class="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">FAQ</a>
            </div>
          </div>

          <a href="https://www.databenki.com/gps/" class="mt-2 block rounded-lg bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-slate-800">Self Service</a>

          <div class="mt-2 rounded-lg border border-slate-200 p-2">
            <form action="#" class="flex items-center gap-2">
              <input type="text" placeholder="Enter your search"
                class="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200" />
              <button type="submit" class="inline-flex h-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 px-3 text-sm font-semibold text-white hover:bg-slate-800">
                Search
              </button>
            </form>
          </div>
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
    const links = this.querySelectorAll("a[href]");

    for (const link of links) {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("http")) continue;

      const isActive = href === currentPath;
      if (isActive) link.classList.add("text-slate-900", "font-semibold");
      else link.classList.remove("text-slate-900", "font-semibold");
    }
  }

  #wireInteractions() {
    const navToggle = this.querySelector("[data-nav-toggle]");
    const mobileNav = this.querySelector("[data-mobile-nav]");
    if (navToggle && mobileNav) {
      navToggle.addEventListener("click", () => {
        const isOpen = !mobileNav.classList.contains("hidden");
        mobileNav.classList.toggle("hidden", isOpen);
        navToggle.setAttribute("aria-expanded", String(!isOpen));
      });
    }

    const dropdowns = Array.from(this.querySelectorAll("[data-dropdown]"));
    const closeAllDropdowns = () => {
      for (const dropdown of dropdowns) {
        const trigger = dropdown.querySelector("[data-dropdown-trigger]");
        const menu = dropdown.querySelector("[data-dropdown-menu]");
        if (!trigger || !menu) continue;
        menu.classList.add("hidden");
        trigger.setAttribute("aria-expanded", "false");
      }
    };

    for (const dropdown of dropdowns) {
      const trigger = dropdown.querySelector("[data-dropdown-trigger]");
      const menu = dropdown.querySelector("[data-dropdown-menu]");
      if (!trigger || !menu) continue;

      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        const isOpen = !menu.classList.contains("hidden");
        closeAllDropdowns();
        menu.classList.toggle("hidden", isOpen);
        trigger.setAttribute("aria-expanded", String(!isOpen));
      });
    }

    const searchTrigger = this.querySelector("[data-search-trigger]");
    const searchMenu = this.querySelector("[data-search-menu]");
    if (searchTrigger && searchMenu) {
      searchTrigger.addEventListener("click", (event) => {
        event.preventDefault();
        const isOpen = !searchMenu.classList.contains("hidden");
        closeAllDropdowns();
        searchMenu.classList.toggle("hidden", isOpen);
        searchTrigger.setAttribute("aria-expanded", String(!isOpen));
        if (!isOpen) {
          const input = searchMenu.querySelector("input");
          if (input) input.focus();
        }
      });
    }

    const mobileDropdowns = Array.from(
      this.querySelectorAll("[data-mobile-dropdown]")
    );
    for (const block of mobileDropdowns) {
      const trigger = block.querySelector("[data-mobile-dropdown-trigger]");
      const menu = block.querySelector("[data-mobile-dropdown-menu]");
      if (!trigger || !menu) continue;
      trigger.addEventListener("click", () => {
        const isOpen = !menu.classList.contains("hidden");
        menu.classList.toggle("hidden", isOpen);
        trigger.setAttribute("aria-expanded", String(!isOpen));
      });
    }

    window.addEventListener("click", (event) => {
      if (this.contains(event.target)) return;
      closeAllDropdowns();
      if (searchMenu && searchTrigger) {
        searchMenu.classList.add("hidden");
        searchTrigger.setAttribute("aria-expanded", "false");
      }
    });
  }
}

if (!customElements.get("top-nav")) {
  customElements.define("top-nav", TopNav);
}
