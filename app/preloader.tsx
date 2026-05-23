"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/assets/logo.png";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    const minimumDuration = 1800;

    const finish = () => {
      const remaining = Math.max(0, minimumDuration - (performance.now() - startedAt));

      window.setTimeout(() => {
        setLeaving(true);
        window.setTimeout(() => setVisible(false), 420);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
      return;
    }

    window.addEventListener("load", finish, { once: true });

    return () => {
      window.removeEventListener("load", finish);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`brand-loading-screen brand-preloader${leaving ? " brand-preloader-hidden" : ""}`}
      aria-busy="true"
      aria-live="polite"
    >
      <div className="brand-bounce-loader" role="status" aria-label="Loading BENOFT">
        <div className="brand-bounce-stage" aria-hidden="true">
          <div className="brand-bounce-ball">
            <Image
              src={logo}
              alt=""
              width={1024}
              height={1024}
              quality={100}
              preload
              sizes="(max-width: 720px) 34vw, 140px"
              className="brand-bounce-logo-image"
            />
          </div>
          <span className="brand-bounce-surface" />
        </div>
        <span className="sr-only">Loading BENOFT</span>
      </div>
    </div>
  );
}
