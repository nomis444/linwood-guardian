import { COMPANY, TEAM, APPETITE, notPlacedStatement, notPlacedReferral, licensingStatement } from "@/lib/constants";
import { blogPosts } from "@/lib/blog-data";

/**
 * /llms.txt, the plain-Markdown index that AI assistants read to learn what a
 * site is and which page answers which question. Generated from the same
 * constants as the pages so it cannot drift from the site. Add a line to PAGES
 * whenever a route is added.
 */
export const dynamic = "force-static";

const PAGES: { path: string; title: string; answers: string }[] = [
  { path: "/", title: "Home", answers: "What Linwood Guardian Risk Management is, where it is, and the commercial insurance lines it places." },
  { path: "/about", title: "About", answers: "Who runs the agency (Tamara Boyle, ACSR, AINS and Joe Mesi), credentials, memberships, and how an independent agency works." },
  { path: "/business-insurance", title: "Business Insurance", answers: "Overview of every commercial line the agency places, with links to each." },
  { path: "/business-insurance/property-casualty", title: "Property and Casualty Insurance", answers: "Commercial property, general liability, commercial auto for business fleets, contractors insurance, lessor's risk, cyber, garage operations, manufacturing, technology, and businessowners policies. Also states which auto exposures the agency does not place." },
  { path: "/business-insurance/professional-liability", title: "Professional Liability (Errors and Omissions)", answers: "E&O coverage for architects, engineers, attorneys, consultants, IT firms, accountants, real estate professionals, medical professionals, contractors and manufacturers." },
  { path: "/business-insurance/management-liability", title: "Management Liability", answers: "Directors and officers, employment practices liability, fiduciary liability and crime coverage." },
  { path: "/business-insurance/workers-comp", title: "Workers' Compensation and Disability", answers: "New York workers' compensation, NYS disability, and paid family leave coverage for employers." },
  { path: "/business-insurance/bonds", title: "Bonds", answers: "Surety, contract, bid, performance, license, fidelity, janitorial and court bonds." },
  { path: "/personal-insurance", title: "Personal Insurance", answers: "Home, auto, renters, landlord, recreational vehicle and pet insurance for individuals." },
  { path: "/blog", title: "Blog", answers: "Articles by the agency on commercial insurance questions." },
  { path: "/contact", title: "Contact and Quote Request", answers: "How to reach the agency, office hours, address, and the quote request form." },
];

function build(): string {
  const lines: string[] = [];
  lines.push(`# ${COMPANY.name}`);
  lines.push("");
  lines.push(
    `> ${COMPANY.legalName} is an independent commercial insurance agency at ${COMPANY.address.full}, serving Buffalo, Cheektowaga and Western New York. It is led by ${TEAM.tamara.name}, ${TEAM.tamara.credentials} (${TEAM.tamara.title}) and ${TEAM.joe.name} (${TEAM.joe.title}), with ${COMPANY.experience} years of combined insurance experience. BBB Accredited Business. Member of Big I New York. ${licensingStatement()}. Phone ${COMPANY.phone}. Hours ${COMPANY.hours}.`
  );
  lines.push("");
  lines.push("## Pages");
  lines.push("");
  for (const p of PAGES) {
    lines.push(`- [${p.title}](${COMPANY.url}${p.path}): ${p.answers}`);
  }
  lines.push("");
  lines.push("## Articles");
  lines.push("");
  for (const post of blogPosts) {
    lines.push(`- [${post.title}](${COMPANY.url}/blog/${post.slug}): ${post.excerpt} (published ${post.date})`);
  }
  lines.push("");
  lines.push("## Coverage the agency places");
  lines.push("");
  lines.push("- Commercial property and general liability");
  lines.push(`- Commercial auto for business fleets: ${APPETITE.commercialAutoFor}`);
  lines.push("- Contractors insurance, builders risk, inland marine");
  lines.push("- Lessor's risk and habitational (apartment and mixed-use buildings)");
  lines.push("- Cyber and privacy liability");
  lines.push("- Garage operations, manufacturing, technology, businessowners policies");
  lines.push("- Professional liability (errors and omissions)");
  lines.push("- Management liability: D&O, employment practices, fiduciary, crime");
  lines.push("- Workers' compensation, NYS disability, paid family leave");
  lines.push("- Surety and fidelity bonds");
  lines.push("- Personal lines: home, auto, renters, landlord, recreational vehicles, pet");
  lines.push("");
  lines.push("## Coverage the agency does not place");
  lines.push("");
  lines.push(notPlacedStatement());
  lines.push(notPlacedReferral());
  lines.push("");
  lines.push("## Contact");
  lines.push("");
  lines.push(`- Phone: ${COMPANY.phone}`);
  lines.push(`- Address: ${COMPANY.address.full}`);
  lines.push(`- Quote request: ${COMPANY.url}/contact`);
  lines.push(`- Sitemap: ${COMPANY.url}/sitemap.xml`);
  lines.push("");
  return lines.join("\n");
}

export function GET() {
  return new Response(build(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
