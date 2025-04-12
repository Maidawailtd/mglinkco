import { Analytics } from "@vercel/analytics/react";
import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Footer } from "@/components/footer";
import { ErrorBoundary } from "@/components/error-boundary";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { AuthProvider } from "@/lib/auth";

export const metadata: Metadata = {
  title: {
    default: "MGLink Connect - Global Freelancing Platform",
    template: "%s | MGLink Connect",
  },
  description:
    "Connect with top talent worldwide. Post jobs, find work, and collaborate on projects with MGLink Connect.",
  keywords: ["freelance", "remote work", "jobs", "hiring", "freelancers", "global talent", "MGLink Connect"],
  authors: [{ name: "MGLink Connect" }],
  creator: "MGLink Connect",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mglink-connect.com",
    title: "MGLink Connect - Global Freelancing Platform",
    description:
      "Connect with top talent worldwide. Post jobs, find work, and collaborate on projects with MGLink Connect.",
    siteName: "MGLink Connect",
    images: [
      {
        url: "/images/logo-mglink.png",
        width: 1200,
        height: 1200,
        alt: "MGLink Connect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MGLink Connect - Global Freelancing Platform",
    description:
      "Connect with top talent worldwide. Post jobs, find work, and collaborate on projects with MGLink Connect.",
    images: ["/images/logo-mglink.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <ErrorBoundary>
              <div className="flex min-h-screen flex-col">
                <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <div className="container flex h-16 items-center">
                    <MainNav />
                    <MobileNav />
                  </div>
                </header>
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <Toaster />
            </ErrorBoundary>
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
