# Process Steps Specification

## Overview
- **Target file:** `src/components/ProcessSteps.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png`
- **Interaction model:** Static

## DOM Structure
```
.proceso
  .row > .col (x4)
    p (number) → "01"
    h3 → "CREA"
    p (description)
```

## Content
1. "01" — CREA — "recuerdos y experiencias inolvidables para tus invitados"
2. "02" — PERSONALIZA — "para que tu evento sea único"
3. "03" — COMPARTE — "con tecnologia fast sharing en qr, airdrop o whatsapp"
4. "04" — IMPRIME — "en foto, sticker, metalizado, translúcido o lenticular"

## Responsive Behavior
- Desktop: 4 items in horizontal row
- Mobile: stacked or 2x2 grid
