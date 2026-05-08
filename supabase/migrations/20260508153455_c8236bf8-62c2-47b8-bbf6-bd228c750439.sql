
CREATE TABLE public.jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  department TEXT,
  type TEXT,
  location TEXT,
  description TEXT,
  requirements TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT,
  domain TEXT NOT NULL,
  qualification TEXT NOT NULL,
  experience_level TEXT,
  availability TEXT,
  why_join TEXT,
  sample_response TEXT,
  job_id UUID REFERENCES public.jobs(id) ON DELETE SET NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  inquiry_type TEXT,
  message TEXT NOT NULL,
  replied BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Public can read active jobs
CREATE POLICY "Public can view active jobs" ON public.jobs
  FOR SELECT USING (is_active = true);

-- Public can insert applications and contacts (via server fn that uses service role; also allow anon as fallback)
CREATE POLICY "Anyone can submit applications" ON public.applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can submit contacts" ON public.contacts
  FOR INSERT WITH CHECK (true);

-- No public SELECT on applications/contacts; only service-role (server) reads them.

-- Seed jobs
INSERT INTO public.jobs (slug, title, department, type, location, description, requirements, is_active) VALUES
('ai-trainer', 'AI Trainer & Evaluator', 'AI Training', 'contract', 'Remote',
 'Evaluate and rank AI responses across multiple domains. Provide structured human feedback that improves model quality, safety, and reasoning.',
 ARRAY['Domain expertise in STEM, language, law, or medicine','Strong analytical and writing skills','Attention to detail and consistency'], true),
('prompt-engineer', 'Prompt Engineer', 'Research', 'contract', 'Remote',
 'Design challenging prompts to test AI model capabilities and uncover failure modes through adversarial probing.',
 ARRAY['Understanding of LLM behavior','Creative problem-solving ability','Experience with AI tools preferred'], true),
('indic-language-specialist', 'Indic Language Specialist', 'Language', 'contract', 'Remote',
 'Annotate and evaluate AI outputs in Hindi and regional Indian languages. Help build models that truly speak India.',
 ARRAY['Native fluency in Hindi or a regional Indian language','Strong grammar and writing skills','Attention to linguistic nuance'], true),
('red-team-researcher', 'Red Team Researcher', 'Research', 'contract', 'Remote',
 'Stress-test frontier AI systems for safety, bias, and hallucinations. Document failure modes with rigor.',
 ARRAY['Background in AI safety, security, or ML research','Methodical, hypothesis-driven thinking','Excellent technical writing'], true),
('stem-domain-expert', 'STEM Domain Expert', 'AI Training', 'contract', 'Remote',
 'Author and evaluate technical responses in math, physics, chemistry, and engineering for advanced reasoning models.',
 ARRAY['Graduate-level expertise in a STEM field','Comfort with formal proofs and notation','Native or fluent English'], true),
('quality-reviewer', 'Quality Reviewer (QC Lead)', 'Operations', 'full-time', 'Delhi, India',
 'Lead our 3-tier QC pipeline. Calibrate trainers, audit deliveries, and uphold our 98% accuracy SLA.',
 ARRAY['3+ years in data quality, annotation, or research ops','Sharp eye for inconsistency','Comfortable building rubrics and dashboards'], true);
