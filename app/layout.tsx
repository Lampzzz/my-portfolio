import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "John Doe",
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
        className={`${inter.variable} ${sourceSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
