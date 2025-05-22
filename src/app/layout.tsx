import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import { Toaster } from "@/components/ui/toaster"; // Import Toaster for form feedback

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Remtech Labs - Innovation Meets Intelligence",
  description:
    "Empowering your business with breakthrough AI, mobile, and custom application solutions.",
  // Add more metadata later: favicons, open graph, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
        <Toaster /> {/* Add Toaster component here */}
      </body>
    </html>
  );
}
