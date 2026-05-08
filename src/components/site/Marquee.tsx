import { tickerItems } from "@/lib/site-data";

export function Marquee() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="marquee bg-forest text-amber-light overflow-hidden border-y border-forest-light/30 py-4">
      <div className="marquee-track gap-10 px-5">
        {items.map((t, i) => (
          <span key={i} className="font-mono text-xs uppercase tracking-[0.2em] whitespace-nowrap flex items-center gap-10">
            {t}
            <span className="text-amber/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
