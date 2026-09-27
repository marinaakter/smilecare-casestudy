import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apixel.net"),
  title: "SmileCare Dental Platform — Apixel Engineering Case Study",
  description:
    "A high-performance, full-stack dental clinic platform unifying public patient discovery, friction-free appointment scheduling, self-service patient portals, and clinic practice management (PMS). Engineered by Apixel.",
  keywords: [
    "SmileCare",
    "Apixel",
    "Dental Clinic Management",
    "Practice Management System",
    "PMS",
    "Next.js Healthcare Case Study",
    "Full-Stack Web Application",
  ],
  authors: [{ name: "Apixel", url: "https://apixel.net/" }],
  creator: "Apixel",
  publisher: "Apixel",
  openGraph: {
    title: "SmileCare Dental Platform — Apixel Case Study",
    description:
      "A high-performance, full-stack dental clinic platform unifying public patient discovery, friction-free appointment scheduling, self-service patient portals, and clinic practice management.",
    url: "https://apixel.net/case-studies/smilecare",
    siteName: "Apixel Digital Products",
    images: [
      {
        url: "/screenshots/dental7.png",
        width: 1200,
        height: 630,
        alt: "SmileCare Dental Platform Interface",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileCare Dental Platform — Apixel Case Study",
    description:
      "A high-performance, full-stack dental clinic platform unifying public discovery, booking engine, patient portal, and clinic PMS.",
    images: ["/screenshots/dental7.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#070a12] text-[#e2e8f0] font-[family-name:var(--font-body)] selection:bg-[#0ea5e9]/30 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
