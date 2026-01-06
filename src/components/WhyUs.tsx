"use client";

import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    number: "01",
    title: "Dedicated Team",
    description: "Tim profesional yang fokus pada keberhasilan brand Anda",
  },
  {
    number: "02",
    title: "Data-Driven Strategy",
    description: "Keputusan berbasis data untuk hasil yang optimal",
  },
  {
    number: "03",
    title: "Creative Excellence",
    description: "Konten visual yang estetik dan memorable",
  },
  {
    number: "04",
    title: "End-to-End Solution",
    description: "Solusi lengkap dari strategi hingga eksekusi",
  },
];

export default function WhyUs() {
  return (
    <section className="why-us py-32 bg-[var(--color-secondary)]" aria-labelledby="why-us-title">
      <div className="container">
        <div className="why-us-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="why-us-content sticky top-32">
            <Reveal>
              <span className="section-badge mb-6">Why Choose Us</span>
            </Reveal>
            <Reveal delay={0.3}>
              <h2 id="why-us-title" className="section-title">
                Partner Yang Tepat Untuk
                <br />
                <span className="text-gradient">Brand Anda</span>
              </h2>
            </Reveal>
          </div>

          <div className="why-us-features flex flex-col gap-8">
            {features.map((feature, index) => (
              <Reveal key={index} delay={0.3 + index * 0.1} width="100%" direction="left">
                <div className="feature-item flex gap-6 p-8 bg-[var(--color-gray)] border border-[var(--color-gray-light)] rounded-2xl hover:border-[var(--color-accent)] hover:translate-x-2 transition-all duration-300">
                  <div className="feature-number text-4xl font-extrabold text-[var(--color-accent)] opacity-50 leading-none" aria-hidden="true">
                    {feature.number}
                  </div>
                  <div className="feature-content flex-1">
                    <h4 className="feature-title text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="feature-desc text-[var(--color-text-muted)]">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
