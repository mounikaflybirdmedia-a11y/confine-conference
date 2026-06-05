import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar, MapPin, Search, ArrowRight, Sparkles } from "lucide-react";
import { conferences, catImg, type Conference } from "@/lib/conferenceData";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/conferences/")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      category: (search.category as string) || "",
      q: (search.q as string) || "",
    };
  },
  head: () => ({
    meta: [
      { title: "Conferences — Confinential Conference" },
      { name: "description", content: "Browse upcoming, ongoing, and past international conferences across medicine, engineering, AI, business, and science." },
      { property: "og:title", content: "International Conferences — Confinential" },
      { property: "og:description", content: "Discover and register for premier global conferences." },
    ],
  }),
  component: ConferencesPage,
});

function ConferencesPage() {
  const { category, q } = Route.useSearch();
  const [searchQuery, setSearchQuery] = useState(category || q || "");
  const [locationQuery, setLocationQuery] = useState("");

  useEffect(() => {
    setSearchQuery(category || q || "");
  }, [category, q]);

  // Filter conferences based on search fields
  const filtered = conferences.filter((c) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.cat.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.topics.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLocation =
      locationQuery.trim() === "" ||
      c.city.toLowerCase().includes(locationQuery.toLowerCase()) ||
      c.venue.toLowerCase().includes(locationQuery.toLowerCase());

    return matchesSearch && matchesLocation;
  });

  const grouped = {
    upcoming: filtered.filter((c) => c.status === "upcoming"),
    ongoing: filtered.filter((c) => c.status === "ongoing"),
    past: filtered.filter((c) => c.status === "past"),
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setLocationQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative container-page py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">International Conferences</h1>
          <p className="mt-3 text-white/80 max-w-2xl">Browse upcoming, ongoing, and past conferences across every major discipline.</p>
          <Card className="mt-8 p-4 grid gap-3 md:grid-cols-[1fr_1fr_auto] bg-black/35 border-white/10 backdrop-blur-md shadow-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <Input
                placeholder="Conference name, category or topic"
                className="pl-9 bg-white/10 border-white/10 text-white placeholder:text-white/50 focus:bg-white/15 focus:border-white/30 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <Input
                placeholder="Country, city or venue"
                className="pl-9 bg-white/10 border-white/10 text-white placeholder:text-white/50 focus:bg-white/15 focus:border-white/30 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              {(searchQuery || locationQuery) && (
                <Button variant="ghost" className="text-white hover:bg-white/10" onClick={handleClearSearch}>
                  Clear
                </Button>
              )}
              <Button variant="hero">Search</Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="container-page py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-16 max-w-md mx-auto">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-muted-foreground mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">No conferences found</h3>
            <p className="text-sm text-muted-foreground mt-2">
              We couldn't find any results matching your search queries. Try checking spelling or using different keywords.
            </p>
            <Button className="mt-6" variant="outline" onClick={handleClearSearch}>
              Reset Search Filters
            </Button>
          </div>
        ) : (
          <Tabs defaultValue="upcoming">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming ({grouped.upcoming.length})</TabsTrigger>
              <TabsTrigger value="ongoing">Ongoing ({grouped.ongoing.length})</TabsTrigger>
              <TabsTrigger value="past">Past ({grouped.past.length})</TabsTrigger>
            </TabsList>
            {(["upcoming", "ongoing", "past"] as const).map((k) => (
              <TabsContent key={k} value={k} className="mt-8">
                <Grid items={grouped[k]} />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </section>

      <Footer />
    </div>
  );
}

function Grid({ items }: { items: Conference[] }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 border border-dashed rounded-2xl border-border/80">
        <p className="text-muted-foreground text-sm">No conferences in this category matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((c) => (
        <Link key={c.id} to="/conferences/$id" params={{ id: c.id }} className="group block">
          <Card className="overflow-hidden border-border/60 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
            <div className="relative h-44 overflow-hidden bg-primary shrink-0">
              <img
                src={catImg[c.cat] ?? catImg["AI & Technology"]}
                alt={c.cat}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
              <span className="absolute top-3 left-3 rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs text-white">{c.cat}</span>
              {c.status === "ongoing" && (
                <span className="absolute top-3 right-3 rounded-full bg-amber-500/80 backdrop-blur px-3 py-1 text-xs text-white font-semibold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Live
                </span>
              )}
            </div>
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-display font-semibold leading-snug group-hover:text-brand-blue transition">
                  {c.title}
                </h3>
                <div className="mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-brand-blue" /> {c.date}</span>
                  <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-blue" /> {c.city}</span>
                </div>
              </div>
              <div className="mt-5 flex gap-2 items-center justify-between">
                <Button size="sm" variant="hero" className="pointer-events-none">View Details</Button>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-brand-blue group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
