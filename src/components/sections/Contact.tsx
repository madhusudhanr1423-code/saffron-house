import { useState } from "react";
import type { ComponentType, InputHTMLAttributes } from "react";
import { SectionHeading, Reveal } from "../Reveal";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Contact & Reservations"
          title="Reserve Your Table"
          subtitle="Send us a note — our concierge responds within a few hours."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="group glass-card rounded-3xl p-8 space-y-5 border border-white/15 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" placeholder="Jane Doe" required />
                <Field label="Email" name="email" type="email" placeholder="jane@example.com" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Date" name="date" type="date" required />
                <Field label="Guests" name="guests" type="number" placeholder="2" required />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Anything we should know?"
                  className="w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-secondary placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
              </div>
              <button type="submit" className="btn-gold btn-gold-hover w-full justify-center">
                {sent ? "Reservation Request Sent ✓" : "Request Reservation"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden border border-primary/20 h-80 relative shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="overflow-hidden h-full">
                <iframe
                  title="Saffron House location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=2.3452%2C48.8534%2C2.3652%2C48.8634&layer=mapnik"
                  className="w-full h-full grayscale contrast-125 transition duration-700 hover:scale-[1.02]"
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