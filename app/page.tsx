import Portfolio from "./components/Portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const websites = [
    {
      url: "http://epsx.jesadakorn.com",
      title: "Portfolio Website",
      description: "My professional portfolio showcase",
      image: "/epsx.png",
    },
    {
      url: "http://www.jesadakorn.com",
      title: "Main Website",
      description: "Personal domain and projects",
      image: "/web-portfolio.png",
    },
  ];

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
              <img
                src="/Portrait.jpg"
                alt="Jesadakorn Portrait"
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

      {/* Website Cards */}
      <section className="container mx-auto p-4 mb-16">
        <h2 className="text-4xl text-center title-gradient mb-12 relative">
          My Portfolio Websites
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {websites.map((site, index) => (
            <div key={index} className="card group">
              <div className="card-header">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:w-4 transition-all duration-300"></span>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    style={{ color: "var(--secondary)" }}
                  >
                    {site.title}
                  </a>
                </h3>
              </div>
              <div className="p-6">
                <div className="rounded-2xl overflow-hidden mb-6 shadow-lg relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <img
                    src={site.image}
                    alt={site.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <p
                  style={{ color: "var(--muted-foreground)" }}
                  className="mb-4 text-lg"
                >
                  {site.description}
                </p>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pancake-button inline-flex items-center gap-2"
                >
                  Visit Site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
