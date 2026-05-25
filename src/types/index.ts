export interface User {
  id: string
  name: string
  email: string
  phone: string
  tier: 'silver' | 'gold' | 'platinum' | 'black'
  points: number
  memberId: string
}

export interface Promotion {
  id: string
  title: string
  subtitle?: string
  image: string
  tag: 'OFFERS' | 'EVENTS' | 'NEW STORES'
  category: 'all' | 'stores' | 'events' | 'offers'
  startDate: string
  endDate: string
}

export interface Tenant {
  id: string
  name: string
  category: string
  floor: string
  unit: string
  image: string
  participatesInRewards: boolean
}

export interface Reward {
  id: string
  title: string
  description: string
  pointsCost: number
  image: string
  category: string
  expiresAt?: string
}

export interface Voucher {
  id: string
  title: string
  code: string
  status: 'active' | 'used' | 'expired'
  expiresAt: string
  image?: string
}

export interface PointTransaction {
  id: string
  type: 'earn' | 'redeem' | 'expire' | 'bonus'
  amount: number
  description: string
  date: string
  tenantName?: string
}

export interface Notification {
  id: string
  title: string
  body: string
  type: 'campaign' | 'reward' | 'event' | 'system'
  read: boolean
  createdAt: string
}

export type ApiState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string }
