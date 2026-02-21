import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button.jsx";

const Header = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-sky-500 text-xs font-semibold text-white shadow-sm">
            SG
          </div>
          <span className="text-sm font-semibold tracking-tight text-slate-900">
            SaaS Growth Accelerator
          </span>
        </Link>

        {/* Nav (desktop) */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {isLanding && (
            <>
              {[
                ["benefits", "Benefits"],
                ["case-studies", "Case Studies"],
                ["pricing", "Pricing"],
                ["faq", "FAQ"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollToId(id)}
                  className="text-slate-600 transition-colors hover:text-slate-900"
                >
                  {label}
                </button>
              ))}
            </>
          )}
        </nav>

        {/* CTA */}
        <Link to="/apply">
          <Button className="text-xs md:text-sm shadow-sm hover:shadow-md">
            Get Free Strategy Call
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;