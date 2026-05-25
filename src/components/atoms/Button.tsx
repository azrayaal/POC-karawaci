import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/design-system/utils/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'gradient-red text-white shadow-glow-red hover:opacity-90 active:scale-[0.98]',
  secondary: 'bg-secondary text-text-inverse hover:bg-secondary-hover active:scale-[0.98]',
  outline: 'border border-border bg-transparent text-text-primary hover:bg-surface-elevated',
  ghost: 'bg-transparent text-text-primary hover:bg-surface-elevated',
  danger: 'bg-error text-white hover:opacity-90 active:scale-[0.98]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-caption rounded-lg',
  md: 'h-11 px-5 text-button rounded-xl min-w-[var(--touch-target-min)]',
  lg: 'h-13 px-6 text-subtitle rounded-xl min-w-[var(--touch-target-min)]',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth,
      loading,
      disabled,
      children,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-[var(--duration-normal)]',
        'disabled:opacity-50 disabled:pointer-events-none',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {loading ? (
        <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </button>
  ),
)

Button.displayName = 'Button'
