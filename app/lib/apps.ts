import type { StaticImageData } from "next/image";
import attendanceIcon from "../../public/assets/attendance-icon.png";
import employeePortalIcon from "../../public/assets/employee-portal-icon.png";
import projectBookIcon from "../../public/assets/project-book-icon.png";

// Every product a customer can sign in to, shown on /login.
// To add a product, add an entry here. Give it a url once it has a web sign-in;
// without one, the card explains where the customer signs in instead.
export type BenoftApp = {
  id: string;
  name: string;
  icon: StaticImageData;
  platform: string;
  description: string;
  url?: string;
  signInWith?: string;
  elsewhere?: string;
};

export const apps: BenoftApp[] = [
  {
    id: "face-attendance",
    name: "Face Attendance",
    icon: attendanceIcon,
    platform: "Web dashboard",
    description: "Attendance, employees, devices and Odoo sync for your company.",
    url: "https://attendance.benoft.com/login",
    signInWith: "Company key, username and password",
  },
  {
    id: "employee-portal",
    name: "Employee Portal",
    icon: employeePortalIcon,
    platform: "Android app",
    description: "Check in, leave, payslips and team tools for employees and managers.",
    elsewhere: "Sign in from the Employee Portal app on your phone.",
  },
  {
    id: "project-book",
    name: "Project Book",
    icon: projectBookIcon,
    platform: "Desktop · Windows & macOS",
    description: "Budgets, invoices, bills and profit for every project.",
    elsewhere: "Sign in from the Project Book app on your computer.",
  },
];
