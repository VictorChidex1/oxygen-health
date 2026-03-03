import { Zap, Heart, Home } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Performance & Recovery",
    points: ["Reduces downtime", "Enhances muscle recovery", "Boosts stamina"],
  },
  {
    icon: Heart,
    title: "Daily Wellness",
    points: [
      "Supports energy + mental clarity",
      "Helps circulation & inflammation",
      "Promotes restful sleep",
    ],
  },
  {
    icon: Home,
    title: "Easy Home Use",
    points: [
      "Intuitive one-touch controls",
      "Quiet, comfortable design",
      "Safe for personal use",
    ],
  },
];

export default function WhyItWorks() {
  return (
    <section
      id="benefits"
      className="bg-brand-navy py-20 lg:py-24 font-sans border-t border-white/10 relative overflow-hidden"
    >
      {/* Subtle Glow Effect behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] max-w-7xl bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Why It Works
          </h2>
          <p className="text-lg text-slate-300">
            Clear, confident benefits designed for real results.
          </p>
        </div>

        {/* Removed max-w-5xl to let the grid fill the max-w-7xl container, widening the cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-[2rem] p-8 md:p-10 shadow-lg hover:-translate-y-2 hover:bg-white/10 hover:border-brand-blue/50 hover:shadow-2xl hover:shadow-brand-blue/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#1651a9]/30 border border-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1651a9] transition-colors duration-300">
                  <Icon
                    className="w-6 h-6 text-[#4299e1] group-hover:text-white transition-colors duration-300"
                    strokeWidth={2.5}
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">
                  {benefit.title}
                </h3>

                <ul className="space-y-4">
                  {benefit.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#4299e1] mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="text-slate-300 text-base md:text-lg">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
