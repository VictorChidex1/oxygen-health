import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpen }) => {
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
    { name: "Reviews", href: "#reviews" },
    { name: "Certifications", href: "#certifications" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
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
          <a href="#" className="flex items-center gap-3 group z-50">
            <img
              src="/assets/logo.png"
              alt="Oxygen Health Logo"
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wider whitespace-nowrap ${
                  isScrolled
                    ? "text-slate-300 hover:text-white"
                    : "text-brand-navy hover:text-brand-blue"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-4 md:gap-6 z-50">
            {/* Desktop Only Batphone */}
            <a
              href="tel:+16308127865"
              className={`hidden lg:flex items-center gap-2 transition-colors group ${
                isScrolled
                  ? "text-slate-300 hover:text-green-400"
                  : "text-brand-navy hover:text-green-600"
              }`}
            >
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              <span className="text-sm font-medium whitespace-nowrap">
                +1 (630) 812-7865
              </span>
            </a>

            {/* Persistent CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpen}
              className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full font-bold text-xs md:text-sm shadow-[0_0_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_-5px_rgba(0,0,0,0.2)] transition-all whitespace-nowrap ${
                isScrolled
                  ? "bg-white text-brand-navy shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                  : "bg-brand-navy text-white hover:bg-brand-blue"
              }`}
            >
              Get Pricing
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 -mr-2 ${
                isScrolled ? "text-white" : "text-brand-navy"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
