# Sanity CMS Setup — AtlasHive

## Project Details

| Setting | Value |
|---|---|
| **Project Name** | AtlasHive |
| **Project ID** | `3c62q5av` |
| **Dataset** | `production` |
| **Template** | Blog (schema) |
| **Studio Route** | `/studio` (embedded in Next.js) |
| **TypeScript** | Yes |
| **API Version** | `2024-02-11` |

---

## Architecture

```
AtlasHive/
├── sanity.config.ts          # Sanity Studio configuration
├── sanity.cli.ts             # Sanity CLI configuration
├── src/
│   ├── sanity/               # Sanity schemas (auto-generated)
│   │   └── schemaTypes/      # Blog post, author, category schemas
│   ├── lib/
│   │   ├── sanity.ts         # Sanity client (createClient)
│   │   ├── sanity.queries.ts # GROQ queries for blog
│   │   └── sanity.image.ts   # Image URL builder
│   └── app/
│       ├── studio/[[...tool]]/  # Embedded Sanity Studio route
│       └── blog/
│           ├── page.tsx         # Blog listing (fetches from Sanity)
│           └── [slug]/page.tsx  # Blog detail page
└── .env.local                # Environment variables (not committed)
```

---

## Environment Variables

Stored in `.env.local` (gitignored):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="3c62q5av"
NEXT_PUBLIC_SANITY_DATASET="production"
```

> [!IMPORTANT]
> When deploying to Vercel, add these same variables in **Settings → Environment Variables**.

---

## Accessing the Studio

### Local Development
```bash
npm run dev
# Visit: http://localhost:3000/studio
```

### Production
After deploying to Vercel, the Studio is accessible at:
```
https://atlashive.vickyajmera.com/studio
```

> [!NOTE]
> You must add your production URL to the CORS origins in the Sanity dashboard:
> [manage.sanity.io](https://www.sanity.io/manage) → AtlasHive → API → CORS Origins → Add `https://atlashive.vickyajmera.com`

---

## Creating Content

### Blog Posts
1. Open the Studio (`/studio`).
2. Click **Post** in the sidebar.
3. Fill in:
   - **Title** — The blog post title.
   - **Slug** — Click "Generate" to auto-create from title.
   - **Author** — Select or create an author.
   - **Main Image** — Upload a featured image.
   - **Categories** — Tag with relevant categories.
   - **Body** — Write content using the rich text editor.
4. Click **Publish**.

### Authors
1. Click **Author** in the sidebar.
2. Add **Name**, **Image**, and **Bio**.
3. Click **Publish**.

---

## GROQ Queries

The app uses GROQ (Graph-Relational Object Queries) defined in `src/lib/sanity.queries.ts`:

| Query | Description |
|---|---|
| `postsQuery` | Fetches all published posts (title, slug, excerpt, image, date) |
| `postQuery` | Fetches a single post by slug with full body content |

---

## Useful Commands

```bash
# Open Sanity Studio locally
npm run dev

# Deploy Sanity Studio (standalone, if needed)
npx sanity deploy

# Export dataset
npx sanity dataset export production ./backup.tar.gz

# Import dataset
npx sanity dataset import ./backup.tar.gz production
```

---

## Sanity Dashboard

Manage your project at: [manage.sanity.io](https://www.sanity.io/manage)

- **API Settings**: CORS origins, tokens, webhooks.
- **Datasets**: View, export, or create new datasets.
- **Members**: Invite team members.
