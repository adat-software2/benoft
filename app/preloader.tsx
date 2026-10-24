"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import mark from "../public/assets/intro/mark.png";
import letterB from "../public/assets/intro/b.png";
import barTop from "../public/assets/intro/e1.png";
import barMiddle from "../public/assets/intro/e2.png";
import barBottom from "../public/assets/intro/e3.png";
import letterN from "../public/assets/intro/n.png";
import letterO from "../public/assets/intro/o.png";
import letterF from "../public/assets/intro/f.png";
import letterT from "../public/assets/intro/t.png";

const SEEN_KEY = "benoft-intro-seen";

// Pieces cut from the official logo artwork (logo-dark.png, 1481 x 469), placed in percent of that canvas
// so the assembled lockup matches the real logo exactly.
type Piece = { src: StaticImageData; kind: "letter" | "bar"; left: number; top: number; width: number; height: number };

const pieces: Piece[] = [
  { src: letterB, kind: "letter", left: 28.967, top: 20.469, width: 8.71, height: 38.166 },
  { src: barTop, kind: "bar", left: 41.323, top: 20.896, width: 6.617, height: 5.544 },
  { src: barMiddle, kind: "bar", left: 41.323, top: 36.247, width: 6.617, height: 5.97 },
  { src: barBottom, kind: "bar", left: 41.323, top: 52.239, width: 6.617, height: 5.757 },
  { src: letterN, kind: "letter", left: 51.789, top: 20.469, width: 9.791, height: 38.166 },
  { src: letterO, kind: "letter", left: 64.956, top: 20.469, width: 12.086, height: 38.166 },
  { src: letterF, kind: "letter", left: 80.419, top: 20.469, width: 7.09, height: 38.166 },
  { src: letterT, kind: "letter", left: 90.209, top: 20.469, width: 8.373, height: 38.166 },
];

function announceReady() {
  (window as Window & { benoftReady?: boolean }).benoftReady = true;
  window.dispatchEvent(new Event("benoft:ready"));
}

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"play" | "leave">("play");
  const lockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    let seen = false;
    try {
      // People signing in go straight to their app, so the sign-in page skips the intro.
      seen = window.sessionStorage.getItem(SEEN_KEY) === "1" || window.location.pathname.startsWith("/login");
      window.sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      // Storage can be blocked; the intro then simply plays every time.
    }

    // The intro plays once per visit; later reloads go straight to the page.
    if (seen) {
      const frame = window.requestAnimationFrame(() => {
        setVisible(false);
        announceReady();
      });
      return () => window.cancelAnimationFrame(frame);
    }

    root.classList.add("intro-playing");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startedAt = performance.now();
    const minimumDuration = reduceMotion ? 400 : 3000;
    const timers: number[] = [];

    const leave = () => {
      // Fly the lockup onto the header logo so the intro hands over to the page.
      const lockup = lockupRef.current;
      const target = document.querySelector<HTMLElement>(".studio-logo img");
      if (lockup && target && !reduceMotion) {
        const from = lockup.getBoundingClientRect();
        const to = target.getBoundingClientRect();
        if (from.width > 0 && to.width > 0) {
          const scale = to.width / from.width;
          lockup.style.transform = `translate(${to.left - from.left}px, ${to.top - from.top}px) scale(${scale})`;
        }
      }
      setPhase("leave");
      announceReady();
      timers.push(window.setTimeout(() => root.classList.remove("intro-playing"), 750));
      timers.push(window.setTimeout(() => setVisible(false), 1300));
    };

    const finish = () => {
      const remaining = Math.max(0, minimumDuration - (performance.now() - startedAt));
      timers.push(window.setTimeout(leave, remaining));
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      timers.forEach((timer) => window.clearTimeout(timer));
      root.classList.remove("intro-playing");
    };
  }, []);

  if (!visible) {
    return null;
  }

  let letterIndex = 0;
  let barIndex = 0;

  return (
    <div className={`intro intro-${phase}`} aria-busy={phase === "play"} aria-live="polite">
      <div className="intro-panel" aria-hidden="true">
        <span className="intro-glow" />
        <span className="intro-ring intro-ring-one" />
        <span className="intro-ring intro-ring-two" />
        <span className="intro-grid" />
      </div>
      <div className="intro-stage" role="status" aria-label="Loading BENOFT">
        <div className="intro-lockup" ref={lockupRef} aria-hidden="true">
          <div className="intro-mark">
            <Image src={mark} alt="" preload sizes="(max-width: 720px) 24vw, 200px" />
          </div>
          {pieces.map((piece) => {
            const order = piece.kind === "letter" ? letterIndex++ : barIndex++;
            return (
              <span
                className={`intro-piece intro-${piece.kind}`}
                key={piece.src.src}
                style={
                  {
                    left: `${piece.left}%`,
                    top: `${piece.top}%`,
                    width: `${piece.width}%`,
                    height: `${piece.height}%`,
                    "--i": order,
                  } as React.CSSProperties
                }
              >
                <Image src={piece.src} alt="" preload sizes="(max-width: 720px) 10vw, 90px" />
              </span>
            );
          })}
          <p className="intro-motto">
            <span>ONE PLATFORM.</span> <span>INFINITE BUSINESS.</span>
          </p>
        </div>
        <div className="intro-line">
          <span />
        </div>
      </div>
    </div>
  );
}
