"use client";

import { useEffect } from "react";

const READY_EVENT = "benoft:ready";

// Drives every scroll and pointer effect on the page from a single animation frame loop.
// Elements opt in with data attributes:
//   data-speed="0.2"      vertical parallax against the parent section (negative moves faster than scroll)
//   data-speed-x="0.3"    horizontal parallax against the parent section
//   data-depth="20"       follows the pointer inside the hero, in pixels
//   data-fade             fades out as the hero scrolls away
//   data-reveal="up"      animates in once it enters the viewport (up, left, right, scale, clip)
//   data-intro            hero reveal, played once the preloader has gone
//   data-tilt             3D tilt and spotlight that follow the pointer
//   data-magnetic         pulls toward the pointer while hovered
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const intro = Array.from(document.querySelectorAll<HTMLElement>("[data-intro]"));
    const playIntro = () => intro.forEach((el) => el.classList.add("is-visible"));

    if (reduceMotion) {
      root.classList.remove("motion-ready");
      playIntro();
      return;
    }

    root.classList.add("motion-ready");

    const cleanups: Array<() => void> = [];
    const listen = (
      target: Window | HTMLElement,
      type: string,
      handler: (event: Event) => void,
      options?: AddEventListenerOptions,
    ) => {
      target.addEventListener(type, handler, options);
      cleanups.push(() => target.removeEventListener(type, handler, options));
    };

    // Hero intro waits for the preloader so the headline animates in view.
    if ((window as Window & { benoftReady?: boolean }).benoftReady) {
      requestAnimationFrame(playIntro);
    } else {
      listen(window, READY_EVENT, playIntro, { once: true });
      const fallback = window.setTimeout(playIntro, 3200);
      cleanups.push(() => window.clearTimeout(fallback));
    }

    // Reveal on scroll.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    cleanups.push(() => observer.disconnect());

    // Scroll and pointer driven layers.
    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-speed], [data-speed-x], [data-depth]")).map((el) => ({
      el,
      speed: parseFloat(el.dataset.speed ?? "0"),
      speedX: parseFloat(el.dataset.speedX ?? "0"),
      depth: parseFloat(el.dataset.depth ?? "0"),
      anchor: el.parentElement ?? el,
    }));
    const fades = Array.from(document.querySelectorAll<HTMLElement>("[data-fade]"));
    const header = document.querySelector<HTMLElement>(".studio-header");
    const ticker = document.querySelector<HTMLElement>(".studio-ticker");

    let pointerX = 0;
    let pointerY = 0;
    let easedX = 0;
    let easedY = 0;
    let lastScroll = window.scrollY;
    let velocity = 0;
    let frame = 0;

    const render = () => {
      frame = 0;
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - vh;

      velocity += (scrollY - lastScroll - velocity) * 0.2;
      easedX += (pointerX - easedX) * 0.08;
      easedY += (pointerY - easedY) * 0.08;

      root.style.setProperty("--scroll-progress", maxScroll > 0 ? (scrollY / maxScroll).toFixed(4) : "0");

      if (header) {
        header.classList.toggle("is-scrolled", scrollY > 40);
        if (scrollY > vh * 0.6 && scrollY > lastScroll + 2) header.classList.add("is-hidden");
        else if (scrollY < lastScroll - 2 || scrollY <= vh * 0.6) header.classList.remove("is-hidden");
      }

      if (ticker) {
        const skew = Math.max(-8, Math.min(8, velocity * 0.25));
        ticker.style.transform = `skewY(${(-skew * 0.25).toFixed(2)}deg)`;
        ticker.style.setProperty("--ticker-skew", `${skew.toFixed(2)}deg`);
      }

      for (const layer of layers) {
        const rect = layer.anchor.getBoundingClientRect();
        if (rect.bottom < -vh || rect.top > vh * 2) continue;
        const offset = rect.top + rect.height / 2 - vh / 2;
        const x = -offset * layer.speedX + easedX * layer.depth;
        const y = -offset * layer.speed + easedY * layer.depth;
        layer.el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
      }

      for (const el of fades) {
        const progress = Math.min(1, scrollY / (vh * 0.85));
        el.style.opacity = (1 - progress).toFixed(3);
      }

      lastScroll = scrollY;

      const settling = Math.abs(velocity) > 0.05 || Math.abs(pointerX - easedX) > 0.001 || Math.abs(pointerY - easedY) > 0.001;
      if (settling) request();
    };

    const request = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    listen(window, "scroll", request, { passive: true });
    listen(window, "resize", request);

    const hero = document.querySelector<HTMLElement>(".studio-hero");
    if (hero && finePointer) {
      listen(hero, "pointermove", (event) => {
        const { clientX, clientY } = event as PointerEvent;
        pointerX = clientX / window.innerWidth - 0.5;
        pointerY = clientY / window.innerHeight - 0.5;
        request();
      });
      listen(hero, "pointerleave", () => {
        pointerX = 0;
        pointerY = 0;
        request();
      });
    }

    if (finePointer) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
        listen(card, "pointermove", (event) => {
          const { clientX, clientY } = event as PointerEvent;
          const rect = card.getBoundingClientRect();
          const px = (clientX - rect.left) / rect.width;
          const py = (clientY - rect.top) / rect.height;
          card.style.setProperty("--tilt-x", `${((0.5 - py) * 3).toFixed(2)}deg`);
          card.style.setProperty("--tilt-y", `${((px - 0.5) * 4).toFixed(2)}deg`);
          card.style.setProperty("--glow-x", `${(px * 100).toFixed(1)}%`);
          card.style.setProperty("--glow-y", `${(py * 100).toFixed(1)}%`);
        });
        listen(card, "pointerleave", () => {
          card.style.setProperty("--tilt-x", "0deg");
          card.style.setProperty("--tilt-y", "0deg");
        });
      });

      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const strength = parseFloat(el.dataset.magnetic || "0.35");
        listen(el, "pointermove", (event) => {
          const { clientX, clientY } = event as PointerEvent;
          const rect = el.getBoundingClientRect();
          const x = (clientX - rect.left - rect.width / 2) * strength;
          const y = (clientY - rect.top - rect.height / 2) * strength;
          el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
        });
        listen(el, "pointerleave", () => {
          el.style.translate = "0px 0px";
        });
      });
    }

    request();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      cleanups.forEach((cleanup) => cleanup());
      root.classList.remove("motion-ready");
    };
  }, []);

  return (
    <div className="studio-progress" aria-hidden="true">
      <span />
    </div>
  );
}
