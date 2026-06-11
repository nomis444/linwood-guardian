import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustSignals } from "@/components/TrustSignals";
import { JsonLd } from "@/components/JsonLd";
import { generateFAQSchema } from "@/lib/schema";

const FAQ_ITEMS = [
  {
    question: "Who is the best commercial insurance agent in Buffalo, NY?",
    answer:
      "Linwood Guardian Risk Management is an independent commercial insurance agency based in Cheektowaga, NY, serving Buffalo and all of Western New York. With over 65 years of combined industry expertise, principals Joe Mesi and Tamara Boyle, ACSR, AINS provide customized commercial insurance solutions with access to numerous carriers — both local and national. Linwood Guardian is BBB A+ accredited and a member of Big I Western New York.",
  },
  {
    question: "What types of business insurance does Linwood Guardian offer?",
    answer:
      "Linwood Guardian specializes in comprehensive commercial insurance including property and casualty, professional liability (errors & omissions), management liability (D&O, EPL, fiduciary, crime), workers' compensation and NYS disability, surety bonds, and cyber insurance. We serve contractors, manufacturers, technology companies, real estate owners, professional services firms, and businesses of all sizes across Western New York.",
  },
  {
    question: "Does Linwood Guardian handle workers' compensation in Western New York?",
    answer:
      "Yes. Linwood Guardian provides workers' compensation insurance and NYS disability coverage for businesses throughout Western New York. As an independent agency, we have access to multiple carriers and can help identify cost-assistance programs, dividend-eligible programs, and competitive rates based on your industry and claims history.",
  },
  {
    question: "What is cyber liability insurance and do I need it?",
    answer:
      "Cyber liability insurance — also called privacy and network security coverage — protects businesses against financial losses from data breaches, transfer fraud, cyber extortion, and privacy crimes involving customer or employee information. Any business that stores sensitive data, processes payments, or relies on digital systems should consider cyber insurance. Linwood Guardian can assess your cyber risk exposure and find the right policy for your business.",
  },
  {
    question: "How do I get a commercial insurance quote in Cheektowaga or Buffalo?",
    answer:
      "Contact Linwood Guardian Risk Management at (716) 710-8910 or visit our office at 759 Dick Rd, Cheektowaga, NY 14225. You can also submit a quote request through our website. We offer free consultations to assess your coverage needs and provide customized quotes from multiple carriers. Our office is open Monday through Friday, 9 AM to 5 PM.",
  },
  {
    question: "What makes an independent insurance agency different from a captive agent?",
    answer:
      "An independent insurance agency like Linwood Guardian represents multiple insurance carriers rather than a single company. This means we can shop your coverage across numerous providers to find the best combination of price, coverage, and service. Captive agents are limited to one carrier's products. Our independence gives you more options and ensures we are working in your best interest, not a single insurer's.",
  },
];

const SERVICES = [
  {
    title: "Property & Casualty",
    description: "Comprehensive protection for your business assets, property, vehicles, and liability exposure.",
    href: "/business-insurance/property-casualty",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Professional Liability",
    description: "Errors & omissions coverage protecting your business from claims of professional negligence.",
    href: "/business-insurance/professional-liability",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Management Liability",
    description: "D&O, employment practices, fiduciary, and crime coverage for your leadership team.",
    href: "/business-insurance/management-liability",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Workers' Comp & Disability",
    description: "NYS-required workers' compensation, disability, and paid family leave coverage.",
    href: "/business-insurance/workers-comp",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Bonds",
    description: "Surety, contract, fidelity, and specialty bonds for contractors and businesses.",
    href: "/business-insurance/bonds",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Cyber Insurance",
    description: "Privacy, network security, and data breach protection for the digital age.",
    href: "/business-insurance/property-casualty",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={generateFAQSchema(FAQ_ITEMS)} />

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl animate-float" aria-hidden="true" />
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-forest/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-teal-light text-sm uppercase tracking-widest mb-4 font-semibold animate-hero-subtitle">
              Cheektowaga, NY &middot; Serving Western New York
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white font-[family-name:var(--font-merriweather)] mb-6 animate-hero-title">
              Protecting Your Greatest Assets
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl animate-hero-body">
              Buffalo&apos;s trusted commercial insurance experts — over 65 years of combined industry knowledge protecting businesses across Western New York. Independent agency. Multiple carriers. Customized coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-hero-cta">
              <Link
                href="/contact"
                className="px-8 py-4 bg-teal text-white font-semibold rounded-lg hover:bg-teal-light hover:scale-105 transition-all duration-300 text-center focus:outline-2 focus:outline-offset-2 focus:outline-teal-light"
              >
                Get a Quote
              </Link>
              <Link
                href="/business-insurance"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 text-center focus:outline-2 focus:outline-offset-2 focus:outline-white"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 bg-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustSignals />
        </div>
      </section>

      {/* Why Linwood Guardian */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Why Linwood Guardian
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              At Linwood Guardian, we provide the highest quality consultation of coverage options based on your insurance needs. Not all policies provide the same coverages — our expertise ensures you get the right protection.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateIn className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-sky text-teal flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3">Deep Expertise</h3>
              <p className="text-text-secondary leading-relaxed">
                Over 65 years of combined insurance knowledge. Tamara Boyle holds ACSR and AINS designations with decades of commercial lines experience across top agencies.
              </p>
            </AnimateIn>
            <AnimateIn className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-sky text-teal flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3">True Independence</h3>
              <p className="text-text-secondary leading-relaxed">
                As an independent agency, we represent multiple carriers — not a single insurer. This means more options, more competitive rates, and coverage tailored to your exact needs.
              </p>
            </AnimateIn>
            <AnimateIn className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-sky text-teal flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-3">Personal Partnership</h3>
              <p className="text-text-secondary leading-relaxed">
                You work directly with our principals — not a call center. We take time to understand your business, assess your risks, and build coverage that works as hard as you do.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Commercial Insurance Solutions
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              From property and liability to specialized protection options, Linwood Guardian offers insurance solutions handled with timeliness, sophistication, and expertise.
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

      {/* About teaser */}
      <section className="py-20 md:py-28 bg-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
                  Hometown Principals, National Reach
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  Linwood Guardian was established by Joe Mesi and Tamara Boyle — two hometown principals who bring over 65 years of combined insurance expertise to the Buffalo community.
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  They leverage deep industry knowledge to provide customized insurance solutions, understand sophisticated approaches to property and casualty challenges, and maintain access to numerous carriers both locally and nationally.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-teal font-semibold hover:gap-3 transition-all"
                >
                  Meet our team
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 text-center border border-border">
                  <p className="text-3xl font-bold text-teal font-[family-name:var(--font-merriweather)]">65+</p>
                  <p className="text-text-secondary text-sm mt-1">Years Combined Experience</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center border border-border">
                  <p className="text-3xl font-bold text-teal font-[family-name:var(--font-merriweather)]">A+</p>
                  <p className="text-text-secondary text-sm mt-1">BBB Rating</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center border border-border">
                  <p className="text-3xl font-bold text-teal font-[family-name:var(--font-merriweather)]">WNY</p>
                  <p className="text-text-secondary text-sm mt-1">Locally Rooted</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center border border-border">
                  <p className="text-3xl font-bold text-teal font-[family-name:var(--font-merriweather)]">10+</p>
                  <p className="text-text-secondary text-sm mt-1">Coverage Lines</p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary text-lg">
              Common questions about commercial insurance in Buffalo and Western New York.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-merriweather)] mb-6">
              Discover How Your Company Can Better Manage Risk
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Contact Linwood Guardian today to discuss coverage options with one of our experienced associates. We&apos;ll help you find the right protection for your business.
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
