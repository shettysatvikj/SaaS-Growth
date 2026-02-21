import { useEffect, useState } from "react";

const Counter = ({ label, from = 0, to, duration = 1500, suffix = "" }) => {
  const [value, setValue] = useState(from);

  useEffect(() => {
    let start;
    let frameId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      const eased = 1 - Math.pow(1 - progressRatio, 3); // easeOutCubic
      const current = Math.floor(from + (to - from) * eased);
      setValue(current);

      if (progress < duration) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [from, to, duration]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-center shadow-sm">
      <p className="text-2xl font-semibold text-slate-900 md:text-3xl">
        <span className="bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
          {value.toLocaleString()}
          {suffix}
        </span>
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>
    </div>
  );
};

const AnimatedCounters = () => {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-0">
        <div className="mb-8 text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            By the numbers
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
            What our funnels typically deliver
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Counter label="Average demo-show rate" to={72} suffix="%" />
          <Counter label="Funnel ROI in 90 days" to={4} suffix="x" />
          <Counter label="Qualified calls booked" to={850} />
          <Counter label="Countries served" to={14} />
        </div>
      </div>
    </section>
  );
};

export default AnimatedCounters;