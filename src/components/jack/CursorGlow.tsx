import { useEffect, useRef } from "react";

/**
 * Subtle cursor-tracking background glow.
 * - position: fixed, pointer-events: none, behind all content
 * - very low opacity warm + cool orbs that lerp toward the cursor
 * - idle drift so it never sits still
 */
export function CursorGlow() {
  const warmRef = useRef<HTMLDivElement>(null);
  const coolRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    const target = { x: w / 2, y: h / 2 };
    const warm = { x: w / 2, y: h / 2 };
    const cool = { x: w / 2, y: h / 2 };
    let raf = 0;
    let t = 0;

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
    };
    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const tick = () => {
      t += 0.005;
      // idle drift so it breathes
      const driftX = Math.sin(t) * 60;
      const driftY = Math.cos(t * 0.8) * 40;

      warm.x += (target.x + driftX - warm.x) * 0.06;
      warm.y += (target.y + driftY - warm.y) * 0.06;
      cool.x += (target.x - driftX - cool.x) * 0.03;
      cool.y += (target.y - driftY - cool.y) * 0.03;

      if (warmRef.current) {
        warmRef.current.style.transform = `translate3d(${warm.x - 300}px, ${warm.y - 300}px, 0)`;
      }
      if (coolRef.current) {
        coolRef.current.style.transform = `translate3d(${cool.x - 400}px, ${cool.y - 400}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ contain: "strict" }}
    >
      <div
        ref={warmRef}
        className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(255,170,90,0.18) 0%, rgba(255,170,90,0.06) 35%, rgba(255,170,90,0) 70%)",
          filter: "blur(40px)",
          mixBlendMode: "screen",
        }}
      />
      <div
        ref={coolRef}
        className="absolute left-0 top-0 h-[800px] w-[800px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(120,170,255,0.14) 0%, rgba(120,170,255,0.05) 35%, rgba(120,170,255,0) 70%)",
          filter: "blur(60px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
