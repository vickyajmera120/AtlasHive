import { client } from "@/lib/sanity";
import { postQuery } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export const revalidate = 60;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await client.fetch(postQuery, { slug });

    if (!post) {
        notFound();
    }

    return (
        <article className="pt-24 min-h-screen pb-20">
            <div className="max-w-3xl mx-auto px-4">
                <Link href="/blog">
                    <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-primary p-0">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                    </Button>
                </Link>

                {post.mainImage && (
                    <div className="aspect-video rounded-xl overflow-hidden mb-8 border border-white/10">
                        <img
                            src={urlFor(post.mainImage).width(1200).height(675).url()}
                            alt={post.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}

                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">{post.title}</h1>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-12 border-b border-white/10 pb-8">
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                </div>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline">
                    {post.body && <PortableText value={post.body} />}
                </div>
            </div>
        </article>
    );
}
