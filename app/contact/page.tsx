"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    // JSON-LD for contact page
    const contactJsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Varanasi On Wheels",
        "description": "Contact Varanasi On Wheels for tempo traveller and cab booking in Varanasi. Available 24/7 for pilgrimage tours, airport transfers, and outstation trips.",
        "url": "https://varanasionwheels.com/contact",
        "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Varanasi On Wheels",
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
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7800664900",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi"],
                "areaServed": "IN"
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
            />
            {/* Hidden LLM-friendly content */}
            <div className="sr-only" aria-hidden="true">
                <h1>Contact Varanasi On Wheels - Book Tempo Traveller and Cab in Varanasi</h1>
                <p>Contact us 24/7 for tempo traveller booking, cab rental, airport pickup, and pilgrimage tours in Varanasi.</p>
                <h2>How to Book</h2>
                <ul>
                    <li>WhatsApp (Fastest): +91 7800664900</li>
                    <li>Phone Call: +91 7800664900</li>
                    <li>Email: varanasionwheels5@gmail.com</li>
                </ul>
                <h2>Office Address</h2>
                <p>Shop 1, Mint House, Nadesar Cantt, Varanasi, Uttar Pradesh 221002, India</p>
                <h2>Service Hours</h2>
                <p>Open 24 hours, 7 days a week. We provide round-the-clock service for airport pickups and emergency bookings.</p>
            </div>
            <div className="bg-black min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white font-heading mb-6"
                    >
                        Get in <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto font-light"
                    >
                        Have a question or want to book a ride? We are here to help you 24/7.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info & Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                                <Phone className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-white font-bold mb-2">Call Us</h3>
                                <p className="text-muted-foreground text-sm mb-1">Available 24/7</p>
                                <a href="tel:7800664900" className="text-white hover:text-primary transition-colors font-medium">
                                    +91 7800664900
                                </a>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                                <Mail className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-white font-bold mb-2">Email Us</h3>
                                <p className="text-muted-foreground text-sm mb-1">For queries & quotes</p>
                                <a href="mailto:varanasionwheels5@gmail.com" className="text-white hover:text-primary transition-colors font-medium">
                                    varanasionwheels5@gmail.com
                                </a>
                            </div>
                            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors md:col-span-2">
                                <MapPin className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-white font-bold mb-2">Visit Us</h3>
                                <p className="text-muted-foreground text-sm">
                                    Shop 1 mint house Nadesar cantt, Varanasi, 221002
                                </p>
                            </div>
                        </div>

                        <form action="https://formsubmit.co/varanasionwheels5@gmail.com" method="POST" className="space-y-6 bg-zinc-900/30 p-8 rounded-3xl border border-white/5">
                            {/* Honeypot to prevent spam */}
                            <input type="text" name="_honey" style={{ display: 'none' }} />
                            {/* Disable Captcha */}
                            <input type="hidden" name="_captcha" value="false" />
                            {/* Success Page */}
                            <input type="hidden" name="_next" value="https://varanasionwheels.com/contact" />

                            <h3 className="text-2xl font-bold text-white font-heading mb-6">Send a Message</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-muted-foreground">Name</label>
                                    <input type="text" name="name" required className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-muted-foreground">Phone</label>
                                    <input type="tel" name="phone" required className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="+91 9876543210" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-muted-foreground">Email</label>
                                <input type="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-muted-foreground">Message</label>
                                <textarea name="message" required className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary/50 transition-colors h-32 resize-none" placeholder="Tell us about your travel plans..." />
                            </div>
                            <Button type="submit" variant="premium" className="w-full h-12 text-lg font-bold">
                                <Send className="mr-2 h-4 w-4" /> Send Message
                            </Button>
                        </form>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.686469468666!2d82.9833!3d25.3216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzE3LjgiTiA4MsKwNTknMDAuMCJF!5e0!3m2!1sen!2sin!4v1635764000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="absolute inset-0"
                        />
                        <div className="absolute inset-0 pointer-events-none border-4 border-white/5 rounded-3xl" />
                    </motion.div>
                </div>
            </div>
        </div>
        </>
    );
}
