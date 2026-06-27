import { Link, useRouterState } from "@tanstack/react-router";

const NAV_ITEMS = [
  { label: "About", to: "/" as const, hash: "about" as const },
  { label: "Skills", to: "/" as const, hash: "skills" as const },
  { label: "Projects", to: "/" as const, hash: "projects" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
      <Link
        to="/"
        className="text-[#D7E2EA] font-bold uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
      >
        Abhay
      </Link>
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.to;
          return (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className={`text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 ${
                isActive ? "opacity-100" : "opacity-80"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
