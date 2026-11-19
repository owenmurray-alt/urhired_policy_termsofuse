import { unstable_cache } from 'next/cache'

import { LIVE_STATS_REFRESH_SECONDS, type LiveStats } from '@/lib/live-stats'

const PROJECT_ID = process.env.REVENUECAT_PROJECT_ID ?? 'proj9d7e60ff'
const OVERVIEW_URL = `https://api.revenuecat.com/v2/projects/${encodeURIComponent(PROJECT_ID)}/metrics/overview`
const REQUEST_TIMEOUT_MS = 8000
const UNAVAILABLE: LiveStats = { status: 'unavailable' }

type OverviewMetric = { id?: unknown; value?: unknown }

function toCount(value: unknown): number | null {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0
    ? Math.round(value)
    : null
}

// Only headcounts leave this module. Revenue and MRR from the same response are never read.
const fetchOverview = unstable_cache(
  async (): Promise<LiveStats> => {
    const apiKey = process.env.REVENUECAT_API_KEY
    if (!apiKey) return UNAVAILABLE

    try {
      const response = await fetch(OVERVIEW_URL, {
        headers: { Authorization: `Bearer ${apiKey}`, Accept: 'application/json' },
        cache: 'no-store',
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      })
      if (!response.ok) {
        console.error('[live-stats] RevenueCat responded with status', response.status)
        return UNAVAILABLE
      }

      const body: { metrics?: OverviewMetric[] } = await response.json()
      const counts = new Map<string, number | null>()
      for (const metric of body.metrics ?? []) {
        if (typeof metric.id === 'string') counts.set(metric.id, toCount(metric.value))
      }

      const activeSubscriptions = counts.get('active_subscriptions') ?? null
      if (activeSubscriptions === null) {
        console.error('[live-stats] RevenueCat response had no active_subscriptions metric')
        return UNAVAILABLE
      }

      return {
        status: 'live',
        syncedAt: new Date().toISOString(),
        licencesInUse: activeSubscriptions + (counts.get('active_trials') ?? 0),
        activeUsers28d: counts.get('active_users') ?? null,
        newUsers28d: counts.get('new_customers') ?? null,
      }
    } catch (error) {
      console.error(
        '[live-stats] RevenueCat request failed:',
        error instanceof Error ? error.name : 'unknown error',
      )
      return UNAVAILABLE
    }
  },
  ['revenuecat-overview'],
  { revalidate: LIVE_STATS_REFRESH_SECONDS },
)

export async function getLiveStats(): Promise<LiveStats> {
  if (!process.env.REVENUECAT_API_KEY) return UNAVAILABLE
  return fetchOverview()
}
