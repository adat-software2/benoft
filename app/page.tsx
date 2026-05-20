import Image from "next/image";

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
    <main className="min-h-screen overflow-hidden bg-[#f7f9ff] text-[#071044]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d8e4ff] bg-white/88 text-[#071044] shadow-[0_10px_40px_rgba(0,16,112,0.06)] backdrop-blur-2xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center" aria-label="BENOFT home">
            <Image
              src="/assets/logo-white.png"
              alt="BENOFT - Better Business, One Platform"
              width={1294}
              height={378}
              quality={100}
              priority
              className="h-14 w-auto object-contain"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-[#445188] lg:flex">
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
            className="group flex h-11 items-center justify-center rounded-md bg-[#0080ff] px-5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(0,128,255,0.32)] transition hover:-translate-y-0.5 hover:bg-[#00a0ff]"
          >
            Book a demo
            <span className="ml-2 transition group-hover:translate-x-1">+</span>
          </a>
        </nav>
      </header>

      <section className="relative min-h-screen bg-[linear-gradient(135deg,#ffffff_0%,#f2f7ff_46%,#eef2ff_100%)] pt-20 text-[#071044]">
        <div className="hero-grid absolute inset-0 opacity-75" />
        <div className="hero-sheen" />
        <div className="data-beam data-beam-one" />
        <div className="data-beam data-beam-two" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:py-24">
          <div className="reveal-up">
            <p className="mb-6 inline-flex rounded-md border border-[#c8dcff] bg-white/72 px-4 py-2 text-sm font-semibold text-[#0068d6] shadow-sm backdrop-blur">
              Enterprise software for companies that need control and speed
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] text-[#071044] sm:text-6xl lg:text-7xl">
              Build the digital operating system for your business.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#445188]">
              BENOFT designs connected ERP, CRM, HR, analytics, and automation
              platforms for ambitious organizations that want every department
              working from one intelligent source of truth.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="flex h-12 items-center justify-center rounded-md bg-[#001070] px-6 text-base font-semibold text-white shadow-[0_18px_45px_rgba(0,16,112,0.22)] transition hover:-translate-y-0.5 hover:bg-[#0080ff]"
              >
                Explore products
              </a>
              <a
                href="#platform"
                className="flex h-12 items-center justify-center rounded-md border border-[#b8cdf9] bg-white/70 px-6 text-base font-semibold text-[#001070] transition hover:-translate-y-0.5 hover:bg-white"
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
                      src="/assets/logo-white.png"
                      alt=""
                      width={1294}
                      height={378}
                      quality={100}
                      className="h-12 w-auto object-contain"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#071044]">
                        BENOFT Command Cloud
                      </p>
                      <p className="text-xs text-[#6673a6]">Live business layer</p>
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
                        <p className="mt-2 text-xs uppercase text-[#6673a6]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 overflow-hidden rounded-md border border-[#d8e4ff]">
                  {dashboardRows.map(([name, status, value], index) => (
                    <div
                      key={name}
                      className="dashboard-row"
                      style={{ animationDelay: `${index * 140}ms` }}
                    >
                      <div>
                        <p className="font-medium text-[#071044]">{name}</p>
                        <p className="text-xs text-[#6673a6]">{status}</p>
                      </div>
                      <div className="w-28">
                        <div className="mb-2 text-right text-xs text-[#6673a6]">
                          {value}
                        </div>
                        <div className="h-1.5 rounded-full bg-[#dce8ff]">
                          <div className="h-1.5 rounded-full bg-[#0080ff]" style={{ width: value }} />
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

      <section className="border-y border-[#d8e4ff] bg-white py-5">
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
            <p className="mt-6 text-lg leading-8 text-[#445188]">
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

      <section id="products" className="relative bg-white py-24 text-[#071044]">
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
            <p className="max-w-md text-base leading-7 text-[#445188]">
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
            <p className="mt-6 text-lg leading-8 text-[#445188]">
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

      <section id="contact" className="relative bg-[linear-gradient(135deg,#ffffff_0%,#eef6ff_52%,#f7f9ff_100%)] px-5 py-24 text-[#071044] sm:px-8">
        <div className="section-sheen" />
        <div className="mx-auto max-w-5xl text-center">
          <Image
            src="/assets/logo-white.png"
            alt="BENOFT - Better Business, One Platform"
            width={1294}
            height={378}
            quality={100}
            className="mx-auto mb-8 h-24 w-auto object-contain"
          />
          <h2 className="text-4xl font-semibold leading-tight sm:text-6xl">
            Ready to shape your next business platform?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#445188]">
            Build a roadmap for ERP, CRM, HR, analytics, and automation with a
            team focused on practical enterprise execution.
          </p>
          <a
            href="mailto:info@adat-tech.com"
            className="mt-9 inline-flex h-12 items-center justify-center rounded-md bg-[#0080ff] px-7 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#00a0ff]"
          >
            Contact BENOFT
          </a>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 text-left md:grid-cols-3">
            <div className="contact-card">
              <p className="text-xs font-semibold uppercase text-[#0080ff]">
                Our Office
              </p>
              <p className="mt-3 text-sm leading-6 text-[#445188]">
                M2, Hamad Sultan Saif Building, Hor Al Anz East, Dubai, United
                Arab Emirates
              </p>
            </div>
            <div className="contact-card">
              <p className="text-xs font-semibold uppercase text-[#0080ff]">
                Our Email
              </p>
              <a
                href="mailto:info@adat-tech.com"
                className="mt-3 inline-flex text-sm font-semibold text-[#071044] transition hover:text-[#0080ff]"
              >
                info@adat-tech.com
              </a>
            </div>
            <div className="contact-card">
              <p className="text-xs font-semibold uppercase text-[#0080ff]">
                Our Phone
              </p>
              <a
                href="tel:+97142297609"
                className="mt-3 inline-flex text-sm font-semibold text-[#071044] transition hover:text-[#0080ff]"
              >
                +971 (04) 229 7609
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d8e4ff] bg-[#f7f9ff]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#445188] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center">
            <Image
              src="/assets/logo-white.png"
              alt="BENOFT - Better Business, One Platform"
              width={1294}
              height={378}
              quality={100}
              className="h-14 w-auto object-contain"
            />
          </div>
          <p>Enterprise software, cloud platforms, and business automation.</p>
        </div>
      </footer>
    </main>
  );
}
