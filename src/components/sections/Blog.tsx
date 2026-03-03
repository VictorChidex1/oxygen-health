import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    category: "Home Oxygen Chambers",
    date: "Sep 5, 2025",
    readTime: "4 min read",
    title:
      "Top 6 Hyperbaric Oxygen Chambers For At-Home Wellness And Skin Health",
    excerpt:
      "When we talk about beauty and longevity, the focus is shifting away from short-term fixes and toward cellular-level rejuvenation.",
    image: "/assets/image-section4.jpg",
    link: "https://www.oxygenhealthsystems.com/top-6-hyperbaric-oxygen-chambers-for-at-home-wellness-and-skin-health/",
  },
  {
    category: "Hyperbaric Oxygen Therapy",
    date: "Nov 24, 2025",
    readTime: "5 min read",
    title: "How Long Does HBOT Take to Work for Sports Recovery",
    excerpt:
      "When athletes suffer injuries or need faster recovery between training sessions, one of the first questions they ask is: 'How quickly will I see results?'",
    image: "/assets/image-section5.jpg",
    link: "https://www.oxygenhealthsystems.com/how-long-does-hbot-take-to-work-for-sports-recovery",
  },
  {
    category: "Home Oxygen Chambers",
    date: "Nov 10, 2025",
    readTime: "3 min read",
    title:
      "7 Reasons Investment in a Hyperbaric Chamber Is Worthwhile for Your Sports Clinic",
    excerpt:
      "Adding hyperbaric oxygen therapy to your facility is a major decision—this guide helps you evaluate the ROI and fit for your practice.",
    image: "/assets/image-section6.jpg",
    link: "https://www.oxygenhealthsystems.com/7-reasons-investment-in-a-hyperbaric-chamber-is-worthwhile-for-your-sports-clinic",
  },
  {
    category: "Home Oxygen Chambers",
    date: "Oct 23, 2025",
    readTime: "6 min read",
    title: "Softshell vs Hardshell HBOT Chambers: Which Is Better For Home Use",
    excerpt:
      "If you've been exploring HBOT at home, you've likely discovered two main types: softshell and hardshell. Here's how they compare.",
    image: "/assets/image-section7.jpg",
    link: "https://www.oxygenhealthsystems.com/softshell-vs-hardshell-hbot-chambers-which-is-better-for-home-use",
  },
  {
    category: "Hyperbaric Oxygen Chambers",
    date: "Nov 12, 2025",
    readTime: "6 min read",
    title: "8 Professional Athletes Who Swear by Hyperbaric Chambers",
    excerpt:
      "In the relentless pursuit of competitive excellence, professional athletes leave no stone unturned when it comes to recovery and performance enhancement.",
    image: "/assets/image-section8.jpg",
    link: "https://www.oxygenhealthsystems.com/8-professional-athletes-who-swear-by-hyperbaric-chambers",
  },
  {
    category: "Hyperbaric Oxygen Therapy",
    date: "Nov 25, 2025",
    readTime: "8 min read",
    title: "How Many HBOT Sessions Do Athletes Need for Injury Recovery",
    excerpt:
      "Athletes pushing their bodies to peak performance face an inevitable challenge: the need for rapid, effective recovery.",
    image: "/assets/image-section9.jpg",
    link: "https://www.oxygenhealthsystems.com/how-many-hbot-sessions-do-athletes-need-for-injury-recovery/",
  },
];

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Group posts into arrays of 3 for desktop grid sliding
  const chunks = [];
  for (let i = 0; i < blogPosts.length; i += 3) {
    chunks.push(blogPosts.slice(i, i + 3));
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % chunks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + chunks.length) % chunks.length);
  };

  // Auto-sliding every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % chunks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [chunks.length]);

  return (
    <section
      className="bg-slate-50 py-20 lg:py-28 font-sans relative"
      id="blog"
    >
      {/* Background Decorator overlay */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Text */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-3 leading-tight">
            Latest Blog Posts
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium tracking-wide">
            Fresh updates, tips, and guides.
          </p>
        </div>

        {/* Desktop Slider Container (Hidden on Mobile) */}
        <div className="hidden md:block relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {chunks.map((chunk, chunkIdx) => (
              <div
                key={chunkIdx}
                className="w-full shrink-0 grid grid-cols-3 gap-6 px-1 py-4"
              >
                {chunk.map((post, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-300 group flex flex-col h-full"
                  >
                    {/* Image Header */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      {/* Meta Tags */}
                      <div className="flex items-center justify-between text-xs font-semibold tracking-wide text-slate-500 mb-4">
                        <span className="bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-md flex items-center gap-1.5">
                          <svg
                            className="w-3.5 h-3.5 text-brand-blue"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5L18.5 7M4 10h16v1H4v-1zm1 5h10v1H5v-1z"
                            ></path>
                          </svg>
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                      </div>

                      <div className="text-xs text-brand-blue font-bold uppercase tracking-wide mb-2">
                        {post.date}
                      </div>

                      {/* Title & Excerpt */}
                      <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 leading-snug group-hover:text-brand-blue transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-8 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Read More Button (Pushed to bottom) */}
                      <div className="mt-auto">
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-brand-blue/20 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Read More
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Left/Right Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 lg:-ml-5 w-12 h-12 bg-white hover:bg-blue-50 rounded-full border border-slate-200 shadow-xl flex items-center justify-center text-brand-navy hover:text-brand-blue transition-all z-20 group"
            aria-label="Previous posts"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 lg:-mr-5 w-12 h-12 bg-white hover:bg-blue-50 rounded-full border border-slate-200 shadow-xl flex items-center justify-center text-brand-navy hover:text-brand-blue transition-all z-20 group"
            aria-label="Next posts"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile View (Standard Vertical Stack) */}
        <div className="md:hidden flex flex-col gap-6">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 flex flex-col">
                <div className="flex items-center justify-between text-[11px] font-semibold tracking-wide text-slate-500 mb-3">
                  <span className="bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <div className="text-xs text-brand-blue font-bold uppercase tracking-wide mb-2">
                  {post.date}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-blue text-white font-bold py-3 rounded-xl shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2 mt-auto text-sm"
                >
                  Read More
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Slider Pagination Indicators */}
        <div className="hidden md:flex justify-center gap-2 mt-10">
          {chunks.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === idx
                  ? "w-8 bg-brand-blue"
                  : "w-3 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
