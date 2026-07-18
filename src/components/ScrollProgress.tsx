import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
      aria-hidden
    >
      <div
  className="h-full w-full shadow-[0_0_12px_rgba(212,175,55,0.5)]"
  style={{ background: "var(--gradient-gold)" }}
/>
    </motion.div>
  );
}