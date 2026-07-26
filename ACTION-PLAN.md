# SEO Action Plan — Marrakech PhotoBooths

| Priority | Issue | Action | Effort | Impact |
|----------|-------|--------|--------|--------|
| CRITICAL | Zero Google reviews | Create GBP, request reviews from past clients, add aggregateRating schema | 1 day | High — Trust signals, local pack visibility |
| CRITICAL | Missing security headers | Deploy Netlify `_headers` with CSP, HSTS, X-Frame-Options, X-Content-Type-Options | 5 min | Medium — Security, E-E-A-T trust |
| CRITICAL | Schema validation errors (5) | Fix LocalBusiness email, Service billingDuration, FAQPage restricted types, Product missing fields, BlogPosting missing dateModified/publisher.logo | 1 hour | Medium — Rich results eligibility |
| CRITICAL | Blog posts missing from sitemap | Add 6 blog post URLs to `sitemap.xml`, fix lastmod dates to reflect actual publish dates | 15 min | Medium — Indexation |
| CRITICAL | Invalid LocalBusiness schema | Remove invalid email format, add streetAddress, addressRegion, postalCode | 30 min | Medium — Local pack eligibility |
| HIGH | Thin blog posts (<600 words) | Expand all blog posts to 1500+ words with examples, FAQs, internal links | 1 week | High — Rankings, AI citation, time-on-page |
| HIGH | No author bylines on blog | Add author name, bio, photo, and LinkedIn link to every blog post | 2 hours | Medium — E-E-A-T Experience/Expertise |
| HIGH | No testimonials on site | Create testimonials section on homepage with client names, event types, quotes | 2 hours | High — Social proof, conversions |
| HIGH | No pricing on homepage | Add pricing tiers/packages section with clear CTA | 1 hour | High — Conversion rate, reduce bounce |
| HIGH | Low-resolution hero images | Replace with 1920px+ WebP hero images, add proper alt text | 1 hour | Medium — CWV, visual quality |
| MEDIUM | No dedicated service page | Create `/location-photobooth-marrakech` targeting primary keyword | 1 week | High — Rankings for main keyword |
| MEDIUM | Thin A-propos page (~350 words) | Expand to 800+ words with founder story, experience, equipment, certifications | 2 hours | Medium — E-E-A-T, conversions |
| MEDIUM | No comparison content | Add "Photobooth vs Photographer" and "Our Packages Compared" tables | 2 hours | Medium — Featured snippets, decision-stage traffic |
| MEDIUM | IndexNow not implemented | Add IndexNow key and endpoint for instant Bing/Yandex indexing | 1 hour | Low — Faster indexing on Bing |
| MEDIUM | Short FAQ answers | Expand all FAQ answers to 134-167 words with actionable detail | 2 hours | Medium — Featured snippets, PAA |
| MEDIUM | No video on site | Embed YouTube videos of booth setups and event highlights | 1 hour | Medium — Engagement, AI search signals |
| MEDIUM | Footer touch targets too small | Increase footer link tap areas to minimum 48px | 30 min | Low — Mobile usability |
| MEDIUM | No Bing Places listing | Claim and verify Bing Places with NAP matching GBP | 30 min | Medium — Bing local visibility |
| LOW | No hreflang tags | Add `hreflang="fr"` and `hreflang="en"` for bilingual content | 1 hour | Low — International SEO |
| LOW | No Wikipedia presence | Work toward notability for brand/entity recognition by LLMs | Ongoing | Low — AI authority signals |
| LOW | No image sitemap | Add image sitemap with alt text, captions, and license info | 1 hour | Low — Image search visibility |
| LOW | Static sitemap dates | Implement dynamic sitemap generation with real lastmod dates | 2 hours | Low — Crawl efficiency |
| LOW | JPEG format inconsistency | Convert all images to WebP, set up automatic conversion pipeline | 2 hours | Low — Performance, CWV |
| LOW | No CWV monitoring | Set up CrUX monitoring and Lighthouse CI for ongoing CWV tracking | 2 hours | Low — Performance maintenance |
