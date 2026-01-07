"use client";

export default function InstagramFloat() {
  return (
    <a
      href="https://www.instagram.com/bybestudio/"
      target="_blank"
      rel="noopener noreferrer"
      className="instagram-float group"
      aria-label="Follow us on Instagram"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#E1306C] animate-ping opacity-20"></span>
      <span className="absolute inset-0 rounded-full bg-[#E1306C] animate-pulse opacity-30"></span>
      
      {/* Main button */}
      <div className="relative z-10 w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full shadow-2xl shadow-[#E1306C]/40 group-hover:shadow-[#E1306C]/60 transition-all duration-300 group-hover:scale-110">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true" className="w-7 h-7 group-hover:scale-110 transition-transform duration-300">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="18" cy="6" r="1" fill="white" />
        </svg>
      </div>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#1f1f1f] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none">
        Follow kami! 📸
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#1f1f1f]"></span>
      </span>
    </a>
  );
}
