"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

export default function ProjectViewTracker({ slug, type }: { slug: string; type: string }) {
  useEffect(() => {
    track("project_view", { project: slug, type });
  }, [slug, type]);

  return null;
}
