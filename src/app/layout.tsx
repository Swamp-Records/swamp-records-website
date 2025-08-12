import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swamp Records",
  description: "Independent record label featuring indie rock artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/graphics/buboy.webp" as="image" />
        <link rel="preload" href="/graphics/mystery.webp" as="image" />
        <link rel="preload" href="/graphics/nancys.webp" as="image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZTWG6RMCES"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZTWG6RMCES');
          `}
        </Script>
        {/* Navigation at the top */}
        <Navigation />

        {/* Main page content */}
        <main>{children}</main>

        {/* Footer at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
