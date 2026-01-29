import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  RotateCcw,
  Truck,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Trust Values Bar */}
      <div className="bg-brand-blue py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center justify-center gap-3">
              <div className="p-3 bg-white/20 rounded-full">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold tracking-wide">
                30 Days Return
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="p-3 bg-white/20 rounded-full">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold tracking-wide">
                Same Day Dispatch
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="p-3 bg-white/20 rounded-full">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold tracking-wide">
                3 Years Warranty
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white border-t border-slate-100 pt-16 pb-32 md:pb-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand Info */}
            <div className="space-y-6">
              <img
                src="/assets/logo.png"
                alt="Oxygen Health Systems"
                className="h-12 w-auto"
              />
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed font-medium">
                  Harness The Healing Power of Oxygen
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Transform health & vitality with the regenerative healing
                  power of Oxygen Health Systems oxygen therapy chambers.
                </p>
              </div>
              {/* FDA Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-brand-blue" />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  FDA Class II Compliant
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-6">
              <h4 className="text-slate-900 font-bold text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "Safety", href: "#safety" },
                  { label: "Comparison", href: "#comparison" },
                  { label: "Specs", href: "#specs" },
                  { label: "Reviews", href: "#reviews" },
                  { label: "FAQs", href: "#faqs" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-600 hover:text-brand-blue transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="space-y-6">
              <h4 className="text-slate-900 font-bold text-lg">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+16308127865"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm text-slate-400 block mb-0.5">
                        Phone
                      </span>
                      <span className="text-slate-700 font-medium group-hover:text-brand-blue transition-colors">
                        +1 (630) 812-7865
                      </span>
                    </div>
                  </a>
                </li>

                <li>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-brand-blue">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm text-slate-400 block mb-0.5">
                        Location
                      </span>
                      <span className="text-slate-700 font-medium">
                        Naperville, IL 60540
                      </span>
                    </div>
                  </div>
                </li>

                <li>
                  <a
                    href="mailto:sales@oxygenhealthsystems.com"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm text-slate-400 block mb-0.5">
                        Email
                      </span>
                      <span className="text-slate-700 font-medium group-hover:text-brand-blue transition-colors">
                        sales@oxygenhealthsystems.com
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Connect with Us */}
            <div className="space-y-6">
              <h4 className="text-slate-900 font-bold text-lg">
                Connect with Us
              </h4>
              <p className="text-slate-500 text-sm">
                Follow us for the latest updates, health tips, and success
                stories.
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/oxygenhealthsystems",
                    label: "Facebook",
                  },
                  {
                    icon: Twitter,
                    href: "https://x.com/oxygenhealthstm",
                    label: "Twitter",
                  },
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/oxygenhealthsystems",
                    label: "Instagram",
                  },
                  {
                    icon: Youtube,
                    href: "https://www.youtube.com/@oxygenhealthsystems353",
                    label: "YouTube",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-sm border border-slate-100 hover:shadow-md"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm text-center md:text-left">
              Copyright © {currentYear} Oxygen Health Systems. All rights
              reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              {[
                {
                  label: "Privacy Policy",
                  href: "https://www.oxygenhealthsystems.com/privacy-policy/",
                },
                {
                  label: "Terms of Service",
                  href: "https://www.oxygenhealthsystems.com/terms-of-use/",
                },
                {
                  label: "FDA Disclaimer",
                  href: "https://www.oxygenhealthsystems.com/fda-disclaimer/",
                },
                {
                  label: "Return Policy",
                  href: "https://www.oxygenhealthsystems.com/return-policy/",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-blue transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
