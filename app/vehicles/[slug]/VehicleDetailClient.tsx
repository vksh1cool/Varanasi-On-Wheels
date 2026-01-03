"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";

interface VehicleDetailClientProps {
    vehicleName: string;
    vehicleSlug: string;
}

export function VehicleDetailClient({ vehicleName, vehicleSlug }: VehicleDetailClientProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
        >
            <div className="bg-zinc-900/30 p-8 md:p-12 rounded-3xl border border-white/5">
                <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-2 text-center">
                    Book Your <span className="text-primary">{vehicleName}</span>
                </h2>
                <p className="text-muted-foreground text-center mb-8">
                    Fill out the form below and we'll get back to you within 24 hours
                </p>

                <form action="https://formsubmit.co/varanasionwheels5@gmail.com" method="POST" className="space-y-6">
                    {/* Honeypot and configuration */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={`https://varanasionwheels.com/vehicles/${vehicleSlug}`} />
                    <input type="hidden" name="_subject" value={`New Booking Request for ${vehicleName}`} />
                    <input type="hidden" name="vehicle" value={vehicleName} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Phone Number *</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                placeholder="+91 9876543210"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Pickup Location *</label>
                            <input
                                type="text"
                                name="pickupLocation"
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                placeholder="e.g. Varanasi Airport"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-muted-foreground">Drop Location</label>
                            <input
                                type="text"
                                name="dropLocation"
                                className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                placeholder="e.g. Ayodhya"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">Pickup Date *</label>
                        <input
                            type="date"
                            name="pickupDate"
                            required
                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-muted-foreground">Additional Requirements</label>
                        <textarea
                            name="message"
                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-primary/50 transition-colors h-32 resize-none"
                            placeholder="Any special requests or questions..."
                        />
                    </div>

                    <Button
                        type="submit"
                        variant="premium"
                        className="w-full h-14 text-lg font-bold"
                    >
                        <Mail className="mr-2 h-5 w-5" /> Submit Booking Request
                    </Button>
                </form>
            </div>
        </motion.div>
    );
}
