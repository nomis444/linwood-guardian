import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { generateBreadcrumbSchema } from "@/lib/schema";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const allItems = [{ name: "Home", href: "/" }, ...items];
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(allItems)} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-text-secondary">
          {allItems.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && (
                <span className="mx-1" aria-hidden="true">
                  /
                </span>
              )}
              {i === allItems.length - 1 ? (
                <span aria-current="page" className="text-navy font-medium">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-teal transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
