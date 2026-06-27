import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  // Split by spaces but keep them; wrap each word in a non-breaking inline-block
  // so words never break across lines.
  const words = text.split(/(\s+)/);
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        if (/^\s+$/.test(word)) {
          charIndex += word.length;
          return <span key={`s-${wi}`}>{"\u00A0"}</span>;
        }
        const startIdx = charIndex;
        charIndex += word.length;
        return (
          <span
            key={`w-${wi}`}
            className="inline-block whitespace-nowrap align-baseline"
          >
            {word.split("").map((ch, ci) => {
              const i = startIdx + ci;
              const start = i / totalChars;
              const end = (i + 1) / totalChars;
              return (
                <Char
                  key={ci}
                  char={ch}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
}

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span
        aria-hidden="true"
        style={{ opacity }}
        className="absolute inset-0"
      >
        {char}
      </motion.span>
    </span>
  );
}
