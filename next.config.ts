import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Short, memorable links to each product's own sign-in page.
  async redirects() {
    return [{ source: "/attendance", destination: "https://attendance.benoft.com/login", permanent: false }];
  },
};

export default nextConfig;
