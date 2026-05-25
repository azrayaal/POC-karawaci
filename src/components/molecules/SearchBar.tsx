import { cn } from '@/design-system/utils/cn'
import { Search } from 'lucide-react'

export interface SearchBarProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  onFocus?: () => void
  className?: string
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search stores, offers...',
  onFocus,
  className,
}: SearchBarProps) {
  return (
    <div className={cn('relative', className)}>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-text-disabled"
        aria-hidden
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={onFocus}
        placeholder={placeholder}
        className={cn(
          'h-12 w-full rounded-full border border-border bg-surface-elevated',
          'pl-12 pr-4 text-body text-text-primary placeholder:text-text-disabled',
          'focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20',
        )}
        aria-label={placeholder}
      />
    </div>
  )
}
