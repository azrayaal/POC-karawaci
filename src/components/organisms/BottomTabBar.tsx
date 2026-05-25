import { NavLink, useLocation } from 'react-router-dom'
import { TabScanIcon } from '@/components/icons/TabBarIcons'
import { cn } from '@/design-system/utils/cn'
import { isNavActive, mainNavItems, scanRoute } from '@/config/navigation'

export function BottomTabBar() {
  const { pathname } = useLocation()
  const leftTabs = mainNavItems.slice(0, 2)
  const rightTabs = mainNavItems.slice(2)

  return (
    <nav
      className="fixed bottom-0 left-1/2 z-50 w-full max-w-[var(--width-mobile)] -translate-x-1/2 px-4 pb-[max(12px,env(safe-area-inset-bottom))]"
      aria-label="Main navigation"
    >
      <div className="flex items-end gap-1 rounded-2xl border border-border/60 bg-surface/95 px-2 py-2 shadow-lg backdrop-blur-xl">
        {leftTabs.map(({ to, shortLabel, icon: Icon, end }) => {
          const active = isNavActive(pathname, to, end)

          return (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 transition-all duration-[var(--duration-normal)]"
            >
              <span
                className={cn(
                  'flex size-9 items-center justify-center rounded-xl transition-all',
                  active ? 'bg-primary-muted text-primary' : 'text-text-disabled',
                )}
              >
                <Icon active={active} />
              </span>
              <span
                className={cn(
                  'w-full truncate text-center text-[9px] font-semibold uppercase tracking-[0.12em]',
                  active ? 'text-text-primary' : 'text-text-disabled',
                )}
              >
                {shortLabel}
              </span>
              {active ? (
                <span className="size-1 rounded-full bg-primary" aria-hidden />
              ) : (
                <span className="size-1" aria-hidden />
              )}
            </NavLink>
          )
        })}

        <NavLink
          to={scanRoute}
          className="-mt-5 flex shrink-0 flex-col items-center gap-1"
          aria-label="Scan receipt"
        >
          {({ isActive }) => (
            <>
              <span
                className={cn(
                  'flex size-14 items-center justify-center rounded-full gradient-red shadow-glow-red transition-transform active:scale-95',
                  isActive && 'ring-2 ring-primary/40 ring-offset-2 ring-offset-surface',
                )}
              >
                <TabScanIcon active={isActive} className="text-white" />
              </span>
              <span
                className={cn(
                  'text-[9px] font-semibold uppercase tracking-[0.12em]',
                  isActive ? 'text-primary' : 'text-text-secondary',
                )}
              >
                Scan
              </span>
            </>
          )}
        </NavLink>

        {rightTabs.map(({ to, shortLabel, icon: Icon, end }) => {
          const active = isNavActive(pathname, to, end)

          return (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 transition-all duration-[var(--duration-normal)]"
            >
              <span
                className={cn(
                  'flex size-9 items-center justify-center rounded-xl transition-all',
                  active ? 'bg-primary-muted text-primary' : 'text-text-disabled',
                )}
              >
                <Icon active={active} />
              </span>
              <span
                className={cn(
                  'w-full truncate text-center text-[9px] font-semibold uppercase tracking-[0.12em]',
                  active ? 'text-text-primary' : 'text-text-disabled',
                )}
              >
                {shortLabel}
              </span>
              {active ? (
                <span className="size-1 rounded-full bg-primary" aria-hidden />
              ) : (
                <span className="size-1" aria-hidden />
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
