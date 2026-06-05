import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FileUp, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/abstract-submission")({
  head: () => ({
    meta: [
      { title: "Submit Abstract — Confinential Conference" },
      { name: "description", content: "Submit your research abstract to international conferences. Rolling intake, reviewed within 7 days." },
      { property: "og:title", content: "Submit Your Research Abstract" },
      { property: "og:description", content: "Present your work at world-class international conferences." },
    ],
  }),
  component: SubmitPage,
});

function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Abstract received. Our review team will respond within 7 days.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container-page py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Submit Your Abstract</h1>
          <p className="mt-3 text-white/80 max-w-2xl">Share your research with a global audience. All submissions are peer-reviewed within 7 days.</p>
        </div>
      </section>

      <section className="container-page py-16 grid lg:grid-cols-[1.5fr_1fr] gap-10">
        <Card className="p-8 border-border/60 shadow-elegant">
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="h-14 w-14 mx-auto text-brand-blue" />
              <h2 className="mt-4 text-2xl font-bold">Submission received</h2>
              <p className="mt-2 text-muted-foreground">Our committee will review and respond within 7 days.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name *"><Input required placeholder="Dr. Jane Smith" /></Field>
                <Field label="Email *"><Input required type="email" placeholder="you@university.edu" /></Field>
                <Field label="Mobile Number *"><Input required placeholder="+1 555 000 1234" /></Field>
                <Field label="Country *"><Input required placeholder="United Kingdom" /></Field>
                <Field label="Organization / Institution *"><Input required placeholder="Oxford University" /></Field>
                <Field label="Abstract Category *"><Input required placeholder="Medical / AI / Engineering…" /></Field>
              </div>
              <Field label="Abstract Title *"><Input required placeholder="Title of your research" /></Field>
              <Field label="Abstract (250–400 words) *">
                <Textarea required rows={7} placeholder="Paste your abstract here…" />
              </Field>
              <Field label="Upload Abstract File (PDF/DOCX)">
                <label className="flex items-center gap-3 rounded-md border border-dashed border-border bg-secondary/40 px-4 py-6 cursor-pointer hover:bg-secondary transition">
                  <FileUp className="h-5 w-5 text-brand-blue" />
                  <span className="text-sm text-muted-foreground">Click to upload or drag a file here</span>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </label>
              </Field>
              <Field label="Message (optional)"><Textarea rows={3} placeholder="Anything we should know?" /></Field>
              <Button type="submit" variant="hero" size="lg" className="justify-self-start">Submit Abstract</Button>
            </form>
          )}
        </Card>

        <aside className="space-y-6">
          <Card className="p-6 border-border/60">
            <h3 className="font-semibold">Submission Guidelines</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Abstracts must be original and unpublished.</li>
              <li>• Length: 250–400 words.</li>
              <li>• Structured: Introduction, Methods, Results, Conclusion.</li>
              <li>• Indicate preferred presentation format (oral / poster).</li>
            </ul>
          </Card>
          <Card className="p-6 border-border/60 gradient-hero text-white">
            <h3 className="font-semibold">Need help?</h3>
            <p className="mt-2 text-sm text-white/80">Reach out to our scientific committee.</p>
            <div className="mt-4 text-sm space-y-1">
              <div>Bhargav</div>
              <div className="text-accent">+91 99494 82005</div>
            </div>
          </Card>
        </aside>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <Label className="text-sm">{label}</Label>
      {children}
    </div>
  );
}
