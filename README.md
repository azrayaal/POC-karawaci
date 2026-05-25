# Supermal Karawaci — Loyalty & Mall Ecosystem

Premium mobile loyalty application for Supermal Karawaci. Production-ready design system and interactive POC built with **React + TypeScript + Tailwind CSS v4**.

Visual direction inspired by [Grand Indonesia](https://www.grand-indonesia.com/) — luxury mall aesthetic, dark editorial UI, masonry content grids, and pill filter chips.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — the app renders in a 390px mobile shell.

```bash
npm run build   # Production build
npm run preview # Preview production build
```

## What's Included

| Deliverable | Location |
|-------------|----------|
| Full design documentation (25 sections) | [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) |
| Semantic design tokens | [`src/index.css`](src/index.css) |
| TypeScript token exports | [`src/design-system/tokens/`](src/design-system/tokens/) |
| Atomic component library | [`src/components/`](src/components/) |
| Feature screens | [`src/features/`](src/features/) |
| API abstraction layer | [`src/lib/api/client.ts`](src/lib/api/client.ts) |

## Screens

- **Home** — Hero banner, member card, quick actions, masonry "What's New" feed
- **Rewards** — Filterable reward catalog with point redemption
- **Wallet** — Digital member card, vouchers, point history
- **Directory** — Tenant search with category filters
- **Profile** — Account settings and support
- **Auth** — Login, register, OTP verification

## Design System Highlights

- **8pt spacing system** with semantic tokens
- **Dark-first** luxury palette (black/red/gold/teal)
- **Grand Indonesia patterns** — transparent header, pill chips, masonry cards, gradient overlays
- **Accessibility** — 44pt touch targets, ARIA labels, focus rings
- **NativeWind-ready** — Tailwind classes map directly to React Native

## Architecture

Feature-based modular structure optimized for React Native migration:

```
src/
├── components/     # Atomic UI kit
├── features/       # Feature modules (home, rewards, wallet, ...)
├── design-system/  # Tokens & utilities
├── lib/api/        # API client & endpoints
└── layouts/        # MobileShell, AuthShell
```

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS v4
- React Router v7
- Lucide React (icons)
- Vite 8

## Documentation

See [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) for complete product design strategy, UX principles, information architecture, component specs, screen breakdowns, and engineering guidelines.
# POC-karawaci
