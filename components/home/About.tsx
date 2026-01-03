"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function About() {
    return (
        <section className="py-20 bg-zinc-950">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10">
                            <Image
                                src="/assets/homepage-about us.jpg" // Assuming this file exists from the list
                                alt="About Varanasi On Wheels"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-primary/90 backdrop-blur-md p-6 rounded-xl inline-block">
                                    <span className="block text-4xl font-bold text-black font-heading">27+</span>
                                    <span className="text-sm font-medium text-black/80">Years of Excellence</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white font-heading">
                            Your Trusted Partner in <span className="text-primary">Kashi</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We are Varanasi on Wheels, a part of World View Travels since 1992. For over three decades,
                            we have been providing premium travel and accommodation services in the ancient city of Varanasi.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Our mission is to ensure your journey is enjoyable, reliable, and peaceful, allowing you to focus
                            on the spiritual moments that matter.
                        </p>

                        <ul className="space-y-4 pt-4">
                            {[
                                "Experienced & Professional Drivers",
                                "Clean & Sanitized Luxury Fleet",
                                "24/7 Customer Support",
                                "Transparent Pricing - No Hidden Costs"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6">
                            <Button variant="premium" size="lg">
                                Read More About Us
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
