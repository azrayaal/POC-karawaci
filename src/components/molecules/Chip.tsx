import { cn } from '@/design-system/utils/cn'

export interface ChipProps {
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}

export function Chip({ label, active, onClick, className }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'shrink-0 rounded-full px-4 py-2 text-caption font-medium transition-all',
        'min-h-[var(--touch-target-min)] border',
        active
          ? 'border-transparent bg-text-primary text-text-inverse'
          : 'border-border bg-transparent text-text-secondary hover:border-neutral-gray-3 hover:text-text-primary',
        className,
      )}
    >
      {label}
    </button>
  )
}

export interface ChipGroupProps {
  items: { id: string; label: string }[]
  value: string
  onChange: (id: string) => void
  className?: string
}

export function ChipGroup({ items, value, onChange, className }: ChipGroupProps) {
  return (
    <div
      className={cn('flex gap-2 overflow-x-auto scrollbar-hide pb-1', className)}
      role="tablist"
    >
      {items.map((item) => (
        <Chip
          key={item.id}
          label={item.label}
          active={value === item.id}
          onClick={() => onChange(item.id)}
        />
      ))}
    </div>
  )
}
