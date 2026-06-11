import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import { generateFAQSchema, generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Surety Bonds & Fidelity Bonds Buffalo NY",
  description:
    "Surety bonds and fidelity bonds in Buffalo, NY. Linwood Guardian Risk Management provides commercial, contract, fidelity, license/permit, bid, performance, janitorial, court, and public adjuster bonds for businesses across Western New York.",
};

const FAQ_ITEMS = [
  {
    question: "What types of surety bonds does Linwood Guardian offer?",
    answer:
      "Linwood Guardian Risk Management offers a comprehensive range of surety bonds for businesses in Buffalo and Western New York. Our bonding capabilities include commercial surety bonds (license and permit bonds, public official bonds, court bonds, notary bonds), contract surety bonds (bid bonds, performance bonds, payment bonds, maintenance bonds), fidelity bonds (employee dishonesty bonds, ERISA bonds, janitorial bonds, business service bonds), and specialty bonds (public adjuster bonds, customs bonds, lost instrument bonds). We work with multiple surety companies to place bonds for businesses of all sizes, from small contractors to large construction firms.",
  },
  {
    question:
      "Do I need a performance bond for my construction project in New York?",
    answer:
      "Whether you need a performance bond depends on the project and who is requiring it. Public construction projects in New York State generally require performance bonds and payment bonds for contracts above certain thresholds — often $100,000 or more, depending on the municipality or state agency. Private project owners may also require performance bonds to ensure the contractor completes the work according to contract specifications. Even when not legally required, performance bonds can help contractors win bids by demonstrating financial strength and reliability. Linwood Guardian Risk Management helps Buffalo-area contractors secure performance bonds with competitive rates and terms.",
  },
  {
    question:
      "What is the difference between a surety bond and insurance?",
    answer:
      "While both surety bonds and insurance protect against financial loss, they work differently. Insurance is a two-party agreement between the insurer and the insured — the insurer pays claims and absorbs the loss. A surety bond is a three-party agreement between the principal (the business), the obligee (the party requiring the bond), and the surety (the bonding company). If the principal fails to meet their obligation, the surety pays the obligee but then seeks full reimbursement from the principal. In other words, a surety bond is a form of credit backed by the principal's financial strength, not a transfer of risk. The principal is ultimately responsible for any claims paid. Linwood Guardian Risk Management explains these distinctions and helps businesses in Western New York understand their bonding obligations.",
  },
  {
    question: "How much does a surety bond cost?",
    answer:
      "Surety bond premiums are calculated as a percentage of the bond amount and vary based on the type of bond, the bond amount, and the financial strength of the principal. Commercial surety bonds (license and permit bonds) typically cost between 1% and 5% of the bond amount annually. Contract surety bonds (bid, performance, payment) generally cost between 1% and 3% of the contract value, depending on the contractor's financial statements, credit history, and work experience. Fidelity bonds are typically priced based on the number of employees covered and the coverage limit. For example, a $25,000 license bond at a 3% rate would cost $750 per year. Linwood Guardian Risk Management works with multiple sureties to find the most competitive pricing for Buffalo-area businesses based on their financial profile.",
  },
];

const BOND_TYPES = [
  {
    name: "Commercial Surety Bonds",
    description:
      "Commercial surety bonds guarantee that a business will comply with laws, regulations, or contractual obligations. These are typically required by government agencies as a condition of obtaining a license, permit, or authority to operate.",
    examples: [
      "License and permit bonds",
      "Public official bonds",
      "Notary bonds",
      "Customs bonds",
      "Lost instrument bonds",
    ],
  },
  {
    name: "Contract Surety Bonds",
    description:
      "Contract surety bonds guarantee that a contractor will fulfill the terms of a construction or service contract. They protect the project owner (obligee) from financial loss if the contractor fails to perform, defaults on payment to subcontractors, or fails to meet warranty obligations.",
    examples: [
      "Bid bonds",
      "Performance bonds",
      "Payment bonds",
      "Maintenance bonds",
      "Subdivision bonds",
    ],
  },
  {
    name: "Fidelity Bonds",
    description:
      "Fidelity bonds protect businesses against financial losses caused by dishonest acts of employees, including theft, embezzlement, and fraud. Unlike commercial crime insurance, fidelity bonds are often required by clients or contracts as a condition of doing business.",
    examples: [
      "Employee dishonesty bonds",
      "ERISA fidelity bonds (for benefit plan fiduciaries)",
      "Janitorial bonds",
      "Business service bonds",
    ],
  },
  {
    name: "License &amp; Permit Bonds",
    description:
      "Many professions and businesses in New York require a surety bond to obtain or maintain a license or permit. These bonds guarantee that the bonded business will comply with applicable laws and regulations. If the business violates the terms, affected parties can file a claim against the bond.",
    examples: [
      "Contractor license bonds",
      "Motor vehicle dealer bonds",
      "Mortgage broker bonds",
      "Collection agency bonds",
      "Freight broker bonds",
    ],
  },
  {
    name: "Public Adjuster Bonds",
    description:
      "New York State requires licensed public adjusters to carry a surety bond as a condition of licensure. The bond protects insurance policyholders from financial harm caused by a public adjuster's failure to fulfill their professional obligations or handle claim funds appropriately.",
    examples: [
      "NYS public adjuster license bonds",
    ],
  },
  {
    name: "Bid Bonds",
    description:
      "A bid bond guarantees that a contractor will enter into a contract and provide the required performance and payment bonds if awarded the project. If the contractor withdraws their bid or fails to execute the contract, the project owner can recover the difference between the winning bid and the next lowest bid, up to the bond amount.",
    examples: [
      "Public works bid bonds",
      "Private project bid bonds",
    ],
  },
  {
    name: "Performance Bonds",
    description:
      "Performance bonds guarantee that a contractor will complete a project according to the terms and conditions of the contract. If the contractor defaults, the surety can step in to complete the work, hire a replacement contractor, or pay the project owner for losses up to the bond amount.",
    examples: [
      "Construction performance bonds",
      "Service contract performance bonds",
      "Supply contract performance bonds",
    ],
  },
  {
    name: "Janitorial &amp; Service Bonds",
    description:
      "Janitorial bonds and business service bonds protect clients against employee theft when workers have access to client premises, property, or sensitive areas. These bonds are commonly required by commercial cleaning companies, security firms, and other service businesses whose employees work unsupervised in client facilities.",
    examples: [
      "Janitorial service bonds",
      "Cleaning company bonds",
      "Security guard bonds",
      "Home healthcare service bonds",
    ],
  },
  {
    name: "Court Bonds",
    description:
      "Court bonds are required by judges as part of judicial proceedings. They guarantee that a party will fulfill obligations imposed by the court. The specific type of court bond depends on the proceeding and the party's role.",
    examples: [
      "Appeal bonds (supersedeas bonds)",
      "Fiduciary/executor bonds",
      "Guardian bonds",
      "Attachment bonds",
      "Injunction bonds",
    ],
  },
];

const RELATED_SERVICES = [
  {
    title: "Property & Casualty",
    href: "/business-insurance/property-casualty",
    description:
      "Commercial property, auto, cyber, and general liability coverage.",
  },
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
];

export default function BondsPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(FAQ_ITEMS)} />
      <JsonLd
        data={generateServiceSchema({
          name: "Surety Bonds & Fidelity Bonds",
          description:
            "Surety bonds, fidelity bonds, contract bonds, and specialty bonds for businesses and contractors in Buffalo and Western New York. Commercial, bid, performance, payment, janitorial, court, license/permit, and public adjuster bonds.",
          url: "/business-insurance/bonds",
        })}
      />

      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { name: "Business Insurance", href: "/business-insurance" },
              { name: "Bonds", href: "/business-insurance/bonds" },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-merriweather)] mb-6">
              Surety Bonds &amp; Fidelity Bonds in Buffalo, NY
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Linwood Guardian Risk Management provides surety bonds, fidelity
              bonds, and contract bonds for businesses and contractors
              throughout Buffalo, Cheektowaga, and Western New York. Whether you
              need a license bond to operate, a performance bond to win a
              contract, or a fidelity bond to protect your clients, we work
              with multiple surety companies to secure the bonds you need at
              competitive rates.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              What Are Surety Bonds?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              A surety bond is a three-party agreement that guarantees one party
              (the principal) will fulfill an obligation to another party (the
              obligee), with a third party (the surety) backing the guarantee.
              If the principal fails to perform, the surety pays the obligee
              and then seeks reimbursement from the principal. Unlike insurance,
              where the insurer absorbs losses, the principal on a surety bond
              is ultimately responsible for any claims.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Bonds are required across many industries in New York — from
              construction contractors who need bid and performance bonds to win
              public projects, to businesses that need license bonds to operate
              legally. They provide financial assurance that obligations will be
              met and protect the public, project owners, and business clients
              from loss.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Linwood Guardian Risk Management has relationships with multiple
              surety companies, enabling us to place bonds for businesses of all
              sizes — from a small contractor seeking their first performance
              bond to an established firm with a multi-million-dollar bonding
              program.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Bond Types */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Types of Bonds We Offer
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Linwood Guardian provides a full range of surety, fidelity, and
              specialty bonds. Below are the major categories and specific bond
              types we handle for Western New York businesses.
            </p>
          </AnimateIn>
          <div className="space-y-12">
            {BOND_TYPES.map((bond) => (
              <AnimateIn key={bond.name}>
                <div className="border-l-4 border-teal pl-6">
                  <h3
                    className="text-xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3"
                    dangerouslySetInnerHTML={{ __html: bond.name }}
                  />
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {bond.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {bond.examples.map((example) => (
                      <span
                        key={example}
                        className="inline-block bg-sky text-navy text-sm px-3 py-1 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs Bonds */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              Who Needs Surety Bonds in New York?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Many businesses in New York State are required to carry surety
              bonds as a condition of licensure, contract award, or regulatory
              compliance. Common industries and situations include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  Construction Contractors
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Bid bonds, performance bonds, and payment bonds are required
                  for most public works projects and many private construction
                  contracts in New York.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  Licensed Professionals
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Public adjusters, mortgage brokers, collection agencies,
                  notaries, and other licensed professionals need surety bonds
                  to maintain their licenses.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  Cleaning &amp; Service Companies
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Janitorial companies, security firms, and home service
                  businesses often need fidelity or service bonds to win
                  commercial contracts.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  Motor Vehicle Dealers
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  New York requires auto dealers to post a surety bond as part
                  of the dealer licensing process, protecting consumers from
                  fraud and contract violations.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  Fiduciaries &amp; Executors
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Courts may require fiduciary bonds from executors,
                  administrators, guardians, and trustees to protect estate
                  beneficiaries and wards.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  Benefit Plan Sponsors
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  ERISA requires anyone who handles employee benefit plan
                  funds to carry a fidelity bond equal to at least 10% of plan
                  assets, up to $500,000.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How Bonds Work */}
      <section className="py-16 md:py-20 bg-sky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              How Surety Bonds Work
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              The surety bond process involves three parties with distinct roles
              and responsibilities:
            </p>
            <div className="space-y-6 mt-8">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  The Principal
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  The business or individual who purchases the bond and agrees
                  to fulfill an obligation. The principal pays the bond premium
                  and is ultimately responsible for any claims paid by the
                  surety.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  The Obligee
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  The party requiring the bond — typically a government agency,
                  project owner, or client. The obligee is protected by the
                  bond if the principal fails to meet their obligation.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  The Surety
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  The bonding company that underwrites the bond and guarantees
                  the principal&apos;s performance. If the principal defaults,
                  the surety pays the obligee and then seeks repayment from the
                  principal through indemnification.
                </p>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed mt-6">
              Because the principal is ultimately liable for bond claims,
              surety underwriting focuses on the principal&apos;s financial
              strength, credit history, and track record — similar to a credit
              application. Linwood Guardian helps businesses present their
              strongest financial profile to surety companies to secure
              favorable rates and higher bonding capacity.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Linwood Guardian's Bonding Capabilities */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              Linwood Guardian&apos;s Bonding Capabilities
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              As an independent agency, Linwood Guardian works with multiple
              surety companies — from large national sureties to specialty
              markets that serve emerging contractors and businesses with
              non-standard financial profiles. This gives us flexibility to
              place bonds for businesses at every stage of growth.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Our bonding capabilities include single project bonds ranging
              from small license bonds to multi-million-dollar contract bonds.
              We assist with the application and underwriting process, help you
              assemble the financial documentation sureties require, and
              advocate on your behalf when standard markets decline.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Whether you are a new contractor seeking your first performance
              bond, a cleaning company that needs janitorial bonds for
              commercial contracts, or an established firm expanding your
              bonding capacity, Linwood Guardian Risk Management has the
              relationships and expertise to help you succeed in the Western
              New York market and beyond.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Bonds FAQ
            </h2>
            <p className="text-text-secondary text-lg">
              Common questions about surety bonds and fidelity bonds in Western
              New York.
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
              Bonds are one component of a complete business insurance and risk
              management program.
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
              Get Bonded Today
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Contact Linwood Guardian for a surety bond consultation.
              We&apos;ll assess your bonding needs, help with the application
              process, and shop multiple sureties for the best rates and
              capacity.
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
