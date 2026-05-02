class ProjectCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const image = this.getAttribute("image") || "";
    const title = this.getAttribute("title") || "";
    const description = this.getAttribute("description") || "";
    const link = this.getAttribute("link") || "#";

    this.innerHTML = `
      <a href="${link}" class="group block overflow-hidden rounded-lg border border-main-200 bg-main-100">

        <div class="relative overflow-hidden">
          <img 
            src="${image}" clear
            alt="${title}"
            class="h-64 w-full object-cover transition-transform"
            loading="lazy"
          />

          <!-- Overlay -->
          <div class="absolute inset-0">
            <!-- background -->
            <div class="absolute inset-0 bg-primary-950/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <!-- sliding content -->
            <div
              class="absolute bottom-0 left-0 w-full translate-y-full transition-transform duration-300 group-hover:translate-y-0 p-4"
            >
              <h3 class="text-lg font-bold text-white">${title}</h3>
              <p class="mt-1 text-sm text-gray-200">${description}</p>
            </div>
          </div>

        </div>

      </a>
    `;
  }
}

customElements.define("project-card", ProjectCard);