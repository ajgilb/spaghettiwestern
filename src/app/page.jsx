"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Check, ChevronDown } from "lucide-react";

const INTEREST_OPTIONS = [
  { value: "opening", label: "I want to know when you open" },
  { value: "employment", label: "Interested in being in the Western" },
  { value: "vendor", label: "That yours to sell, stranger?" },
  { value: "other", label: "Other" },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !interest) return;
    setLoading(true);
    await base44.entities.EmailSignup.create({ email, name, notes: interest });
    setSubmitted(true);
    setLoading(false);
  };

  // Terracotta / parchment palette from logo
  const rust = "hsl(14, 52%, 38%)";
  const parchment = "hsl(36, 30%, 90%)";
  const deepBrown = "hsl(20, 30%, 16%)";
  const midBrown = "hsl(20, 20%, 38%)";
  const subtleBrown = "hsl(20, 15%, 52%)";
  const borderColor = "hsl(14, 30%, 70%)";

  return (
    <div
      className="min-h-screen flex flex-col items-center px-6 py-16 relative overflow-hidden"
      style={{ background: parchment }}
    >
      {/* Paper texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Warm center glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsla(38,65%,62%,0.22) 0%, transparent 68%)" }}
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-xl mx-auto text-center gap-10">

        {/* Logo */}
        <motion.img
          src="https://media.base44.com/images/public/user_69c1e46964b292774182c6c3/b1a81daa2_Gemini_Generated_Image_of8csuof8csuof8c.png"
          alt="Spaghetti Western Restaurant & Bar"
          className="w-full max-w-xs md:max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Divider */}
        <Divider rust={rust} />

        {/* === MARQUEE COMING SOON === */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          {/* Marquee frame */}
          <div
            className="relative px-6 py-5 md:py-6"
            style={{
              border: `2px solid ${rust}`,
              background: deepBrown,
              boxShadow: `0 0 0 4px ${parchment}, 0 0 0 6px ${rust}, 0 6px 40px hsla(20,30%,10%,0.35)`,
            }}
          >
            {/* Corner bulbs */}
            {[["top-0 left-0", "-translate-x-1/2 -translate-y-1/2"],
              ["top-0 right-0", "translate-x-1/2 -translate-y-1/2"],
              ["bottom-0 left-0", "-translate-x-1/2 translate-y-1/2"],
              ["bottom-0 right-0", "translate-x-1/2 translate-y-1/2"]].map(([pos, trans], i) => (
              <Bulb key={i} pos={pos} trans={trans} delay={0.8 + i * 0.1} />
            ))}
            {/* Top edge bulbs */}
            {[1, 2, 3].map((n, i) => (
              <motion.div
                key={`top-${n}`}
                className="absolute top-0 -translate-y-1/2"
                style={{ left: `${25 * (n)}%`, transform: "translateX(-50%) translateY(-50%)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.7, 1] }}
                transition={{ delay: 1.0 + i * 0.12, duration: 0.5, repeat: Infinity, repeatDelay: 3 + i }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(38,80%,68%)", boxShadow: "0 0 6px 2px hsla(38,80%,68%,0.7)" }} />
              </motion.div>
            ))}
            {/* Bottom edge bulbs */}
            {[1, 2, 3].map((n, i) => (
              <motion.div
                key={`bot-${n}`}
                className="absolute bottom-0"
                style={{ left: `${25 * (n)}%`, transform: "translateX(-50%) translateY(50%)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.75, 1] }}
                transition={{ delay: 1.1 + i * 0.15, duration: 0.5, repeat: Infinity, repeatDelay: 4 + i }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "hsl(38,80%,68%)", boxShadow: "0 0 6px 2px hsla(38,80%,68%,0.7)" }} />
              </motion.div>
            ))}

            {/* Text */}
            <p
              className="text-xs tracking-[0.35em] uppercase mb-2"
              style={{ fontFamily: "'Inter', sans-serif", color: "hsl(38,50%,60%)" }}
            >
              Now Appearing
            </p>
            <h1
              className="leading-none tracking-wider"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 12vw, 5.5rem)",
                color: "hsl(38, 75%, 72%)",
                textShadow: "0 0 20px hsla(38,80%,68%,0.5), 0 0 60px hsla(38,70%,55%,0.25)",
                letterSpacing: "0.06em",
              }}
            >
              COMING SOON
            </h1>
          </div>
        </motion.div>

        {/* Divider */}
        <Divider rust={rust} />

        {/* Concept description */}
        <motion.p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "'Playfair Display', serif", color: midBrown, fontStyle: "italic", maxWidth: "30rem" }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Spaghetti Western is a neighborhood Italian restaurant and full bar in Old Town Newhall, centered on great pizza, pasta, and classic Italian favorites. With thoughtful cocktails, Italian and local wines, and a relaxed bar, it&apos;s a place for people who care about how things are made—without the formality. Welcoming, lively, and just as good for a night out as it is for dinner with the kids.
        </motion.p>

        {/* Divider */}
        <Divider rust={rust} />

        {/* Location */}
        <motion.div
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-1"
            style={{ fontFamily: "'Inter', sans-serif", color: subtleBrown }}
          >
            Location
          </p>
          <a
            href="https://maps.google.com/?q=22520+Lyons+Ave+Newhall+CA+91321"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 group transition-opacity hover:opacity-70"
          >
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: rust }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: midBrown, lineHeight: 1.6 }}>
              22520 Lyons Ave, Newhall, CA 91321<br />
              <span style={{ color: subtleBrown }}>Inside the Newhall Crossing Center courtyard</span>
            </span>
          </a>
          <motion.img
            src="https://media.base44.com/images/public/69c1e5eb4e1ca552239669bd/346886372_Gemini_Generated_Image_oacmnmoacmnmoacm.png"
            alt="Map of Old Town Newhall showing Spaghetti Western location"
            className="w-full max-w-xs md:max-w-sm mt-4 rounded-sm"
            style={{ boxShadow: "0 4px 20px hsla(20,30%,10%,0.2)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          />
        </motion.div>

        {/* Divider */}
        <Divider rust={rust} />

        {/* Connect section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase mb-2"
            style={{ fontFamily: "'Inter', sans-serif", color: subtleBrown }}
          >
            Connect
          </p>
          <p
            className="text-base mb-7"
            style={{ fontFamily: "'Playfair Display', serif", color: midBrown, fontStyle: "italic" }}
          >
            Connect with us about future dates, employment, partnership, and more.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 rounded-none text-sm"
                style={{ background: "hsla(36,28%,97%,0.75)", borderColor, fontFamily: "'Inter', sans-serif" }}
              />
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 rounded-none text-sm"
                style={{ background: "hsla(36,28%,97%,0.75)", borderColor, fontFamily: "'Inter', sans-serif" }}
              />
              {/* Custom select */}
              <div className="relative">
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  required
                  className="w-full h-11 appearance-none px-3 text-sm outline-none rounded-none"
                  style={{
                    background: "hsla(36,28%,97%,0.75)",
                    border: `1px solid ${borderColor}`,
                    fontFamily: "'Inter', sans-serif",
                    color: interest ? deepBrown : subtleBrown,
                  }}
                >
                  <option value="" disabled>How can we help?</option>
                  {INTEREST_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} style={{ color: deepBrown }}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: subtleBrown }} />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="h-11 rounded-none text-xs tracking-[0.2em] uppercase mt-1"
                style={{ background: rust, color: parchment, fontFamily: "'Inter', sans-serif" }}
              >
                {loading ? "Sending..." : "Send Word"}
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `hsla(14,52%,38%,0.12)` }}>
                <Check className="w-6 h-6" style={{ color: rust }} />
              </div>
              <p style={{ fontFamily: "'Playfair Display', serif", color: deepBrown, fontSize: "1.1rem" }}>
                Much obliged.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", color: subtleBrown, fontSize: "0.8rem" }}>
                We&apos;ll be in touch.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-xs mt-4"
          style={{ fontFamily: "'Inter', sans-serif", color: subtleBrown, letterSpacing: "0.1em" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          © {new Date().getFullYear()} Spaghetti Western Restaurant &amp; Bar
        </motion.p>
      </div>
    </div>
  );
}

function Divider({ rust }) {
  return (
    <div className="flex items-center gap-4 w-full max-w-xs">
      <div className="h-px flex-1" style={{ background: `hsla(14,52%,38%,0.25)` }} />
      <div className="w-2 h-2 rotate-45 border" style={{ borderColor: `hsla(14,52%,38%,0.35)` }} />
      <div className="h-px flex-1" style={{ background: `hsla(14,52%,38%,0.25)` }} />
    </div>
  );
}

function Bulb({ pos, trans, delay }) {
  return (
    <motion.div
      className={`absolute ${pos}`}
      style={{ transform: trans }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.6, 1, 0.8, 1] }}
      transition={{ delay, duration: 0.6, repeat: Infinity, repeatDelay: 5 }}
    >
      <div
        className="w-3 h-3 rounded-full"
        style={{ background: "hsl(38,80%,68%)", boxShadow: "0 0 8px 3px hsla(38,80%,68%,0.75)" }}
      />
    </motion.div>
  );
}
