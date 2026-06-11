import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import { generateFAQSchema, generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Workers' Compensation & NYS Disability Insurance",
  description:
    "Workers' compensation, NYS disability, and Paid Family Leave insurance in Buffalo, NY. Linwood Guardian Risk Management helps Western New York employers meet legal requirements and reduce premiums through cost-assistance and dividend programs.",
};

const FAQ_ITEMS = [
  {
    question:
      "Is workers' compensation insurance required in New York State?",
    answer:
      "Yes. New York State law requires virtually all employers to carry workers' compensation insurance, regardless of the number of employees, hours worked, or type of work performed. This includes part-time employees, family members on payroll, and corporate officers (though some officer exclusions are available for certain business structures). Failure to carry workers' compensation insurance in New York is a criminal offense — employers can face fines of up to $2,000 per 10-day period of non-compliance and potential imprisonment. The New York Workers' Compensation Board actively enforces compliance. Linwood Guardian Risk Management helps Buffalo-area employers secure compliant workers' comp coverage at competitive rates.",
  },
  {
    question:
      "What are the NYS disability insurance requirements for employers?",
    answer:
      "Under the New York Disability Benefits Law (DBL), all employers in New York State must provide statutory short-term disability insurance to eligible employees. This coverage provides wage replacement — currently up to $170 per week for up to 26 weeks — for employees who are unable to work due to an off-the-job illness or injury, including pregnancy-related disability. Employers can obtain DBL coverage through a private insurance carrier, the New York State Insurance Fund (NYSIF), or by self-insuring with approval from the Workers' Compensation Board. Most employers in Buffalo and Western New York purchase DBL alongside their workers' compensation policy. Linwood Guardian can structure both coverages for efficient administration.",
  },
  {
    question:
      "How can I reduce my workers' comp premiums in New York?",
    answer:
      "There are several strategies to reduce workers' compensation premiums in New York. First, implement a formal safety program — the New York Workers' Compensation Board offers premium credits for approved safety programs. Second, participate in a group or association program that qualifies for dividend returns based on favorable loss experience. Third, ensure your employees are properly classified under the correct NCCI classification codes, as misclassification can inflate premiums. Fourth, manage claims aggressively through modified duty and return-to-work programs. Fifth, review your experience modification rate (EMR) annually and dispute any errors. Linwood Guardian Risk Management analyzes each of these factors and identifies cost-assistance opportunities for Western New York employers.",
  },
  {
    question:
      "What is New York Paid Family Leave and does my business need it?",
    answer:
      "New York Paid Family Leave (PFL) is a state-mandated benefit that provides eligible employees with job-protected, paid time off to bond with a new child, care for a family member with a serious health condition, or assist when a family member is deployed for active military service. As of 2024, PFL provides up to 12 weeks of leave at 67% of the employee's average weekly wage, capped at 67% of the state average weekly wage. Nearly all private employers in New York State must provide PFL coverage. The cost is funded entirely through employee payroll deductions at a rate set annually by the state. Employers must obtain a PFL rider on their disability insurance policy. Linwood Guardian helps Buffalo-area businesses administer PFL alongside workers' comp and disability for streamlined compliance.",
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
    title: "Bonds",
    href: "/business-insurance/bonds",
    description: "Surety, contract, fidelity, and specialty bonds.",
  },
];

export default function WorkersCompPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(FAQ_ITEMS)} />
      <JsonLd
        data={generateServiceSchema({
          name: "Workers' Compensation & NYS Disability Insurance",
          description:
            "Workers' compensation, New York State disability benefits, and Paid Family Leave insurance for employers in Buffalo and Western New York. Cost-assistance programs, dividend programs, and premium reduction strategies.",
          url: "/business-insurance/workers-comp",
        })}
      />

      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { name: "Business Insurance", href: "/business-insurance" },
              {
                name: "Workers' Comp & Disability",
                href: "/business-insurance/workers-comp",
              },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-merriweather)] mb-6">
              Workers&apos; Compensation &amp; NYS Disability Insurance
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Linwood Guardian Risk Management provides workers&apos;
              compensation, New York State disability, and Paid Family Leave
              insurance for employers throughout Buffalo, Cheektowaga, and
              Western New York. We help businesses meet their legal obligations
              while identifying cost-assistance and dividend programs that
              reduce premiums without sacrificing coverage.
            </p>
          </div>
        </div>
      </section>

      {/* NYS Legal Requirements */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              New York State Legal Requirements
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              New York has some of the most comprehensive employer insurance
              mandates in the country. Virtually every employer in the state is
              required to carry three coverages: workers&apos; compensation,
              statutory disability benefits, and Paid Family Leave. These are
              not optional — failure to comply can result in criminal penalties,
              fines, and personal liability for business owners.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              The New York Workers&apos; Compensation Board actively monitors
              compliance using data from multiple state agencies. Businesses
              without coverage can be identified through tax filings, permit
              applications, and subcontractor audits. Penalties include fines
              of up to $2,000 per 10-day period and potential stop-work orders.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Linwood Guardian ensures your business is fully compliant with all
              three mandates and helps you understand the interaction between
              these coverages — when disability benefits end and workers&apos;
              comp begins, how Paid Family Leave integrates with FMLA, and what
              obligations you have when an employee is injured.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* What Workers' Comp Covers */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              What Workers&apos; Compensation Covers
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Workers&apos; compensation insurance provides benefits to
              employees who suffer work-related injuries or occupational
              illnesses. In New York, coverage is no-fault — employees receive
              benefits regardless of who caused the injury, and in exchange,
              they generally cannot sue their employer for workplace injuries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-sky rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3">
                  Medical Benefits
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  All reasonable and necessary medical treatment related to the
                  work injury — including doctor visits, surgery, physical
                  therapy, prescription medications, and medical equipment — is
                  covered with no deductible or copay for the employee.
                </p>
              </div>
              <div className="bg-sky rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3">
                  Lost Wage Benefits
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Employees who miss more than seven days of work receive
                  temporary disability payments at two-thirds of their average
                  weekly wage, subject to the state maximum. If they miss more
                  than 14 days, the first seven days are retroactively covered.
                </p>
              </div>
              <div className="bg-sky rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3">
                  Permanent Disability
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Workers who suffer permanent impairment receive scheduled
                  loss awards (for specific body parts) or classified
                  disability benefits based on the degree of impairment and
                  their ability to return to work.
                </p>
              </div>
              <div className="bg-sky rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3">
                  Death Benefits
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  If an employee dies from a work-related injury or illness,
                  workers&apos; compensation provides death benefits to
                  eligible dependents, plus a burial allowance, as determined
                  by the Workers&apos; Compensation Board.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* NYS Disability */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              NYS Disability Benefits Law
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              The New York Disability Benefits Law (DBL) requires employers to
              provide short-term disability insurance for employees who are
              unable to work due to off-the-job injuries or illnesses. This
              coverage fills the gap between workers&apos; compensation (which
              covers on-the-job injuries) and long-term disability (which
              typically has a longer waiting period).
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Current statutory DBL benefits provide up to $170 per week for a
              maximum of 26 weeks. While the statutory benefit amount is modest,
              employers can choose to provide enhanced disability benefits above
              the statutory minimum. The cost of statutory DBL can be shared
              with employees through payroll deductions of up to $0.60 per week.
            </p>
            <p className="text-text-secondary leading-relaxed">
              DBL coverage also serves as the vehicle for New York Paid Family
              Leave. Most employers purchase a combined DBL/PFL policy from
              their insurance carrier. Linwood Guardian can place both
              coverages through the same carrier or through the New York State
              Insurance Fund (NYSIF) for employers who prefer the state option.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* PFL */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              New York Paid Family Leave
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              New York Paid Family Leave (PFL) provides eligible employees with
              job-protected, paid time off for qualifying family events. PFL is
              entirely employee-funded through payroll deductions at a rate
              set annually by the state. Employers are responsible for
              obtaining and administering the coverage but do not pay the
              premium.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Qualifying events include bonding with a newly born, adopted, or
              fostered child during the first 12 months; caring for a close
              family member with a serious health condition; and assisting with
              family obligations when a spouse, domestic partner, child, or
              parent is deployed for active military service.
            </p>
            <p className="text-text-secondary leading-relaxed">
              PFL benefits run concurrently with FMLA leave where applicable
              but cannot be taken simultaneously with workers&apos; compensation
              or disability benefits. An employee receiving workers&apos; comp
              or DBL must return to work before accessing PFL. Linwood Guardian
              helps employers navigate these rules and ensures their policies
              are properly coordinated.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Cost Assistance */}
      <section className="py-16 md:py-20 bg-sky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              Cost-Assistance &amp; Dividend Programs
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Workers&apos; compensation premiums can be a significant expense,
              especially for construction, manufacturing, and healthcare
              employers in Western New York. Linwood Guardian actively
              identifies programs that can reduce your costs.
            </p>
            <div className="space-y-6 mt-8">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  Group Dividend Programs
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Many carriers offer group or association dividend programs
                  that return a percentage of premium to participating employers
                  when the group&apos;s overall loss experience is favorable.
                  Dividends can range from 5% to 25% or more of premium. These
                  programs effectively reduce the long-term cost of coverage.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  Safety Group Programs
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  The New York Compensation Insurance Rating Board (NYCIRB)
                  approves safety group programs that pool similar employers
                  and provide premium discounts based on group safety
                  performance. Employers must implement approved safety
                  programs and maintain favorable loss ratios to qualify for
                  annual dividends.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  Experience Modification Rate (EMR) Management
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  Your experience modification rate (EMR or mod rate) directly
                  impacts your premium. A mod above 1.0 increases your premium;
                  below 1.0 reduces it. Linwood Guardian reviews your mod
                  worksheet annually to ensure accuracy, dispute errors, and
                  develop strategies to improve your rating over time through
                  better claims management and return-to-work programs.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Reduce Premiums */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              How to Reduce Your Workers&apos; Comp Premiums
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Linwood Guardian takes a proactive approach to managing workers&apos;
              compensation costs. Beyond shopping multiple carriers for
              competitive rates, we work with you on structural strategies that
              lower your long-term cost of risk.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-teal font-bold text-lg mt-0.5">1.</span>
                <div>
                  <p className="text-navy font-semibold mb-1">
                    Verify classification codes
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Employees assigned to incorrect NCCI classification codes
                    may be rated at a higher premium than necessary. A thorough
                    payroll audit can identify misclassifications and reduce
                    your annual premium.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-teal font-bold text-lg mt-0.5">2.</span>
                <div>
                  <p className="text-navy font-semibold mb-1">
                    Implement a formal safety program
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Document your safety policies, conduct regular training,
                    and report on incidents. A well-documented safety program
                    not only prevents injuries but can qualify you for premium
                    credits and dividend programs.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-teal font-bold text-lg mt-0.5">3.</span>
                <div>
                  <p className="text-navy font-semibold mb-1">
                    Develop a return-to-work program
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Modified duty and transitional work programs get injured
                    employees back to productive work faster, reducing lost
                    time costs that drive up your experience modification rate.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-teal font-bold text-lg mt-0.5">4.</span>
                <div>
                  <p className="text-navy font-semibold mb-1">
                    Review your experience mod annually
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Errors in your mod worksheet — incorrect claim reserves,
                    wrong classification codes, or clerical mistakes — can
                    inflate your premium for years. Linwood Guardian reviews
                    every mod worksheet for accuracy.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-teal font-bold text-lg mt-0.5">5.</span>
                <div>
                  <p className="text-navy font-semibold mb-1">
                    Consider group or dividend programs
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Association programs and safety groups can return 10-25% of
                    your premium as dividends when the group performs well. We
                    identify programs that match your industry and risk profile.
                  </p>
                </div>
              </li>
            </ul>
          </AnimateIn>
        </div>
      </section>

      {/* Linwood Guardian's Approach */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              Linwood Guardian&apos;s Approach to Workers&apos; Comp
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Workers&apos; compensation is not a commodity. The same employer
              can see dramatically different premiums, service levels, and
              claims outcomes depending on which carrier and program they use.
              Linwood Guardian&apos;s approach goes beyond quoting the lowest
              rate.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              We start by understanding your operations: your payroll by
              classification, your injury history, your current mod rate, your
              safety practices, and your claims management process. From there,
              we market your account across multiple carriers — including
              specialty markets, state fund options, and group dividend
              programs — to find the best combination of price, service, and
              long-term cost control.
            </p>
            <p className="text-text-secondary leading-relaxed">
              After placement, we stay involved. We review renewals proactively,
              audit experience mod worksheets, assist with return-to-work
              planning, and help you navigate the New York Workers&apos;
              Compensation Board when claims arise. Our goal is to be your
              ongoing risk management partner — not just a policy vendor.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Workers&apos; Compensation &amp; Disability FAQ
            </h2>
            <p className="text-text-secondary text-lg">
              Common questions about workers&apos; comp, disability, and Paid
              Family Leave in New York.
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
              Workers&apos; comp and disability are part of a complete employer
              risk management program.
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
              Get a Workers&apos; Compensation Quote
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Contact Linwood Guardian today for a workers&apos; comp review.
              We&apos;ll analyze your payroll, mod rate, and loss history to
              find the most cost-effective coverage from multiple carriers and
              programs.
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
