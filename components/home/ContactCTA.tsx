"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ContactCTA() {
    return (
        <section className="py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-gradient-to-r from-zinc-900 to-black border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
                    {/* Decorative */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-3xl mx-auto space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white font-heading">
                            Ready to Start Your <span className="text-primary">Journey?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Book your ride today and experience the best of Varanasi with Varanasi On Wheels.
                            24/7 Support | Transparent Pricing | Expert Drivers
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button variant="premium" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto" asChild>
                                <Link href="tel:7800664900" className="flex items-center justify-center">
                                    <Phone className="mr-2 h-5 w-5" /> Call Now
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto border-green-500/20 text-green-500 hover:bg-green-500/10 hover:text-green-400" asChild>
                                <Link href="https://wa.me/917800664900" className="flex items-center justify-center">
                                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
