import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { timelineEvents, eras } from '@/data/timeline'

export function generateStaticParams() {
  return timelineEvents.map((event) => ({ id: event.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const event = timelineEvents.find((e) => e.id === id)
  if (!event) return { title: 'Non trouvé' }
  return {
    title: `${event.title} — Musée de la Photographie`,
    description: event.summary,
  }
}

const categoryLabels: Record<string, string> = {
  invention: 'Invention',
  technique: 'Technique',
  camera: 'Appareil photo',
  movement: 'Mouvement',
  digital: 'Numérique',
  milestone: 'Événement majeur',
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const eventIndex = timelineEvents.findIndex((e) => e.id === id)
  if (eventIndex === -1) notFound()

  const event = timelineEvents[eventIndex]
  const era = eras.find((e) => e.id === event.era)
  const prevEvent = eventIndex > 0 ? timelineEvents[eventIndex - 1] : null
  const nextEvent =
    eventIndex < timelineEvents.length - 1
      ? timelineEvents[eventIndex + 1]
      : null

  const contentParagraphs = event.content.split('\n\n')
  const illustrations = event.illustrations || []

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-[60px]">
        {/* Hero image — full width banner */}
        <div className="relative w-full h-[40vh] min-h-[300px] max-h-[500px] bg-[#f5f5f5]">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </div>

        <div className="max-w-[720px] mx-auto px-6 py-10">
          {/* Back link */}
          <Link
            href="/timeline"
            className="text-[13px] text-[#999] hover:text-[#1a1a1a] transition-colors"
          >
            ← Retour à la chronologie
          </Link>

          {/* Title */}
          <h1
            className="text-[32px] md:text-[40px] text-[#1a1a1a] mt-8 mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
          >
            {event.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8 text-[13px]">
            <div>
              <span className="text-[#999] uppercase tracking-[0.1em]">Année </span>
              <span className="text-[#1a1a1a] tabular-nums">
                {event.year}{event.endYear ? `–${event.endYear}` : ''}
              </span>
            </div>
            <div>
              <span className="text-[#999] uppercase tracking-[0.1em]">Catégorie </span>
              <span className="text-[#1a1a1a]">{categoryLabels[event.category]}</span>
            </div>
            <div>
              <span className="text-[#999] uppercase tracking-[0.1em]">Époque </span>
              <span className="text-[#1a1a1a]">{era?.name ?? event.era}</span>
            </div>
          </div>

          {/* Summary */}
          <p className="text-[16px] text-[#1a1a1a] leading-relaxed mb-8 font-medium">
            {event.summary}
          </p>

          <hr className="border-[#e5e5e5] mb-8" />

          {/* Article content with inline illustrations */}
          <div className="space-y-6">
            {contentParagraphs.map((p, i) => (
              <div key={i}>
                <p className="text-[15px] text-[#444] leading-[1.85]">{p}</p>
                {illustrations[i] && (
                  <figure className="my-8">
                    <div className="relative w-full aspect-[16/10] bg-[#f5f5f5] overflow-hidden">
                      <Image
                        src={illustrations[i].url}
                        alt={illustrations[i].caption}
                        fill
                        className="object-contain"
                        sizes="720px"
                      />
                    </div>
                    <figcaption className="text-[11px] text-[#999] mt-2 italic">
                      {illustrations[i].caption}
                    </figcaption>
                  </figure>
                )}
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="mt-16 pt-8 border-t border-[#e5e5e5] flex items-start justify-between gap-6">
            {prevEvent ? (
              <Link
                href={`/item/${prevEvent.id}`}
                className="group flex flex-col items-start max-w-[45%]"
              >
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-1">
                  Précédent
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
