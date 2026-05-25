import { Outlet } from 'react-router-dom'
import { BottomTabBar } from '@/components/organisms/BottomTabBar'

export function MobileShell() {
  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-[var(--width-mobile)] flex-col bg-background shadow-2xl">
      <main className="flex-1 pb-[calc(var(--height-tab-bar)+12px)]">
        <Outlet />
      </main>
      <BottomTabBar />
    </div>
  )
}

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-[var(--width-mobile)] flex-col bg-background">
      {children}
    </div>
  )
}
