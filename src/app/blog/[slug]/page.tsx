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

                <div className="prose dark:prose-invert prose-lg max-w-none
                    prose-headings:text-foreground prose-headings:font-bold
                    prose-h1:text-3xl prose-h1:mt-10 prose-h1:mb-4
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-2
                    prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-4
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-ul:list-disc prose-ol:list-decimal
                    prose-li:text-foreground/90 prose-li:marker:text-primary
                    prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
                    prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
                    prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg
                    prose-img:rounded-lg prose-img:border prose-img:border-border
                    prose-hr:border-border
                ">
                    {post.body && <PortableText value={post.body} />}
                </div>
            </div>
        </article>
    );
}
