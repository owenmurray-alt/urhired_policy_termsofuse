'use client'

import useSWR from 'swr'

import { LIVE_STATS_REFRESH_SECONDS, type LiveStats } from '@/lib/live-stats'

async function fetchLiveStats(url: string): Promise<LiveStats> {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Live stats request failed with status ${response.status}`)
  return response.json()
}

export function useLiveStats() {
  const { data, error } = useSWR('/api/live-stats', fetchLiveStats, {
    refreshInterval: LIVE_STATS_REFRESH_SECONDS * 1000,
    dedupingInterval: 15_000,
  })

  if (error || data?.status !== 'live') return null
  return data
}
