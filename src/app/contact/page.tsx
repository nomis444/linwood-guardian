import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AnimateIn } from "@/components/AnimateIn";
import { QuoteForm } from "@/components/QuoteForm";
import { JsonLd } from "@/components/JsonLd";
import { COMPANY, TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Get a Commercial Insurance Quote",
  description:
    "Contact Linwood Guardian Risk Management for a free commercial insurance consultation. Call (716) 710-8910 or visit us at 759 Dick Rd, Cheektowaga, NY 14225. Serving Buffalo and Western New York.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${COMPANY.url}/#business`,
  name: COMPANY.name,
  telephone: COMPANY.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.8864,
    longitude: -78.7506,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  url: COMPANY.url,
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      </div>

      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-merriweather)] mb-6 animate-hero-title">
              Contact Linwood Guardian Risk Management
            </h1>
            <p className="text-lg text-white/80 leading-relaxed animate-hero-body">
              Our principals bring over 65 years of combined experience and
              offer customized policy options for regional and national clients.
              Reach out today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quote form */}
            <AnimateIn>
              <div className="bg-white rounded-xl border border-border p-8">
                <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
                  Request a Quote
                </h2>
                <p className="text-text-secondary mb-8">
                  Tell us about your business and coverage needs. We&apos;ll
                  respond within one business day.
                </p>
                <QuoteForm />
              </div>
            </AnimateIn>

            {/* Contact info */}
            <AnimateIn>
              <div className="space-y-8">
                {/* Office info */}
                <div className="bg-white rounded-xl border border-border p-8">
                  <h2 className="text-2xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
                    Our Office
                  </h2>
                  <address className="not-italic space-y-4 text-text-secondary">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-medium text-navy">Address</p>
                        <p>{COMPANY.address.full}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium text-navy">Hours</p>
                        <p>{COMPANY.hours}</p>
                      </div>
                    </div>
                  </address>
                </div>

                {/* Team contacts */}
                <div className="bg-white rounded-xl border border-border p-8">
                  <h3 className="text-xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-6">
                    Reach Us Directly
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-semibold text-navy">
                        {TEAM.tamara.name}, {TEAM.tamara.credentials}
                      </p>
                      <p className="text-text-secondary text-sm mb-2">
                        {TEAM.tamara.title}
                      </p>
                      <div className="space-y-1 text-sm">
                        <a
                          href={`tel:${TEAM.tamara.phone.replace(/\D/g, "")}`}
                          className="flex items-center gap-2 text-teal hover:underline"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                          {TEAM.tamara.phone}
                        </a>
                        <a
                          href={`mailto:${TEAM.tamara.email}`}
                          className="flex items-center gap-2 text-teal hover:underline"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          {TEAM.tamara.email}
                        </a>
                      </div>
                    </div>
                    <div className="border-t border-border pt-6">
                      <p className="font-semibold text-navy">{TEAM.joe.name}</p>
                      <p className="text-text-secondary text-sm mb-2">
                        {TEAM.joe.title}
                      </p>
                      <div className="space-y-1 text-sm">
                        <a
                          href={`tel:${TEAM.joe.phone.replace(/\D/g, "")}`}
                          className="flex items-center gap-2 text-teal hover:underline"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                          {TEAM.joe.phone}
                        </a>
                        <a
                          href={`mailto:${TEAM.joe.email}`}
                          className="flex items-center gap-2 text-teal hover:underline"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          {TEAM.joe.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-xl border border-border overflow-hidden">
                  <iframe
                    title="Linwood Guardian Risk Management office location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.5!2d-78.7506!3d42.8864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s759+Dick+Rd%2C+Cheektowaga%2C+NY+14225!5e0!3m2!1sen!2sus!4v1700000000000"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
