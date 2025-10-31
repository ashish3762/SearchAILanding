import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogBySlug, getAllBlogSlugs, blogPosts } from "@/lib/blogs"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  
  if (!post) {
    return {
      title: "Post Not Found - SearchAI",
    }
  }

  return {
    title: `${post.title} - SearchAI Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://searchai.com/blogs/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogBySlug(slug)

  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === post.slug)
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Featured Image */}
      <section className="px-4 py-12 md:py-20 border-b border-border">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/blogs" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>

          {/* Category & Read Time */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="tracking-widest uppercase">{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>By {post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 py-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-light prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-muted-foreground prose-ul:space-y-2
              prose-li:text-muted-foreground
              prose-strong:text-foreground prose-strong:font-normal
              animate-fade-in"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts Navigation */}
      {(prevPost || nextPost) && (
        <section className="px-4 py-20 md:py-32 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm tracking-widest uppercase text-muted-foreground mb-8">
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {prevPost && (
                <Link
                  href={`/blogs/${prevPost.slug}`}
                  className="group p-6 border border-border rounded-lg bg-card/50 hover:bg-card transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="text-xs text-muted-foreground tracking-widest uppercase">
                      ← Previous Post
                    </div>
                    <h3 className="text-lg font-light group-hover:text-foreground/80 transition-colors line-clamp-2">
                      {prevPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light line-clamp-2">
                      {prevPost.description}
                    </p>
                  </div>
                </Link>
              )}
              {nextPost && (
                <Link
                  href={`/blogs/${nextPost.slug}`}
                  className="group p-6 border border-border rounded-lg bg-card/50 hover:bg-card transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="text-xs text-muted-foreground tracking-widest uppercase text-right">
                      Next Post →
                    </div>
                    <h3 className="text-lg font-light group-hover:text-foreground/80 transition-colors line-clamp-2 text-right">
                      {nextPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light line-clamp-2 text-right">
                      {nextPost.description}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-4 py-20 md:py-32 border-t border-border">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-light tracking-tight">
            Ready to Explore Your Own Questions?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light">
            Join our waitlist and start your journey of self-discovery.
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
