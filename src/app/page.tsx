import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InstagramFloat from "@/components/InstagramFloat";

export default function Home() {
  return (
    <>
      {/* BYBE Studio - Last updated: 2026-01-07 */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <InstagramFloat />
      <WhatsAppFloat />
    </>
  );
}
