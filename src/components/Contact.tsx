"use client";

import { Reveal } from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact py-32 relative overflow-hidden" aria-labelledby="contact-title">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-accent)] opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header & Contact Info */}
          <div className="contact-content">
            <Reveal>
              <span className="section-badge mb-6">Get In Touch</span>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 id="contact-title" className="section-title mt-4 mb-8">
                Let&apos;s Bring Your
                <br />
                <span className="text-gradient relative inline-block">
                  Brand to Life
                  <div className="absolute -inset-4 bg-[var(--color-accent)] opacity-20 blur-xl rounded-full -z-10" />
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-xl text-[var(--color-text-muted)] mb-12 leading-relaxed">
                Hubungi kami sekarang untuk konsultasi gratis dan mulai perjalanan branding Anda.
              </p>
            </Reveal>

            {/* Contact Details List */}
            <Reveal delay={0.4}>
               <div className="space-y-8">
                  {/* Office */}
                  <div className="flex items-start gap-6 group">
                     <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] flex items-center justify-center group-hover:bg-[#ffffff0a] transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" className="w-6 h-6">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                     </div>
                     <div>
                        <h4 className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Office</h4>
                        <p className="text-white font-medium leading-relaxed">Raya Dharmahusada Indah B-14<br/>Surabaya, East Java</p>
                     </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-6 group">
                     <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] flex items-center justify-center group-hover:bg-[#ffffff0a] transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" className="w-6 h-6">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                     </div>
                     <div>
                        <h4 className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Email</h4>
                        <a href="mailto:hi.bybestudio@gmail.com" className="text-white font-medium hover:text-[var(--color-accent)] transition-colors">
                            hi.bybestudio@gmail.com
                        </a>
                     </div>
                  </div>

                  {/* Hours */}
                   <div className="flex items-start gap-6 group">
                     <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#ffffff05] border border-[#ffffff10] flex items-center justify-center group-hover:bg-[#ffffff0a] transition-colors">
                        <svg viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" className="w-6 h-6">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                     </div>
                     <div>
                        <h4 className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Hours</h4>
                        <p className="text-white font-medium">Mon - Fri: 9AM - 6PM</p>
                        <p className="text-sm text-[var(--color-text-muted)] mt-1">Weekend: By appointment</p>
                     </div>
                  </div>
               </div>
            </Reveal>

             {/* Footer Note */}
            <Reveal delay={0.5}>
              <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-2 text-[var(--color-text-muted)] text-sm">
                 <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                 <span>Respon dalam 1 jam di jam kerja</span>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
