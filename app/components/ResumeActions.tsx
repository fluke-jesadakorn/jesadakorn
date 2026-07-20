"use client";

import Link from "next/link";
import { Download, MessageSquare, Printer } from "lucide-react";

const publicResumePath = "/Jesadakorn-Kirtnu-Resume.pdf";

export function ResumeActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={publicResumePath} download className="button-primary">
        <Download className="h-4 w-4" aria-hidden="true" />
        Download PDF
      </a>
      <button type="button" onClick={() => window.print()} className="button-secondary">
        <Printer className="h-4 w-4" aria-hidden="true" />
        Print page
      </button>
      <Link href="/contact" className="button-secondary">
        <MessageSquare className="h-4 w-4" aria-hidden="true" />
        Contact
      </Link>
    </div>
  );
}
