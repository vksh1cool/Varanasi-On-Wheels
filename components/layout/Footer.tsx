import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-10 w-10">
                                <Image
                                    src="/assets/varansi-on-wheel-transparent.webp"
                                    alt="Varanasi On Wheels"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-white font-heading">
                                Varanasi<span className="text-primary">OnWheels</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Your trusted partner for premium cab services in Varanasi.
                            Experience the spiritual capital of India with comfort, safety, and reliability.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading">Quick Links</h3>
                        <ul className="space-y-3">
                            {["Home", "Vehicles", "Tours", "Blog", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading">Our Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/vehicles"
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Airport Transfers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tours"
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    City Tours
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/vehicles"
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Outstation Cabs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/vehicles"
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Tempo Traveller
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/vehicles#buses"
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Luxury Bus Rental
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground text-sm">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>Varanasi, Uttar Pradesh, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground text-sm">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <a href="tel:7800664900" className="hover:text-white">7800664900</a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground text-sm">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:varanasionwheels5@gmail.com" className="hover:text-white">varanasionwheels5@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-muted-foreground text-sm text-center md:text-left">
                        <p>© {new Date().getFullYear()} Varanasi On Wheels. All rights reserved.</p>
                        <p className="mt-1">
                            Designed & Managed by{" "}
                            <a
                                href="https://launchpixel.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-white transition-colors"
                            >
                                LaunchPixel
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.instagram.com/varanasionwheels/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
                            aria-label="Follow us on Instagram"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
