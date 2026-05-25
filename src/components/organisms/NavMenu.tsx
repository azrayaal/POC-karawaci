import { NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/design-system/utils/cn'
import { isNavActive, mainNavItems } from '@/config/navigation'

export interface NavMenuProps {
  className?: string
  variant?: 'default' | 'compact'
}

export function NavMenu({ className, variant = 'default' }: NavMenuProps) {
  const { pathname } = useLocation()

  return (
    <nav
      className={cn(
        'flex gap-2 overflow-x-auto scrollbar-hide',
        variant === 'compact' ? 'px-4 py-2' : 'px-4 py-3',
        className,
      )}
      aria-label="Section navigation"
    >
      {mainNavItems.map(({ to, label, end }) => {
        const active = isNavActive(pathname, to, end)

        return (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={cn(
              'shrink-0 rounded-full border px-4 py-2 text-label transition-all duration-[var(--duration-fast)]',
              'min-h-9 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
              active
                ? 'border-transparent bg-text-primary text-text-inverse'
                : 'border-border bg-transparent text-text-secondary hover:border-neutral-gray-3 hover:text-text-primary',
            )}
          >
            {label}
          </NavLink>
        )
      })}
    </nav>
  )
}
