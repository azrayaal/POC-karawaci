import { useState } from 'react'
import { Ticket, History } from 'lucide-react'
import { AppHeader } from '@/components/organisms/AppHeader'
import { MemberCard } from '@/components/molecules/MemberCard'
import { Badge } from '@/components/atoms/Badge'
import { EmptyState } from '@/components/molecules/EmptyState'
import { mockUser, mockVouchers, mockPointHistory } from '@/lib/mock-data'
import { cn } from '@/design-system/utils/cn'

type WalletTab = 'vouchers' | 'history'

export function WalletScreen() {
  const [tab, setTab] = useState<WalletTab>('vouchers')

  const activeVouchers = mockVouchers.filter((v) => v.status === 'active')

  return (
    <div className="pb-6">
      <AppHeader showNavMenu />

      <div className="space-y-6 px-4 pt-4">
        <MemberCard
          memberName={mockUser.name}
          memberId={mockUser.memberId}
          tier={mockUser.tier}
          points={mockUser.points}
        />

        <div className="flex rounded-xl bg-surface-elevated p-1" role="tablist">
          {([
            { id: 'vouchers' as const, label: 'Vouchers', icon: Ticket },
            { id: 'history' as const, label: 'Point History', icon: History },
          ]).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={cn(
                'flex flex-1 items-center justify-center gap-2 rounded-lg py-3 text-caption font-medium transition-colors',
                tab === id
                  ? 'bg-surface-overlay text-text-primary'
                  : 'text-text-secondary hover:text-text-primary',
              )}
            >
              <Icon className="size-4" />
              {label}
            </button>
          ))}
        </div>

        {tab === 'vouchers' ? (
          activeVouchers.length > 0 ? (
            <div className="space-y-3">
              {activeVouchers.map((voucher) => (
                <div
                  key={voucher.id}
                  className="rounded-2xl border border-dashed border-secondary/40 bg-secondary-muted p-5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="secondary">Active</Badge>
                      <h3 className="mt-2 text-subtitle text-text-primary">{voucher.title}</h3>
                      <p className="mt-1 font-mono text-caption text-text-secondary">
                        {voucher.code}
                      </p>
                    </div>
                    <Ticket className="size-8 text-secondary" />
                  </div>
                  <p className="mt-4 text-caption text-text-disabled">
                    Expires {voucher.expiresAt}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              icon={<Ticket className="size-8" />}
              title="No vouchers yet"
              description="Redeem rewards to add vouchers to your wallet"
              actionLabel="Browse Rewards"
            />
          )
        ) : (
          <div className="space-y-1">
            {mockPointHistory.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between rounded-xl p-4 hover:bg-surface-elevated"
              >
                <div>
                  <p className="text-subtitle text-text-primary">{tx.description}</p>
                  <p className="mt-0.5 text-caption text-text-disabled">{tx.date}</p>
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
        )}
      </div>
    </div>
  )
}
