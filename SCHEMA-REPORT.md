# Schema.org Structured Data Audit — Marrakech PhotoBooths

**URL:** `http://localhost:3000` (dev) → production: `https://MarrakechPhotoBooth.com/`
**Date:** 2026-07-26
**Format:** JSON-LD ✅ (server-rendered in `<head>`)

---

## 1. Detection Results

### Existing Schema Found

| # | Format | @type | Location | Status |
|---|--------|-------|----------|--------|
| 1 | JSON-LD | `LocalBusiness` | `src/app/layout.tsx` (lines 73–93) | ⚠️ Issues found |

**No Microdata or RDFa detected** — JSON-LD is the only format used (correct approach per Google's preference).

### Other Structured Data

- ✅ **Open Graph** tags present (title, description, url, image, locale, type)
- ✅ **Twitter Card** meta tags present (summary_large_image)
- ⚠️ OG Image URL uses `localhost` in dev — production likely correct

---

## 2. Validation Results

### Schema Block 1: `LocalBusiness` (layout.tsx)

| Check | Result | Details |
|-------|--------|---------|
| @context = `https://schema.org` | ✅ Pass | Correct |
| @type valid & not deprecated | ✅ Pass | `LocalBusiness` is active |
| Required properties | ⚠️ Partial | Missing `address.streetAddress`, `image` |
| URL is absolute | ✅ Pass | `https://MarrakechPhotoBooth.com` |
| No placeholder text | ⚠️ Warning | `email` is not a valid schema.org property |
| Date formats | N/A | No dates in this schema |
| `telephone` format | ✅ Pass | E.164 format `+212621189496` |
| `openingHoursSpecification` | ⚠️ Partial | Valid structure but missing `validFrom`/`validThrough` |
| `priceRange` | ✅ Pass | Acceptable value |

### Detailed Issues

#### ❌ Critical: Missing Required Properties

1. **`address.streetAddress`** — `PostalAddress` without a street address is incomplete. Google's LocalBusiness rich results require a full address.
2. **`image`** — No logo or business image defined. Google requires at least one image for LocalBusiness rich results.

#### ⚠️ Warning: Incorrect/Missing Properties

3. **`email` is NOT a schema.org property** — The `email` property belongs to `Person` or `Organization`, not `LocalBusiness` directly. It should be nested under a `ContactPoint` or moved to an `Organization` schema.
4. **`geo` missing** — No latitude/longitude coordinates. Important for local SEO and Google Maps visibility.
5. **`sameAs` missing** — No social media profile links. Recommended for Knowledge Panel enhancement.
6. **`aggregateRating` missing** — No reviews/ratings. If the business has Google reviews, adding this would enable star ratings in SERPs.
7. **`areaServed` missing** — Not specifying the service area (Marrakech region).
8. **`priceRange` uses `$$`** — While accepted, a more specific range or最低/最高 prices would be better.

#### ℹ️ Recommendation: Missing Schema Types

9. **No `WebSite` schema** — Missing `WebSite` with `potentialAction: SearchAction` for sitelinks searchbox.
10. **No `BreadcrumbList`** — No breadcrumb navigation schema on any page.
11. **No `Service` schema** — The business offers photobooth rental services but doesn't mark them up.
12. **No `Product`/`Offer` schema** — The pricing page lists specific packages with prices but has no structured data.
13. **No `Article`/`BlogPosting` schema** — Blog posts have no structured data despite having rich content.
14. **No `FAQPage` schema** — The homepage and pricing page have FAQ sections but no FAQPage markup (Note: restricted to gov/healthcare for Google rich results since Aug 2023, but still benefits AI/LLM citations).
15. **No `Organization` schema** — The `LocalBusiness` should ideally be supplemented with or nested under an `Organization`.

---

## 3. Generated JSON-LD — Improved LocalBusiness

Replace the existing `jsonLd` object in `src/app/layout.tsx` with:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Marrakech PhotoBooths",
  "url": "https://MarrakechPhotoBooth.com",
  "logo": "https://MarrakechPhotoBooth.com/images/logo header.webp",
  "image": "https://MarrakechPhotoBooth.com/images/hero/fotomaton-madera.webp",
  "telephone": "+212621189496",
  "email": "contact@marrakechphotobooth.com",
  "description": "Location de photobooth pour événements et mariages à Marrakech.",
  "priceRange": "2500-5000 MAD",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Marrakech",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.6295,
    "longitude": -7.9811
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 31.6295,
      "longitude": -7.9811
    },
    "geoRadius": "50 km"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "22:00"
  },
  "sameAs": [
    "https://www.instagram.com/marrakechphotobooth",
    "https://www.facebook.com/marrakechphotobooth",
    "https://wa.me/212621189496"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de Photobooth",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Photobooth Classique",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Photobooth Premium",
              "description": "Service de photobooth complet pour mariages et événements d'entreprise"
            },
            "price": "2500",
            "priceCurrency": "MAD",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "2500",
              "priceCurrency": "MAD",
              "billingDuration": {
                "@type": "QuantitativeValue",
                "value": "4",
                "unitCode": "HUR"
              }
            }
          }
        ]
      }
    ]
  }
}
```

---

## 4. Recommended Additional Schema — Per Page

### 4.1 WebSite Schema (layout.tsx — add alongside LocalBusiness)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Marrakech PhotoBooths",
  "url": "https://MarrakechPhotoBooth.com",
  "inLanguage": "fr",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://MarrakechPhotoBooth.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### 4.2 Service Schema (per service page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Photobooth Rental",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Marrakech PhotoBooths"
  },
  "areaServed": {
    "@type": "City",
    "name": "Marrakech"
  },
  "description": "Location de photobooth pour événements et mariages à Marrakech",
  "offers": {
    "@type": "Offer",
    "price": "2500",
    "priceCurrency": "MAD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "2500",
      "priceCurrency": "MAD",
      "billingDuration": {
        "@type": "QuantitativeValue",
        "value": "4",
        "unitCode": "HUR"
      }
    }
  }
}
```

### 4.3 BlogPosting Schema (blog/[slug]/page.tsx)

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "{{post.title}}",
  "author": {
    "@type": "Organization",
    "name": "Marrakech PhotoBooths"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Marrakech PhotoBooths",
    "logo": {
      "@type": "ImageObject",
      "url": "https://MarrakechPhotoBooth.com/images/logo header.webp"
    }
  },
  "datePublished": "{{ISO date}}",
  "image": "https://MarrakechPhotoBooth.com{{post.image}}",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://MarrakechPhotoBooth.com/blog/{{slug}}"
  }
}
```

### 4.4 BreadcrumbList Schema (all subpages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://MarrakechPhotoBooth.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{{Page Name}}",
      "item": "https://MarrakechPhotoBooth.com/{{page-slug}}"
    }
  ]
}
```

### 4.5 Product/Offer Schema (tarifs/page.tsx)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Photobooth Premium — 4h",
  "description": "Forfait complet photobooth pour mariages et événements. Photos & vidéos illimitées, impressions haute qualité, accessoires premium, technicien dédié.",
  "image": "https://MarrakechPhotoBooth.com/images/hero/fotomaton-madera.webp",
  "brand": {
    "@type": "Brand",
    "name": "Marrakech PhotoBooths"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://MarrakechPhotoBooth.com/tarifs",
    "priceCurrency": "MAD",
    "price": "2500",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "LocalBusiness",
      "name": "Marrakech PhotoBooths"
    }
  }
}
```

---

## 5. Summary

| Category | Count | Priority |
|----------|-------|----------|
| Existing schema blocks | 1 | — |
| Validation errors | 2 | 🔴 Critical |
| Validation warnings | 6 | 🟡 Medium |
| Missing schema opportunities | 7 | 🟠 High–Medium |

### Priority Actions

1. **🔴 Fix `LocalBusiness`** — Add `image`, fix `address`, remove invalid `email` property (or nest under `ContactPoint`), add `geo`.
2. **🟠 Add `WebSite` schema** — Enables sitelinks searchbox in Google.
3. **🟠 Add `BlogPosting` schema** — Blog posts have zero structured data.
4. **🟠 Add `Product`/`Offer` schema** on `/tarifs` — Pricing page has structured data gold but isn't marked up.
5. **🟡 Add `BreadcrumbList`** on all subpages — Helps Google understand site hierarchy.
6. **🟡 Add `Service` schema** — Define the core photobooth rental service.
7. **ℹ️ FAQ sections** — Existing FAQ content on homepage and /tarifs can be marked up with `FAQPage` for AI/LLM discoverability (no Google rich result for commercial sites, but improves GEO/AI citation odds).

---

*Generated by seo-schema skill. Validate output at [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/).*
