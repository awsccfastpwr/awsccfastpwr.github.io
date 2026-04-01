import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AWS Cloud Club FAST Peshawar",
    template: "%s | AWS Cloud Club FAST Peshawar",
  },
  description:
    "The official AWS Cloud Club at FAST National University Peshawar. Build, learn, and deploy cloud-native solutions.",
  keywords: [
    "AWS",
    "Cloud Club",
    "FAST Peshawar",
    "NUCES",
    "cloud computing",
    "student developers",
    "AWS community",
  ],
  openGraph: {
    title: "AWS Cloud Club FAST Peshawar",
    description:
      "Cloud Wizards in Training — The AWS CC @ FAST PWR. Join our community of builders.",
    url: "https://awsccfastpwr.github.io",
    siteName: "AWS Cloud Club FAST Peshawar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AWS Cloud Club FAST Peshawar",
    description:
      "Cloud Wizards in Training — Build, learn, and deploy with AWS at FAST Peshawar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
