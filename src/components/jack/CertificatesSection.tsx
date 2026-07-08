import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";

// @ts-ignore - Vite will bundle this as a static asset URL
import certPdf from "../../assets/certificates/data-analyst-101.pdf";

const CERTIFICATES = [
  {
    number: "01",
    name: "Data Analyst 101",
    issuer: "Certified Course Completion",
    date: "7th May 2026",
    code: "10200252",
    file: certPdf,
    icon: "/icons/statistics.png",
    skills: ["Data Analysis", "SQL", "Python", "Visualization"],
  },
];

export function CertificatesSection() {
  const [viewingIdx, setViewingIdx] = useState<number | null>(null);

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
            <div className="group">
              <div
                className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
                style={{
                  borderTop:
                    i === 0
                      ? "1px solid rgba(215, 226, 234, 0.15)"
                      : "none",
                  borderBottom: "1px solid rgba(215, 226, 234, 0.15)",
                }}
              >
                {/* Number */}
                <div
                  className="font-black leading-none shrink-0 transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-b from-[#646973] to-[#BBCCD7] group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500"
                  style={{
                    fontSize: "clamp(3rem, 10vw, 140px)",
                  }}
                >
                  {cert.number}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 sm:gap-4 pt-1 sm:pt-2 min-w-0 flex-1">
                  <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                    {/* 3D Icon — matching site style */}
                    <img
                      src={cert.icon}
                      alt={`${cert.name} icon`}
                      className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
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

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-3 mt-3">
                    <button
                      onClick={() =>
                        setViewingIdx(viewingIdx === i ? null : i)
                      }
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer hover:scale-105"
                      style={{
                        background:
                          viewingIdx === i
                            ? "linear-gradient(135deg, #ec4899, #a855f7)"
                            : "linear-gradient(135deg, #a855f7, #ec4899)",
                        color: "#fff",
                      }}
                    >
                      {viewingIdx === i ? "Hide" : "View"} Certificate
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          transform:
                            viewingIdx === i
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.3s",
                        }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    <a
                      href={cert.file}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105"
                      style={{
                        background: "rgba(215, 226, 234, 0.08)",
                        border: "1px solid rgba(215, 226, 234, 0.2)",
                        color: "#D7E2EA",
                      }}
                    >
                      Download PDF
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Inline PDF Viewer */}
              <AnimatePresence>
                {viewingIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className="mt-6 rounded-2xl overflow-hidden"
                      style={{
                        border: "1px solid rgba(168, 85, 247, 0.25)",
                        background: "rgba(255,255,255,0.03)",
                      }}
                    >
                      <iframe
                        src={`${cert.file}#toolbar=1&navpanes=0&scrollbar=1`}
                        title={cert.name}
                        className="w-full rounded-2xl"
                        style={{
                          height: "min(80vh, 700px)",
                          border: "none",
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
