import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-conference.jpg";
import { conferences } from "@/lib/conferenceData";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState, useRef } from "react";

import {
  MapPin, Calendar as CalIcon, ArrowRight, Stethoscope, Cpu, Brain,
  Briefcase, FlaskConical, HeartPulse, GraduationCap, Pill, Leaf, Activity,
  Globe2, Users, Award, BookOpen, Network, Sparkles, Mail, Quote, Star,
} from "lucide-react";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const matches = value.match(/^([\d,.]+)(.*)$/);
    if (!matches) {
      setDisplayValue(value);
      return;
    }

    const rawNum = matches[1].replace(/,/g, "");
    const suffix = matches[2];
    const target = parseFloat(rawNum);
    const isInt = !rawNum.includes(".");

    let observer: IntersectionObserver | null = null;
    let frameId: number;

    const startAnimation = () => {
      const startTime = performance.now();
      const duration = 2000; // 2 seconds

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = target * easeProgress;

        let formatted = "";
        if (isInt) {
          formatted = Math.floor(current).toLocaleString();
        } else {
          formatted = current.toFixed(1);
        }

        setDisplayValue(`${formatted}${suffix}`);

        if (progress < 1) {
          frameId = requestAnimationFrame(animate);
        }
      };

      frameId = requestAnimationFrame(animate);
    };

    const element = containerRef.current;
    if (element) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnimation();
            if (observer) observer.unobserve(element);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(element);
    }

    return () => {
      if (observer && element) {
        observer.unobserve(element);
      }
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <div ref={containerRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-display bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
        {displayValue}
      </div>
      <div className="mt-2 text-sm text-white/75">{label}</div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Confinential Conference — World-Class International Conferences" },
      { name: "description", content: "Connecting global researchers, scientists & innovators through premier international conferences across medical, engineering, AI, science & business." },
      { property: "og:title", content: "Confinential Conference — Global Research Conferences" },
      { property: "og:description", content: "Submit abstracts, register, and network at world-class international conferences." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const categories = [
  { icon: Stethoscope, label: "Medical" },
  { icon: Cpu, label: "Engineering" },
  { icon: Brain, label: "AI & Technology" },
  { icon: Briefcase, label: "Business" },
  { icon: FlaskConical, label: "Science" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: Pill, label: "Pharmaceutical" },
  { icon: Leaf, label: "Environmental" },
  { icon: Activity, label: "Nursing" },
];

const upcoming = conferences.filter((c) => c.status === "upcoming").slice(0, 6);

const stats = [
  { value: "850+", label: "Conferences Conducted" },
  { value: "12,400+", label: "Global Speakers" },
  { value: "90+", label: "Countries Participated" },
  { value: "45K+", label: "Research Papers" },
];

const features = [
  { icon: Globe2, title: "Global Speakers", desc: "Eminent keynote speakers from top institutions in 90+ countries." },
  { icon: Network, title: "International Networking", desc: "Connect with peers, collaborators, and industry leaders worldwide." },
  { icon: BookOpen, title: "Publication Opportunities", desc: "Papers published in indexed journals and conference proceedings." },
  { icon: Award, title: "Certification", desc: "Internationally recognized participation and presentation certificates." },
  { icon: Users, title: "Research Collaboration", desc: "Cross-border collaboration with universities and R&D organizations." },
  { icon: Sparkles, title: "Academic Excellence", desc: "Rigorous peer review, world-class venues, premium delegate experience." },
];

const speakers = [
  { name: "Dr. Elena Marchetti", role: "Professor of Neuroscience", org: "ETH Zürich", country: "Switzerland" },
  { name: "Prof. Hiroshi Tanaka", role: "Director, AI Research Lab", org: "University of Tokyo", country: "Japan" },
  { name: "Dr. Amara Okafor", role: "Chief of Oncology", org: "Mayo Clinic", country: "USA" },
  { name: "Prof. Rajesh Iyer", role: "Dean of Engineering", org: "IIT Bombay", country: "India" },
];

const testimonials = [
  { quote: "An exceptionally well-organized conference. Networking opportunities were world-class.", name: "Dr. Sophia Lin", role: "Research Scientist, NUS" },
  { quote: "Confinential set a new benchmark for academic conferences in Asia and Europe.", name: "Prof. Daniel Becker", role: "TU Munich" },
  { quote: "From abstract submission to publication — every step was seamless and professional.", name: "Dr. Priya Nair", role: "AIIMS Delhi" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: "90vh" }}>
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="International conference stage"
            className="h-full w-full object-cover object-center"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative container-page py-36 md:py-52 text-white flex flex-col justify-center" style={{ minHeight: "90vh" }}>
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-white/90">
              <Sparkles className="h-3.5 w-3.5 text-accent" /> Premier Global Conference Platform
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05]">
              Connecting Global Researchers Through{" "}
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
                World-Class Conferences
              </span>
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl">
              Join 12,000+ scientists, doctors, and innovators across 90+ countries. Submit abstracts, present research, and shape the future at Confinential Conference.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/conferences">Explore Conferences <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/abstract-submission">Submit Abstract</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/conferences">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* CATEGORIES */}
      <section className="container-page pt-16 md:pt-20">
        <SectionTitle eyebrow="Conference Categories" title="Explore by discipline" subtitle="A global calendar spanning every major research domain." />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map(({ icon: Icon, label }) => (
            <Link key={label} to="/conferences" search={{ category: label }} className="block">
              <Card className="group p-5 hover:shadow-elegant hover:-translate-y-1 transition-all border-border/60 h-full cursor-pointer">
                <div className="grid h-11 w-11 place-items-center rounded-lg gradient-brand text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold text-sm group-hover:text-brand-blue transition-colors">{label}</div>
                <div className="mt-1 text-xs text-muted-foreground">Conferences</div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* UPCOMING */}
      <section className="container-page mt-24">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionTitle eyebrow="Upcoming" title="Featured upcoming conferences" subtitle="Reserve your spot at our flagship events around the world." className="mb-0" />
          <Button asChild variant="outline"><Link to="/conferences">View all <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((c) => (
            <Link key={c.id} to="/conferences/$id" params={{ id: c.id }} className="group block">
              <Card className="overflow-hidden border-border/60 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  <img src={c.img} alt={c.cat} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs text-white">{c.cat}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg leading-snug group-hover:text-brand-blue transition">{c.title}</h3>
                  <div className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2"><CalIcon className="h-4 w-4 text-brand-blue" /> {c.date}</span>
                    <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-blue" /> {c.city}</span>
                  </div>
                  <div className="mt-5 flex gap-2">
                    <Button size="sm" variant="hero" className="pointer-events-none">View Details</Button>
                    <ArrowRight className="h-4 w-4 text-muted-foreground self-center group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-28 bg-secondary/40">
        <div className="container-page py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle eyebrow="About Us" title="A global stage for ideas that matter" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Confinential Conference is a premier international platform dedicated to advancing science, technology, medicine, and business through world-class academic gatherings. We connect researchers, scholars, and industry leaders across 90+ countries.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <Pillar title="Our Mission" desc="Empower researchers to share, collaborate, and accelerate global innovation." />
              <Pillar title="Our Vision" desc="Be the world's most trusted conference platform for academia and industry." />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 gradient-brand opacity-20 blur-3xl rounded-3xl" />
            <Card className="relative p-8 shadow-elegant border-border/60">
              <div className="grid grid-cols-2 gap-6">
                {features.slice(0, 4).map((f) => (
                  <div key={f.title}>
                    <div className="grid h-10 w-10 place-items-center rounded-lg gradient-brand text-white">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-3 font-semibold">{f.title}</div>
                    <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container-page mt-24">
        <SectionTitle eyebrow="Why Choose Us" title="Built for serious researchers" subtitle="Premium experience from abstract submission to publication." />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="p-6 border-border/60 hover:-translate-y-1 hover:shadow-elegant transition">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow-glow">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

// STATS
      <section className="mt-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container-page py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {stats.map((s) => (
            <AnimatedCounter key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* SPEAKERS */}
      <section id="speakers" className="container-page mt-24">
        <SectionTitle eyebrow="Featured Speakers" title="Voices shaping global research" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((s, i) => (
            <Card key={s.name} className="overflow-hidden border-border/60 hover:shadow-elegant transition group">
              <div className="h-48 gradient-hero relative">
                <div className="absolute inset-0 grid place-items-center text-white/90 text-5xl font-display font-bold opacity-30">
                  {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div className="absolute bottom-3 left-3 rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs text-white">{s.country}</div>
              </div>
              <div className="p-5">
                <div className="font-semibold">{s.name}</div>
                <div className="text-xs text-brand-blue font-medium mt-0.5">{s.role}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.org}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CALL FOR PAPERS */}
      <section className="container-page mt-24">
        <Card className="overflow-hidden border-border/60 grid md:grid-cols-[1.2fr_1fr]">
          <div className="p-10 md:p-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">Call For Papers</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Submit your research to a global audience</h2>
            <p className="mt-4 text-muted-foreground">
              We invite original research, reviews, and case studies across all disciplines. Selected papers are published in indexed proceedings and partner journals.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-blue" /> Abstract deadline: Rolling intake, reviewed within 7 days</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-blue" /> Full paper submission: 30 days before conference</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-blue" /> Publication: Indexed journal proceedings with DOI</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <Button asChild variant="hero" size="lg"><Link to="/abstract-submission">Submit Abstract</Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/conferences">Browse Topics</Link></Button>
            </div>
          </div>
          <div className="gradient-hero p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative">
              <BookOpen className="h-10 w-10 text-accent" />
              <div className="mt-6 text-5xl font-display font-bold">45K+</div>
              <div className="text-white/80 mt-1">Research papers published through our partner journals.</div>
            </div>
          </div>
        </Card>
      </section>

      {/* SPONSORS */}
      <section className="container-page mt-24">
        <SectionTitle eyebrow="Sponsors & Partners" title="Trusted by global institutions" />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {["Oxford", "Stanford", "MIT", "ETH", "NUS", "IIT"].map((p) => (
            <Card key={p} className="h-20 grid place-items-center border-border/60 font-display font-semibold text-muted-foreground hover:text-foreground transition">
              {p}
            </Card>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-page mt-24">
        <SectionTitle eyebrow="Testimonials" title="Loved by researchers worldwide" />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6 border-border/60 hover:shadow-elegant transition">
              <Quote className="h-7 w-7 text-brand-cyan" />
              <p className="mt-4 text-sm leading-relaxed">{t.quote}</p>
              <div className="mt-5 flex items-center gap-1 text-brand-blue">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <div className="mt-3 font-semibold text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container-page mt-24">
        <Card className="p-10 md:p-14 border-border/60 gradient-hero text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_0%,white,transparent_60%)]" />
          <div className="relative max-w-2xl mx-auto">
            <Mail className="h-10 w-10 mx-auto text-accent" />
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Stay in the loop</h2>
            <p className="mt-3 text-white/80">Get monthly updates on upcoming conferences, calls for papers, and speaker announcements.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="you@university.edu" className="bg-white/95 text-foreground" />
              <Button type="submit" variant="hero" size="lg">Subscribe</Button>
            </form>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
}

function SectionTitle({ eyebrow, title, subtitle, className = "" }: { eyebrow: string; title: string; subtitle?: string; className?: string }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">{eyebrow}</span>
      <h2 className="mt-2 text-3xl md:text-4xl font-bold">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <div className="font-semibold">{title}</div>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </div>
  );
}
