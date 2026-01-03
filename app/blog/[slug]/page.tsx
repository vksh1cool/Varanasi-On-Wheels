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
            title: "Blog Post Not Found",
        };
    }

    return {
        title: `${post.title} | Varanasi On Wheels`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogs.find((p) => p.id === slug);

    if (!post) {
        notFound();
    }

    return (
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
                </div>
            </div>
        </article>
    );
}
