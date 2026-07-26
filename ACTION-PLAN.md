# SEO Action Plan — marrakechphotobooths.com
**Generated:** July 27, 2026

## Prioritized Action Table

| # | Priority | Issue | Action | Effort | Impact |
|---|----------|-------|--------|--------|--------|
| 1 | CRITICAL | Domain mismatch — canonicals, sitemap, OG tags, schema all point to wrong domain | Update `SITE_URL` in Next.js config to `https://www.marrakechphotobooths.com` | 15 min | Very High |
| 2 | CRITICAL | Blog posts serve homepage title/description | Add unique `<title>` and `<meta name="description">` to all 6 blog posts | 1 hr | High |
| 3 | CRITICAL | Blog post canonicals point to homepage | Each blog post's canonical must point to itself | 30 min | Very High |
| 4 | CRITICAL | No BlogPosting schema on blog posts | Add `BlogPosting` structured data to all 6 blog posts with headline, author, datePublished, image | 2 hr | High |
| 5 | CRITICAL | No www/non-www or HTTP/HTTPS redirects | Configure 301 redirects on Vercel for all 4 URL variants | 20 min | High |
| 6 | HIGH | No BreadcrumbList schema | Add `BreadcrumbList` structured data to every page | 1 hr | Medium |
| 7 | HIGH | Blog posts missing author bylines | Add author component with name, bio, and photo to all blog posts | 2 hr | Medium |
| 8 | HIGH | Multiple H1 tags on homepage and à-propos | Ensure exactly ONE `<h1>` per page | 30 min | Medium |
| 9 | HIGH | Missing security headers | Add X-Content-Type-Options, X-Frame-Options, CSP, Referrer-Policy, Permissions-Policy via Vercel config | 1 hr | Medium |
| 10 | HIGH | No click-to-call link | Add `<a href="tel:+212621189496">` in header and contact page | 15 min | Medium |
| 11 | HIGH | No Google Business Profile | Claim and optimize GBP listing; add link to site's sameAs | 2 hr | High |
| 12 | HIGH | No AggregateRating/Review schema | Add `AggregateRating` or `Review` structured data if Google reviews exist | 1 hr | Medium |
| 13 | HIGH | Contact page thin content (~200 words) | Expand to 400+ words with FAQ snippet, response time commitment, trust signals | 1 hr | Medium |
| 14 | MEDIUM | No Google Maps embed | Add interactive Google Maps embed on contact page | 30 min | Low |
| 15 | MEDIUM | Identical schema on every page | Differentiate schema per page type — Service on services, Product on tarifs, Article on blog | 2 hr | Medium |
| 16 | MEDIUM | Blog posts don't cross-link | Add 2-3 contextual internal links between blog posts | 1 hr | Medium |
| 17 | MEDIUM | Citation coverage thin | Build citations on 20+ directories (Apple Maps, Bing Places, Yelp, WeddingWire, The Knot, local .ma dirs) | 4 hr | High |
| 18 | MEDIUM | No hreflang tags | Add `hreflang="fr"` and `hreflang="x-default"` tags | 30 min | Low |
| 19 | MEDIUM | Sitemap lastmod all identical | Update `<lastmod>` to actual modification dates per URL | 30 min | Low |
| 20 | MEDIUM | Blog index meta description too long (175 chars) | Trim to 155 characters | 10 min | Low |
| 21 | LOW | No English version for international visitors | Create English translation of key pages (homepage, services, tarifs, contact) | 8 hr | Medium |
| 22 | LOW | No case studies with metrics | Create 3-5 case studies with before/after metrics and photos | 4 hr | Medium |
| 23 | LOW | No comparison table on homepage | Add pricing comparison table (what's included per package) | 2 hr | Medium |
| 24 | LOW | No EUR/USD pricing | Add dual-currency pricing on tarifs page | 1 hr | Low |
| 25 | LOW | No portfolio/gallery on homepage | Add image gallery with event photos | 3 hr | Medium |

## Summary by Priority

| Priority | Count | Total Effort | Avg Impact |
|----------|-------|-------------|------------|
| CRITICAL | 5 | ~4.5 hr | Very High |
| HIGH | 8 | ~9.75 hr | Medium-High |
| MEDIUM | 7 | ~8.5 hr | Medium-Low |
| LOW | 5 | ~18 hr | Low-Medium |

## Recommended Execution Timeline

**Week 1 — CRITICAL fixes only (4.5 hr)**
All 5 critical issues can be resolved in under a day. This should immediately improve Google's ability to crawl, index, and rank the site correctly.

**Weeks 2-3 — HIGH priority (9.75 hr)**
Spread across ~3 sessions. Prioritize GBP claiming (#11) as it has the highest ROI for local SEO.

**Month 2 — MEDIUM priority (8.5 hr)**
Batch the schema and content improvements. Citation building (#17) is the highest-impact medium item.

**Backlog — LOW priority (18 hr)**
English translation (#21) and case studies (#22) are the highest-value backlog items for international reach and E-E-A-T.
