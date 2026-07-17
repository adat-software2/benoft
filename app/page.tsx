import Image from "next/image";
import attendanceIcon from "../public/assets/attendance-icon.png";
import logoDark from "../public/assets/logo-dark.png";
import logoWhite from "../public/assets/logo-white.png";
import projectBookIcon from "../public/assets/project-book-icon.png";

export const dynamic = "force-dynamic";

const products = [
  {
    number: "01",
    name: "Project Book",
    type: "Desktop project finance",
    icon: projectBookIcon,
    summary: "Keep project income, expenses, invoices, bills, payments, and profit in one clear desktop workspace.",
    details: ["Project profitability", "Invoices and payments", "Local backup and restore"],
  },
  {
    number: "02",
    name: "Face Attendance",
    type: "Android attendance kiosk",
    icon: attendanceIcon,
    summary: "Capture face-based check-in and check-out, keep punches moving offline, and sync attendance back to Odoo.",
    details: ["On-device face matching", "Offline punch queue", "Attendance reports"],
  },
];

export default function Home() {
  return (
    <main className="studio-site">
      <header className="studio-header">
        <a href="#top" className="studio-logo" aria-label="BENOFT home">
          <Image src={logoWhite} alt="BENOFT" width={1294} height={378} priority />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#products">Products</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="studio-menu-mark" href="#contact" aria-label="Contact BENOFT">
          +
        </a>
      </header>

      <section id="top" className="studio-hero">
        <div className="studio-hero-grid" aria-hidden="true" />
        <div className="studio-hero-orbit studio-hero-orbit-a" aria-hidden="true" />
        <div className="studio-hero-orbit studio-hero-orbit-b" aria-hidden="true" />
        <div className="studio-wordmark studio-wordmark-back" aria-hidden="true">B</div>
        <div className="studio-wordmark studio-wordmark-front" aria-hidden="true">O</div>
        <div className="studio-hero-content">
          <p className="studio-overline">BENOFT / BUSINESS SYSTEMS</p>
          <h1>
            Clear work.
            <span>Real control.</span>
          </h1>
          <div className="studio-hero-bottom">
            <p>
              Purpose-built software for project finance and reliable face attendance.
              Practical by design. Ready for daily work.
            </p>
            <a href="#products" className="studio-round-link" aria-label="Explore BENOFT products">
              <span>Explore</span>
              <b>↓</b>
            </a>
          </div>
        </div>
        <div className="studio-product-satellites" aria-hidden="true">
          {products.map((product) => (
            <div className="studio-satellite" key={product.name}>
              <Image src={product.icon} alt="" width={90} height={90} />
              <span>{product.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="studio-ticker" aria-label="BENOFT capabilities">
        <div>
          <span>PROJECT FINANCE</span><i>+</i><span>FACE ATTENDANCE</span><i>+</i>
          <span>OFFLINE WORKFLOWS</span><i>+</i><span>ODOO SYNC</span><i>+</i>
          <span>PROJECT FINANCE</span><i>+</i><span>FACE ATTENDANCE</span><i>+</i>
          <span>OFFLINE WORKFLOWS</span><i>+</i><span>ODOO SYNC</span><i>+</i>
        </div>
      </section>

      <section id="approach" className="studio-intro">
        <p className="studio-section-label">( WHAT BENOFT BUILDS )</p>
        <div className="studio-intro-copy">
          <h2>Software that earns its place in the working day.</h2>
          <p>
            We focus on the records and decisions that need to stay dependable:
            project money, people movement, offline continuity, and reports that stay easy to read.
          </p>
        </div>
        <div className="studio-stat-line">
          <span>02 PRODUCTS</span><span>01 CLEAR STANDARD</span><span>OFFLINE WHEN NEEDED</span>
        </div>
      </section>

      <section id="products" className="studio-products">
        <div className="studio-products-head">
          <p className="studio-section-label">( SELECTED PRODUCTS )</p>
          <h2>Built around the work that matters.</h2>
        </div>
        <div className="studio-product-list">
          {products.map((product, index) => (
            <article className={`studio-product studio-product-${index + 1}`} key={product.name}>
              <div className="studio-product-number">{product.number}</div>
              <div className="studio-product-icon-wrap">
                <div className="studio-product-icon-ring" aria-hidden="true" />
                <Image src={product.icon} alt={`${product.name} icon`} width={220} height={220} />
              </div>
              <div className="studio-product-copy">
                <p>{product.type}</p>
                <h3>{product.name}</h3>
                <span>{product.summary}</span>
              </div>
              <ul>
                {product.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <div className="studio-product-letter" aria-hidden="true">{index === 0 ? "P" : "F"}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-kinetic-section">
        <div className="studio-kinetic-word" aria-hidden="true">BENOFT</div>
        <div className="studio-kinetic-content">
          <p className="studio-section-label">( DAILY CONTROL )</p>
          <h2>Track it.<br />Verify it.<br />Report it.</h2>
          <p>
            Project Book helps teams see the financial story of every project.
            Face Attendance gives teams a simple, secure way to record presence.
          </p>
        </div>
      </section>

      <footer id="contact" className="studio-footer">
        <div className="studio-footer-top">
          <Image src={logoDark} alt="BENOFT" width={1594} height={478} />
          <p>Business systems for practical daily control.</p>
        </div>
        <div className="studio-footer-grid">
          <div>
            <span>OUR OFFICE</span>
            <p>M2, Hamad Sultan Saif Building,<br />Hor Al Anz East, Dubai, United Arab Emirates</p>
          </div>
          <div>
            <span>CONTACT</span>
            <p><a href="mailto:info.benoft@gmail.com">info.benoft@gmail.com</a><br /><a href="tel:+97142297609">+971 (04) 229 7609</a></p>
          </div>
          <a className="studio-whatsapp" href="#" aria-label="WhatsApp link placeholder" title="WhatsApp">
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
