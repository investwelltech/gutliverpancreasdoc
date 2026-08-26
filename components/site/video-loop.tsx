"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Looping, silent background video for the supplied brand/medical animations.
 *
 * Performance and accessibility rules baked in:
 *  - `prefers-reduced-motion: reduce` → the video is never mounted or fetched;
 *    `fallback` is rendered instead. Checked at runtime, not just in CSS, so
 *    the ~1.7 MB download is genuinely skipped.
 *  - Otherwise the source is attached only once the element scrolls near the
 *    viewport, so nothing downloads for visitors who never reach the section.
 *  - muted + playsInline + loop, so iOS Safari autoplays inline rather than
 *    going fullscreen or refusing to start.
 *  - The clip is decorative; screen readers get the `label` and nothing else.
 */
export function VideoLoop({
  src,
  poster,
  label,
  className,
  videoClassName,
  fallback,
}: {
  src: string;
  poster?: string | null;
  label: string;
  className?: string;
  videoClassName?: string;
  /** Shown instead of the video under reduced motion. */
  fallback?: React.ReactNode;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState<boolean | null>(null);
  const [active, setActive] = useState(false);
  /** Only true once frames are actually rendering. */
  const [playing, setPlaying] = useState(false);

  // Resolve the motion preference on the client and keep it live.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Only attach the source once the section is close to view.
  useEffect(() => {
    if (reduced !== false || active) return;
    const el = hostRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced, active]);

  // Some browsers ignore the autoplay attribute after a late src attach.
  useEffect(() => {
    if (!active) return;
    videoRef.current?.play().catch(() => {
      /* Autoplay refused — the poster frame remains, which is fine. */
    });
  }, [active]);

  if (reduced) {
    return <div className={className}>{fallback}</div>;
  }

  return (
    <div ref={hostRef} className={cn("relative", className)}>
      {/* Static layer. Stays visible until the video is genuinely playing, so a
          slow, blocked or unsupported video never leaves an empty box. */}
      {fallback && !playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          {fallback}
        </div>
      )}

      {active && (
        <video
          ref={videoRef}
          src={src}
          poster={poster ?? undefined}
          aria-label={label}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          onPlaying={() => setPlaying(true)}
          className={cn(
            "relative h-full w-full object-contain transition-opacity duration-500",
            playing ? "opacity-100" : "opacity-0",
            videoClassName
          )}
        />
      )}
    </div>
  );
}
