"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="bg-black min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white font-heading mb-6"
                    >
                        Travel <span className="text-primary">Stories</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto font-light"
                    >
                        Insights, guides, and stories from the spiritual capital of India.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-zinc-900/50 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="p-8">
                                <div className="text-sm text-primary mb-4">{post.date}</div>
                                <h2 className="text-2xl font-bold text-white font-heading mb-4 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link
                                    href={`/blog/${post.id}`}
                                    className="inline-flex items-center text-white font-medium hover:text-primary transition-colors"
                                >
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
