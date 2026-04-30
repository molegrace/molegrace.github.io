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
      <article class="overflow-hidden rounded-md border border-primary-200 bg-main-0 shadow-2xl">
        <div class="relative">
          <img src="${safeImg}" alt="${safeImgAlt}" class="h-60 w-full object-cover" loading="lazy" decoding="async" />
          <div class="absolute left-4 bottom-4 rounded-md bg-primary-700 px-3 py-2 text-xs font-semibold text-main-100">
            ${safeDate}
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-base font-semibold text-main-700">
            <a class="news-card__title hover:underline" href="${safeHref}">${safeTitle}</a>
          </h3>
          <a class="mt-4 inline-flex text-sm font-semibold text-main-800 hover:underline" href="${safeHref}">${safeCta}</a>
        </div>
      </article>
    `;
  }
}

if (!customElements.get("news-card")) {
  customElements.define("news-card", NewsCard);
}
