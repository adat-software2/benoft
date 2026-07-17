"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/assets/logo.png";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    const minimumDuration = 2300;

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
      <div className="brand-orbit-loader" role="status" aria-label="Loading BENOFT">
        <div className="brand-orbit-stage" aria-hidden="true">
          <span className="brand-orbit-ring brand-orbit-ring-one" />
          <span className="brand-orbit-ring brand-orbit-ring-two" />
          <span className="brand-orbit-ring brand-orbit-ring-three" />
          <span className="brand-scan-line" />

          <div className="brand-logo-vault">
            <Image
              src={logo}
              alt=""
              width={1024}
              height={1024}
              quality={100}
              preload
              sizes="(max-width: 720px) 36vw, 148px"
              className="brand-vault-logo-image"
            />
          </div>

          <div className="brand-loader-copy">
            <strong>BENOFT</strong>
          </div>

          <div className="brand-loader-progress">
            <span />
          </div>
        </div>
        <span className="sr-only">Loading BENOFT</span>
      </div>
    </div>
  );
}
