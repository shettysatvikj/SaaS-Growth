const Input = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-700">
          {label}
        </label>
      )}
      <input
        className={`w-full rounded-lg border px-3 py-2 text-sm transition-all duration-200 outline-none 
          ${
            error
              ? "border-rose-500 bg-rose-50 text-rose-900 placeholder:text-rose-300 focus:ring-1 focus:ring-rose-500"
              : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500"
          }`}
        {...props}
      />
      {error && (
        <p className="flex items-center gap-1 text-[11px] font-medium text-rose-600">
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-rose-100 text-[10px]">
            !
          </span>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;