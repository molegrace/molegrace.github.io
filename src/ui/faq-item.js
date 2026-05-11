const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

class FaqItem extends HTMLElement {
  static get observedAttributes() {
    return ["question"];
  }

  constructor() {
    super();
    this._isOpen = false;
    this._onAccordionOpen = this._onAccordionOpen.bind(this);
  }

  connectedCallback() {
    if (this._rendered) return;
    this._answerHtml = this.innerHTML.trim();
    this._rendered = true;
    this.render();
    document.addEventListener("faq-item:open", this._onAccordionOpen);
  }

  disconnectedCallback() {
    document.removeEventListener("faq-item:open", this._onAccordionOpen);
  }

  attributeChangedCallback() {
    if (!this._rendered) return;
    this.render();
  }

  render() {
    const question = escapeHtml(this.getAttribute("question") || "");

    this.innerHTML = `
      <article class="border border-main-200">
        <button
          type="button"
          class="grid min-h-24 w-full cursor-pointer grid-cols-[1fr_72px] items-stretch text-left text-main-900 sm:grid-cols-[1fr_90px] lg:min-h-27"
          aria-expanded="false"
          data-faq-trigger
        >
          <span class="flex items-center px-6 py-5 text-[22px] font-normal leading-snug sm:px-10 sm:text-[28px] lg:px-11.5">
            ${question}
          </span>
          <span class="flex items-center justify-center border-l border-main-200 bg-main-50 text-2xl font-light text-primary-900 transition-colors duration-300" data-faq-icon-wrap>
            <span class="font-bold" data-faq-icon>+</span>
          </span>
        </button>

        <div class="max-h-0 overflow-hidden transition-[max-height] duration-300 ease-out" data-faq-panel>
          <div class="overflow-x-auto border-t border-main-200 px-6 pb-8 pt-6 text-base leading-relaxed text-main-700 sm:px-10 lg:px-11.5 [&_a]:text-primary-700 [&_a]:underline [&_h5]:mb-3 [&_h5]:mt-4 [&_h5]:text-lg [&_h5]:font-semibold [&_h5]:text-primary-900 [&_h6]:mt-3 [&_h6]:font-semibold [&_h6]:text-primary-900 [&_li]:mt-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mt-2 [&_table]:my-4 [&_table]:min-w-160 [&_table]:border-collapse [&_table]:text-left [&_td]:border [&_td]:border-main-300 [&_td]:px-4 [&_td]:py-3 [&_th]:border [&_th]:border-main-300 [&_th]:bg-main-50 [&_th]:px-4 [&_th]:py-3 [&_th]:font-semibold [&_th]:text-primary-900 [&_ul]:pl-0">
            ${this._answerHtml}
          </div>
        </div>
      </article>
    `;

    this._trigger = this.querySelector("[data-faq-trigger]");
    this._panel = this.querySelector("[data-faq-panel]");
    this._icon = this.querySelector("[data-faq-icon]");
    this._iconWrap = this.querySelector("[data-faq-icon-wrap]");

    this._trigger.addEventListener("click", () => this.toggle());
    this.sync();
  }

  toggle() {
    if (this._isOpen) {
      this.close();
      return;
    }

    this.open();
  }

  open() {
    if (this._isOpen) return;
    this._isOpen = true;
    this.dispatchEvent(
      new CustomEvent("faq-item:open", {
        bubbles: true,
        detail: { item: this }
      })
    );
    this.sync();
  }

  close() {
    if (!this._isOpen) return;
    this._isOpen = false;
    this.sync();
  }

  sync() {
    if (!this._trigger || !this._panel || !this._icon || !this._iconWrap) return;

    this._trigger.setAttribute("aria-expanded", String(this._isOpen));
    this._icon.textContent = this._isOpen ? "-" : "+";
    this._iconWrap.classList.toggle("bg-white", this._isOpen);
    this._panel.style.maxHeight = this._isOpen ? `${this._panel.scrollHeight}px` : "0px";
  }

  _onAccordionOpen(event) {
    if (event.detail?.item !== this) {
      this.close();
    }
  }
}

if (!customElements.get("faq-item")) {
  customElements.define("faq-item", FaqItem);
}
