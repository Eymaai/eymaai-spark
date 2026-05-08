import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest text-cream/90 mt-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo light />
          <p className="mt-5 text-sm text-cream/70 max-w-xs leading-relaxed">
            Training the intelligence of tomorrow — through expert human feedback at frontier scale.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="LinkedIn" className="grid place-items-center h-9 w-9 rounded-full bg-forest-light/40 hover:bg-amber transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="grid place-items-center h-9 w-9 rounded-full bg-forest-light/40 hover:bg-amber transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="mailto:contactus@eymaai.com" aria-label="Email" className="grid place-items-center h-9 w-9 rounded-full bg-forest-light/40 hover:bg-amber transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-light/80 mb-5">Company</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-amber-light transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-amber-light transition-colors">Services</Link></li>
            <li><Link to="/careers" className="hover:text-amber-light transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-light/80 mb-5">Get involved</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/join" className="hover:text-amber-light transition-colors">Join as Trainer</Link></li>
            <li><Link to="/contact" className="hover:text-amber-light transition-colors">Partner with us</Link></li>
            <li><a href="#" className="hover:text-amber-light transition-colors">Press</a></li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-light/80 mb-5">Reach us</p>
          <ul className="space-y-3 text-sm">
            <li><a href="mailto:contactus@eymaai.com" className="hover:text-amber-light transition-colors">contactus@eymaai.com</a></li>
            <li><a href="mailto:careers@eymaai.com" className="hover:text-amber-light transition-colors">careers@eymaai.com</a></li>
            <li className="text-cream/60">Delhi, India 110025</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} EYMA AI. Crafted in Delhi.</p>
          <p className="font-mono">eymaai.com</p>
        </div>
      </div>
    </footer>
  );
}
