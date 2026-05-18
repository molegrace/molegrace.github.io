const buildTemplate = ({ mode, variant, showArrows, showDots }) => {
  const isOverlay = mode !== "stack";
  const isHero = variant === "hero";
  const isTestimonial = variant === "testimonial";

  const prevNextBase =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur transition focus:outline-none focus:ring-2";
  const prevNextOverlay =
    "border-main-0/30 bg-main-0/10 text-main-0 hover:bg-main-0/20 focus:ring-main-0/40";
  const prevNextStack =
    "border-primary-200 bg-main-0/80 text-main-900 hover:bg-main-0 focus:ring-primary-300";

  const slidesClass = ["relative", "overflow-hidden"];
  if (isHero && isOverlay) slidesClass.push("h-[520px]", "sm:h-[620px]");
  if (isTestimonial && !isOverlay) slidesClass.push("mx-auto", "max-w-3xl");

  const template = document.createElement("template");
  template.innerHTML = `
    <div class="${isOverlay ? "relative" : ""}">
      <div class="${slidesClass.join(" ")}" data-slides></div>

      ${
        isOverlay
          ? `
        <div class="pointer-events-none absolute inset-x-0 bottom-6 z-10">
          <div class="mx-auto flex max-w-7xl items-center justify-between px-4">
            ${
              showArrows
                ? `
              <button
                type="button"
                data-prev
                class="pointer-events-auto ${prevNextBase} ${prevNextOverlay}"
                aria-label="Previous slide"
              >
                <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            `
                : "<span></span>"
            }

            ${
              showDots
                ? `<div class="pointer-events-auto flex items-center gap-2" aria-label="Slide navigation" data-dots></div>`
                : "<span></span>"
            }

            ${
              showArrows
                ? `
              <button
                type="button"
                data-next
                class="pointer-events-auto ${prevNextBase} ${prevNextOverlay}"
                aria-label="Next slide"
              >
                <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6l6 6-6 6" />
                </svg>
              </button>
            `
                : "<span></span>"
            }
          </div>
        </div>
      `
          : `
        <div class="mt-8 flex items-center justify-center gap-4">
          ${
            showArrows
              ? `
            <button
              type="button"
              data-prev
              class="${prevNextBase} ${prevNextStack}"
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          `
              : ""
          }

          ${showDots ? `<div class="flex items-center gap-2" aria-label="Slide navigation" data-dots></div>` : ""}

          ${
            showArrows
              ? `
            <button
              type="button"
              data-next
              class="${prevNextBase} ${prevNextStack}"
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24" class="h-5 w-5 fill-none stroke-current" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6l6 6-6 6" />
              </svg>
            </button>
          `
              : ""
          }
        </div>
      `
      }
    </div>
  `;

  return template;
};

class SiteSlider extends HTMLElement {
  #hasGsap() {
    return (
      typeof window !== "undefined" &&
      window.gsap &&
      typeof window.gsap.to === "function" &&
      typeof window.gsap.set === "function" &&
      typeof window.gsap.timeline === "function"
    );
  }

  #cleanupGsap() {
    if (this._gsapTimeline) {
      this._gsapTimeline.kill();
      this._gsapTimeline = null;
    }
    if (this._sliceOverlay && this._sliceOverlay.isConnected) {
      this._sliceOverlay.remove();
    }
    this._sliceOverlay = null;
  }

  #getSliceOverlay(imgSrc, cols) {
    if (!imgSrc) return null;
    if (!this._slidesRoot) return null;

    const rect = this._slidesRoot.getBoundingClientRect();
    const width = Math.round(rect.width);
    const height = Math.round(rect.height);
    if (!width || !height) return null;

    const resolvedCols = Math.min(32, Math.max(6, cols || 12));

    // Small overlap to hide seams between slices.
    const sliceW = Math.ceil(width / resolvedCols) + 1;

    const overlay = document.createElement("div");
    overlay.setAttribute("data-slice-overlay", "");
    overlay.style.position = "absolute";
    overlay.style.inset = "0";
    overlay.style.pointerEvents = "none";
    overlay.style.overflow = "hidden";
    overlay.style.zIndex = "3";

    for (let i = 0; i < resolvedCols; i++) {
      const left = Math.floor(i * (width / resolvedCols));
      const slice = document.createElement("div");
      slice.style.position = "absolute";
      slice.style.top = "0";
      slice.style.left = `${left}px`;
      slice.style.width = `${sliceW}px`;
      slice.style.height = "100%";
      slice.style.backgroundImage = `url("${imgSrc}")`;
      slice.style.backgroundRepeat = "no-repeat";
      slice.style.backgroundSize = `${width}px ${height}px`;
      slice.style.backgroundPosition = `${-left}px 0px`;
      slice.style.willChange = "transform, opacity";
      slice.style.backfaceVisibility = "hidden";
      overlay.appendChild(slice);
    }

    return overlay;
  }

  #resolveTransition(prevSlide, nextSlide) {
    const nextPref = (nextSlide?.getAttribute?.("transition") || nextSlide?.getAttribute?.("data-transition") || "")
      .toLowerCase()
      .trim();
    const prevPref = (prevSlide?.getAttribute?.("transition") || prevSlide?.getAttribute?.("data-transition") || "")
      .toLowerCase()
      .trim();

    const raw = nextPref || prevPref || this._resolvedTransition || "fade";
    if (raw === "random" || raw === "auto") return this.#pickTransition();
    return raw;
  }

  #resolveSlices(nextSlide) {
    const raw = nextSlide?.getAttribute?.("slices") || this.getAttribute("slices") || "12";
    const parsed = Number.parseInt(raw, 10);
    if (!Number.isFinite(parsed)) return 12;
    return Math.min(32, Math.max(6, parsed));
  }

  #pickTransition() {
    const options = ["fade", "slide", "slide-up", "push", "zoom", "cross-zoom", "wipe", "reveal", "slice"];
    if (options.length === 1) return options[0];

    let next = options[Math.floor(Math.random() * options.length)];
    if (next === this._lastTransition) {
      next = options[(options.indexOf(next) + 1) % options.length];
    }
    this._lastTransition = next;
    return next;
  }

  connectedCallback() {
    if (this._rendered) return;
    this._rendered = true;

    this._mode = (this.getAttribute("mode") || "").toLowerCase() || "overlay";
    this._variant = (this.getAttribute("variant") || "").toLowerCase() || "";
    this._showArrows = this.getAttribute("arrows") !== "false";
    this._showDots = this.getAttribute("dots") !== "false";
    this._autoplay = this.getAttribute("autoplay") !== "false";
    this._interval = Math.max(1500, Number.parseInt(this.getAttribute("interval") || "7000", 10) || 7000);
    this._transition = (this.getAttribute("transition") || "").toLowerCase() || "";

    const initialSlides = Array.from(this.children);
    const template = buildTemplate({
      mode: this._mode,
      variant: this._variant,
      showArrows: this._showArrows,
      showDots: this._showDots,
    });
    this.appendChild(template.content.cloneNode(true));

    const slidesRoot = this.querySelector("[data-slides]");
    for (const slide of initialSlides) slidesRoot.appendChild(slide);

    this._onVisibilityChange = () => this.#handleVisibilityChange();
    this.#init();
  }

  disconnectedCallback() {
    this.#cleanupGsap();
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
    if (this._slides.length === 0) return;

    this._dotsRoot = this.querySelector("[data-dots]");
    this._prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    this._useGsapTransitions =
      this._variant === "hero" &&
      this._mode !== "stack" &&
      !this._prefersReducedMotion &&
      this.#hasGsap();

    const rawTransition = this._transition || (this._variant === "hero" ? "slice" : "fade");
    this._resolvedTransition =
      rawTransition === "random" || rawTransition === "auto" ? "random" : rawTransition;

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
    const showControls = this._slides.length > 1;
    if (prev) prev.toggleAttribute("hidden", !showControls || !this._showArrows);
    if (next) next.toggleAttribute("hidden", !showControls || !this._showArrows);
    if (this._dotsRoot) this._dotsRoot.toggleAttribute("hidden", !showControls || !this._showDots);

    if (prev) prev.addEventListener("click", () => this.#step(-1));
    if (next) next.addEventListener("click", () => this.#step(1));

    if (this._autoplay && !this._prefersReducedMotion) {
      this._timer = window.setInterval(() => this.#step(1), this._interval);
      this.addEventListener("mouseenter", () => {
        if (this._timer) window.clearInterval(this._timer);
        this._timer = null;
      });
      this.addEventListener("mouseleave", () => {
        if (!this._timer) this._timer = window.setInterval(() => this.#step(1), this._interval);
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

    if (this._autoplay && !this._timer) this._timer = window.setInterval(() => this.#step(1), this._interval);
  }

  #renderDots() {
    if (!this._dotsRoot) return;
    this._dotsRoot.innerHTML = "";

    const isStack = this._mode === "stack";
    const dotBase = "h-2.5 w-2.5 rounded-full border transition focus:outline-none focus:ring-2";
    const dotOverlay = "border-main-0/40 bg-main-0/20 hover:bg-main-0/40 focus:ring-main-0/40";
    const dotStack = "border-primary-200 bg-primary-100 hover:bg-primary-200 focus:ring-primary-300";

    this._dots = this._slides.map((_, i) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Go to slide ${i + 1}`);
      button.className = `${dotBase} ${isStack ? dotStack : dotOverlay}`;
      button.addEventListener("click", () => {
        this._direction = i >= this._index ? 1 : -1;
        this.#show(i, { animate: true });
      });
      this._dotsRoot.appendChild(button);
      return button;
    });
  }

  #step(delta) {
    const nextIndex = (this._index + delta + this._slides.length) % this._slides.length;
    this._direction = delta >= 0 ? 1 : -1;
    this.#show(nextIndex, { animate: true });
  }

  #show(nextIndex, { animate }) {
    const prevIndex = this._index;
    this._index = nextIndex;

    const isStack = this._mode === "stack";
    const useStackSlide =
      isStack &&
      animate &&
      !this._prefersReducedMotion &&
      this._resolvedTransition === "slide" &&
      prevIndex !== nextIndex;

    if (useStackSlide) {
      this.#animateStackSlide(this._slides[prevIndex], this._slides[nextIndex], this._direction || 1);
    }

    this._slides.forEach((slide, i) => {
      const isActive = i === nextIndex;

      if (useStackSlide) {
        slide.toggleAttribute("hidden", i !== prevIndex && !isActive);
        slide.style.pointerEvents = isActive ? "auto" : "none";
      } else if (isStack) {
        slide.toggleAttribute("hidden", !isActive);
        if (isActive && animate && !this._prefersReducedMotion) {
          const isSlideTransition = this._resolvedTransition === "slide";
          slide.animate(
            [
              {
                opacity: 0,
                transform: isSlideTransition
                  ? `translateX(${(this._direction || 1) * 72}px)`
                  : "translateY(18px)",
              },
              { opacity: 1, transform: "translateX(0)" },
            ],
            {
              duration: isSlideTransition ? 850 : 650,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            }
          );
        }
      } else {
        // For overlay mode, default to simple opacity; GSAP (hero) may override below.
        slide.style.opacity = isActive ? "1" : "0";
        slide.style.pointerEvents = isActive ? "auto" : "none";
        slide.style.zIndex = isActive ? "1" : "0";
      }

      slide.toggleAttribute("aria-hidden", !isActive);
    });

    if (this._dots) {
      this._dots.forEach((dot, i) => {
        const isActive = i === nextIndex;

        if (isStack) {
          dot.classList.toggle("bg-primary-600", isActive);
          dot.classList.toggle("bg-primary-100", !isActive);
        } else {
          dot.classList.toggle("bg-main-0", isActive);
          dot.classList.toggle("bg-main-0/20", !isActive);
        }
      });
    }

    if (!isStack && this._useGsapTransitions && animate && prevIndex !== nextIndex) {
      const gsap = window.gsap;
      const prevSlide = this._slides[prevIndex];
      const nextSlide = this._slides[nextIndex];

      this.#cleanupGsap();

      const transition = this.#resolveTransition(prevSlide, nextSlide);

      // Hide all non-participating slides during transition.
      this._slides.forEach((slide, i) => {
        if (i !== prevIndex && i !== nextIndex) {
          slide.style.opacity = "0";
          slide.style.pointerEvents = "none";
          slide.style.zIndex = "0";
        }
      });

      nextSlide.style.pointerEvents = "auto";
      nextSlide.style.zIndex = "2";
      prevSlide.style.zIndex = "1";

      gsap.killTweensOf([prevSlide, nextSlide]);

      if (transition === "slice" || transition === "slices") {
        const prevImgSrc = prevSlide.querySelector("img")?.getAttribute("src") || "";
        const overlay = this.#getSliceOverlay(prevImgSrc, this.#resolveSlices(nextSlide));

        if (!overlay) {
          gsap.set(nextSlide, { opacity: 0 });
          this._gsapTimeline = gsap.timeline({
            onComplete: () => {
              nextSlide.style.zIndex = "1";
              prevSlide.style.zIndex = "0";
              this._gsapTimeline = null;
            },
          });
          this._gsapTimeline.to(prevSlide, { opacity: 0, duration: 1, ease: "power2.out" }, 0);
          this._gsapTimeline.to(nextSlide, { opacity: 1, duration: 1.15, ease: "power2.out" }, 0.05);
        } else {
          this._sliceOverlay = overlay;
          this._slidesRoot.appendChild(overlay);

          nextSlide.style.opacity = "1";
          prevSlide.style.opacity = "0";

          const slices = Array.from(overlay.children);
          gsap.set(slices, { opacity: 1, x: 0, rotationY: 0, z: 0, transformOrigin: "center center" });

          this._gsapTimeline = gsap.timeline({
            defaults: { ease: "power3.inOut" },
            onComplete: () => {
              if (overlay.isConnected) overlay.remove();
              this._sliceOverlay = null;
              this._gsapTimeline = null;
              nextSlide.style.zIndex = "1";
              prevSlide.style.zIndex = "0";
            },
          });

          this._gsapTimeline.to(slices, {
            duration: 1.25,
            opacity: 0,
            x: (i) => (i % 2 ? 150 : -150),
            rotationY: (i) => (i % 2 ? -85 : 85),
            z: -300,
            stagger: { each: 0.055, from: "start" },
          });
        }
      } else if (transition === "slide") {
        this._gsapTimeline = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: () => {
            gsap.set([prevSlide, nextSlide], { clearProps: "transform" });
            nextSlide.style.zIndex = "1";
            prevSlide.style.zIndex = "0";
            this._gsapTimeline = null;
          },
        });

        gsap.set(nextSlide, { opacity: 1, xPercent: 100 });
        gsap.set(prevSlide, { opacity: 1, x: 0 });

        this._gsapTimeline.to(prevSlide, { opacity: 0.25, xPercent: -18, duration: 1.05 }, 0);
        this._gsapTimeline.to(nextSlide, { xPercent: 0, duration: 1.05 }, 0);
      } else if (transition === "slide-up") {
        this._gsapTimeline = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: () => {
            gsap.set([prevSlide, nextSlide], { clearProps: "transform" });
            nextSlide.style.zIndex = "1";
            prevSlide.style.zIndex = "0";
            this._gsapTimeline = null;
          },
        });

        gsap.set(nextSlide, { opacity: 1, yPercent: 100 });
        gsap.set(prevSlide, { opacity: 1, yPercent: 0 });

        this._gsapTimeline.to(prevSlide, { opacity: 0.25, yPercent: -16, duration: 1.05 }, 0);
        this._gsapTimeline.to(nextSlide, { yPercent: 0, duration: 1.05 }, 0);
      } else if (transition === "push") {
        this._gsapTimeline = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: () => {
            gsap.set([prevSlide, nextSlide], { clearProps: "transform" });
            nextSlide.style.zIndex = "1";
            prevSlide.style.zIndex = "0";
            this._gsapTimeline = null;
          },
        });

        gsap.set(nextSlide, { opacity: 1, xPercent: 100 });
        gsap.set(prevSlide, { opacity: 1, xPercent: 0 });

        this._gsapTimeline.to(prevSlide, { xPercent: -100, duration: 1.05 }, 0);
        this._gsapTimeline.to(nextSlide, { xPercent: 0, duration: 1.05 }, 0);
      } else if (transition === "zoom") {
        this._gsapTimeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            gsap.set([prevSlide, nextSlide], { clearProps: "transform,filter" });
            nextSlide.style.zIndex = "1";
            prevSlide.style.zIndex = "0";
            this._gsapTimeline = null;
          },
        });

        gsap.set(nextSlide, { opacity: 0, scale: 1.14 });
        gsap.set(prevSlide, { opacity: 1, scale: 1 });

        this._gsapTimeline.to(prevSlide, { opacity: 0, scale: 0.96, duration: 0.95 }, 0);
        this._gsapTimeline.to(nextSlide, { opacity: 1, scale: 1, duration: 1.15 }, 0.05);
      } else if (transition === "cross-zoom") {
        this._gsapTimeline = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          onComplete: () => {
            gsap.set([prevSlide, nextSlide], { clearProps: "transform" });
            nextSlide.style.zIndex = "1";
            prevSlide.style.zIndex = "0";
            this._gsapTimeline = null;
          },
        });

        gsap.set(nextSlide, { opacity: 0, scale: 1.08 });
        gsap.set(prevSlide, { opacity: 1, scale: 1 });

        this._gsapTimeline.to(prevSlide, { opacity: 0, scale: 1.08, duration: 1.05 }, 0);
        this._gsapTimeline.to(nextSlide, { opacity: 1, scale: 1, duration: 1.05 }, 0);
      } else if (transition === "wipe") {
        this._gsapTimeline = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: () => {
            gsap.set([prevSlide, nextSlide], { clearProps: "clipPath" });
            nextSlide.style.zIndex = "1";
            prevSlide.style.zIndex = "0";
            this._gsapTimeline = null;
          },
        });

        gsap.set(nextSlide, { opacity: 1, clipPath: "inset(0 100% 0 0)" });
        gsap.set(prevSlide, { opacity: 1 });

        this._gsapTimeline.to(nextSlide, { clipPath: "inset(0 0% 0 0)", duration: 1.05 }, 0);
        this._gsapTimeline.to(prevSlide, { opacity: 0.35, duration: 1.05 }, 0);
      } else if (transition === "reveal") {
        this._gsapTimeline = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: () => {
            gsap.set([prevSlide, nextSlide], { clearProps: "clipPath,transform" });
            nextSlide.style.zIndex = "1";
            prevSlide.style.zIndex = "0";
            this._gsapTimeline = null;
          },
        });

        gsap.set(nextSlide, { opacity: 1, clipPath: "inset(0 0 0 100%)", xPercent: 4 });
        gsap.set(prevSlide, { opacity: 1, xPercent: 0 });

        this._gsapTimeline.to(prevSlide, { xPercent: -4, opacity: 0.45, duration: 1.05 }, 0);
        this._gsapTimeline.to(nextSlide, { clipPath: "inset(0 0 0 0%)", xPercent: 0, duration: 1.05 }, 0);
      } else {
        // Crossfade slides + subtle "ken burns" on the background image.
        gsap.set(nextSlide, { opacity: 0 });
        this._gsapTimeline = gsap.timeline({
          onComplete: () => {
            nextSlide.style.zIndex = "1";
            prevSlide.style.zIndex = "0";
            this._gsapTimeline = null;
          },
        });
        this._gsapTimeline.to(prevSlide, { opacity: 0, duration: 1, ease: "power2.out" }, 0);
        this._gsapTimeline.to(nextSlide, { opacity: 1, duration: 1.2, ease: "power2.out" }, 0.05);
      }

      const nextImg = nextSlide.querySelector("img");
      if (nextImg) {
        gsap.killTweensOf(nextImg);
        gsap.fromTo(nextImg, { scale: 1.12 }, { scale: 1, duration: 1.55, ease: "power2.out" });
      }
    }

    if (animate && !this._prefersReducedMotion) this.#restartAnimations(this._slides[nextIndex]);
  }

  #animateStackSlide(prevSlide, nextSlide, direction = 1) {
    if (!prevSlide || !nextSlide || !this._slidesRoot) return;

    this._stackAnimations?.forEach((animation) => animation.cancel());

    prevSlide.toggleAttribute("hidden", false);
    nextSlide.toggleAttribute("hidden", false);

    const prevHeight = prevSlide.getBoundingClientRect().height;
    const nextHeight = nextSlide.getBoundingClientRect().height;
    this._slidesRoot.style.minHeight = `${Math.max(prevHeight, nextHeight)}px`;

    const positioned = [prevSlide, nextSlide];
    positioned.forEach((slide) => {
      slide.style.position = "absolute";
      slide.style.inset = "0";
      slide.style.width = "100%";
    });

    prevSlide.style.zIndex = "1";
    nextSlide.style.zIndex = "2";

    const prevAnimation = prevSlide.animate(
      [
        { opacity: 1, transform: "translateX(0)" },
        { opacity: 0, transform: `translateX(${direction > 0 ? "-100%" : "100%"})` },
      ],
      {
        duration: 220,
        easing: "cubic-bezier(0.4, 0, 1, 1)",
        fill: "forwards",
      }
    );

    const nextAnimation = nextSlide.animate(
      [
        { opacity: 0, transform: `translateX(${direction > 0 ? "100%" : "-100%"})` },
        { opacity: 1, transform: "translateX(0)" },
      ],
      {
        duration: 260,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
      }
    );

    this._stackAnimations = [prevAnimation, nextAnimation];

    Promise.all(this._stackAnimations.map((animation) => animation.finished.catch(() => null))).then(() => {
      if (this._stackAnimations?.[0] !== prevAnimation) return;

      prevSlide.toggleAttribute("hidden", true);
      nextSlide.toggleAttribute("hidden", false);

      positioned.forEach((slide) => {
        slide.style.position = "";
        slide.style.inset = "";
        slide.style.width = "";
        slide.style.zIndex = "";
      });

      this._slidesRoot.style.minHeight = "";
      this._stackAnimations = null;
    });
  }

  #syncAriaLabels() {
    const total = this._slides.length;
    this._slides.forEach((slide, i) => {
      slide.setAttribute("aria-label", `${i + 1} of ${total}`);
    });
  }

  #restartAnimations(slide) {
    const items = slide.querySelectorAll("[data-animate]");
    if (this._variant === "hero" && this.#hasGsap() && !this._prefersReducedMotion) {
      const gsap = window.gsap;
      gsap.killTweensOf(items);
      items.forEach((el, index) => {
        el.classList.remove("hero-caption-animate");
        el.style.removeProperty("opacity");
        el.style.removeProperty("transform");
        el.style.setProperty("--hero-caption-delay", `${0.12 + index * 0.18}s`);
        void el.offsetWidth;
        el.classList.add("hero-caption-animate");
      });
      return;
    }

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
