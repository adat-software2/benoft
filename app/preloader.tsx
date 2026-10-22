"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/assets/logo.png";

const SEEN_KEY = "benoft-intro-seen";
const LETTERS = "BENOFT".split("");

function announceReady() {
  (window as Window & { benoftReady?: boolean }).benoftReady = true;
  window.dispatchEvent(new Event("benoft:ready"));
}

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem(SEEN_KEY) === "1";
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

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startedAt = performance.now();
    const minimumDuration = reduceMotion ? 300 : 1500;
    const timers: number[] = [];

    const finish = () => {
      const remaining = Math.max(0, minimumDuration - (performance.now() - startedAt));
      timers.push(
        window.setTimeout(() => {
          setLeaving(true);
          announceReady();
          timers.push(window.setTimeout(() => setVisible(false), 1000));
        }, remaining),
      );
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={`intro${leaving ? " intro-leave" : ""}`} aria-busy={!leaving} aria-live="polite">
      <div className="intro-panel" role="status" aria-label="Loading BENOFT">
        <div className="intro-brand" aria-hidden="true">
          <div className="intro-mark">
            <Image src={logo} alt="" width={1024} height={1024} quality={100} preload sizes="96px" />
          </div>
          <div className="intro-word">
            {LETTERS.map((letter, index) => (
              <span key={`${letter}-${index}`} style={{ "--i": index } as React.CSSProperties}>
                {letter}
              </span>
            ))}
          </div>
        </div>
        <p className="intro-tagline" aria-hidden="true">Business software</p>
        <div className="intro-line" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
