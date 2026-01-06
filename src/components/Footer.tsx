"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-16 bg-[var(--color-secondary)] border-t border-[var(--color-gray-light)]" role="contentinfo">
      <div className="container">
        <div className="footer-content text-center">
          <Reveal width="100%" className="flex flex-col items-center">
            <Link href="/" className="footer-logo inline-flex flex-col items-center mb-4 group" aria-label="BYBE Studio Home">
               <span className="logo-text text-2xl font-extrabold tracking-widest group-hover:text-[var(--color-accent)] transition-colors">BYBE</span>
               <span className="logo-subtitle text-xs font-medium text-[var(--color-accent)] tracking-[0.4em]">STUDIO</span>
            </Link>
            <p className="footer-tagline text-[var(--color-text-muted)] mb-8">Your One Stop Digital Marketing Solution</p>
          </Reveal>

          <Reveal width="100%" delay={0.2} className="flex justify-center">
            <nav className="footer-links flex flex-wrap justify-center gap-8 mb-8" aria-label="Footer navigation">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </Reveal>

          <Reveal width="100%" delay={0.3}>
            <div className="footer-bottom pt-8 border-t border-[var(--color-gray-light)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-text-muted)]">
              <p>&copy; {currentYear} BYBE Studio. All rights reserved.</p>
              <p>Surabaya | Jakarta</p>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
