import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function isMdxFile(fileName: string) {
  return fileName.endsWith(".mdx");
}

function slugFromFileName(fileName: string) {
  return fileName.replace(/\.mdx$/, "");
}

export async function getAllPostMeta(): Promise<BlogPostMeta[]> {
  const files = await fs.readdir(BLOG_DIR);
  const mdxFiles = files.filter(isMdxFile);

  const posts = await Promise.all(
    mdxFiles.map(async (fileName) => {
      const slug = slugFromFileName(fileName);
      const fullPath = path.join(BLOG_DIR, fileName);
      const source = await fs.readFile(fullPath, "utf8");
      const { data } = matter(source);

      return {
        slug,
        title: String(data.title ?? slug),
        excerpt: String(data.excerpt ?? ""),
        date: String(data.date ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      };
    }),
  );

  return posts.sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();
    return bTime - aTime;
  });
}

export async function getPostSource(slug: string) {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const source = await fs.readFile(fullPath, "utf8");
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      title: String(data.title ?? slug),
      excerpt: String(data.excerpt ?? ""),
      date: String(data.date ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    } satisfies BlogPostMeta,
  };
}

export function formatPostDate(date: string) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}
