import { MapPin, ArrowUpRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { ContactButton } from "./ContactButton";

const EMAIL = "abhay.sengar934@gmail.com";
const PHONE_DISPLAY = "+91 89598 65468";
const PHONE_TEL = "+918959865468";
const LOCATION = "Gwalior, M.P. — 474005";
const LINKEDIN = "https://www.linkedin.com/in/abhaysengar";
const GITHUB = "https://github.com/abhaysengar";

// mailto: opens the visitor's default mail client/app (Outlook, Apple Mail, Gmail web if set as default, etc.)
const MAIL_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Hi Abhay — Data Analyst opportunity",
)}`;

const ICON_3D = {
  gmail: "/icons/gmail.png",
  phone: "/icons/phone.png",
  linkedin: "/icons/linkedin.png",
  github: "/icons/github.png",
};

const SOCIALS = [
  {
    label: "Email",
    value: EMAIL,
    href: MAIL_HREF,
    icon: ICON_3D.gmail,
    external: false,
  },
  {
    label: "Phone",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    icon: ICON_3D.phone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abhaysengar",
    href: LINKEDIN,
    icon: ICON_3D.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/abhaysengar",
    href: GITHUB,
    icon: ICON_3D.github,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden"
      
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn y={30}>
          <p
            className="text-[#D7E2EA]/60 uppercase tracking-[0.3em] text-center"
            style={{ fontSize: "clamp(0.7rem, 1vw, 0.95rem)" }}
          >
            Let&apos;s work together
          </p>
        </FadeIn>

        <FadeIn delay={0.05} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-[0.95] tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 14vw, 220px)" }}
          >
            Get in
            <br />
            touch
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <a
            href={MAIL_HREF}
            className="inline-flex flex-wrap items-center justify-center gap-3 text-[#D7E2EA] font-medium underline underline-offset-8 decoration-[#D7E2EA]/30 hover:decoration-[#D7E2EA] transition-all break-all text-center"
            style={{ fontSize: "clamp(1rem, 2.4vw, 1.75rem)" }}
          >
            <img
              src={ICON_3D.gmail}
              alt=""
              className="w-7 h-7 sm:w-9 sm:h-9 shrink-0"
              loading="eager"
            />
            <span>{EMAIL}</span>
          </a>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ContactButton href={MAIL_HREF}>Email Me</ContactButton>
        </FadeIn>

        {/* Info grid with 3D icons */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-10 sm:pt-14 md:pt-20 border-t border-[#D7E2EA]/15">
          {SOCIALS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.08} y={20}>
              <a
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col gap-3 rounded-2xl border border-[#D7E2EA]/15 p-4 sm:p-5 hover:border-[#D7E2EA]/50 hover:bg-[#D7E2EA]/5 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <img
                    src={s.icon}
                    alt={`${s.label} 3D icon`}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-[0_8px_24px_rgba(215,226,234,0.15)] transition-transform group-hover:scale-110"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.src = "/icons/mail.png";
                    }}
                  />
                  <ArrowUpRight className="size-4 sm:size-5 text-[#D7E2EA]/40 group-hover:text-[#D7E2EA] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-[0.65rem] sm:text-xs">
                    {s.label}
                  </span>
                  <span className="text-[#D7E2EA] font-medium text-sm sm:text-base break-all">
                    {s.value}
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 sm:pt-12 text-[#D7E2EA]/50 uppercase tracking-widest text-xs">
          <span>© 2026 Abhay Sengar</span>
          <span className="flex items-center gap-2">
            <MapPin className="size-3.5" strokeWidth={2} />
            {LOCATION}
          </span>
        </div>
      </div>
    </section>
  );
}
