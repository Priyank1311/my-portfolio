# Priyank Bhardwaj — Portfolio

Premium single-page dark portfolio built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, GSAP, and hls.js.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  animations/   # GSAP utilities & Framer variants
  components/   # UI primitives, Navbar, Footer, cards
  hooks/        # Lenis, magnetic hover, scroll spy
  layouts/
  pages/        # Home page (lazy loaded)
  sections/     # Hero, Projects, Experience, etc.
  utils/        # Constants & helpers
```

## Customization

- Update content in `src/utils/constants.ts`
- Add resume PDF at `public/resume.pdf` for the download button
- Adjust social URLs in constants

## Tech

- **React 19** + **Vite 8**
- **Tailwind CSS v4**
- **Framer Motion** + **GSAP ScrollTrigger**
- **Lenis** smooth scroll
- **hls.js** for Mux HLS background video
