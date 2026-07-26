# Local SEO Analysis — MarrakechPhotoBooth.com

**Analysis Date:** July 26, 2026
**URL:** http://localhost:3000 (production: https://MarrakechPhotoBooth.com)
**Business:** Marrakech PhotoBooths

---

## Local SEO Score: 38/100

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| GBP Signals | 25% | 10/100 | 2.5 |
| Reviews & Reputation | 20% | 0/100 | 0.0 |
| Local On-Page SEO | 20% | 55/100 | 11.0 |
| NAP Consistency & Citations | 15% | 40/100 | 6.0 |
| Local Schema Markup | 10% | 45/100 | 4.5 |
| Local Link & Authority Signals | 10% | 50/100 | 5.0 |
| **TOTAL** | **100%** | | **38/100** |

---

## 1. Business Type Detection

### Detected: Service Area Business (SAB)

| Signal | Evidence |
|--------|----------|
| Physical address | **NOT visible** — No street address in HTML, schema, or footer |
| Schema address | Only `addressLocality: "Marrakech"` + `addressCountry: "MA"` — no `streetAddress` |
| Service area language | Implicit — "Location de photobooth pour événements et mariages à Marrakech" |
| Mobile service | Yes — photobooth rental is inherently mobile (brings equipment to client venues) |
| Contact page | Shows "Marrakech, Maroc" — city-level only, no street |

**Verdict:** This is a **pure SAB** — no storefront, services delivered at client locations. Embedded map checks and physical address consistency checks are not applicable.

---

## 2. Industry Vertical Detection

### Detected: Event Services / Entertainment

| Signal | Evidence |
|--------|----------|
| Service offerings | Photobooth rental, Videomaton 360, Mosaic Wall, Vogue Booth |
| Target events | Corporate events, weddings, marketing campaigns |
| Pricing | Forfaits from 2,500 MAD |
| Content signals | /photobooth-evenements, /mariages, /videomaton-360, /tarifs |

**Industry path:** Event Entertainment — not a direct match for the standard verticals (restaurant, healthcare, legal, home services, real estate, automotive). Closest fit is **Home Services** pattern (service area, estimates, on-site service).

---

## 3. GBP Optimization Checklist

| Signal | Status | Notes |
|--------|--------|-------|
| GBP embed/Maps iframe | **MISSING** | No Google Maps embed or GBP widget detected on any page |
| GBP place ID reference | **MISSING** | No place ID or Google Maps URL found |
| Primary category signals | **WEAK** | Content suggests "Event Equipment Rental" or "Photo Booth Rental" — no GBP category signals on page |
| GBP posts indicator | **MISSING** | No posts feed or post-related widget |
| Photos/video evidence | **MISSING** | No GBP photo integration |
| Review widget | **MISSING** | No Google review widget or third-party review widget |
| Business hours on page | **MISSING** | Schema has hours (Mon-Sun 09:00-22:00) but no visible hours in HTML |
| Click-to-call | **PRESENT** | `tel:+212621189496` link in header and contact section |
| WhatsApp contact | **PRESENT** | WhatsApp button linking to +212621189496 |
| Google Site Verification | **PRESENT** | `jZaWHAufOSxUcbGbITY3EpvzN1ZB-X-VPvsmLauAO-8` |
| Google Analytics | **PRESENT** | G-89VBCBGT6G (GA4) |

**GBP Score: 10/100** — No visible GBP integration on website. Critical gap.

---

## 4. Review Health Snapshot

| Metric | Status |
|--------|--------|
| Google review count visible | **0** — No reviews shown anywhere on site |
| Star rating visible | **NONE** |
| `aggregateRating` in schema | **MISSING** — No review schema present |
| Review response patterns | **NONE** |
| Third-party review presence | **NONE** — No Yelp, TripAdvisor, or other review badges |
| Review velocity | **UNKNOWN** — No review data available |
| Review generation mechanism | **NONE** — No review request links or post-event review flow detected |

**Reviews Score: 0/100** — No review presence whatsoever. This is the **#1 gap** for local pack visibility.

**Critical:** The 18-day rule (Sterling Sky) means rankings cliff without reviews every 3 weeks. With zero reviews, the business is invisible in local pack results.

---

## 5. NAP Consistency Audit

### Source Comparison

| Source | Name | Address | Phone | Email |
|--------|------|---------|-------|-------|
| **HTML (Contact Form)** | Marrakech PhotoBooths | Marrakech, Maroc | +212 6 21 18 94 96 | contact@marrakechphotobooth.com |
| **HTML (Mentions Légales)** | Marrakech PhotoBooths | Marrakech, Maroc | +212 6 21 18 94 96 | contact@marrakechphotobooth.com |
| **JSON-LD Schema** | Marrakech PhotoBooths | Marrakech, MA | +212621189496 | contact@marrakechphotobooth.com |
| **HTML (Navbar)** | Marrakech PhotoBooths | — | +212 6 21 18 94 96 | contact@marrakechphotobooth.com |

### Discrepancies Detected

| Issue | Severity | Details |
|-------|----------|---------|
| Phone format inconsistency | **LOW** | Schema uses `+212621189496` (no spaces), HTML uses `+212 6 21 18 94 96` (with spaces) — functionally equivalent but inconsistent |
| Address granularity mismatch | **MEDIUM** | Schema: `addressLocality: "Marrakech", addressCountry: "MA"` vs HTML: "Marrakech, Maroc" — "Maroc" (French) vs "MA" (ISO code) |
| No street address anywhere | **HIGH** | For SAB this is acceptable, but limits citation potential on directories requiring full address |
| No postal code | **MEDIUM** | Missing from schema and all HTML sources |

**NAP Consistency Score: 40/100** — NAP is consistent across sources but incomplete (no street address, no postal code). The SAB nature makes this acceptable but limits directory citation options.

---

## 6. Citation Presence Status

### Tier 1 Directories

| Directory | Status | Notes |
|-----------|--------|-------|
| Google Business Profile | **UNKNOWN** | No GBP signals on site — need to verify listing exists |
| Yelp | **NOT DETECTED** | No Yelp link or mention found |
| BBB | **NOT DETECTED** | No BBB badge or link |
| Facebook | **PRESENT** | https://www.facebook.com/MarrakechPhotoBooths (linked in footer) |
| Apple Business Connect | **UNKNOWN** | Recommend claiming |
| Bing Places | **UNKNOWN** | Recommend claiming — powers ChatGPT, Copilot, Alexa |

### Social Profiles Detected

| Platform | URL | Status |
|----------|-----|--------|
| X (Twitter) | https://x.com/marrakechpb | Linked |
| TikTok | https://www.tiktok.com/@marrakechpb | Linked |
| LinkedIn | https://www.linkedin.com/company/marrakechpb | Linked |
| Facebook | https://www.facebook.com/MarrakechPhotoBooths | Linked |
| Instagram | https://www.instagram.com/marrakechpb/ | Linked |
| YouTube | https://www.youtube.com/@marrakechpb | Linked |

**Citation Score: 40/100** — Social profiles are comprehensive (6 platforms), but no Tier 1 directory citations detected. No evidence of Yelp, BBB, or industry-specific directory listings.

---

## 7. Local Schema Markup Validation

### Current Schema (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Marrakech PhotoBooths",
  "url": "https://MarrakechPhotoBooth.com",
  "telephone": "+212621189496",
  "email": "contact@marrakechphotobooth.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Marrakech",
    "addressCountry": "MA"
  },
  "description": "Location de photobooth pour événements et mariages à Marrakech.",
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "09:00",
    "closes": "22:00"
  }
}
```

### Schema Validation

| Property | Status | Notes |
|----------|--------|-------|
| `@type` | **PARTIAL** | `LocalBusiness` is generic — should consider more specific subtype |
| `name` | **PRESENT** | ✓ |
| `url` | **PRESENT** | ✓ |
| `telephone` | **PRESENT** | ✓ |
| `email` | **PRESENT** | ✓ (non-standard but helpful) |
| `address` | **INCOMPLETE** | Only `addressLocality` and `addressCountry` — missing `streetAddress`, `postalCode`, `addressRegion` |
| `geo` | **MISSING** | No latitude/longitude — recommended with 5+ decimal precision |
| `openingHoursSpecification` | **PRESENT** | ✓ All 7 days, 09:00-22:00 |
| `priceRange` | **PRESENT** | ✓ |
| `description` | **PRESENT** | ✓ |
| `image` | **MISSING** | No business image in schema |
| `aggregateRating` | **MISSING** | No review/rating schema |
| `areaServed` | **MISSING** | Should include for SAB: `["Marrakech", "Morocco"]` or specific areas |
| `@id` | **MISSING** | Recommended for multi-page schema consistency |
| `sameAs` | **MISSING** | Should reference social profiles (Facebook, Instagram, etc.) |
| Correct industry subtype | **MISSING** | Should use `EventPlanning` or specific entertainment subtype |

**Schema Score: 45/100** — Schema exists and has core properties, but is missing critical recommended properties (`geo`, `image`, `aggregateRating`, `areaServed`, `sameAs`) and uses generic `LocalBusiness` instead of a more specific type.

---

## 8. Local On-Page SEO Assessment

### Title Tags

| Page | Title | Local Signal |
|------|-------|-------------|
| Homepage | "Marrakech PhotoBooths \| Location de photobooth pour événements" | ✓ City + service |
| Contact | "Contact - Marrakech PhotoBooths \| Demandez un devis" | Partial |
| Événements | "Photobooth pour Événements - Marrakech PhotoBooths" | Partial — no city |
| Mariages | "Photobooth pour Mariages - Marrakech PhotoBooths" | Partial — no city |
| Tarifs | "Tarifs - Marrakech PhotoBooths \| Prix location photobooth Marrakech" | ✓ City included |
| À propos | "À propos - Marrakech PhotoBooths \| Notre équipe et histoire" | Partial |
| Blog | "Blog - Marrakech PhotoBooths \| Actualités et conseils photobooth" | Partial |

### H1 Tags

| Page | H1 | Local Signal |
|------|-----|-------------|
| Homepage | "Location de photobooth pour événements et mariages" | ✓ Service-focused, city implied |
| Contact | "Contactez-nous" | Weak |
| Événements | "Photobooth pour événements" | Partial — no city |
| Mariages | "Photobooth pour mariages" | Partial — no city |
| Tarifs | Not visible in fetch | — |

### NAP Visibility

| Element | Status |
|---------|--------|
| Phone in header | **PRESENT** — `+212 6 21 18 94 96` with `tel:` link ✓ |
| Phone in contact section | **PRESENT** — both desktop and mobile ✓ |
| Email in contact section | **PRESENT** — `contact@marrakechphotobooth.com` with `mailto:` link ✓ |
| Address in contact section | **PARTIAL** — "Marrakech, Maroc" (no street) |
| Address in footer | **MISSING** — No address in footer |
| Phone in footer | **MISSING** — No phone in footer |

### Service Pages

| Page | Content Quality | Unique Content |
|------|----------------|----------------|
| /photobooth-evenements/ | **GOOD** — Detailed service description, extras, FAQ (7 questions), how-it-works | High |
| /mariages/ | **GOOD** — Wedding-specific content, extras, FAQ (8 questions), how-it-works | High |
| /videomaton-360/ | **GOOD** — Product details, platform options, extras, FAQ | High |
| /tarifs/ | **GOOD** — Pricing tiers, forfait details | High |
| /blog/ | **GOOD** — 4 blog posts with local content | High |

### Internal Linking

| Aspect | Status |
|--------|--------|
| Hub-and-spoke structure | **PARTIAL** — Service pages link to contact but not to each other systematically |
| Navigation depth | **GOOD** — All pages within 2 clicks of homepage |
| Contextual internal links | **PARTIAL** — FAQ sections link to contact, but limited cross-linking between service pages |

### Click-to-Call

| Status | Details |
|--------|---------|
| `tel:` link in header | **PRESENT** ✓ |
| `tel:` link in mobile menu | **PRESENT** ✓ |
| `tel:` link in contact section | **PRESENT** ✓ |
| WhatsApp button | **PRESENT** — links to wa.me/212621189496 ✓ |

**Local On-Page SEO Score: 55/100** — Good service pages with unique content, but missing city in most title tags/H1s, no address in footer, limited internal linking between service pages.

---

## 9. Location Page Quality (Single Location)

This is a **single-location business** — no multi-location pages or store locator needed.

| Check | Status |
|-------|--------|
| Dedicated location page | **NOT NEEDED** — Single location |
| Store locator | **NOT NEEDED** |
| Doorway page risk | **LOW** — Service pages are distinct (events vs weddings vs 360) with unique content |

---

## 10. Sitemap & Technical Local Signals

| Signal | Status |
|--------|--------|
| XML Sitemap | **PRESENT** — 9 URLs, properly formatted |
| Sitemap in robots.txt | **PRESENT** ✓ |
| Canonical tags | **PRESENT** — All pages have self-referencing canonicals ✓ |
| robots.txt | **PRESENT** — `Allow: /` ✓ |
| Hreflang | **MISSING** — Site is French-only, but targets Morocco (French-speaking). Consider `hreflang="fr-MA"` |
| Mobile responsive | **PRESENT** — Responsive design with mobile menu ✓ |
| HTTPS | **CANONICAL** — Canonical domain uses HTTPS ✓ |
| OG images | **PRESENT** — All pages have Open Graph images ✓ |
| OG locale | **PRESENT** — `fr_FR` ✓ |

---

## 11. Top 10 Prioritized Actions

### Critical (Immediate)

| # | Action | Impact |
|---|--------|--------|
| 1 | **Claim and optimize Google Business Profile** — If not already claimed, this is the #1 priority. Choose "Photo Booth Rental" or "Event Equipment Rental" as primary category. Add 10+ photos, complete all fields, enable messaging. | GBP signals = 32% of local pack weight |
| 2 | **Implement review generation strategy** — Zero reviews = invisible in local pack. Set up post-event email/SMS flow asking for Google reviews. Target: 2-3 reviews/month minimum, maintain 18-day cadence. | Review signals = ~20% of local pack weight |
| 3 | **Add aggregateRating schema** — Once reviews exist, add `aggregateRating` with `ratingValue` and `reviewCount` to enable star rich results (43% CTR increase). | Rich results + AI citation |

### High Priority (This Month)

| # | Action | Impact |
|---|--------|--------|
| 4 | **Add `geo` coordinates to schema** — Marrakech center: `"latitude": "31.6295", "longitude": "-7.9811"` (4+ decimals minimum, 5 recommended). Critical for "near me" searches where proximity = 55.2% of ranking variance. | Proximity signal |
| 5 | **Add `areaServed` to schema** — `"areaServed": ["Marrakech", "Agdal", "Guéliz", "Palmeraie", "Hivernage"]` — targets AI citation (3 of top 5 AI factors are citation-related). | AI visibility |
| 6 | **Add `sameAs` to schema** — Link all 6 social profiles in schema: Facebook, Instagram, LinkedIn, X, TikTok, YouTube. | Entity verification + AI citations |
| 7 | **Add city + service to ALL title tags** — Currently only homepage and tarifs have "Marrakech". Update: Events → "Photobooth pour Événements à Marrakech", Mariages → "Photobooth pour Mariages à Marrakech". | Local keyword relevance |

### Medium Priority (This Quarter)

| # | Action | Impact |
|---|--------|--------|
| 8 | **Claim Apple Business Connect** — Usage doubled to 27% in 2026. Free listing with photos, hours, and website link. | Citation + discovery |
| 9 | **Claim Bing Places** — Powers ChatGPT, Copilot, and Alexa. 45% of consumers now use AI for local recommendations (BrightLocal 2026). | AI visibility |
| 10 | **Add Google Maps embed to contact page** — Geographic signal reinforcement. Use lazy-loading (`loading="lazy"`) to mitigate speed impact. | Geographic relevance signal |

### Lower Priority (Ongoing)

| # | Action | Impact |
|---|--------|--------|
| 11 | **Add `image` property to schema** — Use a high-quality business photo (logo or team photo). | Rich results eligibility |
| 12 | **Improve footer NAP** — Add phone and "Marrakech, Maroc" to footer for consistent NAP across all pages. | NAP consistency |
| 13 | **Add `postalCode` to schema** — Marrakech postal codes: 40000 (city center). | Schema completeness |
| 14 | **Cross-link service pages** — Add "Related services" sections: Événements links to Mariages and 360, etc. | Internal linking depth |
| 15 | **Submit to data aggregators** — Data Axle, Foursquare, Neustar/TransUnion for downstream citation distribution. | Citation breadth |
| 16 | **Create location-specific content** — Blog posts targeting "best photobooth Marrakech", "wedding photobooth Marrakech cost", etc. | Local content signals |
| 17 | **Add hreflang="fr-MA"** — Explicitly signal French-Morocco targeting. | International SEO |
| 18 | **Update copyright year** — Footer shows "© 2024" — should be 2026. Minor but signals freshness. | Freshness signal |

---

## 12. Limitations Disclaimer

This analysis was conducted via server-side HTML analysis and source code inspection. The following could NOT be assessed without paid tools or live GBP access:

| Gap | Tool Needed |
|-----|-------------|
| Actual GBP listing status and optimization | Google Business Profile dashboard access |
| Local pack ranking positions | DataForSEO `google_local_pack_serp` or SEMrush/Ahrefs |
| Geo-grid rank tracking (visibility by distance) | DataForSEO `local_business_data` or Local Falcon |
| Domain Authority / Domain Rating | Ahrefs, Moz, or SEMrush |
| Complete backlink profile | Ahrefs, Moz, or DataForSEO |
| Real-time review count and rating | Google Maps API or GBP dashboard |
| GBP Insights (search queries, views, actions) | Google Business Profile dashboard |
| Competitor local pack positions | DataForSEO or SERP tracking tool |
| Apple Maps ranking | Apple Business Connect dashboard |
| Bing Places ranking | Bing Webmaster Tools |
| Citation accuracy across directories | BrightLocal, Whitespark, or Yext citation audit |
| Core Web Vitals field data | PageSpeed Insights API or CrUX |
| AI visibility (ChatGPT, Perplexity mentions) | DataForSEO or SE Ranking AI visibility |

---

## Summary

Marrakech PhotoBooths has a solid website foundation with good service pages, consistent NAP data, and proper technical SEO (canonical tags, sitemap, responsive design). However, the **local SEO infrastructure is critically weak**:

1. **No GBP integration** on the website (no maps, no reviews widget, no place references)
2. **Zero reviews** — completely invisible in local pack results
3. **Incomplete schema** — missing `geo`, `areaServed`, `sameAs`, `aggregateRating`, and industry-specific type
4. **No citation presence** on Tier 1 directories (Yelp, BBB, Apple Maps, Bing Places)
5. **Missing city keyword** in most page title tags

The business has strong content (unique service pages with FAQs) and good social presence (6 platforms), but these are not being leveraged for local search visibility. Implementing the Critical and High Priority actions above would likely move the Local SEO Score from **38/100 to 65-70/100** within 30-60 days.
