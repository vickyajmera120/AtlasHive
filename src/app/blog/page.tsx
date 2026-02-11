import { client } from "@/lib/sanity";
import { postsQuery } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
    // Check if Sanity is configured
    if (client.config().projectId === "your-project-id") {
        return (
            <div className="pt-24 min-h-screen text-center px-4">
                <h1 className="text-4xl font-bold mb-6">Latest Insights</h1>
                <div className="max-w-md mx-auto p-6 border border-yellow-500/20 bg-yellow-500/5 rounded-lg">
                    <h3 className="text-xl font-semibold text-yellow-500 mb-2">Configuration Required</h3>
                    <p className="text-muted-foreground mb-4">
                        The blog system is ready but needs a Sanity.io Project ID.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Please update <code>.env.local</code> with your <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code>.
                    </p>
                </div>
            </div>
        );
    }

    const posts = await client.fetch(postsQuery);

    return (
        <div className="pt-24 min-h-screen">
            <div className="bg-primary/5 py-12 text-center mb-12 border-b border-white/5">
                <h1 className="text-4xl font-bold mb-4">Cybersecurity Insights</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto px-4">
                    Latest news, threat analysis, and compliance guides from AtlasHive experts.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                {posts.map((post: any) => (
                    <Link href={`/blog/${post.slug.current}`} key={post._id} className="group">
                        <Card className="h-full bg-card border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                            {post.mainImage && (
                                <div className="aspect-video relative overflow-hidden">
                                    <img
                                        src={urlFor(post.mainImage).width(800).height(450).url()}
                                        alt={post.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}
                            <CardHeader>
                                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                    <span>{post.author}</span>
                                </div>
                                <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="line-clamp-3 mb-4">
                                    {post.excerpt}
                                </CardDescription>
                                <Button variant="link" className="p-0 h-auto text-primary group-hover:translate-x-1 transition-transform">
                                    Read Article <ArrowRight className="ml-1 h-3 w-3" />
                                </Button>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
