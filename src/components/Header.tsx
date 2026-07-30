"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 sm:h-36">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-white.jpg"
              alt="Linwood Guardian Risk Management"
              width={431}
              height={218}
              className="h-24 sm:h-32 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-text-primary hover:text-teal transition-colors rounded-md"
                  >
                    {link.label}
                    <svg
                      className="inline w-3.5 h-3.5 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-border rounded-lg shadow-lg py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-text-primary hover:bg-sky hover:text-teal transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-text-primary hover:text-teal transition-colors rounded-md"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-teal text-white text-sm font-semibold rounded-lg hover:bg-teal-light transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-white" aria-label="Mobile navigation">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 text-sm font-medium text-text-primary hover:bg-sky rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {"children" in link &&
                  link.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block pl-8 pr-3 py-2 text-sm text-text-secondary hover:bg-sky rounded-md"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
              </div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 px-5 py-3 bg-teal text-white text-sm font-semibold rounded-lg text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
