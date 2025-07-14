# Personal Website – kivancturker.com

## Description

This personal portfolio site will include:

- A **Landing Page** to introduce who I am and what I offer
- A **Blog** showcasing MDX-based posts
- A **Projects** section highlighting my work
- An expanded **About Me** page detailing my background and skills
- A **Contact Me** page with an email form

## Pages

### Landing Page

The landing page will grab visitors’ attention with:

- A sticky header and navigation menu
- Hero section containing:

  - An eye-catching headline and brief description
  - A prominent call-to-action button

- Social media links (LinkedIn, GitHub, Twitter)
- A summary “About Me” teaser
- A technology stack overview

### Blog

The Blog page will:

- Fetch posts stored in Supabase (MDX format)
- Display each post with a cover image, title, and tags
- Allow filtering by tag and searching by title
- Redirect to a detailed post page when a title is clicked

### Projects

The Projects page will:

- Render MDX-based project entries
- Present entries in a vertical carousel:

  - **Desktop:** image and summary on the left; title, description, tech stack, and build notes on the right
  - **Mobile:** stacked card layout

### About Me

This page will:

- Provide an in-depth introduction to my background, experience, and education
- Highlight my skills and past achievements

### Contact Me

The Contact Me page will:

- Include a form with fields for Name, Email, and Message
- Validate required fields and email format
- Send submissions via email to my inbox

## SEO

- Add page-level meta tags (title, description)
- Generate a `sitemap.xml`
- Include structured data (JSON-LD)
- robots.txt

## Technical Stack

- **Frontend:** Next.js (React, TypeScript), Tailwind CSS
- **CMS:** Supabase (PostgreSQL) for MDX content storage

## Milestones

- **MVP:** Responsive Landing Page and Blog section
- **v1:** Projects showcase and Contact Me page
