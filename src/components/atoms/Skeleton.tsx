import { cn } from '@/design-system/utils/cn'

export interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
}

export function Skeleton({ className, variant = 'rectangular' }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse bg-surface-overlay',
        variant === 'text' && 'h-4 rounded-md',
        variant === 'circular' && 'rounded-full',
        variant === 'rectangular' && 'rounded-xl',
        className,
      )}
      aria-hidden
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-surface p-4" aria-busy="true" aria-label="Loading">
      <Skeleton className="h-40 w-full" />
      <Skeleton className="h-4 w-3/4" variant="text" />
      <Skeleton className="h-3 w-1/2" variant="text" />
    </div>
  )
}
