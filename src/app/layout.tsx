import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: "Maha Elsheikhe | Frontend & Full-Stack Developer",
  description:
    "Portfolio of Maha Elsheikhe, a Frontend & Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web applications.",
  openGraph: {
    title: "Maha Elsheikhe | Frontend & Full-Stack Developer",
    description:
      "Portfolio of Maha Elsheikhe, a Frontend & Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web applications.",
    siteName: "Maha Elsheikhe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maha Elsheikhe | Frontend & Full-Stack Developer",
    description:
      "Portfolio of Maha Elsheikhe, a Frontend & Full-Stack Developer specializing in React, Next.js, TypeScript, and modern web applications.",
  },
};

const noFlashThemeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashThemeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
