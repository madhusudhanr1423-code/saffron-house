import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "text-center max-w-2xl mx-auto mb-16" : "max-w-2xl mb-16"}>
      {eyebrow && (
        <p className="text-primary uppercase tracking-[0.35em] text-xs mb-4 font-medium">
          {eyebrow}
        </p>
      )}
     <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{subtitle}</p>
      )}
      {center && (
  <div className="w-20 h-px bg-primary/30 mx-auto mt-8"></div>
)}
    </Reveal>
  );
}