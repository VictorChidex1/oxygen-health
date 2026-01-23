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
    <section className="bg-white py-24 relative overflow-hidden" id="reviews">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold tracking-widest uppercase text-sm">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-2">
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
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold`}
                >
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">{review.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed italic">
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
            className="group flex flex-col sm:flex-row items-center gap-4 px-8 py-4 bg-slate-50 border border-slate-200 rounded-full hover:bg-white hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300 cursor-pointer"
          >
            {/* Google Logo (Simulated) */}
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1 shadow-sm border border-slate-100">
              <svg viewBox="0 0 24 24" className="w-5 h-5">
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

            <div className="flex flex-col items-center sm:items-start">
              <div className="flex text-yellow-500 gap-0.5 mb-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-slate-600 text-sm font-medium">
                Rated{" "}
                <span className="font-bold text-slate-800">4.9 Stars</span> by{" "}
                <span className="font-bold text-slate-800">
                  148+ Verified Customers
                </span>{" "}
                on Google
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
