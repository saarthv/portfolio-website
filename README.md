This is a Next.js App Router portfolio scaffold using TypeScript, Tailwind CSS, and MDX blog support.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project structure

Key directories:

- `src/app` - App Router routes (`/`, `/projects`, `/blog`, `/about`)
- `src/content/blog` - MDX post source files
- `src/lib` - Portfolio data and blog loaders
- `public/images` - Existing image assets (preserved)
- `public/documents` - Existing PDFs (preserved)

## Writing a new post

Create a new `.mdx` file in `src/content/blog` with frontmatter:

```md
---
title: "Post title"
excerpt: "One-line summary"
date: "YYYY-MM-DD"
tags:
  - tag1
  - tag2
---
```
