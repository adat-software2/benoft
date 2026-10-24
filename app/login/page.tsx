import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import logoWhite from "../../public/assets/logo-full-light.png";
import DemoDialog from "../demo-dialog";
import { apps } from "../lib/apps";

export const metadata: Metadata = {
  title: "Sign in | BENOFT",
  description: "Sign in to your BENOFT products: Face Attendance, Employee Portal and Project Book.",
};

export default function Login() {
  return (
    <main className="studio-site hub-page">
      <DemoDialog />
      <header className="studio-header">
        <Link href="/" className="studio-logo" aria-label="BENOFT home">
          <Image src={logoWhite} alt="BENOFT. One platform. Infinite business." priority sizes="180px" />
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#products">Products</Link>
          <Link href="/#why">Why BENOFT</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <a className="studio-header-cta" href="#help" data-demo="">
          Book a demo
        </a>
      </header>

      <section className="hub">
        <div className="hub-grid-bg" aria-hidden="true" />
        <div className="hub-head">
          <p className="studio-section-label">( SIGN IN )</p>
          <h1>Sign in to your BENOFT app.</h1>
          <p>Each product has its own secure sign-in. Choose yours to continue.</p>
        </div>

        <ul className="hub-apps">
          {apps.map((app) => (
            <li key={app.id} className={app.url ? "hub-app is-live" : "hub-app"}>
              <Image src={app.icon} alt="" width={64} height={64} />
              <div className="hub-app-copy">
                <span>{app.platform}</span>
                <h2>{app.name}</h2>
                <p>{app.description}</p>
              </div>
              {app.url ? (
                <div className="hub-app-action">
                  <a className="studio-button" href={app.url}>
                    Sign in <b aria-hidden="true">→</b>
                  </a>
                  {app.signInWith && <small>{app.signInWith}</small>}
                </div>
              ) : (
                <p className="hub-app-elsewhere">{app.elsewhere}</p>
              )}
            </li>
          ))}
        </ul>

        <div id="help" className="hub-help">
          <p>
            New to BENOFT? <a href="#help" data-demo="">Book a demo</a> and we will set up your account.
          </p>
          <p>
            Lost your company key or password? Ask your administrator or write to{" "}
            <a href="mailto:info.benoft@gmail.com">info.benoft@gmail.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
