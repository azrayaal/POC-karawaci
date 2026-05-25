import { cn } from '@/design-system/utils/cn'
import { QrCode } from 'lucide-react'

export type MembershipTier = 'silver' | 'gold' | 'platinum' | 'black'

export interface MemberCardProps {
  memberName: string
  memberId: string
  tier: MembershipTier
  points: number
  className?: string
}

const tierStyles: Record<MembershipTier, string> = {
  silver: 'from-neutral-gray-4 to-neutral-gray-5',
  gold: 'from-brand-gold-muted to-brand-gold',
  platinum: 'from-neutral-gray-2 to-neutral-gray-3',
  black: 'from-neutral-black to-black',
}

const tierLabels: Record<MembershipTier, string> = {
  silver: 'Silver Member',
  gold: 'Gold Member',
  platinum: 'Platinum Member',
  black: 'Black Member',
}

export function MemberCard({ memberName, memberId, tier, points, className }: MemberCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl p-5 shadow-lg',
        'bg-gradient-to-br text-text-primary',
        tierStyles[tier],
        className,
      )}
    >
      <div className="absolute -right-8 -top-8 size-32 rounded-full bg-white/5" />
      <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-white/5" />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-label text-white/70">SUPERMAL KARAWACI</p>
          <p className="mt-1 text-caption text-white/60">{tierLabels[tier]}</p>
        </div>
        <div className="rounded-lg bg-black/20 p-2">
          <QrCode className="size-8 text-white" aria-hidden />
        </div>
      </div>

      <div className="relative mt-8">
        <p className="text-display font-light tracking-tight">{points.toLocaleString()}</p>
        <p className="text-caption text-white/70">Available Points</p>
      </div>

      <div className="relative mt-6 flex items-end justify-between border-t border-white/10 pt-4">
        <div>
          <p className="text-caption text-white/60">Member Name</p>
          <p className="text-subtitle font-medium">{memberName}</p>
        </div>
        <div className="text-right">
          <p className="text-caption text-white/60">Member ID</p>
          <p className="text-caption font-mono">{memberId}</p>
        </div>
      </div>
    </div>
  )
}
