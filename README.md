# AtlasHive — Enterprise-Grade Cybersecurity Website

**Live Site:** [https://atlashive.vickyajmera.com](https://atlashive.vickyajmera.com)

A modern, high-performance corporate website for AtlasHive Security, built with Next.js 16, Sanity CMS, and Tailwind CSS v4. Features a professional dark/light theme, embedded CMS studio, blog, and contact form.

---

## Tech Stack

| Category | Technology | Version |
|---|---|---|
| **Framework** | [Next.js](https://nextjs.org) (App Router) | 16.1.6 |
| **Language** | TypeScript | 5.x |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) | 4.x |
| **UI Components** | [Shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com) | Latest |
| **Animations** | [Framer Motion](https://www.framer.com/motion) | 12.x |
| **Icons** | [Lucide React](https://lucide.dev) | 0.563.x |
| **CMS** | [Sanity.io](https://www.sanity.io) | 4.22.x |
| **CMS Bridge** | [next-sanity](https://github.com/sanity-io/next-sanity) | 11.x |
| **Theme Switching** | [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.x |
| **Form Validation** | [Zod](https://zod.dev) + [React Hook Form](https://react-hook-form.com) | 4.x / 7.x |
| **Toast Notifications** | [Sonner](https://sonner.emilkowal.dev) | 2.x |
| **Hosting** | [Vercel](https://vercel.com) | — |
| **Domain Registrar** | GoDaddy | — |

---

## Project Structure

```
AtlasHive/
├── public/                         # Static assets
│   ├── logo.png                    # Light mode logo
│   ├── dark-theme-logo.png         # Dark mode logo
│   ├── light-background.png        # Light mode page background
│   ├── dark-background.png         # Dark mode page background
│   ├── security-architecture-*.png # About section visuals
│   └── grid.svg                    # Hero section grid pattern
│
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── layout.tsx              # Root layout (ThemeProvider, Navbar, Footer)
│   │   ├── page.tsx                # Homepage (Hero, Services, About)
│   │   ├── globals.css             # Global styles, CSS variables, themes
│   │   ├── about/page.tsx          # About page
│   │   ├── services/page.tsx       # Services page
│   │   ├── contact/page.tsx        # Contact form page
│   │   ├── blog/
│   │   │   ├── page.tsx            # Blog listing (fetches from Sanity)
│   │   │   └── [slug]/page.tsx     # Blog post detail (Portable Text)
│   │   └── studio/[[...tool]]/     # Embedded Sanity Studio
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky navbar with theme toggle
│   │   │   └── Footer.tsx          # Footer with contact info & links
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Animated hero section
│   │   │   ├── Services.tsx        # Service cards grid
│   │   │   └── About.tsx           # About section with images
│   │   ├── ui/                     # Shadcn/ui components (Button, Input, etc.)
│   │   ├── theme-provider.tsx      # next-themes ThemeProvider wrapper
│   │   └── mode-toggle.tsx         # Dark/Light theme toggle dropdown
│   │
│   ├── lib/
│   │   ├── sanity.ts               # Sanity client configuration
│   │   ├── sanity.queries.ts       # GROQ queries for blog
│   │   ├── sanity.image.ts         # Sanity image URL builder
│   │   ├── actions.ts              # Server Actions (contact form)
│   │   ├── schemas.ts              # Zod validation schemas
│   │   └── utils.ts                # Utility functions (cn helper)
│   │
│   └── sanity/                     # Sanity Studio configuration
│       ├── env.ts                  # Sanity environment variables
│       ├── structure.ts            # Studio desk structure
│       ├── lib/
│       │   ├── client.ts           # Studio client
│       │   ├── image.ts            # Studio image helper
│       │   └── live.ts             # Live preview config
│       └── schemaTypes/
│           ├── index.ts            # Schema type exports
│           ├── postType.ts         # Blog post schema
│           ├── authorType.ts       # Author schema
│           ├── categoryType.ts     # Category schema
│           └── blockContentType.ts # Rich text block schema
│
├── docs/
│   └── sanity-setup.md             # Detailed Sanity CMS documentation
│
├── sanity.config.ts                # Sanity Studio root config
├── sanity.cli.ts                   # Sanity CLI config
├── .env.local                      # Environment variables (NOT committed)
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites
- **Node.js** 18+ (recommended: 20+)
- **npm** 9+
- A [Sanity.io](https://www.sanity.io) account (for CMS access)

### Installation

```bash
# Clone the repository
git clone https://github.com/vickyajmera120/AtlasHive.git
cd AtlasHive

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="3c62q5av"
NEXT_PUBLIC_SANITY_DATASET="production"
```

> **Note:** The `.env.local` file is gitignored. Every developer must create their own copy.

### Running Locally

```bash
# Start the development server
npm run dev

# The site will be available at:
# http://localhost:3000

# Sanity Studio will be available at:
# http://localhost:3000/studio
```

### Building for Production

```bash
npm run build
npm start
```

---

## Sanity CMS

### Quick Reference

| Detail | Value |
|---|---|
| **Project ID** | `3c62q5av` |
| **Dataset** | `production` |
| **Studio URL (Local)** | `http://localhost:3000/studio` |
| **Studio URL (Production)** | `https://atlashive.vickyajmera.com/studio` |
| **Sanity Dashboard** | [manage.sanity.io](https://www.sanity.io/manage) |

### How to Add a New Blog Post

1. Navigate to the **Sanity Studio**:
   - **Local**: `http://localhost:3000/studio`
   - **Production**: `https://atlashive.vickyajmera.com/studio`
2. Log in with your Sanity account (Google/GitHub).
3. Click **Post** in the left sidebar.
4. Click the **"+"** button to create a new post.
5. Fill in the fields:
   - **Title** — The headline of your blog post.
   - **Slug** — Click **"Generate"** to auto-create from the title.
   - **Author** — Select an existing author or create a new one first.
   - **Main Image** — Upload a featured image.
   - **Categories** — Tag with relevant topics.
   - **Body** — Write your content using the rich text editor. Supports:
     - Headings (H1, H2, H3)
     - Bold, italic, underline
     - Bulleted and numbered lists
     - Blockquotes
     - Code blocks
     - Images
     - Links
6. Click **Publish** (green button at the bottom).
7. The post will appear on the live site within ~60 seconds (ISR revalidation).

### Content Schemas

| Schema | Fields | Description |
|---|---|---|
| **Post** | title, slug, author, mainImage, categories, body, publishedAt | Blog articles |
| **Author** | name, slug, image, bio | Post authors |
| **Category** | title, description | Post categorization |

### GROQ Queries

Located in `src/lib/sanity.queries.ts`:

- **`postsQuery`** — Fetches all posts ordered by `publishedAt` desc (for blog listing).
- **`postQuery`** — Fetches a single post by slug (for blog detail page).

### Adding a New Content Type

1. Create a new schema file in `src/sanity/schemaTypes/` (e.g., `caseStudyType.ts`).
2. Register it in `src/sanity/schemaTypes/index.ts`.
3. Add a GROQ query in `src/lib/sanity.queries.ts`.
4. Create the corresponding Next.js page(s) in `src/app/`.

For detailed Sanity documentation, see [`docs/sanity-setup.md`](docs/sanity-setup.md).

---

## Theming

The site supports **Light** and **Dark** themes, managed by `next-themes`.

### Theme Colors

| Token | Light Mode | Dark Mode |
|---|---|---|
| **Background** | Clean White | Deep Slate Blue (`#0f172a`) |
| **Primary** | Burgundy (matches logo) | Security Green (`#00ff41`) |
| **Foreground** | Dark Slate | Near White |

### How It Works

- CSS variables are defined in `src/app/globals.css` under `:root` (light) and `.dark` (dark).
- Components use Tailwind's `dark:` variant for conditional styling.
- The `ModeToggle` component in the Navbar lets users switch themes.
- Theme preference is persisted in `localStorage`.

### Adding Theme-Aware Styles

```tsx
// Use dark: prefix for dark mode variants
<div className="bg-white dark:bg-slate-900 text-black dark:text-white">
  Content
</div>
```

---

## Deployment

### Current Setup

The site is deployed on **Vercel** with automatic deployments from the `main` branch.

| Detail | Value |
|---|---|
| **Platform** | Vercel |
| **Domain** | `atlashive.vickyajmera.com` |
| **Git Branch** | `main` (auto-deploy) |
| **Domain Registrar** | GoDaddy |
| **DNS Record** | CNAME: `atlashive` → `cname.vercel-dns.com` |

### Deployment Workflow

1. Push code to the `main` branch on GitHub.
2. Vercel automatically builds and deploys.
3. The site is live at `https://atlashive.vickyajmera.com` within ~1-2 minutes.

### Environment Variables on Vercel

Ensure the following are set in **Vercel → Project Settings → Environment Variables**:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = 3c62q5av
NEXT_PUBLIC_SANITY_DATASET = production
```

### CORS Origins (Sanity)

If deploying to a new domain, add it to Sanity's CORS origins:

1. Go to [manage.sanity.io](https://www.sanity.io/manage).
2. Select the **AtlasHive** project.
3. Navigate to **API → CORS Origins**.
4. Add your new domain (e.g., `https://yourdomain.com`).

---

## Contact Form

The contact form at `/contact` is built with:

- **React Hook Form** for form state management.
- **Zod** schemas for server-side validation (`src/lib/schemas.ts`).
- **Server Actions** for secure form handling (`src/lib/actions.ts`).
- **Sonner** for toast notifications.

### Current Status

The form submission is **currently mocked** — it validates data and logs to the server console, but does not send emails.

### Integrating an Email Provider

To enable real email delivery, update `src/lib/actions.ts`:

```typescript
// Replace the mock implementation with your email provider
// Example with Resend:
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

// Inside submitContactForm():
await resend.emails.send({
  from: 'noreply@atlashive.com',
  to: 'info@atlashive.com',
  subject: `New inquiry from ${name}`,
  text: message,
});
```

---

## Key Files Reference

| File | Purpose |
|---|---|
| `src/app/layout.tsx` | Root layout, ThemeProvider, font loading |
| `src/app/globals.css` | All CSS variables, theme definitions, backgrounds |
| `src/app/page.tsx` | Homepage composition (Hero + Services + About) |
| `src/components/sections/Hero.tsx` | Animated hero with trust badges |
| `src/components/layout/Navbar.tsx` | Sticky nav with theme toggle |
| `src/components/layout/Footer.tsx` | Contact info, links, branding |
| `src/lib/sanity.ts` | Sanity client initialization |
| `src/lib/sanity.queries.ts` | All GROQ queries |
| `src/lib/actions.ts` | Server Actions (contact form) |
| `src/lib/schemas.ts` | Zod validation schemas |
| `sanity.config.ts` | Sanity Studio configuration |

---

## Useful Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint

npx sanity deploy    # Deploy Sanity Studio (standalone)
npx sanity dataset export production ./backup.tar.gz   # Backup CMS data
npx sanity dataset import ./backup.tar.gz production   # Restore CMS data
```

---

## License

This project is proprietary to AtlasHive Security. All rights reserved.
