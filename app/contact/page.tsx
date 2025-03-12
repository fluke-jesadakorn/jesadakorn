import ContactForm from "../components/ContactForm";
import { EmailSection } from "../components/EmailSection";

export default function Contact() {
  return (
    <main className="min-h-screen relative">
      {/* Header */}
      <header className="relative py-24 card-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 pulsing">
            Contact Me
          </h1>
          <p className="text-white/90 text-center text-xl md:text-2xl">
            Let&apos;s work together
          </p>
        </div>
      </header>

      {/* Contact Form */}
      <section className="container mx-auto p-4 -mt-20 relative z-10">
        <div className="max-w-2xl mx-auto relative">
          {/* <div className="card group p-8 relative">
            <ContactForm />
          </div> */}

          {/* Contact Information */}
          <div className="mt-12 gap-6">
            <div className="card p-6">
              <EmailSection />
            </div>

          </div>
        </div>
      </section>
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
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
      </div>
    </main>
  );
}
