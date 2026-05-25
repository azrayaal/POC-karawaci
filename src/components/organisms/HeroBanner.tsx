import { cn } from '@/design-system/utils/cn'
import { ChevronRight } from 'lucide-react'

export interface HeroBannerProps {
  title: string
  subtitle?: string
  image: string
  ctaLabel?: string
  onCtaClick?: () => void
  className?: string
}

export function HeroBanner({
  title,
  subtitle,
  image,
  ctaLabel,
  onCtaClick,
  className,
}: HeroBannerProps) {
  return (
    <section
      className={cn('relative h-[420px] overflow-hidden', className)}
      aria-label="Featured promotion"
    >
      <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="gradient-hero-overlay absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 p-6 pb-8">
        {subtitle ? (
          <p className="text-label text-primary mb-2">{subtitle}</p>
        ) : null}
        <h1 className="text-display max-w-[280px] text-text-primary">{title}</h1>
        {ctaLabel ? (
          <button
            type="button"
            onClick={onCtaClick}
            className="mt-4 inline-flex items-center gap-1 text-caption font-medium text-text-primary underline-offset-4 hover:underline"
          >
            {ctaLabel}
            <ChevronRight className="size-4" />
          </button>
        ) : null}
      </div>
    </section>
  )
}

export interface QuickAction {
  id: string
  label: string
  icon: React.ReactNode
  onClick?: () => void
}

export interface QuickActionsProps {
  actions: QuickAction[]
  className?: string
}

export function QuickActions({ actions, className }: QuickActionsProps) {
  return (
    <div className={cn('grid grid-cols-4 gap-3', className)}>
      {actions.map((action) => (
        <button
          key={action.id}
          type="button"
          onClick={action.onClick}
          className="flex flex-col items-center gap-2 rounded-2xl bg-surface-elevated p-3 transition-colors hover:bg-surface-overlay active:scale-95"
        >
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary-muted text-primary">
            {action.icon}
          </div>
          <span className="text-[11px] font-medium text-text-secondary">{action.label}</span>
        </button>
      ))}
    </div>
  )
}
