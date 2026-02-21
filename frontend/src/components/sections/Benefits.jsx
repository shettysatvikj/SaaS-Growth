import { motion } from "framer-motion";

const benefits = [
  {
    title: "Full-stack funnel build",
    desc: "From hero headline to thank-you upsell, we design and implement the entire journey for high-intent SaaS leads.",
  },
  {
    title: "Data-backed conversion strategy",
    desc: "We leverage benchmarks from 100+ funnels to structure your copy, layout, and CTAs for maximum bookings.",
  },
  {
    title: "Aligned with your sales process",
    desc: "Qualify leads by revenue, ad spend, and business type so your sales team only talks to high-fit opportunities.",
  },
  {
    title: "Fast deployment",
    desc: "Launch a production-grade funnel in days, not months, using a modern React + Node.js stack.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        <div className="mb-12 max-w-2xl text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Engineered for SaaS growth teams
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Everything you need for qualified demos
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            Built for B2B SaaS companies that rely on paid traffic and outbound
            but need more qualified demos from the same ad spend.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((b, idx) => (
            <motion.div
              key={b.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-500 text-white shadow-sm">
                0{idx + 1}
              </div>
              <h3 className="text-base font-semibold text-slate-900 md:text-lg group-hover:text-indigo-600">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;