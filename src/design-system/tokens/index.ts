export const colors = {
  brand: {
    red: '#ff1436',
    redDark: '#d6001f',
    redDeep: '#730109',
    gold: '#c9a962',
    goldMuted: '#a68b4b',
    teal: '#2dd4bf',
    tealMuted: '#14b8a6',
  },
  neutral: {
    white: '#ffffff',
    gray1: '#e6e6e6',
    gray2: '#999999',
    gray3: '#777777',
    gray4: '#555555',
    gray5: '#333333',
    black: '#161616',
    pureBlack: '#000000',
  },
  semantic: {
    primary: '#ff1436',
    secondary: '#c9a962',
    accent: '#2dd4bf',
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
} as const

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const

export const radius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  full: 9999,
} as const

export const typography = {
  display: { size: 32, lineHeight: 36, weight: '300' as const },
  heading: { size: 24, lineHeight: 30, weight: '500' as const },
  title: { size: 18, lineHeight: 24, weight: '600' as const },
  subtitle: { size: 16, lineHeight: 22, weight: '500' as const },
  body: { size: 15, lineHeight: 24, weight: '400' as const },
  caption: { size: 12, lineHeight: 18, weight: '400' as const },
  label: { size: 11, lineHeight: 15, weight: '500' as const, letterSpacing: 0.88 },
  button: { size: 14, lineHeight: 18, weight: '600' as const },
} as const

export const motion = {
  fast: 150,
  normal: 250,
  slow: 400,
} as const

export const layout = {
  mobileWidth: 390,
  tabBarHeight: 80,
  headerHeight: 56,
  touchTargetMin: 44,
  gridColumns: 4,
  gutter: 16,
  margin: 16,
} as const
