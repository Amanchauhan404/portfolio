import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  /** Translation strength divisor (higher = subtler shift). */
  strength?: number;
  /** Max rotation (deg) for the "look at cursor" tilt. */
  tilt?: number;
  /** Max translation in pixels for the magnet pull. */
  maxTranslate?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: CSSProperties;
}

/** Magnet — global cursor/touch-following 3D tilt effect. */
export function Magnet({
  children,
  strength = 12,
  tilt = 14,
  maxTranslate = 40,
  activeTransition = "transform 0.25s ease-out",
  inactiveTransition = "transform 0.45s ease-out",
  className,
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let raf = 0;
    const applyTransform = (x: number, y: number, z: number, rx: number, ry: number) => {
      const el = ref.current;
      if (!el) return;
      el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };

    const moveTo = (clientX: number, clientY: number) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = clientX - cx;
        const dy = clientY - cy;

        // Normalize against viewport diagonal for a global "look at" feel
        const nx = dx / (window.innerWidth / 2);
        const ny = dy / (window.innerHeight / 2);

        const tx = Math.max(-maxTranslate, Math.min(maxTranslate, dx / strength));
        const ty = Math.max(-maxTranslate, Math.min(maxTranslate, dy / strength));

        const ry = Math.max(-tilt, Math.min(tilt, nx * tilt * 1.25));
        const rx = Math.max(-tilt, Math.min(tilt, -ny * tilt * 1.25));
        const distance = Math.hypot(dx, dy);
        const z = Math.max(0, 24 - distance / 28);

        el.style.transition = activeTransition;
        applyTransform(tx, ty, z, rx, ry);
      });
    };

    const onPointerMove = (e: PointerEvent) => moveTo(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) moveTo(touch.clientX, touch.clientY);
    };

    const onLeave = () => {
      const el = ref.current;
      if (!el) return;
      el.style.transition = inactiveTransition;
      applyTransform(0, 0, 0, 0, 0);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("pointercancel", onLeave);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("pointercancel", onLeave);
      window.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [activeTransition, inactiveTransition, strength, tilt, maxTranslate]);

  return (
    <div
      ref={ref}
      data-magnet="true"
      className={className}
      style={{
        ...style,
        perspective: 1000,
        transformStyle: "preserve-3d",
        transformOrigin: "50% 36%",
        transform: "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)",
        transition: inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
