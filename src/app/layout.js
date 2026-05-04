import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Developer Kabya",
  description:
    "Explore Kabya Kishor Halder's portfolio. Specializing in building polished high-production ready systems and scalable, user-focused products with modern technologies.",
  keywords: [
    "Kabya Kishor Halder",
    "Portfolio",
    "Full-Stack Developer",
    "Next.js Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Kabya Kishor Halder" }],
  creator: "Kabya Kishor Halder",

  openGraph: {
    title: "KABYA | Portfolio",
    description:
      "Building polished high-production ready systems and scalable, user-focused products.",
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import CursorFollower from "@/components/CursorFollower";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <SmoothScroll>
          <CursorFollower />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
