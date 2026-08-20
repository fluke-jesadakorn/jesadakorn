"use client";

import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useEffect,
  useRef,
} from "react";

import { cn } from "@/lib/utils";

type MotionStyle = CSSProperties & Record<`--${string}`, string>;

function supportsPointerMotion() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function SectionReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    element.dataset.motionReady = "true";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.dataset.revealed = "true";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("reveal-shell", className)}>
      {children}
    </div>
  );
}

export function SpotlightSurface({
  children,
  className,
  theme,
}: {
  children: ReactNode;
  className?: string;
  theme?: "violet" | "amber" | "mint" | "rose";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const updatePointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (
      !element ||
      event.pointerType !== "mouse" ||
      !supportsPointerMotion() ||
      element.matches(":focus-within")
    ) {
      return;
    }
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      element.style.setProperty("--spot-x", `${(x * 100).toFixed(2)}%`);
      element.style.setProperty("--spot-y", `${(y * 100).toFixed(2)}%`);
      element.style.setProperty("--tilt-x", `${((0.5 - y) * 3).toFixed(2)}deg`);
      element.style.setProperty("--tilt-y", `${((x - 0.5) * 3).toFixed(2)}deg`);
      element.dataset.pointerActive = "true";
    });
  };

  const resetPointer = () => {
    const element = ref.current;
    if (!element) return;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      element.style.setProperty("--spot-x", "50%");
      element.style.setProperty("--spot-y", "40%");
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
      delete element.dataset.pointerActive;
    });
  };

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    [],
  );

  return (
    <div
      ref={ref}
      data-theme={theme}
      className={cn("spotlight-surface", className)}
      onPointerMove={updatePointer}
      onPointerLeave={resetPointer}
      onFocusCapture={resetPointer}
      onBlur={(event) => {
        if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
          resetPointer();
        }
      }}
    >
      {children}
    </div>
  );
}

export function HeroParallax({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const updatePointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element || event.pointerType !== "mouse" || !supportsPointerMotion()) return;
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      element.style.setProperty("--hero-x", `${(x * 8).toFixed(2)}px`);
      element.style.setProperty("--hero-y", `${(y * 8).toFixed(2)}px`);
      element.style.setProperty("--hero-x-reverse", `${(x * -5).toFixed(2)}px`);
      element.style.setProperty("--hero-y-reverse", `${(y * -5).toFixed(2)}px`);
    });
  };

  const resetPointer = () => {
    const element = ref.current;
    if (!element) return;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      element.style.setProperty("--hero-x", "0px");
      element.style.setProperty("--hero-y", "0px");
      element.style.setProperty("--hero-x-reverse", "0px");
      element.style.setProperty("--hero-y-reverse", "0px");
    });
  };

  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    [],
  );

  return (
    <div
      ref={ref}
      className={cn("hero-parallax", className)}
      style={{ "--hero-x": "0px", "--hero-y": "0px" } as MotionStyle}
      onPointerMove={updatePointer}
      onPointerLeave={resetPointer}
    >
      {children}
    </div>
  );
}
