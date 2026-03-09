# Tru Vacate Cleaning Gold Coast

## Current State
New project. No existing pages or components.

## Requested Changes (Diff)

### Add
- Multi-page website for "Tru Vacate Cleaning Gold Coast" vacate/bond cleaning company
- Pages: Home, Services, About, Contact, individual service pages
- SEO: title tags, meta descriptions, Open Graph tags, Google site verification meta tag
- Google site verification: `<meta name="google-site-verification" content="LGBPb31c8y91eig9pACZt2fDChSQQ7xZzPNGeQE7mlU" />`
- Branded hero images and section images on every page with alt text
- 3000+ words of semantically optimised, skimmable content in Australian English, active voice, readable by a 10-year-old
- Each service page: 400-word SEO description
- FAQ section on home page (12 questions including top bond cleaning companies list with 100-word descriptions and website links, product links for carpet cleaning)
- Contact form that sends submission from the customer's own email to humptydumptybondcleaning@gmail.com (email hidden from page)
- WhatsApp contact button linking to 0488841883
- Services: Vacate Cleaning, End of Lease Cleaning, Bond Cleaning, Carpet Steam Cleaning, Oven & Kitchen Cleaning, Window Cleaning, Bathroom & Toilet Cleaning

### Modify
- Nothing (new project)

### Remove
- Nothing (new project)

## Implementation Plan
1. Rename project to "tru-vacate-cleaning-goldcoast"
2. Generate hero image, service images, and team/branding images with "Tru Vacate Cleaning Gold Coast" branding
3. Select no extra components (contact form uses mailto: link from customer's email client)
4. Generate Motoko backend to store contact enquiries
5. Build React frontend:
   - React Router for navigation (Home, Services, About, Contact)
   - index.html: inject google-site-verification meta tag in <head>
   - Home: hero, services overview, trust signals, FAQ (12 questions), WhatsApp CTA
   - Services: 7 services each with 400-word description
   - About: company story
   - Contact: form that opens mailto: to send from customer's email to the hidden destination
   - SEO: per-page title/description via react-helmet or equivalent
   - All images have descriptive alt text
   - All interactive elements have data-ocid markers
