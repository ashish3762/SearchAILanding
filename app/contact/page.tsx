import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us - SearchAI | Get in Touch",
  description: "Have questions or feedback about SearchAI? Reach out to our team. We'd love to hear from you.",
  openGraph: {
    title: "Contact SearchAI - Get in Touch",
    description: "Have questions or feedback about SearchAI? Reach out to our team.",
    url: "https://searchai.com/contact",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-2xl mx-auto">
          <ContactForm />

          {/* Contact Info */}
          <div className="mt-16 pt-16 border-t border-border space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-xl font-light tracking-tight text-center">Other Ways to Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 text-center">
                <h3 className="text-sm tracking-widest uppercase text-muted-foreground">Email</h3>
                <p className="font-light text-foreground/80">hello@searchai.com</p>
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-sm tracking-widest uppercase text-muted-foreground">Response Time</h3>
                <p className="font-light text-foreground/80">Within 24-48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
