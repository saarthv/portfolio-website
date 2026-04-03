import Link from "next/link";

import type { BlogPostMeta } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPostMeta;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#140b25] p-5 transition hover:border-violet-300/30">
      <p className="text-sm text-violet-200/80">{post.date}</p>
      <h2 className="mt-1 font-serif text-2xl tracking-tight text-white">
        <Link href={`/blog/${post.slug}`} className="hover:text-violet-100">
          {post.title}
        </Link>
      </h2>
      <p className="mt-2 text-zinc-300">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={`${post.slug}-${tag}`} className="rounded-full border border-violet-300/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-100">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
