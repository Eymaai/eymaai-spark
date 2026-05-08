import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { listJobs } from "@/lib/forms.functions";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — EYMA AI" },
      { name: "description", content: "Join EYMA AI. Open roles in AI training, research, language, and operations. Remote-friendly. Frontier-quality work." },
      { property: "og:title", content: "Careers — EYMA AI" },
      { property: "og:description", content: "Open roles for trainers, researchers, language specialists and operators." },
    ],
  }),
  component: Careers,
});

const filters = ["All", "AI Training", "Research", "Language", "Operations"];

function Careers() {
  const fetchJobs = useServerFn(listJobs);
  const { data, isLoading } = useQuery({ queryKey: ["jobs"], queryFn: () => fetchJobs() });
  const [filter, setFilter] = useState("All");
  const jobs = data?.jobs ?? [];
  const visible = filter === "All" ? jobs : jobs.filter((j) => j.department === filter);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mesh"><div className="blob" /></div>
        <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8 pt-20 lg:pt-28 pb-12">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted">
            <Link to="/" className="hover:text-amber">Home</Link> / Careers
          </p>
          <h1 className="mt-5 font-display text-5xl lg:text-7xl leading-[1.05]">
            Help us build <span className="italic text-amber">smarter</span> AI.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            We hire experts who care about getting things right — and who want their work to compound into systems that millions will use.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">What we offer</p>
            <h2 className="mt-4 font-display text-3xl lg:text-4xl">More than a side gig.</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: "Weekly pay", d: "Cleared every Friday, no chasing." },
              { t: "Real attribution", d: "Credit on internal model cards." },
              { t: "Skill leveling", d: "Calibration sessions with senior reviewers." },
              { t: "Frontier work", d: "RLHF, red-team, evals — not click farms." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.06}>
                <div className="bg-cream rounded-2xl p-6 border border-border/60 h-full">
                  <h3 className="font-display text-xl">{c.t}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-amber">Open roles</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl">Find your seat.</h2>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === f ? "bg-forest text-cream" : "bg-white border border-border text-ink-soft hover:border-ink/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {isLoading && <p className="text-ink-muted">Loading roles…</p>}
            {!isLoading && visible.length === 0 && <p className="text-ink-muted">No roles match that filter right now.</p>}
            {visible.map((j, i) => (
              <Reveal key={j.id} delay={i * 0.04}>
                <Link
                  to="/careers/$slug"
                  params={{ slug: j.slug }}
                  className="card-hover group block bg-white rounded-2xl border border-border/60 px-6 py-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl">{j.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-xs text-ink-muted font-mono uppercase tracking-wider">
                        <span className="inline-flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" />{j.department}</span>
                        <span>{j.type}</span>
                        <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{j.location}</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm text-forest group-hover:text-amber transition-colors">
                      View role <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 text-center">
          <Reveal>
            <p className="text-ink-soft leading-relaxed">
              EYMA AI is an equal opportunity employer. We welcome applications from candidates of every background, and we make hiring decisions on craft, conscience, and capability.
            </p>
            <div className="mt-8 inline-block">
              <MagneticButton to="/join" variant="primary" size="lg">
                Apply as AI Trainer <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
