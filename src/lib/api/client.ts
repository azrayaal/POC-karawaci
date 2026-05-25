/**
 * API Client Abstraction Layer
 * Supports SQL Server API + Supabase hybrid architecture
 */

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface ApiConfig {
  baseUrl: string
  getToken?: () => string | null
}

export class ApiError extends Error {
  status: number
  code?: string

  constructor(status: number, message: string, code?: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
  }
}

export function createApiClient(config: ApiConfig) {
  async function request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const token = config.getToken?.()
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    }

    const response = await fetch(`${config.baseUrl}${endpoint}`, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new ApiError(
        response.status,
        error.message ?? 'Request failed',
        error.code,
      )
    }

    return response.json()
  }

  return {
    get: <T>(endpoint: string) => request<T>(endpoint),
    post: <T>(endpoint: string, body: unknown) =>
      request<T>(endpoint, { method: 'POST', body: JSON.stringify(body) }),
    put: <T>(endpoint: string, body: unknown) =>
      request<T>(endpoint, { method: 'PUT', body: JSON.stringify(body) }),
    patch: <T>(endpoint: string, body: unknown) =>
      request<T>(endpoint, { method: 'PATCH', body: JSON.stringify(body) }),
    delete: <T>(endpoint: string) => request<T>(endpoint, { method: 'DELETE' }),
  }
}

/** Feature-scoped API endpoints */
export const endpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    verifyOtp: '/auth/verify-otp',
    refresh: '/auth/refresh',
    logout: '/auth/logout',
  },
  membership: {
    profile: '/membership/profile',
    card: '/membership/card',
    tiers: '/membership/tiers',
    points: '/membership/points',
    history: '/membership/points/history',
  },
  rewards: {
    catalog: '/rewards/catalog',
    redeem: '/rewards/redeem',
    vouchers: '/rewards/vouchers',
  },
  receipts: {
    upload: '/receipts/upload',
    validate: '/receipts/validate',
    status: (id: string) => `/receipts/${id}/status`,
  },
  directory: {
    tenants: '/directory/tenants',
    tenant: (id: string) => `/directory/tenants/${id}`,
    categories: '/directory/categories',
    search: '/directory/search',
  },
  promotions: {
    list: '/promotions',
    detail: (id: string) => `/promotions/${id}`,
    personalized: '/promotions/personalized',
  },
  parking: {
    info: '/parking/info',
    vehicles: '/parking/vehicles',
    benefits: '/parking/benefits',
  },
  feedback: {
    submit: '/feedback/submit',
    tickets: '/feedback/tickets',
    ticket: (id: string) => `/feedback/tickets/${id}`,
  },
  notifications: {
    list: '/notifications',
    preferences: '/notifications/preferences',
    markRead: (id: string) => `/notifications/${id}/read`,
  },
} as const
