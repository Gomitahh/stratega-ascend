import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  as: As = "div",
  delay = 0,
  /** Distancia de entrada en px. Ítems de listas/grids usan valores más
   * cortos (12-16px) para un "peso institucional" más contenido que el
   * reveal genérico (24px) de titulares y bloques sueltos. */
  distance,
  /** Duración en ms. Listas usan un pelín más de tiempo que el default
   * (900ms) para reforzar la sensación de peso/seguridad, no de prisa. */
  duration,
  className = "",
}: {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  distance?: number;
  duration?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const Comp = As as React.ElementType;
  const style: CSSProperties & Record<string, string> = { transitionDelay: `${delay}ms` };
  if (distance !== undefined) style["--reveal-distance"] = `${distance}px`;
  if (duration !== undefined) style["--reveal-duration"] = `${duration}ms`;
  return (
    <Comp ref={ref} style={style} className={`reveal ${shown ? "reveal-in" : ""} ${className}`}>
      {children}
    </Comp>
  );
}
