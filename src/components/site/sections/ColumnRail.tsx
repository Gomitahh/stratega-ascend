import { useEffect, useState } from "react";

export function ColumnRail() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHidden(true);
      return;
    }
    let frameId: number | null = null;
    const onScroll = () => {
      if (frameId === null) {
        frameId = requestAnimationFrame(() => {
          const total = document.documentElement.scrollHeight - window.innerHeight;
          setProgress(total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0);
          frameId = null;
        });
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  if (hidden) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed right-7 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center lg:flex">
      <svg width="16" height="9" viewBox="0 0 16 9" fill="none" className="text-secondary">
        <path d="M1.5 7.5 L8 1.5 L14.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="mt-1.5 h-px w-3.5 bg-[oklch(0.5_0.02_85/0.4)]" />
      <div className="relative mt-1 h-[34vh] w-[2px] overflow-hidden rounded-full bg-[oklch(0.5_0.02_85/0.22)]">
        <div className="absolute inset-0 origin-top rounded-full bg-secondary" style={{ transform: `scaleY(${progress})`, willChange: "transform" }} />
      </div>
      <div className="mt-1 h-px w-3 bg-[oklch(0.5_0.02_85/0.4)]" />
      <div className="mt-1 h-px w-4 bg-[oklch(0.5_0.02_85/0.4)]" />
    </div>
  );
}
