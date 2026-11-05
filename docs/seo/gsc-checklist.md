# Google Search Console checklist (Zinova)

Manual steps after deploying the SEO audit fixes. LinkedIn Company Page remains out of repo.

## Before submit

1. Open `https://www.zinova.io/sitemap.xml` — expect **200** and valid XML with `xhtml:link` alternates (including `/guides/delivery-snapshot.html` and `/ar/guides/delivery-snapshot.html`).
2. If still **500**, check GitHub Pages source / custom domain; `.nojekyll` should already be at the repo root.
3. Confirm `https://www.zinova.io/robots.txt` lists `Sitemap: https://www.zinova.io/sitemap.xml`.

## Property and sitemap

1. In [Google Search Console](https://search.google.com/search-console), use the **URL-prefix** or **Domain** property for `zinova.io` / `www.zinova.io` (verify DNS or HTML if needed).
2. **Sitemaps** → submit `https://www.zinova.io/sitemap.xml`.
3. Wait for processing; fix any reported fetch or format errors.

## URL Inspection (priority set)

Request indexing (or at least inspect) after titles and the new guide are live:

| URL | Why |
|-----|-----|
| `https://www.zinova.io/` | Dual-region home |
| `https://www.zinova.io/ar/` | Arabic home |
| `https://www.zinova.io/mvp-development.html` | Sample service (category-led title) |
| `https://www.zinova.io/guides/delivery-snapshot.html` | New delivery snapshot (option C) |
| `https://www.zinova.io/ar/guides/delivery-snapshot.html` | Arabic twin |

## Monitor

- **Pages** (Coverage): indexed vs excluded; watch sitemap-discovered URLs.
- **International targeting / hreflang**: no conflicting `en`/`ar`/`x-default` pairs.
- Re-request indexing for service URLs after the title alignment (GCC-stuffed titles → category-led).
- Spot-check SERP snippets once re-crawled: service titles should match H1 intent; geo remains in descriptions/body/guides.

## Out of scope here

- LinkedIn Company Page creation and company link on the site
- Named or anonymized client case studies with metrics (upgrade delivery snapshot later when approved)
