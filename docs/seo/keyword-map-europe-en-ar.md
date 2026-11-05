# Zinova keyword map — Estonia / Nordics / Baltics (EN + AR)

**Markets:** Estonia, Finland, Latvia, Lithuania, Sweden (Nordics + Baltics). Tallinn in body/FAQ only.  
**Canonical site:** `https://www.zinova.io`  
**Locales:** `/` (EN), `/ar/` (AR). No country doorway URLs in this phase.

Homepage is **dual-region** with the [GCC keyword map](keyword-map-gcc-en-ar.md): Gulf + Europe share `/` and `/ar/`. This file owns EE/Nordics/Baltics intents; the GCC map owns Gulf intents.

## Pillar clusters → live URLs

| Cluster (intent) | EN primary keywords | AR primary keywords | Page |
|------------------|---------------------|---------------------|------|
| Brand / dual | product engineering Gulf and Europe, product engineering Estonia | هندسة منتجات الخليج وأوروبا، إستونيا | `/`, `/ar/` |
| Estonia / Nordics MVP | MVP development Estonia, MVP Nordics, product engineering Baltics | تطوير MVP أوروبا، إستونيا، الشمال | `/mvp-development.html`, `/guides/mvp-for-european-startups.html` |
| Discovery | MVP roadmap European founders, product discovery Estonia | دراسة MVP أوروبا | `/mvp-discovery.html` |
| Audit | technical audit European startups, architecture review Nordics | تدقيق تقني أوروبا | `/technical-audit.html` |
| Consulting | technical consulting Estonia, fractional CTO Nordics | استشارة تقنية إستونيا | `/technical-consulting.html` |
| AI | AI integration European SaaS, AI Nordics products | دمج الذكاء الاصطناعي أوروبا | `/ai-integration.html` |
| Scope guide | scope MVP GDPR, EU payments MVP | نطاق MVP أوروبا، GDPR | `/guides/scope-an-mvp.html` |
| Hiring model | studio vs freelance Europe, Estonia OÜ vs freelancer | استوديو مقابل مستقل أوروبا | `/compare/studio-vs-freelance.html` |

## Country mentions (body / FAQ, not every title)

Weave naturally: Estonia, Finland, Latvia, Lithuania, Sweden — and Arabic: إستونيا، فنلندا، لاتفيا، ليتوانيا، السويد / أوروبا / الشمال ودول البلطيق.

Legal entity: `Zinova OÜ`, `addressCountry: EE`. Do not invent Tallinn street addresses or local phone numbers.

## Content rules

- One primary intent per URL; EN/AR as separate indexable URLs with hreflang.
- Home title dual: Gulf & Europe (~50–60 characters); service H1s stay category-led.
- Prefer natural Estonia/Nordics mentions in H2/FAQ over stuffing five countries into every title.
- No `/locations/...`, `/estonia`, or `/tallinn` pages until Search Console shows country-level demand.
- Footer Guides link stays on the GCC guide; Europe guide is linked from home FAQ, Related, scope/compare, and sitemap.

## GSC checklist (manual after deploy)

1. Verify URL-prefix property `https://www.zinova.io/`.
2. Resubmit `https://www.zinova.io/sitemap.xml`.
3. Request indexing once for `/`, `/ar/`, and `/guides/mvp-for-european-startups.html` (+ AR twin).
4. After ~4 weeks, filter Queries for: Estonia, Tallinn, Nordics, Baltics, Finland, Sweden, Latvia, Lithuania, Europe MVP, product engineering Estonia.
5. Only then consider dedicated Estonia or country landing pages for queries with sustained impressions.
