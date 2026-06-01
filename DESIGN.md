# Design

## Visual Theme
The visual style of Moonlight Étoile is a modern, luxurious, editorial cosmic dark theme inspired by starry night skies and high-end cosmetics campaigns. It features deep obsidian backgrounds, fixed starry stardust cover images, semi-translucent glass surfaces with fine border refractions, and starlight gold and twilight rose accents.

## Color Palette
```css
:root {
  /* Cosmic Twilight & Stardust Colorway */
  --color-cosmic-bg: #0A0412;         /* Deepest obsidian space black */
  --color-glass-surface: rgba(22, 12, 38, 0.65); /* Obsidian glass fill */
  --color-accent-violet: #8A4FFF;      /* Glowing neon starlight violet */
  --color-accent-gold: #D8B88A;        /* Premium starlight gold */
  --color-text-light: #FAF8F4;         /* Soft ivory text */
  --color-text-muted: #A59DB0;         /* Muted stardust lavender-gray */
  --color-rose: #D9C2C7;               /* Twilight Rose */
  --color-white: #FFFFFF;              /* Clean base for product packshots */
  
  /* System Bindings */
  --color-bg: var(--color-cosmic-bg);
  --color-text: var(--color-text-light);
  --color-border: rgba(138, 79, 255, 0.15); /* Glowing violet thin border */
  --color-border-light: rgba(250, 248, 244, 0.08);

  /* Gradients */
  --grad-neon-purple: linear-gradient(135deg, #7A22FF 0%, #B822FF 100%);
  --grad-aurora: linear-gradient(to right, #8A4FFF, #D8B88A);
}
```

## Typography
- **Display Headings**: Playfair Display, Cormorant Garamond, serif. Tracking: -0.02em, leading: 1.15.
- **Body & Controls**: Poppins, Outfit, sans-serif. Tracking: 0.01em, leading: 1.6.

## Layout & Rhythm
- Standard container width: `1400px` (`--max-width`).
- Sticky navbar height: `80px` (`--navbar-h`), scrolled to `70px`.
- Spacing steps: 8px (0.5rem), 16px (1rem), 24px (1.5rem), 32px (2rem), 48px (3rem), 64px (4rem), 96px (6rem).

## Component Standards
- **Buttons**: Pillow style (`rounded-full`) standard for cosmic beauty. Instant tactile feedback with `scale(0.97)` on `:active`.
- **Product Cards (ISSY Cosmetics UI Match)**: Frameless design with packshot on clean white/light grey studio backgrounds. Hover swap reveals model using the product. Titles are bold uppercase with prices aligned right. Corner Quick Add shopping bag button reveals on hover.
- **Inputs**: Underline styling with borders transitions to gold upon focus.
- **Notifications/Toasts**: Elegant toast notifications, gliding smoothly from the bottom with spring-like cubic-bezier ease.
- **Glassmorphism Panels**: Semi-translucent obsidian glass panels with backdrop filters (`blur(16px)`) and fine border refractions.
