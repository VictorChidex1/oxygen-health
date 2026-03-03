import { useState } from "react";
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

export default function FeaturedProducts() {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 3;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const next = () => setCurrentPage((p) => (p + 1) % totalPages);
  const prev = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

  const visibleProducts = products.slice(
    currentPage * productsPerPage,
    currentPage * productsPerPage + productsPerPage
  );

  return (
    <section
      className="bg-white py-20 lg:py-28 font-sans border-t border-slate-100"
      id="products"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4 leading-tight">
              Featured Products
            </h2>
            <p className="text-slate-600 text-lg font-medium">
              Click View Details to open the product page
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-end">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-navy hover:border-brand-navy hover:bg-slate-50 transition-all shadow-sm group"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand-navy hover:border-brand-navy hover:bg-slate-50 transition-all shadow-sm group"
              aria-label="Next products"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#121b2d] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800 flex flex-col h-full group transition-all duration-300 hover:shadow-brand-blue/10 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="bg-white h-[280px] w-full p-8 flex items-center justify-center relative rounded-t-[2rem] border-b border-white/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow relative z-10">
                {/* Badges row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="bg-[#1e2a40] border border-[#2b3a55] text-blue-300 text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-inner">
                    <Star className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
                    {product.badge}
                  </div>
                  <button className="text-slate-400 text-sm font-medium hover:text-white transition-colors">
                    Request Quote
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg md:text-xl leading-snug mb-6 min-h-[56px] line-clamp-3 pr-2">
                  {product.name}
                </h3>

                {/* Features List */}
                <ul className="mb-8 space-y-2.5 flex-grow">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-300 text-sm md:text-[15px]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-500 opacity-60 shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  View Details
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots (Optional, for visual completeness) */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {[...Array(totalPages)].map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentPage === idx ? "w-8 bg-brand-navy" : "w-2 bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
