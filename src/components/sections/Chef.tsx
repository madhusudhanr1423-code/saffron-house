import { Reveal } from "../Reveal";
import { Award } from "lucide-react";

export function Chef() {
  return (
    <section id="chef" className="relative py-28 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-6 -z-10 rounded-full bg-primary/10 blur-3xl opacity-60"></div>
            <div className="overflow-hidden rounded-3xl">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?..."
              alt="Chef Julien Moreau"
               className="rounded-3xl w-full h-[600px] object-cover border border-primary/20 shadow-[0_25px_80px_rgba(0,0,0,0.45)] transition-all duration-700"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
      
           <div className="
absolute top-2 left-2 sm:top-8 sm:left-6
flex items-center gap-3 sm:gap-4
rounded-2xl
px-4 py-3 sm:px-6 sm:py-5
bg-black/60
backdrop-blur-xl
border border-primary/30
shadow-[0_10px_30px_rgba(212,175,55,0.15)]
">
  <Award className="text-primary shrink-0" size={20} />

  <div>
   <p className="text-white text-xs sm:text-sm font-semibold">
  BEST CHEF
</p>

<p className="text-white/70 text-[10px] sm:text-xs">
  2019 – 2026
</p>
  </div>
</div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-primary uppercase tracking-[0.35em] text-xs mb-4">Meet the Chef</p>
          <h2 className="font-display text-4xl md:text-5xl text-secondary font-semibold leading-tight">
            Chef <span className="text-gradient-gold italic">Julien Moreau</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            With over 17 years of culinary expertise, Chef Arjun Malhotra blends India's rich traditions with modern gastronomy. Every dish at Saffron House is thoughtfully crafted using seasonal ingredients, refined techniques, and an unwavering passion for exceptional dining.
          </p>
          <blockquote className="mt-10 border-l-4 border-primary pl-8 italic text-xl leading-relaxed text-secondary">
            "Cooking is memory made edible. I want every guest to leave carrying one."
          </blockquote>
          <p className="mt-5 text-primary text-sm tracking-[0.35em] uppercase">— JULIEN MOREAU</p>
        </Reveal>
      </div>
    </section>
  );
}