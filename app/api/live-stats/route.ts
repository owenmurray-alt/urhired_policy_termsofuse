import { getLiveStats } from '@/lib/revenuecat'

export async function GET() {
  const stats = await getLiveStats()
  return Response.json(stats, {
    headers: {
      'Cache-Control':
        stats.status === 'live' ? 'public, max-age=0, s-maxage=30' : 'no-store',
    },
  })
}
