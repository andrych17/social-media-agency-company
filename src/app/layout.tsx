import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bybestudio.com"),
  title: {
    default: "BYBE Studio | Your One Stop Digital Marketing Solution",
    template: "%s | BYBE Studio",
  },
  description:
    "BYBE Studio adalah digital creative agency di Surabaya & Jakarta yang fokus pada branding, social media management, photography & videography. Every brand has their own stories, we are ready to shout your brand story out loud!",
  keywords: [
    "digital marketing",
    "branding",
    "social media management",
    "photography",
    "videography",
    "creative agency",
    "surabaya",
    "jakarta",
    "indonesia",
    "content creation",
    "brand identity",
    "influencer marketing",
  ],
  authors: [{ name: "BYBE Studio" }],
  creator: "BYBE Studio",
  publisher: "BYBE Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bybestudio.com",
    siteName: "BYBE Studio",
    title: "BYBE Studio | Your One Stop Digital Marketing Solution",
    description:
      "Digital creative agency di Surabaya & Jakarta. Branding, Social Media Management, Photography & Videography.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BYBE Studio - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BYBE Studio | Your One Stop Digital Marketing Solution",
    description:
      "Digital creative agency di Surabaya & Jakarta. Branding, Social Media Management, Photography & Videography.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://bybestudio.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BYBE Studio",
              alternateName: "BEBE Studio",
              url: "https://bybestudio.com",
              logo: "https://bybestudio.com/logo.png",
              description:
                "Digital creative agency di Surabaya & Jakarta yang fokus pada branding, social media management, photography & videography.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Raya Dharmahusada Indah B-14",
                addressLocality: "Surabaya",
                addressRegion: "East Java",
                postalCode: "16025",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-851-7247-8383",
                contactType: "customer service",
                email: "hi.bybestudio@gmail.com",
                availableLanguage: ["Indonesian", "English"],
              },
              sameAs: [
                "https://www.instagram.com/bybestudio/",
                "https://www.instagram.com/bybesocial/",
                "https://www.instagram.com/teory.studio/",
              ],
              areaServed: ["Surabaya", "Jakarta", "Indonesia"],
              serviceType: [
                "Social Media Management",
                "Branding",
                "Photography",
                "Videography",
                "Influencer Marketing",
              ],
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
