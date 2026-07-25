import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
}

export function FerrofluidBackground({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const blobCount = reduced ? 4 : Math.min(8, Math.floor(width / 180));
    const blobs: Blob[] = Array.from({ length: blobCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 60 + 80,
      hue: Math.random() * 20 + 75,
    }));

    let frameId: number | null = null;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < b.r * 0.3) b.vx = Math.abs(b.vx);
        if (b.x > width - b.r * 0.3) b.vx = -Math.abs(b.vx);
        if (b.y < b.r * 0.3) b.vy = Math.abs(b.vy);
        if (b.y > height - b.r * 0.3) b.vy = -Math.abs(b.vy);

        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const dx = b.x - mx;
        const dy = b.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          b.vx += (dx / dist) * force * 0.08;
          b.vy += (dy / dist) * force * 0.08;
        }

        b.vx *= 0.992;
        b.vy *= 0.992;

        if (Math.abs(b.vx) < 0.1) b.vx += (Math.random() - 0.5) * 0.06;
        if (Math.abs(b.vy) < 0.1) b.vy += (Math.random() - 0.5) * 0.06;
      }

      for (const b of blobs) {
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        const h = b.hue;
        grad.addColorStop(0, `hsla(${h}, 72%, 62%, 0.55)`);
        grad.addColorStop(0.4, `hsla(${h - 8}, 65%, 45%, 0.28)`);
        grad.addColorStop(1, `hsla(${h}, 70%, 55%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      frameId = requestAnimationFrame(draw);
    };

    if (!reduced) draw();
    else {
      for (const b of blobs) {
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, `hsla(${b.hue}, 62%, 58%, 0.3)`);
        grad.addColorStop(1, `hsla(${b.hue}, 60%, 50%, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}