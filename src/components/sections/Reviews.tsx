import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

interface Review {
  name: string;
  content: string;
  initial: string;
  color: string;
}

const reviews: Review[] = [
  {
    name: "Kathleen Renee",
    content:
      "Michael, Julia and Julie are awesome. You can trust them. They are honest and give great customer service.",
    initial: "KR",
    color: "bg-emerald-500",
  },
  {
    name: "Kristi Wilson",
    content:
      "This chamber is top notch. Very well made construction. They didn’t leave out any details, even down to the zippers.",
    initial: "KW",
    color: "bg-blue-500",
  },
  {
    name: "Vince Valentin",
    content:
      "Oxygen Health Systems is truly a pleasure to work with. From Michael, the CEO, to the support team, the experience was seamless.",
    initial: "VV",
    color: "bg-indigo-500",
  },
];

const Reviews: React.FC = () => {
  return (
    <section
      className="bg-brand-navy py-24 relative overflow-hidden"
      id="reviews"
    >
      {/* Background Decorator - Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 blur-[128px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[128px] rounded-full opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-200 font-bold tracking-widest uppercase text-sm">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Trusted by Clinics & Athletes
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-xl shadow-brand-navy/50 hover:shadow-2xl hover:shadow-brand-blue/20 transition-all duration-500 relative overflow-hidden group border border-white/10"
            >
              {/* Watermark Quote Icon */}
              <div className="absolute top-4 right-4 opacity-[0.04] text-brand-navy transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div
                  className={`w-14 h-14 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-navy/10 ring-4 ring-slate-50`}
                >
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-lg leading-tight">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-1 font-bold border border-emerald-100">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed relative z-10 font-medium text-lg">
                "{review.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge Footer */}
        <div className="flex justify-center">
          <a
            href="https://www.google.com/search?q=Oxygen+Health+Systems+Chicago&oq=Oxygen+Health+Systems+Chicago&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzI1MmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x880e59ca23c6414b:0x3b920500e0f4afbb,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center gap-4 px-8 py-4 bg-white rounded-full hover:scale-105 transition-all duration-300 cursor-pointer shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] border border-white/50"
          >
            {/* Google Logo */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1.5 shadow-sm border border-slate-100 group-hover:rotate-12 transition-transform duration-500">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.61c1.61 0 3.06.55 4.21 1.64l3.16-3.16C17.45 1.18 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center sm:items-start text-brand-navy">
              <div className="flex text-amber-500 gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold">
                Rated <span className="font-extrabold">4.9 Stars</span> by{" "}
                <span className="font-extrabold">148+ Customers</span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
