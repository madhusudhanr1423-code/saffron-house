import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "../Reveal";
import { FAQS } from "../../data/restaurant";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="FAQ" title="Questions, thoughtfully answered." />
        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="group glass-card rounded-2xl overflow-hidden border border-white/15 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
  <span className="text-primary/40 font-display text-lg">
    {(i + 1).toString().padStart(2, "0")}
  </span>

  <span className="text-secondary font-medium transition-colors duration-300 group-hover:text-primary">
    {f.q}
  </span>
</div>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown
    className="text-primary transition-transform duration-300"
    size={20}
/>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4,
                        ease: "easeInOut"
                       }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-7 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}