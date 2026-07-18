import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../Reveal";
import { MENU } from "../../data/restaurant";

export function Menu() {
  const categories = Object.keys(MENU);
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="menu" className="py-28 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="The Menu"
          title="Seasonal · Sculptural · Sincere"
          subtitle="Our menu changes with the harvest. Below, a taste of what awaits this season."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
             className={`px-7 py-3 rounded-full text-sm tracking-[0.15em] transition-all duration-300 ${
                active === c
                  ? "btn-gold shadow-lg"
                  : "border border-white/10 text-secondary/80 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="sync">
          <p className="text-center text-primary uppercase tracking-[0.35em] text-xs mb-8">
  {active}
</p>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="grid md:grid-cols-2 gap-x-14 gap-y-8"
          >
            {MENU[active].map((item) => (
              <div key={item.name} className="group border-b border-white/10 pb-6 transition-all duration-300 hover:border-primary/30">
                <div className="flex items-center gap-4">
  <h3 className="font-display text-xl text-secondary transition-colors duration-300 group-hover:text-primary">
    {item.name}
  </h3>

  <div className="flex-1 border-b border-dashed border-primary/20"></div>

  <span className="text-primary font-semibold text-lg">
    {item.price}
  </span>
</div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}