# Clients Section Specification

## Overview
- **Target file:** `src/components/ClientsSection.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png`
- **Interaction model:** Static

## DOM Structure
```
.clientes
  .clientes__header
    h2 → "Clientes"
    a → "Ver todos los clientes" (href: /clientes/)
  .clientes__logos
    .col-6.col-md-3 (x4)
      img (client logo)
```

## Assets
- `public/images/clients/Bacardi-cliente-Fotomaton-Barcelona.png`
- `public/images/clients/Cartier-cliente-Fotomaton-Barcelona.png`
- `public/images/clients/HM-cliente-moda-Fotomaton-Barcelona.png`
- `public/images/clients/Intel-cliente-tecnologico-Fotomaton-Barcelona.png`

## Responsive Behavior
- Desktop: 4 logos in a row
- Mobile: 2 per row
