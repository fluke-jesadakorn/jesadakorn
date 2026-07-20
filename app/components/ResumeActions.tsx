"use client";

import { Download, Mail } from "lucide-react";

export default function ResumeActions() {
  return (
    <div className="flex flex-wrap gap-3 print:hidden">
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ca7d4d] to-[#f0b487] px-5 py-3 text-sm font-semibold text-[#fff8f0] shadow-[0_18px_38px_rgba(141,77,40,0.24)] transition-transform hover:-translate-y-0.5"
      >
        <Download className="h-4 w-4" />
        Print / Save PDF
      </button>

      <a
        href="mailto:jesadakorn.kirtnu@gmail.com"
        className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#f0b487]/50 hover:bg-white/10"
      >
        <Mail className="h-4 w-4" />
        Email Jesadakorn
      </a>
    </div>
  );
}
