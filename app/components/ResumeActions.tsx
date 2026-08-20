"use client";

import Link from "next/link";
import { Download, MessageSquare, Printer } from "lucide-react";

import { TrackedAnchor } from "./TrackedLink";

const publicResumePath = "/Jesadakorn-Kirtnu-Resume.pdf";

export function ResumeActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <TrackedAnchor
        href={publicResumePath}
        download
        eventName="resume_download"
        eventData={{ format: "pdf" }}
        className="button-primary"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Download PDF
      </TrackedAnchor>
      <button type="button" onClick={() => window.print()} className="button-secondary">
        <Printer className="h-4 w-4" aria-hidden="true" />
        Print
      </button>
      <Link href="/contact" className="button-secondary">
        <MessageSquare className="h-4 w-4" aria-hidden="true" />
        Contact
      </Link>
    </div>
  );
}
