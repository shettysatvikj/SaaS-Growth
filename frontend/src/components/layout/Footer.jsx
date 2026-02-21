import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white">
    <div className="mx-auto max-w-6xl px-4 py-8 lg:px-0">
      {/* Top row: Logo + links */}
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        {/* Logo / brand */}
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-sky-500 text-xs font-semibold text-white shadow-sm">
              SG
            </div>
            <span className="text-sm font-semibold tracking-tight text-slate-900">
              SaaS Growth Accelerator
            </span>
          </Link>
          <p className="mt-2 max-w-xs text-xs text-slate-500">
            Built to convert high-value SaaS leads with battle-tested funnels.
          </p>
        </div>

        {/* Quick links */}
        <nav className="flex flex-wrap gap-x-8 gap-y-4 text-xs md:gap-x-12">
          <div>
            <h3 className="mb-2 font-semibold text-slate-900">Product</h3>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <a href="#benefits" className="hover:text-slate-900">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-slate-900">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-slate-900">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">Company</h3>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <Link to="/apply" className="hover:text-slate-900">
                  Apply
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-slate-900">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@saasgrowth.com"
                  className="hover:text-slate-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-slate-900">Legal</h3>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <a href="/privacy" className="hover:text-slate-900">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-slate-900">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Bottom row: Copyright + status */}
      <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} SaaS Growth Accelerator. All rights
          reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;