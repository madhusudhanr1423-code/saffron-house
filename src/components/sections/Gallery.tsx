import { motion } from "framer-motion";
import { SectionHeading } from "../Reveal";
import { GALLERY } from "../../data/restaurant";
import { ArrowUpRight } from "lucide-react";

export function Gallery() {
  return (
    <section id="gallery" className="py-28 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Gallery" title="A Glimpse Into Every Experience." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-[180px]  gap-4">
          {GALLERY.map((item, i) => (
            <motion.div
              key={item.image}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${i % 5 === 0 ? "row-span-2" : ""}`}
            >
              <img
                loading="lazy"
                src={item.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-all duration-500 group-hover:translate-y-0">
  <h3 className="text-white font-semibold text-lg">
    {item.title}
  </h3>
</div>
              <div className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                <ArrowUpRight size={18} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}