import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "What is a hyperbaric chamber?",
    answer:
      "A hyperbaric chamber is a medical-grade device that delivers 100% oxygen at higher-than-atmospheric pressures to promote healing, enhance recovery, and improve overall wellness.",
  },
  {
    question: "How does a hyperbaric chamber work?",
    answer:
      "The chamber increases atmospheric pressure, allowing your lungs to take in more oxygen. This extra oxygen helps repair tissues, reduce inflammation, and support overall health.",
  },
  {
    question: "Is using a hyperbaric chamber safe?",
    answer:
      "Yes, using a hyperbaric chamber is generally safe when done under medical supervision. However, it may have risks like ear pressure, sinus pain, or, rarely, oxygen toxicity.",
  },
  {
    question: "How much space does a hyperbaric chamber require?",
    answer: (
      <div className="space-y-4">
        <p>
          A hyperbaric chamber typically requires{" "}
          <strong>50 to 100 square feet</strong> of space, depending on the
          type:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Monoplace chamber</strong> (for one person): ~50–70 sq ft
          </li>
          <li>
            <strong>Multiplace chamber</strong> (for multiple people): ~80–100+
            sq ft
          </li>
        </ul>
        <p>
          You’ll also need extra room for ventilation, electrical connections,
          and access for maintenance.
        </p>
      </div>
    ),
  },
  {
    question: "Is it easy to operate the hyperbaric chamber?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes, most modern hyperbaric chambers are designed to be user-friendly.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Monoplace chambers</strong> are often simple to operate with
            touchscreens or basic controls.
          </li>
          <li>
            <strong>Multiplace chambers</strong> may require trained staff.
          </li>
        </ul>
        <p>
          For home use, basic training is usually enough. For clinical settings,
          professional supervision is recommended.
        </p>
      </div>
    ),
  },
  {
    question: "Can I use a hyperbaric chamber at home?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes, you can use a hyperbaric chamber at home. Mild hyperbaric
          chambers (1.3–1.5 ATA) are designed for home use and are generally
          safe with proper guidance. Make sure to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Follow the manufacturer’s instructions</li>
          <li>Get medical clearance if you have health conditions</li>
          <li>Ensure good ventilation and set up space</li>
        </ul>
        <p>
          Avoid using it without proper training or alone if it’s your first
          time.
        </p>
      </div>
    ),
  },
  {
    question: "What kind of support do you provide after purchase?",
    answer: (
      <div className="space-y-4">
        <p>After purchasing from Oxygen Health Systems, you receive:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Setup assistance</strong> (virtual or in-person)
          </li>
          <li>
            <strong>User training</strong> for safe and effective use
          </li>
          <li>
            <strong>Ongoing technical support</strong> via phone or email
          </li>
          <li>
            <strong>Warranty coverage</strong> for parts and repairs
          </li>
          <li>
            <strong>Maintenance tips</strong> to keep your chamber in top
            condition
          </li>
        </ul>
        <p className="font-medium text-brand-navy">
          Have questions or need help after your purchase? Contact our support
          team—we’re here for you!
        </p>
      </div>
    ),
  },
];

const Faqs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 relative overflow-hidden" id="faqs">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-90 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/herman-chamber.jpg')",
          }}
        />
        {/* Vignette Mask: Solid white center for text, revealing image at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,white_0%,white_40%,transparent_100%)]" />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm hover:border-brand-blue/30 transition-colors duration-300 shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-bold text-lg text-slate-900 group-hover:text-brand-blue transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-brand-blue" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4 font-medium">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-blue transition-colors group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="border-b-2 border-brand-navy/20 group-hover:border-brand-blue/50 pb-0.5">
              Chat with a specialist
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
