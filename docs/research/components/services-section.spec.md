# Services Section Specification

## Overview
- **Target file:** `src/components/ServicesSection.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png`
- **Interaction model:** Click-driven (tab switching) + Hover-driven (card text reveal)

## DOM Structure
```
.servicios
  .servicios__header
    h2 → "Servicios"
    .servicios__filters (tab bar)
      button#pills-1-tab → "Todos"
      button#pills-2-tab → "Eventos"
      button#pills-3-tab → "Bodas y fiestas"
  .servicios__content (tab panels)
    #pills-1.tab-pane (grid of 21 service cards)
      .row > .col-md-6.col-lg-4
        .servicio__card
          .servicio__image (img or video)
          .servicio__overlay
          .servicio__text
            .servicio__title (h3)
            .servicio__description (p)
          .servicio__cta
            .servicio__cta--initial (btn btn-red "Alquilar Fotomatón")
            .servicio__cta--hover (btn btn-white links)
    #pills-2.tab-pane (detail view)
    #pills-3.tab-pane (detail view)
```

## Computed Styles

### Tab Buttons
- fontSize: 19.8px
- fontFamily: suisse
- borderRadius: 144px
- padding: 7.2px 21.6px
- Default: bg rgb(30, 30, 42), color white, border 1px solid rgb(30, 30, 42)
- Active: bg rgb(255, 4, 34), color white

### Service Card
- borderRadius: 24px
- overflow: hidden
- position: relative
- Width: ~462px (desktop, 3-col grid)

### Card Text Panel (servicio__text)
- Default state: transform: translateY(calc(100% - 70px)) — partially hidden at bottom
- Hover state: transform: translateY(0) — slides up to reveal full content
- transition: transform 0.4s ease

### Card CTA
- Initial: opacity 1 → 0 on hover
- Hover buttons: opacity 0 → 1 on hover
- transition: opacity 0.3s ease

### Buttons
- btn-red: bg rgb(255, 4, 34), color white, borderRadius 144px, padding 8.64px 28.8px
- btn-white: bg white, color rgb(30, 30, 42), borderRadius 144px, padding 8.64px 28.8px

## Service Cards Data (21 items)
All cards follow the same structure. Media can be image or video.

1. Fotomatón — "Customízalo con tu logo o imagen corporativa." — image — [eventos, bodas]
2. Videomatón Spin 360º — "Crea vídeos circulares a velocidad real o 'slow motion'." — video — [eventos, bodas]
3. Fotomatón Smart — "A la última en tecnología y diseño" — image — [eventos]
4. Fotomatón IA — "Conviértete en quién tú quieras con el nuevo 'face swap'." — video — [eventos]
5. Fotomatón Glam — "Más beauty, menos imperfecciones… Muy Kardashian." — video — [bodas]
6. Fotomaton Firma — "Recoge firmas y mensajes en vídeo de todos tus invitados" — image — [eventos]
7. Fotomatón Catwalk — "Desfila ante la cámara como Naomi Campbell." — video — [eventos, bodas]
8. Voguebooth — "Crea vídeos con un decorado digno de un videoclip de los 2000." — image — [eventos, bodas]
9. Glambot Robótico — "¡Crea vídeos con un el Glambot brazo robótico como en los Oscars!" — video — [eventos]
10. Fotomatón Espejo — "¡Posa frente al espejo y dispara!" — image — [eventos, bodas]
11. Mosaic Wall — "Crea un foto-mural como experiencia de team building." — video — [eventos]
12. Fotomatón cabina — "Una cabina personalizable con cámara mirrorless Canon..." — image — [eventos]
13. Photocall Red Carpet — "Infinidad de fondos y moquetas..." — image — [eventos, bodas]
14. Fotomatón Cenital — "Dale a tus fotos una nueva perspectiva..." — video — [eventos]
15. Printoku — "Imprime las fotos realizadas por los invitados..." — image — [eventos, bodas]
16. Letras gigantes — "Crea un selfie corner ideal con tus iniciales..." — image — [eventos, bodas]
17. Purikura — "¡Único y llegado del lejano oriente... muy Kwaii!" — image — [eventos, bodas]
18. Fotomaton SuperZoom — "'Yo estuve ahí'" — video — [eventos]
19. Fotógrafo/a itinerante — "Capta e imprime los mejores momentos." — image — [eventos]
20. Azafato/a Smartphoto — "¡Te sacamos una sonrisa y una impresión personalizada!" — image — [eventos]
21. Azafato/a Instax o Polaroid — "Una oda a las míticas cámaras instantáneas." — image — [eventos]

## Responsive Behavior
- Desktop (1440px): 3-column grid (col-md-6 col-lg-4)
- Tablet (768px): 2-column grid
- Mobile (390px): single column

## Assets
- Service images: various paths in `public/images/` and `public/images/services/`
- Service videos: `public/videos/*.mp4`
