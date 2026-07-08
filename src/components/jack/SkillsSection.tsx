import { FadeIn } from "./FadeIn";

const SKILLS = [
  {
    number: "01",
    name: "SQL & Databases",
    desc: "Writing complex joins, window functions, CTEs and query-tuning across PostgreSQL and MySQL to pull exactly the data the business question needs.",
    icons: ["/icons/database.png"],
  },
  {
    number: "02",
    name: "Python for Analytics",
    desc: "Cleaning, transforming and analyzing data with Pandas and NumPy, plus visual exploration with Matplotlib and Seaborn to surface patterns fast.",
    icons: ["/icons/python.png"],
  },
  {
    number: "03",
    name: "Power BI & Tableau",
    desc: "Designing interactive dashboards with clear KPIs, drill-throughs and DAX measures that turn raw tables into decisions executives can act on.",
    icons: ["/icons/power-bi.png", "/icons/tableau.png"],
  },
  {
    number: "04",
    name: "Excel & Google Sheets",
    desc: "Advanced formulas, pivot tables, Power Query and lookups for rapid analysis, reporting and reusable spreadsheet models.",
    icons: ["/icons/excel.png", "/icons/sheets.png"],
  },
  {
    number: "05",
    name: "Statistics & Storytelling",
    desc: "Descriptive and inferential statistics, A/B testing intuition, and translating findings into a narrative stakeholders actually remember.",
    icons: ["/icons/statistics.png"],
  },
];

import { useRef } from "react";
import { useInView } from "framer-motion";

function SkillCard({ s, i }: { s: typeof SKILLS[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <FadeIn delay={i * 0.1} y={30}>
      <div
        ref={ref}
        className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12 group transition-all duration-300 hover:bg-gray-50/50"
        style={{
          borderTop: i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : "none",
          borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
        }}
      >
        <div
          className={`font-black leading-none shrink-0 transition-all duration-300 bg-clip-text text-transparent group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 ${
            isInView ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-[#0C0C0C]"
          }`}
          style={{
            fontSize: "clamp(3rem, 10vw, 140px)",
          }}
        >
          {s.number}
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 pt-1 sm:pt-2 min-w-0 flex-1">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex -space-x-3 sm:-space-x-4 shrink-0">
              {s.icons.map((icon) => (
                <img
                  key={icon}
                  src={icon}
                  alt={`${s.name} 3D icon`}
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/icons/database.png";
                  }}
                />
              ))}
            </div>
            <h3
              className="font-medium uppercase leading-tight"
              style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
            >
              {s.name}
            </h3>
          </div>
          <p
            className="font-light leading-relaxed max-w-2xl"
            style={{
              fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
              opacity: 0.6,
            }}
          >
            {s.desc}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: "#FFFFFF", color: "#0C0C0C" }}
    >
      <FadeIn y={30}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SKILLS.map((s, i) => (
          <SkillCard key={s.number} s={s} i={i} />
        ))}
      </div>
    </section>
  );
}
