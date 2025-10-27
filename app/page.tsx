"use client"
import WaitlistForm from "@/components/waitlist-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-6 backdrop-blur-sm bg-background/80 border-b border-border/50">
        <div className="mx-auto">
          <h1 className="text-xl md:text-3xl max-w-4xl mx-auto font-bold tracking-tight">SearchAI</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20 md:py-64 relative mt-20">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
            backgroundSize: "60px 60px",
          }}
        />
        <div className="w-full max-w-5xl text-center space-y-8 animate-fade-in-up relative z-10">
          {/* Main Tagline */}
          <div className="space-y-4 flex flex-col items-center">
            <p className="text-2xl md:text-4xl text-primary max-w-4xl leading-relaxed">
              The answers you seek start with the right questions.
            </p>
            <p className="text-base md:text-xl text-muted-foreground/80 font-light max-w-2xl mx-auto">
              SearchAI helps you discover why you are the way you are and how to use that awareness to shape your life.
            </p>
          </div>

          {/* Email Signup */}
          <div className="pt-8">
            <WaitlistForm />
          </div>

          {/* Scroll Indicator */}
          <div className="pt-24 animate-pulse-subtle hidden md:block">
            <p className="text-xs tracking-widest text-muted-foreground/60 uppercase">Scroll to explore</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 md:py-32 border-t border-border relative">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Feature 1 */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground">Self-Discovery</h3>
              <p className="sm:text-lg font-light leading-relaxed">
                Uncover patterns in your thoughts and emotions through thoughtfully crafted questions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground">Emotional Awareness</h3>
              <p className="sm:text-lg font-light leading-relaxed">
                Develop deeper emotional intelligence and understand your inner landscape.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground">For High Performers</h3>
              <p className="sm:text-lg font-light leading-relaxed">
                Built for ambitious individuals who value growth and self-awareness.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground">Thoughtful Design</h3>
              <p className="sm:text-lg font-light leading-relaxed">
                A minimalist experience that puts your journey of discovery first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 md:py-32 border-t border-border relative">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23ffffff" fillOpacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
          <h2 className="text-2xl md:text-4xl font-light tracking-tight">Ready to begin your journey?</h2>
          <p className="text-base md:text-lg text-muted-foreground font-light">
            Join our waitlist and be among the first to experience the SearchAI.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-12 md:py-16 mt-auto relative">
          <p className="text-sm text-muted-foreground text-center">© 2025 SearchAI. All rights reserved.</p>
      </footer>
    </main>
  )
}
