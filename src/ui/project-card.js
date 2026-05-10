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
    const descriptionLines = description
      .split(/\s*(?:•|â€¢)\s*/)
      .filter(Boolean)
      .map((line) => `<p class="text-base font-medium leading-snug text-main-0 sm:text-lg">${this.escapeHtml(line)}</p>`)
      .join("");

    this.innerHTML = `
      <a href="${link}" class="group block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-4">
        <article
          class="relative h-[320px] overflow-hidden rounded-lg bg-main-100 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          style="background-image: url('${image}')"
          role="img"
          aria-label="${title}"
        >
          <div class="absolute inset-0 bg-primary-700/70 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"></div>

          <div class="absolute inset-0 flex -translate-y-8 items-end opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            <div class="flex w-full items-end justify-between gap-5 p-8 sm:p-10">
              <div class="min-w-0 text-main-0">
                <h3 class="mb-3 text-2xl font-extrabold leading-tight sm:text-3xl">${title}</h3>
                <div class="space-y-1">
                  ${descriptionLines}
                </div>
              </div>

              <span class="mb-1 inline-flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-main-0 text-3xl text-main-500 shadow-sm transition-colors duration-300 hover:text-primary-700 group-hover:text-primary-700 group-focus-visible:text-primary-700">
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
