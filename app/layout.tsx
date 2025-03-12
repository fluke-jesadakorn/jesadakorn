import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesadakorn - Portfolio & Contact",
  description: "Personal portfolio and contact information of Jesadakorn, a Full Stack Developer specializing in web development and blockchain technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased gradient-bg`}
      >
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="text-white font-bold text-xl hover:text-primary transition-colors">Jesadakorn</a>
              <div className="flex gap-6">
                <a href="/" className="text-white/90 hover:text-primary transition-colors">Home</a>
                <a href="/contact" className="text-white/90 hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          {children}
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
