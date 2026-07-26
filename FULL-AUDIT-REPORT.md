# Full Website SEO Audit Report
**URL:** https://www.marrakechphotobooths.com/
**Date:** July 27, 2026
**Business:** Marrakech PhotoBooths — Photobooth rental for events and weddings
**Industry:** Event Services / Entertainment (SAB)
**Framework:** Next.js 16 (Static Export)
**Hosting:** Vercel

## Overall SEO Health Score: 42/100

| Category | Weight | Score | Weighted | Status |
|----------|--------|-------|----------|--------|
| Technical SEO | 22% | 35/100 | 7.7 | Critical |
| Content Quality | 23% | 52/100 | 12.0 | Needs Work |
| On-Page SEO | 20% | 40/100 | 8.0 | Critical |
| Schema / Structured Data | 10% | 45/100 | 4.5 | Needs Work |
| Performance (CWV) | 10% | 60/100 | 6.0 | Needs Work |
| AI Search Readiness | 10% | 60/100 | 6.0 | Good |
| Images | 5% | 70/100 | 3.5 | Good |
| **TOTAL** | **100%** | — | **42.2** | **Critical** |

### Business Type: Service Area Business (SAB), Event Services, French, Marrakech 30km radius

### Top 5 Critical Issues
1. **Domain mismatch** — All canonical URLs, sitemap, OG tags, and schema point to `marrakechphotobooth.com` (no "s") while the site is hosted at `www.marrakechphotobooths.com` (with "s"). Two different domains entirely.
2. **Blog posts missing unique meta tags** — All 6 blog posts serve the homepage title and meta description instead of their own. Google cannot differentiate them.
3. **Blog posts canonical URLs point to homepage** — Each blog post's canonical points to the homepage, telling Google the blog post IS the homepage.
4. **No BlogPosting schema** — Blog posts have no Article/BlogPosting structured data.
5. **No www/non-www or HTTP/HTTPS redirects** — All 4 URL variants serve identical content without redirects.

### Top 5 Quick Wins
1. Fix the single SITE_URL config variable to resolve all domain mismatch issues
2. Add unique title tags and meta descriptions to all 6 blog posts
3. Add BlogPosting schema to all 6 blog posts
4. Add BreadcrumbList schema site-wide
5. Configure 301 redirects on Vercel for www/non-www and HTTP/HTTPS

## 1. Technical SEO — 35/100

### CRITICAL Issues

**1.1 Canonical URL Domain Mismatch**
- Current: `<link rel="canonical" href="https://marrakechphotobooth.com/"/>` (no "s")
- Actual domain: `www.marrakechphotobooths.com` (with "s")
- Impact: Every page's canonical points to a different domain. Google may deindex the correct domain entirely.
- Fix: Update SITE_URL in Next.js config to `https://www.marrakechphotobooths.com`

**1.2 Sitemap Points to Wrong Domain**
- All 17 `<loc>` entries use `https://marrakechphotobooth.com/...` (no "s")
- Impact: Google crawls wrong URLs
- Fix: Update all sitemap URLs to correct domain

**1.3 robots.txt Sitemap Directive Wrong**
- Current: `Sitemap: https://marrakechphotobooth.com/sitemap.xml`
- Fix: Update to `https://www.marrakechphotobooths.com/sitemap.xml`

**1.4 No www/non-www Redirect**
- All four variants (www/non-www × HTTP/HTTPS) serve identical 200 content
- Impact: Duplicate content across 4 URLs
- Fix: Configure 301 redirects on Vercel

### HIGH Issues

**1.5 Missing Security Headers**
- Present: HSTS, CORS
- Missing: X-Content-Type-Options, X-Frame-Options, CSP, Referrer-Policy, Permissions-Policy
- Fix: Add via Vercel headers config or middleware

### Positive Findings
- robots.txt exists with proper AI crawler rules
- SSL certificate valid
- HSTS header present
- Google Search Verification tag present
- All 12 tested internal links return 200
- Clean URL structure with consistent trailing slashes
- Proper `lang="fr"` attribute
- WebP image format used
- Image preloading for LCP

## 2. Content Quality — 52/100

### CRITICAL Issues

**2.1 Blog Posts Missing Unique Meta Tags**
All 6 blog posts serve the homepage title and meta description:
- Current: `Marrakech PhotoBooths | Location de photobooth pour événements` (all posts)
- Impact: Google cannot differentiate blog posts from homepage
- Fix: Each post needs unique `<title>` and `<meta description>`

**2.2 Blog Posts Missing Author Bylines**
- No author name, bio, photo, or "Written by" label
- Impact: E-E-A-T signals missing for YMYL-adjacent content
- Fix: Add author component with name, bio, and photo

### HIGH Issues

**2.3 Multiple H1 Tags**
- Homepage: At least 2 H1-level headings
- À propos: 2 H1 tags ("À propos" + "Passionnés du design...")
- Fix: Ensure exactly ONE H1 per page

**2.4 Contact Page Thin Content**
- ~200 words, below 300-word minimum
- Fix: Add FAQ snippet, response time commitment, trust signals

### Blog Content Assessment

| Post | Words | Substantial? | Author? | Schema? |
|------|-------|-------------|---------|---------|
| Guide choisir photobooth | ~2,800 | YES | NO | NO |
| Top 10 idées photocall | ~2,600 | YES | NO | NO |
| Vidéomaton 360 | ~2,400 | YES | NO | NO |
| Photobooth IA | ~1,500 | YES | NO | NO |
| Personnaliser branding | ~1,500 | YES | NO | NO |
| Tendances 2026 | ~1,500 | YES | NO | NO |

## 3. On-Page SEO — 40/100

### CRITICAL Issues

**3.1 Blog Post Title Tags All Duplicate Homepage**
| Blog Post | Current Title | Should Be |
|-----------|--------------|-----------|
| Guide choisir photobooth | `Marrakech PhotoBooths \| Location de photobooth pour événements` | `Guide : Comment choisir son photobooth pour un mariage à Marrakech \| Marrakech PhotoBooths` |
| Top 10 idées photocall | Same homepage title | `Top 10 idées photocall de mariage inoubliable à Marrakech \| Marrakech PhotoBooths` |
| Vidéomaton 360 | Same homepage title | `Vidéomaton 360 : l'attraction star des événements d'entreprise \| Marrakech PhotoBooths` |

**3.2 Blog Post Meta Descriptions Missing**
All posts inherit homepage description instead of having unique 150-155 char descriptions.

### MEDIUM Issues

**3.3 Blog Index Meta Description Too Long**
- Current: 175 chars (exceeds 155 char limit)
- Fix: Trim to 155 chars

**3.4 Blog Posts Don't Cross-Link**
- Posts link to services/contact but not to each other
- Fix: Add 2-3 contextual internal links per post

## 4. Schema & Structured Data — 45/100

### CRITICAL Issues

**4.1 Blog Posts Missing BlogPosting Schema**
- Blog posts serve identical schema to homepage (LocalBusiness + WebSite + Service)
- No `BlogPosting` or `Article` schema exists
- Missing: headline, author, datePublished, dateModified, image, publisher
- Fix: Add BlogPosting schema to all 6 blog posts

**4.2 Blog Post Canonical URLs Point to Homepage**
- Each blog post's canonical points to the homepage URL
- Impact: Google treats blog posts as duplicates of homepage
- Fix: Each page's canonical must point to itself

### HIGH Issues

**4.3 No BreadcrumbList Schema**
- Breadcrumbs visible in UI but no structured data
- Fix: Add BreadcrumbList to every page

**4.4 No AggregateRating/Review Schema**
- No reviews or ratings in structured data
- Fix: Add if Google reviews exist

### MEDIUM Issues

**4.5 Identical Schema on Every Page**
- All pages serve the same 3 schemas (LocalBusiness, WebSite, Service)
- Fix: Differentiate per page type (Service on service pages, Product on tarifs, Article on blog)

**4.6 Sitemap lastmod All Identical**
- Every URL has `<lastmod>2026-07-26</lastmod>`
- Impact: Google ignores these dates
- Fix: Use actual modification dates

### Positive Findings
- LocalBusiness schema well-structured with geo, sameAs, openingHours
- Service schema with pricing present
- WebSite + SearchAction implemented correctly
- llms.txt comprehensive and well-organized
- 6 social profiles linked in sameAs

## 5. Local SEO — 55/100

### HIGH Issues

**5.1 No GBP Integration**
- No Google Business Profile link detected
- Fix: Claim and optimize GBP, add link to sameAs

**5.2 No aggregateRating/Review Schema**
- Missing star rich results opportunity
- Fix: Add if reviews exist

**5.3 No Click-to-Call**
- No `tel:` URI detected for mobile
- Fix: Add `<a href="tel:+212621189496">` in header/contact

**5.4 No Google Maps Embed**
- Has geo coordinates but no interactive map
- Fix: Add Maps embed on contact page

### MEDIUM Issues

**5.5 streetAddress Too Generic**
- Current: "Marrakech" — should be a real address
- Fix: Use business address if available

**5.6 Citation Coverage Thin**
- Only social profiles linked
- Missing from: Apple Maps, Bing Places, Yelp, WeddingWire, The Knot, local .ma directories
- Fix: Build citations on 20+ directories

### Positive Findings
- Local keywords excellent (Marrakech throughout)
- areaServed well-defined (30km GeoCircle)
- openingHours complete (Mon-Sun 09:00-22:00)
- 6 social profiles with consistent handle

## 6. Backlink Profile — 20/100

### HIGH Issues

**6.1 Extremely Thin Backlink Profile**
- Estimated DA: 5-15
- Estimated referring domains: < 20
- Estimated total backlinks: < 50
- No toxic links detected (clean but thin)

### Competitor Gap

| Link Source | Competitors Have | marrakechphotobooths Has |
|-------------|------------------|--------------------------|
| Local business directories | YES | NO |
| Wedding/event directories | YES | NO |
| Google Business Profile | YES | NO |
| Vendor/partner cross-links | YES | NO |
| Blog/guest posts | YES | NO |

## 7. AI Search Readiness — 60/100

### Positive Findings
- llms.txt present and comprehensive
- All major AI crawlers allowed (GPTBot, ClaudeBot, PerplexityBot)
- 6 social profiles linked
- Statistics present (1200+ brands, 5000+ events)

### Gaps
- No press mentions or third-party citations
- No case studies with metrics
- Blog content templated, not data-driven
- No English version for international searchers

## 8. SXO Score — 47/100

### SERP Analysis: "photobooth marrakech"
**marrakechphotobooths.com does NOT appear in the top 10 results.**

### Page-Type Mismatch
- User intent: Service provider + pricing + booking
- Homepage content: Service showcase + catalog (too broad)
- What ranks: Competitors with English content, pricing tables, direct booking

### Persona Scores

| Persona | Score | Key Gap |
|---------|-------|---------|
| Wedding Planner | 62/100 | No wedding-specific landing page prominence |
| Corporate Manager | 58/100 | No ROI metrics or case studies |
| Budget Couple | 45/100 | No comparison table, no "what's included" |
| Last-Minute Organizer | 40/100 | No availability indicator, no instant booking |
| International Visitor | 30/100 | French-only, no EUR/USD pricing |

## Priority Action Plan

### CRITICAL (Fix Immediately — Week 1)
1. Fix SITE_URL config to resolve domain mismatch
2. Add unique title tags and meta descriptions to all 6 blog posts
3. Fix blog post canonical URLs (each page points to itself)
4. Add BlogPosting schema to all 6 blog posts
5. Configure 301 redirects on Vercel (www/non-www, HTTP/HTTPS)

### HIGH (Fix Within 2 Weeks)
6. Add BreadcrumbList schema site-wide
7. Add author bylines to all blog posts
8. Fix multiple H1 tags (homepage, à-propos)
9. Add security headers via Vercel config
10. Add click-to-call `tel:` links
11. Claim Google Business Profile
12. Add AggregateRating/Review schema
13. Expand contact page to 400+ words

### MEDIUM (Fix Within 1 Month)
14. Add Google Maps embed on contact page
15. Add Product/Offer schema on tarifs page
16. Cross-link blog posts (2-3 internal links per post)
17. Build citations on 20+ directories
18. Add hreflang tags
19. Differentiate schema per page type
20. Fix sitemap lastmod dates

### LOW (Backlog)
21. Create English version for international visitors
22. Add case studies with metrics
23. Add comparison table to homepage
24. Add EUR/USD pricing
25. Add portfolio/gallery to homepage
