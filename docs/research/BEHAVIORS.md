# Behaviors — fotomatonbarcelona.es

## Global Behaviors

### Scroll
- No smooth scroll library (no Lenis, no Locomotive Scroll)
- Native body scroll
- No scroll-snap on any container
- Body scroll behavior: auto

### Header
- Pre-header: fixed position (z-index 1030), always visible
- Navbar: static position (not sticky/fixed) — needs verification on scroll
- No scroll-triggered header transformations detected

## Section Behaviors

### Hero Section
- **Interaction model:** Time-driven (auto-rotating images)
- **Mechanism:** Swiper.js carousel with auto-play
- **Content:** 8 absolute-positioned images cycling through
- **Classes:** hero__img--small, hero__img--medium, hero__img--big

### Services Section — Tab Switching
- **Interaction model:** Click-driven
- **Mechanism:** Bootstrap pills/tab system with aria attributes
- **Tabs:** "Todos" (pills-1), "Eventos" (pills-2), "Bodas y fiestas" (pills-3)
- **Tab button classes:** btn btn-outline, active state: btn btn-outline active
- **Panel classes:** tab-pane fade, active state: tab-pane fade service-detail active show
- **Transition:** Fade animation (opacity transition via Bootstrap)

### Services Section — Card Hover
- **Interaction model:** Hover-driven
- **Mechanism:** CSS transform on `.servicio__text`
- **Before (default):** transform: translateY(calc(100% - 70px)) — text panel partially visible at bottom
- **After (hover):** transform: translateY(0) — text panel slides up to reveal full content
- **Transition:** CSS transition on transform property
- **CTA reveal:** `.servicio__cta--initial` hidden, `.servicio__cta--hover` shown on hover

### Products Carousel
- **Interaction model:** Click-driven
- **Mechanism:** Swiper.js carousel
- **Controls:** Previous/Next buttons
- **Slides:** 10 product cards
- **Slide groups:** group "1 / 10", "2 / 10", etc.

### FAQ Accordion
- **Interaction model:** Click-driven
- **Mechanism:** Bootstrap accordion with collapse
- **Button classes:** accordion-button collapsed
- **Expanded state:** aria-expanded="true"
- **Animation:** Bootstrap collapse transition (height animation)

### Process/Steps Section
- **Interaction model:** Static — no interaction detected
- **Layout:** 4 items in horizontal row

### Clients Section
- **Interaction model:** Static — logos only, no carousel

## Responsive Behavior

### Desktop (1440px)
- Pre-header: full width, language links + contact info side by side
- Navbar: horizontal menu with all links visible
- Hero: large hero with floating images
- Services: 3-column grid (col-md-6 col-lg-4)
- Products: horizontal carousel with multiple visible slides
- Clients: 4 logos in a row (col-6 col-md-3)

### Tablet (768px)
- Navbar: hamburger menu appears
- Services: 2-column grid
- Products: carousel adjusts slide count
- Process steps: may stack to 2x2

### Mobile (390px)
- Pre-header: simplified, possibly hidden elements
- Navbar: hamburger menu only, offcanvas sidebar
- Hero: reduced height, fewer visible images
- Services: single column
- Products: single slide visible
- Footer: stacked columns

## Key Transitions
- Tab content: fade transition (opacity)
- Service card hover: transform translateY transition
- Accordion: height transition (Bootstrap collapse)
- Hero images: auto-rotation (Swiper autoplay)

## No Animations Detected
- No scroll-triggered animations (IntersectionObserver)
- No parallax effects
- No animation-timeline usage
- No GSAP or Framer Motion
