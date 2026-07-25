# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png`
- **Interaction model:** Static (links only)

## Computed Styles
- background-color: rgb(30, 30, 42)
- color: white
- font-family: suisse
- borderRadius: 100.8px 100.8px 0px 0px (top rounded)

## DOM Structure
```
footer
  .footer
    .footer__social
      a (x6 social icons)
    .footer__columns
      .col (x3)
        h3 (column title)
        ul > li > a (links)
      .col
        a (wedding awards badge)
    .footer__bottom
      img (footer logo)
      p (legal text)
```

## Content

### Social Icons Row
Same as navbar: X, TikTok, LinkedIn, Facebook, Instagram, YouTube

### Column 1: Eventos
- "Fotomatón Eventos" (/fotomaton-para-eventos/)
- "Spin 360º" (/fotomaton-videomaton-360/)
- "Fotomatón IA" (/fotomaton-ia/)
- "Mosaic Wall" (/fotomaton-mosaic-wall/)
- "Fotomatón Smart" (/fotomaton-smart-eventos/)
- "Printoku" (/impresora-printoku/)
- "Letras Gigantes" (/letras-gigantes-iluminadas/)
- "Photocall Red Carpet" (/fotografia-photocall/)

### Column 2: Bodas y fiestas
- "Fotomatón Bodas" (/fotomaton-bodas-fiestas/)
- "Spin 360º" (/spin-360-bodas-fiestas/)
- "Fotomatón Glam" (/fotomaton-glam-bodas-fiestas/)
- "Fotomatón Catwalk" (/fotomaton-catwalk-bodas-fiestas/)
- "Printoku" (/impresora-fotos-smartphone-printoku/)
- "Letras Gigantes" (/letras-gigantes/)
- "Photocall Red Carpet" (/photocall-red-carpet/)

### Column 3: Recursos
- "Nosotros" (/nosotros/)
- "Política de privacidad" (/politica-privacidad/)
- "Política de cookies" (/politica-de-cookies/)
- "Aviso legal" (/aviso-legal/)
- "Blog" (/blog/)
- "Hablan sobre nosotros" (/blog/hablan-sobre-nosotros/)

### Badge
- Wedding Awards 2024 Bodas.net badge image

### Footer Bottom
- Logo: `public/images/logo-fotomaton-barcelona-footer.svg`
- Legal text: "El titular de esta website es "Mejor que Mejor, S.L."..."

## Assets
- Footer logo: `public/images/logo-fotomaton-barcelona-footer.svg`
- Social icons: `public/images/icons/*.svg`
- Badge: external image from bodas.net

## Responsive Behavior
- Desktop: 3 columns + badge column
- Mobile: Stacked columns
