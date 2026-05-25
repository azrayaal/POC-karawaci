import { cn } from '@/design-system/utils/cn'

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  size?: 'sm' | 'md'
}

export function IconButton({ label, size = 'md', className, children, ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-colors',
        'text-text-primary hover:bg-surface-elevated active:scale-95',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        size === 'sm' ? 'size-9' : 'size-11 min-w-[var(--touch-target-min)] min-h-[var(--touch-target-min)]',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
