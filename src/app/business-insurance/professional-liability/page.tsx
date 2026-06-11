import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimateIn } from "@/components/AnimateIn";
import { JsonLd } from "@/components/JsonLd";
import { generateFAQSchema, generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Professional Liability Insurance (E&O) Buffalo NY",
  description:
    "Professional liability and errors & omissions (E&O) insurance in Buffalo, NY. Linwood Guardian Risk Management protects architects, engineers, attorneys, consultants, IT professionals, accountants, and more across Western New York.",
};

const FAQ_ITEMS = [
  {
    question: "What is errors and omissions insurance?",
    answer:
      "Errors and omissions (E&O) insurance — also called professional liability insurance — protects businesses and professionals against claims of negligence, mistakes, or failure to deliver promised services. If a client alleges that your professional advice, design, or work product caused them financial harm, E&O insurance covers legal defense costs and any resulting settlement or judgment. This coverage applies even if the claim is groundless. Linwood Guardian Risk Management helps professionals across Buffalo and Western New York secure E&O coverage tailored to their specific practice area and risk profile.",
  },
  {
    question: "Do I need professional liability insurance in New York?",
    answer:
      "While New York State does not mandate professional liability insurance for most professions, many clients, contracts, and licensing boards require it as a condition of doing business. Architects, engineers, attorneys, real estate agents, insurance agents, and healthcare providers are frequently required to carry E&O coverage by their clients, professional associations, or regulatory bodies. Even without a legal mandate, any professional who provides advice, designs, or services that clients rely on faces significant financial risk without E&O coverage. A single malpractice or negligence claim can cost tens of thousands of dollars to defend. Linwood Guardian can assess your exposure and find cost-effective professional liability coverage.",
  },
  {
    question:
      "What is the difference between general liability and professional liability?",
    answer:
      "General liability insurance covers bodily injury and property damage — for example, a client who slips in your office or a contractor who damages a client's property. Professional liability (E&O) insurance covers financial harm caused by your professional services — for example, an architect whose design error leads to costly construction rework, or an IT consultant whose software recommendation causes a data breach. General liability policies specifically exclude professional services claims, so businesses that provide advice, designs, or specialized services need both coverages. Linwood Guardian Risk Management structures programs that coordinate general liability and professional liability to eliminate coverage gaps.",
  },
  {
    question: "How much professional liability insurance do I need?",
    answer:
      "The amount of professional liability insurance you need depends on your profession, annual revenue, contract requirements, and risk tolerance. Most professionals carry between $500,000 and $2 million per occurrence, with $1 million/$2 million being the most common limit structure. High-risk professions like architects, engineers, and attorneys may need $5 million or more, especially on large projects. Many client contracts specify minimum E&O limits — review your agreements carefully. Linwood Guardian Risk Management can evaluate your contract requirements and claims exposure to recommend appropriate limits for your Buffalo-area practice.",
  },
];

const PROFESSIONS = [
  {
    name: "Architects & Engineers",
    description:
      "Design professionals face claims from construction defects, code violations, cost overruns, and project delays. A/E professional liability covers design errors, omissions in specifications, and failure to meet professional standards.",
  },
  {
    name: "Attorneys & Law Firms",
    description:
      "Legal malpractice claims can arise from missed deadlines, conflicts of interest, inadequate representation, or errors in legal documents. Lawyers professional liability covers defense and damages from allegations of negligent legal services.",
  },
  {
    name: "Consultants & Advisory Firms",
    description:
      "Management consultants, financial advisors, and business consultants face claims when their recommendations lead to client losses. E&O coverage protects against allegations of bad advice, failure to deliver, or breach of professional duty.",
  },
  {
    name: "IT Professionals & Technology Firms",
    description:
      "Technology errors and omissions (Tech E&O) covers software bugs, system failures, implementation delays, and cybersecurity incidents caused by professional services. This is distinct from general cyber insurance and addresses the professional service delivery risk.",
  },
  {
    name: "Accountants & CPAs",
    description:
      "Accounting professionals face exposure from tax filing errors, audit failures, financial statement inaccuracies, and bookkeeping mistakes. Accountants professional liability covers defense costs and damages from claims of professional negligence.",
  },
  {
    name: "Real Estate Agents & Brokers",
    description:
      "Real estate E&O covers claims arising from failure to disclose material defects, misrepresentation of property conditions, errors in contracts, or inadequate advice during transactions.",
  },
  {
    name: "Medical Professionals",
    description:
      "Medical malpractice insurance covers healthcare providers against claims of diagnostic errors, treatment mistakes, surgical complications, and failure to obtain informed consent. New York has specific requirements for physicians and healthcare facilities.",
  },
  {
    name: "Beauty & Personal Care Services",
    description:
      "Cosmetologists, estheticians, massage therapists, and salon owners face claims from allergic reactions, chemical burns, and injuries during treatments. Professional liability for beauty professionals covers these service-related risks.",
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

export default function ProfessionalLiabilityPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(FAQ_ITEMS)} />
      <JsonLd
        data={generateServiceSchema({
          name: "Professional Liability Insurance (Errors & Omissions)",
          description:
            "Professional liability and errors & omissions insurance protecting architects, engineers, attorneys, consultants, IT professionals, accountants, real estate agents, medical professionals, and beauty services in Buffalo and Western New York.",
          url: "/business-insurance/professional-liability",
        })}
      />

      {/* Hero */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Breadcrumbs
            items={[
              { name: "Business Insurance", href: "/business-insurance" },
              {
                name: "Professional Liability",
                href: "/business-insurance/professional-liability",
              },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-merriweather)] mb-6">
              Professional Liability Insurance (E&amp;O) in Buffalo, NY
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Linwood Guardian Risk Management provides professional liability
              insurance — also known as errors and omissions (E&amp;O) coverage
              — for professionals and service firms throughout Buffalo,
              Cheektowaga, and Western New York. We protect your practice against
              claims of negligence, mistakes, and failure to perform with
              coverage tailored to your specific profession and risk profile.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              What Is Professional Liability Insurance?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Professional liability insurance protects businesses and
              individuals who provide professional services against claims that
              their work caused a client financial harm. Unlike general liability
              — which covers bodily injury and property damage — professional
              liability addresses the intangible risks of advice, expertise, and
              service delivery. If a client alleges your work was negligent,
              incomplete, or contained errors, this coverage pays for legal
              defense, settlements, and judgments.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Professional liability policies are typically written on a
              claims-made basis, meaning the policy in effect when a claim is
              reported responds — not the policy in effect when the error
              occurred. This makes continuous, uninterrupted coverage critical.
              Tail coverage (extended reporting periods) may be needed when
              changing carriers or retiring from practice.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Linwood Guardian has deep experience placing professional liability
              coverage across a wide range of professions. We understand the
              nuances of claims-made policies, retroactive dates, prior acts
              coverage, and the specific endorsements each profession requires.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Professions Served */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Professions We Serve
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Every profession has unique risk exposures that require specialized
              E&amp;O coverage. Linwood Guardian places professional liability
              insurance for the following industries and practice areas across
              Western New York.
            </p>
          </AnimateIn>
          <div className="space-y-10">
            {PROFESSIONS.map((profession) => (
              <AnimateIn key={profession.name}>
                <h3 className="text-xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3">
                  {profession.name}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {profession.description}
                </p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* How Claims Work */}
      <section className="py-16 md:py-20 bg-sky">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              How Professional Liability Claims Work
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              A professional liability claim begins when a client alleges that
              your services were negligent, incomplete, or contained errors that
              resulted in financial loss. The claim may come as a demand letter,
              a lawsuit, or even a regulatory complaint — and your obligation to
              report it to your insurer typically begins immediately.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Once a claim is reported, the insurer assigns defense counsel
              (often specialized attorneys experienced in your profession),
              investigates the allegation, and manages the defense or negotiates
              a settlement. Defense costs are covered from the first dollar in
              most policies, though some policies include defense costs within
              the policy limit (eroding limits) while others cover defense costs
              in addition to the limit.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Understanding these mechanics matters. Linwood Guardian reviews
              policy forms carefully to ensure you understand how your coverage
              responds before you need it — not after.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 md:py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              Why Professional Liability Insurance Matters
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Even the most skilled professionals make mistakes — and even
              perfect work can generate unfounded claims. The average cost to
              defend a professional liability lawsuit in the United States
              exceeds $30,000, and settlements routinely reach six figures. For a
              small firm or solo practitioner, a single uninsured claim can be
              financially devastating.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Beyond financial protection, E&amp;O coverage provides peace of
              mind. You can pursue complex projects, take on demanding clients,
              and grow your practice knowing that a defensible claim will not
              bankrupt your business.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Linwood Guardian Risk Management works with professionals across
              Buffalo and Western New York to build E&amp;O programs that match
              their risk profile, satisfy contract requirements, and provide
              meaningful protection. We shop multiple carriers to find the right
              combination of coverage breadth and cost.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Professional Liability Insurance FAQ
            </h2>
            <p className="text-text-secondary text-lg">
              Common questions about E&amp;O coverage for professionals in
              Western New York.
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
              Professional liability is one component of a comprehensive
              business insurance program.
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
              Protect Your Professional Practice
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Contact Linwood Guardian today for a professional liability
              insurance review. We&apos;ll evaluate your practice, contract
              requirements, and risk profile to find the right E&amp;O coverage
              from multiple carriers.
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
