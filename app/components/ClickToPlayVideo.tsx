"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";

import { TrackedAnchor } from "./TrackedLink";

interface ClickToPlayVideoProps {
  videoId: string;
  videoUrl: string;
  poster: string;
  title: string;
  projectSlug: string;
}

export default function ClickToPlayVideo({
  videoId,
  videoUrl,
  poster,
  title,
  projectSlug,
}: ClickToPlayVideoProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="video-demo">
      <div className="relative aspect-video overflow-hidden bg-[#070b0f]">
        {loaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={`${title} demonstration video`}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={poster}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover"
            />
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="video-play-button"
              aria-label={`Play ${title} demonstration`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--accent)] text-white shadow-xl">
                <Play className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true" />
              </span>
              Play workflow demo
            </button>
          </>
        )}
      </div>
      <div className="flex flex-col gap-3 border-t border-[color:var(--line)] p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-[color:var(--muted)]">
          The YouTube player loads only after you choose to play it.
        </p>
        <TrackedAnchor
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          eventName="external_project_click"
          eventData={{ project: projectSlug, destination: "youtube" }}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 font-semibold text-[color:var(--foreground)] hover:text-[color:var(--accent-strong)]"
        >
          Open on YouTube
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </TrackedAnchor>
      </div>
    </div>
  );
}
