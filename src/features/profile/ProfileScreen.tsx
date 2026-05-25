import {
  Bell,
  Car,
  HelpCircle,
  LogOut,
  Settings,
  Shield,
  Star,
} from 'lucide-react'
import { AppHeader } from '@/components/organisms/AppHeader'
import { Avatar } from '@/components/atoms/Avatar'
import { Badge } from '@/components/atoms/Badge'
import { ListItem } from '@/components/molecules/ListItem'
import { mockUser } from '@/lib/mock-data'

export function ProfileScreen() {
  const menuSections = [
    {
      title: 'Account',
      items: [
        { icon: Settings, label: 'Profile Settings', subtitle: 'Name, email, phone' },
        { icon: Bell, label: 'Notifications', subtitle: 'Push & email preferences' },
        { icon: Shield, label: 'Privacy & Security', subtitle: 'Password, biometrics' },
      ],
    },
    {
      title: 'Services',
      items: [
        { icon: Car, label: 'Parking & Vehicles', subtitle: 'Manage registered vehicles' },
        { icon: Star, label: 'Feedback & Support', subtitle: 'Rate us, submit complaints' },
        { icon: HelpCircle, label: 'Help Center', subtitle: 'FAQ, contact concierge' },
      ],
    },
  ]

  return (
    <div className="pb-6">
      <AppHeader showNavMenu />

      <div className="px-4 pt-4">
        <div className="flex items-center gap-4 rounded-2xl bg-surface-elevated p-5">
          <Avatar name={mockUser.name} size="lg" />
          <div className="min-w-0 flex-1">
            <h1 className="text-heading text-text-primary">{mockUser.name}</h1>
            <p className="mt-0.5 text-caption text-text-secondary">{mockUser.email}</p>
            <Badge variant="secondary" className="mt-2">
              {mockUser.tier.charAt(0).toUpperCase() + mockUser.tier.slice(1)} Member
            </Badge>
          </div>
        </div>

        {menuSections.map((section) => (
          <section key={section.title} className="mt-8">
            <h2 className="mb-2 px-4 text-label text-text-disabled">{section.title}</h2>
            <div className="overflow-hidden rounded-2xl bg-surface-elevated">
              {section.items.map((item) => (
                <ListItem
                  key={item.label}
                  title={item.label}
                  subtitle={item.subtitle}
                  showChevron
                  left={
                    <div className="flex size-10 items-center justify-center rounded-xl bg-surface-overlay">
                      <item.icon className="size-5 text-text-secondary" />
                    </div>
                  }
                />
              ))}
            </div>
          </section>
        ))}

        <button
          type="button"
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-subtitle text-error transition-colors hover:bg-error-muted"
        >
          <LogOut className="size-5" />
          Sign Out
        </button>
      </div>
    </div>
  )
}
