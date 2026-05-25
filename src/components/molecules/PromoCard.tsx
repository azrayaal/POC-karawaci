import { cn } from '@/design-system/utils/cn'
import { Badge } from '@/components/atoms/Badge'

export interface PromoCardProps {
  title: string
  subtitle?: string
  image: string
  tag?: string
  tagVariant?: 'primary' | 'secondary' | 'info'
  aspect?: 'square' | 'portrait' | 'landscape'
  onClick?: () => void
  className?: string
}

const aspectStyles = {
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
}

export function PromoCard({
  title,
  subtitle,
  image,
  tag,
  tagVariant = 'primary',
  aspect = 'portrait',
  onClick,
  className,
}: PromoCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'group relative w-full overflow-hidden rounded-2xl text-left',
        'transition-transform duration-[var(--duration-normal)] active:scale-[0.98]',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        aspectStyles[aspect],
        className,
      )}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover transition-transform duration-[var(--duration-slow)] group-hover:scale-105"
      />
      <div className="gradient-card-overlay absolute inset-0" />
      {tag ? (
        <div className="absolute left-3 top-3">
          <Badge variant={tagVariant} dot>
            {tag}
          </Badge>
        </div>
      ) : null}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-subtitle font-medium text-text-primary line-clamp-2">{title}</p>
        {subtitle ? (
          <p className="mt-1 text-caption text-text-secondary line-clamp-1">{subtitle}</p>
        ) : null}
      </div>
    </button>
  )
}
