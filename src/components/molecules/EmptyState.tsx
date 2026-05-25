import { cn } from '@/design-system/utils/cn'
import { Button } from '@/components/atoms/Button'

export interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description?: string
  actionLabel?: string
  onAction?: () => void
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center px-6 py-12 text-center',
        className,
      )}
      role="status"
    >
      {icon ? (
        <div className="mb-4 flex size-16 items-center justify-center rounded-2xl bg-surface-elevated text-text-secondary">
          {icon}
        </div>
      ) : null}
      <h3 className="text-title text-text-primary">{title}</h3>
      {description ? (
        <p className="mt-2 max-w-xs text-body text-text-secondary">{description}</p>
      ) : null}
      {actionLabel && onAction ? (
        <Button variant="outline" size="md" className="mt-6" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  )
}

export interface ErrorStateProps {
  title?: string
  description?: string
  onRetry?: () => void
  className?: string
}

export function ErrorState({
  title = 'Something went wrong',
  description = 'We couldn\'t load this content. Please try again.',
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div className={cn('flex flex-col items-center px-6 py-12 text-center', className)} role="alert">
      <div className="mb-4 flex size-16 items-center justify-center rounded-2xl bg-error-muted text-error">
        !
      </div>
      <h3 className="text-title text-text-primary">{title}</h3>
      <p className="mt-2 max-w-xs text-body text-text-secondary">{description}</p>
      {onRetry ? (
        <Button variant="primary" size="md" className="mt-6" onClick={onRetry}>
          Try Again
        </Button>
      ) : null}
    </div>
  )
}
