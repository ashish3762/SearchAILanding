"use client"

import { useState, useEffect, useRef } from "react"
import WaitlistForm from "@/components/waitlist-form"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [prefersReducedMotion])

  return (
  <main className="bg-background text-foreground flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden" style={{ height: "calc(100vh - 64px)" }}>
      {/* Background radial glow that follows mouse */}
      {!prefersReducedMotion && (
        <div
          className="fixed inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(145, 145, 145, 0.06), transparent 40%)`,
          }}
        />
      )}

      {/* Main content */}
      <div className="w-full max-w-4xl text-center space-y-8 relative z-10">
        {/* Brand name - largest text */}
        <div className={`${!prefersReducedMotion ? "animate-fade-in-up" : ""}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            SearchAI
          </h1>
        </div>

        {/* Hero heading - staggered animation */}
        <div className={`space-y-3 ${!prefersReducedMotion ? "animate-fade-in-up" : ""}`} style={!prefersReducedMotion ? { animationDelay: "0.1s" } : {}}>
          <h2 className="text-l md:text-xl lg:text-2xl tracking-wide leading-tight font-extralight">
            <span className="block">
              Creating a one-of-a-kind experience for your mind
            </span>
          </h2>
        </div>

        {/* Waitlist form */}
        <div
          className={`pt-4 max-w-md mx-auto ${!prefersReducedMotion ? "animate-fade-in-up" : ""}`}
          style={!prefersReducedMotion ? { animationDelay: "0.2s" } : {}}
        >
          <WaitlistForm />
        </div>
      </div>
    </main>
  )
}
