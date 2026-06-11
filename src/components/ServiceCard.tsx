import Link from "next/link";
import type { ReactNode } from "react";

export function ServiceCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border border-border p-6 hover:shadow-lg hover:border-teal/30 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-sky flex items-center justify-center text-teal mb-4 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-navy mb-2 font-[family-name:var(--font-merriweather)]">
        {title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      <span className="inline-flex items-center mt-4 text-teal text-sm font-medium group-hover:gap-2 transition-all">
        Learn more
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
