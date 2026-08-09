import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { KateChatbot } from "@/components/KateChatbot";
import { JsonLd } from "@/components/JsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";
import { generateInsuranceAgencySchema } from "@/lib/schema";
import { ANALYTICS } from "@/lib/constants";

const heading = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const body = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Linwood Guardian Risk Management | Commercial Insurance Buffalo NY",
    template: "%s | Linwood Guardian Risk Management",
  },
  description:
    "Buffalo's trusted commercial insurance experts with 35+ years combined experience. Property & casualty, professional liability, workers' comp, bonds, and cyber insurance for businesses across Western New York.",
  keywords: [
    "commercial insurance Buffalo NY",
    "business insurance Buffalo NY",
    "workers comp Western NY",
    "professional liability insurance Buffalo",
    "surety bonds New York",
    "cyber insurance Buffalo",
    "management liability insurance",
    "independent insurance agency Buffalo",
    "Linwood Guardian Risk Management",
    "commercial insurance agent near me",
  ],
  openGraph: {
    title: "Linwood Guardian Risk Management | Commercial Insurance Buffalo NY",
    description:
      "Independent commercial insurance agency in Buffalo, NY with 35+ years of combined expertise. Protecting businesses across Western New York.",
    url: "https://linwoodguardian.com",
    siteName: "Linwood Guardian Risk Management",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linwood Guardian Risk Management",
    description:
      "Buffalo's trusted commercial insurance experts. 35+ years combined experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col">
        <JsonLd data={generateInsuranceAgencySchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-teal focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <KateChatbot />
        <Footer />
      </body>
      {/*
        Google Analytics 4 (client request 2026-08-09). Uses Next's official
        GoogleAnalytics component rather than a raw gtag snippet: it loads the
        same gtag.js, and it also fires a page_view on App Router client-side
        navigation, which a bare <script> tag in the layout would miss because
        the layout never re-executes between routes.
      */}
      {ANALYTICS.gaMeasurementId && (
        <GoogleAnalytics gaId={ANALYTICS.gaMeasurementId} />
      )}
    </html>
  );
}
