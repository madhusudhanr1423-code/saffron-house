import { Reveal, SectionHeading } from "../Reveal";
import { Counter } from "../Counter";
import { STATS } from "../../data/restaurant";
import { Leaf, Award, Wine } from "lucide-react";

const FEATURES = [
  {
    icon: Leaf,
    title: "Farm Fresh Ingredients",
    text: "Seasonal produce sourced daily from trusted local farms."
  },
  {
    icon: Award,
    title: "Award-Winning Cuisine",
    text: "Every menu reflects years of culinary expertise and creativity."
  },
  {
    icon: Wine,
    title: "Curated Wine Selection",
    text: "Handpicked wines perfectly paired with every signature dish."
  }
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <Reveal>
          <div className="relative group">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
              alt="Saffron House dining room"
             className="rounded-3xl w-full h-[560px] object-cover shadow-[0_25px_80px_rgba(0,0,0,0.45)] border border-primary/20 transition-all duration-500 group-hover:scale-[1.03]"
              />
            
            {/* <div className="absolute -bottom-8 -right-6 glass-card rounded-2xl p-6 max-w-[220px] hidden md:block">
              <p className="text-gradient-gold font-display text-4xl font-bold">
  15+
</p>

<p className="text-secondary font-medium mt-2">
  Years of Excellence
</p>

<p className="text-muted-foreground text-sm mt-1">
  Creating unforgettable dining experiences since 2009.
</p>
            </div> */}
            <div className="absolute -bottom-8 -right-6 hidden md:block">
  <div className="glass-card rounded-3xl p-6 backdrop-blur-xl border border-primary/30 shadow-[0_25px_60px_rgba(0,0,0,0.35)] max-w-[240px] hover:-translate-y-2 transition-all duration-500">
    <span className="text-gradient-gold font-display text-5xl font-bold">
      15+
    </span>

    <h4 className="text-secondary font-semibold mt-2">
      Years of Excellence
    </h4>

    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
      Delivering unforgettable fine dining experiences with timeless culinary craftsmanship.
    </p>
  </div>
</div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            center={false}
            eyebrow="Our Story"
            title="Where quiet craft meets bold flavor."
            subtitle="Founded in 2009, Saffron House was created with a vision to redefine fine dining through seasonal ingredients, timeless techniques, and genuine hospitality. Every dish is carefully crafted to celebrate flavor, artistry, and the joy of sharing unforgettable moments around the table.">
            </SectionHeading>
            <div>
  <div className="grid gap-5 mt-8">
  {FEATURES.map((feature) => {
    const Icon = feature.icon;

    return (
      <div
        key={feature.title}
        className="group flex items-start gap-5 rounded-2xl border border-white/15 bg-white/[0.03] p-5 transition-all duration-500 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-1"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/25 text-primary transition-transform duration-500 group-hover:scale-110">
          <Icon size={22} />
        </div>

        <div>
          <h4 className="font-semibold text-secondary">
            {feature.title}
          </h4>

          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {feature.text}
          </p>
        </div>
      </div>
    );
  })}
</div>
</div>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
              {STATS.map((s) => (
                <div key={s.label} className="group glass-card rounded-2xl p-5 sm:p-6 border border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)]" >
                  <Counter to={s.value} suffix={s.suffix} />
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}