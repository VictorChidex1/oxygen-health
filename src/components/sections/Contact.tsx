import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      className="bg-brand-navy py-24 relative overflow-hidden"
      id="contact"
    >
      {/* Background Decorator - Subtle Glow (Matched to Reviews.tsx) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 blur-[128px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[128px] rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Contact Info & Trust Signals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-blue-200 font-bold tracking-widest uppercase text-sm mb-2 block">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Questions? <br />
                <span className="text-blue-200">We're Here to Help.</span>
              </h2>
              <p className="text-blue-100/80 text-lg leading-relaxed max-w-lg">
                Our specialists are ready to help you choose the right
                hyperbaric chamber for your specific needs. No pressure, just
                expert advice.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-200 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-navy/20 border border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Call Us</h4>
                  <a
                    href="tel:+16308127865"
                    className="text-blue-100 hover:text-white transition-colors block mt-1"
                  >
                    +1 (630) 812-7865
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-200 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-navy/20 border border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email Us</h4>
                  <a
                    href="mailto:sales@oxygenhealthsystems.com"
                    className="text-blue-100 hover:text-white transition-colors block mt-1"
                  >
                    sales@oxygenhealthsystems.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-200 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-navy/20 border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Visit Us</h4>
                  <p className="text-blue-100 mt-1">
                    Naperville, IL 60540
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-200 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-lg shadow-brand-navy/20 border border-white/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    Opening Hours
                  </h4>
                  <p className="text-blue-100 mt-1">
                    Mon - Fri: 9am - 5pm CST
                    <br />
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Promise/Micro-Copy */}
            <div className="flex items-center gap-3 text-sm text-blue-200 bg-brand-blue/10 py-3 px-4 rounded-lg border border-brand-blue/20 w-fit">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>
                We usually respond within 2 hours during business hours.
              </span>
            </div>
          </motion.div>

          {/* Right Column: High Contrast Lead Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl shadow-black/30 p-8 md:p-10 relative overflow-hidden"
          >
            {/* Form Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Send us a Message
              </h3>
              <p className="text-slate-500 mt-2 text-sm">
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-semibold text-slate-700"
                >
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all appearance-none text-slate-900 bg-white"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a topic...
                    </option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="financing">Financing Options</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all placeholder:text-slate-400 text-slate-900 resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
