import { notFound } from "next/navigation";

import { MDXRenderer } from "@/components/mdx-renderer";
import { getAllPostMeta, getPostSource } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPostMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  try {
    const post = await getPostSource(slug);

    return (
      <article className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#120b22] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
        <p className="text-sm text-violet-200/80">{formatPostDate(post.meta.date)}</p>
        <h1 className="mt-2 font-serif text-4xl tracking-tight text-white">{post.meta.title}</h1>
        <p className="mt-4 text-zinc-300">{post.meta.excerpt}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.meta.tags.map((tag) => (
            <span
              key={`${post.meta.slug}-${tag}`}
              className="rounded-full border border-violet-300/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-10">
          <MDXRenderer source={post.content} />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}
