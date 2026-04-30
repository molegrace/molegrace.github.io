const template = document.createElement("template");
template.innerHTML = `
  <section id="theme-main-banner" class="relative overflow-hidden">
    <div class="relative h-[520px] sm:h-[620px]" data-slides>
      <div
        class="absolute inset-0 opacity-100 transition-opacity duration-700 ease-in-out"
        data-slide
        data-src="/assets/images/home/slide-1.jpg"
        role="group"
        aria-roledescription="slide"
        aria-label="1 of 3"
      >
        <div class="absolute inset-0 bg-primary-950/60"></div>
        <div class="absolute inset-0 bg-cover bg-center" data-bg></div>
        <div class="absolute inset-0">
          <div class="mx-auto flex h-full max-w-7xl items-center px-4">
            <div class="max-w-2xl">
              <h1
                class="text-4xl font-extrabold tracking-tight text-main-0 sm:text-6xl"
                data-animate
                style="--animate-duration: 0.8s; animation-delay: 0s;"
              >
                LAND
              </h1>
              <h2
                class="mt-3 text-3xl font-bold tracking-tight text-main-0 sm:text-5xl"
                data-animate
                style="--animate-duration: 0.8s; animation-delay: 0.2s;"
              >
                REGISTRATION &amp; <br class="hidden sm:block" />DEVELOPMENT
              </h2>
              <div class="mt-8" data-animate style="--animate-duration: 0.8s; animation-delay: 0.39s;">
                <a
                  href="/land/"
                  class="inline-flex items-center justify-center rounded-lg bg-main-0 px-5 py-3 text-sm font-semibold text-primary-900 shadow-sm transition hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-main-0/40"
                  >Learn more</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out pointer-events-none"
        data-slide
        data-src="/assets/images/home/slide-5.jpg"
        role="group"
        aria-roledescription="slide"
        aria-label="2 of 3"
        aria-hidden="true"
      >
        <div class="absolute inset-0 bg-primary-950/60"></div>
        <div class="absolute inset-0 bg-cover bg-center" data-bg></div>
        <div class="absolute inset-0">
          <div class="mx-auto flex h-full max-w-7xl items-center px-4">
            <div class="max-w-2xl">
              <h1
                class="text-4xl font-extrabold tracking-tight text-main-0 sm:text-6xl"
                data-animate
                style="--animate-duration: 0.8s; animation-delay: 0s;"
              >
                UAV SERVICE
              </h1>
              <h2
                class="mt-3 text-3xl font-bold tracking-tight text-main-0 sm:text-5xl"
                data-animate
                style="--animate-duration: 0.8s; animation-delay: 0.2s;"
              >
                MAPPING &amp; <br class="hidden sm:block" />MONITORING
              </h2>
              <div class="mt-8" data-animate style="--animate-duration: 0.8s; animation-delay: 0.39s;">
                <a
                  href="/aerial/"
                  class="inline-flex items-center justify-center rounded-lg bg-main-0 px-5 py-3 text-sm font-semibold text-primary-900 shadow-sm transition hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-main-0/40"
                  >Learn more</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="absolute inset-0 opacity-0 transition-opacity duration-700 ease-in-out pointer-events-none"
        data-slide
        data-src="/assets/images/home/slide-3.jpg"
        role="group"
        aria-roledescription="slide"
        aria-label="3 of 3"
        aria-hidden="true"
      >
        <div class="absolute inset-0 bg-primary-950/60"></div>
        <div class="absolute inset-0 bg-cover bg-center" data-bg></div>
        <div class="absolute inset-0">
          <div class="mx-auto flex h-full max-w-7xl items-center px-4">
            <div class="max-w-2xl">
              <h1
                class="text-4xl font-extrabold tracking-tight text-main-0 sm:text-6xl"
                data-animate
                style="--animate-duration: 0.8s; animation-delay: 0s;"
              >
                DATA
              </h1>
              <h2
                class="mt-3 text-3xl font-bold tracking-tight text-main-0 sm:text-5xl"
                data-animate
                style="--animate-duration: 0.8s; animation-delay: 0.2s;"
              >
                COLLECTION TO<br />VISUALIZATION
              </h2>
              <div class="mt-8" data-animate style="--animate-duration: 0.8s; animation-delay: 0.39s;">
                <a
                  href="/data/"
                  class="inline-flex items-center justify-center rounded-lg bg-main-0 px-5 py-3 text-sm font-semibold text-primary-900 shadow-sm transition hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-main-0/40"
                  >Learn more</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <div class="pointer-events-none absolute inset-x-0 bottom-6 z-10">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4">
        <button
          type="button"
          data-prev
          class="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-main-0/30 bg-main-0/10 text-main-0 backdrop-blur transition hover:bg-main-0/20 focus:outline-none focus:ring-2 focus:ring-main-0/40"
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div class="pointer-events-auto flex items-center gap-2" aria-label="Slide navigation" data-dots></div>

        <button
          type="button"
          data-next
          class="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-main-0/30 bg-main-0/10 text-main-0 backdrop-blur transition hover:bg-main-0/20 focus:outline-none focus:ring-2 focus:ring-main-0/40"
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  </section>
`;

class HeroSlider extends HTMLElement {
  connectedCallback() {
    if (this._rendered) return;
    this._rendered = true;

    this.appendChild(template.content.cloneNode(true));
    this.#init();
  }

  disconnectedCallback() {
    if (this._timer) window.clearInterval(this._timer);
    this._timer = null;
  }

  #init() {
    this._index = 0;
    this._slides = Array.from(this.querySelectorAll("[data-slide]"));
    this._dotsRoot = this.querySelector("[data-dots]");
    this._prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    for (const slide of this._slides) {
      const src = slide.getAttribute("data-src");
      const bg = slide.querySelector("[data-bg]");
      if (src && bg) bg.style.backgroundImage = `url('${src}')`;
    }

    this.#renderDots();
    this.#show(0, { animate: true });

    const prev = this.querySelector("[data-prev]");
    const next = this.querySelector("[data-next]");
    if (prev) prev.addEventListener("click", () => this.#step(-1));
    if (next) next.addEventListener("click", () => this.#step(1));

    if (!this._prefersReducedMotion) {
      this._timer = window.setInterval(() => this.#step(1), 7000);
      this.addEventListener("mouseenter", () => {
        if (this._timer) window.clearInterval(this._timer);
        this._timer = null;
      });
      this.addEventListener("mouseleave", () => {
        if (!this._timer) this._timer = window.setInterval(() => this.#step(1), 7000);
      });
    }
  }

  #renderDots() {
    if (!this._dotsRoot) return;
    this._dotsRoot.innerHTML = "";
    this._dots = this._slides.map((_, i) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Go to slide ${i + 1}`);
      button.className =
        "h-2.5 w-2.5 rounded-full border border-main-0/40 bg-main-0/20 transition hover:bg-main-0/40 focus:outline-none focus:ring-2 focus:ring-main-0/40";
      button.addEventListener("click", () => this.#show(i, { animate: true }));
      this._dotsRoot.appendChild(button);
      return button;
    });
  }

  #step(delta) {
    const nextIndex = (this._index + delta + this._slides.length) % this._slides.length;
    this.#show(nextIndex, { animate: true });
  }

  #show(nextIndex, { animate }) {
    this._index = nextIndex;

    this._slides.forEach((slide, i) => {
      const isActive = i === nextIndex;
      slide.classList.toggle("opacity-100", isActive);
      slide.classList.toggle("opacity-0", !isActive);
      slide.classList.toggle("pointer-events-none", !isActive);
      slide.toggleAttribute("aria-hidden", !isActive);
    });

    if (this._dots) {
      this._dots.forEach((dot, i) => {
        const isActive = i === nextIndex;
        dot.classList.toggle("bg-main-0", isActive);
        dot.classList.toggle("bg-main-0/20", !isActive);
      });
    }

    if (animate && !this._prefersReducedMotion) this.#restartAnimations(this._slides[nextIndex]);
  }

  #restartAnimations(slide) {
    const items = slide.querySelectorAll("[data-animate]");
    for (const el of items) {
      el.classList.remove("animate__animated", "animate__fadeInUp");
      // force reflow to restart animation
      void el.offsetWidth;
      el.classList.add("animate__animated", "animate__fadeInUp");
    }
  }
}

if (!customElements.get("hero-slider")) {
  customElements.define("hero-slider", HeroSlider);
}

