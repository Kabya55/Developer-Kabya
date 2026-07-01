import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Developer Kabya | MERN Stack & Full-Stack Developer | Kabya Kishor Halder",
  description:
    "Portfolio of Kabya Kishor Halder (Developer Kabya). Expert MERN Stack, Full-Stack, React, Next.js, and Express.js Developer building scalable, high-performance web applications.",
  keywords: [
    "Developer Kabya",
    "Kabya",
    "Kabya Kishor Halder",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Express.js Developer",
    "Software Engineer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
    "React Next.js Developer",
    "Node.js Developer",
    "Developer Portfolio",
    "Hire web developer",
    "Top React developer in Bangladesh",
    "Best React developer in Bangladesh",
    "hire MERN stack developer",
    "hire React developer",
    "hire Next.js developer",
    "hire full-stack developer",
    "freelance React developer",
    "freelance Next.js developer",
    "freelance full-stack developer",
    "Web developer portfolio",
    "Full-stack developer portfolio",
    "MERN stack developer portfolio",
    "Freelance web developer Bangladesh",
    "MERN stack developer Bangladesh",
    "React developer Bangladesh",
    "Next.js developer Bangladesh",
    "Best web development agency",
    "Best Frontend Developer",
    "Top Frontend Developer",
    "Top Full-Stack Developer",
    "Top Backend Developer",
    "Top MERN Stack Developer",
    "Top React Developer",
    "Top Next.js Developer",
    "Top Express.js Developer",
    "Top Node.js Developer",
    "Top JavaScript Developer",
    "Top Web Developer",
    "Top Software Engineer",
    "Top Freelance Developer",
    "Top Freelance Web Developer",
    "Top Freelance MERN Stack Developer",
    "Top Freelance React Developer",
    "Top Freelance Next.js Developer",
    "Top Freelance Express.js Developer",
    "Top Freelance Node.js Developer",
    "Top Freelance JavaScript Developer",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh",
    "Top Freelance Web Developer Bangladesh",
    "Top Freelance MERN Stack Developer Bangladesh",
    "Top Freelance React Developer Bangladesh",
    "Top Freelance Next.js Developer Bangladesh",
    "Top Freelance Express.js Developer Bangladesh",
    "Top Freelance Node.js Developer Bangladesh",
    "Top Freelance JavaScript Developer Bangladesh"
  ],
  authors: [{ name: "Kabya Kishor Halder" }],
  creator: "Kabya Kishor Halder",

  openGraph: {
    title: "Developer Kabya | Kabya Kishor Halder Portfolio",
    description:
      "Expert MERN Stack & Full-Stack Developer specializing in high-performance React & Next.js systems.",
    type: "website",
  },
  verification: {
    google: "H3SM-jHIblr7m4mtMXLAL0m2X858dPGrCQQ2xZWlLqg",
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import CursorFollower from "@/components/CursorFollower";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kabya Kishor Halder",
    "alternateName": ["Developer Kabya", "Kabya"],
    "url": "https://github.com/Kabya55",
    "jobTitle": "MERN Stack & Full-Stack Web Developer",
    "knowsAbout": [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "Tailwind CSS",
      "Frontend Development",
      "Backend Development",
      "Full-Stack Development"
    ],
    "description": "Professional MERN Stack & Full-Stack Developer specializing in building high-production ready web systems and scalable, user-focused digital products."
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <SmoothScroll>
          <CursorFollower />
          <Navbar />
          {children}
          {/* Footer has social links for SEO sameAs validation */}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
