import { useEffect, useRef, useCallback } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  angle: number;
}

export function SparklesText({
  text = "STRATEGA",
  className = "",
}: {
  text?: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Sparkle[]>([]);
  const frameRef = useRef(0);

  const initParticles = useCallback((w: number, h: number) => {
    const count = 40;
    const arr: Sparkle[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        id: i,
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 3 + 1,
        opacity: Math.random(),
        speed: Math.random() * 0.3 + 0.1,
        angle: Math.random() * Math.PI * 2,
      });
    }
    particlesRef.current = arr;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(w, h);
    };
    resize();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particlesRef.current) {
        if (!reduced) {
          p.x += Math.cos(p.angle) * p.speed;
          p.y += Math.sin(p.angle) * p.speed;
          p.opacity += (Math.random() - 0.5) * 0.05;
          p.opacity = Math.max(0.1, Math.min(1, p.opacity));

          if (p.x < -10) p.x = w + 10;
          if (p.x > w + 10) p.x = -10;
          if (p.y < -10) p.y = h + 10;
          if (p.y > h + 10) p.y = -10;
        }

        const alpha = reduced ? 0.5 + Math.random() * 0.5 : p.opacity;
        ctx.fillStyle = `hsla(43, 80%, 65%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // glow on bigger ones
        if (p.size > 2) {
          ctx.fillStyle = `hsla(43, 90%, 75%, ${alpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      frameRef.current = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [initParticles]);

  return (
    <div className={`relative inline-block ${className}`}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />
      <span className="relative z-10 font-display text-[clamp(3rem,10vw,7rem)] font-bold tracking-[-0.03em] text-white drop-shadow-lg"
        style={{
          background: "linear-gradient(135deg, #d4a843 0%, #f0d78c 50%, #c9953a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textShadow: "0 0 40px rgba(212,168,67,0.3)",
        }}
      >
        {text}
      </span>
    </div>
  );
}