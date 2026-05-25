import { cn } from '@/design-system/utils/cn'

export interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeStyles = {
  sm: 'size-8 text-caption',
  md: 'size-10 text-body',
  lg: 'size-14 text-title',
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function Avatar({ src, alt, name, size = 'md', className }: AvatarProps) {
  return (
    <div
      className={cn(
        'relative flex shrink-0 items-center justify-center overflow-hidden rounded-full',
        'bg-surface-overlay ring-1 ring-border',
        sizeStyles[size],
        className,
      )}
      role="img"
      aria-label={alt ?? name}
    >
      {src ? (
        <img src={src} alt={alt ?? name ?? ''} className="size-full object-cover" />
      ) : (
        <span className="font-medium text-text-secondary">{name ? getInitials(name) : '?'}</span>
      )}
    </div>
  )
}
