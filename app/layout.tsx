import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FloatingContactButtons } from "@/components/ui/FloatingContactButtons";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://varanasionwheels.com"),
  title: "Varanasi On Wheels | Premium Cab Service in Varanasi",
  description: "Book affordable and premium outstation cabs in Varanasi. Best taxi service for Ayodhya, Prayagraj, and local sightseeing.",
  keywords: ["Varanasi cab service", "best cabs in Varanasi", "Varanasi airport pickup", "Varanasi taxi booking", "outstation cabs Varanasi"],
  verification: {
    google: "ZvzXoQxY9XEz-_TIbftnUOgwhfT--hz_PMqQO3ECatA",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.ico" },
    ],
  },
  openGraph: {
    title: "Varanasi On Wheels | Premium Cab Service",
    description: "Reliable and luxury taxi service in Varanasi. Book now for airport transfers and outstation trips.",
    url: "https://varanasionwheels.com",
    siteName: "Varanasi On Wheels",
    images: [
      {
        url: "/assets/varansi-on-wheel-transparent.webp",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJTD3G4K');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* 
          Google Analytics is managed through Google Tag Manager (GTM-PJTD3G4K)
          To configure GA in GTM:
          1. Go to tagmanager.google.com
          2. Add a new tag: Google Analytics: GA4 Configuration
          3. Enter Measurement ID: G-GQGSX6LPC3
          4. Trigger: All Pages
          5. Publish the container
        */}
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PJTD3G4K"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <SmoothScroll>
          <CustomCursor />
          <JsonLd />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingContactButtons />
        </SmoothScroll>
      </body>
    </html>
  );
}
