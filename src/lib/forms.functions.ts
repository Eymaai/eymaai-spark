import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const applicationSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(4).max(40),
  location: z.string().trim().max(160).optional().default(""),
  domain: z.string().trim().min(1).max(80),
  qualification: z.string().trim().min(1).max(120),
  experience_level: z.string().trim().max(60).optional().default(""),
  availability: z.string().trim().max(60).optional().default(""),
  why_join: z.string().trim().max(600).optional().default(""),
  sample_response: z.string().trim().max(800).optional().default(""),
  job_id: z.string().uuid().optional().nullable(),
});

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => applicationSchema.parse(d))
  .handler(async ({ data }) => {
    const { data: row, error } = await supabaseAdmin
      .from("applications")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone,
        location: data.location || null,
        domain: data.domain,
        qualification: data.qualification,
        experience_level: data.experience_level || null,
        availability: data.availability || null,
        why_join: data.why_join || null,
        sample_response: data.sample_response || null,
        job_id: data.job_id ?? null,
      })
      .select("id")
      .single();
    if (error) {
      console.error("[submitApplication]", error);
      return { success: false, error: "Could not submit application. Please try again." };
    }
    return { success: true, id: row.id };
  });

const contactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(160).optional().default(""),
  inquiry_type: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().min(1).max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => contactSchema.parse(d))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contacts").insert({
      name: data.name,
      email: data.email,
      company: data.company || null,
      inquiry_type: data.inquiry_type || null,
      message: data.message,
    });
    if (error) {
      console.error("[submitContact]", error);
      return { success: false, error: "Could not send your message. Please try again." };
    }
    return { success: true };
  });

export const listJobs = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("jobs")
    .select("id, slug, title, department, type, location, description, requirements")
    .eq("is_active", true)
    .order("created_at", { ascending: true });
  if (error) {
    console.error("[listJobs]", error);
    return { jobs: [] };
  }
  return { jobs: data ?? [] };
});

export const getJob = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => z.object({ slug: z.string().min(1).max(120) }).parse(d))
  .handler(async ({ data }) => {
    const { data: job, error } = await supabaseAdmin
      .from("jobs")
      .select("id, slug, title, department, type, location, description, requirements")
      .eq("slug", data.slug)
      .eq("is_active", true)
      .maybeSingle();
    if (error) {
      console.error("[getJob]", error);
      return { job: null };
    }
    return { job };
  });
