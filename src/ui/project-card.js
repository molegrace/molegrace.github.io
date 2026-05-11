class ProjectCard extends HTMLElement {
  constructor() {
    super();
  }

  escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  escapeAttribute(value) {
    return this.escapeHtml(value).replace(/`/g, "&#096;");
  }

  connectedCallback() {
    const image = this.escapeAttribute(this.getAttribute("image") || "");
    const title = this.escapeHtml(this.getAttribute("title") || "");
    const description = this.getAttribute("description") || "";
    const link = this.escapeAttribute(this.getAttribute("link") || "#");
    this.removeAttribute("title");
    const descriptionLines = description
      .split(/\s*(?:•|â€¢)\s*/)
      .filter(Boolean)
      .map((line) => `<p class="text-xs font-medium leading-snug text-main-0 sm:text-sm">${this.escapeHtml(line)}</p>`)
      .join("");

    this.innerHTML = `
      <a href="${link}" class="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-4">
        <article
          class="relative h-[320px] overflow-hidden bg-main-100"
        >
          <img
            src="${image}"
            alt="${title}"
            class="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />

          <div class="absolute inset-0 origin-center scale-y-0 bg-primary-700/70 transition-transform duration-300 ease-out group-hover:scale-y-100"></div>

          <div class="absolute inset-0 flex items-end">
            <div class="flex w-full translate-y-6 items-center justify-between gap-4 p-7 opacity-0 transition-all delay-100 duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:p-8">
              <div class="min-w-0 text-main-0">
                <h3 class="mb-2 text-lg font-extrabold leading-tight sm:text-xl">${title}</h3>
                <div class="space-y-1">
                  ${descriptionLines}
                </div>
              </div>

              <span class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-main-0 text-lg text-main-500 shadow-sm transition duration-300 hover:bg-primary-600 hover:text-main-0 group-hover:scale-105 group-hover:text-primary-700 group-focus-visible:text-primary-700">
                <i class="bi bi-arrow-right"></i>
              </span>
            </div>
          </div>
        </article>
      </a>
    `;
  }
}

customElements.define("project-card", ProjectCard);
