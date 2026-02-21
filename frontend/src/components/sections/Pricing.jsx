import { motion } from "framer-motion";
import Button from "../ui/Button.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const tiers = [
 {
  name: "Launch",
  price: "₹1.25L",
  cadence: "one-time",
  desc: "Perfect for seed-stage and early revenue SaaS.",
  popular: false,
  features: [
    "Landing page + lead capture + thank you page",
    "Copy framework & wireframes",
    "Basic analytics setup",
    "2 rounds of revisions",
  ],
},
{
  name: "Scale",
  price: "₹2.9L",
  cadence: "one-time",
  desc: "Designed for growth-stage teams with ad budget.",
  popular: true,
  features: [
    "Everything in Launch",
    "Advanced qualification logic",
    "A/B test-ready structure",
    "CRM integration support",
    "Conversion tracking & dashboard",
  ],
},
{
  name: "Enterprise",
  price: "Custom",
  cadence: "per engagement",
  desc: "For multi-product or multi-segment SaaS orgs.",
  popular: false,
  features: [
    "Everything in Scale",
    "Custom flows per segment",
    "Stakeholder workshop",
    "Dedicated technical lead",
    "Ongoing optimization support",
  ],
},
];

const Pricing = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="pricing"
      className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-white py-20"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-0">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Pricing aligned with your growth stage
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
            Simple, project-based pricing
          </h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Start with a free strategy call. If we’re not confident we can
            improve your funnel, we’ll tell you.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, idx) => {
            const isSelected = selected === tier.name;

            return (
              <motion.div
                key={tier.name}
                onClick={() => setSelected(tier.name)}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={[
                  "flex h-full cursor-pointer flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300",
                  isSelected
                    ? "border-indigo-500 bg-indigo-50 shadow-[0_20px_50px_rgba(79,70,229,0.25)]"
                    : tier.popular
                    ? "border-slate-200 bg-white shadow-[0_18px_45px_rgba(79,70,229,0.18)]"
                    : "border-slate-200 bg-white hover:shadow-md",
                ].join(" ")}
              >
                {/* Top */}
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                    {tier.name}
                  </h3>

                  {tier.popular && !isSelected && (
                    <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-700">
                      Most popular
                    </span>
                  )}

                  {isSelected && (
                    <span className="rounded-full bg-indigo-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                      Selected
                    </span>
                  )}
                </div>

                {/* Price */}
                <div>
                  <p className="text-3xl font-semibold text-slate-900">
                    {tier.price}
                  </p>
                  <p className="text-xs text-slate-500">
                    {tier.cadence || "one-time project"}
                  </p>
                  <p className="mt-2 text-xs text-slate-600 md:text-sm">
                    {tier.desc}
                  </p>
                </div>

                {/* Features */}
                <ul className="mt-4 space-y-2 text-xs text-slate-700 md:text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-[6px] flex h-4 w-4 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-semibold text-emerald-700">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <div
                  className="mt-6"
                  onClick={(e) => e.stopPropagation()} // prevents card select on button click
                >
                  <Link to="/apply">
                    <Button
                      className="w-full text-xs md:text-sm"
                      variant={isSelected ? "primary" : "outline"}
                    >
                      Get Free Strategy Call
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-[11px] text-slate-400 md:text-xs">
          Not sure which tier fits? We’ll recommend the right option on your
          strategy call based on your team, budget, and timeline.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
