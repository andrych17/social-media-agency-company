"use client";

import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 3v6M15 3v6M9 15v6M15 15v6M3 9h6M3 15h6M15 9h6M15 15h6" />
      </svg>
    ),
    title: "Social Media Management",
    description:
      "Strategi konten, pengelolaan akun, dan analisis performa untuk memaksimalkan engagement brand Anda di social media.",
    tags: ["#BybeSocial", "Instagram", "TikTok"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3l1.912 5.813h6.088l-4.928 3.573 1.88 5.814L12 14.627 7.048 18.2l1.88-5.814L4 8.813h6.088L12 3z" />
      </svg>
    ),
    title: "Branding & Identity",
    description:
      "Membangun identitas visual yang kuat dan konsisten, dari logo hingga brand guidelines yang memorable.",
    tags: ["Logo Design", "Visual Identity", "Brand Strategy"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <circle cx="12" cy="10" r="3" />
        <path d="M5 21l5-5 3 3 6-6" />
      </svg>
    ),
    title: "Photography & Videography",
    description:
      "Produksi konten visual berkualitas tinggi untuk kebutuhan marketing dan branding Anda.",
    tags: ["@teory.studio", "Product", "Video Content"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Influencer Management",
    description:
      "Program BYBEYOURSIDE untuk kolaborasi influencer dan community building yang efektif.",
    tags: ["BYBEFLUENCER", "KOL", "Campaign"],
  },
];

export default function Services() {
  return (
    <section id="services" className="services py-32 bg-[var(--color-secondary)]" aria-labelledby="services-title">
      <div className="container">
        <div className="section-header text-center mb-16">
          <Reveal width="100%" className="flex justify-center">
             <span className="section-badge mb-6">What We Do</span>
          </Reveal>
          <Reveal width="100%" delay={0.3} className="flex justify-center">
            <h2 id="services-title" className="section-title mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.4} className="flex justify-center">
            <p className="section-subtitle max-w-2xl mx-auto text-[var(--color-text-muted)] text-lg">
              Solusi digital terintegrasi untuk pertumbuhan brand Anda
            </p>
          </Reveal>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.article 
              key={index} 
              className="service-card p-8 bg-[var(--color-gray)] border border-[var(--color-gray-light)] rounded-3xl relative overflow-hidden group hover:border-[var(--color-accent)] transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="service-icon w-14 h-14 flex items-center justify-center bg-[var(--color-gray-light)] rounded-2xl mb-6 text-[var(--color-accent)]" aria-hidden="true">
                <div className="w-7 h-7">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="service-title text-xl font-bold mb-3">{service.title}</h3>
              <p className="service-desc text-[var(--color-text-muted)] text-sm mb-6 leading-relaxed h-[80px]">{service.description}</p>
              
              <div className="service-tags flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag px-3 py-1 bg-[rgba(196,163,90,0.1)] text-[var(--color-accent)] text-xs rounded-full border border-[rgba(196,163,90,0.2)]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
