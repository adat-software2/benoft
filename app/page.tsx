import Image from "next/image";
import attendanceIcon from "../public/assets/face-attendance-icon.png";
import logoDark from "../public/assets/logo-dark.png";
import logoWhite from "../public/assets/logo-white.png";
import projectBookIcon from "../public/assets/project-book-icon.png";

export const dynamic = "force-dynamic";

const platformSignals = [
  {
    name: "Offline-first control",
    text: "Desktop and mobile workflows keep moving even when connectivity is limited.",
  },
  {
    name: "Finance clarity",
    text: "Projects, invoices, bills, payments, and profitability stay visible in one workspace.",
  },
  {
    name: "Face attendance",
    text: "Fast employee check-in and check-out with local recognition and secure device pairing.",
  },
  {
    name: "Odoo-ready sync",
    text: "Attendance punches queue locally and sync back to the business system when online.",
  },
  {
    name: "Secure local data",
    text: "Sensitive records, photos, and credentials are handled with local storage protections.",
  },
  {
    name: "Useful reports",
    text: "Management gets practical summaries, exports, and daily operating visibility.",
  },
];

const businessHighlights = [
  "Project Finance",
  "Face Attendance",
  "Offline Ready",
  "Secure Sync",
  "Clear Reports",
];

const productMetrics = [
  ["Desktop", "Project finance"],
  ["Android", "Face attendance"],
  ["Offline", "Queue and backup"],
];

const projectBookFeatures = [
  "Project budgets, progress, and profitability",
  "Invoices, bills, expenses, and payments",
  "Client and vendor records",
  "Dashboards, exports, and printable documents",
  "Local SQLite storage with backup and restore",
];

const attendanceFeatures = [
  "Face-based check-in and check-out",
  "Offline punch queue with automatic sync",
  "Employee roster and registration status",
  "Attendance reports with filtered exports",
  "Encrypted device data and licensed activation",
];

const productCards = [
  {
    code: "01",
    name: "Project Book",
    label: "Desktop project finance",
    icon: projectBookIcon,
    text: "An offline desktop workspace for project income, expenses, billing, payments, balances, and profit visibility.",
    features: projectBookFeatures,
  },
  {
    code: "02",
    name: "BENOFT Face Attendance",
    label: "Android attendance kiosk",
    icon: attendanceIcon,
    text: "A secure Android attendance app for face recognition check-in/out, offline punch capture, and Odoo sync.",
    features: attendanceFeatures,
  },
];

const dashboardRows = [
  ["Project margin", "Tracked", "91%"],
  ["Payment status", "Visible", "76%"],
  ["Face match", "On device", "84%"],
  ["Offline sync", "Queued", "93%"],
];

export default function Home() {
  const scrollingPlatformSignals = Array.from({ length: 16 }, () => platformSignals.map((signal) => signal.name)).flat();

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--brand-border)] bg-white/88 text-[var(--foreground)] shadow-[0_10px_40px_rgba(6,42,191,0.06)] backdrop-blur-2xl">
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
          <a
            href="#"
            className="flex min-w-0 flex-col items-start justify-center gap-1"
            aria-label="BENOFT home"
          >
            <Image
              src={logoWhite}
              alt="BENOFT - One Platform, Infinite Business"
              width={1294}
              height={378}
              quality={100}
              priority
              className="h-12 w-auto max-w-[56vw] object-contain drop-shadow-[0_10px_24px_rgba(6,42,191,0.16)] sm:h-16 sm:max-w-none lg:h-[4.5rem]"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-[var(--brand-text)] lg:flex">
            <a href="#platform" className="nav-link">
              Platform
            </a>
            <a href="#products" className="nav-link">
              Products
            </a>
            <a href="#attendance" className="nav-link">
              Attendance
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="group flex h-11 flex-none items-center justify-center rounded-md bg-[var(--brand-blue)] px-4 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(18,148,255,0.32)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-cyan)] sm:px-5"
          >
            Book a demo
            <span className="ml-2 transition group-hover:translate-x-1">+</span>
          </a>
        </nav>
      </header>

      <section className="hero-parallax relative min-h-screen pt-24 text-[var(--foreground)]">
        <div className="hero-grid absolute inset-0 opacity-75" />
        <div className="hero-sheen" />
        <div className="data-beam data-beam-one" />
        <div className="data-beam data-beam-two" />
        <div className="parallax-depth parallax-depth-one" aria-hidden="true" />
        <div className="parallax-depth parallax-depth-two" aria-hidden="true" />
        <div className="parallax-depth parallax-depth-three" aria-hidden="true" />

        <div className="hero-parallax-content relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:min-h-[calc(100vh-96px)] lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:py-24">
          <div className="hero-copy reveal-up">
            <p className="hero-kicker">
              One Platform. Infinite Business.
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              Business control systems with a premium BENOFT identity.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--brand-text)]">
              Project Book controls project money from desktop. Face Attendance
              captures workforce movement from Android. Both are designed for
              clear records, offline resilience, and confident daily operation.
            </p>
            <div className="hero-proof-strip">
              {productMetrics.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="flex h-12 items-center justify-center rounded-md bg-[var(--brand-navy)] px-6 text-base font-semibold text-white shadow-[0_18px_45px_rgba(6,42,191,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-blue)]"
              >
                View products
              </a>
              <a
                href="#platform"
                className="flex h-12 items-center justify-center rounded-md border border-[var(--brand-border)] bg-white/70 px-6 text-base font-semibold text-[var(--brand-navy)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                View platform
              </a>
            </div>
          </div>

          <div className="hero-dashboard-wrap relative reveal-up delay-150">
            <div className="tilt-shell">
              <div className="glass-dashboard">
                <div className="dashboard-network" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={logoWhite}
                      alt=""
                      width={1294}
                      height={378}
                      quality={100}
                      className="h-16 w-auto object-contain drop-shadow-[0_10px_22px_rgba(6,42,191,0.14)]"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        BENOFT Command Cloud
                      </p>
                      <p className="text-xs text-[var(--brand-text)]">Live business layer</p>
                    </div>
                  </div>
                  <span className="pulse-badge">Product suite</span>
                </div>

                <div className="product-orbit-icons" aria-hidden="true">
                  {productCards.map((product) => (
                    <span key={product.name}>
                      <Image
                        src={product.icon}
                        alt=""
                        width={60}
                        height={60}
                        className="h-10 w-10 object-contain"
                      />
                    </span>
                  ))}
                </div>

                <div className="hero-product-showcase">
                  {productCards.map((product) => (
                    <div className="hero-product-tile" key={product.name}>
                      <Image
                        src={product.icon}
                        alt=""
                        width={92}
                        height={92}
                        className="hero-product-icon"
                      />
                      <div>
                        <strong>{product.name}</strong>
                        <span>{product.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["2", "products"],
                    ["24/7", "offline use"],
                    ["1", "clear view"],
                  ].map(([value, label]) => (
                    <div key={label} className="metric-tile">
                      <p className="text-3xl font-semibold">{value}</p>
                        <p className="mt-2 text-xs uppercase text-[var(--brand-text)]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-md border border-[var(--brand-border)]">
                  {dashboardRows.map(([name, status, value], index) => (
                    <div
                      key={name}
                      className="dashboard-row"
                      style={{ animationDelay: `${index * 140}ms` }}
                    >
                      <div>
                        <p className="font-medium text-[var(--foreground)]">{name}</p>
                        <p className="text-xs text-[var(--brand-text)]">{status}</p>
                      </div>
                      <div className="w-28">
                        <div className="mb-2 text-right text-xs text-[var(--brand-text)]">
                          {value}
                        </div>
                        <div className="h-1.5 rounded-full bg-[var(--brand-soft)]">
                          <div className="h-1.5 rounded-full bg-[var(--brand-blue)]" style={{ width: value }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-one">
              <p className="text-xs font-semibold uppercase text-[#8fd9ff]">
                Project Book
              </p>
              <p className="mt-2 text-2xl font-semibold">Finance clarity</p>
            </div>
            <div className="floating-card floating-card-two">
              <p className="text-xs font-semibold uppercase text-[#c79bff]">
                Face Attendance
              </p>
              <p className="mt-2 text-2xl font-semibold">Secure capture</p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlight-band bg-white px-5 py-8 sm:px-8">
        <div className="business-highlight-grid mx-auto max-w-7xl">
          {businessHighlights.map((item) => (
            <div className="business-highlight" key={item}>
              <span aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="platform" className="parallax-section platform-section relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="section-depth section-depth-left" aria-hidden="true" />
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="sticky-copy">
            <p className="eyebrow">The platform</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Two focused products, built around real daily work.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--brand-text)]">
              Project teams get financial control. Site and office teams get
              fast, secure attendance capture. Both products stay practical,
              focused, and ready for real daily work.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {platformSignals.map((signal, index) => (
              <article
                key={signal.name}
                className="feature-card reveal-card"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="feature-index">0{index + 1}</span>
                <h3>{signal.name}</h3>
                <p>{signal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-border)] bg-white py-5">
        <div className="marquee">
          <div className="marquee-track">
            {scrollingPlatformSignals.map((signal, index) => (
              <span key={`${signal}-${index}`}>{signal}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="parallax-section products-section relative bg-white py-24 text-[var(--foreground)]">
        <div className="section-sheen" />
        <div className="section-depth section-depth-right" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="project-book-panel product-hero-panel">
            <div className="product-panel-icon" aria-hidden="true">
              <Image
                src={projectBookIcon}
                alt=""
                width={120}
                height={120}
                className="h-24 w-24 object-contain"
              />
            </div>
            <div>
              <p className="eyebrow">Featured product</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Project Book
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--brand-text)]">
                Manage project income, expenses, invoices, bills, payments,
                balances, profitability, backups, and access control from one
                focused desktop application.
              </p>
            </div>
            <div className="project-book-side">
              <p>
                A practical project finance workspace for teams that need clear
                records, fast reporting, and dependable local control.
              </p>
              <div className="project-book-feature-grid">
                {projectBookFeatures.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Available products</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Focused software with useful details, strong records, and clean daily workflows.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[var(--brand-text)]">
              Built around daily operational work: record, verify, sync,
              report, and keep the business view clear.
            </p>
          </div>

          <div className="product-card-grid">
            {productCards.map((product) => (
              <article key={product.name} className="suite-card product-card">
                <div className="product-card-glow" aria-hidden="true">
                  <Image
                    src={product.icon}
                    alt=""
                    width={180}
                    height={180}
                    className="h-36 w-36 object-contain"
                  />
                </div>
                <div className="product-card-header">
                  <Image
                    src={product.icon}
                    alt=""
                    width={84}
                    height={84}
                    className="product-card-icon"
                  />
                  <div>
                    <span>{product.code}</span>
                    <h3>{product.name}</h3>
                    <p className="product-card-label">{product.label}</p>
                  </div>
                </div>
                <p>{product.text}</p>
                <div className="product-feature-list">
                  {product.features.map((feature) => (
                    <small key={feature}>{feature}</small>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="attendance" className="parallax-section attendance-section relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="section-depth section-depth-left" aria-hidden="true" />
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Face Attendance</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Secure attendance capture for site teams and office teams.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--brand-text)]">
              The Android app scans employees, records check-in and check-out,
              works offline, and syncs attendance when connection returns.
            </p>
          </div>
          <div className="attendance-showcase">
            <div className="attendance-phone">
              <Image
                src={attendanceIcon}
                alt="BENOFT Face Attendance"
                width={180}
                height={180}
                className="attendance-phone-icon"
              />
              <span>Scan Face</span>
              <strong>Check In / Out</strong>
            </div>
            <div className="industry-grid">
              {attendanceFeatures.map((feature) => (
                <div key={feature} className="industry-pill">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="impact-section bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="impact-panel">
            <div className="impact-product-icons" aria-hidden="true">
              <Image src={projectBookIcon} alt="" width={94} height={94} />
              <Image src={attendanceIcon} alt="" width={94} height={94} />
            </div>
            <div>
              <p className="eyebrow text-[#8fd9ff]">Built for control</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Keep project money and attendance records clear.
              </h2>
            </div>
            <div className="impact-stat">
              <p>
                Project Book gives financial visibility. Face Attendance gives
                reliable workforce capture. Together they cover two daily
                operational needs without unnecessary complexity.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Track", "Verify", "Report"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="footer-about">
            <Image
              src={logoDark}
              alt="BENOFT - One Platform, Infinite Business"
              width={1594}
              height={478}
              quality={100}
              className="h-28 w-auto max-w-full object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.24)] sm:h-32 md:h-36"
            />
            <p className="footer-summary">
              BENOFT delivers intelligent business software, cloud platforms,
              and dedicated technology support that help growing companies run
              with clarity, control, and confidence.
            </p>
          </div>

          <div className="footer-side">
            <div className="footer-contact">
              <h2>Contact Info</h2>
              <p>
                <strong>Our Office:</strong> M2, Hamad Sultan Saif Building,
                Hor Al Anz East, Dubai, United Arab Emirates
              </p>
              <p>
                <strong>Our Email:</strong>{" "}
                <a href="mailto:info.benoft@gmail.com">info.benoft@gmail.com</a>
              </p>
              <p>
                <strong>Our Phone:</strong>{" "}
                <a href="tel:+97142297609">+971 (04) 229 7609</a>
              </p>
              <div className="social-links" aria-label="Social links">
                <a href="#" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.1" />
                  </svg>
                </a>
                <a href="#" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 8.6V7.2c0-.7.5-1.2 1.2-1.2H17V3h-2.7C11.8 3 10 4.8 10 7.3v1.3H7.8V12H10v9h4v-9h2.7l.5-3.4H14Z" />
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5.4 8.8h3.4V20H5.4V8.8Zm1.7-5.2a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM11 8.8h3.2v1.5h.1c.5-.9 1.6-1.8 3.3-1.8 3.5 0 4.1 2.3 4.1 5.2V20h-3.4v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H11V8.8Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026, Benoft. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
