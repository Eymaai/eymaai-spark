import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center gap-2.5 group">
      <span
        className="grid h-9 w-9 place-items-center rounded-xl bg-forest text-cream font-display text-base leading-none transition-transform group-hover:rotate-[-4deg]"
        aria-hidden="true"
      >
        E
      </span>
      <span className={`font-display text-xl tracking-tight ${light ? "text-cream" : "text-ink"}`}>
        EYMA <span className="italic text-amber">AI</span>
      </span>
    </Link>
  );
}
