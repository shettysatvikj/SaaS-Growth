import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";

const Hero = () => {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-16 text-center lg:flex-row lg:items-center lg:gap-16 lg:px-0 lg:py-24">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            SaaS Growth Accelerator Funnel
          </p>

          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            Turn{" "}
            <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              cold traffic
            </span>{" "}
            into booked demos with a battle-tested funnel.
          </h1>

          <p className="max-w-xl text-sm text-slate-600 md:text-base md:leading-relaxed mx-auto lg:mx-0">
            Deploy a high-converting SaaS funnel that consistently turns ad
            clicks into qualified strategy calls without rebuilding your
            entire website or changing your product.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/apply">
              <Button className="w-full sm:w-auto shadow-sm hover:shadow-md">
                Get Free Strategy Call
              </Button>
            </Link>
            <p className="text-xs text-slate-500">
              No credit card required. 30-minute growth roadmap.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 w-full rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Funnel Performance Snapshot
          </h3>

          <div className="grid grid-cols-2 gap-4 text-left text-xs md:text-sm">
            <div className="rounded-xl bg-slate-50/80 p-4">
              <p className="text-slate-500">Average Call Booking Rate</p>
              <p className="mt-1 text-2xl font-semibold text-primary">37%</p>
            </div>

            <div className="rounded-xl bg-slate-50/80 p-4">
              <p className="text-slate-500">Avg. CAC Reduction</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-500">
                28%
              </p>
            </div>

            <div className="rounded-xl bg-slate-50/80 p-4">
              <p className="text-slate-500">Avg. LTV Increase</p>
              <p className="mt-1 text-2xl font-semibold text-accent">+41%</p>
            </div>

            <div className="rounded-xl bg-slate-50/80 p-4">
              <p className="text-slate-500">Clients Helped</p>
              <p className="mt-1 text-2xl font-semibold text-slate-900">
                120+
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;