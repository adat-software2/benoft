import Image from "next/image";
import logo from "../public/assets/logo.png";

export default function Loading() {
  return (
    <main className="brand-loading-screen" aria-busy="true" aria-live="polite">
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
            <span>Launching unified business cloud</span>
            <strong>BENOFT</strong>
          </div>

          <div className="brand-loader-progress">
            <span />
          </div>
        </div>
        <span className="sr-only">Loading BENOFT</span>
      </div>
    </main>
  );
}
