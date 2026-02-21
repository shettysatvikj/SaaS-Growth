import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

const fallbackData = [
  { source: "LinkedIn Ads", count: 84 },
  { source: "Google Search", count: 63 },
  { source: "Organic", count: 42 },
  { source: "Referrals", count: 27 },
];

const LeadsBySourceChart = ({ data }) => {
  // Expecting data like: [{ source: "LinkedIn Ads", count: 40 }, ...]
  const chartData =
    data && data.length
      ? data.map((d) => ({
          source: d.source ?? d.name,
          count: d.count ?? d.value ?? 0,
        }))
      : fallbackData;

  return (
    <section className="h-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Leads by Source
          </h2>
          <p className="text-xs text-slate-500">
            Where your highest-value leads are coming from.
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="source"
            tick={{ fontSize: 11, fill: "#6b7280" }}
            width={110}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "0.75rem",
              border: "1px solid #e5e7eb",
              boxShadow: "0 18px 45px rgba(15,23,42,0.08)",
              fontSize: "12px",
            }}
            formatter={(value) => [value, "Leads"]}
          />
          <Bar
            dataKey="count"
            radius={[0, 8, 8, 0]}
            fill="#4f46e5"
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default LeadsBySourceChart;