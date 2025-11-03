import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/Header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SearchAI Reflect, Grow, and Understand Yourself Deeper",
  description: "SearchAI helps you explore your thoughts through guided conversations. Join the waitlist for a one-of-a-kind introspective AI experience.",
  keywords: "self reflection app, personal growth ai, ai journaling, self awareness tool, ai mental wellness, Ai assisted thinking app, mindful conversation app",
  generator: "v0.app",
  verification: {
    google: "hvCoWJVQJLUtNBo75rR7v0cw0HqOvHTP-4O2AaxN7xg",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SearchAI Reflect, Grow, and Understand Yourself Deeper",
    description: "SearchAI helps you explore your thoughts through guided conversations. Join the waitlist for a one-of-a-kind introspective AI experience.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-sans antialiased bg-background text-foreground`}>
        <Header />
        {children}
        <footer className="border-t border-border px-4 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-sm text-muted-foreground">© 2025 SearchAI. All rights reserved.</p>
              {/* Tagline */}
              <p className="text-sm text-muted-foreground">Built by thinkers, for thinkers.</p>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
