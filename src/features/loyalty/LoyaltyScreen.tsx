import { NavLink } from 'react-router-dom'
import { ChevronRight, Gift, History, Ticket } from 'lucide-react'
import { AppHeader } from '@/components/organisms/AppHeader'
import { MemberCard } from '@/components/molecules/MemberCard'
import { ListItem } from '@/components/molecules/ListItem'
import { mockUser, mockVouchers, mockPointHistory } from '@/lib/mock-data'
import { cn } from '@/design-system/utils/cn'

export function LoyaltyScreen() {
  const activeVouchers = mockVouchers.filter((v) => v.status === 'active')
  const recentHistory = mockPointHistory.slice(0, 3)

  return (
    <div className="pb-6">
      <AppHeader title="LOYALTY" showNavMenu showSearch />

      <div className="space-y-6 px-4 pt-4">
        <div>
          <h1 className="text-display text-text-primary">Membership</h1>
          <p className="mt-2 text-body text-text-secondary">
            Points, rewards, and exclusive member privileges
          </p>
        </div>

        <MemberCard
          memberName={mockUser.name}
          memberId={mockUser.memberId}
          tier={mockUser.tier}
          points={mockUser.points}
        />

        <section aria-label="Loyalty shortcuts">
          <div className="grid grid-cols-2 gap-3">
            <NavLink
              to="/rewards"
              className="group rounded-2xl border border-border bg-surface-elevated p-4 transition-colors hover:border-primary/30 hover:bg-surface-overlay active:scale-[0.98]"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary-muted text-primary">
                <Gift className="size-5" />
              </div>
              <p className="mt-3 text-subtitle text-text-primary">Reward Catalog</p>
              <p className="mt-1 text-caption text-text-secondary">Redeem your points</p>
            </NavLink>

            <NavLink
              to="/wallet"
              className="group rounded-2xl border border-border bg-surface-elevated p-4 transition-colors hover:border-secondary/30 hover:bg-surface-overlay active:scale-[0.98]"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-secondary-muted text-secondary">
                <Ticket className="size-5" />
              </div>
              <p className="mt-3 text-subtitle text-text-primary">My Wallet</p>
              <p className="mt-1 text-caption text-text-secondary">
                {activeVouchers.length} active voucher{activeVouchers.length !== 1 ? 's' : ''}
              </p>
            </NavLink>
          </div>
        </section>

        <section aria-labelledby="recent-activity-heading">
          <div className="mb-3 flex items-center justify-between">
            <h2 id="recent-activity-heading" className="text-heading text-text-primary">
              Recent Activity
            </h2>
            <NavLink to="/wallet" className="flex items-center gap-0.5 text-caption text-text-secondary hover:text-primary">
              View all
              <ChevronRight className="size-4" />
            </NavLink>
          </div>

          <div className="overflow-hidden rounded-2xl bg-surface-elevated">
            {recentHistory.map((tx, index) => (
              <div
                key={tx.id}
                className={cn(
                  'flex items-center justify-between px-4 py-4',
                  index > 0 && 'border-t border-divider',
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-surface-overlay">
                    <History className="size-4 text-text-secondary" />
                  </div>
                  <div>
                    <p className="text-subtitle text-text-primary">{tx.description}</p>
                    <p className="text-caption text-text-disabled">{tx.date}</p>
                  </div>
                </div>
                <span
                  className={cn(
                    'text-subtitle font-semibold',
                    tx.amount > 0 ? 'text-success' : 'text-text-primary',
                  )}
                >
                  {tx.amount > 0 ? '+' : ''}
                  {tx.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="mb-3 text-heading text-text-primary">
            Tier Benefits
          </h2>
          <div className="overflow-hidden rounded-2xl bg-surface-elevated">
            <ListItem title="Birthday Reward" subtitle="Exclusive treat on your birthday month" showChevron />
            <ListItem title="Premium Parking" subtitle="Discounted & priority parking access" showChevron />
            <ListItem title="Member Events" subtitle="Early access to mall events" showChevron />
          </div>
        </section>
      </div>
    </div>
  )
}
