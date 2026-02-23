"use client";
import PageHeader from "@/app/components/PageHeader";
import { motion, type HTMLMotionProps } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

// ── Design tokens matching original CaterServ template ──
// Warm muted gold (NOT bright #ffb600)
const GOLD = "#C9A96E";
const GOLD_LIGHT = "#f5efe6"; // very light cream bg

export default function ContactPage() {
  const fadeUp: Partial<HTMLMotionProps<"div">> = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { type: "spring", bounce: 0.35, duration: 0.7 },
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Address",
      lines: ["123 Street, New York, USA"],
    },
    {
      icon: Mail,
      title: "Mail Us",
      lines: ["info@example.com", "support@example.com"],
    },
    {
      icon: Phone,
      title: "Telephone",
      lines: ["(+012) 3456 7890 123", "(+704) 5555 0127 296"],
    },
  ];

  return (
    <>
      <PageHeader title="Contact" />

      {/* ── Contact Section ── */}
      <section className="py-24" style={{ backgroundColor: GOLD_LIGHT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* ── LEFT: Form ── */}
            <motion.div {...fadeUp} className="lg:col-span-7">
              {/* "GET IN TOUCH" pill badge — dark border, same as screenshot */}
              <span
                className="inline-block px-5 py-1.5 mb-5 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{ border: "1px solid #2C231F", color: "#2C231F", backgroundColor: "transparent" }}
              >
                Get in touch
              </span>

              {/* Cursive / script heading — exact font from original template */}
              <h1
                className="mb-4 leading-tight"
                style={{
                  fontFamily: "var(--font-dancing), cursive",
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  fontWeight: 700,
                  color: "#2C231F",
                }}
              >
                Contact Us For Any Queries!
              </h1>

              <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-lg">
                The contact form is currently inactive. Get a functional and working contact form
                with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little
                code and you&apos;re done.{" "}
                <a href="#" style={{ color: GOLD }} className="hover:underline font-medium">
                  Download Now.
                </a>
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white p-4 rounded-md text-gray-700 placeholder-gray-400 outline-none focus:ring-2 transition"
                  style={{ border: `1px solid ${GOLD}` }}
                />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-white p-4 rounded-md text-gray-700 placeholder-gray-400 outline-none focus:ring-2 transition"
                  style={{ border: `1px solid ${GOLD}` }}
                />
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full bg-white p-4 rounded-md text-gray-700 placeholder-gray-400 outline-none focus:ring-2 transition resize-none"
                  style={{ border: `1px solid ${GOLD}` }}
                />

                {/* Submit button — warm gold, rounded-full, dark bold text */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, backgroundColor: "#2C231F" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-full font-bold text-base tracking-wide transition-colors duration-300"
                  style={{ backgroundColor: GOLD, color: "#fff" }}
                >
                  Submit Now
                </motion.button>
              </form>
            </motion.div>

            {/* ── RIGHT: Contact Info Cards ── */}
            <div className="lg:col-span-5 space-y-5 pt-2">
              {contactCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  {...fadeUp}
                  transition={{ type: "spring", bounce: 0.35, delay: i * 0.1 }}
                  className="flex items-start bg-white rounded-lg p-6"
                  style={{ border: `1px solid ${GOLD}` }}
                >
                  {/* Icon circle */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-5"
                    style={{ backgroundColor: GOLD_LIGHT }}
                  >
                    <card.icon size={22} style={{ color: GOLD }} />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{card.title}</h4>
                    {card.lines.map((line) => (
                      <p key={line} className="text-gray-500 text-sm m-0 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}