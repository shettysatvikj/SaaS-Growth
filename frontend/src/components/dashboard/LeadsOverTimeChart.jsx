import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";

const fallbackData = [
  { label: "Mon", leads: 8 },
  { label: "Tue", leads: 14 },
  { label: "Wed", leads: 11 },
  { label: "Thu", leads: 19 },
  { label: "Fri", leads: 22 },
  { label: "Sat", leads: 9 },
  { label: "Sun", leads: 7 },
];

const LeadsOverTimeChart = ({ data }) => {
  // Expecting data like: [{ date: "2024-02-10", count: 12 }, ...]
  const chartData =
    data && data.length
      ? data.map((d) => {
          const date = new Date(d.date);
          const label = isNaN(date.getTime())
            ? d.date
            : date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
          return { label, leads: d.count ?? d.leads ?? 0 };
        })
      : fallbackData;

  return (
    <section className="h-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Leads Over Time
          </h2>
          <p className="text-xs text-slate-500">
            Daily volume of new leads entering your funnel.
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="label"
            tick={{ fontSize: 11, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
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
          <Line
            type="monotone"
            dataKey="leads"
            stroke="#4f46e5"
            strokeWidth={2.5}
            dot={{ r: 3, strokeWidth: 2, stroke: "#eef2ff", fill: "#4f46e5" }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default LeadsOverTimeChart;