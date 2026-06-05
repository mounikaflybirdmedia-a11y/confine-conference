import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { conferences } from "@/lib/conferenceData";
import {
  Calendar, MapPin, ArrowLeft, Users, BookOpen,
  Clock, Award, ChevronRight, Mail,
} from "lucide-react";

export const Route = createFileRoute("/conferences/$id")({
  head: ({ params }) => {
    const conf = conferences.find((c) => c.id === params.id);
    return {
      meta: [
        { title: conf ? `${conf.title} — Confinential Conference` : "Conference — Confinential" },
        { name: "description", content: conf?.description ?? "International conference details." },
      ],
    };
  },
  loader: ({ params }) => {
    const conf = conferences.find((c) => c.id === params.id);
    if (!conf) throw notFound();
    return conf;
  },
  component: ConferenceDetailPage,
});

function ConferenceDetailPage() {
  const conf = Route.useLoaderData();

  const statusColor =
    conf.status === "upcoming"
      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
      : conf.status === "ongoing"
      ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
      : "bg-white/10 text-white/60 border border-white/20";

  const statusLabel =
    conf.status === "upcoming" ? "Upcoming" : conf.status === "ongoing" ? "Live Now" : "Past Event";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO BANNER */}
      <section className="relative overflow-hidden py-20 md:py-28 flex items-center min-h-[480px] md:min-h-[560px]">
        <div className="absolute inset-0">
          <img
            src={conf.img}
            alt={conf.cat}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container-page text-white w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/conferences" className="hover:text-white transition-colors">Conferences</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white/90 truncate max-w-xs">{conf.title}</span>
          </div>

          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${statusColor}`}>
            {conf.status === "ongoing" && <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />}
            {statusLabel}
          </span>
          <span className="ml-2 inline-flex items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs text-white">
            {conf.cat}
          </span>

          <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            {conf.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-5 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-brand-cyan" /> {conf.date}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-cyan" /> {conf.city}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {conf.status !== "past" && (
              <Button asChild variant="hero" size="lg">
                <Link to="/register/$id" params={{ id: conf.id }}>Register Now</Link>
              </Button>
            )}
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/abstract-submission">Submit Abstract</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-white border border-white/20 hover:bg-white/10">
              <Link to="/conferences">
                <ArrowLeft className="mr-2 h-4 w-4" /> All Conferences
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="container-page py-16 grid lg:grid-cols-[1fr_340px] gap-10">
        {/* LEFT */}
        <div className="space-y-12">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">About the Conference</h2>
            <p className="text-muted-foreground leading-relaxed text-base">{conf.description}</p>
          </div>

          {/* Topics */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Conference Topics</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {conf.topics.map((topic, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border/70 bg-secondary/30 hover:border-brand-blue/40 transition">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg gradient-brand text-white text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Speakers */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Featured Speakers</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {conf.speakers.map((s) => (
                <Card key={s.name} className="overflow-hidden border-border/60 hover:shadow-elegant transition group">
                  <div className="h-28 gradient-hero relative">
                    <div className="absolute inset-0 grid place-items-center text-white/20 text-5xl font-bold font-display">
                      {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-sm">{s.name}</div>
                    <div className="text-xs text-brand-blue font-medium mt-0.5">{s.role}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.org}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Venue */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Venue</h2>
            <Card className="p-6 border-border/60 flex items-start gap-4">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg gradient-brand text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">{conf.city}</div>
                <div className="text-sm text-muted-foreground mt-1">{conf.venue}</div>
              </div>
            </Card>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* Key Dates */}
          <Card className="p-6 border-border/60">
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
              <Clock className="h-5 w-5 text-brand-blue" /> Key Dates
            </h3>
            <div className="space-y-3">
              {conf.deadlines.map((d) => (
                <div key={d.label} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="text-sm text-muted-foreground">{d.label}</span>
                  <span className="text-sm font-semibold text-brand-blue">{d.date}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Registration Fees */}
          <Card className="p-6 border-border/60">
            <h3 className="font-bold text-lg mb-5 flex items-center gap-2">
              <Award className="h-5 w-5 text-brand-blue" /> Registration Fee
            </h3>
            <div className="space-y-3">
              {conf.fee.map((f) => (
                <div key={f.type} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <span className="text-sm text-muted-foreground">{f.type}</span>
                  <span className="text-sm font-bold text-foreground">{f.amount}</span>
                </div>
              ))}
            </div>
            {conf.status !== "past" && (
              <Button asChild variant="hero" className="w-full mt-5">
                <Link to="/register/$id" params={{ id: conf.id }}>Register Now</Link>
              </Button>
            )}
          </Card>

          {/* Submit Abstract */}
          {conf.status !== "past" && (
            <Card className="p-6 border-border/60 gradient-hero text-white relative overflow-hidden">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <BookOpen className="h-8 w-8 text-brand-cyan mb-3" />
                <h3 className="font-bold text-lg">Submit Your Abstract</h3>
                <p className="text-sm text-white/75 mt-2">
                  Share your research with a global audience. Peer-reviewed and published in indexed journals.
                </p>
                <Button asChild variant="heroOutline" className="w-full mt-5">
                  <Link to="/abstract-submission">Submit Abstract</Link>
                </Button>
              </div>
            </Card>
          )}

          {/* Contact */}
          <Card className="p-6 border-border/60">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Mail className="h-5 w-5 text-brand-blue" /> Need Help?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Contact our team for registration queries, abstract submissions, or sponsorship opportunities.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </Card>

          {/* Stats */}
          <Card className="p-6 border-border/60 bg-secondary/30">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-brand-blue" /> Event Highlights
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { val: "500+", lbl: "Delegates" },
                { val: "50+", lbl: "Speakers" },
                { val: "90+", lbl: "Countries" },
                { val: "3", lbl: "Days" },
              ].map((s) => (
                <div key={s.lbl} className="py-3 rounded-lg bg-background/80 border border-border/50">
                  <div className="text-xl font-bold text-brand-blue">{s.val}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
