import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";

import SiteNav from "./components/SiteNav";
import "./globals.css";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], display: "optional" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "optional" });
const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: "500",
  display: "optional",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jesadakorn.com"),
  title: {
    default: "Jesadakorn Kirtnu | Technical Generalist",
    template: "%s | Jesadakorn Kirtnu",
  },
  description:
    "Technical generalist connecting operations, software, and automation to turn real workflows into practical systems.",
  authors: [{ name: "Jesadakorn Kirtnu", url: "https://jesadakorn.com" }],
  creator: "Jesadakorn Kirtnu",
  openGraph: { siteName: "Jesadakorn Kirtnu", locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080a0d",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable} ${ibmPlexMono.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteNav />
        <div className="pt-[4.5rem] print:pt-0">{children}</div>
        <Toaster position="top-right" richColors theme="dark" />
        {process.env.VERCEL === "1" ? <Analytics /> : null}
      </body>
    </html>
  );
}
