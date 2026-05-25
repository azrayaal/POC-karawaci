import { cn } from '@/design-system/utils/cn'
import { ChevronRight } from 'lucide-react'

export interface ListItemProps {
  title: string
  subtitle?: string
  left?: React.ReactNode
  right?: React.ReactNode
  showChevron?: boolean
  onClick?: () => void
  className?: string
}

export function ListItem({
  title,
  subtitle,
  left,
  right,
  showChevron,
  onClick,
  className,
}: ListItemProps) {
  const Comp = onClick ? 'button' : 'div'

  return (
    <Comp
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-4 rounded-xl p-4 text-left transition-colors',
        onClick && 'hover:bg-surface-elevated active:scale-[0.99]',
        className,
      )}
    >
      {left ? <div className="shrink-0">{left}</div> : null}
      <div className="min-w-0 flex-1">
        <p className="text-subtitle text-text-primary">{title}</p>
        {subtitle ? (
          <p className="mt-0.5 text-caption text-text-secondary line-clamp-1">{subtitle}</p>
        ) : null}
      </div>
      {right ?? (showChevron ? <ChevronRight className="size-5 shrink-0 text-text-disabled" /> : null)}
    </Comp>
  )
}
