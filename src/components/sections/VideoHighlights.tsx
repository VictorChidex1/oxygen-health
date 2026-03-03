import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

interface VideoData {
  id: string;
  youtubeId: string;
  title: string;
}

const videos: VideoData[] = [
  {
    id: "1",
    youtubeId: "I4ZEwxAv9HU",
    title: "GHS Video 1",
  },
  {
    id: "2",
    youtubeId: "I4ZEwxAv9HU",
    title: "GHS Video 2",
  },
  {
    id: "3",
    youtubeId: "5JTpcRSbB00",
    title: "GHS Video 3",
  },
];

export default function VideoHighlights() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Auto-sliding every 6 seconds (pause if modal is open)
  useEffect(() => {
    if (isModalOpen) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isModalOpen]);

  const openVideo = (youtubeId: string) => {
    setActiveVideoId(youtubeId);
    setIsModalOpen(true);
  };

  const closeVideo = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveVideoId(null), 300); // Wait for fade out
  };

  // Helper to get max-res YouTube thumbnail
  const getOutputThumbnail = (youtubeId: string) =>
    `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <section
      className="bg-brand-navy py-20 lg:py-28 font-sans relative"
      id="videos"
    >
      {/* Background Decorator overlay */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Text */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Video Highlights
          </h2>
          <p className="text-slate-300 text-base md:text-lg font-medium tracking-wide">
            Click a video to play in a popup.
          </p>
        </div>

        {/* 1. Immersive 1-Column Video Slider Container */}
        <div className="relative w-full aspect-video md:aspect-[21/9] lg:aspect-[2/1] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-[#0a1120] group">
          {/* Active Thumbnail Image */}
          <img
            src={getOutputThumbnail(videos[currentSlide].youtubeId)}
            alt={videos[currentSlide].title}
            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-in-out scale-100 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />

          {/* Gradient Overlay for Text & Controls */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none fade-in"></div>

          {/* Subtle vignette for cinematic feel */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none"></div>

          {/* Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={() => openVideo(videos[currentSlide].youtubeId)}
              className="w-20 h-20 md:w-24 md:h-24 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110 focus:outline-none"
              aria-label={`Play ${videos[currentSlide].title}`}
            >
              <Play className="w-8 h-8 md:w-10 md:h-10 ml-2 fill-white text-white" />
            </button>
          </div>

          {/* Bottom Title Bar & Indicators */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 py-3 px-6 rounded-xl md:rounded-2xl inline-block max-w-[80%] lg:max-w-[50%] mb-4">
              <h3 className="text-white font-bold text-lg md:text-xl drop-shadow-md">
                {videos[currentSlide].title}
              </h3>
            </div>
          </div>

          {/* Left/Right Navigation Arrows Inside Slider */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-black/20 hover:bg-black/50 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-20"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-black/20 hover:bg-black/50 backdrop-blur-sm rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all opacity-0 group-hover:opacity-100 z-20"
            aria-label="Next video"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Slider Pagination Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                  currentSlide === idx
                    ? "w-8 bg-white"
                    : "w-3 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 2. The Video Popup Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 fade-in">
          {/* Dark Overlay Background */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            onClick={closeVideo}
            aria-hidden="true"
          />

          {/* Close Button Top Right */}
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 z-[110] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Close video player"
          >
            <X className="w-6 h-6" />
          </button>

          {/* YouTube iframe Container */}
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-brand-blue/20 z-[105] cinematic-pop border border-white/10">
            {activeVideoId && (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
