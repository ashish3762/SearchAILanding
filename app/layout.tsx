import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navigation from "@/components/navigation"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SearchAI - Self-Discovery for High Performers",
  description: "The answers you seek start with the right questions. Discover emotional awareness and self-discovery with SearchAI.",
  generator: "v0.app",
  openGraph: {
    title: "SearchAI - Self-Discovery for High Performers",
    description: "The answers you seek start with the right questions. Discover emotional awareness and self-discovery.",
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
        <Navigation />
        {children}
        <footer className="border-t border-border px-4 py-12 md:py-16">
          <p className="text-sm text-muted-foreground text-center">© 2025 SearchAI. All rights reserved.</p>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
