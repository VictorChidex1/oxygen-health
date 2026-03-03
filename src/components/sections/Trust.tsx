import { Shield, Users, Star, Trophy } from "lucide-react";

const stats = [
  {
    icon: Shield,
    title: "CE Compliant",
    description: "European Safety Standards",
  },
  {
    icon: Users,
    title: "10,000+",
    description: "Happy Customers",
  },
  {
    icon: Star,
    title: "5★",
    description: "Rated by Clients Worldwide",
  },
  {
    icon: Trophy,
    title: "Staff-Led",
    description: "Dedicated Support Team",
  },
];

const reviews = [
  {
    text: '"Delivered and set up at my home. They exceeded my expectations!"',
    author: "Gary Rosen",
  },
  {
    text: '"Outstanding customer care and willingness to help anytime!"',
    author: "Brian Moser",
  },
  {
    text: '"Seamless installation and top-notch support."',
    author: "Ron McGinty",
  },
];

export default function Trust() {
  return (
    <section
      id="trust"
      // Changed from bg-[#0f2d63] to bg-slate-50 relative overflow-hidden
      className="bg-slate-50 py-20 lg:py-24 font-sans relative overflow-hidden"
    >
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight">
            Trusted by Athletes,
            <br className="hidden md:block" />
            Families & Wellness Seekers
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mt-6 rounded-full opacity-80"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-lg shadow-slate-200/50 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-blue group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">
                  {stat.title}
                </h3>
                <p className="text-slate-600 font-medium text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-l-4 border-brand-blue shadow-md shadow-slate-200/50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-700 font-serif italic text-base md:text-lg leading-relaxed mb-6">
                {review.text}
              </p>
              <p className="text-brand-navy font-bold text-sm tracking-wide uppercase">
                {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
