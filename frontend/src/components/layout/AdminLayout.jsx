// AdminLayout.jsx
import { Link, NavLink } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-slate-200 bg-white/90 px-5 py-6 shadow-sm lg:block">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-sky-500 text-xs font-semibold text-white shadow-sm">
              SG
            </div>
            <span className="text-sm font-semibold tracking-tight text-slate-900">
              SaaS Growth
            </span>
          </Link>

          <nav className="mt-8 space-y-1 text-sm">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                [
                  "flex items-center justify-between rounded-lg px-3 py-2 transition-colors",
                  isActive
                    ? "bg-slate-900 text-slate-50"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                ].join(" ")
              }
            >
              <span>Dashboard</span>
              <span className="text-[10px] rounded-full bg-slate-800/90 px-1.5 py-0.5 text-slate-100">
                Admin
              </span>
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                [
                  "block rounded-lg px-3 py-2 text-slate-600 transition-colors",
                  isActive
                    ? "bg-slate-100 text-slate-900"
                    : "hover:bg-slate-100 hover:text-slate-900",
                ].join(" ")
              }
            >
              Website
            </NavLink>
          </nav>

          <div className="mt-10 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
            <p className="font-medium text-slate-800">System status</p>
            <p className="mt-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All systems operational
            </p>
            <p className="mt-2 text-[11px] text-slate-400">
              99.98% uptime last 90 days
            </p>
          </div>
        </aside>

        {/* Main column */}
        <div className="flex-1">
          {/* Top bar */}
          <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                  Admin
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Growth Insights Dashboard
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden text-right text-xs sm:block">
                  <p className="font-medium text-slate-700">
                    Growth Ops Workspace
                  </p>
                  <p className="text-slate-400">Last synced: a few seconds ago</p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                  AJ
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="mx-auto max-w-6xl px-4 py-6 lg:px-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}