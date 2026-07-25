import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { SparklesText } from "./SparklesText";

const Spline = lazy(() => import("@splinetool/react-spline"));

export function IntroVisual() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sceneActive, setSceneActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(([entry]) => setSceneActive(entry.isIntersecting), {
      rootMargin: "240px 0px",
    });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new MutationObserver(() => {
      const all = container.querySelectorAll<HTMLElement>("*");
      all.forEach((el) => {
        const text = (el.textContent || "").toLowerCase();
        const href = (el.getAttribute("href") || "").toLowerCase();
        const cls = (el.className || "").toString().toLowerCase();
        const id = (el.id || "").toLowerCase();
        if (
          text.includes("spline") ||
          text.includes("built with") ||
          href.includes("spline") ||
          cls.includes("spline") ||
          cls.includes("watermark") ||
          id.includes("spline") ||
          id.includes("watermark")
        ) {
          el.remove();
        }
      });
    });

    observer.observe(container, { childList: true, subtree: true });

    const tid = setTimeout(() => {
      const all = container.querySelectorAll<HTMLElement>("*");
      all.forEach((el) => {
        const text = (el.textContent || "").toLowerCase();
        if (text.includes("spline")) el.remove();
      });
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(tid);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[92vh] min-h-[560px] items-center justify-center overflow-hidden bg-deep pt-20"
    >
      <div ref={containerRef} className="pointer-events-none absolute -inset-16" aria-hidden="true">
        <Suspense fallback={null}>
          {sceneActive && (
            <Spline scene="https://prod.spline.design/fOb2GopS8JYpKfQm/scene.splinecode" />
          )}
        </Suspense>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-deep/20" />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <SparklesText text="STRATEGA" />
      </div>
    </section>
  );
}
