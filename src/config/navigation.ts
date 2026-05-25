import { Home, MapPin, Sparkles, User } from 'lucide-react'

export const mainNavItems = [
  { to: '/', label: "What's New", shortLabel: 'Home', icon: Home, end: true },
  { to: '/directory', label: 'Directory', shortLabel: 'Directory', icon: MapPin, end: false },
  { to: '/loyalty', label: 'Loyalty', shortLabel: 'Loyalty', icon: Sparkles, end: false },
  { to: '/profile', label: 'Account', shortLabel: 'Account', icon: User, end: false },
] as const

export const scanRoute = '/scan'

export function isNavActive(pathname: string, to: string, end?: boolean) {
  if (end) return pathname === '/'
  if (to === '/loyalty') {
    return (
      pathname.startsWith('/loyalty') ||
      pathname.startsWith('/rewards') ||
      pathname.startsWith('/wallet')
    )
  }
  return pathname.startsWith(to)
}
