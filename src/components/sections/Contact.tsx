import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ComponentType, InputHTMLAttributes } from "react";
import { SectionHeading, Reveal } from "../Reveal";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [customTime, setCustomTime] = useState(false);
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Contact & Reservations"
          title="Reserve Your Table"
          subtitle="Send us a note — our concierge responds within a few hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
         <Reveal>
  <AnimatePresence mode="wait">
    {!sent ? (
      <motion.form
        key="form"
        ref={formRef}
        initial={{ opacity: 1, scale: 1 }}
        exit={{
          opacity: 0,
          scale: 0.97,
          filter: "blur(8px)",
          transition: { duration: 0.45 },
        }}
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          formRef.current?.reset();
        }}
        className="group glass-card rounded-3xl p-8 space-y-5 border border-white/15 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]"
      >
        <div className="space-y-6">
  {/* Header */}
  <div>
    <p className="text-xs uppercase tracking-[0.4em] text-primary">
      Reservation Request
    </p>

    <h3 className="mt-3 text-3xl font-serif text-secondary">
      Book Your Dining Experience
    </h3>

    <p className="mt-3 text-muted-foreground leading-7">
      Complete the form below and our concierge will contact you shortly to
      confirm your reservation.
    </p>
  </div>

  {/* Name + Email */}
  <div className="grid md:grid-cols-2 gap-5">
    <Field
      label="Full Name"
      placeholder="John Anderson"
      required
    />

    <Field
      label="Email Address"
      type="email"
      placeholder="john@example.com"
      required
    />
  </div>

  {/* Phone + Guests */}
  <div className="grid md:grid-cols-2 gap-5">
    <Field
      label="Phone Number"
      type="tel"
      placeholder="+1 (555) 123-4567"
      required
    />

    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        Guests
      </label>

      <select
        required
        className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-secondary focus:outline-none focus:border-primary transition"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6+</option>
      </select>
    </div>
  </div>

  {/* Date + Time */}
  <div className="grid md:grid-cols-2 gap-5">
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        Reservation Date
      </label>

      <input
        type="date"
        required
        className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-secondary focus:outline-none focus:border-primary transition"
      />
    </div>

      <div>
  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
    Preferred Time
  </label>

  <select
    className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-secondary focus:outline-none focus:border-primary transition"
    onChange={(e) => setCustomTime(e.target.value === "other")}
  >
    <option value="">Select a time</option>
    <option>12:00 PM</option>
    <option>12:30 PM</option>
    <option>1:00 PM</option>
    <option>1:30 PM</option>
    <option>2:00 PM</option>

    <option>6:00 PM</option>
    <option>6:30 PM</option>
    <option>7:00 PM</option>
    <option>7:30 PM</option>
    <option>8:00 PM</option>
    <option>8:30 PM</option>
    <option>9:00 PM</option>

    <option value="other">Custom Time</option>
  </select>

  {customTime && (
    <input
      type="time"
      className="mt-4 w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-secondary focus:outline-none focus:border-primary transition"
    />
  )}
</div>
    </div>
  </div>

  {/* Special Request */}
  <div>
    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
      Special Requests
    </label>

    <textarea
      rows={5}
      placeholder="Celebration, dietary preferences, window seating..."
      className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-secondary placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary transition resize-none"
    />
  </div>

  {/* Submit */}
 <button
  type="submit"
  className="btn-gold btn-gold-hover w-full py-4 flex items-center justify-center text-sm uppercase tracking-[0.25em]"
>
  Request Reservation
</button>

  {/* Footer */}
  <p className="text-center text-sm text-muted-foreground">
    Our concierge usually responds within{" "}
    <span className="text-primary">2–4 hours</span>.
  </p>

      </motion.form>
      
    ) : (
      <motion.div
        key="success"
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
        }}
      >
          <motion.div
  key="success"
  initial={{ opacity: 0, y: 30, scale: 0.96 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="relative overflow-hidden glass-card rounded-3xl border border-primary/20 p-10 lg:p-14 flex items-center justify-center"
>
  {/* Background Glow */}
  <div
    className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20 pointer-events-none"
    style={{ background: "var(--gradient-gold)" }}
  />

  <div className="relative z-10 max-w-lg text-center">
    {/* Success Icon */}
    <div className="relative mx-auto mb-8 h-24 w-24">
      <div
        className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ background: "var(--gradient-gold)" }}
      />

      <div
        className="relative flex h-24 w-24 items-center justify-center rounded-full shadow-[0_0_50px_rgba(212,175,55,.25)]"
        style={{ background: "var(--gradient-gold)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-11 w-11 text-background"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>

    {/* Heading */}
    <p className="text-xs uppercase tracking-[0.45em] text-primary">
      Reservation Received
    </p>

    <h2 className="mt-4 font-serif text-5xl text-secondary">
      Thank You
    </h2>

    <p className="mt-6 leading-8 text-muted-foreground">
      We've successfully received your reservation request.
      Our concierge team will carefully review your details and
      contact you shortly to confirm your table.
    </p>

    {/* Divider */}
    <div className="my-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    {/* Timeline */}
    <div className="space-y-5 text-left">
      <div className="flex items-center gap-4">
        <div className="h-3 w-3 rounded-full bg-primary" />
        <span className="text-secondary">
          Reservation request received
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-3 w-3 rounded-full bg-primary/70" />
        <span className="text-secondary">
          Concierge reviewing availability
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-3 w-3 rounded-full bg-primary/50" />
        <span className="text-secondary">
          Confirmation within a few hours
        </span>
      </div>
    </div>

    {/* Status Badge */}
    <div className="mt-10 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-6 py-3 text-sm tracking-wide text-primary">
      ✓ Reservation Submitted Successfully
    </div>

    {/* Button */}
    <div className="mt-10">
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setSent(false)}
        className="btn-gold btn-gold-hover"
      >
        Reserve Another Table
      </motion.button>
    </div>
  </div>
</motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden border border-primary/20 h-80 relative shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="overflow-hidden h-full">
                <iframe
                  title="Saffron House location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=2.3452%2C48.8534%2C2.3652%2C48.8634&layer=mapnik"
                  className="w-full h-full grayscale contrast-125 transition duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              </div>
              <InfoRow icon={MapPin} title="Address" text="18 MG Road Bengaluru, Karnataka 560001" />
              <InfoRow icon={Phone} title="Phone" text="+91 7842431423" />
              <InfoRow icon={Mail} title="Email" text="reservations@saffronhouse.in" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-secondary placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  title,
  text,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="group glass-card rounded-2xl p-5 flex items-start gap-4 border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30">
      <div className="h-11 w-11 rounded-xl grid place-items-center shrink-0 transition-transform duration-500 group-hover:scale-110" style={{ background: "var(--gradient-gold)" }}>
        <Icon size={18} className="text-background" />
      </div>
      <div>
        <p className="text-secondary font-semibold">{title}</p>
        <p className="text-muted-foreground text-sm mt-1">{text}</p>
      </div>
    </div>
  );
}