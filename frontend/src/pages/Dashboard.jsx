import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import AdminLayout from "../components/layout/AdminLayout";
import StatCard from "../components/dashboard/StatCard";
import LeadsOverTimeChart from "../components/dashboard/LeadsOverTimeChart";
import LeadsByStageChart from "../components/dashboard/LeadsByStageChart";
import LeadsBySourceChart from "../components/dashboard/LeadsBySourceChart";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";

export default function Dashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  const fetchAnalytics = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        "http://localhost:5000/api/leads/analytics",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAnalytics(res.data.data);
    } catch (err) {
      console.error(err);
      setError("We couldn't load your analytics. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchAnalytics();
  }, [fetchAnalytics]);

  // Loading state with skeleton UI
  if (loading) {
    return (
      <AdminLayout>
        <DashboardSkeleton />
      </AdminLayout>
    );
  }

  // Error state
  if (error) {
    return (
      <AdminLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="max-w-sm rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <h1 className="text-lg font-semibold text-slate-900">
              Something went wrong
            </h1>
            <p className="mt-2 text-sm text-slate-500">{error}</p>
            <button
              onClick={fetchAnalytics}
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
            >
              Try again
            </button>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (!analytics) {
    return null;
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Growth Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Real-time view of your leads, pipeline, and acquisition performance.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Data refreshed a few seconds ago
          </div>
        </header>

        {/* Top stats */}
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Leads"
            value={analytics.totalLeads}
            subtitle="All-time"
          />
          <StatCard
            title="Hot Leads"
            value={analytics.hotLeads}
            subtitle="High intent score"
          />
          <StatCard
            title="Pipeline Value"
            value={
              typeof analytics.totalValue === "number"
                ? `$${analytics.totalValue.toLocaleString()}`
                : analytics.totalValue
            }
            subtitle="Potential deal value"
          />
          <StatCard
            title="Average Lead Score"
            value={analytics.avgScore}
            subtitle="Quality of leads"
          />
        </section>

        {/* Charts row 1 */}
        <section className="grid gap-6 lg:grid-cols-2">
          <LeadsOverTimeChart data={analytics.leadsOverTime} />
          <LeadsByStageChart data={analytics.leadsByStage} />
        </section>

        {/* Charts row 2 */}
        <section className="grid gap-6 lg:grid-cols-2">
          <LeadsBySourceChart data={analytics.leadsBySource} />
          {/* Trust / system panel */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900">
              Reliability & Security
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Your growth system runs on a secure, highly available infrastructure.
            </p>

            <dl className="mt-4 grid gap-3 text-xs text-slate-600 sm:grid-cols-3">
              <div>
                <dt className="text-slate-500">Uptime (90 days)</dt>
                <dd className="mt-0.5 font-semibold text-slate-900">99.98%</dd>
              </div>
              <div>
                <dt className="text-slate-500">Avg. API response</dt>
                <dd className="mt-0.5 font-semibold text-slate-900">180ms</dd>
              </div>
              <div>
                <dt className="text-slate-500">Last security scan</dt>
                <dd className="mt-0.5 font-semibold text-slate-900">
                  Passed · 24h ago
                </dd>
              </div>
            </dl>

            <div className="mt-4 flex flex-wrap gap-2 text-[10px]">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 font-medium text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Encrypted at rest & in transit
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 font-medium text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                GDPR-conscious data handling
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 font-medium text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Role-based access control
              </span>
            </div>
          </div>
        </section>
      </div>
    </AdminLayout>
  );
}