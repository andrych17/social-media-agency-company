"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();

  // Parallax transforms - reduced for mobile
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -50 : -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -100 : -200]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    
    setPrefersReducedMotion(mediaQuery.matches);
    setIsMobile(mobileQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    const handleMobileChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    mobileQuery.addEventListener("change", handleMobileChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      mobileQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  // Reduced motion or mobile - simpler background
  if (prefersReducedMotion || isMobile) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Simple gradient background - no heavy animations on mobile */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-primary) 100%)",
          }}
        />
        
        {/* Single static glow - no blur animation */}
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        
        {/* Minimal left glow */}
        <div
          className="absolute top-1/3 -left-32 w-64 h-64 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Vignette Effect */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, transparent 0%, var(--color-primary) 100%)",
            opacity: 0.6,
          }}
        />
      </div>
    );
  }

  // Desktop - full animations
  const particles = [...Array(6)].map((_, i) => ({
    id: i,
    left: `${15 + i * 15}%`,
    top: `${20 + (i * 10) % 60}%`,
    background: i % 2 === 0 ? "var(--color-accent)" : "var(--color-accent-light)",
    xOffset: Math.sin(i) * 40,
    delay: i * 2,
    duration: 12 + i * 2,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-primary) 100%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 30, // Slower for smoother feel
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Floating Shape 1 - Top Right - GPU optimized */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          filter: "blur(50px)", // Reduced blur
          y: y1,
          willChange: "transform",
          transform: "translateZ(0)", // Force GPU layer
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Floating Shape 2 - Left Middle */}
      <motion.div
        className="absolute top-1/3 -left-32 w-72 h-72 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-light) 0%, transparent 70%)",
          filter: "blur(50px)",
          y: y2,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 35,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 2,
        }}
      />

      {/* Floating Particles - Reduced count */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: particle.background,
            left: particle.left,
            top: particle.top,
            opacity: 0.4,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Subtle Grid Overlay - Static, no animation */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, var(--color-primary) 100%)",
          opacity: 0.6,
        }}
      />
    </div>
  );
}
