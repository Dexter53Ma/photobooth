# FAQ Section Specification

## Overview
- **Target file:** `src/components/FAQSection.tsx`
- **Screenshot:** `docs/design-references/desktop-full.png`
- **Interaction model:** Click-driven (accordion expand/collapse)

## DOM Structure
```
.faq
  h3 → "Preguntas frecuentes"
  .accordion
    .accordion-item (x6)
      .accordion-header
        button.accordion-button (collapsed by default)
      .accordion-collapse
        .accordion-body
          p (answer text)
```

## FAQ Data
1. "¿Por qué elegir Fotomatón Barcelona?" — Long answer about company quality
2. "¿Hay mínimo de horas de servicio?" — "En general, el mínimo tiempo de servicio es de 3 horas en servicios de fotomatón y de 2 horas en spin 360."
3. "¿Hay un máximo de fotografías y copias / vídeos?" — "En general, tanto las fotos como las copias impresas y los vídeos son ilimitados durante todo el servicio."
4. "¿Puedo personalizar el servicio?" — "La personalización de los servicios es uno de nuestros puntos fuertes..."
5. "¿Cuánto tiempo es necesario para el montaje?" — "El montaje puede variar según el lugar del evento..."
6. "¿Cómo reservo y pago el servicio?" — "Para confirmar la reserva hay que realizar el ingreso indicado en cada presupuesto..."

## Behavior
- Accordion: click to expand/collapse
- Transition: Bootstrap collapse (height animation)
- Active button: color changes to brand red, no background
- Chevron icon rotates on expand
