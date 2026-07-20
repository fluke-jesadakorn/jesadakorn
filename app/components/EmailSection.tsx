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
    <article className="contact-card">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-4">
          <div className="rounded-2xl bg-[color:var(--accent-soft)] p-3 text-[color:var(--accent-strong)] w-fit">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-strong)]">
              Email
            </p>
            <a
              href={`mailto:${emailAddress}`}
              className="mt-3 block font-display text-2xl text-[color:var(--foreground)] break-all"
            >
              {emailAddress}
            </a>
            <p className="mt-3 max-w-md text-sm leading-7 text-[color:var(--muted)]">
              The fastest route for hiring conversations, IT leadership opportunities, and direct
              outreach.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={copyEmail}
          className="button-secondary shrink-0 px-4 py-3 text-sm"
          aria-label="Copy email address"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </article>
  );
}
