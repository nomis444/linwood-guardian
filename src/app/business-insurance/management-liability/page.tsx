import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import { generateFAQSchema, generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Management Liability Insurance Buffalo NY",
  description:
    "Management liability insurance in Buffalo, NY including D&O (directors & officers), employment practices liability (EPL), fiduciary liability, and crime coverage. Linwood Guardian Risk Management protects business leaders across Western New York.",
};

const FAQ_ITEMS = [
  {
    question: "What is D&O insurance and who needs it?",
    answer:
      "Directors and officers (D&O) insurance protects the personal assets of corporate directors, officers, and the organization itself against lawsuits alleging wrongful acts in their capacity as company leaders. Claims can come from shareholders, employees, regulators, competitors, or customers — alleging mismanagement, breach of fiduciary duty, failure to comply with regulations, or misleading statements. Any organization with a board of directors, officers, or managers — including private companies, nonprofits, and public corporations — should carry D&O coverage. In Buffalo and Western New York, Linwood Guardian Risk Management helps businesses of all sizes secure D&O policies that protect leadership from personal financial exposure.",
  },
  {
    question:
      "Do small businesses need employment practices liability insurance?",
    answer:
      "Yes. Employment practices liability (EPL) claims are among the most common lawsuits facing businesses of all sizes in New York, and small businesses are often the most vulnerable because they lack dedicated HR departments and legal counsel. EPL claims include allegations of wrongful termination, discrimination, sexual harassment, retaliation, and wage-and-hour violations. The average EPL claim costs over $125,000 to defend and settle — a figure that can be catastrophic for a small business. Linwood Guardian recommends EPL coverage for any business in Western New York with employees, regardless of size.",
  },
  {
    question: "What does management liability insurance cover?",
    answer:
      "Management liability insurance is a suite of coverages that protect business leaders, the organization, and its assets from claims related to management decisions and employment practices. It typically includes four components: directors and officers (D&O) liability, which covers wrongful act claims against company leadership; employment practices liability (EPL), which covers HR-related claims like discrimination and wrongful termination; fiduciary liability, which covers claims related to employee benefit plan management; and crime coverage, which covers theft, embezzlement, forgery, and fraud committed by employees or third parties. Linwood Guardian Risk Management structures management liability packages tailored to each client's organizational structure and risk profile.",
  },
  {
    question: "What is fiduciary liability insurance?",
    answer:
      "Fiduciary liability insurance protects individuals and organizations responsible for managing employee benefit plans — including 401(k) plans, pension funds, health insurance plans, and ESOP programs — against claims of mismanagement. Under ERISA (Employee Retirement Income Security Act), fiduciaries can be held personally liable for losses to plan participants caused by imprudent investment decisions, excessive fees, administrative errors, or failure to follow plan documents. Fiduciary liability insurance covers defense costs, settlements, and judgments arising from these claims. Any employer in Buffalo or Western New York that sponsors a retirement plan or health benefit program should carry fiduciary liability coverage. Linwood Guardian can assess your fiduciary exposure and find appropriate protection.",
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

export default function ManagementLiabilityPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(FAQ_ITEMS)} />
      <JsonLd
        data={generateServiceSchema({
          name: "Management Liability Insurance",
          description:
            "Management liability insurance including directors & officers (D&O), employment practices liability (EPL), fiduciary liability, and crime coverage for businesses in Buffalo and Western New York.",
          url: "/business-insurance/management-liability",
        })}
      />

      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { name: "Business Insurance", href: "/business-insurance" },
              {
                name: "Management Liability",
                href: "/business-insurance/management-liability",
              },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-merriweather)] mb-6">
              Management Liability Insurance in Buffalo, NY
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Linwood Guardian Risk Management provides management liability
              insurance that protects business leaders, organizations, and
              employee benefit plans from claims arising from management
              decisions, employment practices, and fiduciary responsibilities.
              We serve businesses of all sizes across Buffalo, Cheektowaga, and
              Western New York with D&amp;O, EPL, fiduciary, and crime coverage
              tailored to your organizational structure.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              What Is Management Liability Insurance?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Management liability insurance is a suite of coverage designed to
              protect the people who run organizations — directors, officers,
              managers, HR leaders, and benefit plan administrators — from
              personal financial exposure arising from their management
              decisions. These are not property or bodily injury claims; they are
              allegations of wrongful management acts, employment violations,
              fiduciary breaches, and employee dishonesty.
            </p>
            <p className="text-text-secondary leading-relaxed">
              A comprehensive management liability program typically combines
              four coverages: directors and officers (D&amp;O) liability,
              employment practices liability (EPL), fiduciary liability, and
              crime insurance. These can be purchased individually or bundled
              into a management liability package. Linwood Guardian structures
              these programs based on your organization&apos;s size, industry,
              governance structure, and specific risk exposures.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* D&O */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              Directors &amp; Officers (D&amp;O) Liability
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              D&amp;O insurance protects the personal assets of individuals
              serving as directors or officers of a company, as well as the
              organization itself, from lawsuits alleging wrongful acts in
              managing the company. Coverage applies to decisions made in their
              official capacity — not criminal conduct or intentional fraud.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              D&amp;O policies typically include three insuring agreements: Side
              A covers individual directors and officers when the company cannot
              indemnify them (e.g., bankruptcy). Side B reimburses the company
              when it does indemnify its leaders. Side C (entity coverage)
              protects the organization itself from securities claims or
              management-related lawsuits.
            </p>

            <div className="bg-sky rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3">
                Real-World Scenario
              </h3>
              <p className="text-text-secondary leading-relaxed">
                A minority shareholder in a privately held Buffalo company sues
                the board of directors, alleging the directors approved an
                acquisition at an inflated price, wasting corporate assets and
                diluting shareholder value. D&amp;O insurance covers the legal
                defense costs for each named director and any resulting
                settlement — protecting their personal savings, homes, and
                retirement accounts from the claim.
              </p>
            </div>

            <p className="text-text-secondary leading-relaxed">
              <strong className="text-navy">Who needs it:</strong> Any
              organization with a formal board of directors or officers —
              including private companies, nonprofits, public corporations,
              associations, and private equity portfolio companies. Nonprofit
              board members are especially vulnerable because they often serve
              without compensation and may not realize their personal assets are
              at risk.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* EPL */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              Employment Practices Liability (EPL)
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Employment practices liability insurance covers claims brought by
              current, former, or prospective employees alleging violations of
              their employment rights. These claims include wrongful
              termination, discrimination (age, race, gender, disability,
              religion), sexual harassment, retaliation, failure to promote,
              wage-and-hour disputes, and breach of employment contract.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              EPL claims are among the most frequent and expensive lawsuits
              facing businesses in New York. The state&apos;s employee-friendly
              labor laws, including the New York State Human Rights Law and
              recent amendments strengthening sexual harassment protections, make
              EPL coverage especially important for employers in Western New
              York.
            </p>

            <div className="bg-sky rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3">
                Real-World Scenario
              </h3>
              <p className="text-text-secondary leading-relaxed">
                A terminated employee at a Cheektowaga-based company files a
                lawsuit alleging wrongful termination and age discrimination,
                claiming they were replaced by a younger worker despite strong
                performance reviews. EPL insurance covers the company&apos;s
                defense costs — including attorney fees, depositions, and expert
                witnesses — and pays any settlement or judgment, which in New
                York age discrimination cases can include compensatory damages,
                back pay, and attorney fee awards.
              </p>
            </div>

            <p className="text-text-secondary leading-relaxed">
              <strong className="text-navy">Who needs it:</strong> Every
              business with employees in New York State. EPL claims can arise
              from a single employee interaction. Companies without dedicated HR
              departments or employment counsel face the greatest exposure.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Fiduciary */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              Fiduciary Liability
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Fiduciary liability insurance protects plan sponsors, trustees,
              and administrators of employee benefit plans from claims alleging
              mismanagement of plan assets. Under ERISA, fiduciaries are held to
              a prudent expert standard — they must act solely in the interest
              of plan participants and manage plan assets with the care of a
              knowledgeable professional.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Recent Department of Labor enforcement actions and class action
              lawsuits targeting excessive 401(k) fees, poor fund selection, and
              lack of fiduciary oversight have made this coverage increasingly
              important — even for small plans. Fiduciary liability is personal:
              plan fiduciaries can be required to restore losses from their own
              assets.
            </p>

            <div className="bg-sky rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3">
                Real-World Scenario
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Employees of a mid-sized Western New York manufacturer file a
                class action alleging the company&apos;s 401(k) plan charged
                excessive administrative fees and included underperforming funds
                that a prudent fiduciary would have replaced. The claim seeks
                recovery of the difference between actual plan returns and what
                participants would have earned under a properly managed plan.
                Fiduciary liability insurance covers the company&apos;s defense
                and any required plan restoration.
              </p>
            </div>

            <p className="text-text-secondary leading-relaxed">
              <strong className="text-navy">Who needs it:</strong> Any employer
              that sponsors a 401(k), pension, profit-sharing plan, ESOP,
              health plan, or other employee benefit program. The individuals
              who select and monitor plan investments, hire plan
              administrators, or approve plan amendments are all considered
              fiduciaries under ERISA.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Crime */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              Crime Coverage
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Commercial crime insurance protects businesses against financial
              losses from dishonest or criminal acts committed by employees or
              third parties. Coverage includes employee theft, embezzlement,
              forgery, computer fraud, funds transfer fraud, and social
              engineering (business email compromise) schemes.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Internal theft is more common than most business owners realize.
              The Association of Certified Fraud Examiners estimates that
              organizations lose 5% of revenue to occupational fraud annually.
              Crime insurance provides a financial safety net when internal
              controls fail.
            </p>

            <div className="bg-sky rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3">
                Real-World Scenario
              </h3>
              <p className="text-text-secondary leading-relaxed">
                A bookkeeper at a Buffalo-area business diverts $175,000 over
                two years through fraudulent vendor payments and altered checks.
                The scheme is discovered during an audit. Commercial crime
                insurance reimburses the business for the stolen funds, minus
                the deductible, and covers forensic accounting costs to
                determine the full extent of the loss.
              </p>
            </div>

            <p className="text-text-secondary leading-relaxed">
              <strong className="text-navy">Who needs it:</strong> Any business
              where employees handle money, financial transactions, or have
              access to company bank accounts, credit cards, or payment
              systems. Businesses with remote or unsupervised financial
              functions face elevated exposure.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Management Liability Insurance FAQ
            </h2>
            <p className="text-text-secondary text-lg">
              Common questions about D&amp;O, EPL, fiduciary, and crime coverage
              in Western New York.
            </p>
          </AnimateIn>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <AnimateIn key={item.question}>
                <details className="group bg-warm-white rounded-xl border border-border">
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
              Management liability works alongside other coverages to form a
              complete business protection strategy.
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
              Protect Your Leadership Team
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Contact Linwood Guardian today for a management liability
              assessment. We&apos;ll evaluate your D&amp;O, EPL, fiduciary, and
              crime exposures and structure coverage that protects your
              organization&apos;s leaders and assets.
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
