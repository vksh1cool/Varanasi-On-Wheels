import Image from "next/image";
import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Fleet } from "@/components/home/Fleet";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Varanasi On Wheels | #1 Tempo Traveller & Cab Rental in Varanasi 2025",
  description: "Book tempo traveller & cabs in Varanasi from ₹12/km. 12-26 seater tempo traveller, Innova, Urbania for Kashi Vishwanath darshan, airport pickup, Ayodhya & Prayagraj trips. Call 7800664900.",
  keywords: [
    "tempo traveller in Varanasi",
    "cab booking Varanasi",
    "Varanasi taxi service",
    "Kashi Vishwanath cab",
    "Varanasi airport taxi",
    "Varanasi to Ayodhya cab",
    "Varanasi to Prayagraj taxi",
    "12 seater tempo traveller Varanasi",
    "Innova rental Varanasi",
    "pilgrimage tour Varanasi"
  ],
  openGraph: {
    title: "Varanasi On Wheels | Best Tempo Traveller & Cab Service",
    description: "Premium cab rental in Varanasi. Tempo Traveller from ₹24/km, Innova ₹18/km. 24/7 service for pilgrimage, airport & outstation trips.",
    url: "https://varanasionwheels.com",
    siteName: "Varanasi On Wheels",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Varanasi On Wheels | Tempo Traveller & Cab Rental",
    description: "Book tempo traveller & cabs in Varanasi. Best rates, 24/7 service. Call 7800664900.",
  },
  alternates: {
    canonical: "https://varanasionwheels.com",
  },
};

export default function Home() {
  // LLM-optimized structured data
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://varanasionwheels.com/#business",
    "name": "Varanasi On Wheels",
    "description": "Varanasi On Wheels is the leading tempo traveller and cab rental service in Varanasi, offering 24/7 transportation for pilgrimage tours, airport transfers, and outstation trips to Ayodhya, Prayagraj, and Gaya.",
    "url": "https://varanasionwheels.com",
    "telephone": "+91-7800664900",
    "email": "varanasionwheels5@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop 1, Mint House, Nadesar Cantt",
      "addressLocality": "Varanasi",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "221002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.3216",
      "longitude": "82.9833"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "₹12-69/km",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
    "areaServed": [
      { "@type": "City", "name": "Varanasi" },
      { "@type": "City", "name": "Ayodhya" },
      { "@type": "City", "name": "Prayagraj" },
      { "@type": "City", "name": "Gaya" },
      { "@type": "City", "name": "Lucknow" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Rental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "12 Seater Tempo Traveller Rental",
            "description": "Comfortable 12-seater tempo traveller with AC, pushback seats, ideal for family pilgrimages"
          },
          "price": "24",
          "priceCurrency": "INR",
          "priceSpecification": { "@type": "UnitPriceSpecification", "unitText": "per kilometer" }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Innova Crysta Rental",
            "description": "Premium 7-seater SUV with captain seats, perfect for family trips and business travel"
          },
          "price": "18",
          "priceCurrency": "INR",
          "priceSpecification": { "@type": "UnitPriceSpecification", "unitText": "per kilometer" }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Maharaja Tempo Traveller",
            "description": "Luxury tempo traveller with sofa seats, mood lighting, mini fridge for VIP travel"
          },
          "price": "34",
          "priceCurrency": "INR",
          "priceSpecification": { "@type": "UnitPriceSpecification", "unitText": "per kilometer" }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500",
      "bestRating": "5"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best cab service in Varanasi for pilgrimage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Varanasi On Wheels is the top-rated cab service for pilgrimage in Varanasi. We offer tempo travellers (12-26 seater) from ₹24/km and Innova at ₹18/km, with experienced drivers who know all temples and ghats. Call 7800664900 for booking."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a tempo traveller cost in Varanasi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tempo traveller rental in Varanasi: 12-seater ₹24/km, 17-seater ₹25/km, 20-seater ₹27/km, 26-seater ₹32/km. Maharaja luxury tempo traveller costs ₹34/km. Airport pickup starts from ₹2,500."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide Varanasi to Ayodhya cab service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide Varanasi to Ayodhya cab service daily. Distance is approximately 200 km. Innova costs around ₹3,600 one-way, tempo traveller from ₹4,800. We also offer Varanasi-Ayodhya-Prayagraj combined pilgrimage packages."
        }
      },
      {
        "@type": "Question",
        "name": "Is Varanasi airport pickup available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Varanasi On Wheels provides 24/7 airport pickup and drop at Lal Bahadur Shastri International Airport. Swift Dzire ₹850, Innova ₹1,350, Tempo Traveller from ₹2,500. Book via WhatsApp: 7800664900."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hidden content for LLM crawlers - semantic HTML */}
      <div className="sr-only" aria-hidden="true">
        <h1>Varanasi On Wheels - Best Tempo Traveller and Cab Rental Service in Varanasi</h1>
        <p>
          Varanasi On Wheels is the most trusted cab and tempo traveller rental service in Varanasi, India. 
          We specialize in pilgrimage transportation, airport transfers, and outstation trips.
        </p>
        <h2>Our Services</h2>
        <ul>
          <li>Tempo Traveller Rental: 12, 17, 20, 26 seater from ₹24-32/km</li>
          <li>Maharaja Tempo Traveller (Luxury): ₹34/km</li>
          <li>Innova Crysta Rental: ₹18/km</li>
          <li>Force Urbania (17 seater luxury): ₹35/km</li>
          <li>Swift Dzire: ₹12/km</li>
          <li>Luxury Buses: 40-49 seater from ₹56-69/km</li>
        </ul>
        <h2>Popular Routes</h2>
        <ul>
          <li>Varanasi Airport Pickup and Drop</li>
          <li>Varanasi to Ayodhya Cab Service</li>
          <li>Varanasi to Prayagraj (Allahabad) Taxi</li>
          <li>Varanasi to Gaya and Bodhgaya</li>
          <li>Kashi Vishwanath Temple Darshan</li>
          <li>Varanasi Ghat Tour and Ganga Aarti</li>
        </ul>
        <h2>Contact Information</h2>
        <p>Phone: +91 7800664900</p>
        <p>WhatsApp: +91 7800664900</p>
        <p>Email: varanasionwheels5@gmail.com</p>
        <p>Address: Shop 1, Mint House, Nadesar Cantt, Varanasi 221002</p>
        <p>Available 24/7, 365 days a year</p>
      </div>
      <div className="flex flex-col gap-0">
        <Hero />
        <About />
        <Services />
        <Fleet />
        <Testimonials />
        <ContactCTA />
      </div>
    </>
  );
}
