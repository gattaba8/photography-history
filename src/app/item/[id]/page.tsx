import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { FadeIn, ShutterReveal } from '@/components/ItemPageClient'
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
      <ShutterReveal>
      <Navigation />

      <div className="pt-[60px]">
        <div className="max-w-[1200px] mx-auto px-6 py-10">
          <FadeIn delay={200}>
            <div className="flex items-center justify-between mb-10">
              <Link
                href="/timeline"
                className="text-[13px] text-[#999] hover:text-[#1a1a1a] transition-colors"
              >
                ← Retour à la chronologie
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="md:sticky md:top-[80px]">
              <div className="relative w-full aspect-square">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-start">
              <FadeIn delay={250}>
                <h1
                  className="text-[28px] md:text-[32px] text-[#1a1a1a] mb-8 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                >
                  {event.title}
                </h1>
              </FadeIn>

              <FadeIn delay={350}>
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-0.5">
                      Année
                    </p>
                    <p className="text-[15px] text-[#1a1a1a] tabular-nums">
                      {event.year}
                      {event.endYear ? `–${event.endYear}` : ''}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-0.5">
                      Catégorie
                    </p>
                    <p className="text-[15px] text-[#1a1a1a]">
                      {categoryLabels[event.category] || event.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-0.5">
                      Époque
                    </p>
                    <p className="text-[15px] text-[#1a1a1a]">
                      {era?.name ?? event.era}
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={450}>
                <p className="text-[15px] text-[#1a1a1a] leading-relaxed mb-6 font-medium">
                  {event.summary}
                </p>

                <hr className="border-[#e5e5e5] mb-6" />
              </FadeIn>

              <div className="space-y-5">
                {contentParagraphs.map((p, i) => (
                  <FadeIn key={i} delay={550 + i * 80}>
                    <p className="text-[14px] text-[#444] leading-[1.8]">{p}</p>
                    {illustrations[i] && (
                      <figure className="my-6">
                        <div className="relative w-full aspect-[16/10] bg-[#f5f5f5] overflow-hidden">
                          <Image
                            src={illustrations[i].url}
                            alt={illustrations[i].caption}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <figcaption className="text-[11px] text-[#999] mt-2 italic">
                          {illustrations[i].caption}
                        </figcaption>
                      </figure>
                    )}
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          <FadeIn delay={800}>
            <div className="mt-16 pt-8 border-t border-[#e5e5e5] flex items-center justify-between">
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
          </FadeIn>
        </div>
      </div>
      </ShutterReveal>
    </main>
  )
}
