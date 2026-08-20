import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Sora } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Toaster } from "sonner";

import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Jesadakorn Kirtnu | Technology Operations, Software & Automation",
    template: "%s | Jesadakorn Kirtnu",
  },
  description:
    "Portfolio of Jesadakorn Kirtnu, covering technology operations, software development, workflow automation, business systems, and technical project work.",
  metadataBase: new URL("https://jesadakorn.com"),
};

const navigation = [
  { label: "Home", href: "/", mobile: false },
  { label: "Work", href: "/#work", mobile: false },
  { label: "Experience", href: "/#experience", mobile: false },
  { label: "Resume", href: "/resume", mobile: true },
  { label: "Contact", href: "/contact", mobile: true },
] as const;

const githubProfileUrl = "https://github.com/fluke-jesadakorn";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${manrope.variable} ${ibmPlexMono.variable}`}>
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--line)] bg-[rgba(8,12,16,0.8)] backdrop-blur-xl print:hidden">
          <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="font-display text-xl text-[color:var(--foreground)]">
              Jesadakorn Kirtnu
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-[color:var(--muted)] md:gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${item.mobile ? "inline" : "hidden md:inline"} transition-colors hover:text-[color:var(--foreground)]`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--background-strong)] px-4 py-2 text-[color:var(--foreground)] transition-colors hover:border-[color:var(--accent-strong)] hover:text-[color:var(--foreground)] sm:inline-flex"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </nav>

        <div className="pt-20 print:pt-0">{children}</div>
        <Toaster position="top-right" richColors theme="dark" />
      </body>
    </html>
  );
}
