import { GraduationCap, Award, Sparkles } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";

const DECOR = {
  moon: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
  obj: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
  lego: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
  group:
    "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
};

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science",
    school: "RGPV, Bhopal",
    year: "2026",
    result: "Completed",
  },
  {
    degree: "Class 12th",
    school: "M.P. Board",
    year: "",
    result: "71%",
  },
  {
    degree: "Class 10th",
    school: "M.P. Board",
    year: "",
    result: "71%",
  },
];

const CERTS = [
  "Google Data Analytics — Coursera",
  "SQL for Data Science — IBM",
  "Power BI Data Analyst — Microsoft",
  "Python for Data Analysis — DataCamp",
];


export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* Decorative corners */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none"
      >
        <img
          src={DECOR.moon}
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px]"
          loading="lazy"
        />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none"
      >
        <img
          src={DECOR.obj}
          alt=""
          className="w-[100px] sm:w-[140px] md:w-[180px]"
          loading="lazy"
        />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none"
      >
        <img
          src={DECOR.lego}
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px]"
          loading="lazy"
        />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none"
      >
        <img
          src={DECOR.group}
          alt=""
          className="w-[130px] sm:w-[170px] md:w-[220px]"
          loading="lazy"
        />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24 w-full">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 w-full">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text="I'm Abhay Sengar — a Computer Science graduate and aspiring data analyst who turns messy datasets into clear, actionable insight. I work fluently with SQL, Python, Excel and Power BI to clean data, model it, and tell the story behind the numbers so teams can move faster and decide better."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[640px]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />

          {/* Education + Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl pt-4">
            <FadeIn delay={0.1} y={30}>
              <div className="rounded-3xl border border-[#D7E2EA]/20 p-6 md:p-8 h-full">
                <h3 className="text-[#D7E2EA] uppercase tracking-widest text-xs md:text-sm opacity-60 mb-5 flex items-center gap-2">
                  <GraduationCap className="size-4" strokeWidth={2} />
                  Education
                </h3>
                <ul className="flex flex-col gap-5">
                  {EDUCATION.map((e) => (
                    <li
                      key={e.degree}
                      className="flex flex-col gap-1 pb-4 border-b border-[#D7E2EA]/10 last:border-b-0 last:pb-0"
                    >
                      <span className="text-[#D7E2EA] font-medium text-base md:text-lg">
                        {e.degree}
                      </span>
                      <span className="text-[#D7E2EA]/70 text-sm md:text-base">
                        {e.school}
                      </span>
                      <div className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-wider">
                        {e.year && (
                          <span className="text-[#D7E2EA]/50">{e.year}</span>
                        )}
                        <span className="text-[#D7E2EA]/80 font-medium">
                          {e.result}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

              </div>
            </FadeIn>
            <FadeIn delay={0.2} y={30}>
              <div className="rounded-3xl border border-[#D7E2EA]/20 p-6 md:p-8 h-full">
                <h3 className="text-[#D7E2EA] uppercase tracking-widest text-xs md:text-sm opacity-60 mb-5 flex items-center gap-2">
                  <Award className="size-4" strokeWidth={2} />
                  Certifications
                </h3>
                <ul className="flex flex-col gap-3">
                  {CERTS.map((c) => (
                    <li
                      key={c}
                      className="text-[#D7E2EA] text-sm md:text-base font-light flex gap-3"
                    >
                      <Sparkles className="size-4 mt-1 shrink-0 text-[#D7E2EA]/50" strokeWidth={2} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.1}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
