# My Product - E-Commerce Store

![App Preview](https://imgix.cosmicjs.com/83e7dd10-4e10-11f1-9690-df5854985cf2-autopilot-photo-1438761681033-6461ffad8d80-1778596826456.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern e-commerce storefront built with Next.js 16 and Cosmic CMS, featuring products, categories, variants, and customer reviews.

## Features

- 🛍️ Complete product catalog with detailed product pages
- 🏷️ Category browsing with image showcases
- 🎨 Product variant support (sizes, colors, pricing adjustments)
- ⭐ Customer reviews with star ratings
- 📱 Fully responsive modern design
- 🚀 Built with Next.js 16 App Router
- 💎 TypeScript for type safety
- 🎨 Tailwind CSS for styling

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a033b7fb4bc78a77bbd8268&clone_repository=6a033c68b4bc78a77bbd82d9)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a SaaS product website with features, pricing tiers, documentation pages, and customer testimonials.
> 
> User instructions: An e-commerce store with products, categories, variants, and customer reviews"

### Code Generation Prompt

> Build a Next.js application for an online business called "My Product". The content is managed in Cosmic CMS with the following object types: categories, products, variants, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: An e-commerce store with products, categories, variants, and customer reviews

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Cosmic CMS SDK

## Getting Started

### Prerequisites

- Bun installed
- Cosmic account with bucket configured

### Installation

```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch products with category
const { objects } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

The app integrates with Cosmic CMS using 4 content types: products, categories, variants, and reviews with full relationship support via depth queries.

## Deployment Options

Deploy to Vercel or Netlify. Set the COSMIC_BUCKET_SLUG, COSMIC_READ_KEY, and COSMIC_WRITE_KEY environment variables.

<!-- README_END -->