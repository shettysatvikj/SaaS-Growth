const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-white " +
    "disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    // Solid primary button (default)
    primary:
      "bg-slate-900 text-white hover:bg-slate-800",

    // Light outline button for secondary actions
    outline:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
  };

  const variantClasses = variants[variant] || variants.primary;

  return (
    <button
      className={`${base} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;