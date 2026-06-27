import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";

type Project = {
  number: string;
  category: string;
  name: string;
  col1a: string;
  col1b: string;
  col2: string;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "Power BI · SQL",
    name: "Retail Sales Dashboard",
    col1a:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1280&q=80",
    col1b:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1280&q=80",
    col2:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1280&q=80",
  },
  {
    number: "02",
    category: "Python · Pandas",
    name: "Customer Churn Analysis",
    col1a:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1280&q=80",
    col1b:
      "https://images.unsplash.com/photo-1551288049-1f47b67e3a17?auto=format&fit=crop&w=1280&q=80",
    col2:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1280&q=80",
  },
  {
    number: "03",
    category: "SQL · Tableau",
    name: "E-commerce Funnel Insights",
    col1a:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1280&q=80",
    col1b:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1280&q=80",
    col2:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1280&q=80",
  },
];


export function ProjectsSection() {
  const stackRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-28"
      
    >
      <FadeIn y={30}>
        <h2
          className="hero-heading font-black uppercase tracking-tight leading-none text-center px-6 mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>

      <div
        ref={stackRef}
        className="relative"
        style={{ height: `${PROJECTS.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
  progress,
}: {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}) {
  const segment = 1 / Math.max(totalCards - 1, 1);
  const start = Math.max(0, (index - 1) * segment);
  const end = index * segment;
  const y = useTransform(
    progress,
    index === 0 ? [0, 1] : [start, end],
    index === 0 ? ["0vh", "0vh"] : ["110vh", "0vh"],
    { clamp: true }
  );

  return (
      <motion.div
      className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12 py-10 sm:py-12 md:py-14"
      style={{ y, zIndex: 20 + index }}
    >
        <div
          className="w-full max-w-5xl rounded-[28px] sm:rounded-[38px] md:rounded-[48px] border-2 p-4 sm:p-5 md:p-6 shadow-[0_30px_90px_rgba(0,0,0,0.72)]"
          style={{
            backgroundColor: "#0C0C0C",
            borderColor: "#D7E2EA",
          }}
        >
          {/* Top row */}
          <div className="flex items-center justify-between gap-4 flex-wrap mb-4 sm:mb-5 md:mb-6">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 min-w-0">
              <div
                className="font-black leading-none shrink-0 hero-heading"
                style={{ fontSize: "clamp(2rem, 5.5vw, 90px)" }}
              >
                {project.number}
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 min-w-0">
                <span
                  className="text-[#D7E2EA] uppercase font-light tracking-widest opacity-60"
                  style={{ fontSize: "clamp(0.7rem, 1vw, 0.95rem)" }}
                >
                  {project.category}
                </span>
                <h3
                  className="text-[#D7E2EA] font-medium uppercase leading-tight truncate"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2rem)" }}
                >
                  {project.name}
                </h3>
              </div>
            </div>
            <LiveProjectButton />
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-5">
            <div className="col-span-2 flex flex-col gap-3 sm:gap-4 md:gap-6">
              <img
                src={project.col1a}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full object-cover rounded-[24px] sm:rounded-[34px] md:rounded-[44px]"
                style={{ height: "clamp(90px, 11vh, 150px)" }}
              />
              <img
                src={project.col1b}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full object-cover rounded-[24px] sm:rounded-[34px] md:rounded-[44px]"
                style={{ height: "clamp(110px, 18vh, 220px)" }}
              />
            </div>
            <div className="col-span-3">
              <img
                src={project.col2}
                alt={`${project.name} hero`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[24px] sm:rounded-[34px] md:rounded-[44px]"
              />
            </div>
          </div>
        </div>
    </motion.div>
  );
}
