import { useState } from 'react'
import { AppHeader } from '@/components/organisms/AppHeader'
import { ChipGroup } from '@/components/molecules/Chip'
import { Button } from '@/components/atoms/Button'
import { Badge } from '@/components/atoms/Badge'
import { mockRewards } from '@/lib/mock-data'

const rewardCategories = [
  { id: 'all', label: 'All' },
  { id: 'Parking', label: 'Parking' },
  { id: 'Dining', label: 'Dining' },
  { id: 'Services', label: 'Services' },
]

export function RewardsScreen() {
  const [category, setCategory] = useState('all')

  const filtered = mockRewards.filter(
    (r) => category === 'all' || r.category === category,
  )

  return (
    <div className="pb-6">
      <AppHeader showNavMenu showSearch />

      <div className="px-4 pt-4">
        <h1 className="text-display text-text-primary">Reward Catalog</h1>
        <p className="mt-2 text-body text-text-secondary">
          Redeem your points for exclusive mall privileges
        </p>

        <ChipGroup
          items={rewardCategories}
          value={category}
          onChange={setCategory}
          className="mt-6"
        />

        <div className="mt-6 space-y-4">
          {filtered.map((reward) => (
            <article
              key={reward.id}
              className="flex gap-4 rounded-2xl border border-border bg-surface-elevated p-4"
            >
              <img
                src={reward.image}
                alt=""
                className="size-20 shrink-0 rounded-xl object-cover"
              />
              <div className="flex min-w-0 flex-1 flex-col">
                <Badge variant="secondary" className="w-fit">
                  {reward.category}
                </Badge>
                <h3 className="mt-2 text-subtitle text-text-primary">{reward.title}</h3>
                <p className="mt-1 text-caption text-text-secondary line-clamp-2">
                  {reward.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="text-title text-primary">
                    {reward.pointsCost.toLocaleString()} pts
                  </span>
                  <Button size="sm" variant="primary">
                    Redeem
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
