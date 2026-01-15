import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change background after passing 90% of screen height (Hero Section)
      setIsScrolled(window.scrollY > window.innerHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Safety", href: "#safety" },
    { name: "Comparison", href: "#comparison" },
    { name: "Specs", href: "#specs" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-navy/90 backdrop-blur-md shadow-lg border-b border-white/10 py-4"
            : "bg-white/90 backdrop-blur-md shadow-md py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/assets/favicon.png"
              alt="Oxygen Health Logo"
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                  isScrolled
                    ? "text-slate-300 hover:text-white"
                    : "text-brand-navy hover:text-brand-blue"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right (Batphone + CTA) */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+16308127865"
              className={`flex items-center gap-2 transition-colors group ${
                isScrolled
                  ? "text-slate-300 hover:text-green-400"
                  : "text-brand-navy hover:text-green-600"
              }`}
            >
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              <span className="text-sm font-medium">+1 (630) 812-7865</span>
            </a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full font-bold text-sm shadow-[0_0_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_-5px_rgba(0,0,0,0.2)] transition-all ${
                isScrolled
                  ? "bg-white text-brand-navy shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                  : "bg-brand-navy text-white hover:bg-brand-blue"
              }`}
            >
              Get Pricing
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden ${
              isScrolled ? "text-white" : "text-brand-navy"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-brand-navy pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-bold text-white border-b border-white/10 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-8 space-y-6">
                <a
                  href="tel:+16308127865"
                  className="flex items-center gap-3 text-slate-300 text-lg"
                >
                  <Phone className="w-5 h-5 text-green-400" />
                  +1 (630) 812-7865
                </a>
                <button className="w-full bg-white text-brand-navy py-4 rounded-xl font-bold text-lg shadow-lg">
                  Get Pricing
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
