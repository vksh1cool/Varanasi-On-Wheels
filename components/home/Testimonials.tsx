"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Rahul Sharma",
        location: "Mumbai",
        rating: 5,
        text: "The service was absolutely impeccable. The Innova Crysta was spotless, and our driver was extremely knowledgeable about Varanasi's history.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Sarah Jenkins",
        location: "UK",
        rating: 5,
        text: "Booking with Varanasi On Wheels was the best decision for our trip. Safe, reliable, and very professional. Highly recommended!",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Amit Patel",
        location: "Gujarat",
        rating: 5,
        text: "We hired a Tempo Traveller for our family pilgrimage. The vehicle was brand new and very comfortable. Great experience!",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Priya Singh",
        location: "Delhi",
        rating: 5,
        text: "Excellent airport transfer service. The driver was waiting for us even though our flight was delayed. Very courteous staff.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Michael Brown",
        location: "USA",
        rating: 5,
        text: "Fantastic experience! The Urbania was luxurious and perfect for our group of 15. Driver was punctual and drove safely.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Anjali Desai",
        location: "Bangalore",
        rating: 5,
        text: "Booked a 45-seater bus for our corporate outing. Everything was top-notch from booking to the journey. Will definitely use again!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "David Wilson",
        location: "Australia",
        rating: 5,
        text: "The Buddhist circuit tour was amazing. Our driver was knowledgeable and the Innova Crysta was very comfortable for the long journey.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Kavita Reddy",
        location: "Hyderabad",
        rating: 5,
        text: "Perfect service for our wedding guests. Hired 3 Tempo Travellers and they were all clean, on time, and drivers were very professional.",
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Robert Taylor",
        location: "Canada",
        rating: 5,
        text: "Best travel experience in India! The Maharaja Tempo was luxurious beyond expectations. Felt like royalty throughout our pilgrimage.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Neha Kapoor",
        location: "Jaipur",
        rating: 5,
        text: "Hired a 26-seater for our college trip. The vehicle was spacious, AC was great, and the pricing was very reasonable. Highly recommended!",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "James Anderson",
        location: "Singapore",
        rating: 5,
        text: "Exceptional service! The driver shared interesting facts about Varanasi during the tour. Very clean vehicle and smooth ride.",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=faces"
    },
    {
        name: "Sunita Mishra",
        location: "Lucknow",
        rating: 5,
        text: "Used their service for Ramayana circuit tour. Everything was well organized. Driver was helpful and vehicle was in excellent condition.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces"
    }
];

export function Testimonials() {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 mb-20 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white font-heading mb-6"
                >
                    Client <span className="text-primary">Stories</span>
                </motion.h2>
                <p className="text-xl text-muted-foreground font-light">Trusted by thousands of travelers worldwide.</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-8 py-10">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[400px] bg-zinc-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-zinc-800/50 hover:border-primary/30 transition-all duration-300 shrink-0 whitespace-normal hover:scale-105"
                        >
                            <Quote className="h-8 w-8 text-primary/20 mb-6" />
                            <p className="text-gray-300 mb-8 leading-relaxed text-lg">"{testimonial.text}"</p>

                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold font-heading">{testimonial.name}</h4>
                                    <p className="text-sm text-primary">{testimonial.location}</p>
                                </div>
                                <div className="ml-auto flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        </section>
    );
}
