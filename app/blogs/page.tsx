import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/blogs"

export const metadata: Metadata = {
  title: "Blog - SearchAI | Insights on Self-Awareness & Personal Growth",
  description: "Explore articles on self-discovery, emotional intelligence, leadership, and mindfulness for high performers.",
  openGraph: {
    title: "SearchAI Blog - Self-Awareness & Personal Growth Insights",
    description: "Explore articles on self-discovery, emotional intelligence, leadership, and mindfulness for high performers.",
    url: "https://searchai.com/blogs",
    type: "website",
  },
}

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 border-b border-border">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Insights on self-awareness, emotional intelligence, and personal growth for high performers.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className="group border border-border rounded-lg overflow-hidden bg-card/50 hover:bg-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Post Image */}
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Post Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="tracking-widest uppercase">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-light tracking-tight group-hover:text-foreground/80 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors group/link"
                  >
                    <span>Read more</span>
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  {/* Author & Date */}
                  <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 md:py-32 border-t border-border">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-light tracking-tight">
            Start Your Journey
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light">
            Join our waitlist to receive personalized insights and guidance on your path to self-discovery.
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
