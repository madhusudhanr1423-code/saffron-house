import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { NAV_LINKS } from "../data/restaurant";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-16 md:grid-cols-4">
        <div>
        <h3 className="text-2xl font-display text-gradient-gold mb-3 transition-transform duration-300 hover:scale-105 inline-block">SAFFRON HOUSE</h3>
          <div className="w-14 h-px bg-primary/40 mb-4"></div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            A modern fine-dining destination — seasonal, sculptural, sincere.
          </p>
        </div>
        <div>
          <h4 className="text-secondary font-semibold mb-4 text-sm uppercase tracking-widest">Explore</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-primary text-sm transition-all duration-300 hover:translate-x-1 inline-block">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-secondary font-semibold mb-4 text-sm uppercase tracking-widest">Visit</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin size={16} className="text-primary mt-0.5 shrink-0" /> 18 MG Road Bengaluru, Karnataka 560001</li>
            <li className="flex gap-2"><Phone size={16} className="text-primary mt-0.5 shrink-0" /> +91 7842431423</li>
            <li className="flex gap-2"><Mail size={16} className="text-primary mt-0.5 shrink-0" />  reservations@saffronhouse.in</li>
          </ul>
        </div>
        <div>
          <h4 className="text-secondary font-semibold mb-4 text-sm uppercase tracking-widest">Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><Clock size={16} className="text-primary mt-0.5" /> Tue – Sat · 6pm – 11pm</li>
            <li className="flex gap-2"><Clock size={16} className="text-primary mt-0.5" /> Sun · 12pm – 3pm</li>
            <li>Closed Mondays</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
       © {new Date().getFullYear()} Saffron House • Contemporary Indian Fine Dining.
      </div>
    </footer>
  );
}