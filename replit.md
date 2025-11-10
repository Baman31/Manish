# Portfolio Website - Manish Sharma

## Overview

This is a modern, full-stack portfolio website built for showcasing projects, skills, certifications, and enabling visitor contact. The application is a single-page application (SPA) with animated sections including Hero, Projects, About, Certifications, and Contact. The site features a custom cursor, scroll progress indicator, theme toggle (light/dark mode), and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: React Router v6 for client-side routing (currently single-page with 404 handling)
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for advanced animations, Intersection Observer API for scroll-triggered animations
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Form Handling**: React Hook Form with Zod resolvers for validation

**Design Decisions:**
- **Component-based architecture**: All UI elements are modular React components located in `src/components/`
- **Custom theming**: Theme context provides light/dark mode switching with localStorage persistence and system preference detection
- **Responsive design**: Mobile-first approach with Tailwind's responsive utilities
- **Custom interactions**: Custom cursor component for enhanced desktop UX, scroll progress bar for visual feedback
- **Type safety**: Full TypeScript implementation with strict type checking disabled for rapid development

**Key Frontend Features:**
- Animated typing effect in Hero section for dynamic role display
- Project filtering by category with smooth transitions
- Scroll-triggered animations using Intersection Observer
- Toast notifications for user feedback
- Custom cursor that responds to interactive elements
- SEO-optimized with meta tags and OpenGraph properties

### Backend Architecture

**Technology Stack:**
- **Runtime**: Node.js with Express.js server
- **Database**: MongoDB Atlas (cloud-hosted NoSQL database)
- **ODM**: Mongoose for schema modeling and data validation
- **API Server**: Express.js REST API on port 3000
- **Concurrency**: Frontend (Vite) and Backend (Express) run simultaneously via concurrently

**Database Schema:**
The application uses MongoDB collections with Mongoose schemas:

1. **messages**: Stores contact form submissions
   - Fields: name (required), email (required), subject (optional), message (required), read (boolean, default: false), createdAt/updatedAt (auto-managed)
   - Purpose: Enables visitors to send messages to the portfolio owner
   - Location: `server/models/Message.ts`

**API Endpoints:**
- `POST /api/contact`: Accepts contact form submissions, validates input, and saves to MongoDB
- `GET /api/health`: Health check endpoint to verify server status

**Design Decisions:**
- **MongoDB chosen for flexibility**: NoSQL structure allows easy schema evolution without migrations
- **Mongoose ODM**: Provides schema validation, type casting, and query building
- **Express REST API**: Simple, lightweight API server for handling contact form submissions
- **CORS enabled**: Frontend can communicate with backend API during development
- **Environment-based config**: MongoDB connection string stored securely in MONGODB_URI environment variable

### Data Storage

**Database Solution:**
- **Type**: MongoDB Atlas (cloud NoSQL database)
- **Connection**: Mongoose connection with automatic reconnection handling
- **Schema Definition**: Mongoose schemas in `server/models/` directory
- **Connection Setup**: `server/db.ts` handles MongoDB connection with error handling

**Rationale:**
- MongoDB Atlas provides free tier hosting with automatic scaling
- NoSQL structure perfect for simple contact form data without complex relationships
- Mongoose provides schema validation and type safety similar to TypeScript
- Easy to deploy and maintain with minimal configuration

### External Dependencies

**Third-party UI Libraries:**
- **Radix UI**: Unstyled, accessible component primitives (accordion, dialog, dropdown, tooltip, etc.)
- **shadcn/ui**: Pre-built component collection built on Radix UI with Tailwind styling
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (Simple Icons for technology logos)

**Development Tools:**
- **ESLint**: Code quality with React-specific rules
- **TypeScript**: Type checking with relaxed strictness for development speed
- **Vite**: Fast HMR and optimized builds with SWC compiler
- **tsx**: TypeScript execution for running the Express server
- **concurrently**: Runs frontend and backend servers simultaneously

**External Services:**
- **Fonts**: Google Fonts (Manrope and Inter families)
- **GPTEngineer**: Analytics/tracking script loaded from CDN
- **Database**: MongoDB Atlas (requires MONGODB_URI environment variable)

**API Dependencies:**
- **Date handling**: date-fns for date formatting and manipulation
- **Class utilities**: clsx and class-variance-authority for dynamic className generation
- **Carousel**: Embla Carousel for project galleries
- **Theme management**: next-themes for theme persistence and system preference detection

**Deployment Considerations:**
- Requires `MONGODB_URI` environment variable for database connection
- **Important**: MongoDB Atlas requires IP whitelisting - add Replit's IP address or `0.0.0.0/0` (for testing) to Atlas Network Access whitelist
- Supports both development and production builds via separate Vite configurations
- Robot.txt configured for search engine crawling
- Custom 404 handling with error logging

## Recent Changes (November 2025)

### Database Migration: PostgreSQL → MongoDB
- **Removed**: Neon PostgreSQL, Drizzle ORM, and all related packages
- **Added**: MongoDB Atlas with Mongoose ODM
- **New Backend**: Express.js API server running on port 3000
- **Contact Form**: Now submits real data to `/api/contact` endpoint and saves to MongoDB
- **Environment Variables**: Changed from `DATABASE_URL` to `MONGODB_URI`