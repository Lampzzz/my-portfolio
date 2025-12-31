import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Your Name — Frontend Developer",
  description: "Frontend developer specializing in React, Next.js, and TypeScript. Building performant, accessible, and beautiful web applications.",
  keywords: ["frontend developer", "React", "Next.js", "TypeScript", "web development", "portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — Frontend Developer",
    description: "Frontend developer specializing in React, Next.js, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${sourceSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
