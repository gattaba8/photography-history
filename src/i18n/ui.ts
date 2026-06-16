export const ui = {
  en: {
    'site.title': 'Museum of Photography',
    'nav.introduction': 'Introduction',
    'nav.timeline': 'Timeline',
    'nav.about': 'About',
    'home.enter': 'Enter',
    'item.back': '← Back to timeline',
    'item.year': 'Year',
    'item.category': 'Category',
    'item.era': 'Era',
    'item.prev': 'Previous',
    'item.next': 'Next',
    'category.invention': 'Invention',
    'category.technique': 'Technique',
    'category.camera': 'Camera',
    'category.movement': 'Movement',
    'category.digital': 'Digital',
    'category.milestone': 'Milestone',
  },
  fr: {
    'site.title': 'Musée de la Photographie',
    'nav.introduction': 'Introduction',
    'nav.timeline': 'Chronologie',
    'nav.about': 'À Propos',
    'home.enter': 'Entrer',
    'item.back': '← Retour à la chronologie',
    'item.year': 'Année',
    'item.category': 'Catégorie',
    'item.era': 'Époque',
    'item.prev': 'Précédent',
    'item.next': 'Suivant',
    'category.invention': 'Invention',
    'category.technique': 'Technique',
    'category.camera': 'Appareil photo',
    'category.movement': 'Mouvement',
    'category.digital': 'Numérique',
    'category.milestone': 'Événement majeur',
  },
} as const

export type UIKey = keyof (typeof ui)['en']

export function t(locale: 'en' | 'fr', key: UIKey): string {
  return ui[locale][key] || ui.en[key] || key
}
