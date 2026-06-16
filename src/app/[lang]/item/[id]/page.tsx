import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navigation from '@/components/Navigation'
import { FadeIn, ShutterReveal } from '@/components/ItemPageClient'
import { getTimelineEvents, getEras } from '@/data/index'
import { t } from '@/i18n/ui'
import { isValidLocale, locales, type Locale } from '@/i18n/config'
import { timelineEvents as allEventsFr } from '@/data/timeline'

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    allEventsFr.map((event) => ({ lang, id: event.id }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>
}) {
  const { lang, id } = await params
  const locale = isValidLocale(lang) ? lang : 'en'
  const events = getTimelineEvents(locale)
  const event = events.find((e) => e.id === id)
  if (!event) return { title: 'Not found' }
  return {
    title: `${event.title} — ${t(locale, 'site.title')}`,
    description: event.summary,
  }
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>
}) {
  const { lang, id } = await params
  const locale: Locale = isValidLocale(lang) ? lang : 'en'
  const events = getTimelineEvents(locale)
  const eras = getEras(locale)

  const eventIndex = events.findIndex((e) => e.id === id)
  if (eventIndex === -1) notFound()

  const event = events[eventIndex]
  const era = eras.find((e) => e.id === event.era)
  const prevEvent = eventIndex > 0 ? events[eventIndex - 1] : null
  const nextEvent = eventIndex < events.length - 1 ? events[eventIndex + 1] : null

  const contentParagraphs = event.content.split('\n\n')
  const illustrations = event.illustrations || []

  function localePath(path: string) {
    return locale === 'fr' ? `/fr${path}` : path
  }

  return (
    <main className="min-h-screen bg-white">
      <ShutterReveal>
        <Navigation lang={locale} />

        <div className="pt-[60px]">
          <div className="max-w-[1200px] mx-auto px-6 py-10">
            <FadeIn delay={200}>
              <div className="flex items-center justify-between mb-10">
                <Link
                  href={localePath('/timeline')}
                  className="text-[13px] text-[#999] hover:text-[#1a1a1a] transition-colors"
                >
                  {t(locale, 'item.back')}
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
                        {t(locale, 'item.year')}
                      </p>
                      <p className="text-[15px] text-[#1a1a1a] tabular-nums">
                        {event.year}
                        {event.endYear ? `–${event.endYear}` : ''}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-0.5">
                        {t(locale, 'item.category')}
                      </p>
                      <p className="text-[15px] text-[#1a1a1a]">
                        {t(locale, `category.${event.category}` as any)}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-0.5">
                        {t(locale, 'item.era')}
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
                    href={localePath(`/item/${prevEvent.id}`)}
                    className="group flex flex-col items-start max-w-[45%]"
                  >
                    <span className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-1">
                      {t(locale, 'item.prev')}
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
                    href={localePath(`/item/${nextEvent.id}`)}
                    className="group flex flex-col items-end max-w-[45%] text-right"
                  >
                    <span className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-1">
                      {t(locale, 'item.next')}
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
