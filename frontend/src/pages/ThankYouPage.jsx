import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import Button from "../components/ui/Button.jsx";
import { motion } from "framer-motion";

const fakeSlots = [
  "Mon 10:00",
  "Mon 14:00",
  "Tue 09:30",
  "Tue 16:00",
  "Wed 11:00",
  "Thu 15:30",
  "Fri 10:30",
  "Fri 13:00",
];

const ThankYouPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-12 lg:px-0 lg:py-16">
          {/* Top confirmation card */}
          <motion.div
            className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-6 text-center shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
              ✓
            </div>
            <h1 className="text-2xl font-semibold text-emerald-900 md:text-3xl">
              Application received. You’re in the review queue.
            </h1>
            <p className="mt-3 text-sm text-emerald-800/90 md:text-base">
              We’re reviewing your answers to match you with the right
              strategist. Expect an email with your booking link within one
              business day.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Slots preview */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-sm font-semibold text-slate-900 md:text-base">
                Preview of typical time slots
              </h2>
              <p className="mt-2 text-xs text-slate-500 md:text-sm">
                These are example slots we usually offer. Your actual booking
                link may include additional times and time zones.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs md:text-sm">
                {fakeSlots.map((slot) => (
                  <div
                    key={slot}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-slate-700"
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What to do while waiting + CTA */}
            <motion.div
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-slate-900 md:text-base">
                  What happens next
                </h2>
                <ol className="space-y-2 text-xs text-slate-600 md:text-sm">
                  <li>1. We review your application within one business day.</li>
                  <li>2. If there’s a strong fit, you’ll receive a booking link by email.</li>
                  <li>3. On the call, we’ll walk through your funnel and growth plan.</li>
                </ol>

                <p className="mt-2 text-xs text-slate-600 md:text-sm">
                  Want to move fast? On the call, you’ll also have the option
                  to join our{" "}
                  <span className="font-semibold text-slate-900">
                    Done-For-You Funnel Implementation
                  </span>{" "}
                  program, where we handle everything from copy to launch.
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                <Button
                  className="w-full text-xs sm:w-auto"
                  variant="outline"
                  onClick={() => {
                    window.open(
                      "https://example.com/saas-funnel-dfy",
                      "_blank",
                      "noopener"
                    );
                  }}
                >
                  Learn about the DFY Funnel Program
                </Button>
                <p className="text-[11px] text-slate-400">
                  Tip: Add{" "}
                  <span className="font-medium text-slate-600">
                    hello@yourdomain.com
                  </span>{" "}
                  to your contacts so the invite doesn’t land in spam.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYouPage;