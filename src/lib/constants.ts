export const COMPANY = {
  name: "Linwood Guardian Risk Management",
  legalName: "Linwood Guardian Risk Management LLC",
  tagline: "Protecting Your Greatest Assets",
  phone: "(716) 710-8910",
  address: {
    street: "759 Dick Rd",
    city: "Buffalo",
    state: "NY",
    zip: "14225",
    full: "759 Dick Rd, Buffalo, NY 14225",
  },
  hours: "Monday – Friday, 9:00 AM – 5:00 PM",
  founded: "2022",
  experience: "35+",
  url: "https://linwoodguardian.com",
} as const;

export const TEAM = {
  tamara: {
    name: "Tamara Boyle",
    credentials: "ACSR, AINS",
    title: "Managing Partner, Commercial Insurance",
    phone: "(716) 710-8910",
    email: "customerservice@linwoodguardian.com",
    linkedin: "https://www.linkedin.com/in/tamaraboyle1",
  },
  joe: {
    name: "Joe Mesi",
    credentials: "",
    title: "Principal",
    phone: "(716) 710-8910",
    email: "customerservice@linwoodguardian.com",
    linkedin: "https://www.linkedin.com/in/joe-mesi-6b285966/",
  },
} as const;

export const PERSONAL_LINES = {
  name: "Linwood Guardian Risk Management",
  phone: "(716) 710-8910",
} as const;

export const SOCIAL = {
  // Leave a value empty and it simply will not render anywhere on the site.
  // Company profiles — NOT personal ones (client request 2026-07-30).
  linkedin: "https://www.linkedin.com/company/linwood-guardian-risk-management-llc",
  facebook: "https://www.facebook.com/Linwoodguardian/",
} as const;

export const PET_INSURANCE = {
  // Third-party pet insurance quote link — PENDING from Tamara (2026-07-30).
  // Leave empty and the "Get a Pet Insurance Quote" button will not render.
  quoteUrl: "",
} as const;

export const LICENSING = {
  homeState: "New York",
  // Only add a state once the client has confirmed it in writing — a licensure
  // claim for a state they are not admitted in is a regulatory problem, not a
  // copy problem. California confirmed by Tamara 2026-08-09 (CA DOI license
  // #6018396, supplied in her email signature).
  additionalStates: ["California"] as readonly string[],

  // California requires an agency transacting under a name other than its legal
  // name to disclose the DBA and its license number. Reproduced VERBATIM as the
  // client supplied it — this is a compliance artifact, do not reword it.
  dbaDisclosure: "Doing business in CA as Linwood Guardian Insurance Agency #6018396",
};

/** "Licensed in New York State" — plus any additional states, once confirmed. */
export function licensingStatement(): string {
  const { homeState, additionalStates } = LICENSING;
  if (additionalStates.length === 0) return `Licensed in ${homeState} State`;
  if (additionalStates.length === 1)
    return `Licensed in ${homeState} State and ${additionalStates[0]}`;
  const last = additionalStates[additionalStates.length - 1];
  const rest = additionalStates.slice(0, -1).join(", ");
  return `Licensed in ${homeState} State, ${rest}, and ${last}`;
}

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
