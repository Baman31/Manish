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
- **Database ORM**: Drizzle ORM for type-safe database queries
- **Database Driver**: Neon serverless PostgreSQL client with WebSocket support
- **Schema Location**: Shared schema definition in `shared/schema.ts` for type consistency

**Database Schema:**
The application uses four main tables:

1. **messages**: Stores contact form submissions
   - Fields: id, name, email, subject, message, read status, timestamp
   - Purpose: Enables visitors to send messages to the portfolio owner

2. **profiles**: User profile information
   - Fields: id, email, full name, avatar URL, admin flag, timestamps
   - Purpose: Manages user profiles with admin role support

3. **projects**: Portfolio project showcase
   - Fields: id, title, description, long description, image URL, GitHub URL, live URL, technologies array, featured flag, timestamps
   - Purpose: Dynamic project management with categorization and external links

4. **skills**: Technical skills and proficiencies
   - Fields: id, name, category, icon name, proficiency level, timestamps
   - Purpose: Organizes and displays technical competencies

**Design Decisions:**
- **Serverless-ready**: Uses Neon serverless driver for WebSocket connections, enabling deployment on serverless platforms
- **Type safety**: Drizzle ORM provides full TypeScript support from schema to queries
- **UUID primary keys**: Uses UUID for all table primary keys for better distribution and security
- **Soft timestamps**: All tables include created_at and updated_at fields for audit trails
- **Boolean flags**: Features like `featured` (projects) and `isAdmin` (profiles) enable flexible content management

### Data Storage

**Database Solution:**
- **Type**: PostgreSQL (serverless via Neon)
- **Connection**: Connection pooling via Neon's serverless Pool
- **ORM**: Drizzle ORM configured in `server/db.ts`
- **Migrations**: Drizzle Kit for schema migrations stored in `drizzle/` directory

**Rationale:**
- PostgreSQL chosen for relational data integrity and advanced features (arrays, timestamps)
- Neon serverless enables cost-effective hosting with automatic scaling
- Drizzle ORM provides type safety without runtime overhead

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
- **Drizzle Kit**: Database schema management and migration tools

**External Services:**
- **Fonts**: Google Fonts (Manrope and Inter families)
- **GPTEngineer**: Analytics/tracking script loaded from CDN
- **Database**: Neon serverless PostgreSQL (requires DATABASE_URL environment variable)

**API Dependencies:**
- **Date handling**: date-fns for date formatting and manipulation
- **Class utilities**: clsx and class-variance-authority for dynamic className generation
- **Carousel**: Embla Carousel for project galleries
- **Theme management**: next-themes for theme persistence and system preference detection

**Deployment Considerations:**
- Requires `DATABASE_URL` environment variable for database connection
- Supports both development and production builds via separate Vite configurations
- Robot.txt configured for search engine crawling
- Custom 404 handling with error logging