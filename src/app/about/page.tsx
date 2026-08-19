import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimateIn } from "@/components/AnimateIn";
import { TeamMember } from "@/components/TeamMember";
import { TrustSignals } from "@/components/TrustSignals";
import { TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Linwood Guardian Risk Management. Joe Mesi and Tamara Boyle, ACSR, AINS. Over 75 years of combined commercial insurance expertise serving Buffalo and Western New York.",
};

export default function AboutPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
      </div>

      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-merriweather)] mb-6 animate-hero-title">
              Insurance Delivered with Unparalleled Insight and Experience
            </h1>
            <p className="text-lg text-white/80 leading-relaxed animate-hero-body">
              Linwood Guardian Risk Management was established by hometown
              principals who collectively bring over 75 years of insurance
              expertise to the Buffalo community. We leverage deep industry
              knowledge to provide customized insurance solutions for businesses
              across Western New York.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              Our Story
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Linwood Guardian Risk Management was founded on a simple belief:
              businesses deserve an insurance partner who understands their unique
              risks — not an agent who sells a one-size-fits-all policy from a
              single carrier.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              As an independent agency, we represent multiple insurance carriers
              rather than a single company. This independence means we shop your
              coverage across numerous providers — both local and national — to
              find the best combination of price, coverage breadth, and service
              quality. We work for you, not a corporate insurer.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Our principals understand sophisticated approaches to property and
              casualty challenges and actively recruit top talent to address the
              evolving requirements of our clients. Whether you need standard
              commercial coverage or specialized protection for complex risks,
              Linwood Guardian has the expertise and carrier relationships to
              deliver.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Meet Our Principals
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Two hometown insurance professionals with the experience and
              credentials to protect your business.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimateIn>
              <TeamMember
                name={TEAM.joe.name}
                title={TEAM.joe.title}
                phone={TEAM.joe.phone}
                email={TEAM.joe.email}
                linkedin={TEAM.joe.linkedin}
                bio="Joe Mesi is the founder and operator of Mesi Agency Inc., which he has operated for close to 40 years. A licensed insurance broker and agency principal, Joe transitioned from a major national insurance company to build an independent agency that puts client needs first. His decades of experience span personal and commercial lines, giving him a comprehensive understanding of how businesses and individuals manage risk across every stage of growth."
              />
            </AnimateIn>
            <AnimateIn>
              <TeamMember
                name={TEAM.tamara.name}
                title={TEAM.tamara.title}
                credentials={TEAM.tamara.credentials}
                phone={TEAM.tamara.phone}
                email={TEAM.tamara.email}
                linkedin={TEAM.tamara.linkedin}
                photo={TEAM.tamara.photo}
                bio="Tamara Boyle brings over 35 years of commercial lines expertise earned across Western New York's top insurance agencies, including formerly Tompkins Insurance, Scott Danahy Naylon, and The Evans Agency. She holds both the Accredited Customer Service Representative (ACSR) and Associate in Insurance (AINS) designations, credentials that reflect advanced knowledge of commercial coverage, underwriting, and risk assessment. Tamara specializes in finding the right coverage for complex commercial accounts whether the business is local, nationwide, or global."
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 md:py-28 bg-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-4">
              Credentials &amp; Affiliations
            </h2>
          </AnimateIn>
          <TrustSignals />
          <AnimateIn className="max-w-3xl mx-auto mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-navy mb-2">ACSR Designation</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  The Accredited Customer Service Representative designation
                  recognizes advanced knowledge in insurance operations, customer
                  service, and account management.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-navy mb-2">AINS Designation</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  The Associate in Insurance designation demonstrates
                  comprehensive understanding of insurance principles,
                  underwriting, and claims processes.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-navy mb-2">Big I New York</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Member of the Independent Insurance Agents &amp; Brokers of
                  New York, the state&apos;s oldest and largest trade
                  organization for independent insurance agents.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Service area */}
      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
              Serving Western New York and Beyond
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Based in Buffalo at 759 Dick Rd, Linwood Guardian serves
              businesses throughout Cheektowaga, Amherst, Tonawanda, West Seneca,
              Orchard Park, Lancaster, Depew, Hamburg, Williamsville, and all of
              Western New York. We also serve clients throughout New York State.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal text-white font-semibold rounded-lg hover:bg-teal-light transition-colors"
            >
              Contact Us Today
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
