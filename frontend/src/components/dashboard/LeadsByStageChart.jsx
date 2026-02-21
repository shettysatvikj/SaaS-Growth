import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

const fallbackData = [
  { stage: "New", count: 120 },
  { stage: "Contacted", count: 78 },
  { stage: "Qualified", count: 46 },
  { stage: "Proposal", count: 21 },
  { stage: "Won", count: 9 },
];

const LeadsByStageChart = ({ data }) => {
  // Expecting data like: [{ stage: "New", count: 120 }, ...]
  const chartData =
    data && data.length
      ? data.map((d) => ({
          stage: d.stage ?? d.name,
          count: d.count ?? d.value ?? 0,
        }))
      : fallbackData;

  return (
    <section className="h-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Leads by Stage
          </h2>
          <p className="text-xs text-slate-500">
            Distribution of leads across your pipeline.
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="stage"
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
          <Bar
            dataKey="count"
            radius={[8, 8, 0, 0]}
            fill="#0ea5e9"
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default LeadsByStageChart;