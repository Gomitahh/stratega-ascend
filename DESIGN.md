# Design System: Stratega Academy

## 1. Visual Theme & Atmosphere

A **premium academic-political leadership platform** with restrained editorial density, asymmetric confidence, and fluid spring-physics motion. The atmosphere is institutional yet warm — like a well-lit diplomatic chamber. Variance 7, Motion 5, Density 5. Gold trim punctuates deep charcoal depths; the ferrofluid splash screen announces arrival with liquid elegance. Glass-morphism accents suggest transparency and intellectual clarity.

## 2. Color Palette & Roles

- **Canvas Surface** (`#FBF9F5`) — Primary page background, warm off-white without blue tint
- **Pure White** (`#FFFFFF`) — Card fills, table rows, decorative contrast panels
- **Deep Charcoal Ink** (`#1C1918`) — Primary text, structural bars, deep section backgrounds (oklch 0.16 0.02 85)
- **Warm Paragraph** (`#5F5A55`) — Body text, descriptions, metadata (oklch 0.40 0.02 85 — WCAG AAA ≥7:1 on Canvas Surface)
- **Rich Gold** (`#D4A843`) — Primary accent, CTA buttons, section line dividers, icon highlights (oklch 0.74 0.135 84)
- **Amber Deep** (`#B8860B`) — Hover accent, active states, focus rings (oklch 0.68 0.145 78)
- **Gold Ink** (`#8B6914`) — Gold text on light backgrounds only, for contrast compliance (oklch 0.55 0.13 84 — WCAG AA ≥4.7:1)
- **Whisper Border** (`#E6E0D9`) — Card borders, dividers, 1px structural lines (oklch 0.90 0.012 85)
- **Muted Surface** (`#F5F2ED`) — Secondary backgrounds, hover states, form field fills (oklch 0.965 0.008 85)
- **Near-Black Depth** (`#11100E`) — Dark section backgrounds, footer, ferrofluid backdrop (oklch 0.10 0.012 85)

**Accent rule:** Single gold accent family. No purple, no neon, no blue. Gold saturation capped at 57%. Gold on light backgrounds **must** use `Gold Ink` variant — raw gold fails WCAG AA at ~2.2:1.

## 3. Typography Rules

- **Display/Headlines:** `Fraunces` — Editorial serif with high contrast optical sizing. Weight 560 (between medium and semibold). Letter-spacing: `-0.015em`. Controlled scale via `clamp()` — headlines never scream. Hierarchy through weight and color, not massive size jumps. **Fraunces is explicitly allowed** as a distinctive modern serif for editorial/creative contexts.

- **Body/Sans:** `Archivo` — Grotesk sans-serif. Weights 400–700. Line-height 1.5 for paragraphs, 1.375 for UI text. Maximum 65 characters per line. Font features: `cv02`, `cv03`, `cv04`, `ss01` enabled for refined glyph alternates.

- **Stats/Numbers:** `Archivo` with `tabular-nums` for metrics counters, dates, tables.

- **Banned:** Inter, generic system fonts. Generic serifs (Times, Georgia, Garamond) banned in all contexts. Pure serif body text banned — Fraunces restricted to headings only.

- **Fallback stack:** `Fraunces, Georgia, Times New Roman, serif` / `Archivo, ui-sans-serif, system-ui, sans-serif`

## 4. Component Stylings

### Buttons
- **Primary CTA:** Deep Charcoal fill, white text, `btn-sweep` class applies a single-pass gold shimmer on hover (not looping). `shadow-elegant` for depth. Hover: `translateY(-4px)` with `shadow-float`. No outer glow. No custom cursors.
- **Secondary/Outline:** White fill, Whisper border, Deep Charcoal text. Hover: border darkens to `rgba(var(--primary), 0.2)`.
- **Gold CTA:** Rich Gold fill, Deep Charcoal text, `shadow-gold`. Used sparingly — only for final conversion sections.
- **Touch targets:** All buttons minimum 44px height. Desktop: `py-3.5` + `text-sm` = ~48px. Mobile nav links: `min-h-[44px]` with `py-3.5`.
- **Active state:** `translateY(-1px)` on press with 300ms `cubic-bezier(0.22, 1, 0.36, 1)`.

### Cards
- **Academic Card:** 16px border radius, Whisper border, Pure White fill, `shadow-soft`. Hover: `translateY(-4px)` + `shadow-elegant`. Used for program features, faculty profiles, pillar cards.
- **Feature Card:** 4-column grid on desktop, 2-column on tablet, single-column on mobile. Gold icon above, bold sans heading, paragraph description.
- **Program Card:** Asymmetric split — image 55% / content 45%. Gold top border. Gradient overlay on image.
- **Testimonial Card:** Frosted glass on dark background — `bg-white/5 backdrop-blur` with Gold accent border. Quote icon in Gold.

### Form Inputs
- Label above input, 14px semibold in Deep Charcoal.
- Input field: White fill, Whisper border, 12px border radius, `py-2.5`. Focus: Gold Ink border with 2px gold ring at 20% opacity.
- Helper text optional below. Error text in `--color-error` (#EF4444) immediately below field.
- Textarea: same styling, `resize-y` allowed.

### Navigation
- **Desktop:** Fixed top bar, transparent initially (shows ferrofluid/Spline through), transitions to Deep Charcoal Ink on scroll. Nav links: rounded-full pills with `text-white/70`, hover to Gold.
- **Mobile:** Hamburger trigger (44×44px touch target), overlay menu with Deep Charcoal background. Links at 44px minimum height with Gold hover.

### Section Dividers
- Gold line (`h-[2px] w-20 bg-accent`) drawn left-to-right on scroll via CSS `transform: scaleX()` triggered by IntersectionObserver.
- On dark backgrounds: Gold line with `bg-accent`. On light: Gold Ink for contrast compliance.

### Loaders & States
- **Loading:** Skeletal shimmer matching exact layout proportions. Gold tint on shimmer. No circular spinners.
- **Empty:** Composed illustrations — not just "No data" text. Icon + heading + description + action.
- **Error:** Inline red text below relevant field. Error summary bar at top of form with anchor links.

## 5. Layout Principles

- **Hero:** Split Screen asymmetric — text 1.1fr / image 1.15fr grid. On Spline/ferrofluid splash: full-viewport with centered logo placeholder, fade transition to content. **Centered hero banned** (variance 7 exceeds threshold).

- **Content Grid:** Single-column below 768px. 2-column zig-zag for About/Features sections. 4-column for pillar/metric cards. 3-column for testimonials and events. **3 equal cards horizontally is banned — diversified layouts per section type.**

- **Max-width:** `80rem` (1280px) centered container via `container-x` utility. Respects `scroll-margin-top: 100px` for anchor offset.

- **Spacing system:** 4px base grid. Section padding: `py-28 md:py-36` on white sections, `md:py-32` on dark. Consistent vertical rhythm via Tailwind presets.

- **Z-index scale:** Semantic tokens — `--z-base: 0`, `--z-sticky: 200`, `--z-overlay: 300`, `--z-modal: 400`, `--z-popover: 500`, `--z-tooltip: 600`, `--z-notification: 700`.

- **No overlapping elements.** Every element occupies its own clean spatial zone. Fixed elements (Header, ColumnRail) have dedicated z-indices.

- **No flexbox percentage math.** All layouts use CSS Grid. No `calc()` hacks on widths.

- **Full-height sections:** `h-[92vh]` with `min-h-[560px]` — never `h-screen` (iOS Safari jump).

## 6. Motion & Interaction

- **Spring Physics:** `cubic-bezier(0.22, 1, 0.36, 1)` — premium, weighty deceleration. Applied globally as `--ease-premium`.
- **Secondary spring:** `cubic-bezier(0.68, -0.55, 0.265, 1.55)` — `--ease-spring` for overshoot effects.
- **Duration tokens:** `--duration-fast: 150ms`, `--duration-default: 250ms`, `--duration-slow: 350ms`, `--duration-slide: 500ms`.

- **Scroll Reveal:** Staggered cascade — all below-fold elements fade in via IntersectionObserver. `opacity: 0 → 1`, `translateY(24px) → 0`, `filter: blur(6px) → 0`. Delays increment by 80–150ms per element group. Duration 900ms.

- **Ferrofluid Splash:** Canvas-based liquid blobs with gold gradient. 8 particles flowing autonomously, repelled by mouse cursor proximity. Capped at 2 device pixel ratio. `prefers-reduced-motion`: static render only.

- **Spline 3D Scene:** Full-viewport background via `@splinetool/react-spline`. Watermark removed via MutationObserver. Overlay at 20% opacity for text legibility.

- **Column Rail:** Fixed right-side decorative element. Gold fills proportionally to scroll progress via `requestAnimationFrame`. Hidden on mobile and when `prefers-reduced-motion`.

- **Button Sweep:** Gold shimmer passes once on hover at 700ms — never loops. `::after` pseudo-element with `translateX(-130% → 130%)`.

- **Hardware Acceleration:** All animations exclusively via `transform` and `opacity`. Never animate `top`, `left`, `width`, `height`. `will-change` used sparingly on animated properties only.

- **Reduced Motion:** All animations respect `prefers-reduced-motion: reduce`. Fallbacks: instant reveals, static renders, disabled sweep/shimmers.

## 7. Anti-Patterns (Banned)

- **No emojis** — anywhere. Use Lucide SVG icons exclusively.
- **No Inter font** — banned for premium contexts. Fraunces + Archivo is the certified pair.
- **No generic serif fonts** (Times, Georgia, Garamond) as body text. Fraunces allowed for headings only.
- **No pure black** (`#000000`) — use Deep Charcoal Ink (`#1C1918`) or Near-Black Depth (`#11100E`).
- **No neon glows** or outer glow shadows on buttons. Shadows tinted to background hue via `color-mix(in oklab, ...)`.
- **No oversaturated accents** — Gold saturation capped at 57%. No purple/blue/violet accents.
- **No excessive gradient text** — reserved only for the "STRATEGA" splash text (gold gradient with `background-clip: text`).
- **No custom mouse cursors.**
- **No overlapping elements** — clean spatial separation always.
- **No 3-column equal card layouts** — use asymmetric grids, zig-zag, or horizontal scroll.
- **No generic placeholder names** — current "Docente (nombre pendiente)" is flagged for client update.
- **No filler UI text** — "Scroll to explore", "Swipe down", scroll arrows, bouncing chevrons permanently banned.
- **No AI copywriting clichés** — "Elevate", "Seamless", "Unleash", "Next-Gen" banned from all copy.
- **No broken Unsplash links** — all images served from local `src/assets/`.
- **No centered Hero sections** — variance 7 exceeds the threshold for centered layouts.
