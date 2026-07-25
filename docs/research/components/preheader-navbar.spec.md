# PreHeader + Navbar Specification

## Overview
- **Target files:** `src/components/PreHeader.tsx`, `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png`
- **Interaction model:** Static (links only, mobile hamburger opens offcanvas)

## PreHeader Component

### Computed Styles
- position: fixed, top: 0, z-index: 1030
- display: flex, justify-content: space-between, align-items: center
- background-color: rgb(255, 4, 34)
- color: white
- font-family: suisse
- font-size: 19.8px (desktop) / smaller on mobile
- height: ~31px
- padding: 0px 21.6px 1.44px 14.4px

### Content
- Left side: Language links — "Español" (href="/"), "Català" (href="/ca/"), "English" (href="/en/")
- Right side: Phone links — "620 805 760" (tel:620805760), "695 573 638" (tel:695573638), Email — "info@fotomatonbarcelona.es"

### Responsive
- Desktop: full content visible
- Mobile: may hide some elements, simplified layout

## Navbar Component

### Computed Styles
- position: relative (not sticky/fixed)
- display: flex, justify-content: space-between, align-items: center
- background: transparent
- height: ~63px
- padding: 0px 0px 7.2px
- font-family: suisse

### Content
- Logo: `public/images/logo-fotomaton-barcelona.svg` (linked to "/")
- Nav links: "Eventos" (#), "Bodas y fiestas" (#), "Contacto" (/contacto/)
- Mobile: hamburger menu icon → offcanvas sidebar

### Responsive
- Desktop (1440px): horizontal nav links visible
- Mobile (390px): hamburger icon, offcanvas menu

### Assets
- Logo SVG: `public/images/logo-fotomaton-barcelona.svg`
