import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const CERTIFICATES = [
  {
    number: "01",
    name: "Data Analyst 101",
    issuer: "Certified Course Completion",
    date: "7th May 2026",
    code: "10200252",
    file: "/certificates/data-analyst-101.pdf",
    skills: ["Data Analysis", "SQL", "Python", "Visualization"],
  },
];

export function CertificatesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="certificates"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: "#0C0C0C", color: "#D7E2EA" }}
    >
      <FadeIn y={30}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
            lineHeight: 1,
            background: "linear-gradient(180deg, #646973 0%, #BBCCD7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Certificates
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {CERTIFICATES.map((cert, i) => (
          <FadeIn key={cert.number} delay={i * 0.12} y={30}>
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div
                className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12 transition-colors duration-300"
                style={{
                  borderTop:
                    i === 0 ? "1px solid rgba(215, 226, 234, 0.15)" : "none",
                  borderBottom: "1px solid rgba(215, 226, 234, 0.15)",
                }}
              >
                {/* Number */}
                <div
                  className="font-black leading-none shrink-0 transition-all duration-300"
                  style={{
                    fontSize: "clamp(3rem, 10vw, 140px)",
                    background:
                      hoveredIdx === i
                        ? "linear-gradient(135deg, #a855f7, #ec4899)"
                        : "linear-gradient(180deg, #646973 0%, #BBCCD7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {cert.number}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 sm:gap-4 pt-1 sm:pt-2 min-w-0 flex-1">
                  <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                    {/* Certificate icon */}
                    <div
                      className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.2))",
                        border: "1px solid rgba(168,85,247,0.3)",
                      }}
                    >
                      <svg
                        className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ color: "#a855f7" }}
                      >
                        <path d="M4 4h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z" />
                        <path d="M4 4l8 6 8-6" />
                        <circle cx="9" cy="20" r="2" />
                        <circle cx="15" cy="20" r="2" />
                        <path d="M9 18v-2" />
                        <path d="M15 18v-2" />
                      </svg>
                    </div>

                    <h3
                      className="font-medium uppercase leading-tight"
                      style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                    >
                      {cert.name}
                    </h3>
                  </div>

                  <p
                    className="font-light leading-relaxed max-w-2xl"
                    style={{
                      fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                      opacity: 0.6,
                    }}
                  >
                    {cert.issuer} &middot; {cert.date} &middot; Code:{" "}
                    {cert.code}
                  </p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2 mt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs sm:text-sm font-light uppercase tracking-wider"
                        style={{
                          background: "rgba(168, 85, 247, 0.1)",
                          border: "1px solid rgba(168, 85, 247, 0.25)",
                          color: "#BBCCD7",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View button */}
                  <AnimatePresence>
                    {hoveredIdx === i && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25 }}
                        className="mt-2"
                      >
                        <span
                          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider"
                          style={{
                            background:
                              "linear-gradient(135deg, #a855f7, #ec4899)",
                            color: "#fff",
                          }}
                        >
                          View Certificate
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 17L17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
