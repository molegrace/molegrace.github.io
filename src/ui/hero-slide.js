const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

class HeroSlide extends HTMLElement {
  static get observedAttributes() {
    return ["title", "subtitle", "img", "href", "cta"];
  }

  connectedCallback() {
    if (this._rendered) return;
    this._rendered = true;

    // Base layout for slider usage (host is the slide).
    this.classList.add(
      "absolute",
      "inset-0",
      "transition-opacity",
      "duration-700",
      "ease-in-out"
    );

    this.#render();
  }

  attributeChangedCallback() {
    if (!this._rendered) return;
    this.#render();
  }

  #render() {
    const title = this.getAttribute("title") || "";
    const subtitle = this.getAttribute("subtitle") || "";
    const img = this.getAttribute("img") || "";
    const href = this.getAttribute("href") || "#";
    const cta = this.getAttribute("cta") || "Learn more";

    const safeTitle = escapeHtml(title);
    const safeSubtitle = escapeHtml(subtitle).replace(/\n/g, "<br />");
    const safeCta = escapeHtml(cta);
    const safeHref = escapeHtml(href);
    const safeImg = escapeHtml(img);

    // Light DOM render (Tailwind + Animate.css remain global).
    this.innerHTML = `
      <img
        src="${safeImg}"
        alt=""
        class="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div class="absolute inset-0 bg-primary-950/10"></div>
      <div class="camera_caption absolute inset-0">
        <div class="container mx-auto flex h-full max-w-7xl items-center justify-center px-4">
          <div class="mx-auto w-full max-w-3xl text-center">
            <h1
              class="overflow-hidden text-3xl font-extrabold leading-tight tracking-tight text-primary-700 sm:text-6xl"
              data-animate
              style="--animate-duration: 0.8s; animation-delay: 0s;"
            >
              ${safeTitle}
            </h1>
            <h2
              class="mt-2 overflow-hidden text-2xl font-bold leading-tight tracking-tight text-main-800 sm:mt-3 sm:text-5xl"
              data-animate
              style="--animate-duration: 0.8s; animation-delay: 0.2s;"
            >
              ${safeSubtitle}
            </h2>
            <div class="mt-6 flex justify-center overflow-hidden sm:mt-8" data-animate style="--animate-duration: 0.8s; animation-delay: 0.39s;">
              <a
                href="${safeHref}"
                class="inline-flex items-center justify-center rounded-md bg-main-0 px-4 py-3 text-xs font-semibold text-primary-900 shadow-sm transition hover:bg-primary-700 hover:text-main-50 uppercase focus:outline-none focus:ring-2 focus:ring-main-0/40 sm:px-5 sm:py-4 sm:text-sm"
              >
                ${safeCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!customElements.get("hero-slide")) {
  customElements.define("hero-slide", HeroSlide);
}

