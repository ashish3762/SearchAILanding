# SearchAI - Next.js Project

## Overview
SearchAI is a Next.js 16 application that helps users discover self-awareness through guided questions. The app features a waitlist signup integrated with Google Apps Script, comprehensive SEO-optimized pages, and a blog section with dynamic routing.

**Current State:** Minimal landing page redesign complete. The app now features a clean, focused homepage with exact specified copy, enhanced header with favicon logo and social icons, and full accessibility compliance. Running without errors.

## Recent Changes (November 3, 2025)

### Minimal Landing Page Redesign
- **Complete Homepage Redesign**: Transformed into minimal, focused landing page with exact specified copy
- **New Header Component**: Created Header.tsx replacing Navigation component with:
  - Favicon.ico as logo with hover effects
  - "SearchAI" wordmark (visible on tablet+)
  - Social icons (X, Instagram, Reddit) with subtle hover animations
  - Contact email display (responsive)
- **Exact Copy Implementation**:
  - Hero: "Creating a one-of-a-kind experience" / "For your mind"
  - Subheading: "Reflect. Grow. Understand yourself deeper."
  - Email placeholder: "Enter your email"
  - Form note: "Limited early access. By invitation only."
  - Footer: "Built by thinkers, for thinkers."
- **SEO Updates**: Updated metadata with new title, description, and keywords
- **Animations & Interactivity**:
  - Fade-in-up animations with staggered timing
  - Mouse-tracking radial glow background effect
  - Input focus glow and button hover effects (scale + shadow)
  - Respect for prefers-reduced-motion
- **Accessibility Enhancements**:
  - Added visually-hidden label for email input
  - Proper aria-labels on all interactive elements
  - Focus states on all clickable elements
  - Screen reader support throughout

## Previous Changes (October 31, 2025)

### SEO & Social Media Enhancements
- **Google Site Verification**: Added Google site verification meta tag in metadata export for Search Console verification
- **Favicon**: Added custom favicon to public folder and integrated via Next.js metadata icons API
- **Social Media Footer**: Added horizontal social media icon links to footer for X (Twitter), Reddit, Instagram, and Threads with hover effects matching dark theme
- **Hero Cleanup**: Removed duplicate "SearchAI" logo from landing page hero section (kept only in navigation)
- **Blog Routing Fix**: Updated dynamic blog routing to work with Next.js 15+ async params pattern for `/blogs/[slug]` routes
- **DotGrid Bug Fix**: Fixed null reference error in DotGrid component by adding proper null checks before accessing canvasRef.current.getBoundingClientRect()

## Previous Changes (October 30, 2025)

### SEO Pages & Blog Expansion
- **New Pages**: Added About, Contact, Services, Blogs (listing), and dynamic blog posts at `/blogs/[slug]`
- **Navigation Component**: Created responsive navigation with desktop/mobile views and active link highlighting
- **Blog System**: Implemented blog data structure in `lib/blogs.ts` with mock posts for development
- **Contact Form**: Built functional contact form component with client-side validation
- **SEO Optimization**: All pages include comprehensive metadata with Open Graph tags for social sharing
- **Design Consistency**: All new pages follow the existing minimal dark theme design pattern
- **Accessibility**: Semantic HTML, proper labels, and responsive Tailwind CSS classes throughout

### Vercel to Replit Migration
- **Security Enhancement**: Moved hardcoded Google Apps Script URL to environment variable (`GOOGLE_APPS_SCRIPT_URL`)
- **Port Configuration**: Updated dev and start scripts to bind to port 5000 on 0.0.0.0 for Replit compatibility
- **Deployment Setup**: Configured autoscale deployment with proper build and start commands
- **Dependencies**: Installed all packages via pnpm
- **Known Warning**: Next.js displays a cross-origin warning for Replit's proxy environment. This is a future notice and doesn't affect functionality in Next.js 16.0.0.

## Project Architecture

### Tech Stack
- **Framework**: Next.js 16.0.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.16
- **UI Components**: Radix UI primitives
- **Package Manager**: pnpm
- **Runtime**: Node.js

### Directory Structure
```
/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── waitlist/      # Waitlist submission endpoint
│   ├── blogs/             # Blog section
│   │   ├── [slug]/        # Dynamic blog post route
│   │   └── page.tsx       # Blog listing page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Fixed header with logo, social icons, and contact email
│   ├── contact-form.tsx   # Client-side contact form with validation
│   ├── navigation.tsx     # Legacy navigation (for other pages)
│   └── waitlist-form.tsx  # Waitlist signup form with accessibility
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
│   └── blogs.ts           # Blog data and helper functions
├── public/               # Static assets
└── styles/               # Additional styles
```

### Key Features
1. **Minimal Landing Page**: Clean, focused design with:
   - Mouse-tracking background glow effect
   - Staggered fade-in animations
   - Accessible waitlist form
   - Social media integration in header
2. **Waitlist API**: Server-side endpoint that validates emails and forwards to Google Apps Script
3. **About Page**: Company mission and vision with SEO metadata (accessible at /about)
4. **Services Page**: Three core service offerings displayed in card layout (accessible at /services)
5. **Contact Page**: Functional contact form with email validation
6. **Blog System**: 
   - Blog listing page showing all posts with images and descriptions
   - Dynamic routing for individual blog posts at `/blogs/[slug]`
   - Static generation support with `generateStaticParams`
   - Full SEO metadata including Open Graph for social sharing
7. **Responsive Navigation**: Desktop and mobile-friendly menu with active state highlighting
8. **Responsive Design**: Mobile-first approach using Tailwind CSS throughout all pages

## Environment Configuration

### Required Environment Variables
- `GOOGLE_APPS_SCRIPT_URL`: The Google Apps Script webhook URL for waitlist submissions (required for waitlist functionality)

### Development
- Server runs on port 5000 with host 0.0.0.0
- Hot Module Replacement (HMR) enabled
- Vercel Analytics in debug mode (no data sent in development)

### Production Notes
- **TypeScript**: Build errors are currently ignored (`ignoreBuildErrors: true`). This setting was present in the original Vercel configuration and has been preserved during migration. Before deploying to production, you should:
  1. Run `pnpm run build` to identify any TypeScript errors
  2. Fix all type errors or consciously decide to proceed with this setting
  3. Consider enabling strict type checking by removing `ignoreBuildErrors: true`
- **Images**: Image optimization is disabled (`unoptimized: true`). This setting was present in the original configuration. For production, consider:
  1. Enabling Next.js image optimization by removing `unoptimized: true`
  2. Or keeping it disabled if you serve optimized images from a CDN
- **Environment Variables**: Ensure `GOOGLE_APPS_SCRIPT_URL` is set in Replit Secrets for both development and production deployments
- **Deployment Verification**: Test the waitlist submission feature after deployment to ensure the Google Apps Script integration works correctly

## Deployment

### Replit Deployment Configuration
- **Type**: Autoscale (stateless web application)
- **Build Command**: `pnpm run build`
- **Start Command**: `pnpm run start`
- **Port**: 5000

### Publishing Checklist
1. Verify `GOOGLE_APPS_SCRIPT_URL` is set in deployment secrets
2. Test waitlist submission functionality
3. Review TypeScript errors (currently suppressed)
4. Consider enabling image optimization for better performance

## Security Best Practices
- ✅ No hardcoded secrets in code
- ✅ Environment variables used for sensitive URLs
- ✅ Server-side API validation (email format check)
- ✅ Error logging without exposing sensitive data
- ✅ Proper error handling with user-friendly messages

## User Preferences
None documented yet.

## Known Issues & Considerations
1. **TypeScript Build Errors**: Currently ignored. Review and fix before production.
2. **Image Optimization**: Disabled. May want to enable for production performance.
3. **Waitlist Error Handling**: API returns 500 if `GOOGLE_APPS_SCRIPT_URL` is missing. Consider adding startup validation.

## Development Commands
```bash
# Install dependencies
pnpm install

# Run development server (port 5000)
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm run start

# Run linter
pnpm run lint
```
