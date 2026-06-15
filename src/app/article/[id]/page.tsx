import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import ArticleContent from '@/components/ArticleContent'
import Footer from '@/components/Footer'
import { timelineEvents } from '@/data/timeline'

export function generateStaticParams() {
  return timelineEvents.map((event) => ({
    id: event.id,
  }))
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const event = timelineEvents.find((e) => e.id === id)
    if (!event) return { title: 'Article non trouvé' }
    return {
      title: `${event.title} (${event.year}) | Histoire de la Photographie`,
      description: event.summary,
    }
  })
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const eventIndex = timelineEvents.findIndex((e) => e.id === id)
  if (eventIndex === -1) notFound()

  const event = timelineEvents[eventIndex]
  const prevEvent = eventIndex > 0 ? timelineEvents[eventIndex - 1] : null
  const nextEvent =
    eventIndex < timelineEvents.length - 1
      ? timelineEvents[eventIndex + 1]
      : null

  return (
    <main className="bg-warm-950 min-h-screen">
      <Navigation />
      <ArticleContent
        event={event}
        prevEvent={prevEvent}
        nextEvent={nextEvent}
      />
      <Footer />
    </main>
  )
}
