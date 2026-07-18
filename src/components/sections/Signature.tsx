import { motion } from "framer-motion";
import { SectionHeading } from "../Reveal";
import { SIGNATURE_DISHES } from "../../data/restaurant";

export function Signature() {
  return (
    <section id="signature" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Signature Dishes"
          title="Plates that define us."
          subtitle="A curated selection of the dishes our guests return for again and again."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {SIGNATURE_DISHES.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6,
                transition: { duration: 0.3}
               }}
             className="group glass-card rounded-3xl overflow-hidden border border-white/15 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]"
            >
             <div className="overflow-hidden relative">
  <img
    loading="lazy"
    src={d.image}
    alt={d.name}
    className="w-full h-72 object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
  />

  <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/25"></div>

  {i === 0 && (
    <div className="absolute top-5 left-5 rounded-full bg-primary/90 px-4 py-2 backdrop-blur-md">
      <span className="text-xs uppercase tracking-[0.2em] text-background font-semibold">
        Signature
      </span>
    </div>
  )}
</div>
              <div className="p-8">
                <div className="flex items-center gap-4">
                  <h3 className="font-display text-2xl text-secondary">{d.name}</h3>
                  <div className="flex-1 border-b border-dashed border-primary/20"></div>
                  <span className="text-gradient-gold font-semibold text-lg">{d.price}</span>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{d.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}