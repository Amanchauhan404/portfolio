import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let raf = 0;
    let isHovering = false;

    const onMove = (e: MouseEvent) => {
      dot.x = e.clientX;
      dot.y = e.clientY;
    };

    const tick = () => {
      ring.x += (dot.x - ring.x) * 0.12;
      ring.y += (dot.y - ring.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }

      const el = document.elementFromPoint(dot.x, dot.y) as HTMLElement | null;
      if (el) {
        const interactive = !!(
          el.closest("a, button, [role='button'], input, textarea, select, label") ||
          ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "LABEL"].includes(el.tagName)
        );
        if (interactive !== isHovering) {
          isHovering = interactive;
          if (ringRef.current) {
            if (interactive) {
              ringRef.current.classList.add("cursor-ring-hover");
            } else {
              ringRef.current.classList.remove("cursor-ring-hover");
            }
          }
        }
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[#d7e2ea] mix-blend-difference will-change-transform"
        style={{ transform: "translate3d(-50%, -50%, 0) translate(-50%, -50%)" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border border-[#d7e2ea]/50 mix-blend-difference will-change-transform transition-[width,height,border-color,background-color] duration-300 ease-out"
        style={{ transform: "translate3d(-50%, -50%, 0) translate(-50%, -50%)" }}
      />
    </>
  );
}
