import { vehicles } from "@/data/vehicles";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
    ArrowLeft,
    Check,
    Users,
    Fuel,
    Briefcase,
    Phone,
    MessageCircle
} from "lucide-react";
import { VehicleDetailClient } from "./VehicleDetailClient";

export function generateStaticParams() {
    return vehicles.map((vehicle) => ({
        slug: vehicle.slug,
    }));
}

export default async function VehicleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const vehicle = vehicles.find((v) => v.slug === slug);

    if (!vehicle) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <Button variant="ghost" className="mb-8 text-white hover:text-primary" asChild>
                    <Link href="/vehicles">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Fleet
                    </Link>
                </Button>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="relative h-[400px] lg:h-[500px] bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                            <Image
                                src={vehicle.collageImage || vehicle.detailImage || vehicle.image}
                                alt={vehicle.name}
                                fill
                                className="object-contain p-8"
                            />
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 text-center">
                                <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                                <p className="text-white font-bold">{vehicle.seats}</p>
                                <p className="text-xs text-muted-foreground">Seats</p>
                            </div>
                            <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 text-center">
                                <Fuel className="h-6 w-6 text-primary mx-auto mb-2" />
                                <p className="text-white font-bold">{vehicle.fuel}</p>
                                <p className="text-xs text-muted-foreground">Fuel</p>
                            </div>
                            <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 text-center">
                                <Briefcase className="h-6 w-6 text-primary mx-auto mb-2" />
                                <p className="text-white font-bold">{vehicle.luggage}</p>
                                <p className="text-xs text-muted-foreground">Luggage</p>
                            </div>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
                            {vehicle.type}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white font-heading mb-4">
                            {vehicle.name}
                        </h1>
                        <p className="text-2xl font-bold text-primary mb-6">{vehicle.price}</p>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            {vehicle.detailDescription}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button
                                variant="premium"
                                size="lg"
                                className="h-14 px-8 text-lg flex-1"
                                asChild
                            >
                                <Link href="tel:7800664900">
                                    <Phone className="mr-2 h-5 w-5" /> Call Now to Book
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 text-lg flex-1 border-green-500/20 text-green-500 hover:bg-green-500/10 hover:text-green-400"
                                asChild
                            >
                                <Link href="https://wa.me/917800664900">
                                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                                </Link>
                            </Button>
                        </div>

                        {/* Features */}
                        <div className="bg-zinc-900/30 p-6 rounded-2xl border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {vehicle.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Section */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-8">
                        Why Choose <span className="text-primary">{vehicle.name}</span>?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {vehicle.whyChoose?.map((reason, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 bg-zinc-900/30 p-4 rounded-xl border border-white/5"
                            >
                                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-gray-300">{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pricing Section */}
                {vehicle.pricing && (
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-8">
                            Pricing <span className="text-primary">Details</span>
                        </h2>
                        <div className="bg-zinc-900/30 p-8 rounded-3xl border border-white/5">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {vehicle.pricing.airportPickup && (
                                    <div className="bg-black/30 p-4 rounded-xl">
                                        <p className="text-sm text-muted-foreground mb-1">Airport Pickup/Drop</p>
                                        <p className="text-2xl font-bold text-white">{vehicle.pricing.airportPickup}</p>
                                    </div>
                                )}
                                {vehicle.pricing.localTour8h && (
                                    <div className="bg-black/30 p-4 rounded-xl">
                                        <p className="text-sm text-muted-foreground mb-1">Local Tour (8h/80km)</p>
                                        <p className="text-2xl font-bold text-white">{vehicle.pricing.localTour8h}</p>
                                    </div>
                                )}
                                {vehicle.pricing.fullDayTour && (
                                    <div className="bg-black/30 p-4 rounded-xl">
                                        <p className="text-sm text-muted-foreground mb-1">Full Day (12h/120km)</p>
                                        <p className="text-2xl font-bold text-white">{vehicle.pricing.fullDayTour}</p>
                                    </div>
                                )}
                                {vehicle.pricing.outstationPerKm && (
                                    <div className="bg-black/30 p-4 rounded-xl">
                                        <p className="text-sm text-muted-foreground mb-1">Outstation</p>
                                        <p className="text-2xl font-bold text-white">{vehicle.pricing.outstationPerKm}</p>
                                    </div>
                                )}
                                {vehicle.pricing.driverAllowance && (
                                    <div className="bg-black/30 p-4 rounded-xl">
                                        <p className="text-sm text-muted-foreground mb-1">Driver Allowance</p>
                                        <p className="text-2xl font-bold text-white">{vehicle.pricing.driverAllowance}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Booking Form */}
                <VehicleDetailClient vehicleName={vehicle.name} vehicleSlug={vehicle.slug} />
            </div>
        </div>
    );
}
