import { useState } from 'react'
import { Camera, Car, MapPin, Receipt, Sparkles } from 'lucide-react'
import { AppHeader } from '@/components/organisms/AppHeader'
import { NavMenu } from '@/components/organisms/NavMenu'
import { HeroBanner, QuickActions } from '@/components/organisms/HeroBanner'
import { ChipGroup } from '@/components/molecules/Chip'
import { PromoCard } from '@/components/molecules/PromoCard'
import { MemberCard } from '@/components/molecules/MemberCard'
import { categoryFilters, mockPromotions, mockUser } from '@/lib/mock-data'

export function HomeScreen() {
  const [filter, setFilter] = useState('all')

  const filteredPromos = mockPromotions.filter(
    (p) => filter === 'all' || p.category === filter,
  )

  const quickActions = [
    { id: 'scan', label: 'Scan Receipt', icon: <Receipt className="size-5" /> },
    { id: 'parking', label: 'Parking', icon: <Car className="size-5" /> },
    { id: 'map', label: 'Mall Map', icon: <MapPin className="size-5" /> },
    { id: 'rewards', label: 'Rewards', icon: <Sparkles className="size-5" /> },
  ]

  return (
    <div className="pb-6">
      <AppHeader transparent showSearch showNotifications />

      <HeroBanner
        title="One-Stop Premium Shopping for Everyone"
        subtitle="HIGHLIGHTS"
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
        ctaLabel="View Details"
      />

      <div className="sticky top-0 z-30 border-b border-border-subtle bg-background/95 backdrop-blur-xl">
        <NavMenu />
      </div>

      <div className="space-y-8 px-4">
        <section aria-label="Membership card">
          <MemberCard
            memberName={mockUser.name}
            memberId={mockUser.memberId}
            tier={mockUser.tier}
            points={mockUser.points}
          />
        </section>

        <section aria-label="Quick actions">
          <QuickActions actions={quickActions} />
        </section>

        <section aria-labelledby="whats-new-heading">
          <div className="mb-4 flex items-center justify-between">
            <h2 id="whats-new-heading" className="text-heading text-text-primary">
              What&apos;s New
            </h2>
            <button type="button" className="text-caption text-text-secondary hover:text-primary">
              See All
            </button>
          </div>

          <ChipGroup
            items={[...categoryFilters]}
            value={filter}
            onChange={setFilter}
            className="mb-4"
          />

          <div className="columns-2 gap-3 space-y-3">
            {filteredPromos.map((promo, i) => (
              <PromoCard
                key={promo.id}
                title={promo.title}
                subtitle={`${promo.startDate} — ${promo.endDate}`}
                image={promo.image}
                tag={promo.tag}
                aspect={i % 3 === 0 ? 'landscape' : 'portrait'}
                className="break-inside-avoid mb-3"
              />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="scan-receipt-heading"
          className="rounded-2xl border border-border bg-surface-elevated p-5"
        >
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl gradient-red">
              <Camera className="size-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 id="scan-receipt-heading" className="text-subtitle text-text-primary">
                Earn Points with Every Purchase
              </h3>
              <p className="mt-1 text-caption text-text-secondary">
                Upload your receipt for instant point validation
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
