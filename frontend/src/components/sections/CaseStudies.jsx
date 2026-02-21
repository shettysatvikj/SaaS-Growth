import { motion } from "framer-motion";

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white py-20"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        {/* Heading */}
        <div className="mb-12 max-w-2xl text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            Proven across different SaaS motions
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Proven results across SaaS growth models
          </h2>
          <p className="mt-3 text-sm text-slate-600 md:text-base">
            A few anonymized snapshots from recent funnel launches.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-medium text-indigo-700">
              PLG Analytics SaaS
            </div>
            <p className="text-xs text-slate-600 md:text-sm">
              Rebuilt their paid funnel with targeted qualification, removing
              low-intent trials from the pipeline.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-800 md:text-sm">
              <li>• +52% increase in call bookings</li>
              <li>• -31% CAC on paid search</li>
              <li>• 3.8x pipeline generated in 60 days</li>
            </ul>
          </motion.div>

          <motion.div
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
              Enterprise Security SaaS
            </div>
            <p className="text-xs text-slate-600 md:text-sm">
              Replaced a generic website form with a dedicated funnel and
              qualification filters.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-800 md:text-sm">
              <li>• 3x increase in sales-qualified demos</li>
              <li>• 44% improvement in opportunity rate</li>
              <li>• 2.6x LTV from paid channels</li>
            </ul>
          </motion.div>

          <motion.div
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-700">
              DevTools SaaS
            </div>
            <p className="text-xs text-slate-600 md:text-sm">
              Funnel tailored to technical buyers with clear ROI metrics and
              implementation details.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-slate-800 md:text-sm">
              <li>• 38% higher demo acceptance rate</li>
              <li>• 27% faster sales cycle</li>
              <li>• +19 NPS increase post-demo</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;