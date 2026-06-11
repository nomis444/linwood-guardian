export const COMPANY = {
  name: "Linwood Guardian Risk Management",
  legalName: "Linwood Guardian Risk Management LLC",
  tagline: "Protecting Your Greatest Assets",
  phone: "(716) 710-8910",
  address: {
    street: "759 Dick Rd",
    city: "Cheektowaga",
    state: "NY",
    zip: "14225",
    full: "759 Dick Rd, Cheektowaga, NY 14225",
  },
  hours: "Monday – Friday, 9:00 AM – 5:00 PM",
  founded: "2022",
  experience: "65+",
  url: "https://linwoodguardian.com",
} as const;

export const TEAM = {
  tamara: {
    name: "Tamara Boyle",
    credentials: "ACSR, AINS",
    title: "Managing Partner, Commercial Insurance",
    phone: "(716) 710-8910",
    email: "tboyle@linwoodguardian.com",
    linkedin: "https://www.linkedin.com/in/tamaraboyle1",
  },
  joe: {
    name: "Joe Mesi",
    credentials: "",
    title: "Principal",
    phone: "(716) 626-3355",
    email: "JoeMesi@linwoodguardian.com",
    linkedin: "https://www.linkedin.com/in/joe-mesi-6b285966/",
  },
} as const;

export const MESI_AGENCY = {
  name: "Mesi Agency Inc.",
  phone: "(716) 626-3355",
  relationship: "Sister agency handling personal insurance lines",
} as const;

export const SERVICE_AREAS = [
  "Buffalo",
  "Cheektowaga",
  "Amherst",
  "Tonawanda",
  "West Seneca",
  "Orchard Park",
  "Lancaster",
  "Depew",
  "Hamburg",
  "Williamsville",
  "Western New York",
  "New York State",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Business Insurance",
    href: "/business-insurance",
    children: [
      { label: "Property & Casualty", href: "/business-insurance/property-casualty" },
      { label: "Professional Liability", href: "/business-insurance/professional-liability" },
      { label: "Management Liability", href: "/business-insurance/management-liability" },
      { label: "Workers' Comp & Disability", href: "/business-insurance/workers-comp" },
      { label: "Bonds", href: "/business-insurance/bonds" },
    ],
  },
  { label: "Personal Insurance", href: "/personal-insurance" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const COVERAGE_TYPES = [
  "Property & Casualty",
  "Professional Liability",
  "Management Liability",
  "Workers' Compensation",
  "Bonds",
  "Cyber Insurance",
  "Other",
] as const;
