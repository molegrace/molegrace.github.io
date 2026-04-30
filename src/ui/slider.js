const template = document.createElement("template");
template.innerHTML = `
  <section id="theme-main-banner" class="banner-one relative overflow-hidden bg-primary-300">
    <div class="relative h-[520px] sm:h-[620px]" data-slides></div>

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

class SiteSlider extends HTMLElement {
  connectedCallback() {
    if (this._rendered) return;
    this._rendered = true;

    const initialSlides = Array.from(this.children);
    this.appendChild(template.content.cloneNode(true));

    const slidesRoot = this.querySelector("[data-slides]");
    for (const slide of initialSlides) slidesRoot.appendChild(slide);

    this._onVisibilityChange = () => this.#handleVisibilityChange();
    this.#init();
  }

  disconnectedCallback() {
    if (this._timer) window.clearInterval(this._timer);
    this._timer = null;
    if (this._onVisibilityChange) {
      document.removeEventListener("visibilitychange", this._onVisibilityChange);
      this._onVisibilityChange = null;
    }
  }

  #init() {
    this._index = 0;
    this._slidesRoot = this.querySelector("[data-slides]");
    this._slides = Array.from(this._slidesRoot?.children || []).filter(
      (el) => el.matches && el.matches("hero-slide, [data-slide]")
    );
    this._dotsRoot = this.querySelector("[data-dots]");
    this._prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    for (const slide of this._slides) {
      slide.setAttribute("data-slide", "");
      if (!slide.hasAttribute("role")) slide.setAttribute("role", "group");
      slide.setAttribute("aria-roledescription", "slide");
    }
    this.#syncAriaLabels();

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

      document.addEventListener("visibilitychange", this._onVisibilityChange);
    }
  }

  #handleVisibilityChange() {
    if (this._prefersReducedMotion) return;
    if (document.visibilityState === "hidden") {
      if (this._timer) window.clearInterval(this._timer);
      this._timer = null;
      return;
    }

    if (!this._timer) this._timer = window.setInterval(() => this.#step(1), 7000);
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
      slide.style.opacity = isActive ? "1" : "0";
      slide.style.pointerEvents = isActive ? "auto" : "none";
      slide.style.zIndex = isActive ? "1" : "0";
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

  #syncAriaLabels() {
    const total = this._slides.length;
    this._slides.forEach((slide, i) => {
      slide.setAttribute("aria-label", `${i + 1} of ${total}`);
    });
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

if (!customElements.get("site-slider")) {
  customElements.define("site-slider", SiteSlider);
}
