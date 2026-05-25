import { useState } from 'react'
import { AppHeader } from '@/components/organisms/AppHeader'
import { SearchBar } from '@/components/molecules/SearchBar'
import { ChipGroup } from '@/components/molecules/Chip'
import { Badge } from '@/components/atoms/Badge'
import { mockTenants, tenantCategories } from '@/lib/mock-data'

export function DirectoryScreen() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categoryItems = tenantCategories.map((c) => ({ id: c, label: c }))

  const filtered = mockTenants.filter((t) => {
    const matchesSearch =
      !search ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || t.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pb-6">
      <AppHeader showNavMenu showSearch />

      <div className="space-y-4 px-4 pt-4">
        <h1 className="text-display text-text-primary">Shop & Dine</h1>
        <SearchBar value={search} onChange={setSearch} placeholder="Search stores..." />

        <ChipGroup items={categoryItems} value={category} onChange={setCategory} />

        <div className="space-y-3 pt-2">
          {filtered.length > 0 ? (
            filtered.map((tenant) => (
              <button
                key={tenant.id}
                type="button"
                className="flex w-full gap-4 rounded-2xl border border-border bg-surface-elevated p-4 text-left transition-colors hover:bg-surface-overlay active:scale-[0.99]"
              >
                <img
                  src={tenant.image}
                  alt=""
                  className="size-16 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-subtitle text-text-primary">{tenant.name}</h3>
                    {tenant.participatesInRewards ? (
                      <Badge variant="primary" dot>
                        Rewards
                      </Badge>
                    ) : null}
                  </div>
                  <p className="mt-1 text-caption text-text-secondary">{tenant.category}</p>
                  <p className="mt-1 text-caption text-text-disabled">
                    {tenant.floor} · Unit {tenant.unit}
                  </p>
                </div>
              </button>
            ))
          ) : (
            <p className="py-12 text-center text-body text-text-secondary">
              No stores found matching your search
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
