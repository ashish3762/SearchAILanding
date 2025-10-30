export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  image: string
  author: string
  date: string
  category: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-power-of-self-awareness",
    title: "The Power of Self-Awareness in Personal Growth",
    description: "Discover how understanding yourself deeply can transform your decision-making and relationships.",
    image: "/api/placeholder/800/400",
    author: "SearchAI Team",
    date: "2025-01-15",
    category: "Self-Discovery",
    readTime: "5 min read",
    content: `
      <p>Self-awareness is the cornerstone of personal growth. It's the ability to recognize and understand your own emotions, thoughts, and values, and how they influence your behavior.</p>
      
      <h2>Why Self-Awareness Matters</h2>
      <p>When you develop strong self-awareness, you gain the ability to:</p>
      <ul>
        <li>Make better decisions aligned with your values</li>
        <li>Improve your relationships through better communication</li>
        <li>Manage stress and emotions more effectively</li>
        <li>Identify patterns that hold you back</li>
      </ul>
      
      <h2>Building Self-Awareness</h2>
      <p>The journey to self-awareness starts with asking the right questions. Instead of avoiding difficult emotions or thoughts, we need to lean into them with curiosity.</p>
      
      <p>High performers understand that self-awareness isn't a destination—it's a continuous practice. By regularly checking in with yourself and questioning your motivations, you create space for genuine growth.</p>
      
      <h2>The Role of Questions</h2>
      <p>The quality of your life is determined by the quality of questions you ask yourself. SearchAI helps you discover these questions, guiding you toward deeper understanding and meaningful change.</p>
    `
  },
  {
    slug: "emotional-intelligence-for-leaders",
    title: "Emotional Intelligence: A Leader's Secret Weapon",
    description: "Learn why emotional intelligence is more critical than IQ for effective leadership and team success.",
    image: "/api/placeholder/800/400",
    author: "SearchAI Team",
    date: "2025-01-10",
    category: "Leadership",
    readTime: "6 min read",
    content: `
      <p>In today's complex business environment, technical skills alone aren't enough. The most successful leaders share one trait: high emotional intelligence (EQ).</p>
      
      <h2>What is Emotional Intelligence?</h2>
      <p>Emotional intelligence encompasses four key areas:</p>
      <ul>
        <li>Self-awareness: Understanding your own emotions</li>
        <li>Self-management: Controlling your emotional responses</li>
        <li>Social awareness: Recognizing others' emotions</li>
        <li>Relationship management: Using emotional understanding to guide interactions</li>
      </ul>
      
      <h2>The Impact on Leadership</h2>
      <p>Leaders with high EQ create environments where teams thrive. They navigate conflicts with grace, inspire trust, and foster collaboration. Research shows that 90% of top performers have high emotional intelligence.</p>
      
      <h2>Developing Your EQ</h2>
      <p>Unlike IQ, emotional intelligence can be developed at any age. The key is consistent practice and honest self-reflection. Start by paying attention to your emotional triggers and patterns.</p>
      
      <p>SearchAI provides the framework for this journey, helping you uncover the blind spots that may be limiting your effectiveness as a leader.</p>
    `
  },
  {
    slug: "questions-that-change-everything",
    title: "5 Questions That Can Change Your Life",
    description: "Powerful questions to unlock clarity, purpose, and direction in your personal and professional life.",
    image: "/api/placeholder/800/400",
    author: "SearchAI Team",
    date: "2025-01-05",
    category: "Self-Discovery",
    readTime: "4 min read",
    content: `
      <p>The questions we ask ourselves shape our reality. Here are five transformative questions that can shift your perspective and unlock new possibilities.</p>
      
      <h2>1. What am I avoiding right now?</h2>
      <p>This question brings awareness to the areas where fear or discomfort might be holding you back. Often, our biggest growth opportunities lie in the things we're avoiding.</p>
      
      <h2>2. What would this look like if it were easy?</h2>
      <p>We often overcomplicate solutions. This question helps you find simpler paths and challenges assumptions about difficulty.</p>
      
      <h2>3. What do I need to let go of?</h2>
      <p>Growth requires space. This question helps identify beliefs, habits, or relationships that no longer serve you.</p>
      
      <h2>4. What am I grateful for today?</h2>
      <p>Gratitude shifts your focus from scarcity to abundance, improving both mental health and decision-making.</p>
      
      <h2>5. What's the next small step?</h2>
      <p>Big goals can be overwhelming. This question brings focus back to actionable progress.</p>
      
      <p>SearchAI helps you discover the questions most relevant to your unique journey, creating a personalized path to self-discovery.</p>
    `
  },
  {
    slug: "mindfulness-for-high-performers",
    title: "Mindfulness Practices for the Ambitious Mind",
    description: "How high achievers use mindfulness to enhance performance without sacrificing drive.",
    image: "/api/placeholder/800/400",
    author: "SearchAI Team",
    date: "2024-12-28",
    category: "Performance",
    readTime: "7 min read",
    content: `
      <p>Many high performers resist mindfulness, fearing it might dull their competitive edge. The opposite is true—mindfulness sharpens focus, enhances decision-making, and prevents burnout.</p>
      
      <h2>The High Performer's Dilemma</h2>
      <p>Ambitious individuals often struggle with being present. Your mind races ahead to the next goal, the next achievement. While this drive fuels success, it can also lead to stress, anxiety, and disconnection.</p>
      
      <h2>Mindfulness Meets Ambition</h2>
      <p>Mindfulness isn't about slowing down—it's about being fully engaged with whatever you're doing. This presence actually enhances performance:</p>
      <ul>
        <li>Improved focus and concentration</li>
        <li>Better emotional regulation under pressure</li>
        <li>Enhanced creativity and problem-solving</li>
        <li>Reduced stress and increased resilience</li>
      </ul>
      
      <h2>Practical Applications</h2>
      <p>Start small: Take three conscious breaths before important meetings. Notice your thoughts without judgment. Ask yourself: "What am I feeling right now?"</p>
      
      <p>These micro-practices build awareness that compounds over time, creating a foundation for sustainable high performance.</p>
    `
  },
  {
    slug: "building-emotional-resilience",
    title: "Building Emotional Resilience in Uncertain Times",
    description: "Practical strategies to develop mental toughness and emotional flexibility when facing challenges.",
    image: "/api/placeholder/800/400",
    author: "SearchAI Team",
    date: "2024-12-20",
    category: "Resilience",
    readTime: "5 min read",
    content: `
      <p>Resilience isn't about avoiding difficult emotions—it's about developing the capacity to move through them with grace and emerge stronger.</p>
      
      <h2>Understanding Resilience</h2>
      <p>Emotional resilience is your ability to adapt to stressful situations and bounce back from adversity. It's not a fixed trait but a skill that can be developed through practice.</p>
      
      <h2>The Foundation of Resilience</h2>
      <p>Three core elements build resilience:</p>
      <ul>
        <li>Self-awareness: Knowing your emotional patterns</li>
        <li>Self-regulation: Managing your responses</li>
        <li>Self-compassion: Treating yourself with kindness</li>
      </ul>
      
      <h2>Practical Strategies</h2>
      <p>Build your resilience by:</p>
      <ul>
        <li>Naming your emotions specifically</li>
        <li>Creating space between stimulus and response</li>
        <li>Maintaining connections with supportive people</li>
        <li>Practicing gratitude and perspective-taking</li>
      </ul>
      
      <h2>The Growth Mindset</h2>
      <p>View challenges as opportunities for growth rather than threats. This shift in perspective transforms how you experience difficulty.</p>
      
      <p>SearchAI guides you through the questions that build emotional resilience, helping you develop the inner strength to thrive in any circumstance.</p>
    `
  }
]

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug)
}
