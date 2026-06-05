import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X, Globe2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/conferences", label: "Conferences" },
  { to: "/#about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegisterClick = (e: React.MouseEvent) => {
    if (
      typeof window !== "undefined" &&
      window.location.pathname.startsWith("/conferences/") &&
      window.location.pathname.length > 13
    ) {
      e.preventDefault();
      const confId = window.location.pathname.substring(13);
      navigate({ to: "/register/$id", params: { id: confId } });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/60">
      <div className="container-page flex h-16 items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2 font-display font-bold text-lg">
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-brand text-white shadow-glow">
            <Globe2 className="h-5 w-5" />
          </span>
          <span className="text-foreground">
            Confinential<span className="gradient-text"> Conference</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/75 hover:text-foreground transition-colors whitespace-nowrap"
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex shrink-0 items-center gap-3">
          <Button asChild variant="ghost" size="sm">
            <Link to="/abstract-submission">Submit Abstract</Link>
          </Button>
          <Button asChild variant="hero" size="sm">
            <Link to="/conferences" onClick={handleRegisterClick}>Register Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium hover:text-brand-blue transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-3">
              <Button asChild variant="outline" className="flex-1">
                <Link to="/abstract-submission" onClick={() => setOpen(false)}>Submit Abstract</Link>
              </Button>
              <Button asChild variant="hero" className="flex-1">
                <Link to="/conferences" onClick={handleRegisterClick}>Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
