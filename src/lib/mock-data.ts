import type { Promotion, Reward, Tenant, User, Voucher, PointTransaction } from '@/types'

export const mockUser: User = {
  id: 'usr_001',
  name: 'Sarah Wijaya',
  email: 'sarah.wijaya@email.com',
  phone: '+62 812 3456 7890',
  tier: 'gold',
  points: 12450,
  memberId: 'SK-2024-88421',
}

export const mockPromotions: Promotion[] = [
  {
    id: 'promo_1',
    title: 'Redeem Points, Save Up to 50% Off',
    subtitle: 'HIGHLIGHTS',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    tag: 'OFFERS',
    category: 'offers',
    startDate: '2026-05-20',
    endDate: '2026-05-27',
  },
  {
    id: 'promo_2',
    title: 'LUX x Premium Fashion Week',
    subtitle: 'EVENTS',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    tag: 'EVENTS',
    category: 'events',
    startDate: '2026-05-14',
    endDate: '2026-05-31',
  },
  {
    id: 'promo_3',
    title: 'New Store: Breville Flagship',
    subtitle: 'NEW STORES',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    tag: 'NEW STORES',
    category: 'stores',
    startDate: '2026-05-01',
    endDate: '2026-06-30',
  },
  {
    id: 'promo_4',
    title: 'Dining Delights — 2x Points',
    subtitle: 'OFFERS',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    tag: 'OFFERS',
    category: 'offers',
    startDate: '2026-05-01',
    endDate: '2026-05-31',
  },
]

export const mockTenants: Tenant[] = [
  {
    id: 'tenant_1',
    name: 'Zara',
    category: 'Fashion',
    floor: 'L1',
    unit: 'A-12',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80',
    participatesInRewards: true,
  },
  {
    id: 'tenant_2',
    name: 'Starbucks',
    category: 'Food & Beverage',
    floor: 'GF',
    unit: 'B-05',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
    participatesInRewards: true,
  },
  {
    id: 'tenant_3',
    name: 'Samsung Experience',
    category: 'Electronics',
    floor: 'L2',
    unit: 'C-08',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&q=80',
    participatesInRewards: false,
  },
]

export const mockRewards: Reward[] = [
  {
    id: 'reward_1',
    title: 'Free Parking 2 Hours',
    description: 'Redeem for complimentary parking at any Supermal Karawaci parking zone.',
    pointsCost: 500,
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e013f02?w=400&q=80',
    category: 'Parking',
  },
  {
    id: 'reward_2',
    title: 'Rp 50.000 Dining Voucher',
    description: 'Valid at participating F&B tenants.',
    pointsCost: 2500,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
    category: 'Dining',
  },
  {
    id: 'reward_3',
    title: 'Premium Gift Wrapping',
    description: 'Complimentary gift wrapping at Concierge.',
    pointsCost: 300,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&q=80',
    category: 'Services',
  },
]

export const mockVouchers: Voucher[] = [
  {
    id: 'voucher_1',
    title: 'Free Parking 2 Hours',
    code: 'SK-PARK-8842',
    status: 'active',
    expiresAt: '2026-06-30',
  },
  {
    id: 'voucher_2',
    title: 'Birthday Treat — 20% Off',
    code: 'SK-BDAY-2026',
    status: 'active',
    expiresAt: '2026-05-31',
  },
]

export const mockPointHistory: PointTransaction[] = [
  {
    id: 'pt_1',
    type: 'earn',
    amount: 450,
    description: 'Receipt validated — Zara',
    date: '2026-05-24',
    tenantName: 'Zara',
  },
  {
    id: 'pt_2',
    type: 'redeem',
    amount: -500,
    description: 'Redeemed Free Parking',
    date: '2026-05-22',
  },
  {
    id: 'pt_3',
    type: 'bonus',
    amount: 200,
    description: 'Welcome bonus',
    date: '2026-05-20',
  },
]

export const categoryFilters = [
  { id: 'all', label: 'All' },
  { id: 'stores', label: 'New Stores' },
  { id: 'events', label: 'Events' },
  { id: 'offers', label: 'Offers' },
] as const

export const tenantCategories = [
  'All',
  'Fashion',
  'Food & Beverage',
  'Electronics',
  'Beauty',
  'Entertainment',
  'Services',
] as const
