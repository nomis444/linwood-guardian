import Link from "next/link";
import Image from "next/image";
import { COMPANY, SOCIAL, licensingStatement } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company info */}
          <div>
            <Image
              src="/images/logo-white.jpg"
              alt="Linwood Guardian Risk Management"
              width={240}
              height={60}
              className="h-14 w-auto mb-4 brightness-200"
            />
            <p className="text-white/70 text-sm leading-relaxed mt-4">
              Independent commercial insurance agency serving Buffalo
              and Western New York with over 75 years of combined
              expertise.
            </p>
            <address className="not-italic text-sm text-white/70 mt-6 space-y-1">
              <p>{COMPANY.address.full}</p>
              <p>
                <a href={`tel:${COMPANY.phone.replace(/\D/g, "")}`} className="hover:text-teal-light transition-colors">
                  {COMPANY.phone}
                </a>
              </p>
              <p>{COMPANY.hours}</p>
            </address>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/70 hover:text-teal-light transition-colors">About Us</Link></li>
              <li><Link href="/business-insurance" className="text-white/70 hover:text-teal-light transition-colors">Business Insurance</Link></li>
              <li><Link href="/personal-insurance" className="text-white/70 hover:text-teal-light transition-colors">Personal Insurance</Link></li>
              <li><Link href="/blog" className="text-white/70 hover:text-teal-light transition-colors">Articles</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-teal-light transition-colors">Contact Us</Link></li>
            </ul>

            <h3 className="font-semibold text-white mb-4 mt-8">Commercial Lines</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/business-insurance/property-casualty" className="text-white/70 hover:text-teal-light transition-colors">Property &amp; Casualty</Link></li>
              <li><Link href="/business-insurance/professional-liability" className="text-white/70 hover:text-teal-light transition-colors">Professional Liability</Link></li>
              <li><Link href="/business-insurance/management-liability" className="text-white/70 hover:text-teal-light transition-colors">Management Liability</Link></li>
              <li><Link href="/business-insurance/workers-comp" className="text-white/70 hover:text-teal-light transition-colors">Workers&apos; Comp</Link></li>
              <li><Link href="/business-insurance/bonds" className="text-white/70 hover:text-teal-light transition-colors">Bonds</Link></li>
            </ul>
          </div>

          {/* Trust signals */}
          <div>
            <h3 className="font-semibold text-white mb-4">Trusted &amp; Accredited</h3>
            <div className="flex items-start gap-4 mb-6">
              <Image
                src="/images/bbb-qr.jpeg"
                alt="BBB Accredited Business - Linwood Guardian Risk Management LLC"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>BBB A+ Accredited Business</li>
              <li>Big I New York Member</li>
              <li>{licensingStatement()}</li>
            </ul>

            <h3 className="font-semibold text-white mb-3 mt-8">Connect</h3>
            <div className="flex gap-3">
              {SOCIAL.linkedin && (
                <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors" aria-label="Linwood Guardian on LinkedIn">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              )}
              {SOCIAL.facebook && (
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors" aria-label="Linwood Guardian on Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
