# Tru Vacate Cleaning Gold Coast

## Current State

The site has:
- HomePage with 15 suburbs listed as plain text badges (no links)
- 7 service pages
- About, Contact, Services overview pages
- SEOHead component for meta tags
- TanStack Router for client-side routing

Suburbs currently shown as static badges (no dedicated pages, no internal links):
Surfers Paradise, Southport, Broadbeach, Robina, Varsity Lakes, Mudgeeraba, Coomera, Hope Island, Runaway Bay, Labrador, Nerang, Burleigh Heads, Palm Beach, Coolangatta, Tweed Heads

## Requested Changes (Diff)

### Add
- 15 dedicated suburb pages under `/suburbs/<slug>` route (one per suburb)
- Each suburb page: ~400 words of semantically-optimised, skimmable content in Australian English, active voice, readable by a 10-year-old
- SEO metadata per page: unique `<title>`, `<meta name="description">`, canonical URL, Open Graph tags
- Internal links from the Home page "Areas Served" section — convert suburb badges into clickable `<Link>` components pointing to each suburb page
- A shared `SuburbPage` template component to avoid duplication across 15 pages
- Suburb pages registered in App.tsx router

### Modify
- `HomePage.tsx`: convert suburb list from plain `<span>` badges to `<Link>` elements so the home page links to each suburb page (SEO internal linking)
- `App.tsx`: add 15 new suburb routes

### Remove
- Nothing removed

## Implementation Plan

1. Create `/src/frontend/src/pages/suburbs/SuburbPage.tsx` — shared template that accepts suburb name, slug, postcode, and content props. Renders: hero section, intro paragraph, why-choose-us bullets, what's included list, local knowledge paragraph, CTA. Includes SEOHead with title/description/canonical.
2. Create `/src/frontend/src/pages/suburbs/index.tsx` — exports all suburb page components using the template with pre-written 400-word content per suburb.
3. Update `App.tsx` — add 15 suburb routes under `/suburbs/:suburb`.
4. Update `HomePage.tsx` — convert suburb `<span>` badges to `<Link>` elements pointing to `/suburbs/<slug>`.
