# Events Tags Specification

## Overview
- **Target file:** `src/components/EventsTags.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png`
- **Interaction model:** Static (tags are links)

## DOM Structure
```
.tags
  img (background image)
  .tags__content
    h2 → "Para todo tipo de eventos"
    .tags__list
      a → "Fiestas"
      a → "Cumpleaños"
      a → "Bodas"
      a → "Congresos"
      a → "Ferias"
      a → "Celebraciones"
      a → "Meetings"
```

## Assets
- Background image: `public/images/Fotomaton-Barcelona-Fotomaton-para-eventos.jpg`

## Responsive Behavior
- Desktop: Large h2, tags in a row
- Mobile: Smaller h2, tags wrap
