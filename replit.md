# SearchAI - Next.js Project

## Overview
SearchAI is a Next.js 16 application that helps users discover self-awareness through guided questions. The app features a waitlist signup that integrates with Google Apps Script for data collection.

**Current State:** Successfully migrated from Vercel to Replit and running without errors.

## Recent Changes (October 30, 2025)

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
│   ├── api/               # API routes
│   │   └── waitlist/      # Waitlist submission endpoint
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

### Key Features
1. **Landing Page**: Hero section with tagline and waitlist form
2. **Waitlist API**: Server-side endpoint that validates emails and forwards to Google Apps Script
3. **Responsive Design**: Mobile-first approach using Tailwind CSS

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
