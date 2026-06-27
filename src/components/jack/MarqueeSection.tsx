import { useEffect, useRef, useState } from "react";

type Pill = { label: string; icon: string };

const ICON = (n: string) => `/icons/${n}.png`;

const ROW_1: Pill[] = [
  { label: "SQL", icon: ICON("database") },
  { label: "Python", icon: ICON("python") },
  { label: "Power BI", icon: ICON("power-bi") },
  { label: "Excel", icon: ICON("excel") },
  { label: "Tableau", icon: ICON("tableau") },
  { label: "Pandas", icon: ICON("pandas") },
  { label: "NumPy", icon: ICON("numpy") },
  { label: "ETL", icon: ICON("etl") },
  { label: "Dashboards", icon: ICON("dashboard") },
];

const ROW_2: Pill[] = [
  { label: "A/B Testing", icon: ICON("ab-testing") },
  { label: "Forecasting", icon: ICON("forecasting") },
  { label: "Statistics", icon: ICON("statistics") },
  { label: "Sheets", icon: ICON("sheets") },
  { label: "BigQuery", icon: ICON("bigquery") },
  { label: "Workflows", icon: ICON("workflow") },
  { label: "KPIs", icon: ICON("kpi") },
  { label: "Data Cleaning", icon: ICON("cleaning") },
  { label: "Storytelling", icon: ICON("storytelling") },
];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.35;
      setOffset(raw - 300);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20"
      style={{ overflowX: "clip" }}
    >
      <div className="text-center mb-10 sm:mb-14 md:mb-16 px-5">
        <p className="text-[#D7E2EA]/50 uppercase tracking-[0.35em] text-[0.7rem] sm:text-xs md:text-sm">
          The toolkit · the craft · the data
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:gap-5">
        <MarqueeRow pills={ROW_1} translateX={offset} />
        <MarqueeRow pills={ROW_2} translateX={-offset} />
      </div>
    </section>
  );
}

function MarqueeRow({
  pills,
  translateX,
}: {
  pills: Pill[];
  translateX: number;
}) {
  const tripled = [...pills, ...pills, ...pills];
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex gap-3 sm:gap-4"
        style={{
          transform: `translateX(${translateX}px)`,
          willChange: "transform",
        }}
      >
        {tripled.map((p, i) => (
          <div
            key={i}
            className="shrink-0 flex items-center gap-3 sm:gap-4 px-5 sm:px-7 md:px-8 py-3 sm:py-4 rounded-full border border-[#D7E2EA]/15 bg-gradient-to-b from-[#D7E2EA]/[0.06] to-transparent backdrop-blur-sm"
          >
            <img
              src={p.icon}
              alt={`${p.label} 3D icon`}
              loading="lazy"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 shrink-0 drop-shadow-[0_6px_18px_rgba(0,0,0,0.4)]"
              onError={(e) => {
                e.currentTarget.src = "/icons/database.png";
              }}
            />
            <span
              className="text-[#D7E2EA] font-medium uppercase tracking-wider whitespace-nowrap"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.6rem)" }}
            >
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
