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
    default: "Jesadakorn Kirtnu | IT Manager",
    template: "%s | Jesadakorn Kirtnu",
  },
  description:
    "Portfolio of Jesadakorn Kirtnu, a Phuket-based IT Manager working across the Thailand and German branches at VIGNOLD, with EPSX presented separately as a side project.",
  metadataBase: new URL("https://jesadakorn.com"),
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
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
                  className="transition-colors hover:text-[color:var(--foreground)]"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--background-strong)] px-4 py-2 text-[color:var(--foreground)] transition-colors hover:border-[color:var(--accent-strong)] hover:text-[color:var(--foreground)]"
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
