import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://data-john.netlify.app/"),
  title: "John Lee | Data Analyst | Data Scientist",
  description:
    "Experienced data analyst with over 8 years of expertise in data analysis, statistical techniques, and business intelligence, and Machine Learning. Proven track record in data-driven decision making and operational efficiency improvements.",
  keywords: [
    "John Lee",
    "Data Analyst",
    "Business Intelligence",
    "Data Visualization",
    "Machine Learning",
    "Python",
    "SQL",
    "R",
  ],
  openGraph: {
    title: "John Lee | Data Analyst | Data Scientist",
    description:
      "Experienced data analyst with over 8 years of expertise in data analysis, statistical techniques, and business intelligence, and Machine Learning. Proven track record in data-driven decision making and operational efficiency improvements.",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "https://data-john.netlify.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
