import type { Metadata } from "next";
import Portfolio from "./components/Portfolio";
import FeaturedWorkSection from "./components/FeaturedWorkSection";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full pancake-grid"></div>
        <div className="absolute top-0 left-0 w-full h-64 pancake-dots"></div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-[10%] w-12 h-12 floating"
          style={{ animationDelay: "0s" }}
        >
          <div className="w-full h-full rounded-xl bg-primary/10 rotate-12"></div>
        </div>
        <div
          className="absolute top-40 right-[15%] w-8 h-8 floating"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-full h-full rounded-xl bg-secondary/10 -rotate-12"></div>
        </div>
        <div
          className="absolute top-96 left-[20%] w-10 h-10 floating"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-full h-full rounded-xl bg-accent/10 rotate-45"></div>
        </div>
      </div>

      {/* Header */}
      <header className="relative py-24 card-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 pulsing">
            Jesadakorn&apos;s Portfolio
          </h1>
          <p className="text-white/90 text-center text-xl md:text-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mx-1 hover:bg-white/20 transition-colors">
              IT
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mx-1 hover:bg-white/20 transition-colors">
              Web Development
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mx-1 hover:bg-white/20 transition-colors">
              Engineering
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mx-1 hover:bg-white/20 transition-colors">
              Blockchain
            </span>
          </p>
        </div>
      </header>

      {/* Portrait Section */}
      <section className="container mx-auto p-4 -mt-20">
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative w-48 h-60 rounded-3xl overflow-hidden shadow-2xl bg-card">
              <Image
                src="/Portrait.jpg"
                alt="Jesadakorn Portrait"
                width={192}
                height={240}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <div className="pt-8">
        <Portfolio />
      </div>

      <FeaturedWorkSection />
    </main>
  );
}
