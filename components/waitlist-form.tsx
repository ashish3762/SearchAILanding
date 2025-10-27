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

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.")
      setIsLoading(false)
      return
    }

    try {
      // Submit to Google Apps Script
      const response = await fetch("https://script.google.com/macros/s/AKfycby5ufxvHb1-j68M5hGfeZbYRRIT3yGSpznbJGKq9os5zzH7GgNEK_6Uhjd21vYrJ_j_2g/exec", {
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
        setError("Something went wrong. Please try again.")
      }
    } catch (err) {
      console.error("Submission error:", err)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
          className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground transition-colors"
        />
        <Button
          type="submit"
          disabled={isLoading || !email}
          className="bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 whitespace-nowrap"
        >
          {isLoading ? "Joining..." : "Join the waitlist"}
        </Button>
      </div>
      {isSubmitted && (
        <p className="text-sm text-muted-foreground mt-3 animate-fade-in">
          ✓ Thanks for joining! Check your email for updates.
        </p>
      )}
      {error && <p className="text-sm text-destructive mt-3">{error}</p>}
    </form>
  )
}
