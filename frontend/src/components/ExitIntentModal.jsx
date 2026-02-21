import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button.jsx";
import { Link } from "react-router-dom";

const ExitIntentModal = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative mx-4 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close"
            >
              ×
            </button>

            {/* Badge */}
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50 px-3 py-1 text-[11px] font-medium text-amber-700">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Free funnel teardown offer
            </p>

            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              Before you leave…
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Want a free teardown of your current funnel? We’ll walk you
              through the exact changes we’d make to increase qualified demos in
              the next 30 days.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link to="/apply" onClick={onClose} className="flex-1">
                <Button className="w-full text-xs sm:text-sm">
                  Book Free Strategy Call
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full text-xs sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                No thanks
              </Button>
            </div>

            <p className="mt-3 text-[11px] text-slate-400">
              No spam, no pressure. Just a candid teardown of your current
              funnel.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;