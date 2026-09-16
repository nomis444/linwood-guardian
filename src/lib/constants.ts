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
  experience: "75+",
  url: "https://linwoodguardian.com",
} as const;

export const TEAM = {
  tamara: {
    name: "Tamara Boyle",
    credentials: "ACSR, AINS",
    title: "Co-Principal, Commercial Insurance",
    phone: "(716) 710-8910",
    email: "customerservice@linwoodguardian.com",
    linkedin: "https://www.linkedin.com/in/tamaraboyle1",
    // Headshot supplied by Tamara 2026-08-18, installed 2026-08-19.
    // Source is her 512x640 portrait, square-cropped to 512x512 with a slight
    // upward bias so the circular mask centres on her face rather than clipping
    // the top of her head. Empty falls back to initials.
    photo: "/images/tamara-boyle.jpg",
  },
  joe: {
    name: "Joe Mesi",
    credentials: "",
    title: "Principal",
    phone: "(716) 710-8910",
    email: "customerservice@linwoodguardian.com",
    linkedin: "https://www.linkedin.com/in/joe-mesi-6b285966/",
    photo: "",
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

/**
 * Google Analytics 4. Measurement ID supplied by the client 2026-08-09.
 * Empty string disables analytics everywhere — nothing else needs changing.
 */
export const ANALYTICS = {
  gaMeasurementId: "G-TH3ZF89CDS",
} as const;

export const PET_INSURANCE = {
  // Prudent Pet quoting link with Linwood's promo code, from Tamara's 2026-06-03 email.
  // Leave empty and the "Get a Pet Insurance Quote" button will not render.
  quoteUrl: "https://app.prudentpet.com/?promoCode=03806150NY",
} as const;

export const LICENSING = {
  homeState: "New York",
  // Linwood Guardian is licensed beyond NYS, but the specific states have not
  // been provided yet (asked Tamara 2026-07-27). Do NOT populate this from
  // assumption — a licensure claim for a state they are not admitted in is a
  // regulatory problem, not a copy problem.
  //
  // NOTE: Tamara's email signature carries "Doing business in CA as Linwood
  // Guardian Insurance Agency #6018396". That is a CA DBA disclosure and it
  // implies a CA license, but she has not asked for it on the site and a
  // signature block is not an instruction to publish a regulated claim.
  // Confirm with her before adding either the state or the disclosure.
  additionalStates: [] as readonly string[],
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
  "Commercial Auto",
  "Professional Liability",
  "Management Liability",
  "Workers' Compensation",
  "Bonds",
  "Cyber Insurance",
  "Other",
] as const;

/**
 * Underwriting appetite, in one place so the P&C page copy, the FAQ (which feeds
 * FAQPage schema), the quote form screening, the KATE chat prompt and llms.txt
 * all say the same thing.
 *
 * Why this exists (2026-09-16): ChatGPT started sending Tamara business-quote
 * calls about ten days after the domain cutover, and several wanted livery,
 * taxi or truck hauling coverage she has no markets for. The site never named
 * those lines; assistants inferred them from "commercial auto". Nobody can
 * remove an agency from an assistant's answer, so the lever is to state plainly
 * what Linwood does NOT place, and to screen on the site before a call happens.
 *
 * PLACEHOLDER WORDING. The gate email to Tamara (AISEO spec, section 4, item 2)
 * asks for the exact list. Livery, taxi and for-hire trucking are confirmed from
 * her email; rideshare, limousine, tow and non-emergency medical transport are
 * reasonable neighbours and should be trimmed or extended to her answer.
 * `referral` stays empty until she names an agency she sends these callers to.
 */
export const APPETITE = {
  /** Commercial auto: who Linwood writes it for. */
  commercialAutoFor:
    "contractors, landscapers, HVAC and trades fleets, local delivery, sales and service organizations, and any Western New York business that owns vehicles or whose employees drive for work",
  /** Lines Linwood does not place, in the words a caller would use. */
  notPlaced: [
    "for-hire passenger transportation (taxi, livery, limousine, rideshare)",
    "for-hire trucking and hauling",
  ] as readonly string[],
  /** Set to an agency name (and optionally phone) once Tamara names one. */
  referral: "",
} as const;

/** The one-sentence negative statement, shared by every surface. */
export function notPlacedStatement(): string {
  const lines = APPETITE.notPlaced.join(" or ");
  return `Linwood Guardian Risk Management does not place ${lines}.`;
}

/** What to tell someone whose business is one of the lines we do not place. */
export function notPlacedReferral(): string {
  return APPETITE.referral
    ? `If that is your business, ${APPETITE.referral} can help you.`
    : "If that is your business, a specialty transportation agency will serve you better than we can.";
}

/**
 * Quote form follow-up when Commercial Auto is selected. The `declined` options
 * replace the submit button with the appetite message, fire the GA4
 * `out_of_appetite` event, and never reach the Make webhook.
 */
export const VEHICLE_USE_OPTIONS = [
  { value: "owned-leased", label: "Owned or leased business vehicles", declined: false },
  { value: "employee-personal", label: "Employees driving personal vehicles for work", declined: false },
  { value: "delivery", label: "Delivery", declined: false },
  { value: "for-hire-passenger", label: "For-hire passenger (taxi, livery, rideshare)", declined: true },
  { value: "for-hire-trucking", label: "For-hire trucking or hauling", declined: true },
] as const;

export type VehicleUse = (typeof VEHICLE_USE_OPTIONS)[number]["value"];

export function isDeclinedVehicleUse(value: unknown): boolean {
  return VEHICLE_USE_OPTIONS.some((o) => o.value === value && o.declined);
}
