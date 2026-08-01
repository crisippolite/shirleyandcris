# Shirley + Cris

A public anniversary story built as an intimate, Japanese-stationery-inspired digital planner. The public experience is paired with a private Supabase-backed studio for managing stories, timeline entries, media, and social-sharing details.

## Local development

1. Copy `.env.example` to `.env.local` and add the project values.
2. Install dependencies with `pnpm install`.
3. Start the site with `pnpm dev`.

The project expects Node.js 20.9 or newer. Production and preview deployments are connected to the existing Vercel project.

## Content model

The initial database schema lives in `supabase/migrations`. Public content is readable only when published; Studio changes require membership in `cms_members` and a valid Supabase Auth session.

Large archival video masters stay outside Git. Web-ready derivatives and poster images will be connected during the media phase.
