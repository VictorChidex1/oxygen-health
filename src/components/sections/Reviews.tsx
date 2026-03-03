import React from "react";
import { Star, ExternalLink, MessageCircle, CheckCircle } from "lucide-react";

interface Review {
  name: string;
  content: string;
  initial: string;
}

const reviews: Review[] = [
  {
    name: "Gary Rosen",
    content:
      '"I bought a hyperbaric chamber from Oxygen Health Systems — delivered and set up at my home. They exceeded my expectations!"',
    initial: "GR",
  },
  {
    name: "Brian Moser",
    content:
      '"Four reps helped me over three years — outstanding customer care and willingness to help anytime!"',
    initial: "BM",
  },
  {
    name: "Ron McGinty",
    content:
      '"They are the best! Seamless installation and top-notch support."',
    initial: "RM",
  },
  {
    name: "Bruce Clampitt",
    content:
      '"Impressed with fast delivery and quality — couldn\'t be happier!"',
    initial: "BC",
  },
  {
    name: "Tony Hamilton",
    content:
      '"Service and support from sale to delivery and training was great!"',
    initial: "TH",
  },
  {
    name: "Ralph Black",
    content: '"Outstanding support and responsiveness — truly a caring team."',
    initial: "RB",
  },
];

const Reviews: React.FC = () => {
  return (
    <section
      className="bg-brand-navy py-20 lg:py-24 font-sans relative overflow-hidden"
      id="reviews"
    >
      {/* Subtle Glow Effect behind cards for premium depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] max-w-7xl bg-brand-blue/10 blur-[140px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            What Our Customers Say
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm md:text-base text-slate-300 font-medium mb-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-white">Rated 4.9★</span>
            <span className="text-slate-500">•</span>
            <span>150+ Verified Reviews</span>
          </div>

          <a
            href="https://www.google.com/search?q=Oxygen+Health+Systems+Chicago"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm text-sm"
          >
            View All Google Reviews
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* 6 Grid Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-xl hover:shadow-brand-blue/20 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle quote watermark */}
              <div className="absolute top-4 right-4 opacity-[0.03] text-brand-navy transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
              </div>

              <div className="flex gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                  />
                ))}
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8 flex-grow relative z-10 font-medium">
                {review.content}
              </p>

              <div className="flex items-center gap-4 mt-auto relative z-10">
                <div
                  className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center text-white font-bold 
                text-lg shrink-0 shadow-md ring-4 ring-slate-50 relative"
                >
                  {review.initial}
                  {/* Small verified badge on avatar to match original styling */}
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-500/10" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-brand-navy text-sm md:text-base">
                    {review.name}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs font-semibold text-emerald-600 px-2 py-0.5 bg-emerald-50 rounded-full border border-emerald-100 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      Verified Employee
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Bottom Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-white/10 shadow-lg flex flex-col md:flex-row items-start md:items-center gap-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-4 md:border-r border-slate-100 md:pr-8 shrink-0">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-brand-blue" />
            </div>
            <div>
              <h4 className="font-bold text-brand-navy text-sm md:text-base">
                Verified Customers on Review Platforms
              </h4>
              <p className="text-xs text-slate-500">Google Reviews & more</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5 shrink-0">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-500 text-sm italic font-medium">
                "Great service and quick delivery."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5 shrink-0">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-500 text-sm italic font-medium">
                "Perfect treatment and lives improving in one week!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
