"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { toast } from "sonner";

const emailAddress = "jesadakorn.kirtnu@gmail.com";

export function EmailSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      toast.success("Email copied to clipboard");
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Unable to copy email");
    }
  };

  return (
    <section aria-labelledby="direct-email-heading" className="direct-email">
      <div>
        <p className="eyebrow">Direct email</p>
        <h2 id="direct-email-heading" className="mt-3 font-display text-2xl text-[color:var(--foreground)]">
          {emailAddress}
        </h2>
        <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
          Prefer to write your own subject? Copy the address and use any email client.
        </p>
      </div>
      <button type="button" onClick={copyEmail} className="button-secondary shrink-0" aria-label="Copy email address">
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? "Copied" : "Copy email"}
      </button>
      <Mail className="sr-only" aria-hidden="true" />
    </section>
  );
}
