import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { timelineEvents, eras } from '@/data/timeline'

export function generateStaticParams() {
  return timelineEvents.map((event) => ({
    id: event.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const event = timelineEvents.find((e) => e.id === id)
  if (!event) {
    return { title: 'Non trouvé' }
  }
  return {
    title: `${event.title} — Musée de la Photographie`,
    description: event.summary,
  }
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const eventIndex = timelineEvents.findIndex((e) => e.id === id)
  if (eventIndex === -1) {
    notFound()
  }

  const event = timelineEvents[eventIndex]
  const era = eras.find((e) => e.id === event.era)
  const prevEvent = eventIndex > 0 ? timelineEvents[eventIndex - 1] : null
  const nextEvent =
    eventIndex < timelineEvents.length - 1
      ? timelineEvents[eventIndex + 1]
      : null

  const contentParagraphs = event.content.split('\n\n')

  return (
    <main className="min-h-screen bg-white">
      <Navigation currentView={null} />

      <div className="pt-14">
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-10">
            <Link
              href="/collection"
              className="text-[13px] text-[#999] hover:text-[#1a1a1a] transition-colors"
            >
              &larr; Retour
            </Link>
            <Link
              href="/collection"
              className="text-[12px] uppercase tracking-[0.15em] text-[#999] hover:text-[#1a1a1a] transition-colors"
            >
              Toute la collection{' '}
              <span className="text-[#ccc]">{timelineEvents.length}</span>
            </Link>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Left: Image */}
            <div className="bg-[#f5f5f5] p-6 md:p-10 flex items-center justify-center">
              <div className="relative w-full aspect-square">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col justify-start">
              <h1
                className="text-[28px] md:text-[32px] text-[#1a1a1a] mb-8 leading-tight"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 400,
                }}
              >
                {event.title}
              </h1>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-0.5">
                    Ann&eacute;e
                  </p>
                  <p className="text-[15px] text-[#1a1a1a] tabular-nums">
                    {event.year}
                    {event.endYear ? `–${event.endYear}` : ''}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-0.5">
                    Cat&eacute;gorie
                  </p>
                  <p className="text-[15px] text-[#1a1a1a] capitalize">
                    {event.category}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-0.5">
                    &Eacute;poque
                  </p>
                  <p className="text-[15px] text-[#1a1a1a]">
                    {era?.name ?? event.era}
                  </p>
                </div>
              </div>

              <p
                className="text-[15px] text-[#1a1a1a] leading-relaxed mb-6"
                style={{ fontWeight: 500 }}
              >
                {event.summary}
              </p>

              <hr className="border-[#e5e5e5] mb-6" />

              <div className="space-y-4">
                {contentParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[14px] text-[#444] leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="mt-16 pt-8 border-t border-[#e5e5e5] flex items-center justify-between">
            {prevEvent ? (
              <Link
                href={`/item/${prevEvent.id}`}
                className="group flex flex-col items-start max-w-[45%]"
              >
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-1">
                  Pr&eacute;c&eacute;dent
                </span>
                <span className="text-[14px] text-[#666] group-hover:text-[#1a1a1a] transition-colors leading-snug">
                  {prevEvent.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextEvent ? (
              <Link
                href={`/item/${nextEvent.id}`}
                className="group flex flex-col items-end max-w-[45%] text-right"
              >
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-1">
                  Suivant
                </span>
                <span className="text-[14px] text-[#666] group-hover:text-[#1a1a1a] transition-colors leading-snug">
                  {nextEvent.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
