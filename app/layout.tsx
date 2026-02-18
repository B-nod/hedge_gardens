import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "reflect-metadata";
import Navbar from "../components/Navbar";
import FooterSection from "../section/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Hedge Gardening And Van Services",
=======
  title: "Landscaper",
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
  description:
    "Professional landscaping services to create and maintain beautiful outdoor environments",
};

<<<<<<< HEAD
const pingSitemap = async () => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (!appUrl) return;

  const sitemapUrl = `${appUrl}/sitemap.xml`;
  try {
    await Promise.all([
      fetch(
        `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
      ),
      fetch(
        `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
      ),
    ]);
  } catch (error) {
    console.error("Error pinging sitemap:", error);
  }
};

if (process.env.NODE_ENV === "production") {
  pingSitemap();
}

=======
>>>>>>> 058d73a796481a7533eeced7aa3c9a4d72162dae
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
