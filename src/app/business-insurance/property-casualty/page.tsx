import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import { generateFAQSchema, generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Property & Casualty Insurance Buffalo NY",
  description:
    "Comprehensive commercial property and casualty insurance in Buffalo, NY. Linwood Guardian Risk Management covers commercial auto, contractors, cyber, manufacturing, garage operations, lessor's risk, and more across Western New York.",
};

const FAQ_ITEMS = [
  {
    question: "What does commercial property insurance cover in New York?",
    answer:
      "Commercial property insurance in New York covers physical assets your business owns or leases, including buildings, equipment, inventory, furniture, signage, and improvements to leased spaces. Policies typically protect against fire, windstorms, theft, vandalism, and certain water damage. Additional endorsements can cover business income loss during a covered shutdown, equipment breakdown, and ordinance or law costs when rebuilding to current code. Linwood Guardian Risk Management helps Buffalo-area businesses evaluate their property exposure and secure appropriate limits from multiple carriers.",
  },
  {
    question:
      "Do I need commercial auto insurance if employees use personal vehicles?",
    answer:
      "Yes. If employees drive their personal vehicles for any business purpose — deliveries, client visits, errands, or traveling between job sites — your business faces vicarious liability exposure. A personal auto policy does not cover the employer. You should carry hired and non-owned auto (HNOA) coverage at minimum, and a commercial auto policy if your business owns, leases, or regularly uses vehicles. In New York, commercial auto liability minimums are $25,000/$50,000 for bodily injury and $10,000 for property damage, though most businesses should carry significantly higher limits. Linwood Guardian can evaluate your fleet exposure and find the right commercial auto coverage.",
  },
  {
    question: "What is lessor's risk insurance and who needs it?",
    answer:
      "Lessor's risk insurance — sometimes called lessor's risk only (LRO) — is a specialized commercial property and liability policy designed for owners of buildings or spaces leased to tenants. It covers the property owner's exposure to claims arising from building ownership, including slip-and-fall injuries in common areas, fire damage to the structure, and liability if a building defect injures a tenant or visitor. Landlords, commercial real estate investors, and property management companies in Buffalo and Western New York commonly need lessor's risk coverage. Linwood Guardian Risk Management can structure LRO policies alongside umbrella coverage for comprehensive protection.",
  },
  {
    question: "How much does cyber insurance cost for small businesses?",
    answer:
      "Cyber insurance premiums for small businesses in New York typically range from $1,000 to $5,000 per year for $1 million in coverage, though costs vary based on your industry, annual revenue, volume of sensitive data handled, and existing cybersecurity controls. Businesses in healthcare, financial services, and professional services generally pay higher premiums due to regulatory exposure. Many carriers offer discounts for implementing multi-factor authentication, employee training programs, and endpoint detection tools. Linwood Guardian Risk Management can assess your cyber risk profile and shop multiple carriers to find competitive pricing for your Buffalo-area business.",
  },
];

const RELATED_SERVICES = [
  {
    title: "Professional Liability (E&O)",
    href: "/business-insurance/professional-liability",
    description: "Errors & omissions coverage for professional service firms.",
  },
  {
    title: "Management Liability",
    href: "/business-insurance/management-liability",
    description: "D&O, employment practices, fiduciary, and crime coverage.",
  },
  {
    title: "Workers' Comp & Disability",
    href: "/business-insurance/workers-comp",
    description:
      "NYS-required workers' compensation, disability, and paid family leave.",
  },
  {
    title: "Bonds",
    href: "/business-insurance/bonds",
    description: "Surety, contract, fidelity, and specialty bonds.",
  },
];

export default function PropertyCasualtyPage() {
  return (
    <>
      <JsonLd
        data={generateFAQSchema(FAQ_ITEMS)}
      />
      <JsonLd
        data={generateServiceSchema({
          name: "Property & Casualty Insurance",
          description:
            "Comprehensive commercial property and casualty insurance including commercial auto, contractors insurance, lessor's risk, cyber insurance, garage operations, manufacturing, technology, and businessowners policies in Buffalo and Western New York.",
          url: "/business-insurance/property-casualty",
        })}
      />

      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { name: "Business Insurance", href: "/business-insurance" },
              {
                name: "Property & Casualty",
                href: "/business-insurance/property-casualty",
              },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-merriweather)] mb-6">
              Property &amp; Casualty Insurance in Buffalo, NY
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Linwood Guardian Risk Management provides comprehensive commercial
              property and casualty insurance for businesses throughout Buffalo,
              Cheektowaga, and Western New York. As an independent agency with
              access to multiple carriers, we build P&amp;C programs that protect
              your physical assets, vehicles, operations, and liability exposure
              — all under one coordinated strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              What Is Commercial Property &amp; Casualty Insurance?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Property and casualty (P&amp;C) insurance is the foundation of
              every commercial insurance program. It covers two broad categories
              of risk: damage to your business property (buildings, equipment,
              inventory, vehicles) and liability for injuries or damage your
              business causes to others. Without adequate P&amp;C coverage, a
              single fire, lawsuit, or auto accident could threaten everything
              you have built.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Linwood Guardian structures P&amp;C programs by analyzing your
              specific operations, assets, and exposures. We then place coverage
              across multiple carriers to ensure competitive pricing without
              sacrificing breadth. Below are the key P&amp;C coverage areas we
              handle for businesses across Western New York.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Coverage Sections */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Commercial Auto */}
          <AnimateIn>
            <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Commercial Auto Insurance
            </h3>
            <p className="text-text-secondary leading-relaxed mb-2">
              Commercial auto insurance covers vehicles owned, leased, or used
              by your business. Policies include liability, collision,
              comprehensive, uninsured/underinsured motorist, and medical
              payments coverage. New York State requires commercial auto
              liability minimums, but most businesses should carry limits well
              above the statutory floor.
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              Hired and non-owned auto (HNOA) coverage extends protection when
              employees drive personal or rented vehicles for business purposes.
              Fleet policies can be tailored with scheduled vehicles, driver
              safety discounts, and trailer interchange endorsements.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-navy">Who needs it:</strong> Any business
              that owns vehicles, has employees who drive for work, or regularly
              rents vehicles — including contractors, delivery services,
              landscapers, and sales organizations.
            </p>
          </AnimateIn>

          {/* Contractors Insurance */}
          <AnimateIn>
            <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Contractors Insurance
            </h3>
            <p className="text-text-secondary leading-relaxed mb-2">
              Contractors face unique risks on every job site — from property
              damage and bodily injury to completed operations claims that
              surface months after project completion. A comprehensive
              contractors insurance program includes general liability,
              commercial auto, inland marine (tools and equipment), builders
              risk, and umbrella/excess coverage.
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              Many general contractors in New York are required to carry specific
              limits and additional insured endorsements to satisfy project
              owners and GC contracts. Linwood Guardian understands certificate
              requirements and can structure programs that keep your crews
              working without coverage gaps.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-navy">Who needs it:</strong> General
              contractors, subcontractors, electricians, plumbers, HVAC
              technicians, roofers, painters, excavation companies, and any
              trade working on construction or renovation projects in Western New
              York.
            </p>
          </AnimateIn>

          {/* Lessor's Risk */}
          <AnimateIn>
            <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Lessor&apos;s Risk Insurance
            </h3>
            <p className="text-text-secondary leading-relaxed mb-2">
              Lessor&apos;s risk only (LRO) policies are designed for building
              owners who lease space to tenants. These policies cover the
              landlord&apos;s property and liability exposure — including
              structural damage, common area injuries, and loss of rental income
              — without covering tenant operations.
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              LRO coverage is typically more cost-effective than a standard
              businessowners policy when the building owner has no on-site
              operations. Linwood Guardian can pair LRO policies with umbrella
              coverage and loss-of-rents endorsements for complete protection.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-navy">Who needs it:</strong> Commercial
              landlords, real estate investors, property management firms, and
              any entity that owns buildings leased to third-party tenants in
              Buffalo and Western New York.
            </p>
          </AnimateIn>

          {/* Cyber Insurance */}
          <AnimateIn>
            <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Cyber Insurance
            </h3>
            <p className="text-text-secondary leading-relaxed mb-2">
              Cyber insurance — also called privacy and network security
              coverage — protects businesses against financial losses from data
              breaches, ransomware attacks, transfer fraud, cyber extortion, and
              regulatory penalties. First-party coverage pays for breach
              notification, forensic investigation, credit monitoring, and
              business interruption. Third-party coverage defends against
              lawsuits from affected customers or partners.
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              New York&apos;s SHIELD Act requires businesses that handle private
              information of New York residents to implement reasonable
              cybersecurity safeguards. Cyber insurance provides a financial
              backstop when preventive measures fail.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-navy">Who needs it:</strong> Any business
              that stores customer data, processes payments, uses email for
              financial transactions, or relies on digital systems — which today
              includes virtually every business in Western New York.
            </p>
          </AnimateIn>

          {/* Garage Operations */}
          <AnimateIn>
            <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Garage Operations Insurance
            </h3>
            <p className="text-text-secondary leading-relaxed mb-2">
              Garage operations insurance is a specialized policy designed for
              businesses that service, repair, store, or sell motor vehicles. It
              combines general liability, garagekeepers coverage (protecting
              customer vehicles in your care), and garage liability into a single
              policy form.
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              Standard commercial general liability policies exclude auto-related
              exposures, making a garage policy essential for operations that
              regularly handle vehicles. Coverage can be extended to include
              dealer plates, lot coverage, and false pretense protection.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-navy">Who needs it:</strong> Auto repair
              shops, body shops, car dealerships, towing companies, tire shops,
              oil change centers, and any business in the Buffalo area that takes
              custody of customer vehicles.
            </p>
          </AnimateIn>

          {/* Manufacturing */}
          <AnimateIn>
            <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Manufacturing Insurance
            </h3>
            <p className="text-text-secondary leading-relaxed mb-2">
              Manufacturers face a complex web of exposures — product liability,
              equipment breakdown, supply chain disruption, environmental
              contamination, and workplace injuries. A manufacturing insurance
              program layers property coverage for buildings and equipment with
              product liability, inland marine for goods in transit, and
              business income coverage to protect against shutdowns.
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              Western New York has a deep manufacturing base, and Linwood
              Guardian has experience placing coverage for operations ranging
              from food production and metal fabrication to plastics and
              precision machining.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-navy">Who needs it:</strong>
              Manufacturers, fabricators, assemblers, food processors,
              packaging companies, and industrial operations throughout the
              Buffalo-Niagara region.
            </p>
          </AnimateIn>

          {/* Technology */}
          <AnimateIn>
            <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Technology Insurance
            </h3>
            <p className="text-text-secondary leading-relaxed mb-2">
              Technology companies face unique risks including intellectual
              property disputes, service outages, data breaches, and errors in
              software or consulting deliverables. A technology insurance program
              typically combines technology errors and omissions (Tech E&amp;O),
              cyber liability, and media liability into a comprehensive package.
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              Many tech industry contracts require vendors to carry specific
              insurance limits and coverage types. Linwood Guardian understands
              these requirements and can structure programs that satisfy client
              contracts while keeping premiums competitive.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-navy">Who needs it:</strong> Software
              companies, IT consulting firms, managed service providers (MSPs),
              SaaS companies, data analytics firms, and any technology business
              operating in or serving clients in New York State.
            </p>
          </AnimateIn>

          {/* Habitational / BOP */}
          <AnimateIn>
            <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Habitational &amp; Businessowners Policies
            </h3>
            <p className="text-text-secondary leading-relaxed mb-2">
              Habitational insurance covers residential properties operated as
              businesses — apartment complexes, condominiums, townhouse
              associations, and mixed-use buildings. These policies address the
              unique liability and property risks that come with housing tenants,
              including slip-and-fall claims, fire damage, and building code
              compliance.
            </p>
            <p className="text-text-secondary leading-relaxed mb-2">
              A businessowners policy (BOP) bundles property coverage, general
              liability, and business income protection into a single,
              cost-effective package. BOPs are designed for small to mid-sized
              businesses that qualify based on size, revenue, and classification.
              They offer broader coverage than purchasing each line separately,
              often at a lower total premium.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-navy">Who needs it:</strong> Apartment
              building owners, condo associations, property managers, small
              retail businesses, office-based firms, and mid-sized companies
              looking for streamlined coverage in the Buffalo area.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Property &amp; Casualty Insurance FAQ
            </h2>
            <p className="text-text-secondary text-lg">
              Common questions about commercial P&amp;C coverage in Buffalo and
              Western New York.
            </p>
          </AnimateIn>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <AnimateIn key={item.question}>
                <details className="group bg-white rounded-xl border border-border">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-navy font-semibold text-left">
                    {item.question}
                    <svg
                      className="w-5 h-5 text-teal shrink-0 ml-4 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-text-secondary leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Related Business Insurance Services
            </h2>
            <p className="text-text-secondary text-lg">
              Property &amp; casualty is just one part of a complete commercial
              insurance program.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RELATED_SERVICES.map((service) => (
              <AnimateIn key={service.href}>
                <Link
                  href={service.href}
                  className="block bg-white rounded-xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Link>
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
              Get a Property &amp; Casualty Insurance Quote
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Contact Linwood Guardian today for a comprehensive review of your
              commercial property and casualty coverage. We&apos;ll shop
              multiple carriers to find the right protection at a competitive
              price.
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
