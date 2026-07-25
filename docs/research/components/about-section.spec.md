# About Section Specification

## Overview
- **Target file:** `src/components/AboutSection.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png`
- **Interaction model:** Static

## DOM Structure
```
.about
  .about__header
    h4 → "Ofrecemos alquiler de fotomatón y tendencias de entretenimiento para eventos"
    a.btn → "Consulta nuestros catálogos" (href: /descargas/)
  .about__content
    .about__text (paragraph)
    .about__img (image)
  .about__content
    p (paragraph)
    .about__img (image)
```

## Text Content
- H4: "Ofrecemos alquiler de fotomatón y tendencias de entretenimiento para eventos"
- CTA: "Consulta nuestros catálogos"
- Paragraph 1: "Fotomatón Barcelona es una empresa especializada en alquiler de fotomatón, servicios audiovisuales y de marketing para la dinamización de eventos privados y corporativos. Nuestros servicios generan recuerdos, diversión y experiencias de marca a partes iguales."
- Paragraph 2: "Con un equipo pionero en el sector, transformamos cualquier evento en una experiencia interactiva y divertida. Desde 2013 ofrecemos servicios de alquiler de fotomatones y videomatones personalizados y servicios de impresión fotográfica en formatos novedosos y sostenibles. ¡Cuéntanos tus ideas y las haremos realidad! Siempre a la vanguardia destacando por nuestra profesionalidad, nuestra calidad en el servicio y los resultados."

## Assets
- Image 1: `public/images/about/Fotomaton-Barcelona-Alquilar-Fotomaton.jpg`
- Image 2: `public/images/about/Fotomaton-Eventos-Barcelona-scaled.jpg`
- Image 3: `public/images/about/Videomaton-360-Evento-corporativo.jpg`

## Responsive Behavior
- Desktop: 2-column layout with text and images side by side
- Mobile: Stacked layout, images full-width
