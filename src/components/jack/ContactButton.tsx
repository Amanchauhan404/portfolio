import { Link } from "@tanstack/react-router";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  href?: string;
  icon?: ReactNode | false;
  target?: string;
  rel?: string;
};

type Props = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>;

const SHARED_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-200 hover:scale-[1.03] jelly-click cursor-pointer";

const SHARED_STYLE: React.CSSProperties = {
  background:
    "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
  boxShadow:
    "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
  outline: "2px solid #ffffff",
  outlineOffset: "-3px",
};

export function ContactButton({
  className = "",
  style,
  children,
  href = "/contact",
  icon,
  target,
  rel,
  ...rest
}: Props) {
  const content = (
    <>
      {icon !== false &&
        (icon ?? (
          <img
            src="/icons/mail.png"
            alt=""
            className="size-5 sm:size-6 shrink-0 drop-shadow-[0_4px_10px_rgba(0,0,0,0.28)]"
          />
        ))}
      <span>{children ?? "Contact Me"}</span>
    </>
  );
  const finalClass = `${SHARED_CLASS} ${className}`;
  const finalStyle = { ...SHARED_STYLE, ...style };

  const isInternal = href && href.startsWith("/");

  if (isInternal) {
    return (
      <Link
        to={href}
        className={finalClass}
        style={finalStyle}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={finalClass}
        style={finalStyle}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }
  return (
    <button className={finalClass} style={finalStyle} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
