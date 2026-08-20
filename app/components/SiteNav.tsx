"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/", section: null },
  { label: "Work", href: "/#work", section: "work" },
  { label: "Experience", href: "/#experience", section: "experience" },
  { label: "Resume", href: "/resume", section: null },
  { label: "Contact", href: "/contact", section: null },
] as const;

const githubProfileUrl = "https://github.com/fluke-jesadakorn";

export default function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash.slice(1));
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstLink = menuPanelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const closeMenu = (returnFocus = false) => {
    setMenuOpen(false);
    if (returnFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
      return;
    }

    if (event.key !== "Tab") return;
    const focusable = Array.from(
      menuPanelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const hrefFor = (href: string, section: string | null) =>
    pathname === "/" && section ? `#${section}` : href;

  const isCurrent = (href: string, section: string | null) => {
    if (section) {
      return (pathname === "/" && activeHash === section) ||
        (section === "work" && pathname.startsWith("/work/"));
    }
    if (href === "/") return pathname === "/" && !activeHash;
    return pathname === href;
  };

  const navLinks = (mobile = false) =>
    navigation.map((item) => {
      const href = hrefFor(item.href, item.section);
      const current = isCurrent(item.href, item.section);

      return (
        <Link
          key={item.label}
          href={href}
          aria-current={current ? "page" : undefined}
          onClick={() => mobile && closeMenu()}
          className={mobile ? "mobile-nav-link" : "nav-link"}
        >
          {item.label}
        </Link>
      );
    });

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--line)] bg-[rgba(8,12,16,0.88)] backdrop-blur-xl print:hidden"
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-h-11 items-center rounded-md font-display text-lg text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-strong)]"
        >
          Jesadakorn Kirtnu
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks()}
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link ml-2 gap-2 border border-[color:var(--line-strong)]"
          >
            GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line-strong)] text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-strong)] lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          ref={menuPanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onKeyDown={handleMenuKeyDown}
          className="mobile-menu lg:hidden"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-5 sm:px-6">
            {navLinks(true)}
            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => closeMenu()}
              className="mobile-nav-link mt-2 justify-between border-t border-[color:var(--line)]"
            >
              GitHub
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
