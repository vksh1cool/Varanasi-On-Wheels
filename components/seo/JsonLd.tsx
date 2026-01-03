export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "Varanasi On Wheels",
        "image": "https://varanasionwheels.com/assets/varansi-on-wheel-transparent.webp",
        "description": "Premium cab service in Varanasi offering airport transfers, outstation cabs, and city tours. Reliable and affordable taxi booking.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Varanasi",
            "addressRegion": "Uttar Pradesh",
            "addressCountry": "IN"
        },
        "telephone": "+917800664900",
        "email": "varanasionwheels5@gmail.com",
        "url": "https://varanasionwheels.com",
        "priceRange": "₹₹",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Varanasi"
            },
            {
                "@type": "City",
                "name": "Ayodhya"
            },
            {
                "@type": "City",
                "name": "Prayagraj"
            },
            {
                "@type": "City",
                "name": "Gaya"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
