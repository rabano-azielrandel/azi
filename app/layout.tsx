import type { Metadata } from "next";
import { Inter, Oswald, Caveat, Condiment } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesWrapper from "@/components/ui/ParticlesWrapper";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const condiment = Condiment({
  subsets: ["latin"],
  variable: "--font-condiment",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Aziel Randel Rabano | Developer Portfolio",
    template: "%s | Aziel Randel Rabano",
  },
  description:
    "Full-stack developer. Personal web portfolio of Aziel Randel, featuring projects built with Next.js and Tailwind.",
  keywords: [
    "Aziel Randel Rabano",
    "Aziel Rabano",
    "Portfolio",
    "Web Developer",
    "Full Stack Developer",
    "Next.js",
    "React Developer",
    "Frontend Developer",
  ],
  authors: [{ name: "Aziel Randel Rabano" }],
  metadataBase: new URL("https://azi-zeta.vercel.app/"), // domain
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Aziel Randel Rabano | Developer Portfolio",
    description:
      "Full-stack developer. Personal web portfolio of Aziel Randel, featuring projects built with Next.js and Tailwind.",
    url: "https://azi-zeta.vercel.app/",
    siteName: "Aziel Randel Rabano",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Aziel Randel Rabano Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aziel Randel Rabano | Developer Portfolio",
    description:
      "Full-stack developer specializing in modern web apps and UI/UX.",
    images: ["/images/preview.png"],
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${caveat.variable} ${condiment.variable}`}
    >
      <body className="w-screen antialiased font-[var(--font-inter)] overflow-x-hidden">
        <ParticlesWrapper />
        <Header />

        {children}

        <Footer />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js"
          strategy="afterInteractive"
          integrity="sha512-wC/cunGGDjXSl9OHUH0RuqSyW4YNLlsPwhcLxwWW1CR4OeC2E1xpcdZz2DeQkEmums41laI+eGMw95IJ15SS3g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
