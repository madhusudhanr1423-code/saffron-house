import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/restaurant";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
  ? "py-3 bg-background/65 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
  : "py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
  href="#top"
  className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
>
          <span className="text-2xl font-display font-bold text-gradient-gold tracking-wide">
            SAFFRON HOUSE
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
             <a
  href={l.href}
  className={`relative group text-sm transition-all duration-300 ${
    active === l.href.replace("#", "")
      ? "text-primary"
      : "text-secondary/80 hover:text-primary"
  }`}
>
                {l.label}
               <span
  className={`absolute -bottom-1 left-1/2 h-px -translate-x-1/2 bg-primary transition-all duration-300 ${
    active === l.href.replace("#", "")
      ? "w-full"
      : "w-0 group-hover:w-full"
  }`}
/>
              </a>
            </li>
          ))}
        </ul>

        <a href="#reserve" className="hidden md:inline-flex btn-gold btn-gold-hover text-sm px-6">
          Book a Table
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-secondary p-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{duration: 0.35, ease: "easeInOut",}}
            className="md:hidden overflow-hidden bg-background/85 backdrop-blur-xl border-t border-border"
          >
            <ul className="px-6 py-6 space-y-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block text-secondary/90 hover:text-primary transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#reserve" onClick={() => setOpen(false)} className="btn-gold btn-gold-hover w-full justify-center">
                  Book a Table
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}