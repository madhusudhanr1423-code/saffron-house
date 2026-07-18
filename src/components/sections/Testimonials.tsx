import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../Reveal";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "../../data/restaurant";

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading eyebrow="Guest Words" title="Kind words, softly spoken." />
        <div className="glass-card rounded-3xl border border-white/10 p-10 md:p-14 relative min-h-[280px] flex items-center justify-center transition-all duration-500 hover:border-primary/30 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
        <div className="absolute top-6 left-8 text-8xl font-display text-primary/10 select-none pointer-events-none">
  "
</div>
          <AnimatePresence mode="wait">
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center gap-1 mb-6 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="font-display italic text-2xl md:text-3xl text-secondary leading-[1.8]">
                <div className="w-16 h-px bg-primary/30 mx-auto mt-8 mb-6"></div>
                “{t.quote}”
              </p>
              <p className="mt-8 text-primary tracking-widest text-sm">{t.name.toUpperCase()}</p>
              <p className="text-muted-foreground text-sm mt-1">{t.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Testimonial ${k + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${k === i ? "w-10 bg-primary" : "w-3 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}