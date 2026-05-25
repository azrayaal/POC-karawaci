import { cn } from '@/design-system/utils/cn'

export interface TabIconProps extends React.SVGAttributes<SVGSVGElement> {
  active?: boolean
}

function TabIconShell({
  active,
  className,
  children,
  ...props
}: TabIconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-[18px]', className)}
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  )
}

export function TabHomeIcon({ active, className, ...props }: TabIconProps) {
  return (
    <TabIconShell active={active} className={className} {...props}>
      {active ? (
        <>
          <path
            fill="currentColor"
            d="M12 3.25 4.5 9.5v10a1.25 1.25 0 0 0 1.25 1.25H10v-5.5h4v5.5h4.25A1.25 1.25 0 0 0 19.5 19.5V9.5L12 3.25Z"
          />
          <path
            fill="currentColor"
            d="M12 2.15c.28 0 .55.1.76.29l7.5 6.25c.48.4.49 1.12.02 1.54a1.1 1.1 0 0 1-.73.27h-1.02V19.5c0 .97-.78 1.75-1.75 1.75H14v-5.5a1.25 1.25 0 0 0-1.25-1.25h-1.5A1.25 1.25 0 0 0 10 15.75v5.5H7.25A1.75 1.75 0 0 1 5.5 19.5V10.5H4.48c-.58 0-.9-.66-.52-1.08L11.24 2.44c.21-.19.48-.29.76-.29Z"
            opacity="0.35"
          />
        </>
      ) : (
        <path
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.5 19.5V10.2L12 4.75l6.5 5.45V19.5M9.25 19.5v-5.25h5.5V19.5"
        />
      )}
    </TabIconShell>
  )
}

export function TabDirectoryIcon({ active, className, ...props }: TabIconProps) {
  return (
    <TabIconShell active={active} className={className} {...props}>
      {active ? (
        <>
          <path
            fill="currentColor"
            d="M12 2.25c-3.59 0-6.5 2.91-6.5 6.5 0 4.78 5.36 9.47 6.14 10.16a.75.75 0 0 0 1.02 0c.78-.69 6.14-5.38 6.14-10.16 0-3.59-2.91-6.5-6.5-6.5Z"
          />
          <circle cx="12" cy="8.75" r="2.35" fill="var(--color-background, #000)" />
        </>
      ) : (
        <>
          <path
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21s-6.5-5.4-6.5-10.25a6.5 6.5 0 1 1 13 0C18.5 15.6 12 21 12 21Z"
          />
          <circle cx="12" cy="10.75" r="2.1" stroke="currentColor" strokeWidth="1.75" />
        </>
      )}
    </TabIconShell>
  )
}

export function TabLoyaltyIcon({ active, className, ...props }: TabIconProps) {
  return (
    <TabIconShell active={active} className={className} {...props}>
      {active ? (
        <>
          <path
            fill="currentColor"
            d="M12 2.5 14.1 8h5.4l-4.35 3.15 1.65 5.1L12 13.75 7.2 16.25l1.65-5.1L4.5 8h5.4L12 2.5Z"
          />
          <circle cx="12" cy="11.25" r="1.35" fill="var(--color-background, #000)" />
        </>
      ) : (
        <path
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3.25 14.05 8.5h4.7l-3.8 2.75 1.45 4.5L12 13.5 7.6 15.75l1.45-4.5-3.8-2.75h4.7L12 3.25Z"
        />
      )}
    </TabIconShell>
  )
}

export function TabAccountIcon({ active, className, ...props }: TabIconProps) {
  return (
    <TabIconShell active={active} className={className} {...props}>
      {active ? (
        <>
          <circle cx="12" cy="12" r="9.25" fill="currentColor" />
          <circle cx="12" cy="9.75" r="2.75" fill="var(--color-background, #000)" />
          <path
            fill="var(--color-background, #000)"
            d="M6.75 17.1c.95-2.35 2.95-3.6 5.25-3.6s4.3 1.25 5.25 3.6a7.2 7.2 0 0 1-10.5 0Z"
          />
        </>
      ) : (
        <>
          <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <path
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            d="M7.25 17.25c.9-2.15 2.75-3.25 4.75-3.25s3.85 1.1 4.75 3.25"
          />
        </>
      )}
    </TabIconShell>
  )
}

export function TabScanIcon({ active, className, ...props }: TabIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-6', className)}
      aria-hidden
      {...props}
    >
      <path
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        d="M7.5 8.25V6.75A1.25 1.25 0 0 1 8.75 5.5h1.5M16.5 8.25V6.75A1.25 1.25 0 0 0 15.25 5.5h-1.5M7.5 15.75v1.5A1.25 1.25 0 0 0 8.75 18.5h1.5M16.5 15.75v1.5A1.25 1.25 0 0 1 15.25 18.5h-1.5"
      />
      <rect
        x="8.25"
        y="8.25"
        width="7.5"
        height="7.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.85"
      />
      <path
        stroke="currentColor"
        strokeWidth="1.85"
        strokeLinecap="round"
        d={active ? 'M9.75 12h4.5M12 9.75v4.5' : 'M9.5 12h5'}
      />
    </svg>
  )
}
