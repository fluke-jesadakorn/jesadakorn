'use client';

import { toast } from 'sonner';

export function EmailSection() {
  return (
    <div className="flex items-center gap-4 relative z-20">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">Email</h3>
        <div className="flex items-center gap-2">
          <a 
            href="mailto:jesadakorn.kirtnu@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            jesadakorn.kirtnu@gmail.com
          </a>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText("jesadakorn.kirtnu@gmail.com").then(() => {
                toast.success('Email copied to clipboard!');
                const button = document.getElementById("copy-button");
                if (button) {
                  button.classList.add("text-green-500");
                  setTimeout(() => {
                    button.classList.remove("text-green-500");
                  }, 2000);
                }
              });
            }}
            className="p-1 hover:text-primary transition-colors"
            title="Copy email"
            id="copy-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
