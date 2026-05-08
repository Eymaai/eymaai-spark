import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") { setShow(false); return; }
    if (sessionStorage.getItem("eyma-loaded")) { setShow(false); return; }
    const t = setTimeout(() => {
      sessionStorage.setItem("eyma-loaded", "1");
      setShow(false);
    }, 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-cream"
        >
          <div className="flex flex-col items-center gap-5">
            <svg width="64" height="64" viewBox="0 0 64 64" className="logo-draw">
              <rect x="6" y="6" width="52" height="52" rx="14" fill="none" stroke="oklch(0.36 0.04 165)" strokeWidth="2.5" />
              <path d="M20 24 L20 40 L44 40" fill="none" stroke="oklch(0.66 0.13 60)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 32 L36 32" fill="none" stroke="oklch(0.66 0.13 60)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}
              className="font-display text-xl tracking-tight text-ink">
              EYMA <span className="text-amber italic">AI</span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
