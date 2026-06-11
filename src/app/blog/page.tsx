import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimateIn } from "@/components/AnimateIn";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Articles & Insights",
  description:
    "Insurance insights, industry updates, and risk management guidance from Linwood Guardian Risk Management. Expert articles on commercial insurance topics for Buffalo and Western New York businesses.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Articles", href: "/blog" }]} />
      </div>

      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-merriweather)] mb-6 animate-hero-title">
              Articles &amp; Insights
            </h1>
            <p className="text-lg text-white/80 leading-relaxed animate-hero-body">
              Expert guidance on commercial insurance, risk management, and
              industry trends from the team at Linwood Guardian Risk Management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((post) => (
              <AnimateIn key={post.slug}>
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author}
                  category={post.category}
                  slug={post.slug}
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
