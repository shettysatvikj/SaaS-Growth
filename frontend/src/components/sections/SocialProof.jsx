import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Elena Morris",
    role: "VP Growth, CloudStripe",
    quote:
      "We went from 8 to 27 strategy calls per week without increasing our ad spend. The funnel paid for itself in 10 days.",
    initials: "EM",
    color: "from-indigo-500 to-sky-500",
  },
  {
    name: "Rahul S.",
    role: "CEO, InfluxMetrics",
    quote:
      "Our sales team finally talks only to qualified accounts. CAC dropped by 33% in the first month.",
    initials: "RS",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Jonas Weber",
    role: "Head of Demand Gen, Syncbase",
    quote:
      "Implementation was fast, clean, and production-ready. The React stack plays nicely with our existing infra.",
    initials: "JW",
    color: "from-amber-500 to-orange-500",
  },
];

const SocialProof = () => {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Social Proof
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Trusted by high-growth SaaS teams
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              Funnels deployed across PLG, sales-led, and enterprise SaaS
              companies.
            </p>
          </div>
          <p className="rounded-xl bg-slate-50 px-3 py-2 text-xs italic text-slate-500 md:text-sm">
            "The only funnel we let touch our paid budget."
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {/* Stars */}
              <div className="mb-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-amber-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-sm leading-relaxed text-slate-700">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr ${t.color} text-xs font-semibold text-white shadow-sm`}
                >
                  {t.initials}
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos strip (trust reinforcement) */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-wide text-slate-500">
            Funnels deployed for teams backed by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-slate-300">
            <span>Y Combinator</span>
            <span>a16z</span>
            <span>Sequoia</span>
            <span>Accel</span>
            <span>Tiger Global</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;