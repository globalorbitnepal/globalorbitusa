import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { contentFile } from "@/lib/content-dir";
import { ORBIT_BLOGS } from "@/lib/orbit/catalog";
import { isPublicPost } from "@/lib/blog-status";
import {
  DEFAULT_CATEGORIES,
  normalizePost,
  type BlogCategory,
  type BlogPost,
  type BlogStore,
  type BlogTag,
} from "@/lib/blog-types";

export type { BlogCategory, BlogPost, BlogStore, BlogTag };
export { DEFAULT_CATEGORIES, emptyPost, normalizePost } from "@/lib/blog-types";

function blogPath() {
  return contentFile("blogs.json");
}

function seedStore(): BlogStore {
  return {
    categories: DEFAULT_CATEGORIES,
    tags: [
      { slug: "usa", name: "USA" },
      { slug: "core-web-vitals", name: "Core Web Vitals" },
    ],
    posts: ORBIT_BLOGS.map((item) =>
      normalizePost({
        slug: item.slug,
        title: item.title,
        excerpt: item.summary,
        body: `<p>${item.summary}</p>`,
        seoTitle: item.title,
        seoDescription: item.summary,
        isPublished: true,
        category: "seo",
      }),
    ),
  };
}

export async function getBlogStore(): Promise<BlogStore> {
  try {
    const raw = await readFile(blogPath(), "utf8");
    const data = JSON.parse(raw) as Partial<BlogStore> & { posts?: Partial<BlogPost>[] };
    const seed = seedStore();
    const posts = Array.isArray(data.posts) && data.posts.length ? data.posts.map((item) => normalizePost(item)) : seed.posts;
    return {
      posts,
      categories: Array.isArray(data.categories) && data.categories.length ? data.categories : seed.categories,
      tags: Array.isArray(data.tags) && data.tags.length ? data.tags : seed.tags,
    };
  } catch {
    return seedStore();
  }
}

export async function saveBlogStore(store: BlogStore) {
  const file = blogPath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(store, null, 2)}\n`, "utf8");
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return (await getBlogStore()).posts;
}

export async function saveBlogPosts(posts: BlogPost[]) {
  const store = await getBlogStore();
  await saveBlogStore({ ...store, posts });
}

export async function getPublishedPosts() {
  return (await getBlogPosts()).filter(isPublicPost);
}

export async function getPostBySlug(slug: string) {
  return (await getBlogPosts()).find((post) => post.slug === slug) ?? null;
}
