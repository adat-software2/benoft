import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import Preloader from "./preloader";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BENOFT | One Platform. Infinite Business.",
  description:
    "BENOFT builds Project Book, Face Attendance and Employee Portal: practical software for project finance, attendance and workforce management.",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Skip the intro before first paint when it already played in this visit. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "try{if(sessionStorage.getItem('benoft-intro-seen')==='1')document.documentElement.classList.add('intro-seen')}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
