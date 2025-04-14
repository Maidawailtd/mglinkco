import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@/components/analytics";
import { AuthProvider } from "@/hooks/use-auth";
import { ReactNode } from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MGLink Connect - Freelance Marketplace",
  description: "Connect with top freelancers and find your next project on MGLink Connect.",
  keywords: "freelance, marketplace, remote work, hire freelancers, find projects, gig economy",
  authors: [{ name: "MGLink Connect Team" }],
  creator: "MGLink Connect",
  publisher: "MGLink Connect",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mglinkconnect.com",
    title: "MGLink Connect - Freelance Marketplace",
    description: "Connect with top freelancers and find your next project on MGLink Connect.",
    siteName: "MGLink Connect",
  },
  twitter: {
    card: "summary_large_image",
    title: "MGLink Connect - Freelance Marketplace",
    description: "Connect with top freelancers and find your next project on MGLink Connect.",
    creator: "@mglinkconnect",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
            <Analytics />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

