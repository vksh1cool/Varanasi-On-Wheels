import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export function generateStaticParams() {
    return blogs.map((post) => ({
        slug: post.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogs.find((p) => p.id === slug);

    if (!post) {
        return {
            title: "Blog Post Not Found | Varanasi On Wheels",
        };
    }

    return {
        title: `${post.title} | Varanasi On Wheels Blog`,
        description: post.excerpt,
        keywords: [
            "Varanasi travel guide",
            "tempo traveller Varanasi",
            "cab service Varanasi",
            "pilgrimage tour Varanasi",
            "Varanasi On Wheels",
            post.title.toLowerCase()
        ],
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            siteName: "Varanasi On Wheels",
            url: `https://varanasionwheels.com/blog/${post.id}`,
            images: [
                {
                    url: post.image.startsWith('/') ? `https://varanasionwheels.com${post.image}` : post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
        alternates: {
            canonical: `https://varanasionwheels.com/blog/${post.id}`,
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogs.find((p) => p.id === slug);

    if (!post) {
        notFound();
    }

    // JSON-LD for blog post
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image.startsWith('/') ? `https://varanasionwheels.com${post.image}` : post.image,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": {
            "@type": "Organization",
            "name": post.author,
            "url": "https://varanasionwheels.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Varanasi On Wheels",
            "url": "https://varanasionwheels.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://varanasionwheels.com/assets/varansi-on-wheel-transparent.webp"
            },
            "telephone": "+91-7800664900",
            "email": "varanasionwheels5@gmail.com"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://varanasionwheels.com/blog/${post.id}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <article className="min-h-screen bg-black pt-24 pb-20">
            <div className="container mx-auto px-4">
                <Button variant="ghost" className="mb-8 text-white hover:text-primary" asChild>
                    <Link href="/blog">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                    </Link>
                </Button>

                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white font-heading mb-6">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-muted-foreground mb-8">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                    </div>

                    {/* Featured Image */}
                    <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                    
                    {/* CTA Section */}
                    <div className="mt-12 p-8 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl border border-yellow-500/20">
                        <h3 className="text-2xl font-bold text-white mb-4">Book Your Varanasi Trip Today</h3>
                        <p className="text-gray-400 mb-6">
                            Need a tempo traveller, cab, or luxury bus for your Varanasi pilgrimage? Varanasi On Wheels offers 24/7 service with transparent pricing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="https://wa.me/917800664900"
                                target="_blank"
                                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                                WhatsApp: 7800664900
                            </Link>
                            <Link
                                href="/vehicles"
                                className="inline-flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                                View Our Fleet
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        </>
    );
}
