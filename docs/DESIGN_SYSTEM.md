# Supermal Karawaci — Product Design System & Engineering Guide

> **Version:** 1.0.0 · **Platform:** React + TypeScript + Tailwind CSS (NativeWind-ready)  
> **Visual Reference:** [Grand Indonesia](https://www.grand-indonesia.com/) — luxury mall aesthetic, editorial dark UI, masonry content grids, pill filter chips, full-bleed hero imagery.

---

## Table of Contents

1. [Product Design Strategy](#1-product-design-strategy)
2. [UX Principles](#2-ux-principles)
3. [Information Architecture](#3-information-architecture)
4. [User Flows](#4-user-flows)
5. [Mobile Navigation Structure](#5-mobile-navigation-structure)
6. [Design System Foundation](#6-design-system-foundation)
7. [Semantic Color Tokens](#7-semantic-color-tokens)
8. [Typography Tokens](#8-typography-tokens)
9. [Spacing & Layout Tokens](#9-spacing--layout-tokens)
10. [Component Library Structure](#10-component-library-structure)
11. [Atomic Design Mapping](#11-atomic-design-mapping)
12. [Screen-by-Screen Breakdown](#12-screen-by-screen-breakdown)
13. [Mobile Grid System](#13-mobile-grid-system)
14. [Interaction Guidelines](#14-interaction-guidelines)
15. [Motion & Animation Guidelines](#15-motion--animation-guidelines)
16. [Accessibility Guidelines](#16-accessibility-guidelines)
17. [Design Engineering Guidelines](#17-design-engineering-guidelines)
18. [Frontend Architecture Recommendation](#18-frontend-architecture-recommendation)
19. [State Management Recommendation](#19-state-management-recommendation)
20. [Feature Modularization Strategy](#20-feature-modularization-strategy)
21. [Suggested Folder Structure](#21-suggested-folder-structure)
22. [API Integration Architecture](#22-api-integration-architecture)
23. [Empty / Loading / Error State Standards](#23-empty--loading--error-state-standards)
24. [Dark Mode Preparation](#24-dark-mode-preparation)
25. [Future Scalability Recommendations](#25-future-scalability-recommendations)

---

## 1. Product Design Strategy

### Vision
Build Indonesia's most premium mall loyalty ecosystem — a digital membership experience that rivals Grab's utility, Starbucks Rewards' delight, and Grand Indonesia's editorial luxury.

### Strategic Pillars

| Pillar | Objective | Design Expression |
|--------|-----------|-------------------|
| **Retention** | Drive repeat visits | Visible point balance, streak rewards, personalized offers |
| **Transaction** | Increase tenant spend | OCR receipt flow, participating store badges, 2x point campaigns |
| **Engagement** | Daily app opens | Push notifications, geofence offers, event discovery |
| **Trust** | Transparent loyalty | Clear point history, validation status, tier benefits |
| **Premium** | Brand elevation | Dark elegant UI, gold tier accents, editorial photography |

### Competitive Positioning

```
Utility (Grab)          ←―――― SUPERMAL KARAWACI ――――→    Luxury (Grand Indonesia)
Fintech clarity (MAPCLUB)                              Editorial (Plaza Indonesia)
Gamification (Starbucks)                             Wallet UX (Apple Wallet)
```

### KPI-Driven UX Priorities
1. **Time-to-reward** — Member card + points visible within 2 taps from launch
2. **Receipt-to-points** — OCR flow completable in under 60 seconds
3. **Offer discovery** — Masonry "What's New" feed with filter chips (GI pattern)
4. **Redemption friction** — One-tap redeem from catalog to wallet

---

## 2. UX Principles

### Core Principles

1. **Clarity over decoration** — Every visual element serves navigation, comprehension, or conversion
2. **Thumb-first** — Primary actions in bottom 40% of screen; 44pt minimum touch targets
3. **Progressive disclosure** — Show points & tier first; benefits & history on demand
4. **Trust through transparency** — Always show point source, expiry, validation status
5. **Editorial pacing** — Generous whitespace (8pt system), large imagery, restrained typography
6. **Contextual onboarding** — Tooltips on first receipt scan, first redeem, first geofence
7. **Meaningful gamification** — Leaderboards and tiers with real benefits, not arbitrary badges
8. **One-handed efficiency** — Bottom tab bar, swipe-back, floating scan CTA on home

### Anti-Patterns to Avoid
- Dashboard clutter with 10+ metrics on home
- Hidden point expiry
- Multi-step redeem without confirmation preview
- Generic stock imagery
- Small filter chips (< 44pt height)

---

## 3. Information Architecture

```
Supermal Karawaci App
├── Home
│   ├── Hero Banner (campaign)
│   ├── Member Card (points, tier, QR)
│   ├── Quick Actions (Scan, Parking, Map, Rewards)
│   └── What's New (filtered masonry feed)
├── Rewards
│   ├── Catalog (filterable)
│   ├── Redemption flow
│   └── Birthday / Leaderboard (future)
├── Wallet
│   ├── Digital Member Card
│   ├── Vouchers (Apple Wallet-style)
│   └── Point History
├── Directory
│   ├── Search
│   ├── Category filters
│   ├── Tenant detail
│   └── Store map (future)
├── Profile
│   ├── Account settings
│   ├── Notifications
│   ├── Parking & vehicles
│   ├── Feedback & support
│   └── Sign out
└── Auth (unauthenticated)
    ├── Login
    ├── Register
    ├── OTP verification
    └── Forgot password
```

### Admin Ecosystem (Future Web Dashboard)
```
Admin Portal
├── CMS (banners, promotions, tenants)
├── Campaign Manager (push, geofence, segments)
├── Member Management (tiers, points adjustment)
├── Analytics (retention, redemption, footfall)
└── RBAC (Super Admin, Marketing, Tenant, Support)
```

---

## 4. User Flows

### 4.1 Authentication Flow
```
Launch → Login/Register → OTP Verify → Biometric opt-in → Home
                ↓
         Social Login (Google/Apple) → Profile completion → Home
```

### 4.2 Receipt OCR Flow
```
Home → Scan Receipt → Camera/Gallery → Upload → Processing
  → Success (points credited) | Pending (manual review) | Error (retry/guide)
```

### 4.3 Reward Redemption Flow
```
Rewards → Select item → Confirm (points deduction preview) → Success → Wallet (voucher)
```

### 4.4 Tenant Discovery Flow
```
Directory → Search/Filter → Tenant Detail → Promotions → Participating rewards badge
```

### 4.5 Feedback Flow
```
Profile → Feedback → Category → Description + Rating → Ticket ID → Track status
```

---

## 5. Mobile Navigation Structure

### Primary: Bottom Tab Bar (5 tabs)

| Tab | Icon | Purpose |
|-----|------|---------|
| Home | Home | Dashboard, campaigns, quick actions |
| Rewards | Gift | Catalog & redemption |
| Wallet | Wallet | Member card, vouchers, history |
| Directory | MapPin | Tenant search & browse |
| Profile | User | Settings, support, account |

### Secondary Navigation
- **Stack push** — Detail screens (promotion, tenant, reward confirm)
- **Modal** — QR full-screen, receipt scanner, filter sheets
- **Header actions** — Search, notifications (bell with badge)

### Grand Indonesia Pattern Adoption
- Transparent header over hero (home)
- Uppercase spaced nav labels (`SUPERMAL KARAWACI`, `WHAT'S NEW`)
- Pill filter chips with inverted active state (white fill / black text)

---

## 6. Design System Foundation

### Token Categories
| Category | Location | Format |
|----------|----------|--------|
| Colors | `src/index.css` `@theme` | CSS custom properties |
| Colors (RN) | `src/design-system/tokens/index.ts` | TypeScript constants |
| Typography | `@theme` + utility classes | `.text-display`, `.text-heading`, etc. |
| Spacing | 8pt scale | `--spacing-1` through `--spacing-16` |
| Radius | `--radius-xs` to `--radius-full` | 4px–24px + pill |
| Shadow | `--shadow-sm/md/lg` + glow variants | Layered, soft |
| Motion | `--duration-*`, `--ease-*` | 150–400ms |

### Atomic Design Layers
```
Tokens → Atoms → Molecules → Organisms → Templates → Pages (Features)
```

---

## 7. Semantic Color Tokens

### Brand Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `brand-red` | `#ff1436` | Primary CTA, active nav, accent dot on tags |
| `brand-red-dark` | `#d6001f` | Hover, pressed states |
| `brand-red-deep` | `#730109` | Gradient end (Grand Indonesia gradient) |
| `brand-gold` | `#c9a962` | Tier badges, premium accents, voucher borders |
| `brand-teal` | `#2dd4bf` | Info accent, map/navigation hints |

### Semantic Mapping
| Semantic | Dark Mode Value | Light Mode Value |
|----------|-----------------|------------------|
| `background` | `#000000` | `#ffffff` |
| `surface` | `#161616` | `#f8f8f8` |
| `surface-elevated` | `#1a1a1a` | `#ffffff` |
| `text-primary` | `#ffffff` | `#161616` |
| `text-secondary` | `#999999` | `#777777` |
| `text-disabled` | `#555555` | `#999999` |
| `border` | `#2e2e2e` | `#e6e6e6` |
| `primary` | `#ff1436` | `#ff1436` |
| `secondary` | `#c9a962` | `#c9a962` |
| `accent` | `#2dd4bf` | `#2dd4bf` |
| `success` | `#22c55e` | `#22c55e` |
| `warning` | `#f59e0b` | `#f59e0b` |
| `error` | `#ef4444` | `#ef4444` |
| `info` | `#3b82f6` | `#3b82f6` |

### Gradient (Grand Indonesia-inspired)
```css
.gradient-red {
  background: linear-gradient(244deg, #b20724 17.53%, #730109 96.22%);
}
```

---

## 8. Typography Tokens

**Primary Font:** Inter (Gantari equivalent for web; swap to Gantari when licensed)

| Token | Size | Weight | Line Height | Use Case |
|-------|------|--------|-------------|----------|
| Display | 32px | 300 | 1.15 | Hero headlines, welcome screens |
| Heading | 24px | 500 | 1.25 | Section titles ("What's New") |
| Title | 18px | 600 | 1.35 | Card titles, list headers |
| Subtitle | 16px | 500 | 1.4 | Emphasized body, list titles |
| Body | 15px | 400 | 1.6 | Default content |
| Caption | 12px | 400 | 1.5 | Metadata, dates, hints |
| Label | 11px | 500 | 1.4 | Uppercase nav, tags (letter-spacing: 0.08em) |
| Button | 14px | 600 | 1.25 | CTA labels |

### React Native Note
Map to `StyleSheet` or NativeWind classes: `text-display`, `text-heading`, etc. Use `allowFontScaling` and cap max scale at 1.3 for layout stability.

---

## 9. Spacing & Layout Tokens

### 8pt Spacing Scale
| Token | Value | Common Use |
|-------|-------|------------|
| 1 | 4px | Icon-text gap |
| 2 | 8px | Inline spacing, chip padding |
| 3 | 12px | Compact card padding |
| 4 | 16px | Screen margin, gutter |
| 5 | 20px | Section padding |
| 6 | 24px | Section gaps |
| 8 | 32px | Large section separation |
| 10 | 40px | Hero bottom padding |
| 12 | 48px | Auth screen vertical rhythm |

### Layout Constants
| Token | Value |
|-------|-------|
| Mobile width | 390px (design reference) |
| Header height | 56px |
| Tab bar height | 80px (+ safe area) |
| Min touch target | 44px |
| Grid columns | 4 |
| Gutter | 16px |

---

## 10. Component Library Structure

```
src/components/
├── atoms/
│   ├── Button.tsx          # Primary, secondary, outline, ghost, danger
│   ├── Input.tsx           # Label, error, hint states
│   ├── Badge.tsx           # Tag with optional dot (GI style)
│   ├── Avatar.tsx          # Image or initials
│   ├── Skeleton.tsx        # Loading placeholders
│   └── IconButton.tsx      # 44pt circular actions
├── molecules/
│   ├── Chip.tsx            # Filter pills (GI "All/Events/Offers")
│   ├── PromoCard.tsx       # Masonry card with gradient overlay
│   ├── MemberCard.tsx      # Digital membership card + QR
│   ├── SearchBar.tsx       # Full-width rounded search
│   ├── ListItem.tsx        # Settings row with chevron
│   └── EmptyState.tsx      # Empty + error states
└── organisms/
    ├── AppHeader.tsx       # Logo, search, notifications
    ├── BottomTabBar.tsx    # 5-tab navigation
    └── HeroBanner.tsx      # Full-bleed hero + quick actions
```

---

## 11. Atomic Design Mapping

| Layer | Components | Depends On |
|-------|------------|------------|
| **Atoms** | Button, Input, Badge, Avatar, Skeleton, IconButton | Design tokens |
| **Molecules** | Chip, PromoCard, MemberCard, SearchBar, ListItem, EmptyState | Atoms |
| **Organisms** | AppHeader, BottomTabBar, HeroBanner, QuickActions | Molecules + Atoms |
| **Templates** | MobileShell, AuthShell | Organisms |
| **Pages** | HomeScreen, RewardsScreen, WalletScreen, etc. | Templates + Organisms |

---

## 12. Screen-by-Screen Breakdown

### 12.1 Home Screen
| Attribute | Detail |
|-----------|--------|
| **Purpose** | Primary engagement hub — campaigns, membership, quick actions |
| **UX Objective** | Surface points & offers within 1 scroll; drive receipt scan |
| **Layout** | Transparent header → Hero (420px) → Member card → Quick actions (4-col grid) → What's New (masonry 2-col) → Scan CTA banner |
| **Components** | AppHeader, HeroBanner, MemberCard, QuickActions, ChipGroup, PromoCard |
| **Interactions** | Chip filter animates masonry; hero CTA → campaign detail; quick action → feature |
| **API** | `GET /promotions`, `GET /membership/profile` |
| **Loading** | Skeleton hero + 4 skeleton cards |
| **Empty** | "No promotions" with browse directory CTA |
| **Error** | Retry banner above feed |
| **Edge cases** | Guest mode hides member card; expired campaigns filtered server-side |
| **A11y** | Hero has `aria-label`; chips use `role="tablist"` |
| **Responsive** | Masonry collapses to 1-col below 360px |

### 12.2 Rewards Screen
| **Purpose** | Browse and redeem reward catalog |
| **UX Objective** | Filter by category; show points cost prominently |
| **Layout** | Header → Display title → Chip filters → Vertical reward list cards |
| **API** | `GET /rewards/catalog`, `POST /rewards/redeem` |
| **Loading** | Skeleton list items |
| **Empty** | "No rewards in this category" |
| **Error** | Insufficient points inline on redeem attempt |

### 12.3 Wallet Screen
| **Purpose** | Digital card, vouchers, point history |
| **UX Objective** | Apple Wallet-style voucher presentation |
| **Layout** | MemberCard → Tab switcher (Vouchers | History) → Content list |
| **API** | `GET /rewards/vouchers`, `GET /membership/points/history` |
| **Empty** | EmptyState with "Browse Rewards" CTA |
| **Edge cases** | Expired vouchers in separate "Expired" section |

### 12.4 Directory Screen
| **Purpose** | Tenant discovery with search and category filter |
| **UX Objective** | GI Directory pattern — search stores, filter by category |
| **Layout** | Header → Title → SearchBar → Chips → Tenant list cards |
| **API** | `GET /directory/tenants`, `GET /directory/search?q=` |
| **Empty** | "No stores found" inline message |
| **Edge cases** | Participating rewards badge on eligible tenants |

### 12.5 Profile Screen
| **Purpose** | Account management and support entry |
| **Layout** | Avatar header → Grouped ListItems → Sign out |
| **API** | `GET /membership/profile`, `PATCH /membership/profile` |

### 12.6 Login Screen
| **Purpose** | Authenticate returning members |
| **Layout** | Brand lockup → Welcome copy → Form → Social login → Register link |
| **API** | `POST /auth/login` |
| **Error** | Inline field errors + form-level auth failure |
| **A11y** | Labels linked to inputs; error announced via `role="alert"` |

### 12.7 Register + OTP
| **Purpose** | New member onboarding with phone verification |
| **API** | `POST /auth/register`, `POST /auth/verify-otp` |
| **Edge cases** | OTP resend cooldown (60s); auto-focus next digit |

### 12.8 Receipt OCR (Future Screen)
| **Purpose** | Upload/scan receipt for point validation |
| **Flow** | Camera → Crop → Upload → Progress → Result |
| **API** | `POST /receipts/upload`, `GET /receipts/:id/status` |
| **States** | Processing spinner, success confetti (subtle), error with retry + guidelines |

### 12.9 Tenant Detail (Future Screen)
| **Purpose** | Store info, location, promotions, rewards participation |
| **Layout** | Hero image → Name/category → Floor/unit → Active promos → CTA (Navigate) |

### 12.10 Parking (Future Screen)
| **Purpose** | Parking info, vehicle management, premium benefits |
| **API** | `GET /parking/info`, `GET /parking/vehicles` |

### 12.11 Feedback (Future Screen)
| **Purpose** | Rating, complaint submission, ticket tracking |
| **API** | `POST /feedback/submit`, `GET /feedback/tickets` |

---

## 13. Mobile Grid System

### Base Grid
- **4 columns** at 390px viewport
- **16px margins** (horizontal screen padding)
- **16px gutters** between columns
- **Column width:** (390 - 32 - 48) / 4 ≈ 77.5px

### Layout Patterns
| Pattern | Grid Usage |
|---------|------------|
| Full-bleed hero | `-mx-4` breaks out of padding |
| Quick actions | 4 equal columns |
| Masonry feed | 2 columns, variable aspect ratios |
| List cards | Full width (4 col span) |
| Member card | Full width, 16px radius |

---

## 14. Interaction Guidelines

### Touch Targets
- Minimum **44×44pt** for all interactive elements
- Tab bar items: full tab area tappable
- List rows: full row height ≥ 56px

### Feedback
- **Press:** `active:scale-[0.98]` on cards and buttons
- **Hover:** Surface elevation change (web)
- **Focus:** 2px primary outline, 2px offset
- **Selection:** Chip inverts to white/black (GI pattern)

### Gestures (React Native)
- Swipe back on detail screens
- Pull-to-refresh on feeds
- Long-press member card → show QR full-screen

---

## 15. Motion & Animation Guidelines

| Token | Duration | Use |
|-------|----------|-----|
| `fast` | 150ms | Chip toggle, icon state |
| `normal` | 250ms | Button press, card hover |
| `slow` | 400ms | Hero image scale, page transitions |

### Easing
- Default: `cubic-bezier(0.4, 0, 0.2, 1)`
- Spring (celebrations): `cubic-bezier(0.34, 1.56, 0.64, 1)`

### Principles
- Subtle, never distracting
- Reduce motion: respect `prefers-reduced-motion`
- Point credit success: brief scale pulse on balance number

---

## 16. Accessibility Guidelines

### WCAG 2.1 AA Targets
- Color contrast: 4.5:1 body text, 3:1 large text
- All icons with `aria-label` or accompanying text
- Form errors linked via `aria-describedby`
- Loading states: `aria-busy="true"`
- Empty states: `role="status"`

### Localization Readiness
- All strings externalized to `i18n/` namespace files
- Support EN / ID (matching Grand Indonesia)
- RTL-ready layout (flexbox, logical properties)
- Date/number formatting via `Intl`

### Screen Reader Order
1. Header brand
2. Primary content heading
3. Interactive elements in visual order
4. Tab bar last (landmark `navigation`)

---

## 17. Design Engineering Guidelines

### Styling Rules
1. **Always use semantic tokens** — never hardcode `#ff1436` in components
2. **Use `cn()` utility** for conditional classes
3. **Spacing only from 8pt scale** — no arbitrary `p-[13px]`
4. **Component variants via props** — not copy-paste class strings
5. **Co-locate component styles** — one component per file

### NativeWind Parity
Tailwind classes in this POC map 1:1 to NativeWind with these substitutions:
- `hover:` → `active:` for press states
- `backdrop-blur` → platform-specific blur
- `columns-2` masonry → FlashList with variable height

### Code Quality
- TypeScript strict mode
- Props interfaces exported from components
- Storybook recommended for component documentation (future)

---

## 18. Frontend Architecture Recommendation

```
┌─────────────────────────────────────────────┐
│                  App Shell                   │
│  Router · Auth Guard · Error Boundary        │
├─────────────────────────────────────────────┤
│              Feature Modules                 │
│  home · rewards · wallet · directory · auth  │
├─────────────────────────────────────────────┤
│              Shared UI Kit                   │
│  atoms · molecules · organisms               │
├─────────────────────────────────────────────┤
│           Core Infrastructure                │
│  API client · i18n · analytics · storage     │
├─────────────────────────────────────────────┤
│              Backend Services                │
│  SQL Server API · Supabase (realtime/auth)   │
└─────────────────────────────────────────────┘
```

### Technology Choices
| Concern | Recommendation |
|---------|----------------|
| Framework | React Native + Expo (production) / React + Vite (this POC) |
| Styling | NativeWind v4 / Tailwind CSS v4 |
| Navigation | React Navigation (RN) / React Router (web POC) |
| Forms | React Hook Form + Zod |
| Data fetching | TanStack Query |
| Auth | Supabase Auth + custom SQL Server session |

---

## 19. State Management Recommendation

### Layered Approach
| State Type | Tool | Examples |
|------------|------|----------|
| Server state | TanStack Query | Promotions, rewards, profile |
| Auth state | Context + secure storage | Token, user session |
| UI state | useState / useReducer | Filters, tabs, modals |
| Global app state | Zustand (minimal) | Theme, locale, onboarding flags |

### Query Key Convention
```typescript
['membership', 'profile']
['promotions', { category: 'offers' }]
['rewards', 'catalog', { category }]
['receipts', receiptId, 'status']
```

### Optimistic Updates
- Point redemption: optimistic deduct with rollback on failure
- Voucher use: mark used locally, sync on confirm

---

## 20. Feature Modularization Strategy

Each feature is self-contained:

```
features/rewards/
├── components/       # Feature-specific UI
├── hooks/            # useRewards, useRedeem
├── services/         # API calls
├── types/            # Reward, Voucher types
├── screens/          # RewardsScreen, RewardDetailScreen
└── index.ts          # Public exports
```

### Dependency Rules
- Features **may import** from `@/components` and `@/lib`
- Features **must not import** from other features directly
- Cross-feature navigation via router only
- Shared types in `@/types`

---

## 21. Suggested Folder Structure

```
supermal-karawaci/
├── docs/
│   └── DESIGN_SYSTEM.md
├── public/
│   └── assets/              # Gantari fonts, brand assets
├── src/
│   ├── app/
│   │   ├── router.tsx
│   │   ├── providers.tsx
│   │   └── guards/
│   ├── components/          # Shared UI kit (atomic)
│   ├── design-system/
│   │   ├── tokens/
│   │   └── utils/
│   ├── features/
│   │   ├── auth/
│   │   ├── home/
│   │   ├── membership/
│   │   ├── rewards/
│   │   ├── wallet/
│   │   ├── directory/
│   │   ├── receipts/
│   │   ├── parking/
│   │   ├── feedback/
│   │   └── profile/
│   ├── hooks/
│   ├── i18n/
│   │   ├── en.json
│   │   └── id.json
│   ├── layouts/
│   ├── lib/
│   │   ├── api/
│   │   ├── analytics/
│   │   └── storage/
│   ├── types/
│   └── index.css            # Design tokens (@theme)
├── tailwind.config.ts       # Optional extensions
├── package.json
└── README.md
```

---

## 22. API Integration Architecture

### Hybrid Backend
- **Supabase** — Auth, realtime notifications, file storage (receipt images)
- **SQL Server API** — Business logic, loyalty engine, tenant data, campaigns

### Client Layer (`src/lib/api/client.ts`)
```typescript
const api = createApiClient({
  baseUrl: import.meta.env.VITE_API_URL,
  getToken: () => secureStorage.get('access_token'),
})
```

### Endpoint Map
| Feature | Endpoints |
|---------|-----------|
| Auth | `/auth/login`, `/auth/register`, `/auth/verify-otp` |
| Membership | `/membership/profile`, `/membership/points/history` |
| Rewards | `/rewards/catalog`, `/rewards/redeem`, `/rewards/vouchers` |
| Receipts | `/receipts/upload`, `/receipts/:id/status` |
| Directory | `/directory/tenants`, `/directory/search` |
| Promotions | `/promotions`, `/promotions/personalized` |
| Parking | `/parking/info`, `/parking/vehicles` |
| Feedback | `/feedback/submit`, `/feedback/tickets` |
| Notifications | `/notifications`, `/notifications/preferences` |

### Error Handling
- `401` → Refresh token → Retry → Login redirect
- `422` → Field-level validation errors
- `500` → ErrorState with retry
- Network offline → Cached data + offline banner

---

## 23. Empty / Loading / Error State Standards

### Loading
| Context | Pattern |
|---------|---------|
| Full screen | Centered spinner + brand mark |
| List | 3–5 SkeletonCard items |
| Button action | Inline spinner in button (`loading` prop) |
| Image | Skeleton with matching aspect ratio |

### Empty
| Context | Title | Action |
|---------|-------|--------|
| No vouchers | "No vouchers yet" | Browse Rewards |
| No promotions | "Nothing new right now" | Check back later |
| No search results | "No stores found" | Clear filters |
| No history | "No transactions yet" | Scan receipt |

### Error
| Context | Pattern |
|---------|---------|
| Network | ErrorState + "Try Again" |
| Form field | Red border + caption below input |
| Auth | Toast + inline message |
| OCR fail | Illustration + tips + retry |

---

## 24. Dark Mode Preparation

**Default:** Dark mode (Grand Indonesia aesthetic)

### Implementation
```css
/* Default = dark */
:root { /* dark tokens */ }

[data-theme='light'] { /* light overrides */ }
```

### Toggle Strategy
- `data-theme` attribute on `<html>`
- Persist preference in AsyncStorage / localStorage
- Respect `prefers-color-scheme` as initial default
- All components use semantic tokens — no manual dark: variants needed

---

## 25. Future Scalability Recommendations

### Phase 2
- Indoor mall navigation (SVG maps + beacon positioning)
- Apple Wallet / Google Pay pass integration
- Push notification deep linking
- Geofence campaigns (enter mall → offer popup)

### Phase 3
- Admin web dashboard (React + Tailwind, shared design tokens package)
- Tenant self-service portal
- AI-powered personalized recommendations
- Multi-mall support (Supermal network)

### Design System Evolution
- Extract `@supermal/design-tokens` npm package
- Storybook for component documentation
- Figma library synced with code tokens
- Visual regression testing (Chromatic)

### Performance
- Image CDN with WebP/AVIF
- FlashList for long feeds (RN)
- Query staleTime tuning per endpoint
- Receipt OCR on-device preprocessing

---

## Component Reference (Detailed)

### Button
| Attribute | Detail |
|-----------|--------|
| **Purpose** | Primary user actions |
| **Variants** | primary, secondary, outline, ghost, danger |
| **Sizes** | sm (36px), md (44px), lg (52px) |
| **States** | default, hover, active, disabled, loading |
| **A11y** | `focus-visible` ring, disabled prevents interaction |
| **Tokens** | `gradient-red`, `primary`, `border`, `touch-target-min` |
| **RN** | Use `Pressable` with `android_ripple` |

### PromoCard
| Attribute | Detail |
|-----------|--------|
| **Purpose** | Masonry feed item (GI What's New pattern) |
| **Variants** | aspect: square, portrait, landscape |
| **States** | default, pressed (scale 0.98), focus |
| **Tokens** | `gradient-card-overlay`, `radius-2xl`, Badge |
| **RN** | `ImageBackground` + `LinearGradient` overlay |

### MemberCard
| Attribute | Detail |
|-----------|--------|
| **Purpose** | Digital membership with tier, points, QR |
| **Variants** | Tier: silver, gold, platinum, black |
| **Tokens** | Tier gradient backgrounds, gold for premium |
| **RN** | Consider `react-native-qrcode-svg` for QR |

### Chip / ChipGroup
| Attribute | Detail |
|-----------|--------|
| **Purpose** | Content filtering (GI pill filters) |
| **Active state** | White background, black text (inverted) |
| **A11y** | `role="tablist"`, `aria-pressed` on chips |

---

## Running the POC

```bash
cd supermal-karawaci
npm install
npm run dev
```

Open `http://localhost:5173` — mobile viewport (390px) is simulated via `MobileShell`.

### Routes
| Path | Screen |
|------|--------|
| `/` | Home |
| `/rewards` | Reward Catalog |
| `/wallet` | Wallet & History |
| `/directory` | Tenant Directory |
| `/profile` | Profile & Settings |
| `/login` | Login |
| `/register` | Register |
| `/otp` | OTP Verification |

---

*Document maintained by Product Design & Engineering. Visual reference: [Grand Indonesia](https://www.grand-indonesia.com/).*
