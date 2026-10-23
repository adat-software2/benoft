"use client";

import { useEffect, useRef, useState } from "react";
import { countries, defaultCountry } from "./lib/countries";
import { validateLead, type DemoLead, type DemoLeadErrors } from "./lib/demo-lead";

const products = ["Project Book", "Face Attendance", "Employee Portal", "All products"];

const emptyLead: DemoLead = { name: "", company: "", email: "", country: defaultCountry, phone: "", note: "", product: "" };

type Status = "idle" | "sending" | "sent" | "failed";

// Opens from any element with a data-demo attribute; its value preselects the product.
export default function DemoDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [lead, setLead] = useState<DemoLead>(emptyLead);
  const [errors, setErrors] = useState<DemoLeadErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof DemoLead, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const open = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement).closest<HTMLElement>("[data-demo]");
      if (!trigger) return;
      event.preventDefault();
      const product = trigger.dataset.demo ?? "";
      setLead((current) => ({ ...current, product: products.includes(product) ? product : current.product }));
      setStatus((current) => (current === "sent" ? "idle" : current));
      dialog.showModal();
      document.documentElement.classList.add("demo-open");
    };
    const onClose = () => document.documentElement.classList.remove("demo-open");
    const onBackdrop = (event: MouseEvent) => {
      if (event.target === dialog) dialog.close();
    };

    document.addEventListener("click", open);
    dialog.addEventListener("close", onClose);
    dialog.addEventListener("click", onBackdrop);
    return () => {
      document.removeEventListener("click", open);
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("click", onBackdrop);
    };
  }, []);

  const update = (key: keyof DemoLead) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const next = { ...lead, [key]: event.target.value };
    setLead(next);
    if (touched[key]) setErrors(validateLead(next));
  };

  const blur = (key: keyof DemoLead) => () => {
    setTouched((current) => ({ ...current, [key]: true }));
    setErrors(validateLead(lead));
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validateLead(lead);
    setErrors(found);
    setTouched({ name: true, company: true, email: true, phone: true, country: true, note: true });
    if (Object.keys(found).length > 0) {
      const first = event.currentTarget.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, website }),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string; errors?: DemoLeadErrors };
      if (!response.ok) {
        if (result.errors) setErrors(result.errors);
        setMessage(result.error || "Something went wrong. Please try again.");
        setStatus("failed");
        return;
      }
      setStatus("sent");
      setLead({ ...emptyLead, country: lead.country });
      setTouched({});
      setErrors({});
    } catch {
      setMessage("You seem to be offline. Please check your connection and try again.");
      setStatus("failed");
    }
  };

  const fieldError = (key: keyof DemoLead) => (touched[key] ? errors[key] : undefined);
  const close = () => dialogRef.current?.close();

  return (
    <dialog className="demo-dialog" ref={dialogRef} aria-labelledby="demo-title">
      <div className="demo-card">
        <button className="demo-close" type="button" onClick={close} aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>

        {status === "sent" ? (
          <div className="demo-done" role="status">
            <div className="demo-done-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
            </div>
            <h2 id="demo-title">Thank you!</h2>
            <p>Your demo request is in. Our team will contact you within one business day.</p>
            <button className="studio-button" type="button" onClick={close}>Done</button>
          </div>
        ) : (
          <>
            <p className="demo-label">( BOOK A DEMO )</p>
            <h2 id="demo-title">See BENOFT in action.</h2>
            <p className="demo-intro">Tell us a little about you and we&apos;ll arrange a personal walkthrough.</p>

            <form className="demo-form" onSubmit={submit} noValidate>
              <div className="demo-products" role="radiogroup" aria-label="Product">
                {products.map((product) => (
                  <label key={product} className={lead.product === product ? "is-selected" : undefined}>
                    <input type="radio" name="product" value={product} checked={lead.product === product} onChange={update("product")} />
                    {product}
                  </label>
                ))}
              </div>

              <div className="demo-grid">
                <Field label="Full name" error={fieldError("name")}>
                  <input name="name" autoComplete="name" value={lead.name} onChange={update("name")} onBlur={blur("name")} aria-invalid={!!fieldError("name")} required maxLength={100} />
                </Field>
                <Field label="Company" error={fieldError("company")}>
                  <input name="company" autoComplete="organization" value={lead.company} onChange={update("company")} onBlur={blur("company")} aria-invalid={!!fieldError("company")} required maxLength={120} />
                </Field>
                <Field label="Work email" error={fieldError("email")} wide>
                  <input name="email" type="email" inputMode="email" autoComplete="email" value={lead.email} onChange={update("email")} onBlur={blur("email")} aria-invalid={!!fieldError("email")} required maxLength={160} />
                </Field>
                <Field label="Phone" error={fieldError("phone") || fieldError("country")} wide>
                  <div className="demo-phone">
                    <select name="country" aria-label="Country code" value={lead.country} onChange={update("country")} autoComplete="tel-country-code">
                      {countries.map((country) => (
                        <option key={country.iso} value={country.iso}>
                          {country.name} ({country.dial})
                        </option>
                      ))}
                    </select>
                    <span className="demo-dial" aria-hidden="true">{countries.find((country) => country.iso === lead.country)?.dial}</span>
                    <input name="phone" type="tel" aria-label="Phone number" inputMode="tel" autoComplete="tel-national" placeholder="50 123 4567" value={lead.phone} onChange={update("phone")} onBlur={blur("phone")} aria-invalid={!!fieldError("phone")} required maxLength={20} />
                  </div>
                </Field>
                <Field label="Note (optional)" error={fieldError("note")} wide>
                  <textarea name="note" rows={3} value={lead.note} onChange={update("note")} onBlur={blur("note")} placeholder="Team size, timeline, anything we should know" maxLength={1500} />
                </Field>
              </div>

              <input className="demo-trap" type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} aria-hidden="true" />

              {status === "failed" && message && <p className="demo-message" role="alert">{message}</p>}

              <button className="studio-button demo-submit" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Book a demo"} <b aria-hidden="true">→</b>
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}

function Field({ label, error, wide, children }: { label: string; error?: string; wide?: boolean; children: React.ReactNode }) {
  return (
    <label className={`demo-field${wide ? " demo-field-wide" : ""}${error ? " has-error" : ""}`}>
      <span>{label}</span>
      {children}
      {error && <small>{error}</small>}
    </label>
  );
}
