import { motion } from "framer-motion";
import { Calendar, ChevronDown } from "lucide-react";

 const HERO_IMG ="/images/Hero.jpg"
  // "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-x-hidden">
     <motion.div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url(${HERO_IMG})` }}
  initial={{ scale: 1.1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 8, ease: "easeOut" }}
/>
      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} aria-hidden />

      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-gold)" }}
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-gold)" }}
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-primary uppercase tracking-[0.45em] text-xs md:text-sm mb-6"
        >
          Luxury Dining · Est. 2009
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1 }}
          className="text-secondary font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-[0.95] max-w-5xl pb-2 [text-shadow:0_6px_24px_rgba(0,0,0,0.45)]"
        >
          A Taste of the <span className="text-gradient-gold italic inline-block pr-4 pb-4">Extraordinary</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-8 max-w-3xl text-secondary/80 text-lg md:text-xl leading-relaxed"
        >
          From locally sourced ingredients to handcrafted tasting menus, every course is designed to create a memorable dining experience.
        </motion.p>
        <div className="w-24 h-px bg-primary/50 mt-10 mb-10 mx-auto"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a href="#reserve" className="btn-gold btn-gold-hover">
            <Calendar size={16} /> Reserve a Table
          </a>
          <a
          href="#menu"
          className="inline-flex items-center gap-2 px-7 py-[0.85rem] rounded-full border border-primary/40 backdrop-blur-md text-secondary hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            Explore Menu
          </a>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.8 }}
  className="mt-10 flex flex-col items-center"
>
  <p className="text-sm uppercase tracking-[0.3em] text-primary">
    Luxury Fine Dining
</p>

<p className="mt-2 text-secondary/70">
   Serving exceptional cuisine with elegance and passion.
</p>

  <p className="mt-2 text-sm text-secondary/70">
    Trusted by over <span className="text-primary font-semibold">10,000+</span> guests since 2009
  </p>
</motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 text-secondary/60 hover:text-primary transition"
          aria-label="Scroll"
        >
          <ChevronDown size={26} />
        </motion.a>
      </div>
    </section>
  );
}