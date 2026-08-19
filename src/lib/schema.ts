import { COMPANY, TEAM, SOCIAL } from "./constants";

export function generateInsuranceAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    description:
      "Independent commercial insurance agency in Buffalo, NY with over 75 years of combined expertise. Specializing in property & casualty, professional liability, management liability, workers' compensation, bonds, and cyber insurance for businesses across Western New York.",
    url: COMPANY.url,
    telephone: COMPANY.phone,
    // sameAs ties the verified social profiles to this entity, which is how
    // search engines and AI assistants confirm they are the same business.
    // Empty entries are stripped so an unset profile never emits a dead link.
    sameAs: [SOCIAL.linkedin, SOCIAL.facebook].filter(Boolean),
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
    areaServed: [
      { "@type": "City", name: "Buffalo", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "City", name: "Cheektowaga", containedInPlace: { "@type": "State", name: "New York" } },
      { "@type": "AdministrativeArea", name: "Western New York" },
    ],
    knowsAbout: [
      "Commercial Insurance",
      "Property and Casualty Insurance",
      "Professional Liability Insurance",
      "Management Liability Insurance",
      "Workers Compensation Insurance",
      "Surety Bonds",
      "Cyber Insurance",
      "Business Insurance",
    ],
    member: [
      { "@type": "Organization", name: "Big I New York" },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "BBB Accredited Business",
      recognizedBy: { "@type": "Organization", name: "Better Business Bureau" },
    },
    employee: [
      {
        "@type": "Person",
        name: TEAM.joe.name,
        jobTitle: TEAM.joe.title,
        telephone: TEAM.joe.phone,
        email: TEAM.joe.email,
      },
      {
        "@type": "Person",
        name: `${TEAM.tamara.name}, ${TEAM.tamara.credentials}`,
        jobTitle: TEAM.tamara.title,
        telephone: TEAM.tamara.phone,
        email: TEAM.tamara.email,
      },
    ],
  };
}

export function generateFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateArticleSchema(post: {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${COMPANY.url}/blog/${post.slug}`,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${COMPANY.url}${item.href}`,
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${COMPANY.url}${service.url}`,
    provider: {
      "@type": "InsuranceAgency",
      name: COMPANY.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.state,
        postalCode: COMPANY.address.zip,
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Western New York",
    },
  };
}
