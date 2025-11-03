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
        <footer className="border-t border-border px-4 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-6">
              {/* Social Media Links */}
              <div className="flex items-center gap-6">
                <a
                  href="https://x.com/trysearchai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.reddit.com/user/trysearchai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Reddit"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/trysearch.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.threads.net/@trysearch.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Threads"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142l-.126.742a12.823 12.823 0 0 0-2.84-.133c-1.235.07-2.203.42-2.883.997-.656.559-.974 1.29-.923 2.173.047.804.487 1.474 1.233 1.889.672.374 1.547.548 2.461.492 1.34-.065 2.362-.55 3.036-1.44.524-.69.85-1.643.968-2.835l.017-.18c-.012-.213-.033-.426-.061-.638a8.995 8.995 0 0 0-.28-1.363c-.134-.448-.31-.85-.525-1.198-.216-.35-.473-.652-.767-.906a3.663 3.663 0 0 0-1.113-.606c-.445-.16-.95-.25-1.503-.268-2.088-.067-3.56.863-4.382 2.767l-.133.31-.717-.311.133-.31c.933-2.157 2.688-3.263 5.213-3.282.725.024 1.388.144 1.97.356.582.213 1.088.513 1.507.893.418.38.746.834.976 1.353.23.519.391 1.093.479 1.72.088.627.105 1.29.05 1.976a8.327 8.327 0 0 1-.325 1.802c-.17.513-.403.977-.695 1.388-.292.411-.643.77-1.048 1.072-.405.302-.863.54-1.367.71a5.76 5.76 0 0 1-1.635.272c-.596.02-1.188-.027-1.77-.14-1.33-.257-2.43-.835-3.27-1.72-.842-.885-1.378-2.056-1.595-3.486-.217-1.432-.104-2.979.337-4.605l.73.255c-.405 1.495-.515 2.92-.325 4.237.19 1.32.652 2.42 1.373 3.273.722.854 1.706 1.373 2.93 1.547.524.075 1.054.114 1.585.114h.138c.468-.01.93-.08 1.377-.207.447-.127.867-.312 1.253-.55.387-.238.737-.527 1.045-.86.307-.333.57-.705.784-1.115.213-.409.377-.853.49-1.325.112-.472.174-.97.185-1.484.011-.514-.037-1.037-.142-1.569-.105-.532-.272-1.073-.498-1.621-.226-.548-.516-1.09-.864-1.616-.35-.526-.768-1.028-1.247-1.498-1.002-.98-2.233-1.734-3.667-2.243-1.433-.51-3.047-.769-4.807-.77z"/>
                  </svg>
                </a>
              </div>
              {/* Footer text */}
              <p className="text-sm text-muted-foreground text-center">Built by thinkers, for thinkers.</p>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  )
}
