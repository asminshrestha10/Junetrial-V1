# JuneTrail

An independent Australian 4x4 engineering, reviews & buying-guide website. Built with React, Vite, TypeScript and Tailwind CSS, designed to deploy straight to GitHub Pages.

---

## 1. Where to write your blog posts

**Folder:** `src/content/articles/`

Every article is a single Markdown file with a frontmatter block at the top. Drop a `.md` file anywhere inside `src/content/articles/` (subfolders like `engineering/`, `product-reviews/`, `buying-guides/` etc. are just for your own organisation — they don't affect the URL) and it appears on the site automatically. Nothing else needs to change.

**To add an article:**

1. Create a new file, e.g. `src/content/articles/engineering/how-towbars-handle-load.md`
2. Paste in this template and fill it out:

```markdown
---
title: How Does a 3,500kg Towbar Actually Handle the Load?
description: A short one-sentence summary shown on article cards and in search results.
date: 2026-09-01
author: Asmin Shrestha
category: Engineering
featured_image: /images/articles/towbar-load-diagram.jpg
tags: [towbars, load-ratings, engineering]
vehicle: Toyota Hilux
---

Write your article body here using normal Markdown — headings, **bold**, lists,
tables, images, links, all work.

## A subheading

More content...
```

3. Save the file. That's it — the homepage, the Articles page, the relevant category page, and (if you set `vehicle:`) the matching vehicle page will all pick it up next time the site is built.

**Notes on the frontmatter fields:**
- `category` must match one of the categories in `src/lib/articles.ts` (`CATEGORIES` list) to show up under that section — e.g. `Engineering`, `Product Reviews`, `Buying Guides`, `4x4 News`, `Suspension`, `Towing`, etc.
- `vehicle` is optional — set it to `Make Model` (e.g. `Ford Ranger`) exactly as it appears in `src/data/vehicles.ts` to link the article from that vehicle's page.
- `tags` is optional, written as `[tag-one, tag-two]`.
- Reading time is calculated automatically from your word count — you don't need to set it.

I have **not** written any sample or placeholder blog content — every article on the site will be one you actually wrote.

---

## 2. Where to upload your images

**Folder:** `public/images/`

There are subfolders already set up for you: `public/images/articles/`, `public/images/products/`, `public/images/vehicles/`, `public/images/hero/`. You can drop image files into any of these (or straight into `public/images/`) — JPG, PNG, or WebP all work.

To use an image, reference it with a path starting with `/images/...`:

- In an article's frontmatter: `featured_image: /images/articles/my-photo.jpg`
- In a product entry (`src/data/products.ts`): `image: '/images/products/my-product.jpg'`
- In a vehicle entry (`src/data/vehicles.ts`): `image: '/images/vehicles/hilux.jpg'`

**Until you add a real image**, leave the field as an empty string (`''` or omit `featured_image`) — the site shows a clearly-labelled "Image placeholder" box instead of a broken image, so nothing looks unfinished or broken while you're still gathering photos.

---

## 3. Your logo

Your uploaded logo is already in place at `public/logo.svg` and is used in the header, footer, and browser favicon. To swap it later, just replace that file with a new one of the same name.

---

## 4. Adding products & affiliate links

**File:** `src/data/products.ts`

Each product is one entry in the `products` array. Add retailer links under `retailers` — use the literal string `AMAZON_AFFILIATE_URL` as a placeholder until you have a real Amazon Associates link (the button will show "Link pending" instead of being clickable until you replace it). Never invent a price or affiliate ID — leave `priceAud` unset and the page will show "Information to be verified."

## 5. Adding vehicles

**File:** `src/data/vehicles.ts`

Add an entry to the `vehicles` array with a `slug` matching the pattern `make-model` (lowercase, hyphenated) to generate that vehicle's page automatically, e.g. `ford-ranger` → `/vehicles/ford-ranger`.

---

## 6. Running it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build the production version locally (useful for checking everything compiles before pushing):

```bash
npm run build
npm run preview
```

---

## 7. Deploying to GitHub Pages

1. **Create a new GitHub repository** (e.g. named `junetrail`).
2. **Set the base path** — open `vite.config.ts` and make sure `REPO_NAME` matches your repo's exact name. If your repo is `github.com/yourname/junetrail`, `REPO_NAME` should stay `'junetrail'`.
3. **Push this project to the repo:**
   ```bash
   git init
   git add .
   git commit -m "Initial JuneTrail site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/junetrail.git
   git push -u origin main
   ```
4. **Enable GitHub Pages via GitHub Actions:**
   - In your repo, go to **Settings → Pages**
   - Under "Build and deployment", set **Source** to **GitHub Actions**
   - The included workflow at `.github/workflows/deploy.yml` will now run automatically on every push to `main`, build the site, and publish it.
5. After the first push, check the **Actions** tab to watch the build. Once it finishes, your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/junetrail/
   ```

**Update these two placeholders once your URL is live:**
- `public/robots.txt` — replace `YOUR-USERNAME` in the Sitemap line
- `public/sitemap.xml` — replace `YOUR-USERNAME` in every URL, and add real URLs as you publish real articles/products/vehicles (this file is not auto-generated)

---

## 8. What's fully built vs. stubbed

**Fully built:** homepage, article system (Markdown + frontmatter), article/category pages, vehicle hub + vehicle pages, product review system with engineering scoring, product comparison table, affiliate button/link system, search (client-side, searches articles/products/vehicles), newsletter signup UI, responsive nav with vehicle dropdown, SEO meta tags + Organization schema, robots.txt/sitemap.xml, GitHub Actions deploy workflow, mobile-responsive layout with horizontally-scrollable comparison tables.

**Intentionally stubbed — needs your input before launch:**
- Legal pages (`src/pages/LegalPage.tsx`) contain clearly-marked placeholder text. Have these reviewed by a professional before publishing.
- The newsletter form (`src/components/Newsletter.tsx`) doesn't send anywhere yet — wire it up to Mailchimp/Brevo/ConvertKit/Beehiiv when you're ready.
- The Contact page uses a placeholder mailto address — update it.
- Analytics (Google Analytics, Search Console, Microsoft Clarity) and affiliate click tracking aren't wired in — add your tracking IDs to `index.html` when ready.
- Social links in the footer point to `#` — add your real profile URLs in `src/components/Footer.tsx`.
- No blog articles or real products have been added — that's for you to write, as requested.

---

## 9. Project structure

```
src/
  components/     Reusable UI: Header, Footer, ArticleCard, ProductCard,
                  EngineeringScore, ComparisonTable, SiteImage, etc.
  pages/          One file per route
  data/           products.ts, vehicles.ts — edit these directly
  content/
    articles/     ← YOUR BLOG POSTS GO HERE (.md files)
  lib/            Markdown/frontmatter loading, SEO helper
public/
  images/         ← YOUR PHOTOS GO HERE
  logo.svg        Your logo
  robots.txt
  sitemap.xml
  404.html        SPA routing fallback for GitHub Pages
.github/workflows/deploy.yml   Auto-deploy on push to main
```
