"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { tours } from "@/data/tours";
import { Clock, MapPin, Phone } from "lucide-react";

export default function ToursPage() {
    // JSON-LD for tours
    const toursJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Pilgrimage and Sightseeing Tours from Varanasi",
        "description": "Curated pilgrimage tours from Varanasi to Ayodhya, Prayagraj, Gaya, and local Kashi darshan packages",
        "url": "https://varanasionwheels.com/tours",
        "numberOfItems": tours.length,
        "itemListElement": tours.map((tour, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "TouristTrip",
                "name": tour.title,
                "description": tour.description,
                "touristType": "Pilgrimage",
                "offers": {
                    "@type": "Offer",
                    "price": tour.price.replace(/[^0-9]/g, ''),
                    "priceCurrency": "INR"
                },
                "provider": {
                    "@type": "LocalBusiness",
                    "name": "Varanasi On Wheels",
                    "telephone": "+91-7800664900"
                }
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(toursJsonLd) }}
            />
            {/* Hidden LLM-friendly content */}
            <div className="sr-only" aria-hidden="true">
                <h1>Pilgrimage Tours from Varanasi - Varanasi On Wheels</h1>
                <p>Book curated pilgrimage and sightseeing tours from Varanasi. We offer packages to Ayodhya, Prayagraj, Gaya, Bodhgaya, and local Kashi darshan.</p>
                
                <h2>Popular Pilgrimage Tours</h2>
                <ul>
                    <li>Kashi Vishwanath Temple Darshan - Visit the sacred Jyotirlinga</li>
                    <li>Varanasi Ghat Tour - Dashashwamedh, Manikarnika, Assi Ghat</li>
                    <li>Ganga Aarti Experience - Evening aarti at Dashashwamedh Ghat</li>
                    <li>Sarnath Day Trip - Buddhist pilgrimage site</li>
                    <li>Varanasi to Ayodhya Tour - Ram Janmabhoomi darshan</li>
                    <li>Varanasi to Prayagraj - Triveni Sangam pilgrimage</li>
                    <li>Varanasi to Gaya - Pind daan and Vishnupad Temple</li>
                </ul>
                
                <h2>Why Book Tours with Us?</h2>
                <ul>
                    <li>Experienced drivers who know all pilgrimage sites</li>
                    <li>Comfortable AC vehicles</li>
                    <li>Flexible timing based on your schedule</li>
                    <li>Transparent pricing with no hidden charges</li>
                </ul>
                
                <p>Book your pilgrimage tour: +91 7800664900</p>
            </div>
            <div className="bg-black min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white font-heading mb-6"
                    >
                        Spiritual <span className="text-primary">Journeys</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto font-light"
                    >
                        Curated pilgrimage and sightseeing tours designed for your peace of mind.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col"
                        >
                            {/* Tour Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                                
                                {/* Price Badge */}
                                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <span className="text-white font-bold text-sm">{tour.price}</span>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="bg-white/5 px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                                        <Clock className="h-3 w-3 text-primary" />
                                        <span className="text-xs text-gray-300">{tour.duration}</span>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-bold text-white font-heading mb-4 group-hover:text-primary transition-colors">
                                    {tour.title}
                                </h2>
                                
                                <p className="text-muted-foreground mb-6 flex-1">
                                    {tour.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-primary" />
                                        Tour Highlights
                                    </h3>
                                    <ul className="grid grid-cols-1 gap-2">
                                        {tour.highlights.slice(0, 4).map((highlight, idx) => (
                                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Contact Now Button */}
                                <Button 
                                    variant="premium" 
                                    className="w-full group-hover:scale-105 transition-transform" 
                                    asChild
                                >
                                    <Link href="/contact" className="flex items-center justify-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        Contact Now
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4">
                        Ready to Start Your Spiritual Journey?
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Contact us today to customize your perfect pilgrimage tour. Our experienced team will help you plan an unforgettable spiritual experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="premium" size="lg" asChild>
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white hover:text-black" asChild>
                            <Link href="tel:7800664900">Call: 7800664900</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    );
}
