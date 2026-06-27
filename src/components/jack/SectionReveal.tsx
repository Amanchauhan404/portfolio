import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  snap?: boolean;
};

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  y = 40,
  snap = true,
}: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={snap ? { scrollSnapAlign: "start" } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
