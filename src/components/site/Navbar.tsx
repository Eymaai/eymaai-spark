import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { MagneticButton } from "./MagneticButton";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/#how", label: "How it works" },
  { to: "/careers", label: "Careers" },
  { to: "/join", label: "Join Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-border/60" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const isHash = l.to.includes("#");
              if (isHash) {
                return (
                  <a
                    key={l.to}
                    href={l.to}
                    className="px-4 py-2 text-sm text-ink-soft hover:text-ink transition-colors rounded-full"
                  >
                    {l.label}
                  </a>
                );
              }
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="px-4 py-2 text-sm text-ink-soft hover:text-ink transition-colors rounded-full"
                  activeProps={{ className: "px-4 py-2 text-sm text-ink rounded-full bg-ink/5" }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:block">
            <MagneticButton to="/contact" variant="primary">Partner with us</MagneticButton>
          </div>
          <button
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-cream pt-20 px-6"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {l.to.includes("#") ? (
                    <a href={l.to} onClick={() => setOpen(false)} className="block py-4 text-2xl font-display text-ink border-b border-border">
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to} className="block py-4 text-2xl font-display text-ink border-b border-border">
                      {l.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <MagneticButton to="/contact" variant="primary" size="lg" className="w-full">
                  Partner with us
                </MagneticButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
