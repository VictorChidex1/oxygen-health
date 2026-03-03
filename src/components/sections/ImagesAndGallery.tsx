import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderImages = [
  {
    src: "/assets/comfort-home-setup.jpg",
    caption: "Comfort-Focused Home Setup",
  },
  {
    src: "/assets/32-Inch-Hyperbaric-Chamber-by-Elite-Hyperbaric.webp",
    caption: "32 Inch Elite Hyperbaric Chamber",
  },
  {
    src: "/assets/easy-daily-wellness-routine.jpg",
    caption: "Easy Daily Wellness Routine",
  },
  {
    src: "/assets/premium-materials-and-build-quality.jpg",
    caption: "Premium Materials & Build Quality",
  },
];

const gridImages = [
  { src: "/assets/image-section4.jpg", alt: "Gallery Image 1" },
  { src: "/assets/image-section5.jpg", alt: "Gallery Image 2" },
  { src: "/assets/image-section6.jpg", alt: "Gallery Image 3" },
  { src: "/assets/image-section7.jpg", alt: "Gallery Image 4" },
  { src: "/assets/image-section8.jpg", alt: "Gallery Image 5" },
  { src: "/assets/image-section9.jpg", alt: "Gallery Image 6" },
];

export default function ImagesAndGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  // Auto-sliding every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-slate-50 py-24 font-sans relative" id="gallery">
      {/* Background Decorator */}
      <div className="absolute top-0 right-0 w-full h-full bg-slate-100/50 pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Text */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight mb-4 leading-tight">
            The Gallery
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-medium tracking-wide max-w-2xl">
            Explore our state-of-the-art hyperbaric oxygen chambers in their
            natural environments. Premium build quality, designed for comfort
            and efficacy.
          </p>
        </div>

        {/* 1. The "Editorial" Split Slider */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-24">
          {/* Left Side: Polaroid Framing Slider (70%) */}
          <div className="w-full lg:w-8/12 relative group perspective-1000">
            <div className="relative aspect-[4/3] md:aspect-[16/9] w-full bg-white border-[12px] md:border-[16px] border-white shadow-2xl shadow-slate-300 overflow-hidden transform transition-transform duration-700 ease-in-out group-hover:scale-[1.02]">
              <img
                src={sliderImages[currentSlide].src}
                alt={sliderImages[currentSlide].caption}
                className="w-full h-full object-cover transition-transform duration-[2000ms] scale-100 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side: Editorial Control Panel (30%) */}
          <div className="w-full lg:w-4/12 flex flex-col justify-center items-start">
            <div className="relative mb-6">
              <span className="text-7xl lg:text-8xl font-light text-slate-200 absolute -top-12 -left-6 -z-10 select-none hidden md:block">
                0{currentSlide + 1}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-navy leading-snug">
                {sliderImages[currentSlide].caption}
              </h3>
            </div>

            <div className="w-12 h-1 bg-brand-blue mb-8 rounded-full"></div>

            <div className="flex items-center gap-6 mt-4">
              <button
                onClick={prevSlide}
                className="w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center text-brand-navy hover:text-white hover:border-brand-blue hover:bg-brand-blue transition-all shadow-sm group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>

              <div className="text-slate-400 font-medium tracking-widest text-sm">
                0{currentSlide + 1} / 0{sliderImages.length}
              </div>

              <button
                onClick={nextSlide}
                className="w-14 h-14 rounded-full border border-slate-300 flex items-center justify-center text-brand-navy hover:text-white hover:border-brand-blue hover:bg-brand-blue transition-all shadow-sm group"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Pagination Dots (Optional, keeping for minimalists) */}
            <div className="flex gap-2 mt-10">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? "w-8 bg-brand-blue"
                      : "w-3 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 2 & 3. The Masonry / Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[250px]">
          {/* Large Feature (Spans 2 cols, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 group perspective-1000">
            <div className="w-full h-full bg-white border-[8px] border-white shadow-xl shadow-slate-200/60 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60 cursor-pointer">
              <img
                src={gridImages[0].src}
                alt={gridImages[0].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Wide Landscape (Spans 2 cols, 1 row) */}
          <div className="md:col-span-2 md:row-span-1 group perspective-1000">
            <div className="w-full h-full bg-white border-[8px] border-white shadow-xl shadow-slate-200/60 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60 cursor-pointer">
              <img
                src={gridImages[1].src}
                alt={gridImages[1].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Small Square 1 (1 col, 1 row) */}
          <div className="md:col-span-1 md:row-span-1 group perspective-1000">
            <div className="w-full h-full bg-white border-[8px] border-white shadow-xl shadow-slate-200/60 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60 cursor-pointer">
              <img
                src={gridImages[2].src}
                alt={gridImages[2].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Small Square 2 (1 col, 1 row) */}
          <div className="md:col-span-1 md:row-span-1 group perspective-1000">
            <div className="w-full h-full bg-white border-[8px] border-white shadow-xl shadow-slate-200/60 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60 cursor-pointer">
              <img
                src={gridImages[3].src}
                alt={gridImages[3].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Wide Landscape Bottom 1 (Spans 2 cols, 1 row) */}
          <div className="md:col-span-2 md:row-span-1 group perspective-1000">
            <div className="w-full h-full bg-white border-[8px] border-white shadow-xl shadow-slate-200/60 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60 cursor-pointer">
              <img
                src={gridImages[4].src}
                alt={gridImages[4].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Wide Landscape Bottom 2 (Spans 2 cols, 1 row) */}
          <div className="md:col-span-2 md:row-span-1 group perspective-1000">
            <div className="w-full h-full bg-white border-[8px] border-white shadow-xl shadow-slate-200/60 overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/60 cursor-pointer">
              <img
                src={gridImages[5].src}
                alt={gridImages[5].alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
