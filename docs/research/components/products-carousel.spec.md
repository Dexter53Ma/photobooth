# Products Carousel Specification

## Overview
- **Target file:** `src/components/ProductsCarousel.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png`
- **Interaction model:** Click-driven (prev/next carousel navigation)

## DOM Structure
```
.productos
  .productos__header
    h2 → "Productos"
    .productos__nav
      button (prev, disabled initially)
      button (next)
  .swiper.mySwiper
    .swiper-wrapper
      .swiper-slide (x10)
        .producto__card
          .producto__image (img, absolute positioned)
          .producto__text
            h4 (title)
            p (description)
          .producto__cta
            a.btn → "Ver más"
            a.btn → "Para eventos" / "Para bodas"
```

## Product Cards Data (10 items)
1. Fotomatón Classic — "Fotografías personalizadas impresas al momento." — [eventos, bodas]
2. Spin 360º — "Videos 360º personalizados" — [eventos, bodas]
3. Fotomatón Mini — "compacto y elegante" — [eventos, bodas]
4. Fotomatón Smart — "Nuevo fotomatón ideal para los servicios IA y Glam" — [eventos, bodas]
5. Fotomatón Espejo — "fotomatón con pantalla espejo" — [eventos, bodas]
6. Glambot — "Brazo glambot robotizado para captar increíbles movimientos" — [eventos]
7. Letras iluminadas — "Crea un selfie-corner único." — [eventos, bodas]
8. Fotomatón Cenital — "sistema para perspectiva cenital" — [eventos]
9. SuperZoom — "Sistema para generar un video de SuperZoom" — [eventos]
10. Purikura — "personaliza tus fotos con filtros y stickers" — [eventos, bodas]

## Assets
- Product images: `public/images/products/*.png`
