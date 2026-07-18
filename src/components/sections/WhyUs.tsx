import { SectionHeading, Reveal } from "../Reveal";
import { ChefHat, Wine, Utensils, Award } from "lucide-react";

const FEATURES = [
  { icon: ChefHat, title: "Master Chef", desc: "Three-Michelin-star kitchen led by Chef Julien Moreau." },
  { icon: Utensils, title: "Seasonal Menu", desc: "Ingredients sourced daily from artisan producers." },
  { icon: Wine, title: "Curated Cellar", desc: "600+ labels selected by our head sommelier." },
  { icon: Award, title: "Award Winning", desc: "Recognized among the World's 50 Best Restaurants." },
];

export function WhyUs() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Why Auréa" title="Details you'll feel, remember, and return for." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="group glass-card rounded-3xl p-8 h-full border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
                <div className="h-14 w-14 rounded-2xl grid place-items-center mb-6 transition-transform duration-500 group-hover:scale-105" style={{ background: "var(--gradient-gold)" }}>
                  <f.icon className="text-background" size={24} />
                </div>
                <h3 className="text-xl font-display text-secondary mb-2 transition-colors duration-300 group-hover:text-primary">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                <div className="mt-6 w-12 h-px bg-primary/30 transition-all duration-300 group-hover:w-20"></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}