import {
  TabAccountIcon,
  TabDirectoryIcon,
  TabHomeIcon,
  TabLoyaltyIcon,
  type TabIconProps,
} from '@/components/icons/TabBarIcons'

export type TabIconComponent = React.ComponentType<TabIconProps>

export const mainNavItems = [
  { to: '/', label: "What's New", shortLabel: 'Home', icon: TabHomeIcon, end: true },
  { to: '/directory', label: 'Directory', shortLabel: 'Directory', icon: TabDirectoryIcon, end: false },
  { to: '/loyalty', label: 'Loyalty', shortLabel: 'Loyalty', icon: TabLoyaltyIcon, end: false },
  { to: '/profile', label: 'Account', shortLabel: 'Account', icon: TabAccountIcon, end: false },
] as const satisfies ReadonlyArray<{
  to: string
  label: string
  shortLabel: string
  icon: TabIconComponent
  end?: boolean
}>

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
