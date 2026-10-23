import { Fragment } from "react";
import Image from "next/image";
import attendanceIcon from "../public/assets/attendance-icon.png";
import employeePortalIcon from "../public/assets/employee-portal-icon.png";
import logoDark from "../public/assets/logo-full-dark.png";
import logoWhite from "../public/assets/logo-full-light.png";
import projectBookIcon from "../public/assets/project-book-icon.png";
import Motion from "./motion";

export const dynamic = "force-dynamic";

const demoLink = "mailto:info.benoft@gmail.com?subject=BENOFT%20product%20demo";

const products = [
  {
    id: "project-book",
    number: "01",
    name: "Project Book",
    platform: "Desktop · Windows & macOS",
    icon: projectBookIcon,
    tagline: "The financial story of every project.",
    summary: "Budgets, invoices, bills and expenses in one clear workspace, with profit and VAT always in view.",
    features: [
      { title: "Projects & budgets", text: "Value, progress and profit for every project." },
      { title: "Progress invoicing", text: "Achievement billing with retention built in." },
      { title: "Bills & expenses", text: "Every vendor bill and running cost in place." },
      { title: "Profit & VAT reports", text: "Clear dashboards for income, cost and tax." },
      { title: "PDF & Excel", text: "Print-ready documents and one-click exports." },
      { title: "Roles & backups", text: "Access rights, activity logs and safe restore." },
    ],
  },
  {
    id: "face-attendance",
    number: "02",
    name: "Face Attendance",
    platform: "Android kiosk · Web dashboard",
    icon: attendanceIcon,
    tagline: "Attendance that knows every face.",
    summary: "People check in with a glance. Recognition runs on the device, keeps working offline and reports to a live dashboard.",
    features: [
      { title: "On-device recognition", text: "Fast, accurate matching with no cloud upload." },
      { title: "Works offline", text: "Punches queue securely and sync on reconnect." },
      { title: "Smart corrections", text: "Forgotten check-outs resolved automatically." },
      { title: "Live dashboard", text: "Calendars, daily summaries and project views." },
      { title: "Device control", text: "License, monitor and manage every kiosk." },
      { title: "Private by design", text: "Encrypted photos, records and credentials." },
    ],
  },
  {
    id: "employee-portal",
    number: "03",
    name: "Employee Portal",
    platform: "Android · Employees & managers",
    icon: employeePortalIcon,
    tagline: "Your whole workforce, in one app.",
    summary: "Self-service for every employee and real-time control for managers, connected in one place.",
    features: [
      { title: "Check in & out", text: "Face verified with liveness and location." },
      { title: "Attendance", text: "Personal history and team reports." },
      { title: "My sites", text: "Today's work location, by project." },
      { title: "Site allocation", text: "Assign people to sites in a few taps." },
      { title: "Team", text: "Profiles and face registration for every crew." },
      { title: "Requests", text: "Attendance requests and corrections, approved on the go." },
      { title: "Leave", text: "Apply, approve and track time off." },
      { title: "Payslips & documents", text: "Payslips, letters and IDs in your pocket." },
    ],
  },
];

const pillars = [
  { title: "Offline-first", text: "Keeps working when the network doesn't." },
  { title: "Private by design", text: "Encrypted data. Faces matched on the device." },
  { title: "Live in minutes", text: "Activate with a key and start the same day." },
  { title: "Support close by", text: "A Dubai-based team, from setup to scale." },
];

const tickerItems = ["PROJECT FINANCE", "FACE ATTENDANCE", "EMPLOYEE PORTAL", "WORKS OFFLINE", "ON-DEVICE AI", "LIVE DASHBOARDS"];

function delay(ms: number) {
  return { "--d": ms } as React.CSSProperties;
}

function SplitWords({ text }: { text: string }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span className="split-words" aria-hidden="true">
        {text.split(" ").map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            <span className="split-word">
              <span style={{ "--i": index } as React.CSSProperties}>{word}</span>
            </span>{" "}
          </Fragment>
        ))}
      </span>
    </>
  );
}

export default function Home() {
  return (
    <main className="studio-site">
      <Motion />
      <header className="studio-header">
        <a href="#top" className="studio-logo" aria-label="BENOFT home">
          <Image src={logoWhite} alt="BENOFT. One platform. Infinite business." priority sizes="180px" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#products">Products</a>
          <a href="#why">Why BENOFT</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="studio-header-cta" href={demoLink} data-magnetic="0.25">
          Book a demo
        </a>
      </header>

      <section id="top" className="studio-hero">
        <div className="studio-hero-grid" aria-hidden="true" data-speed="0.12" />
        <div className="studio-hero-orbit studio-hero-orbit-a" aria-hidden="true" data-speed="0.3" data-depth="-18" />
        <div className="studio-hero-orbit studio-hero-orbit-b" aria-hidden="true" data-speed="-0.12" data-depth="24" />
        <div className="studio-wordmark studio-wordmark-back" aria-hidden="true" data-speed="0.45" data-depth="-46">B</div>
        <div className="studio-wordmark studio-wordmark-front" aria-hidden="true" data-speed="-0.18" data-depth="34">O</div>
        <div className="studio-hero-content" data-speed="0.28" data-fade>
          <p className="studio-overline" data-intro="up">ONE PLATFORM. INFINITE BUSINESS.</p>
          <h1>
            <span className="sr-only">Clear work. Real control.</span>
            <span className="studio-line" aria-hidden="true">
              <span className="studio-line-inner" data-intro="line" style={delay(120)}>Clear work.</span>
            </span>
            <span className="studio-line studio-hero-accent" aria-hidden="true">
              <span className="studio-line-inner" data-intro="line" style={delay(260)}>Real control.</span>
            </span>
          </h1>
          <div className="studio-hero-bottom" data-intro="up" style={delay(520)}>
            <p>Software for project finance, face attendance and workforce management. Simple to use, built for every day.</p>
            <a href="#products" className="studio-round-link" aria-label="Explore BENOFT products" data-magnetic="0.3">
              <span>Explore</span>
              <b>↓</b>
            </a>
          </div>
        </div>
        <div className="studio-product-satellites" data-speed="-0.22" data-depth="-28">
          {products.map((product, index) => (
            <a
              className="studio-satellite"
              href={`#${product.id}`}
              key={product.name}
              data-intro="right"
              style={delay(700 + index * 140)}
            >
              <Image src={product.icon} alt="" width={90} height={90} />
              <span>{product.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="studio-ticker" aria-label="BENOFT capabilities">
        <div>
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <Fragment key={`${item}-${index}`}>
              <span>{item}</span>
              <i>+</i>
            </Fragment>
          ))}
        </div>
      </section>

      <section id="approach" className="studio-intro">
        <p className="studio-section-label" data-reveal="up">( WHAT WE BUILD )</p>
        <div className="studio-intro-copy">
          <h2 data-reveal="words">
            <SplitWords text="Software that earns its place in the working day." />
          </h2>
          <p data-reveal="up" style={delay(250)}>
            Three focused products that keep money, time and people in order. Fast, private and ready to work offline.
          </p>
        </div>
        <div className="studio-stat-line">
          {["03 PRODUCTS", "DESKTOP · ANDROID · WEB", "OFFLINE-READY"].map((stat, index) => (
            <span key={stat} data-reveal="up" style={delay(index * 120)}>{stat}</span>
          ))}
        </div>
      </section>

      <section id="products" className="studio-products">
        <div className="studio-products-head">
          <p className="studio-section-label" data-reveal="up">( PRODUCTS )</p>
          <h2 data-reveal="words">
            <SplitWords text="Built around the work that matters." />
          </h2>
        </div>
        <div className="studio-product-list">
          {products.map((product, index) => (
            <article
              id={product.id}
              className={`studio-product studio-product-${index + 1}`}
              key={product.name}
              data-reveal={index % 2 === 0 ? "left" : "right"}
              data-tilt
            >
              <div className="studio-product-number">{product.number}</div>
              <div className="studio-product-icon-wrap">
                <div className="studio-product-icon-ring" aria-hidden="true" />
                <Image src={product.icon} alt={`${product.name} icon`} width={220} height={220} />
              </div>
              <div className="studio-product-copy">
                <p>{product.platform}</p>
                <h3>{product.name}</h3>
                <strong>{product.tagline}</strong>
                <span>{product.summary}</span>
                <a className="studio-product-link" href={demoLink}>
                  Request a demo <b aria-hidden="true">→</b>
                </a>
              </div>
              <ul className={`studio-product-features studio-product-features-${product.features.length}`}>
                {product.features.map((feature) => (
                  <li key={feature.title}>
                    <h4>{feature.title}</h4>
                    <p>{feature.text}</p>
                  </li>
                ))}
              </ul>
              <div className="studio-product-letter" aria-hidden="true" data-speed="0.18">{product.name[0]}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="why" className="studio-why">
        <div className="studio-why-head">
          <p className="studio-section-label" data-reveal="up">( WHY BENOFT )</p>
          <h2 data-reveal="words">
            <SplitWords text="Made for real days at work." />
          </h2>
        </div>
        <div className="studio-why-grid">
          {pillars.map((pillar, index) => (
            <div className="studio-why-item" key={pillar.title} data-reveal="up" style={delay(index * 110)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="studio-kinetic-section">
        <div className="studio-kinetic-word" aria-hidden="true" data-speed-x="0.55" data-speed="0.1">BENOFT</div>
        <div className="studio-kinetic-content">
          <p className="studio-section-label" data-reveal="up">( DAILY CONTROL )</p>
          <h2 data-reveal="lines">
            <span className="sr-only">Track it. Verify it. Report it.</span>
            {["Track it.", "Verify it.", "Report it."].map((line, index) => (
              <span className="studio-line" aria-hidden="true" key={line}>
                <span className="studio-line-inner" style={delay(index * 140)}>{line}</span>
              </span>
            ))}
          </h2>
          <div className="studio-kinetic-cta" data-reveal="up" style={delay(300)}>
            <p>Project Book shows the money. Face Attendance proves who was there. Employee Portal keeps every team connected.</p>
            <a className="studio-button" href={demoLink} data-magnetic="0.2">
              Book a demo <b aria-hidden="true">→</b>
            </a>
          </div>
        </div>
      </section>

      <footer id="contact" className="studio-footer">
        <div className="studio-footer-top" data-reveal="up">
          <Image src={logoDark} alt="BENOFT. One platform. Infinite business." sizes="(max-width: 760px) 60vw, 350px" />
          <p>One platform. Infinite business.</p>
        </div>
        <div className="studio-footer-grid">
          <div data-reveal="up">
            <span>OUR OFFICE</span>
            <p>M2, Hamad Sultan Saif Building,<br />Hor Al Anz East, Dubai, United Arab Emirates</p>
          </div>
          <div data-reveal="up" style={delay(120)}>
            <span>CONTACT</span>
            <p><a href="mailto:info.benoft@gmail.com">info.benoft@gmail.com</a><br /><a href="tel:+97142297609">+971 (04) 229 7609</a></p>
          </div>
          <a className="studio-whatsapp" href="#" aria-label="WhatsApp link placeholder" title="WhatsApp" data-magnetic="0.45">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.05 4.94A9.9 9.9 0 0 0 12.03 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.45 1.33 4.94L2 22l5.28-1.38a9.93 9.93 0 0 0 4.74 1.2h.01c5.47 0 9.93-4.45 9.93-9.93 0-2.65-1.03-5.14-2.91-6.95ZM12.03 20.14a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.13.82.84-3.05-.2-.32a8.25 8.25 0 1 1 6.99 3.88Zm4.52-6.17c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.57.13-.16.25-.64.81-.78.98-.14.17-.28.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.02-.38.1-.5.11-.11.25-.28.37-.42.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.57-1.38-.78-1.89-.2-.49-.41-.42-.57-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.59c.12.17 1.77 2.7 4.28 3.79.6.26 1.07.42 1.44.54.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.17.21-.58.21-1.08.15-1.18-.06-.11-.22-.17-.47-.29Z" />
            </svg>
          </a>
        </div>
        <div className="studio-footer-bottom">© 2026 BENOFT. ALL RIGHTS RESERVED.</div>
      </footer>
    </main>
  );
}
