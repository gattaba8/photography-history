import type { Locale } from '@/i18n/config'
import type { Era, TimelineEvent } from './timeline'
import { eras as erasFr, timelineEvents as eventsFr } from './timeline'

let erasEn: Era[] | null = null
let eventsEn: TimelineEvent[] | null = null

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const en = require('./timeline.en')
  erasEn = en.eras
  eventsEn = en.timelineEvents
} catch {
  // English file not yet available — fallback to French
}

export function getEras(locale: Locale): Era[] {
  if (locale === 'fr') return erasFr
  return erasEn || erasFr
}

export function getTimelineEvents(locale: Locale): TimelineEvent[] {
  if (locale === 'fr') return eventsFr
  return eventsEn || eventsFr
}
