import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { SkillsSection } from "@/components/jack/SkillsSection";
import { CertificatesSection } from "@/components/jack/CertificatesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { ContactSection } from "@/components/jack/ContactSection";
import { SectionReveal } from "@/components/jack/SectionReveal";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhay Sengar — Data Analyst" },
      {
        name: "description",
        content:
          "Abhay Sengar — aspiring data analyst skilled in SQL, Python, Power BI and Excel. Turning raw data into decisions.",
      },
      { property: "og:title", content: "Abhay Sengar — Data Analyst" },
      {
        property: "og:description",
        content:
          "Portfolio of Abhay Sengar — SQL, Python, Power BI and Tableau projects that turn data into decisions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative snap-y snap-proximity">
      <SectionReveal snap={false}>
        <HeroSection />
      </SectionReveal>
      <SectionReveal>
        <MarqueeSection />
      </SectionReveal>
      <SectionReveal>
        <AboutSection />
      </SectionReveal>
      <SectionReveal>
        <SkillsSection />
      </SectionReveal>
      <SectionReveal>
        <CertificatesSection />
      </SectionReveal>
      {/* No snap on Projects — pinned sticky stack needs free scroll */}
      <SectionReveal snap={false}>
        <ProjectsSection />
      </SectionReveal>
      <SectionReveal>
        <ContactSection />
      </SectionReveal>
    </main>
  );
}
