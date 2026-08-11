import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itexpertsagency.com"),
  title: {
    default: "IT Experts | Managed IT Services",
    template: "%s | IT Experts",
  },
  description:
    "Secure, proactive managed IT services, cybersecurity, cloud solutions, and infrastructure support for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={[manrope.variable, "font-sans antialiased"].join(" ")}>
        {children}
      </body>
    </html>
  );
}
