import { Metadata } from "next";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";

export const metadata: Metadata = {
    title: "Tempo Traveller & Cab Rental Rates in Varanasi 2025 | Varanasi On Wheels",
    description: "Transparent cab rental rates in Varanasi. Tempo Traveller ₹24-34/km, Innova ₹18/km, Swift Dzire ₹12/km. Best prices for airport pickup, local tours, Ayodhya, Prayagraj & outstation trips.",
    keywords: [
        "tempo traveller price in Varanasi",
        "Varanasi cab rates",
        "taxi fare Varanasi",
        "12 seater tempo traveller rent",
        "17 seater tempo traveller price",
        "Innova rental Varanasi",
        "car rental rates Varanasi",
        "outstation cab fare Varanasi",
        "Varanasi airport taxi rates",
        "Varanasi to Ayodhya cab fare",
        "Varanasi to Prayagraj taxi price",
        "maharaja tempo traveller Varanasi"
    ],
    openGraph: {
        title: "Cab Rental Rates & Pricing in Varanasi | Varanasi On Wheels",
        description: "Compare transparent cab rental rates. Tempo Traveller from ₹24/km, Innova ₹18/km, Luxury Buses from ₹56/km. No hidden charges.",
        url: "https://varanasionwheels.com/pricing",
        siteName: "Varanasi On Wheels",
        type: "website",
        locale: "en_IN",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cab Rental Rates in Varanasi | Varanasi On Wheels",
        description: "Transparent pricing for Tempo Traveller, Innova, Swift Dzire & Luxury Buses in Varanasi.",
    },
    alternates: {
        canonical: "https://varanasionwheels.com/pricing",
    },
};

export default function PricingPage() {
    // Top picks for quick comparison
    const topPicks = [
        { name: "Tempo Traveller", seats: "12-26", perKm: "24-32", airport: "2,500", local4hr: "5,000", local8hr: "5,000", outstation: "24-32" },
        { name: "Maharaja Tempo", seats: "9-12", perKm: "34", airport: "3,300", local4hr: "6,000", local8hr: "6,000", outstation: "34" },
        { name: "Innova Crysta", seats: "6", perKm: "18", airport: "1,350", local4hr: "2,400", local8hr: "2,400", outstation: "18" },
        { name: "Urbania", seats: "17", perKm: "35", airport: "3,500", local4hr: "6,200", local8hr: "6,200", outstation: "35" },
        { name: "Swift Dzire", seats: "4", perKm: "12", airport: "850", local4hr: "1,800", local8hr: "1,800", outstation: "12" },
    ];

    // JSON-LD structured data for pricing
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "PriceSpecification",
        "name": "Varanasi On Wheels - Cab Rental Pricing",
        "description": "Transparent cab rental rates in Varanasi for Tempo Traveller, Innova, Swift Dzire and Luxury Buses",
        "url": "https://varanasionwheels.com/pricing",
        "priceCurrency": "INR",
        "offers": vehicles.map(vehicle => ({
            "@type": "Offer",
            "name": `${vehicle.name} Rental in Varanasi`,
            "description": vehicle.description,
            "price": vehicle.pricing.outstationPerKm.replace(/[^0-9]/g, ''),
            "priceCurrency": "INR",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": vehicle.pricing.outstationPerKm.replace(/[^0-9]/g, ''),
                "priceCurrency": "INR",
                "unitText": "per kilometer"
            },
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "LocalBusiness",
                "name": "Varanasi On Wheels",
                "telephone": "+91-7800664900"
            }
        }))
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the tempo traveller rental price in Varanasi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tempo Traveller rental in Varanasi starts from ₹24/km for 12-seater, ₹25/km for 17-seater, ₹27/km for 20-seater, and ₹32/km for 26-seater. Maharaja Tempo Traveller is available at ₹34/km."
                }
            },
            {
                "@type": "Question",
                "name": "What is included in the cab rental price?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All rates include driver charges and fuel costs. Toll taxes, parking charges, state permits, and GST (5%) are extra."
                }
            },
            {
                "@type": "Question",
                "name": "What is the minimum km for outstation trips?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For outstation trips, minimum 250 km per day is chargeable. Driver allowance ranges from ₹250-700/day depending on vehicle type."
                }
            },
            {
                "@type": "Question",
                "name": "What is the Innova Crysta rental price in Varanasi?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Innova Crysta rental in Varanasi is ₹18/km for outstation trips, ₹1,350 for airport pickup, and ₹2,400 for local 8hr/80km tours."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <div className="min-h-screen bg-black pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Car Rental <span className="text-yellow-500">Rates</span> in Varanasi
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Transparent pricing with no hidden charges. Choose from our wide range of vehicles for airport transfers, local tours, and outstation trips.
                    </p>
                </div>

                {/* Top 5 Quick Comparison */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">
                        TOP 5 CAB OPTIONS FOR HIRE IN VARANASI
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr>
                                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Choose a Taxi</th>
                                    {topPicks.map((pick) => (
                                        <th key={pick.name} className="py-4 px-4 bg-yellow-500 text-black font-bold text-center">
                                            <div className="text-sm">{pick.name}</div>
                                            <div className="text-3xl font-bold">₹{pick.perKm}</div>
                                            <div className="text-xs">per KM</div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-zinc-900">
                                <tr className="border-b border-zinc-800">
                                    <td className="py-3 px-4 text-gray-400">Seating Capacity</td>
                                    {topPicks.map((pick) => (
                                        <td key={pick.name} className="py-3 px-4 text-white text-center">
                                            for {pick.seats} Passengers
                                        </td>
                                    ))}
                                </tr>
                                <tr className="border-b border-zinc-800">
                                    <td className="py-3 px-4 text-gray-400">Airport pickup/drop (₹)</td>
                                    {topPicks.map((pick) => (
                                        <td key={pick.name} className="py-3 px-4 text-white text-center">
                                            ₹{pick.airport}
                                        </td>
                                    ))}
                                </tr>
                                <tr className="border-b border-zinc-800">
                                    <td className="py-3 px-4 text-gray-400">Varanasi Local 8hr/80km</td>
                                    {topPicks.map((pick) => (
                                        <td key={pick.name} className="py-3 px-4 text-white text-center">
                                            ₹{pick.local8hr}
                                        </td>
                                    ))}
                                </tr>
                                <tr className="border-b border-zinc-800">
                                    <td className="py-3 px-4 text-gray-400">Outstations</td>
                                    {topPicks.map((pick) => (
                                        <td key={pick.name} className="py-3 px-4 text-white text-center">
                                            ₹{pick.outstation}/km
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td className="py-4 px-4"></td>
                                    {topPicks.map((pick) => (
                                        <td key={pick.name} className="py-4 px-4 text-center">
                                            <Link
                                                href="https://wa.me/917800664900"
                                                target="_blank"
                                                className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded transition-colors"
                                            >
                                                Book
                                            </Link>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Full Fare List */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">
                        FARE LIST - VARANASI LOCAL AND OUTSTATION CAB SERVICE
                    </h2>
                    <p className="text-center text-gray-400 mb-6">← Scroll (L to R) For More Rates →</p>
                    
                    <div className="overflow-x-auto rounded-lg border border-zinc-800">
                        <table className="w-full min-w-[900px]">
                            <thead>
                                <tr className="bg-zinc-800">
                                    <th className="py-4 px-4 text-left text-white font-semibold">Car Type</th>
                                    <th className="py-4 px-4 text-center text-white font-semibold">Seating Capacity</th>
                                    <th className="py-4 px-4 text-center text-white font-semibold">Airport pickup/drop (₹)</th>
                                    <th className="py-4 px-4 text-center text-white font-semibold">
                                        <div>Varanasi Local</div>
                                        <div className="text-xs text-gray-400">8hr/80Kms (₹)</div>
                                    </th>
                                    <th className="py-4 px-4 text-center text-white font-semibold">
                                        <div>Full Day Tour</div>
                                        <div className="text-xs text-gray-400">12hr/200Kms (₹)</div>
                                    </th>
                                    <th className="py-4 px-4 text-center text-white font-semibold">
                                        <div>Outstations</div>
                                        <div className="text-xs text-gray-400">(min 250km/day)</div>
                                    </th>
                                    <th className="py-4 px-4 text-center text-white font-semibold">Driver Allowance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vehicles.map((vehicle, index) => (
                                    <tr 
                                        key={vehicle.id} 
                                        className={`border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors ${index % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-900/50'}`}
                                    >
                                        <td className="py-4 px-4">
                                            <Link href={`/vehicles/${vehicle.slug}`} className="text-yellow-500 hover:text-yellow-400 font-medium">
                                                {vehicle.name}
                                            </Link>
                                        </td>
                                        <td className="py-4 px-4 text-center text-white">{vehicle.seats}</td>
                                        <td className="py-4 px-4 text-center text-white">{vehicle.pricing.airportPickup}</td>
                                        <td className="py-4 px-4 text-center text-white">
                                            {vehicle.pricing.localTour8h.split(' ')[0]}
                                        </td>
                                        <td className="py-4 px-4 text-center text-white">
                                            {vehicle.pricing.fullDayTour.split(' ')[0]}
                                        </td>
                                        <td className="py-4 px-4 text-center text-yellow-500 font-semibold">
                                            {vehicle.pricing.outstationPerKm.split(' ')[0]}
                                        </td>
                                        <td className="py-4 px-4 text-center text-white">{vehicle.pricing.driverAllowance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Important Information */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6">IMPORTANT INFORMATION</h2>
                    <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-500 mt-1">•</span>
                                <span>All rates are inclusive of driver charges and fuel costs.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-500 mt-1">•</span>
                                <span>Toll taxes, parking charges, and state permits are extra and to be paid directly.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-500 mt-1">•</span>
                                <span>For outstation trips, minimum 250 km per day is chargeable.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-500 mt-1">•</span>
                                <span>Driver allowance is applicable for outstation trips only.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-500 mt-1">•</span>
                                <span>Night charges (10 PM - 6 AM): ₹250-500 depending on vehicle type.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-500 mt-1">•</span>
                                <span>GST (5%) applicable on all bookings.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-500 mt-1">•</span>
                                <span>Prices may vary during peak seasons and festivals.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center">
                    <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-8 border border-yellow-500/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Need a Custom Quote?</h2>
                        <p className="text-gray-400 mb-6">
                            Contact us for special packages, multi-day tours, or group bookings.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="https://wa.me/917800664900"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                WhatsApp Us
                            </Link>
                            <Link
                                href="tel:+917800664900"
                                className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-lg transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call: 7800664900
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        </>
    );
}
