import { Link } from "@tanstack/react-router";
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "/contact", isRoute: true },
];

const PORTRAIT_URL =
  "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex flex-col" style={{ overflowX: "clip" }}>
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="relative z-20">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </FadeIn>

      {/* Heading — sits behind the portrait */}
      <div className="absolute left-0 right-0 top-[17vh] sm:top-[12vh] md:top-[7vh] z-10 overflow-hidden pointer-events-none">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading font-black uppercase leading-none whitespace-nowrap w-full px-5 sm:px-6 md:px-10 text-center"
            style={{ fontSize: "clamp(2.25rem, 9.4vw, 142px)", letterSpacing: 0 }}
          >
            Hi, i&apos;m abhay
          </h1>
        </FadeIn>
      </div>

      {/* Portrait — absolutely centered, in front of heading */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30 bottom-[13vh] sm:bottom-[6vh] md:bottom-[2vh] w-[min(66vw,270px)] sm:w-[330px] md:w-[400px] lg:w-[450px] pointer-events-none touch-none">
        <FadeIn delay={0.6} y={30}>
          <Magnet strength={11} tilt={22} maxTranslate={44}>
            <div className="relative">
              <div className="absolute left-1/2 top-[8%] -z-10 h-[72%] w-[86%] -translate-x-1/2 rounded-full bg-[#0C0C0C]/95 blur-xl" />
              <img
                src={PORTRAIT_URL}
                alt="Abhay Sengar portrait"
                className="relative z-10 w-full h-auto select-none pointer-events-auto drop-shadow-[0_24px_70px_rgba(0,0,0,0.72)]"
                draggable={false}
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      <div className="mt-auto" />

      {/* Bottom bar */}
      <div className="relative z-20 flex items-end justify-between gap-4 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[220px] sm:max-w-[260px] md:max-w-[320px]"
            style={{ fontSize: "clamp(0.7rem, 1.3vw, 1.4rem)" }}

          >
            data analyst turning raw data into decisions that move the business
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
