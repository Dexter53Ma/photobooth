# Page Topology — fotomatonbarcelona.es

## Visual Order (Top to Bottom)

### 1. Pre-Header (Fixed Top Bar)
- **Type:** Fixed overlay (z-index: 1030)
- **Content:** Language switcher (Español, Català, English) | Phone numbers | Email
- **Height:** ~35px
- **Background:** rgb(255, 4, 34) — brand red
- **Text color:** white
- **Interaction model:** Static — links only

### 2. Navbar (Below Pre-Header)
- **Type:** Static (becomes sticky/fixed on scroll — needs verification)
- **Content:** Logo | Nav links: Eventos, Bodas y fiestas, Contacto | Mobile hamburger
- **Height:** ~65px
- **Background:** transparent initially
- **Interaction model:** Static, with mobile offcanvas menu

### 3. Hero Section
- **Type:** Flow content, large section
- **Height:** ~1558px at desktop
- **Padding:** 120px top, 160px bottom
- **Content:**
  - H1: "Fotomaton Barcelona"
  - H2: "Alquiler de fotomatón para eventos y bodas"
  - Arrow down button
  - Social media icons (X, TikTok, LinkedIn, Facebook, Instagram, YouTube)
  - Hero image slider/carousel (absolute-positioned images cycling)
- **Interaction model:** Time-driven (auto-rotating hero images via Swiper)
- **Images:** 8 absolute-positioned images with classes hero__img--small/medium/big

### 4. About Section
- **Type:** Flow content
- **Content:**
  - H4: "Ofrecemos alquiler de fotomatón y tendencias de entretenimiento para eventos"
  - Link: "Consulta nuestros catálogos"
  - Description paragraph
  - 2-3 images (absolute positioned)
- **Interaction model:** Static

### 5. Services Section
- **Type:** Flow content
- **Content:**
  - H2: "Servicios"
  - Tab bar: Todos | Eventos | Bodas y fiestas
  - Grid of 21 service cards (3 columns desktop, 1 column mobile)
- **Interaction model:** Click-driven (tab switching)
- **Card structure:**
  - `.servicio__card` — border-radius: 24px, overflow: hidden
  - `.servicio__image` — absolute-positioned image/video
  - `.servicio__overlay` — semi-transparent overlay
  - `.servicio__text` — title (h3) + description (p), slides up on hover
  - `.servicio__cta` — CTA buttons (red "Alquilar" + white category buttons)
- **Hover behavior:** Card text panel slides up to reveal CTA buttons
- **Tab states:**
  - "Todos": Grid of all 21 services
  - "Eventos": Detail view of a single service
  - "Bodas y fiestas": Detail view of a single service

### 6. Process/Steps Section
- **Type:** Flow content, 4-step horizontal layout
- **Content:**
  - 01 CREA — recuerdos y experiencias inolvidables para tus invitados
  - 02 PERSONALIZA — para que tu evento sea único
  - 03 COMPARTE — con tecnologia fast sharing en qr, airdrop o whatsapp
  - 04 IMPRIME — en foto, sticker, metalizado, translúcido o lenticular
- **Interaction model:** Static

### 7. Events/Tags Section
- **Type:** Flow content
- **Content:**
  - Background image
  - H2: "Para todo tipo de eventos"
  - Tag buttons: Fiestas, Cumpleaños, Bodas, Congresos, Ferias, Celebraciones, Meetings
- **Interaction model:** Static (tags are links)

### 8. Products Carousel Section
- **Type:** Flow content with Swiper carousel
- **Content:**
  - H2: "Productos"
  - Prev/Next buttons
  - 10 product cards in horizontal carousel
- **Interaction model:** Click-driven (prev/next carousel)
- **Card structure:** Image + H4 title + description + "Ver más" link + category links

### 9. Clients Section
- **Type:** Flow content
- **Content:**
  - H2: "Clientes"
  - Link: "Ver todos los clientes"
  - 4 client logos: Bacardi, Cartier, H&M, Intel
- **Interaction model:** Static

### 10. FAQ Section
- **Type:** Flow content
- **Content:**
  - H3: "Preguntas frecuentes"
  - 6 accordion items
- **Interaction model:** Click-driven (accordion expand/collapse)
- **FAQ items:**
  1. ¿Por qué elegir Fotomatón Barcelona?
  2. ¿Hay mínimo de horas de servicio?
  3. ¿Hay un máximo de fotografías y copias / vídeos?
  4. ¿Puedo personalizar el servicio?
  5. ¿Cuánto tiempo es necesario para el montaje?
  6. ¿Cómo reservo y pago el servicio?

### 11. Contact Section
- **Type:** Flow content
- **Content:**
  - H2: "Contacto"
  - Description paragraphs
  - CTA link: "Contacto"
- **Interaction model:** Static

### 12. Footer
- **Type:** Flow content
- **Background:** rgb(30, 30, 42) — dark navy
- **Text color:** white
- **Content:**
  - Social media icons row
  - 3 columns: Eventos links, Bodas y fiestas links, Recursos links
  - Wedding Awards badge
  - Footer logo
  - Legal text
- **Interaction model:** Static (links only)

## Z-Index Layers
1. Cookie banner: z-index 99999
2. Pre-header: z-index 1030
3. Offcanvas menus: z-index 1045
4. Main content: default stacking

## Scroll Container
- No custom scroll container — native body scroll
- No smooth scroll library (Lenis, Locomotive)
- No scroll-snap

## Dependencies Between Sections
- Pre-header is fixed and overlays everything
- Navbar is below pre-header in flow
- Hero images are absolutely positioned within hero container
- Service card CTA buttons are absolutely positioned within cards
