import Image from "next/image";
import logoDark from "../public/assets/logo-dark.png";
import logoWhite from "../public/assets/logo-white.png";

const suites = [
  {
    code: "01",
    name: "Enterprise ERP",
    text: "Finance, procurement, inventory, projects, billing, and operations connected through one governed system.",
  },
  {
    code: "02",
    name: "Customer Cloud",
    text: "CRM, service, marketing, sales pipelines, and customer success with a complete account timeline.",
  },
  {
    code: "03",
    name: "Workforce Suite",
    text: "Employee self-service, HR workflows, attendance, payroll readiness, approvals, and performance cycles.",
  },
  {
    code: "04",
    name: "Analytics Fabric",
    text: "Executive dashboards, forecasting, operational intelligence, and alerts powered by trusted data.",
  },
];

const platformSignals = [
  "Unified data model",
  "Workflow automation",
  "Role-based security",
  "Audit-ready controls",
  "Cloud deployment",
  "Integration layer",
];

const industries = [
  "Trading and Distribution",
  "Manufacturing",
  "Professional Services",
  "Retail Groups",
  "Real Estate",
  "Field Operations",
];

const dashboardRows = [
  ["Finance close", "On track", "91%"],
  ["Purchase approvals", "Accelerated", "76%"],
  ["Customer response", "Improving", "84%"],
  ["Stock planning", "Optimized", "93%"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--brand-border)] bg-white/88 text-[var(--foreground)] shadow-[0_10px_40px_rgba(6,42,191,0.06)] backdrop-blur-2xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#"
            className="flex items-center"
            aria-label="BENOFT home"
          >
            <Image
              src={logoWhite}
              alt="BENOFT - Better Business, One Platform"
              width={1294}
              height={378}
              quality={100}
              priority
              className="h-11 w-auto object-contain"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-[var(--brand-text)] lg:flex">
            <a href="#platform" className="nav-link">
              Platform
            </a>
            <a href="#products" className="nav-link">
              Products
            </a>
            <a href="#industries" className="nav-link">
              Industries
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="group flex h-11 items-center justify-center rounded-md bg-[var(--brand-blue)] px-5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(18,148,255,0.32)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-cyan)]"
          >
            Book a demo
            <span className="ml-2 transition group-hover:translate-x-1">+</span>
          </a>
        </nav>
      </header>

      <section className="relative min-h-screen bg-[linear-gradient(135deg,#ffffff_0%,#f5f7fb_48%,#eef4ff_100%)] pt-20 text-[var(--foreground)]">
        <div className="hero-grid absolute inset-0 opacity-75" />
        <div className="hero-sheen" />
        <div className="data-beam data-beam-one" />
        <div className="data-beam data-beam-two" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:py-24">
          <div className="reveal-up">
            <p className="mb-6 inline-flex rounded-md border border-[var(--brand-border)] bg-white/72 px-4 py-2 text-sm font-semibold text-[var(--brand-navy)] shadow-sm backdrop-blur">
              Enterprise software for companies that need control and speed
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              Build the digital operating system for your business.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--brand-text)]">
              BENOFT designs connected ERP, CRM, HR, analytics, and automation
              platforms for ambitious organizations that want every department
              working from one intelligent source of truth.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="flex h-12 items-center justify-center rounded-md bg-[var(--brand-navy)] px-6 text-base font-semibold text-white shadow-[0_18px_45px_rgba(6,42,191,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--brand-blue)]"
              >
                Explore products
              </a>
              <a
                href="#platform"
                className="flex h-12 items-center justify-center rounded-md border border-[var(--brand-border)] bg-white/70 px-6 text-base font-semibold text-[var(--brand-navy)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                View platform
              </a>
            </div>
          </div>

          <div className="relative reveal-up delay-150">
            <div className="tilt-shell">
              <div className="glass-dashboard">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={logoWhite}
                      alt=""
                      width={1294}
                      height={378}
                      quality={100}
                      className="h-14 w-auto object-contain"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        BENOFT Command Cloud
                      </p>
                      <p className="text-xs text-[var(--brand-text)]">Live business layer</p>
                    </div>
                  </div>
                  <span className="pulse-badge">Operational</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["360", "visibility"],
                    ["18", "departments"],
                    ["94%", "data health"],
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
                Automation saved
              </p>
              <p className="mt-2 text-2xl font-semibold">42 hours weekly</p>
            </div>
            <div className="floating-card floating-card-two">
              <p className="text-xs font-semibold uppercase text-[#c79bff]">
                Approval cycle
              </p>
              <p className="mt-2 text-2xl font-semibold">3.8x faster</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--brand-border)] bg-white py-5">
        <div className="marquee">
          <div className="marquee-track">
            {[...platformSignals, ...platformSignals].map((signal, index) => (
              <span key={`${signal}-${index}`}>{signal}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="sticky-copy">
            <p className="eyebrow">The platform</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              One foundation for the systems your business depends on.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--brand-text)]">
              Replace isolated tools with an integrated platform that brings
              process, data, security, and intelligence into a single business
              backbone.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {platformSignals.map((signal, index) => (
              <article
                key={signal}
                className="feature-card reveal-card"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="feature-index">0{index + 1}</span>
                <h3>{signal}</h3>
                <p>
                  Designed with enterprise structure, clean ownership, and
                  practical workflows that teams can adopt without friction.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="relative bg-white py-24 text-[var(--foreground)]">
        <div className="section-sheen" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Product suites</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Enterprise applications with the polish of a global software
                company and the flexibility of a partner.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[var(--brand-text)]">
              Start with the function you need most, then expand into a unified
              platform as your operations mature.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {suites.map((suite) => (
              <article key={suite.name} className="suite-card">
                <span>{suite.code}</span>
                <h3>{suite.name}</h3>
                <p>{suite.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Industry execution</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Built for teams where operations, finance, and customers move
              every day.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[var(--brand-text)]">
              BENOFT adapts to complex approval paths, multi-location teams,
              document-heavy processes, and fast-changing management reporting.
            </p>
          </div>
          <div className="industry-grid">
            {industries.map((industry) => (
              <div key={industry} className="industry-pill">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="impact-panel">
            <div>
              <p className="eyebrow text-[#8fd9ff]">Leadership clarity</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                See the company as one connected system.
              </h2>
            </div>
            <div className="impact-stat">
              <p>From scattered processes to measurable execution across every department.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Plan", "Operate", "Measure"].map((item) => (
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
              alt="BENOFT - Better Business, One Platform"
              width={1594}
              height={478}
              quality={100}
              className="h-20 w-auto object-contain sm:h-24"
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
                <a href="mailto:info@adat-tech.com">info@adat-tech.com</a>
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
          &copy; ADAT TECH INTERNATIONAL LLC FZ
        </div>
      </footer>
    </main>
  );
}
