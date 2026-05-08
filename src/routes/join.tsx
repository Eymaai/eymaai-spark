import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { MagneticButton } from "@/components/site/MagneticButton";
import { submitApplication } from "@/lib/forms.functions";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join EYMA AI as an AI Trainer" },
      { name: "description", content: "Apply to become an EYMA AI trainer. Three quick steps. Weekly pay, real attribution, frontier work." },
      { property: "og:title", content: "Apply as AI Trainer — EYMA AI" },
      { property: "og:description", content: "Three steps. Frontier work. Weekly pay." },
    ],
  }),
  component: Join,
});

const domains = ["STEM & Math", "Code & Engineering", "Hindi & Indic", "Legal & Medical", "Creative writing", "Other"];
const quals = ["Bachelor's", "Master's", "PhD", "Industry expert", "Other"];
const exp = ["0–2 yrs", "3–5 yrs", "6–10 yrs", "10+ yrs"];
const avail = ["5–10 hrs/wk", "10–20 hrs/wk", "20+ hrs/wk", "Full-time"];

interface FormState {
  name: string; email: string; phone: string; location: string;
  domain: string; qualification: string; experience_level: string; availability: string;
  why_join: string; sample_response: string;
}

const empty: FormState = { name:"",email:"",phone:"",location:"",domain:"",qualification:"",experience_level:"",availability:"",why_join:"",sample_response:"" };

function Join() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submit = useServerFn(submitApplication);

  const upd = <K extends keyof FormState>(k: K, v: FormState[K]) => setForm((f) => ({ ...f, [k]: v }));
  const valid0 = form.name && form.email && form.phone && form.location;
  const valid1 = form.domain && form.qualification && form.experience_level && form.availability;
  const onSubmit = async () => {
    setSubmitting(true); setError(null);
    try {
      const res = await submit({ data: form });
      if (res.success) setDone(true);
      else setError(res.error || "Could not submit");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Submission failed");
    } finally { setSubmitting(false); }
  };

  if (done) return <SuccessScreen />;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mesh"><div className="blob" /></div>
        <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8 pt-20 lg:pt-24 pb-10">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-muted">
            <Link to="/" className="hover:text-amber">Home</Link> / Join Us
          </p>
          <h1 className="mt-5 font-display text-4xl lg:text-6xl leading-[1.05]">
            Become an <span className="italic text-amber">EYMA</span> trainer.
          </h1>
          <p className="mt-5 max-w-xl text-ink-soft">Three steps. Takes about four minutes.</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3 text-xs font-mono uppercase tracking-wider text-ink-muted">
                <span>Step {step + 1} of 3</span>
                <span>{["Personal", "Expertise", "Tell us"][step]}</span>
              </div>
              <div className="h-1 bg-sand rounded-full overflow-hidden">
                <motion.div className="h-full bg-amber rounded-full" animate={{ width: `${((step + 1) / 3) * 100}%` }} transition={{ duration: 0.5 }} />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="s0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }} className="space-y-5">
                  <Field label="Full name" value={form.name} onChange={(v) => upd("name", v)} />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => upd("email", v)} />
                  <Field label="Phone" value={form.phone} onChange={(v) => upd("phone", v)} />
                  <Field label="City, State" value={form.location} onChange={(v) => upd("location", v)} />
                </motion.div>
              )}
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }} className="space-y-6">
                  <Select label="Domain" value={form.domain} onChange={(v) => upd("domain", v)} options={domains} />
                  <Select label="Highest qualification" value={form.qualification} onChange={(v) => upd("qualification", v)} options={quals} />
                  <Pills label="Experience level" value={form.experience_level} onChange={(v) => upd("experience_level", v)} options={exp} />
                  <Pills label="Availability" value={form.availability} onChange={(v) => upd("availability", v)} options={avail} />
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }} className="space-y-6">
                  <Textarea label="Why do you want to train AI?" value={form.why_join} onChange={(v) => upd("why_join", v)} max={300} />
                  <Textarea label="Rate a sample AI response — and explain why" value={form.sample_response} onChange={(v) => upd("sample_response", v)} max={400} />
                </motion.div>
              )}
            </AnimatePresence>

            {error && <p className="mt-5 text-sm text-destructive">{error}</p>}

            <div className="mt-10 flex items-center justify-between">
              {step > 0 ? (
                <button onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <span />}
              {step < 2 ? (
                <MagneticButton
                  onClick={() => setStep((s) => s + 1)}
                  variant="primary"
                  size="lg"
                  className={(step === 0 ? !valid0 : !valid1) ? "opacity-50 pointer-events-none" : ""}
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              ) : (
                <MagneticButton onClick={onSubmit} variant="primary" size="lg" disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit application"}
                </MagneticButton>
              )}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="glass rounded-2xl p-6 lg:sticky lg:top-24">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">Why join EYMA AI</p>
              <ul className="mt-5 space-y-4 text-sm text-ink-soft">
                {[
                  ["💸", "Weekly pay, no chasing"],
                  ["🎓", "Calibration with senior reviewers"],
                  ["🌍", "Frontier projects, real attribution"],
                  ["🤝", "NDA-protected, dignified work"],
                ].map(([i, t]) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="text-base">{i}</span><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-amber transition-colors" />
    </div>
  );
}
function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-amber transition-colors">
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
function Pills({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button key={o} type="button" onClick={() => onChange(o)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              value === o ? "bg-forest text-cream border-forest" : "bg-white border-border text-ink-soft hover:border-ink/40"
            }`}>{o}</button>
        ))}
      </div>
    </div>
  );
}
function Textarea({ label, value, onChange, max }: { label: string; value: string; onChange: (v: string) => void; max: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-xs font-mono uppercase tracking-wider text-ink-muted">{label}</label>
        <span className="text-xs text-ink-muted">{value.length}/{max}</span>
      </div>
      <textarea value={value} maxLength={max} rows={4} onChange={(e) => onChange(e.target.value)}
        className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-amber transition-colors resize-none" />
    </div>
  );
}

function SuccessScreen() {
  return (
    <section className="min-h-[70vh] grid place-items-center px-5 py-20">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md">
        <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 grid place-items-center">
          <Check className="w-8 h-8 text-emerald-700" />
        </div>
        <h1 className="mt-6 font-display text-4xl">You're in the pile.</h1>
        <p className="mt-4 text-ink-soft">Thanks for applying. We review every submission and you'll hear back within 5 business days at the email you provided.</p>
        <Link to="/" className="mt-8 inline-flex items-center rounded-full bg-forest text-cream px-6 py-3 text-sm hover:bg-forest-light transition-colors">Back home</Link>
      </motion.div>
    </section>
  );
}
