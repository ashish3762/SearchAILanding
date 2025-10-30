import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - SearchAI | Self-Awareness & Emotional Intelligence Tools",
  description: "Explore SearchAI's services for personal growth: guided self-discovery, emotional intelligence development, mindfulness practices, and leadership coaching.",
  openGraph: {
    title: "SearchAI Services - Self-Awareness & Personal Growth Tools",
    description: "Explore SearchAI's services for personal growth: guided self-discovery, emotional intelligence development, and leadership coaching.",
    url: "https://searchai.com/services",
    type: "website",
  },
}

const services = [
  {
    title: "Guided Self-Discovery",
    description: "Thoughtfully crafted questions that guide you toward deeper self-understanding and personal insights.",
    features: [
      "Personalized question flows",
      "Pattern recognition insights",
      "Progress tracking and reflection",
      "Daily mindfulness prompts"
    ],
    delay: "0.1s"
  },
  {
    title: "Emotional Intelligence Development",
    description: "Build the emotional awareness and regulation skills that distinguish exceptional leaders and high performers.",
    features: [
      "EQ assessment and benchmarking",
      "Emotional pattern analysis",
      "Relationship mapping tools",
      "Stress management techniques"
    ],
    delay: "0.2s"
  },
  {
    title: "Mindfulness & Presence",
    description: "Develop present-moment awareness without sacrificing your drive and ambition.",
    features: [
      "Micro-mindfulness practices",
      "Focus enhancement exercises",
      "Anxiety management tools",
      "Performance meditation"
    ],
    delay: "0.3s"
  },
  {
    title: "Leadership Growth",
    description: "Enhance your leadership impact through increased self-awareness and emotional intelligence.",
    features: [
      "Leadership style assessment",
      "Team dynamics insights",
      "Communication enhancement",
      "Decision-making frameworks"
    ],
    delay: "0.4s"
  },
  {
    title: "Personal Values Alignment",
    description: "Discover and align with your core values to make decisions that feel authentic and fulfilling.",
    features: [
      "Values identification exercises",
      "Goal-values alignment check",
      "Decision-making clarity",
      "Life purpose exploration"
    ],
    delay: "0.5s"
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Tools and practices designed for ambitious individuals committed to self-awareness and personal growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-8 border border-border rounded-lg bg-card/50 hover:bg-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: service.delay }}
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-xl md:text-2xl font-light tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm font-light text-foreground/80"
                        >
                          <span className="text-muted-foreground mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 md:py-32 border-t border-border">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-light tracking-tight">
            Ready to Begin?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light">
            Join our waitlist to be among the first to experience these transformative tools.
          </p>
          <div className="pt-4">
            <a
              href="/#waitlist"
              className="inline-block px-8 py-3 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 rounded-md font-light"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
