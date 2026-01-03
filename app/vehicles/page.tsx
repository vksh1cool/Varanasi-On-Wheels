"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Check, Fuel, Users, Briefcase, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

import { vehicles } from "@/data/vehicles";

export default function VehiclesPage() {
    const router = useRouter();

    return (
        <div className="bg-black min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white font-heading mb-6"
                    >
                        Our Premium <span className="text-primary">Fleet</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto font-light"
                    >
                        Choose from our wide range of meticulously maintained vehicles.
                        Whether you need a luxury sedan for business or a spacious bus for a pilgrimage, we have it all.
                    </motion.p>
                </div>

                <div className="space-y-24">
                    {vehicles.map((vehicle, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col lg:flex-row gap-12 items-center group cursor-pointer"
                            onClick={() => router.push(`/vehicles/${vehicle.slug}`)}
                        >
                            {/* Image Section */}
                            <div className={`w-full lg:w-1/2 relative h-[400px] bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    priority={index < 3}
                                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Content Section */}
                            <div className={`w-full lg:w-1/2 space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div>
                                    <div className="flex items-center gap-4 mb-2">
                                        <h2 className="text-4xl font-bold text-white font-heading">{vehicle.name}</h2>
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                                            {vehicle.type}
                                        </span>
                                    </div>
                                    <p className="text-2xl font-bold text-white mb-4">{vehicle.price}</p>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {vehicle.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10">
                                    <div className="flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl">
                                        <Users className="h-6 w-6 text-primary mb-2" />
                                        <span className="text-white font-bold">{vehicle.seats}</span>
                                        <span className="text-xs text-muted-foreground">Seats</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl">
                                        <Fuel className="h-6 w-6 text-primary mb-2" />
                                        <span className="text-white font-bold">{vehicle.fuel}</span>
                                        <span className="text-xs text-muted-foreground">Fuel</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-4 bg-zinc-900 rounded-xl">
                                        <Briefcase className="h-6 w-6 text-primary mb-2" />
                                        <span className="text-white font-bold">{vehicle.luggage}</span>
                                        <span className="text-xs text-muted-foreground">Luggage</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-white font-bold mb-4">Key Features</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {vehicle.features.map((feature, i) => (
                                            <div key={i} className="flex items-center text-muted-foreground">
                                                <Check className="h-4 w-4 text-primary mr-2 shrink-0" />
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <Button
                                        variant="premium"
                                        size="lg"
                                        className="flex-1 text-lg h-14"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            router.push(`/vehicles/${vehicle.slug}`);
                                        }}
                                    >
                                        View Details
                                    </Button>
                                    <Button variant="outline" size="lg" className="flex-1 text-lg h-14 border-white/20 text-white hover:bg-white hover:text-black" asChild>
                                        <Link href="tel:7800664900" className="flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                                            <Phone className="mr-2 h-5 w-5" />Book Now
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
