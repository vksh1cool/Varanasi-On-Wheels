"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Fuel, Users, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";

import { vehicles } from "@/data/vehicles";

export function Fleet() {
    const router = useRouter();
    const displayFleet = vehicles.slice(0, 8);

    return (
        <section className="py-32 bg-zinc-950 relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-white font-heading mb-6"
                        >
                            Our Premier <span className="text-primary">Fleet</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground font-light"
                        >
                            Meticulously maintained vehicles for every journey. From solo trips to large group pilgrimages.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayFleet.map((vehicle, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer"
                            onClick={() => router.push(`/vehicles/${vehicle.slug}`)}
                        >
                            <div className="relative h-64 w-full bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Image
                                    src={vehicle.image}
                                    alt={vehicle.name}
                                    fill
                                    priority={index < 4}
                                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700 z-10"
                                />
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white font-heading mb-1">{vehicle.name}</h3>
                                        <span className="text-sm text-primary font-medium tracking-wide">{vehicle.type}</span>
                                    </div>
                                    <div className="text-right bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                                        <p className="text-white font-bold">{vehicle.price}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mb-8 border-y border-white/5 py-4">
                                    <div className="text-center">
                                        <Users className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
                                        <span className="text-xs text-gray-400">{vehicle.seats}</span>
                                    </div>
                                    <div className="text-center border-x border-white/5">
                                        <Fuel className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
                                        <span className="text-xs text-gray-400">{vehicle.fuel}</span>
                                    </div>
                                    <div className="text-center">
                                        <Briefcase className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
                                        <span className="text-xs text-gray-400">{vehicle.luggage}</span>
                                    </div>
                                </div>

                                <Button
                                    variant="premium"
                                    className="w-full rounded-xl h-12 font-bold"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        router.push(`/vehicles/${vehicle.slug}`);
                                    }}
                                >
                                    View Details
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Button variant="outline" size="lg" className="rounded-full px-8 border-white/20 text-white hover:bg-white hover:text-black" asChild>
                        <Link href="/vehicles" className="flex items-center justify-center">
                            View All Vehicles <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
