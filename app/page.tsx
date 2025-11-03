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
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
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
      <div className="w-full max-w-4xl text-center space-y-12 relative z-10">
        {/* Hero heading - staggered animation */}
        <div className={`space-y-4 ${!prefersReducedMotion ? "animate-fade-in-up" : ""}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
            <span className={`block ${!prefersReducedMotion ? "animate-fade-in-up" : ""}`}>
              Creating a one-of-a-kind experience
            </span>
            <span
              className={`block ${!prefersReducedMotion ? "animate-fade-in-up" : ""}`}
              style={!prefersReducedMotion ? { animationDelay: "0.1s" } : {}}
            >
              For your mind
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg md:text-xl text-muted-foreground/80 font-light max-w-2xl mx-auto ${
              !prefersReducedMotion ? "animate-fade-in-up" : ""
            }`}
            style={!prefersReducedMotion ? { animationDelay: "0.2s" } : {}}
          >
            Reflect. Grow. Understand yourself deeper.
          </p>
        </div>

        {/* Waitlist form */}
        <div
          className={`pt-4 max-w-md mx-auto ${!prefersReducedMotion ? "animate-fade-in-up" : ""}`}
          style={!prefersReducedMotion ? { animationDelay: "0.3s" } : {}}
        >
          <WaitlistForm />
        </div>
      </div>
    </main>
  )
}
