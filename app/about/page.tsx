import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - SearchAI | Self-Discovery for High Performers",
  description: "Learn about SearchAI's mission to help ambitious individuals discover self-awareness through thoughtfully crafted questions and emotional intelligence.",
  openGraph: {
    title: "About SearchAI - Self-Discovery for High Performers",
    description: "Learn about SearchAI's mission to help ambitious individuals discover self-awareness through thoughtfully crafted questions.",
    url: "https://searchai.com/about",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight">
            About SearchAI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            We believe the answers you seek start with the right questions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-20 md:py-32 border-b border-border">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-sm tracking-widest uppercase text-muted-foreground">Our Mission</h2>
            <p className="text-lg md:text-xl font-light leading-relaxed">
              SearchAI is designed for high performers who understand that true success begins with self-awareness. 
              We help ambitious individuals discover why they are the way they are, and how to use that awareness 
              to shape their lives with intention.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-sm tracking-widest uppercase text-muted-foreground">Our Approach</h2>
            <p className="text-lg font-light leading-relaxed">
              We don't provide answers—we help you discover them yourself through thoughtfully crafted questions 
              that guide you toward deeper self-understanding. Our platform combines emotional intelligence 
              research with practical self-discovery tools designed for the modern high achiever.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20 md:py-32 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground">Thoughtful Design</h3>
              <p className="font-light leading-relaxed">
                Every element is intentionally crafted to minimize distraction and maximize introspection. 
                We believe simplicity creates space for depth.
              </p>
            </div>

            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground">Evidence-Based</h3>
              <p className="font-light leading-relaxed">
                Our approach is grounded in research from psychology, neuroscience, and emotional intelligence 
                studies, ensuring you get tools that actually work.
              </p>
            </div>

            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground">Privacy First</h3>
              <p className="font-light leading-relaxed">
                Your journey is deeply personal. We're committed to protecting your privacy and ensuring 
                your reflections remain yours alone.
              </p>
            </div>

            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground">Continuous Growth</h3>
              <p className="font-light leading-relaxed">
                Self-awareness isn't a destination—it's a practice. We're here to support your ongoing 
                journey of discovery and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-center">
            Why We Built SearchAI
          </h2>
          <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-muted-foreground">
            <p>
              We noticed a pattern among high performers: external success often masks internal confusion. 
              People achieve their goals but still feel unfulfilled. They know something is missing, but 
              they can't quite name it.
            </p>
            <p>
              The problem isn't a lack of ambition or capability—it's a lack of self-awareness. Without 
              understanding why we make the choices we make, we end up chasing goals that don't align with 
              our authentic selves.
            </p>
            <p>
              SearchAI was created to bridge this gap. We built a platform that helps you ask better 
              questions about yourself, your motivations, and your path forward. Because once you understand 
              yourself deeply, you can build a life that feels as good as it looks from the outside.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
