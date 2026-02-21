import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import Input from "../components/ui/Input.jsx";
import Select from "../components/ui/Select.jsx";
import Button from "../components/ui/Button.jsx";
import { createLead } from "../services/leadService.js";
import { motion } from "framer-motion";

const businessTypes = [
  "B2B SaaS",
  "B2C SaaS",
  "DevTools / Infra",
  "Analytics / BI",
  "Other",
];

const revenueRanges = [
  "Pre-revenue",
  "$1k–$10k MRR",
  "$10k–$50k MRR",
  "$50k–$200k MRR",
  "$200k+ MRR",
];

const adBudgets = [
  "Less than $5k / month",
  "$5k–$20k / month",
  "$20k–$50k / month",
  "$50k+ / month",
];

const LeadCapturePage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      businessType: "",
      revenueRange: "",
      adBudget: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      await createLead({
        name: values.name,
        email: values.email,
        businessType: values.businessType,
        revenueRange: values.revenueRange,
        adBudget: values.adBudget,
      });

      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      alert(
        "There was a problem submitting your application. Please try again."
      );
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 lg:flex-row lg:px-0 lg:py-16">
          {/* Left: Info */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Free Strategy Call – No Strings Attached
              </p>

              <h1 className="mt-4 text-2xl font-semibold md:text-3xl">
                Apply for your free SaaS funnel strategy call
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                Tell us a bit about your product and current growth stage.
                We'll use this to prepare a tailored teardown and roadmap for
                your funnel.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                What you'll get
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {[
                  "30-minute Zoom call with a senior growth strategist",
                  "Funnel teardown of your current site or ads",
                  "Clear next steps, whether we work together or not",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700">
                      ✓
                    </span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 text-xs text-slate-600">
              <p className="font-medium text-slate-800">
                We review every application personally
              </p>
              <p className="mt-1 leading-relaxed">
                If there's a strong fit, we'll send you a booking link within
                one business day. No hard sell, just honest advice.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 text-sm"
              noValidate
            >
              <Input
                label="Full Name"
                placeholder="Jane Doe"
                error={errors.name?.message}
                {...register("name", {
                  required: "Full name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
              />

              <Input
                label="Work Email"
                placeholder="jane@yourcompany.com"
                error={errors.email?.message}
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i,
                    message: "Enter a valid email address",
                  },
                })}
              />

              <Select
                label="Business Type"
                error={errors.businessType?.message}
                {...register("businessType", {
                  required: "Business type is required",
                })}
              >
                <option value="">Select business type</option>
                {businessTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>

              <Select
                label="Monthly Revenue"
                error={errors.revenueRange?.message}
                {...register("revenueRange", {
                  required: "Monthly revenue is required",
                })}
              >
                <option value="">Select revenue range</option>
                {revenueRanges.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </Select>

              <Select
                label="Monthly Ad Budget"
                error={errors.adBudget?.message}
                {...register("adBudget", {
                  required: "Ad budget is required",
                })}
              >
                <option value="">Select ad budget</option>
                {adBudgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </Select>

              <Button
                type="submit"
                className="mt-4 w-full text-sm shadow-sm hover:shadow-md"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Free Strategy Call"}
              </Button>

              <p className="mt-3 text-center text-[11px] text-slate-500">
                We'll review your application within one business day. If
                there's a strong fit, we'll send you a booking link for your
                call.
              </p>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeadCapturePage;