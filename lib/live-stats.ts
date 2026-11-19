export const LIVE_STATS_REFRESH_SECONDS = 60

export type LiveStats =
  | {
      status: 'live'
      syncedAt: string
      licencesInUse: number
      activeUsers28d: number | null
      newUsers28d: number | null
    }
  | { status: 'unavailable' }
