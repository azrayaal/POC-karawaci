import { cn } from '@/design-system/utils/cn'
import { Bell, Search } from 'lucide-react'
import { IconButton } from '@/components/atoms/IconButton'
import { NavMenu } from '@/components/organisms/NavMenu'

export interface AppHeaderProps {
  title?: string
  transparent?: boolean
  showSearch?: boolean
  showNotifications?: boolean
  showNavMenu?: boolean
  onSearchClick?: () => void
  onNotificationClick?: () => void
  leftAction?: React.ReactNode
  className?: string
}

export function AppHeader({
  title,
  transparent,
  showSearch,
  showNotifications,
  showNavMenu,
  onSearchClick,
  onNotificationClick,
  leftAction,
  className,
}: AppHeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-40',
        transparent ? 'bg-transparent' : 'border-b border-border-subtle bg-background/90 backdrop-blur-xl',
        className,
      )}
    >
      <div className="flex h-[var(--height-header)] items-center justify-between px-4">
        <div className="flex min-w-0 items-center gap-2.5">
          {leftAction ?? (
            <>
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full gradient-red shadow-glow-red">
                <span className="text-[10px] font-bold tracking-tight text-white">SK</span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-label tracking-[0.2em] text-text-primary">
                  {title ?? 'SUPERMAL KARAWACI'}
                </p>
                {!title ? (
                  <p className="truncate text-[10px] text-text-disabled">Premium Membership</p>
                ) : null}
              </div>
            </>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-0.5">
          {showSearch ? (
            <IconButton label="Search" onClick={onSearchClick} size="sm">
              <Search className="size-[18px]" />
            </IconButton>
          ) : null}
          {showNotifications ? (
            <IconButton label="Notifications" onClick={onNotificationClick} size="sm" className="relative">
              <Bell className="size-[18px]" />
              <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-primary ring-2 ring-background" aria-hidden />
            </IconButton>
          ) : null}
          <button
            type="button"
            className="ml-1 flex size-8 items-center justify-center rounded-full border border-border text-[10px] font-semibold text-text-primary"
            aria-label="Language: English"
          >
            EN
          </button>
        </div>
      </div>

      {showNavMenu ? (
        <NavMenu variant="compact" className="border-t border-border-subtle/60" />
      ) : null}
    </header>
  )
}
