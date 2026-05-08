import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { services, faqs, pricingTiers, howSteps } from "@/lib/site-data";
import { Check, ArrowRight } from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — EYMA AI" },
      { name: "description", content: "RLHF, prompt engineering, hallucination detection, red-teaming, Indic language data, expert evaluation. Every service is built around frontier-grade quality." },
      { property: "og:title", content: "Services — EYMA AI" },
      { property: "og:description", content: "Six AI training services, one quality bar." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mesh"><div className="blob" /></div>
        <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8 pt-20 lg:pt-28 pb-12">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted">
            <Link to="/" className="hover:text-amber">Home</Link> / Services
          </p>
          <h1 className="mt-5 font-display text-5xl lg:text-7xl leading-[1.05]">
            Services built for <span className="italic text-amber">frontier</span> teams.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Six core capabilities, one obsession: human feedback that holds up under research-grade scrutiny.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="card-hover glass rounded-2xl p-8 h-full">
                <div className="flex items-start justify-between">
                  <span className="card-icon text-4xl">{s.icon}</span>
                  <span className={`font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${
                    s.tagColor === "forest" ? "bg-forest/10 text-forest" : "bg-amber-pale text-amber"
                  }`}>{s.tag}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">Pricing</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">Three ways to engage.</h2>
            <p className="mt-4 text-ink-soft text-lg">Transparent tiers. Custom quotes for anything bespoke.</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {pricingTiers.map((t) => (
              <Reveal key={t.name}>
                <div className={`rounded-2xl p-8 h-full flex flex-col ${
                  t.highlighted ? "bg-forest text-cream shadow-2xl scale-[1.02]" : "bg-white border border-border"
                }`}>
                  <h3 className={`font-display text-2xl ${t.highlighted ? "text-cream" : "text-ink"}`}>{t.name}</h3>
                  <p className={`mt-2 text-sm ${t.highlighted ? "text-cream/70" : "text-ink-muted"}`}>{t.desc}</p>
                  <p className={`mt-6 font-display text-4xl ${t.highlighted ? "text-amber-light" : "text-ink"}`}>
                    {t.price}<span className={`text-sm font-body ${t.highlighted ? "text-cream/60" : "text-ink-muted"}`}>{t.period}</span>
                  </p>
                  <ul className={`mt-6 space-y-3 text-sm flex-1 ${t.highlighted ? "text-cream/85" : "text-ink-soft"}`}>
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${t.highlighted ? "text-amber-light" : "text-amber"}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-colors ${
                    t.highlighted ? "bg-amber text-white hover:bg-amber-light" : "bg-ink text-cream hover:bg-ink-soft"
                  }`}>
                    {t.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">Process</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">How a project actually runs.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-4 gap-5">
            {howSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="rounded-2xl bg-cream border border-border/60 p-6 h-full relative">
                  <span className="font-mono text-xs text-amber">{s.n}</span>
                  <h3 className="mt-3 font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">Frequently asked</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">Good questions, honest answers.</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="bg-white rounded-xl border border-border px-5">
                  <AccordionTrigger className="text-left font-display text-lg hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-ink-soft leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-4xl lg:text-5xl">Tell us what you're building.</h2>
            <p className="mt-4 text-ink-soft text-lg">We'll respond within one business day.</p>
            <div className="mt-8 inline-block">
              <MagneticButton to="/contact" variant="primary" size="lg">
                Start a conversation <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
