const template = document.createElement("template");
template.innerHTML = `
  <footer class="bg-primary-800 text-slate-200">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-12">
      <!-- Brand -->
      <div class="lg:col-span-4">
        <a href="/" class="inline-flex items-center gap-3">
          <img src="/assets/images/logo/logo2.png" alt="DataBENKI" class="h-10 w-auto" />
        </a>
        <p class="mt-4 text-sm leading-relaxed text-slate-300">
          We have qualified and Experienced team for data collection,processing and
          visualization.
          <br />
          Our teams are capable for dealing with all kind of <strong>DATA</strong>
        </p>
        <div class="mt-5 flex flex-wrap gap-2">
          <a href="#" aria-label="Facebook"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M20.6 7.2c.01.2.01.4.01.6 0 6.2-4.7 13.3-13.3 13.3-2.6 0-5.1-.8-7.1-2.1h1c2.2 0 4.3-.8 5.9-2.1-2.1 0-3.8-1.4-4.4-3.3.3.05.6.08.9.08.4 0 .8-.05 1.2-.16-2.2-.45-3.9-2.4-3.9-4.7v-.06c.6.36 1.3.58 2.1.6-1.3-.87-2.1-2.35-2.1-4 0-.88.23-1.7.65-2.4 2.3 2.8 5.8 4.6 9.7 4.8-.07-.34-.1-.68-.1-1.03 0-2.5 2-4.5 4.5-4.5 1.3 0 2.5.55 3.3 1.43 1-.2 2-.6 2.9-1.1-.34 1.05-1.06 1.93-2 2.48.9-.1 1.8-.35 2.6-.7-.6.9-1.3 1.7-2.1 2.34Z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M6.94 6.5A2.44 2.44 0 1 1 7 1.62a2.44 2.44 0 0 1-.06 4.88ZM2.5 22V8.2h4.9V22H2.5Zm7.9 0V8.2H15v1.9h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V22h-4.9v-6.1c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V22h-4.9Z"/>
            </svg>
          </a>
          <a href="#" aria-label="Pinterest"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M12.1 1.8C6.6 1.8 3 5.4 3 10.1c0 3.4 1.9 6.3 4.8 7.4-.1-.6-.2-1.5 0-2.2.2-.6 1.2-4 1.2-4s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.8 0 1.2.6 1.2 1.4 0 .8-.5 2-.8 3.2-.2.9.5 1.6 1.3 1.6 1.6 0 2.9-1.7 2.9-4.2 0-2.2-1.6-3.7-3.9-3.7-2.7 0-4.3 2-4.3 4.1 0 .8.3 1.7.7 2.1.1.1.1.2.1.3-.1.3-.2.9-.2 1-.1.2-.2.3-.4.2-1.3-.6-2.1-2.4-2.1-3.9 0-3.2 2.3-6.1 6.7-6.1 3.5 0 6.2 2.5 6.2 5.8 0 3.5-2.2 6.3-5.2 6.3-1 0-2-.5-2.3-1.1l-.6 2.3c-.2.8-.7 1.9-1.1 2.6.8.3 1.6.4 2.5.4 5.5 0 9.1-3.6 9.1-8.3 0-4.7-3.6-8.3-9.1-8.3Z"/>
            </svg>
          </a>
          <a href="#" aria-label="Google Plus"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M12 10.2v3.6h5.1c-.2 1.1-1.3 3.2-5.1 3.2-3.1 0-5.6-2.6-5.6-5.7S8.9 5.6 12 5.6c1.8 0 3 .8 3.7 1.4l2.5-2.4C16.7 3.3 14.6 2.1 12 2.1 7.3 2.1 3.5 5.9 3.5 10.6S7.3 19.1 12 19.1c4.9 0 8.1-3.4 8.1-8.2 0-.6-.1-1-.2-1.4H12Zm9.2.4v2.4h-2.4v2.4h-2.4V13h-2.4v-2.4h2.4V8.2h2.4v2.4h2.4Z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Solutions -->
      <div class="lg:col-span-2">
        <h6 class="text-sm font-semibold tracking-widest text-white">SOLUTIONS</h6>
        <ul class="mt-4 space-y-2 text-sm text-slate-300">
          <li><a class="hover:text-white" href="/land/">Land registration</a></li>
          <li><a class="hover:text-white" href="/data/">Data Services</a></li>
          <li><a class="hover:text-white" href="/aerial/">UAV Services</a></li>
          <li>
            <a class="hover:text-white" href="/auth/register">Sign up</a>
            <span class="text-slate-500">or</span>
            <a class="hover:text-white" href="https://www.databenki.com/gps/account/">Log in</a>
          </li>
        </ul>
      </div>

      <!-- Gallery -->
      <div class="lg:col-span-3">
        <h6 class="text-sm font-semibold tracking-widest text-white">GALLERY</h6>
        <div class="mt-4 grid grid-cols-3 gap-2">
          <a href="/assets/images/portfolio/7.jpg" data-fancybox="gallery" data-caption="Data Collection for Ihumwa Spatial unit,Dodoma"
            class="group block overflow-hidden rounded-lg border border-white/10">
            <img src="/assets/images/portfolio/7.jpg" alt="" class="h-20 w-full object-cover transition group-hover:scale-105" />
          </a>
          <a href="/assets/images/portfolio/8.jpg" data-fancybox="gallery" data-caption="Data Processing for Miyuji Spatial unit,Dodoma"
            class="group block overflow-hidden rounded-lg border border-white/10">
            <img src="/assets/images/portfolio/8.jpg" alt="" class="h-20 w-full object-cover transition group-hover:scale-105" />
          </a>
          <a href="/assets/images/portfolio/9.jpg" data-fancybox="gallery" data-caption="Topographical surveying"
            class="group block overflow-hidden rounded-lg border border-white/10">
            <img src="/assets/images/portfolio/9.jpg" alt="" class="h-20 w-full object-cover transition group-hover:scale-105" />
          </a>
          <a href="/assets/images/portfolio/10.jpg" data-fancybox="gallery" data-caption="Data Processing for Rukwa Region and Kagera Region Powerline survey"
            class="group block overflow-hidden rounded-lg border border-white/10">
            <img src="/assets/images/portfolio/10.jpg" alt="" class="h-20 w-full object-cover transition group-hover:scale-105" />
          </a>
          <a href="/assets/images/portfolio/11.jpg" data-fancybox="gallery" data-caption="Control Survey Data Processing for Bariadi District, Simiyu"
            class="group block overflow-hidden rounded-lg border border-white/10">
            <img src="/assets/images/portfolio/11.jpg" alt="" class="h-20 w-full object-cover transition group-hover:scale-105" />
          </a>
          <a href="/assets/images/portfolio/12.jpg" data-fancybox="gallery" data-caption="House-hold pest survey, Ilala, Dar es salaam"
            class="group block overflow-hidden rounded-lg border border-white/10">
            <img src="/assets/images/portfolio/12.jpg" alt="" class="h-20 w-full object-cover transition group-hover:scale-105" />
          </a>
        </div>
      </div>

      <!-- Contact -->
      <div class="lg:col-span-3">
        <h6 class="text-sm font-semibold tracking-widest text-white">CONTACT</h6>
        <ul class="mt-4 space-y-3 text-sm text-slate-300">
          <li class="flex items-start gap-3">
            <span class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-200">
              <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
              </svg>
            </span>
            <div>
              <div>Pamba Street, Tancot House, 3rd floor,</div>
              <div>Dar Es Salaam.</div>
            </div>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-200">
              <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16v12H4z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 7 8 6 8-6"/>
              </svg>
            </span>
            <a class="hover:text-white" href="mailto:info@databenki.com">info@databenki.com</a>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-200">
              <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.4 19.4 0 0 1 3.2 11.8 19.8 19.8 0 0 1 .1 3.2 2 2 0 0 1 2.1 1h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L6 8.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"/>
              </svg>
            </span>
            <a class="hover:text-white" href="tel:+255.754360843">+255.754360843</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="mx-auto max-w-7xl px-4 py-6">
        <p class="text-sm text-slate-400">
          &copy; <span data-current-year></span>. Databenki Group of companies Limited. All Rights Reserved.
        </p>
      </div>
    </div>

    <button type="button" data-scroll-top
      class="fixed bottom-5 right-5 z-50 hidden h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg shadow-black/20 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300">
      <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  </footer>
`;

class SiteFooter extends HTMLElement {
  connectedCallback() {
    if (this._rendered) return;
    this._rendered = true;

    this.appendChild(template.content.cloneNode(true));
    this.#setYear();
    this.#wireScrollTop();
  }

  #setYear() {
    const year = String(new Date().getFullYear());
    for (const el of this.querySelectorAll("[data-current-year]")) el.textContent = year;
  }

  #wireScrollTop() {
    const button = this.querySelector("[data-scroll-top]");
    if (!button) return;

    const updateVisibility = () => {
      const shouldShow = window.scrollY > 300;
      button.classList.toggle("hidden", !shouldShow);
      button.classList.toggle("inline-flex", shouldShow);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

if (!customElements.get("site-footer")) {
  customElements.define("site-footer", SiteFooter);
}
