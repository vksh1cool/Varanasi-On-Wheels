import { tours } from "@/data/tours";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Check, Phone } from "lucide-react";

export function generateStaticParams() {
    return tours.map((tour) => ({
        slug: tour.id,
    }));
}

export default function TourPage({ params }: { params: { slug: string } }) {
    const tour = tours.find((t) => t.id === params.slug);

    if (!tour) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black pt-24 pb-20">
            <div className="container mx-auto px-4">
                <Button variant="ghost" className="mb-8 text-white hover:text-primary" asChild>
                    <Link href="/tours">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tours
                    </Link>
                </Button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white font-heading mb-6">
                            {tour.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="bg-zinc-900 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span className="text-white text-sm">{tour.duration}</span>
                            </div>
                            <div className="bg-zinc-900 px-4 py-2 rounded-full border border-white/10">
                                <span className="text-white text-sm font-bold">{tour.price}</span>
                            </div>
                        </div>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            {tour.description}
                        </p>

                        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 mb-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Tour Highlights</h3>
                            <ul className="space-y-4">
                                {tour.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button variant="premium" size="lg" className="w-full h-14 text-lg" asChild>
                            <Link href="tel:7800664900">
                                <Phone className="mr-2 h-5 w-5" /> Book This Tour
                            </Link>
                        </Button>
                    </div>

                    <div className="relative h-[400px] lg:h-auto bg-zinc-900 rounded-3xl overflow-hidden border border-white/5">
                        {/* Placeholder for tour image/video */}
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            Tour Visuals
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
