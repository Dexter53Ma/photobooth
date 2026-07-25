# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png`
- **Interaction model:** Time-driven (auto-rotating hero images via Swiper)

## Computed Styles
- padding: 108px 0px 144px
- height: ~1272px
- position: static, overflow: visible

## DOM Structure
```
.hero
  .hero__content
    h1 (uppercase, small) → "Fotomaton Barcelona"
    h2 → "Alquiler de fotomatón para [eventos] y [bodas]"
  .hero__btn (arrow down)
  .hero__social (social icons row)
  .hero__slider (absolute positioned images)
    .hero__img--small (multiple)
    .hero__img--medium (multiple)
    .hero__img--big (multiple)
```

## Computed Styles (exact values)

### H1
- fontSize: 12.6px
- fontWeight: 500
- fontFamily: suisse
- color: rgb(128, 128, 128)
- textTransform: uppercase
- letterSpacing: -0.099px
- padding: 0px 10.8px
- margin-bottom: 7.2px

### H2
- fontSize: 93.6px
- fontWeight: 400
- fontFamily: platform, roboto, arial, "helvetica neue", sans-serif
- color: rgb(30, 30, 42)
- lineHeight: 93.6px
- letterSpacing: -0.936px
- padding: 0px 10.8px

### Arrow Button
- ico-arrow.svg icon, linked to "#"

### Social Icons Row
- 6 icons: X, TikTok, LinkedIn, Facebook, Instagram, YouTube
- Each 24x24px
- Linked to external social URLs

## Hero Images (absolute positioned)
All images are positioned absolutely within the hero container:
- fotomaton-madera.jpg (small)
- fotomaton-pantalla-lateral-boda.jpg (big)
- fotomaton-evento-empresa.jpg (medium)
- videomaton-360.jpg (small)
- fotomaton-espejo-mirror-booth.jpg (small)
- voguebooth-led-fotomaton.jpg (medium)
- videomaton-photocall-personalizado.jpg (big)
- totem-fotomaton-pantalla.jpg (small)

## Assets
- Arrow icon: `public/images/ico-arrow.svg`
- Social icons: `public/images/icons/icob2-x.svg`, `icob-tiktok.svg`, `icob-linkedin.svg`, `icob-facebook.svg`, `icob-instagram.svg`, `icob-youtube.svg`
- Hero images: `public/images/hero/*.jpg`

## Responsive Behavior
- Desktop: Large H2 (93.6px), hero images spread across container
- Tablet: H2 scales down, fewer visible images
- Mobile: H2 much smaller, reduced hero height
