import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
           <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    repeat: Infinity,
    repeatType: "reverse",
    duration: 1.2,
  }}
>
  <p className="text-gradient-gold font-display text-5xl">
    SAFFRON HOUSE
  </p>
  <div className="w-100 h-[2px] rounded-full bg-primary/60 mt-2 mb-2"></div>

<p className="text-sm tracking-[0.55em] text-muted-foreground uppercase">
  Preparing your experience
</p>
</motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}