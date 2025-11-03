"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        const errorData = await response.json().catch(() => ({}))
        setError(errorData.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error("Submission error:", err)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="email-input" className="sr-only">
          Email address
        </label>
        <Input
          id="email-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          aria-label="Email address for waitlist"
          className="flex-1 bg-card/50 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/50 focus:ring-2 focus:ring-foreground/20 transition-all duration-180"
        />
        <Button
          type="submit"
          disabled={isLoading || !email}
          className="bg-foreground text-background hover:bg-foreground/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-180 whitespace-nowrap"
        >
          {isLoading ? "Joining..." : "Join the waitlist"}
        </Button>
      </div>
      
      {/* Small line under input */}
      <p className="text-xs text-muted-foreground/60 text-center">Limited early access. By invitation only.</p>
      
      {isSubmitted && (
        <p className="text-sm text-muted-foreground mt-3 animate-fade-in">
          ✓ You're on the list. We can't wait to show you what's coming.
        </p>
      )}
      {error && <p className="text-sm text-destructive mt-3">{error}</p>}
    </form>
  )
}
