"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { useRef } from "react";

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Parallax Video Background */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Lighter overlay for V2 */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-105" // Slight scale to prevent edge gaps
                >
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Content */}
            <div className="container relative z-20 px-4 text-center">
                <div className="max-w-5xl mx-auto space-y-8">
                    <div className="overflow-hidden">
                        <TextReveal
                            text="Experience Varanasi"
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-heading tracking-tight leading-tight mb-4"
                        />
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 font-heading tracking-tight leading-tight block mt-2"
                        >
                            With Premium Comfort
                        </motion.div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mix-blend-difference"
                    >
                        Your trusted partner for airport transfers, outstation cabs, and spiritual tours.
                        Journey through Kashi with safety, reliability, and luxury.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
                    >
                        <Button variant="premium" size="lg" className="h-16 px-10 text-xl rounded-full w-full sm:w-auto hover:scale-105 transition-transform duration-300" asChild>
                            <Link href="tel:7800664900" className="flex items-center justify-center">
                                <Phone className="mr-3 h-6 w-6" /> Book Your Ride
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-16 px-10 text-xl rounded-full w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 backdrop-blur-sm" asChild>
                            <Link href="/vehicles">
                                View Fleet
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="p-4 rounded-full border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-colors"
                >
                    <ChevronDown className="h-6 w-6 text-white" />
                </motion.div>
            </motion.div>
        </section>
    );
}
