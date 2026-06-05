import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { conferences } from "@/lib/conferenceData";
import { CheckCircle2, ChevronRight, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/register/$id")({
  head: ({ params }) => {
    const conf = conferences.find((c) => c.id === params.id);
    return {
      meta: [
        { title: conf ? `Register for ${conf.title} — Confinential Conference` : "Register — Confinential" },
        { name: "description", content: conf ? `Register for ${conf.title} to attend.` : "Conference registration." },
      ],
    };
  },
  loader: ({ params }) => {
    const conf = conferences.find((c) => c.id === params.id);
    if (!conf) throw notFound();
    return conf;
  },
  component: RegisterPage,
});

function RegisterPage() {
  const conf = Route.useLoaderData();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    type: conf.fee[0]?.type || "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Registration completed successfully!");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <div>
        <Header />
        
        {/* Banner */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="relative container-page py-16 text-white">
            <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/conferences" className="hover:text-white transition-colors">Conferences</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to={`/conferences/${conf.id}`} className="hover:text-white transition-colors truncate max-w-xs">{conf.title}</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white/90 font-medium">Register</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Conference Registration</h1>
            <p className="mt-2 text-white/80 max-w-2xl truncate">
              {conf.title}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="container-page py-16 flex justify-center">
          <Card className="w-full max-w-xl p-8 border-border/60 shadow-elegant">
            {submitted ? (
              <div className="text-center py-10 animate-scale-up">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 mb-5">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Registration Successful!</h2>
                <p className="text-sm text-muted-foreground mt-3 px-4 leading-relaxed">
                  You have successfully registered for <br />
                  <strong>{conf.title}</strong>.<br />
                  A confirmation email with the ticket details, schedule, and venue/link info has been sent to <strong>{formData.email}</strong>.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild variant="hero">
                    <Link to={`/conferences/${conf.id}`}>Back to Conference</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/conferences">All Conferences</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Registration Details</h2>
                  <p className="text-xs text-muted-foreground mt-1">
                    Please provide accurate information for badge printing and certification.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-1.5">
                    <label className="text-sm font-semibold text-foreground/80">Full Name *</label>
                    <Input required placeholder="Dr. John Doe" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  
                  <div className="grid gap-1.5">
                    <label className="text-sm font-semibold text-foreground/80">Email Address *</label>
                    <Input required type="email" placeholder="john.doe@university.edu" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>

                  <div className="grid gap-1.5">
                    <label className="text-sm font-semibold text-foreground/80">Phone Number *</label>
                    <Input required placeholder="+1 555 019 2834" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>

                  <div className="grid gap-1.5">
                    <label className="text-sm font-semibold text-foreground/80">Organization / University *</label>
                    <Input required placeholder="Stanford University" value={formData.org} onChange={(e) => setFormData({ ...formData, org: e.target.value })} />
                  </div>

                  <div className="grid gap-1.5">
                    <label className="text-sm font-semibold text-foreground/80">Registration Category *</label>
                    <select
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                      {conf.fee.map((f) => (
                        <option key={f.type} value={f.type}>
                          {f.type} — {f.amount}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <Link to={`/conferences/${conf.id}`} className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 order-2 sm:order-1">
                    <ArrowLeft className="h-4 w-4" /> Cancel
                  </Link>
                  <Button type="submit" variant="hero" className="w-full sm:w-auto order-1 sm:order-2 px-8">
                    Confirm & Register
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </section>
      </div>
      <Footer />
    </div>
  );
}
