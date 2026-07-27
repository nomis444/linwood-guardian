import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimateIn } from "@/components/AnimateIn";
import { PERSONAL_LINES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Personal Insurance",
  description:
    "Personal insurance solutions from Linwood Guardian Risk Management — home, auto, pet, and recreational vehicle coverage. Serving Buffalo and Western New York for over three decades.",
};

const COVERAGE_TYPES = [
  {
    title: "Home Insurance",
    description: "Protection for your home, personal property, and liability. Coverage customized for homeowners across Western New York.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Auto Insurance",
    description: "Competitive rates on auto insurance with multiple carrier options. Coverage for cars, trucks, and multi-vehicle households.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h4m-2 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Pet Insurance",
    description: "Coverage for your furry family members — accident, illness, and wellness plans from top-rated providers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21s-6-4.35-6-10A6 6 0 0112 5a6 6 0 016 6c0 5.65-6 10-6 10z" />
        <circle cx="9" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
        <circle cx="7" cy="5" r="1.5" fill="currentColor" />
        <circle cx="17" cy="5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Recreational Vehicles",
    description: "Coverage for motorcycles, boats, RVs, snowmobiles, and ATVs. Seasonal and year-round options available.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Renters Insurance",
    description: "Affordable protection for tenants covering personal belongings, liability, and additional living expenses.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: "Landlord Insurance",
    description: "Property and liability coverage for rental property owners. Protection for single-family and multi-unit dwellings.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const SELLING_POINTS = [
  "We are a true hometown agency.",
  "We have over three decades of experience.",
  "We personalize our coverage for every client.",
  "We offer competitive rates with the top companies.",
  "All of our staff is fully licensed in New York State.",
];

export default function PersonalInsurancePage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Personal Insurance", href: "/personal-insurance" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-merriweather)] mb-6 animate-hero-title">
              Insurance That Steps Up When Life Happens
            </h1>
            <p className="text-lg text-white/80 leading-relaxed animate-hero-body">
              Personal insurance for individuals and families in Buffalo and
              Western New York — experts in personal lines coverage for over
              three decades.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage types */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Personal Coverage Options
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              {PERSONAL_LINES.name} experts will find the
              correct solution for your personal insurance policies.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COVERAGE_TYPES.map((coverage) => (
              <AnimateIn key={coverage.title}>
                <div className="bg-white rounded-xl border border-border p-6">
                  <div className="w-12 h-12 rounded-lg bg-sky flex items-center justify-center text-teal mb-4">
                    {coverage.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                    {coverage.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {coverage.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-8 text-center">
              Why Choose Us for Personal Insurance
            </h2>
            <ul className="space-y-4">
              {SELLING_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-primary text-lg">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 text-center">
              <p className="text-text-secondary mb-4">
                For personal insurance inquiries, contact {PERSONAL_LINES.name}:
              </p>
              <a
                href={`tel:${PERSONAL_LINES.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 text-teal font-semibold text-lg hover:underline"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PERSONAL_LINES.phone}
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA for commercial */}
      <section className="py-16 bg-warm-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <p className="text-text-secondary text-lg mb-4">
              Looking for commercial insurance instead?
            </p>
            <Link
              href="/business-insurance"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:bg-navy-dark transition-colors"
            >
              Explore Business Insurance
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
