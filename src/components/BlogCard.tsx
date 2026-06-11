import Link from "next/link";

export function BlogCard({
  title,
  excerpt,
  date,
  author,
  category,
  slug,
}: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}) {
  return (
    <article className="bg-white rounded-xl border border-border p-6 hover:shadow-lg hover:border-teal/30 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-medium text-teal bg-sky px-2.5 py-1 rounded-full">
          {category}
        </span>
        <time className="text-xs text-text-secondary" dateTime={date}>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
        <Link href={`/blog/${slug}`} className="hover:text-teal transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-text-secondary">By {author}</span>
        <Link
          href={`/blog/${slug}`}
          className="text-teal text-sm font-medium hover:underline"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}
