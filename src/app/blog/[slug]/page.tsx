import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { generateArticleSchema } from "@/lib/schema";
import { getPostBySlug, getAllSlugs } from "@/lib/blog-data";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={generateArticleSchema(post)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Articles", href: "/blog" },
            { name: post.title, href: `/blog/${post.slug}` },
          ]}
        />
      </div>

      <article className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-teal bg-sky px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <time
                className="text-sm text-text-secondary"
                dateTime={post.date}
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              {post.title}
            </h1>
            <p className="text-text-secondary">By {post.author}</p>
          </header>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-text-secondary leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-teal font-medium hover:underline"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                All Articles
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-teal text-white font-semibold rounded-lg hover:bg-teal-light transition-colors text-sm"
              >
                Discuss Your Coverage Needs
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </>
  );
}
