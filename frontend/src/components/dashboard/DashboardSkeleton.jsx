const SkeletonCard = () => (
  <div className="h-24 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="h-3 w-24 rounded bg-slate-200/70" />
    <div className="mt-4 h-5 w-16 rounded bg-slate-200/70" />
  </div>
);

const DashboardSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse">
      <header>
        <div className="h-5 w-40 rounded bg-slate-200/80" />
        <div className="mt-2 h-3 w-64 rounded bg-slate-200/60" />
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="h-72 rounded-2xl border border-slate-200 bg-white shadow-sm" />
        <div className="h-72 rounded-2xl border border-slate-200 bg-white shadow-sm" />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="h-72 rounded-2xl border border-slate-200 bg-white shadow-sm" />
        <div className="h-72 rounded-2xl border border-slate-200 bg-white shadow-sm" />
      </section>
    </div>
  );
};

export default DashboardSkeleton;