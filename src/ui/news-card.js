const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

class NewsCard extends HTMLElement {
  static get observedAttributes() {
    return ["title", "date", "img", "img-alt", "href", "cta"];
  }

  connectedCallback() {
    if (this._rendered) return;
    this._rendered = true;

    if (!this.style.display) this.style.display = "block";
    this.classList.add("min-w-0", "md:flex-1");
    this.#render();
  }

  attributeChangedCallback() {
    if (!this._rendered) return;
    this.#render();
  }

  #render() {
    const title = this.getAttribute("title") || "";
    const date = this.getAttribute("date") || "";
    const img = this.getAttribute("img") || "";
    const imgAlt = this.getAttribute("img-alt") || "";
    const href = this.getAttribute("href") || "#";
    const cta = this.getAttribute("cta") || "READ MORE";

    const safeTitle = escapeHtml(title);
    const safeDate = escapeHtml(date);
    const safeImg = escapeHtml(img);
    const safeImgAlt = escapeHtml(imgAlt);
    const safeHref = escapeHtml(href);
    const safeCta = escapeHtml(cta);

    // Light DOM render so Tailwind styles remain global.
    this.innerHTML = `
      <article class="group h-full left-0 ">
        <div class="relative overflow-hidden rounded-md bg-primary-100">
          <img src="${safeImg}" alt="${safeImgAlt}" class="h-62.5  w-full object-cover transition duration-900 ease-out group-hover:scale-150" loading="lazy" decoding="async" />
          <div class="absolute bottom-5 left-5 rounded-md bg-primary-700 px-4 py-1 text-sm font-semibold text-main-0">
            ${safeDate}
          </div>
        </div>
        <div class="pt-8">
          <h3 class="text-lg font-bold leading-snug text-main-900">
            ${safeTitle}
          </h3>
          <a class="mt-7 top-0 inline-flex text-sm font-bold uppercase text-primary-700 transition hover:text-primary-700 hover:underline" href="${safeHref}">${safeCta}</a>
        </div>
      </article>
    `;
  }
}

if (!customElements.get("news-card")) {
  customElements.define("news-card", NewsCard);
}
