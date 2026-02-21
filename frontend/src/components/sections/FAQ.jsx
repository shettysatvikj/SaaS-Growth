import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Who is this funnel for?",
    a: "B2B SaaS companies doing at least $10k MRR and investing in paid traffic or outbound. We work best with products that rely on demos or sales calls to close.",
  },
  {
    q: "How long does implementation take?",
    a: "Most funnels go from strategy to deployment in 2–3 weeks, depending on your internal review process and integrations.",
  },
  {
    q: "Do you handle copy and design?",
    a: "Yes. We provide conversion-focused copy, wireframes, and high-fidelity UI in line with your brand guidelines.",
  },
  {
    q: "Can you integrate with our CRM and calendar?",
    a: "We design the funnel so it can plug into tools like HubSpot, Salesforce, Calendly, and Chili Piper. We collaborate with your team to implement safely.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white py-20"
    >
      <div className="mx-auto max-w-3xl px-4 lg:px-0">
        {/* Heading */}
        <div className="mb-8 text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            FAQs
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            If you have more, we’ll cover them on your free strategy call.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const open = openIndex === idx;

            return (
              <motion.div
                key={item.q}
                layout
                transition={{ layout: { duration: 0.4 } }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                >
                  <span className="text-sm font-medium text-slate-900 md:text-base">
                    {item.q}
                  </span>

                  {/* Animated Icon */}
                  <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-100 px-4 pb-4 pt-2">
                        <p className="text-xs leading-relaxed text-slate-600 md:text-sm">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-[11px] text-slate-400 md:text-xs">
          Still unsure if it’s a fit? Use the strategy call to pressure-test the
          approach against your current funnel.
        </p>
      </div>
    </motion.section>
  );
};

export default FAQ;