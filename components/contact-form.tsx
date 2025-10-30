"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.")
      setIsLoading(false)
      return
    }

    if (formData.message.length < 10) {
      setError("Please provide a message with at least 10 characters.")
      setIsLoading(false)
      return
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log("Contact form submitted:", formData)
      
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      console.error("Submission error:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      {/* Name Field */}
      <div className="space-y-3">
        <Label htmlFor="name" className="text-sm tracking-widest uppercase text-muted-foreground">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isLoading}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground transition-colors"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-3">
        <Label htmlFor="email" className="text-sm tracking-widest uppercase text-muted-foreground">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isLoading}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground/50 focus:border-foreground transition-colors"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-3">
        <Label htmlFor="message" className="text-sm tracking-widest uppercase text-muted-foreground">
          Message
        </Label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us what's on your mind..."
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isLoading}
          rows={6}
          className="w-full px-3 py-2 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading || !formData.name || !formData.email || !formData.message}
        className="w-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>

      {/* Success Message */}
      {isSubmitted && (
        <p className="text-sm text-muted-foreground text-center animate-fade-in">
          ✓ Thank you for reaching out! We'll get back to you soon.
        </p>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-sm text-destructive text-center">{error}</p>
      )}
    </form>
  )
}
