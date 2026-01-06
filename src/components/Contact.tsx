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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT COLUMN: Header & Info */}
          <div className="contact-content sticky top-32">
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
              <p className="text-xl text-[var(--color-text-muted)] max-w-lg mb-12 leading-relaxed">
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

          {/* RIGHT COLUMN: Social Cards */}
          <div className="flex flex-col gap-6">
             {/* WhatsApp CTA Card */}
            <Reveal delay={0.5} width="100%">
                <a
                  href="https://wa.me/6285172478383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-8 p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(37,211,102,0.3)]"
                >
                  <div className="relative z-10 shrink-0">
                    <div className="w-20 h-20 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(37,211,102,0.2)]">
                      <svg viewBox="0 0 24 24" fill="#25D366" className="w-10 h-10">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative z-10 flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">Chat via WhatsApp</h3>
                    <p className="text-[var(--color-accent)] mb-2 font-medium">Respon cepat & langsung</p>
                     <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm group-hover:text-white transition-colors">
                      <span>Chat Sekarang</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                  {/* Gradient Burst Hover */}
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#25D366] opacity-0 group-hover:opacity-20 blur-[80px] transition-all duration-700 pointer-events-none" />
                </a>
            </Reveal>

            {/* Instagram CTA Card */}
            <Reveal delay={0.6} width="100%">
                <a
                  href="https://www.instagram.com/bybestudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-8 p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(225,48,108,0.3)]"
                >
                   <div className="relative z-10 shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px] flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_rgba(225,48,108,0.3)]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                           <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-9 h-9">
                              <rect x="2" y="2" width="20" height="20" rx="5" />
                              <circle cx="12" cy="12" r="4" />
                              <circle cx="18" cy="6" r="1" fill="white" />
                            </svg>
                      </div>
                    </div>
                  </div>
                   <div className="relative z-10 flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">Follow Instagram</h3>
                    <p className="text-[var(--color-accent)] mb-2 font-medium">Portfolio & updates</p>
                    <div className="flex items-center gap-2 text-[var(--color-text-muted)] text-sm group-hover:text-white transition-colors">
                      <span>Lihat Profile</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                   {/* Gradient Burst Hover */}
                   <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#E1306C] opacity-0 group-hover:opacity-20 blur-[80px] transition-all duration-700 pointer-events-none" />
                </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
