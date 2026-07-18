import { motion } from "framer-motion";
import { Reveal } from "../Reveal";
import { Calendar } from "lucide-react";

export function Reserve() {
  return (
    <section id="reserve" className="relative py-28 px-6 overflow-hidden">
      <motion.div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage:
       "url(https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=2000&q=80)",
  }}
  initial={{ scale: 1.08 }}
  animate={{ scale: 1}}
  transition={{ duration: 2.5,
    ease: "easeOut"
   }}
/>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" aria-hidden />
      <Reveal className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-primary uppercase tracking-[0.35em] text-xs mb-4">Reserve</p>
        <h2 className="font-display text-4xl md:text-6xl text-secondary font-semibold [text-shadow:0_4px_20px_rgba(0,0,0,0.4)]">
          An evening at <span className="text-gradient-gold italic">Auréa</span> awaits.
        </h2>
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 mb-6">
  <Calendar size={14} className="text-primary" />

  <span className="text-xs uppercase tracking-[0.2em] text-primary">
    Reservations Open
  </span>
</div>
        <p className="mt-6 text-muted-foreground text-lg">
          Tables open eight weeks in advance. Reserve early to secure your preferred seating.
        </p>
        <div className="w-24 h-px bg-primary/50 mx-auto mt-8 mb-10"></div>
        <a href="#contact" className="btn-gold btn-gold-hover mt-10 mx-auto shadow-[0_15px_40px_rgba(212,175,55,0.25)]">
          <Calendar size={16} /> Book Your Table
        </a>
      </Reveal>
    </section>
  );
}