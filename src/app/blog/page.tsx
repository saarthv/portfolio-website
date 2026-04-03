import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { formatPostDate, getAllPostMeta } from "@/lib/blog";

export default async function BlogPage() {
  const posts = (await getAllPostMeta()).map((post) => ({
    ...post,
    date: formatPostDate(post.date),
  }));

  return (
    <section className="space-y-6">
      <SectionHeading
        eyebrow="Blog"
        title="Notes on data, product, and decision systems."
        description="Posts are authored in MDX and stored in src/content/blog."
      />
      <div className="space-y-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
