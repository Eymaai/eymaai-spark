import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { getJob } from "@/lib/forms.functions";
import { ArrowRight, MapPin, Briefcase, Check } from "lucide-react";

export const Route = createFileRoute("/careers/$slug")({
  loader: async ({ params }) => {
    const { job } = await getJob({ data: { slug: params.slug } });
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.job.title} — Careers at EYMA AI` },
      { name: "description", content: loaderData.job.description ?? "" },
      { property: "og:title", content: `${loaderData.job.title} — EYMA AI` },
      { property: "og:description", content: loaderData.job.description ?? "" },
    ] : [],
  }),
  component: JobPage,
});

function JobPage() {
  const { job } = Route.useLoaderData();
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mesh"><div className="blob" /></div>
        <div className="relative z-10 mx-auto max-w-4xl px-5 lg:px-8 pt-20 lg:pt-24 pb-10">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted">
            <Link to="/" className="hover:text-amber">Home</Link> /{" "}
            <Link to="/careers" className="hover:text-amber">Careers</Link> / {job.title}
          </p>
          <h1 className="mt-5 font-display text-4xl lg:text-6xl leading-[1.05]">{job.title}</h1>
          <div className="mt-6 flex flex-wrap gap-5 text-xs text-ink-muted font-mono uppercase tracking-wider">
            <span className="inline-flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" />{job.department}</span>
            <span>{job.type}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl">About the role</h2>
              <p className="mt-3 text-ink-soft leading-relaxed text-lg">{job.description}</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <h2 className="font-display text-2xl">What we're looking for</h2>
              <ul className="mt-4 space-y-3">
                {(job.requirements ?? []).map((r) => (
                  <li key={r} className="flex items-start gap-3 text-ink-soft">
                    <Check className="w-4 h-4 mt-1 text-amber shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2} className="mt-10">
              <MagneticButton
                to="/join"
                variant="primary"
                size="lg"
              >
                Apply for this role <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </Reveal>
          </div>
          <aside className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 sticky top-24">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">Hiring process</p>
              <ol className="mt-4 space-y-3 text-sm text-ink-soft">
                <li><span className="text-amber font-mono mr-2">01</span> Application review</li>
                <li><span className="text-amber font-mono mr-2">02</span> Calibration task</li>
                <li><span className="text-amber font-mono mr-2">03</span> Interview</li>
                <li><span className="text-amber font-mono mr-2">04</span> Onboarding</li>
              </ol>
              <p className="mt-6 text-xs text-ink-muted">Most candidates hear back within 5 business days.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
