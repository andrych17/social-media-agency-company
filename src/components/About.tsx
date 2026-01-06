"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    if (isStatsInView && statsRef.current) {
      const counters = statsRef.current.querySelectorAll("[data-count]");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-count") || "0");
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target.toString();
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current).toString();
          }
        }, 30);
      });
    }
  }, [isStatsInView]);

  return (
    <section id="about" className="about py-32 relative" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="about-content">
            <Reveal>
              <span className="section-badge mb-6">About Us</span>
            </Reveal>
            <Reveal delay={0.3}>
              <h2 id="about-title" className="section-title mb-6">
                We Transform Brands Into
                <br />
                <span className="text-gradient">Memorable Stories</span>
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="about-text text-lg text-[var(--color-text-muted)] mb-6 leading-relaxed">
                BYBE Studio adalah digital creative agency yang berfokus pada branding dan social media
                management. Kami percaya bahwa setiap brand memiliki cerita unik yang layak untuk didengar
                dunia.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="about-text text-lg text-[var(--color-text-muted)] mb-12 leading-relaxed">
                Dengan tim kreatif yang berpengalaman dan passion dalam storytelling visual, kami membantu
                brand Anda menciptakan koneksi emosional dengan audiens yang tepat.
              </p>
            </Reveal>
            
            <div className="about-stats grid grid-cols-3 gap-8 pt-12 border-t border-[var(--color-gray-light)]" ref={statsRef}>
              {[
                { count: 50, label: "Happy Clients" },
                { count: 300, label: "Projects Done" },
                { count: 5, label: "Years Experience" },
              ].map((stat, index) => (
                <Reveal key={index} delay={0.6 + index * 0.1} width="100%">
                  <div className="stat-item text-center">
                    <span className="stat-number text-4xl font-bold text-[var(--color-accent)]" data-count={stat.count}>
                      0
                    </span>
                    <span className="stat-plus text-2xl font-bold text-[var(--color-accent)]">+</span>
                    <span className="stat-label block mt-2 text-sm text-[var(--color-text-muted)]">{stat.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="about-visual flex justify-center lg:justify-end">
            <motion.div 
              className="visual-card relative w-full max-w-md p-10 bg-[var(--color-gray)] border border-[var(--color-gray-light)] rounded-3xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card-glow absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,_rgba(196,163,90,0.1),_transparent_50%)] pointer-events-none" aria-hidden="true"></div>
              <div className="card-content relative z-10">
                <div className="card-icon w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] rounded-2xl mb-6 text-[var(--color-primary)]">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="card-title text-2xl font-bold mb-4">Our Philosophy</h3>
                <p className="card-text text-[var(--color-text-muted)] italic leading-loose">
                  &ldquo;Building refined social presences that resonate with your audience and drive
                  meaningful engagement.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
