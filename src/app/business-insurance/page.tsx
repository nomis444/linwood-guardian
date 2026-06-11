import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimateIn } from "@/components/AnimateIn";
import { ServiceCard } from "@/components/ServiceCard";
import { JsonLd } from "@/components/JsonLd";
import { generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Business Insurance",
  description:
    "Comprehensive commercial insurance solutions from Linwood Guardian Risk Management in Buffalo, NY. Property & casualty, professional liability, management liability, workers' comp, bonds, and cyber insurance for Western New York businesses.",
};

const SERVICES = [
  {
    title: "Property & Casualty",
    description:
      "Commercial property, general liability, commercial auto, contractors, cyber, habitational, manufacturing, technology, garage operations, and businessowners policies.",
    href: "/business-insurance/property-casualty",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Professional Liability",
    description:
      "Errors & omissions coverage for architects, engineers, attorneys, consultants, IT professionals, accountants, and other licensed professionals.",
    href: "/business-insurance/professional-liability",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Management Liability",
    description:
      "Directors & officers, employment practices liability, fiduciary liability, and crime coverage to protect your leadership team and company reputation.",
    href: "/business-insurance/management-liability",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Workers' Comp & Disability",
    description:
      "NYS-required workers' compensation, disability benefits, and paid family leave coverage with access to cost-assistance and dividend programs.",
    href: "/business-insurance/workers-comp",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Bonds",
    description:
      "Surety, contract, fidelity, license, bid, performance, janitorial, court, and specialty bonds for contractors and businesses across New York.",
    href: "/business-insurance/bonds",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const INDUSTRIES = [
  { name: "Contractors & Construction", description: "General contractors, specialty trades, artisans, project management" },
  { name: "Manufacturing", description: "Product liability, equipment, marine cargo, facility protection" },
  { name: "Technology & Software", description: "IT support, SaaS, data services, programmers, consultants" },
  { name: "Real Estate & Property", description: "Apartment buildings, mixed-use, condo associations, landlords" },
  { name: "Auto & Garage Operations", description: "Repair shops, collision centers, detail shops, dealerships" },
  { name: "Professional Services", description: "Attorneys, architects, engineers, accountants, consultants" },
];

export default function BusinessInsurancePage() {
  return (
    <>
      <JsonLd
        data={generateServiceSchema({
          name: "Commercial Insurance Solutions",
          description:
            "Comprehensive business insurance coverage including property & casualty, professional liability, management liability, workers' compensation, and bonds for businesses in Buffalo and Western New York.",
          url: "/business-insurance",
        })}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ name: "Business Insurance", href: "/business-insurance" }]}
        />
      </div>

      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-merriweather)] mb-6 animate-hero-title">
              Commercial Insurance Solutions for Every Business
            </h1>
            <p className="text-lg text-white/80 leading-relaxed animate-hero-body">
              Linwood Guardian Risk Management specializes in commercial
              insurance for businesses across Buffalo and Western New York. As an
              independent agency with access to multiple carriers, we deliver
              customized coverage — not one-size-fits-all policies.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Our Commercial Lines
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              From your property and liability to specialized protection options,
              Linwood Guardian offers insurance solutions handled with
              timeliness, sophistication, and expertise.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <AnimateIn key={service.title}>
                <ServiceCard {...service} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Industries We Serve
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              We understand the unique risks and regulatory requirements of each
              industry we serve. Our experience spans dozens of business types
              across Western New York.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => (
              <AnimateIn key={industry.name}>
                <div className="bg-sky rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-text-secondary text-sm">{industry.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-merriweather)] mb-6">
              Let&apos;s Find the Right Coverage for Your Business
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Every business has unique risks. Contact Linwood Guardian for a
              free consultation and customized quote from multiple carriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-teal text-white font-semibold rounded-lg hover:bg-teal-light transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="tel:7167108910"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/60 transition-all"
              >
                Call (716) 710-8910
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
