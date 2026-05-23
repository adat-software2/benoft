import Image from "next/image";
import logo from "../public/assets/logo.png";

export default function Loading() {
  return (
    <main className="brand-loading-screen" aria-busy="true" aria-live="polite">
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
    </main>
  );
}
