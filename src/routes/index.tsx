import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { MagneticButton } from "@/components/site/MagneticButton";
import { Typewriter } from "@/components/site/Typewriter";
import { Marquee } from "@/components/site/Marquee";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { Reveal } from "@/components/site/Reveal";
import { services, trust, testimonials, howSteps, stats, heroPhrases } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EYMA AI — Training the intelligence of tomorrow" },
      { name: "description", content: "Expert RLHF, prompt engineering, red-teaming and Indic language data for the world's leading AI labs." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustBar />
      <Services />
      <HowItWorks />
      <StatsBanner />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mesh"><div className="blob" /></div>
      <div className="grid-dots" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-white/70 backdrop-blur border border-border px-4 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-ink-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 pulse-dot" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              Now recruiting AI Trainers across India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-[44px] sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
            >
              Training the
              <br />
              <Typewriter words={heroPhrases} />
              <br />
              of tomorrow
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-7 max-w-xl text-base lg:text-lg text-ink-soft leading-relaxed"
            >
              EYMA AI connects domain experts with leading AI companies to build more accurate, safer, and smarter AI systems through expert human feedback.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <MagneticButton to="/join" variant="primary" size="lg">
                Apply as AI Trainer <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton to="/contact" variant="secondary" size="lg">
                Partner with us
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="glass rounded-3xl p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">Live capability</p>
              <div className="mt-5 grid grid-cols-2 gap-y-7 gap-x-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-4xl text-ink">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-xs text-ink-muted mt-1.5">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-6 border-t border-border/70">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted mb-3">Domain tracks</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-forest text-cream">Hindi & Indic</span>
                  <span className="text-xs px-3 py-1.5 rounded-full border border-border text-ink-soft">STEM & Math</span>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-forest text-cream">Code & Engineering</span>
                  <span className="text-xs px-3 py-1.5 rounded-full border border-border text-ink-soft">Legal & Medical</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="border-y border-border bg-cream">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {trust.map((t) => (
          <div key={t.label} className="flex items-center gap-2.5 text-sm text-ink-soft">
            <span className="text-amber text-base">{t.icon}</span>
            {t.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">What we do</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-[1.1]">
            AI training services that move <span className="italic">the frontier</span> forward.
          </h2>
          <p className="mt-5 text-ink-soft text-lg leading-relaxed">
            We work end-to-end with your research team — from rubric design through delivery — across the highest-leverage data tasks shaping today's models.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="card-hover glass rounded-2xl p-7 h-full">
                <div className="card-icon text-3xl">{s.icon}</div>
                <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
                <span className={`mt-6 inline-block font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${
                  s.tagColor === "forest" ? "bg-forest/10 text-forest" : "bg-amber-pale text-amber"
                }`}>{s.tag}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="bg-sand py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">How it works</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-[1.1]">From brief to delivery, in <span className="italic">four moves</span>.</h2>
          <p className="mt-5 text-ink-soft text-lg">A workflow tuned for frontier-quality output, week after week.</p>

          <ol className="mt-12 space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-border">
            {howSteps.map((s) => (
              <li key={s.n} className="relative pl-14">
                <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-forest text-cream font-mono text-xs">
                  {s.n}
                </span>
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{s.desc}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-3xl p-6 lg:sticky lg:top-24">
            <div className="flex items-center justify-between mb-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">Task pipeline · Live</p>
              <span className="flex items-center gap-1.5 text-xs text-emerald-700 font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-dot" /> Active
              </span>
            </div>
            <div className="space-y-2.5">
              {[
                { label: "STEM reasoning · batch #2841", status: "In review", color: "bg-amber-pale text-amber" },
                { label: "Hindi RLHF · batch #2842", status: "In progress", color: "bg-blue-100 text-blue-700" },
                { label: "Code eval · batch #2840", status: "Delivered", color: "bg-emerald-100 text-emerald-700" },
                { label: "Red team · batch #2843", status: "Assigned", color: "bg-forest/10 text-forest" },
                { label: "Legal QA · batch #2839", status: "Delivered", color: "bg-emerald-100 text-emerald-700" },
                { label: "Tamil annotation · batch #2844", status: "In progress", color: "bg-blue-100 text-blue-700" },
              ].map((t) => (
                <div key={t.label} className="flex items-center justify-between bg-white/80 rounded-xl px-4 py-3 border border-border/60">
                  <span className="text-sm text-ink-soft">{t.label}</span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full ${t.color}`}>{t.status}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-border/70 flex items-center justify-between">
              <span className="text-sm text-ink-muted">7-day accuracy rate</span>
              <span className="font-display text-2xl text-forest">98.4%</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatsBanner() {
  return (
    <section className="bg-forest text-cream py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 grid-dots" style={{ ["--tw" as never]: "" }} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <p className="font-display text-5xl lg:text-6xl text-amber-light">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-cream/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [...testimonials, ...testimonials];
  return (
    <section className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">Voices from the lab</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-[1.1]">Trusted by teams shipping <span className="italic">frontier models</span>.</h2>
        </Reveal>
      </div>
      <div className="mt-14 marquee no-scrollbar">
        <div className="scroll-x gap-5 px-5">
          {items.map((t, i) => (
            <article key={i} className="w-[380px] shrink-0 glass rounded-2xl p-7">
              <p className="text-sm text-ink-soft leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber to-forest grid place-items-center text-cream font-display">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-ink-muted">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <div className="rounded-3xl px-8 lg:px-16 py-16 lg:py-20 text-center relative overflow-hidden"
               style={{ background: "linear-gradient(135deg, oklch(0.66 0.13 60), oklch(0.76 0.14 70))" }}>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/70">Get involved</p>
            <h2 className="mt-4 font-display text-4xl lg:text-6xl text-white leading-[1.05]">
              Ready to contribute to the<br />future of AI?
            </h2>
            <div className="mt-9 flex flex-wrap gap-3 justify-center">
              <MagneticButton to="/join" variant="primary" size="lg" className="bg-ink text-cream hover:bg-ink-soft">
                Apply now <Check className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton to="/contact" variant="ghost" size="lg" className="border border-white/40 text-white hover:bg-white/10">
                Contact us
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
