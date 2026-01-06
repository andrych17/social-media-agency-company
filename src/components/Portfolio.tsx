"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Expanded Data Type
interface PortfolioItem {
  name: string;
  category: string;
  description: string;
  image?: string;
  gradient?: string;
  size?: "normal" | "large" | "wide";
  // Detail Content
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  result: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    name: "Confit Surabaya",
    category: "Fine Dining",
    description: "Social Media Management & Content Creation",
    image: "/portfolio2.png",
    size: "large",
    year: "2023",
    services: ["Social Media Strategy", "Content Production", "Reels Creation"],
    challenge: "Confit membutuhkan identitas digital yang mencerminkan pengalaman fine dining yang elegan namun tetap approachable untuk pasar Surabaya.",
    solution: "Kami menciptakan visual storytelling yang fokus pada detail tekstur makanan dan ambiance, dikombinasikan dengan narasi yang menggugah selera.",
    result: "Peningkatan engagement rate sebesar 150% dan pertumbuhan followers organik yang signifikan dalam 3 bulan pertama."
  },
  {
    name: "Sorex",
    category: "Apparel",
    description: "Brand Identity & Digital Campaign",
    gradient: "linear-gradient(135deg, #2d2d2d 0%, #4a4a4a 100%)",
    size: "normal",
    year: "2024",
    services: ["Rebranding", "Campaign Strategy", "Key Visual Design"],
    challenge: "Menyegarkan image brand apparel yang sudah established agar lebih relevan dengan audiens Gen-Z tanpa kehilangan identitas intinya.",
    solution: "Mengembangkan visual language yang lebih bold dan modern, dengan kampanye digital yang bersifat inklusif dan empowering.",
    result: "Brand sentiment positif meningkat dan berhasil menembus segmen pasar baru yang lebih muda."
  },
  {
    name: "Resep Oma Kueh",
    category: "Bakery",
    description: "Branding & Photography",
    gradient: "linear-gradient(135deg, #8b4513 0%, #d4a574 100%)",
    size: "normal",
    year: "2023",
    services: ["Food Photography", "Packaging Design", "Social Media"],
    challenge: "Mengangkat nilai tradisional resep keluarga ke dalam kemasan modern yang layak hantar (gift-worthy).",
    solution: "Fotografi dengan mood warm dan nostalgic, serta desain packaging yang menonjolkan keaslian bahan dan cerita di balik resep.",
    result: "Sold out traffic pada saat peluncuran hampers lebaran dan natal."
  },
  {
    name: "Gho Birdnest",
    category: "Health & Wellness",
    description: "Visual Content & Social Media",
    gradient: "linear-gradient(135deg, #c4a35a 0%, #f5e6c8 100%)",
    size: "normal",
    year: "2024",
    services: ["Content Creation", "Influencer Management", "Visual Guidelines"],
    challenge: "Mengedukasi pasar tentang manfaat birdnest dengan cara yang tidak membosankan dan visual yang premium.",
    solution: "Membuat seri konten edukatif yang aesthetic dan lifestyle-driven, melepaskan image 'obat tradisional' yang kaku.",
    result: "Brand awareness meningkat di kalangan milenial muda yang sadar kesehatan."
  },
  {
    name: "YOOHOO Matcha",
    category: "Beverages",
    description: "Launch Campaign & Brand Activation",
    image: "/portfolio1.png",
    size: "normal",
    year: "2023",
    services: ["Brand Launch", "Event Activation", "Digital Ads"],
    challenge: "Meluncurkan brand matcha baru di pasar yang sudah cukup jenuh dengan kompetitor besar.",
    solution: "Kampanye peluncuran yang fun, energetic, dan visual-heavy dengan warna-warna pop yang membedakan dari brand matcha minimalis lainnya.",
    result: "Antrian panjang saat grand opening dan sold out di minggu pertama peluncuran."
  },
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="portfolio py-32 relative overflow-hidden bg-[var(--color-primary)]" aria-labelledby="portfolio-title">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[rgba(196,163,90,0.15)] via-transparent to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <Reveal width="100%" className="flex justify-center">
            <span className="section-badge mb-6">Our Work</span>
          </Reveal>
          <Reveal width="100%" delay={0.3} className="flex justify-center">
            <h2 id="portfolio-title" className="section-title mb-6">
              Featured <span className="text-gradient">Portfolio</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4} className="flex justify-center">
             <p className="section-subtitle max-w-2xl mx-auto text-[var(--color-text-muted)] text-lg">
              Brand-brand yang telah kami bantu dalam perjalanan digital mereka
             </p>
          </Reveal>
        </div>

        <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-[280px]">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={index}
              onClick={() => setSelectedItem(item)}
              className={`portfolio-item relative rounded-3xl overflow-hidden cursor-pointer group ${
                item.size === "large" ? "md:col-span-2 md:row-span-2" : 
                item.size === "wide" ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              layoutId={`portfolio-card-${item.name}`} // Shared layout ID for seamless transition
            >
              <div className="portfolio-image w-full h-full relative">
                {item.image ? (
                   <Image 
                     src={item.image} 
                     alt={item.name} 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                ) : (
                  <div
                    className="portfolio-placeholder w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110"
                    style={{ background: item.gradient }}
                  >
                    <span className="placeholder-text text-xl font-bold text-white/50 uppercase tracking-widest">{item.name}</span>
                  </div>
                )}
              </div>
              
              <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="portfolio-category text-xs uppercase tracking-widest text-[var(--color-accent)] mb-2 block">{item.category}</span>
                  <h3 className="portfolio-title text-2xl font-bold text-white mb-2">{item.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/80 mt-2">
                      <span>Lihat Detail</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More on Instagram CTA */}
        <Reveal width="100%" delay={0.6} className="flex justify-center mt-16">
          <a 
            href="https://www.instagram.com/bybestudio/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-[var(--color-accent)] hover:scale-105"
          >
            <span className="relative z-10 text-white font-medium tracking-wide">Lebih Banyak Karya di Instagram</span>
            <svg 
              className="w-5 h-5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/0 via-[var(--color-accent)]/10 to-[var(--color-accent)]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
        </Reveal>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Content */}
            <motion.div
               layoutId={`portfolio-card-${selectedItem.name}`}
               className="relative w-full max-w-7xl bg-[#141414] border border-white/10 rounded-[2.5rem] overflow-hidden max-h-[90vh] flex flex-col md:flex-row shadow-2xl"
               onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
            >
               {/* Close Button */}
               <button 
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-8 right-8 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-lg flex items-center justify-center text-white hover:bg-[var(--color-accent)] transition-colors border border-white/10 group"
               >
                  <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
               </button>

               {/* Left/Top: Visual */}
               <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-[#1a1a1a]">
                  {selectedItem.image ? (
                     <Image src={selectedItem.image} alt={selectedItem.name} fill className="object-cover" />
                  ) : (
                     <div className="w-full h-full flex items-center justify-center p-12" style={{ background: selectedItem.gradient }}>
                        <span className="text-4xl font-bold text-white/30 uppercase tracking-widest text-center">{selectedItem.name}</span>
                     </div>
                  )}
                  {/* Overlay Gradient on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent md:bg-gradient-to-r" />
               </div>

               {/* Right/Bottom: Content */}
               <div className="w-full md:w-1/2 p-12 md:p-20 lg:p-24 overflow-y-auto bg-[#141414]">
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.2 }}
                  >
                     <div className="flex items-center gap-6 mb-12">
                        <span className="px-5 py-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                           {selectedItem.category}
                        </span>
                        <span className="text-[var(--color-text-muted)] text-base font-medium">{selectedItem.year}</span>
                     </div>
                     
                     <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 leading-[1.1] tracking-tight bg-gradient-to-r from-[#C4A35A] via-[#d4af6a] to-[#C4A35A] bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmerText">
                        {selectedItem.name}
                     </h3>
                     
                     <div className="space-y-16">
                        <div>
                           <h4 className="text-sm uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-6 font-bold flex items-center gap-3">
                              <span className="w-8 h-[1px] bg-[var(--color-accent)]"></span>
                              The Challenge
                           </h4>
                           <p className="text-white/90 leading-loose text-xl font-light">{selectedItem.challenge}</p>
                        </div>
                        
                        <div>
                           <h4 className="text-sm uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-6 font-bold flex items-center gap-3">
                               <span className="w-8 h-[1px] bg-[var(--color-accent)]"></span>
                               Our Solution
                           </h4>
                           <p className="text-white/90 leading-loose text-xl font-light">{selectedItem.solution}</p>
                        </div>

                        <div>
                           <h4 className="text-sm uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-6 font-bold flex items-center gap-3">
                               <span className="w-8 h-[1px] bg-[var(--color-accent)]"></span>
                               The Result
                           </h4>
                           <div className="relative pl-8 border-l-2 border-[var(--color-accent)]">
                              <p className="text-white font-medium leading-relaxed italic text-2xl">
                                 &quot;{selectedItem.result}&quot;
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className="mt-20 pt-12 border-t border-white/5">
                        <h4 className="text-sm uppercase tracking-[0.25em] text-[var(--color-text-muted)] mb-8 font-bold">Services Delivered</h4>
                        <div className="flex flex-wrap gap-4">
                           {selectedItem.services.map((service, i) => (
                              <span key={i} className="px-6 py-2.5 bg-white/5 rounded-full text-sm text-white/90 border border-white/10 hover:border-[var(--color-accent)] transition-colors cursor-default hover:bg-white/10">
                                 {service}
                              </span>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
