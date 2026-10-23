import { countries } from "./countries";

// Shared by the form and the API route so both sides apply the same rules.
export type DemoLead = {
  name: string;
  company: string;
  email: string;
  country: string;
  phone: string;
  note: string;
  product: string;
};

export type DemoLeadErrors = Partial<Record<keyof DemoLead, string>>;

const EMAIL_PATTERN = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;

export function phoneDigits(phone: string) {
  return phone.replace(/[\s()-]/g, "");
}

export function validateLead(lead: DemoLead): DemoLeadErrors {
  const errors: DemoLeadErrors = {};
  if (lead.name.trim().length < 2) errors.name = "Please enter your name.";
  if (lead.name.length > 100) errors.name = "Name is too long.";
  if (lead.company.trim().length < 2) errors.company = "Please enter your company.";
  if (lead.company.length > 120) errors.company = "Company name is too long.";
  if (!EMAIL_PATTERN.test(lead.email.trim()) || lead.email.length > 160) errors.email = "Please enter a valid email address.";
  if (!countries.some((country) => country.iso === lead.country)) errors.country = "Please choose a country code.";
  if (!/^\d{6,14}$/.test(phoneDigits(lead.phone))) errors.phone = "Please enter a valid phone number.";
  if (lead.note.length > 1500) errors.note = "Please keep the note under 1500 characters.";
  if (lead.product.length > 60) errors.product = "Invalid product.";
  return errors;
}
