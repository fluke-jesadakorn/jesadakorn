"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type EventName =
  | "external_project_click"
  | "resume_download"
  | "contact_role_click"
  | "contact_project_click";

interface TrackedAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: EventName;
  eventData?: Record<string, string>;
  children: ReactNode;
}

export function TrackedAnchor({
  eventName,
  eventData,
  children,
  onClick,
  ...props
}: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        track(eventName, eventData);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
