# Full Website SEO Audit Report

**URL:** http://localhost:3000 → https://marrakechphotobooth.com  
**Business:** Marrakech PhotoBooths — Photobooth rental for events and weddings  
**Industry:** Event Services / Entertainment (SAB)  
**Date:** July 27, 2026  
**Framework:** Next.js 16 (Static Export)

## Overall SEO Health Score: 59/100

| Category | Weight | Score | Weighted | Status |
|----------|--------|-------|----------|--------|
| Technical SEO | 22% | 68/100 | 15.0 | Needs Work |
| Content Quality | 23% | 48/100 | 11.0 | Critical |
| On-Page SEO | 20% | 52/100 | 10.4 | Needs Work |
| Schema / Structured Data | 10% | 65/100 | 6.5 | Needs Work |
| Performance (CWV) | 10% | 50/100 | 5.0 | Limited Data |
| AI Search Readiness | 10% | 78/100 | 7.8 | Good |
| Images | 5% | 75/100 | 3.8 | Good |
| **TOTAL** | **100%** | — | **59.5** | **Needs Work** |

### Business Type: Service Area Business (SAB), Event Services, French, Marrakech 30km radius

### Top 5 Critical Issues
1. Zero reviews — No Google reviews, no aggregateRating schema
2. No Google Business Profile integration
3. Thin blog content — all posts under 600 words vs 1500+ expected
4. Missing security headers — No CSP, HSTS, X-Frame-Options
5. Page-type mismatch — Homepage is hybrid; SERP expects dedicated service pages

### Top 5 Quick Wins
1. Create and verify Google Business Profile
2. Fix schema validation errors (5 errors across 3 schemas)
3. Add 6 blog posts to sitemap
4. Deploy Netlify _headers file
5. Add author bylines to blog posts

## 1. Technical SEO — 68/100
- Crawlability: 90/100 — robots.txt, sitemap, AI crawler rules all good
- Indexability: 85/100 — canonical, meta robots present
- Security: 40/100 — All security headers missing (Netlify _headers file created)
- URL Structure: 95/100 — Clean URLs, consistent trailing slashes
- Mobile: 90/100 — Responsive, touch targets at 48px
- Core Web Vitals: 50/100 — Limited data, 19 render-blocking scripts, low-res hero images
- Structured Data: 80/100 — 8 JSON-LD blocks, 5 validation errors
- JS Rendering: 85/100 — SSR enabled, all components server-rendered
- IndexNow: 0/100 — Not implemented

## 2. Content Quality — 48/100
- E-E-A-T: 42/100 (Experience 10/25, Expertise 8/25, Authority 10/25, Trust 14/25)
- Homepage: ~1350 words PASS, A-propos: ~350 words THIN, Blog posts: ~550 words SEVERELY THIN
- AI Citation Readiness: 35/100
- Google Who/How/Why test: FAIL on Who and How

## 3. On-Page SEO — 52/100
- SXO Gap Score: 52/100
- Page-type mismatch: Homepage hybrid vs SERP service page consensus (100%)
- Persona scores: Wedding Planner 50, Corporate 41, Budget Couple 33, Last-Minute 47, International 26
- Keyword optimization: PASS

## 4. Schema — 65/100
- 8 schemas: LocalBusiness (invalid email, incomplete address), WebSite (valid), Service (missing billingDuration), FAQPage x2 (restricted), BreadcrumbList (valid), Product (missing image and url), BlogPosting (missing dateModified and publisher.logo)
- 5 validation errors

## 5. Sitemap — 70/100
- 6 blog posts missing from sitemap
- All lastmod dates identical (2026-07-26)

## 6. Performance — 50/100
- 19 render-blocking scripts, hero images low-resolution, JPEG inconsistency

## 7. AI Search — 78/100
- llms.txt present, AI crawlers allowed, 6 social profiles, YouTube presence
- Missing: Wikipedia, bilingual content, video embedding

## 8. Local SEO — 42/100
- No GBP integration, zero reviews, no Maps embed, no click-to-call
- Working: NAP consistency, social profiles, LocalBusiness schema, WhatsApp

## 9. Backlinks — Insufficient Data
- DA: 1/100, 7 referring domains, 43% suspicious TLDs

## 10. Topic Clusters — 5 clusters, 12 posts planned, validated

## Priority Action Plan

### CRITICAL (Fix Immediately)
1. Create GBP + review generation — 1 day
2. Deploy security headers — 5 min
3. Fix schema validation errors — 1 hour
4. Add blog posts to sitemap — 15 min
5. Fix LocalBusiness schema (remove invalid email, add address fields) — 30 min

### HIGH (Fix Within 1 Week)
6. Expand blog posts to 1500+ words — 1 week
7. Add author bylines — 2 hours
8. Add testimonials section — 2 hours
9. Add pricing to homepage — 1 hour
10. Replace low-res hero images — 1 hour

### MEDIUM (Fix Within 1 Month)
11. Create dedicated service page for "location photobooth marrakech" — 1 week
12. Expand A-propos page — 2 hours
13. Add comparison tables — 2 hours
14. Implement IndexNow — 1 hour
15. Expand FAQ answers to 134-167 words — 2 hours
16. Embed YouTube videos — 1 hour
17. Fix footer touch targets — 30 min
18. Claim Bing Places — 30 min

### LOW (Backlog)
19. Add hreflang tags for bilingual content
20. Request Wikipedia notability
21. Add image sitemap
22. Implement dynamic sitemap generation
23. Convert JPEG images to WebP
24. Set up CWV monitoring
