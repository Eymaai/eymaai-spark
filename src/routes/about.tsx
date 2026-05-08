import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { values } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EYMA AI" },
      { name: "description", content: "We're building the future of AI training in India — with rigor, dignity and craft. Meet the team and the philosophy behind EYMA AI." },
      { property: "og:title", content: "About — EYMA AI" },
      { property: "og:description", content: "Rigor over volume. Truth-first feedback. Craft as discipline. The philosophy behind EYMA AI." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mesh"><div className="blob" /></div>
        <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8 pt-20 lg:pt-28 pb-12">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted">
            <Link to="/" className="hover:text-amber">Home</Link> / About
          </p>
          <h1 className="mt-5 font-display text-5xl lg:text-7xl leading-[1.05]">
            We're building the <span className="italic text-amber">future</span> of AI training.
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 space-y-7 text-lg leading-[1.75] text-ink-soft">
          <Reveal><p>EYMA AI was founded on a simple conviction: the next decade of AI progress will be decided not by who has the biggest compute, but by who has the highest-quality human feedback. The models are getting smarter; the data must keep up.</p></Reveal>
          <Reveal delay={0.05}><p>We started in Delhi because India sits at a unique inflection point — a deep pool of domain experts in STEM, language, law and medicine, paired with growing demand from the world's frontier AI labs for rigorous, reproducible training data. Bridging the two is what we do.</p></Reveal>
          <Reveal delay={0.1}><p>Today, our trainers contribute to RLHF pipelines, prompt engineering, red-teaming, and Indic language datasets used by some of the most ambitious AI teams in the world. Every label, every ranking, every adversarial probe is a permanent contribution to systems millions of people will rely on.</p></Reveal>
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">A letter to our craft</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">Three things we believe.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { t: "Annotation is research", d: "We treat every task as if it were a published experiment — peer review, calibration, replication." },
              { t: "Trainers are colleagues", d: "Not a faceless workforce. Named contributors, weekly pay, and real career paths." },
              { t: "Quiet excellence wins", d: "We don't chase headlines. We chase a 99% accuracy rate, week after week, project after project." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 h-full border border-border/60">
                  <h3 className="font-display text-2xl">{c.t}</h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">Our values</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">Six principles, no compromises.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="card-hover glass rounded-2xl p-7 h-full">
                  <span className="card-icon font-display text-3xl text-amber">{v.icon}</span>
                  <h3 className="mt-5 font-display text-xl">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <div className="bg-forest text-cream rounded-3xl p-10 lg:p-16 relative overflow-hidden">
              <span className="absolute top-6 left-8 font-display text-9xl text-amber/20 leading-none">"</span>
              <blockquote className="relative font-display text-2xl lg:text-3xl leading-[1.4] italic">
                The intelligence of tomorrow will be shaped by the humans who train it today. We owe that work the same care a researcher owes their experiment, and the same dignity an artisan owes their craft.
              </blockquote>
              <p className="mt-7 font-mono text-xs uppercase tracking-[0.22em] text-amber-light/80">— EYMA AI manifesto</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-3 gap-10">
          {[
            { t: "Mission", d: "To make AI more accurate, safer, and more useful — by giving frontier labs access to the world's most rigorous human feedback." },
            { t: "Vision", d: "An AI ecosystem where India is recognized not as a low-cost annotation hub but as the gold standard for expert evaluation." },
            { t: "Culture", d: "Quiet, curious, exacting. We hire for taste and conscience as much as for skill. We push back, calibrate, and ship." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 0.1}>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">{b.t}</p>
              <p className="mt-4 text-ink leading-relaxed">{b.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
