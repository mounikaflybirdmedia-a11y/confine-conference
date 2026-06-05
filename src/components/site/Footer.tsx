import { Link } from "@tanstack/react-router";
import { Globe2, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-lg gradient-brand">
              <Globe2 className="h-5 w-5" />
            </span>
            Confinential Conference
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
            A premier platform connecting global researchers, scientists, and innovators through world-class international conferences.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/conferences" className="hover:text-accent">Upcoming Conferences</Link></li>
            <li><Link to="/abstract-submission" className="hover:text-accent">Submit Abstract</Link></li>
            <li><Link to="/" hash="speakers" className="hover:text-accent">Speakers</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/conferences" search={{ category: "Medical" }} className="hover:text-accent transition-colors">Medical & Healthcare</Link></li>
            <li><Link to="/conferences" search={{ category: "Engineering" }} className="hover:text-accent transition-colors">Engineering & Technology</Link></li>
            <li><Link to="/conferences" search={{ category: "AI & Technology" }} className="hover:text-accent transition-colors">AI & Data Science</Link></li>
            <li><Link to="/conferences" search={{ category: "Business" }} className="hover:text-accent transition-colors">Business & Management</Link></li>
            <li><Link to="/conferences" search={{ category: "Pharma" }} className="hover:text-accent transition-colors">Pharmaceutical & Nursing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +91 99494 82005</li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" /> 
              <a href="mailto:contact@confinential.com" className="hover:text-accent transition-colors">contact@confinential.com</a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-primary transition" href="#"><Linkedin className="h-4 w-4" /></a>
            <a aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-primary transition" href="#"><Twitter className="h-4 w-4" /></a>
            <a aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-accent hover:text-primary transition" href="#"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} Confinential Conference. All rights reserved.</span>
          <span>Owner: Bhargav · Designed for global researchers</span>
        </div>
      </div>
    </footer>
  );
}
