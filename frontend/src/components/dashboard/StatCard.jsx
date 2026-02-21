const StatCard = ({ title, value, subtitle, trend, trendLabel }) => {
  const isPositive = typeof trend === "number" ? trend >= 0 : true;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-medium text-slate-500">{title}</p>
      <p className="mt-2 text-xl font-semibold text-slate-900">
        {value ?? "--"}
      </p>

      {subtitle && (
        <p className="mt-1 text-[11px] text-slate-500">{subtitle}</p>
      )}

      {typeof trend === "number" && (
        <p
          className={`mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${
            isPositive
              ? "bg-emerald-50 text-emerald-700"
              : "bg-rose-50 text-rose-700"
          }`}
        >
          <span
            className={`mr-1 h-1.5 w-1.5 rounded-full ${
              isPositive ? "bg-emerald-500" : "bg-rose-500"
            }`}
          />
          {isPositive ? "+" : ""}
          {trend.toFixed(1)}% {trendLabel || "vs last period"}
        </p>
      )}
    </div>
  );
};

export default StatCard;