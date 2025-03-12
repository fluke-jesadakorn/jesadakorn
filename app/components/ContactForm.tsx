"use client";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem("name") as HTMLInputElement)
          .value;
        const email = (form.elements.namedItem("email") as HTMLInputElement)
          .value;
        const message = (
          form.elements.namedItem("message") as HTMLTextAreaElement
        ).value;
        const mailtoLink = `mailto:contact@jesadakorn.com?subject=Contact from ${name}&body=${encodeURIComponent(
          `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        window.location.href = mailtoLink;
      }}
      className="space-y-6 relative z-20"
    >
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium"
          style={{ color: "var(--muted-foreground)" }}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-3 rounded-lg bg-card border border-border focus:border-primary transition-colors outline-none pointer-events-auto relative z-30"
          placeholder="Your name"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium"
          style={{ color: "var(--muted-foreground)" }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-3 rounded-lg bg-card border border-border focus:border-primary transition-colors outline-none pointer-events-auto relative z-30"
          placeholder="your@email.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium"
          style={{ color: "var(--muted-foreground)" }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full p-3 rounded-lg bg-card border border-border focus:border-primary transition-colors outline-none resize-none pointer-events-auto relative z-30"
          placeholder="Your message here..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="pancake-button w-full justify-center pointer-events-auto relative z-30"
      >
        Send Message
      </button>
    </form>
  );
}
