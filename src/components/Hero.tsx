"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const taglines = [
    "Transforming Brands into Digital Experiences",
    "Elevate Your Story, Amplify Your Impact", 
    "Where Creativity Meets Strategic Innovation"
  ];

  useEffect(() => {
    // Check if mobile
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mobileQuery.matches);
    
    const handleMobileChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    mobileQuery.addEventListener("change", handleMobileChange);
    
    return () => mobileQuery.removeEventListener("change", handleMobileChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  useEffect(() => {
    // Skip particles on mobile for better performance
    if (isMobile || !particlesRef.current) return;
    
    const particles = particlesRef.current;
    particles.innerHTML = ''; 
    
    // Reduced particle count from 50 to 20 for better performance
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = 2 + Math.random() * 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 6}s`;
      particle.style.animationDuration = `${8 + Math.random() * 4}s`;
      particle.style.opacity = `${0.15 + Math.random() * 0.3}`;
      particles.appendChild(particle);
    }
  }, [isMobile]);

  return (
    <section 
      id="home" 
      className="hero relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-primary)]" 
      aria-labelledby="hero-title"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(196,163,90,0.15)] via-transparent to-transparent" />
      <div ref={particlesRef} className="hero-particles absolute inset-0 pointer-events-none" />

      <div className="hero-content relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
        {/* Location Badge */}
        <motion.div 
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/80 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            Based in Surabaya • Serving Nationwide
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          id="hero-title" 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Your Strategic Partner in
          <br />
          <span className="text-gradient bg-gradient-to-r from-[#C4A35A] via-[#d4af6a] to-[#C4A35A] bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmerText">
            Digital Excellence
          </span>
        </motion.h1>

        {/* Animated Taglines */}
        <motion.div 
          className="flex justify-center mb-16 min-h-[60px] items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTagline}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ 
                  duration: 0.7,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300"
              >
                {taglines[currentTagline]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.a 
            href="#contact" 
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[var(--color-accent)] text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_rgba(196,163,90,0.4)] min-w-[220px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Start Your Journey</span>
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="relative z-10"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4af6a] to-[#C4A35A] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.a>
          
          <motion.a 
            href="#portfolio" 
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent text-[var(--color-accent)] font-semibold rounded-xl border-2 border-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-accent)]/10 hover:shadow-[0_10px_40px_rgba(196,163,90,0.2)] min-w-[220px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Our Work</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
