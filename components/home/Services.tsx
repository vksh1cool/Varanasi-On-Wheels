"use client";

import { motion } from "framer-motion";
import { Plane, Map, Car, Users, Bus, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Airport Transfers",
        description: "Reliable pickup and drop services for Varanasi Airport (LBS). Punctual and comfortable.",
        icon: Plane,
        link: "/contact"
    },
    {
        title: "City Tours",
        description: "Explore the spiritual capital with our guided city tours. Visit Ghats, Temples, and Sarnath.",
        icon: Map,
        link: "/tours"
    },
    {
        title: "Outstation Cabs",
        description: "Premium outstation taxi service for Ayodhya, Prayagraj, Gaya, and Nepal.",
        icon: Car,
        link: "/contact"
    },
    {
        title: "Tempo Traveller",
        description: "Spacious 12-26 seater Tempo Travellers for group pilgrimages and family trips.",
        icon: Users,
        link: "/vehicles"
    },
    {
        title: "Luxury Bus Rental",
        description: "40-50 seater luxury buses for weddings, school trips, and large corporate events.",
        icon: Bus,
        link: "/vehicles"
    },
    {
        title: "24/7 Support",
        description: "Round-the-clock customer support to assist you with your travel needs anytime.",
        icon: Clock,
        link: "/contact"
    },
];

export function Services() {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white font-heading mb-6 tracking-tight"
                    >
                        Our Premium <span className="text-primary">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto font-light"
                    >
                        Experience the best of Varanasi with our comprehensive range of travel services designed for your comfort.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-primary/50">
                                    <service.icon className="h-8 w-8 text-white group-hover:text-primary transition-colors duration-300" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 font-heading group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                                    {service.description}
                                </p>

                                <Link href={service.link} className="inline-flex items-center text-sm font-medium text-white group-hover:text-primary transition-colors">
                                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
