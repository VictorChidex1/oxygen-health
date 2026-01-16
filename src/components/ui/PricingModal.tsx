import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2 } from "lucide-react";
import { useLeadForm } from "../../hooks/useLeadForm";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  const { submitLead, isLoading, isSuccess, resetForm } = useLeadForm();

  // Local Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "buying" as "buying" | "rental" | "clinic",
  });

  const handleClose = () => {
    resetForm(); // Reset hook state (success/loading)
    setFormData({
      // Reset local input state
      name: "",
      email: "",
      phone: "",
      interest: "buying",
    });
    onClose(); // Close the modal
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-[60]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-brand-navy border border-white/10 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
                <h3 className="text-xl font-bold text-white">
                  {isSuccess
                    ? "Request Received"
                    : "Get Pricing & Availability"}
                </h3>
                <button
                  onClick={handleClose}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {isSuccess ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-green-500" />
                    </div>
                    <p className="text-slate-300">
                      Thank you,{" "}
                      <span className="text-white font-semibold">
                        {formData.name}
                      </span>
                      .
                    </p>
                    <p className="text-sm text-slate-400">
                      Our clinical team will review your request and send the
                      current pricing guide to <strong>{formData.email}</strong>{" "}
                      shortly.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-4 w-full py-3 bg-white text-brand-navy font-bold rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors"
                        placeholder="Dr. John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                        Primary Interest
                      </label>
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                      >
                        <option
                          value="buying"
                          className="bg-brand-navy text-white"
                        >
                          Purchasing a Chamber (Home Use)
                        </option>
                        <option
                          value="rental"
                          className="bg-brand-navy text-white"
                        >
                          Renting a Chamber
                        </option>
                        <option
                          value="clinic"
                          className="bg-brand-navy text-white"
                        >
                          Clinical / Business Use
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-brand-blue hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Get Pricing Guide"
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-500 mt-2">
                      Your data is secure. We never sell your information.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PricingModal;
