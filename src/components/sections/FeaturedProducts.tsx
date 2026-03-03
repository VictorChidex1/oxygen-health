import { useState, useEffect } from "react";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  badge: string;
  features: string[];
  image: string;
  link: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Elite Serene Max| Soft Chamber | Sitting Chamber 1.5 ATA",
    badge: "Best Seller",
    features: ["1.5 ATA Pressure", "Home wellness use", "Easy setup"],
    image: "/assets/elite-serene-max-soft-chamber-sitting-chamber-1.5-ata.webp",
    link: "https://www.oxygenhealthsystems.com/product-category/all-chambers/lying-soft-chambers/",
  },
  {
    id: 2,
    name: "64''D Hyperbaric Oxygen Chamber | Hard Shell | Multiplace M5502",
    badge: "Multi Person Chamber",
    features: [
      "Concentrator compatible",
      "Optimized oxygen delivery",
      "Support included",
    ],
    image:
      "/assets/64”d-hyperbaric-oxygen-chamber-hard-shell-multiplace-m5502.webp",
    link: "https://www.oxygenhealthsystems.com/product-category/all-chambers/lying-soft-chambers/",
  },
  {
    id: 3,
    name: "32 Inch Hyperbaric Chamber by Elite Hyperbaric",
    badge: "Wellness Chamber",
    features: ["Comfort upgrade", "Easy Entry | Exit", "Fits chamber"],
    image: "/assets/32-Inch-Hyperbaric-Chamber-by-Elite-Hyperbaric.webp",
    link: "https://www.oxygenhealthsystems.com/product-category/all-chambers/lying-soft-chambers/",
  },
  {
    id: 4,
    name: "Vital Sphere 360 | 2.0 ATA | Walk-in Hard Shell Oxygen Chamber",
    badge: "Popular for Visibility",
    features: ["Helps air freshness", "Simple install", "Low maintenance"],
    image:
      "/assets/vital-sphere-360-2.0-ata-walk-in-hard-shelloxygen-chamber.jpg",
    link: "https://www.oxygenhealthsystems.com/product-category/all-chambers/lying-soft-chambers/",
  },
  {
    id: 5,
    name: "Oxyflow Mini Sitting Type 1.5 ATA with External frame",
    badge: "Compact and Effective Therapy",
    features: ["Portable storage", "Protective design", "Easy carry"],
    image: "/assets/Oxyflow-Ultra-Mini-5.5.jpg",
    link: "https://www.oxygenhealthsystems.com/product-category/all-chambers/lying-soft-chambers/",
  },
  {
    id: 6,
    name: "30'' 2.0 ATA Hard-Shell Hyperbaric Oxygen Chamber",
    badge: "Effective Oxygen Therapy",
    features: ["Optional upgrade", "Premium build", "Support included"],
    image: "/assets/30”-2.0-ata-hard-shell-hyperbaric-oxygenchamber.jpg",
    link: "https://www.oxygenhealthsystems.com/product-category/all-chambers/lying-soft-chambers/",
  },
];

export default function FeaturedProducts({ onOpen }: { onOpen?: () => void }) {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 3;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const next = () => setCurrentPage((p) => (p + 1) % totalPages);
  const prev = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

  // Auto-sliding interval (Slide left/right ping-pong style via % totalPages loop)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000); // 5 seconds interval
    return () => clearInterval(timer);
  }, [totalPages]);

  const visibleProducts = products.slice(
    currentPage * productsPerPage,
    currentPage * productsPerPage + productsPerPage
  );

  return (
    <section
      className="bg-brand-navy py-20 lg:py-28 font-sans relative overflow-hidden"
      id="products"
    >
      {/* Background Decorator overlay */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              Featured Products
            </h2>
            <p className="text-slate-300 text-lg font-medium tracking-wide">
              Click View Details to open the product page
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all shadow-sm group backdrop-blur-sm"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white hover:bg-white/10 transition-all shadow-sm group backdrop-blur-sm"
              aria-label="Next products"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#121b2d] rounded-[2rem] overflow-hidden shadow-xl border border-white/10 flex flex-col h-full group transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/20 hover:-translate-y-2 hover:border-brand-blue/40"
            >
              {/* Image Container */}
              <div className="bg-white h-[220px] w-full p-6 flex items-center justify-center relative rounded-t-[2rem] border-b border-white/10 text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow relative z-10 bg-[#0B1221]">
                {/* Badges row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-brand-blue/20 border border-brand-blue/30 text-blue-300 text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-inner backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
                    {product.badge}
                  </div>
                  <button
                    onClick={onOpen}
                    className="text-slate-400 text-sm font-medium hover:text-white transition-colors focus:outline-none"
                  >
                    Request Quote
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg leading-snug mb-5 min-h-[56px] line-clamp-3 pr-2 group-hover:text-amber-50 relative z-10 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Features List */}
                <ul className="mb-8 space-y-2.5 flex-grow relative z-10">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-300 text-sm md:text-[15px]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue opacity-80 shrink-0 shadow-[0_0_8px_rgba(37,99,235,0.8)]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] relative z-10"
                >
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`h-2 rounded-full transition-all duration-500 focus:outline-none ${
                currentPage === idx
                  ? "w-10 bg-brand-blue shadow-[0_0_12px_rgba(37,99,235,0.5)]"
                  : "w-3 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
