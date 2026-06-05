import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, User } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Confinential Conference" },
      { name: "description", content: "Get in touch with the Confinential Conference team. Reach Bhargav at +91 99494 82005." },
      { property: "og:title", content: "Contact Confinential Conference" },
      { property: "og:description", content: "We respond within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container-page py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">Get in touch</h1>
          <p className="mt-3 text-white/80 max-w-2xl">We respond to every inquiry within 24 hours.</p>
        </div>
      </section>

      <section className="container-page py-16 grid lg:grid-cols-[1.3fr_1fr] gap-10">
        <Card className="p-8 border-border/60 shadow-elegant">
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Message sent! We'll reply shortly."); }}
            className="grid gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name *"><Input required placeholder="Your name" /></Field>
              <Field label="Email *"><Input required type="email" placeholder="you@email.com" /></Field>
              <Field label="Phone"><Input placeholder="+1 555 000 1234" /></Field>
              <Field label="Subject"><Input placeholder="How can we help?" /></Field>
            </div>
            <Field label="Message *"><Textarea required rows={6} placeholder="Tell us a little about your inquiry…" /></Field>
            <Button type="submit" variant="hero" size="lg" className="justify-self-start">Send Message</Button>
          </form>
        </Card>

        <aside className="space-y-4">
          <InfoCard icon={User} title="Owner" lines={["Bhargav"]} />
          <InfoCard icon={Phone} title="Phone" lines={["+91 99494 82005"]} />
          <InfoCard icon={Mail} title="Email" lines={["contact@confinential.com"]} />
          <InfoCard icon={MapPin} title="Office" lines={["Global HQ", "India · United Kingdom · UAE"]} />
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

function InfoCard({ icon: Icon, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <Card className="p-5 border-border/60 flex items-start gap-4">
      <div className="grid h-10 w-10 place-items-center rounded-lg gradient-brand text-white shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold text-sm">{title}</div>
        {lines.map((l) => <div key={l} className="text-sm text-muted-foreground">{l}</div>)}
      </div>
    </Card>
  );
}
