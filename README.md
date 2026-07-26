# ui-developer-test

A modern, highly responsive landing page built for **ui-developer-test**, a document verification platform interface. Designed with custom scroll-driven animations, card-stacking mechanics, interactive badge orbits, and frosted glass visual effects.

---

## Key Features

- **Hero Scroll-Driven Phone Emergence**: As the user scrolls down through the hero section, the headline copy fades out smoothly while a high-resolution mobile app mockup rises out of a custom folder tab cut-out with staggered side stats cards.
- **Interactive Folder Card**: Built with custom SVG clipping paths, concave tab joints, outer glowing white borders, and an inner dashed contour overlay.
- **Step-Paused Orbiting Badges ("Who It's For")**: Concentric rounded-rectangle orbit paths featuring industry badges that rotate in step-pause intervals, spiraling inward toward a central frosted glass logo squircle.
- **Card-Stacking Platform Preview**: Scroll-triggered accordion stack where intermediate slides stack right below previous title headers (keeping 2-line titles 100% visible), ending with a full merge cover on the final slide.
- **Blended Video Footer**: Dark floating card footer (`rounded-t-[48px]`) with responsive 4-column layout, custom Instagram and Mail SVG icons, ambient bottom-corner glows, and a background video layer styled with `mix-blend-mode: screen`.

---

## Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router & Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://motion.dev/)
- **Icons & Graphics**: Inline SVG & Next.js Image Optimization

---

## Getting Started

### Prerequisites

Ensure you have Node.js 18+ installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thapaspramodp-dev/ui-developer-test-techwarelab.git
   cd ui-developer-test-techwarelab
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Building for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## Folder Structure

```
├── app/
│   ├── globals.css        # Tailwind v4 theme, fonts, and keyframes
│   ├── layout.js          # Root layout & Google Font loaders (Outfit, PT Serif)
│   └── page.js            # Main landing page entry
├── components/
│   ├── Hero/              # Hero section & scroll-driven phone emergence
│   ├── Navbar/            # Glassmorphism navigation bar with scroll-spy
│   ├── PlatformPreview/   # Stacked scroll-accordion card section
│   ├── WhoItsFor/         # Step-paused orbiting badges & center squircle
│   ├── Footer/            # Dark card footer with video blending
│   └── ui/                # Reusable UI components (Button, FolderShape)
├── constants/
│   └── data.js            # Section content, badge specs, platform cards data
└── public/                # Static assets, mockups, icons, and videos
```
