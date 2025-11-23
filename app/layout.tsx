import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/Header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const dmSerifDisplay = DM_Serif_Display({ 
  weight: '400',
  style: 'italic',
  subsets: ["latin"],
  variable: '--font-dm-serif'
})

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
      <body className={`${inter.className} ${dmSerifDisplay.variable} font-sans antialiased bg-background text-foreground`}>
        <Header />
        {children}
        <footer className="border-t border-border py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Tagline */}
              <p className="text-sm text-muted-foreground">Built by thinkers, for thinkers.</p>
              {/* Copyright */}
              <p className="text-sm text-muted-foreground">© 2025 SearchAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
