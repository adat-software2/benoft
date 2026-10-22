import Image from "next/image";
import logo from "../public/assets/logo.png";

export default function Loading() {
  return (
    <main className="intro-fallback" aria-busy="true" aria-live="polite">
      <Image src={logo} alt="" width={1024} height={1024} quality={100} sizes="72px" />
      <span className="sr-only">Loading BENOFT</span>
    </main>
  );
}
