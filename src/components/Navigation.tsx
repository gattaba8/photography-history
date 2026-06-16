'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { t, type UIKey } from '@/i18n/ui';
import type { Locale } from '@/i18n/config';

export default function Navigation({ lang }: { lang: Locale }) {
  const pathname = usePathname();

  function localePath(path: string) {
    return lang === 'fr' ? `/fr${path}` : path;
  }

  // Build the same page path in the other language
  const otherLang = lang === 'fr' ? 'en' : 'fr';
  let switchPath = pathname;
  if (lang === 'fr') {
    // Remove /fr prefix
    switchPath = pathname.replace(/^\/fr/, '') || '/';
  } else {
    // Add /fr prefix
    switchPath = `/fr${pathname}`;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="h-[60px] flex items-center justify-between px-6 border-b border-[#e5e5e5]">
        <Link
          href={localePath('/')}
          className="text-[13px] font-medium tracking-[0.15em] uppercase text-[#1a1a1a]"
        >
          {t(lang, 'site.title')}
        </Link>

        <div className="flex items-center gap-0 text-[13px] text-[#666]">
          <Link href={localePath('/')} className="hover:text-[#1a1a1a] transition-colors">
            {t(lang, 'nav.introduction')}
          </Link>
          <span className="mx-3 text-[#ccc] select-none">|</span>
          <Link href={localePath('/timeline')} className="hover:text-[#1a1a1a] transition-colors">
            {t(lang, 'nav.timeline')}
          </Link>
          <span className="mx-3 text-[#ccc] select-none">|</span>
          <Link href={localePath('/about')} className="hover:text-[#1a1a1a] transition-colors">
            {t(lang, 'nav.about')}
          </Link>
          <span className="mx-3 text-[#ccc] select-none">|</span>
          <Link
            href={switchPath}
            className="hover:text-[#1a1a1a] transition-colors uppercase font-medium"
          >
            {otherLang.toUpperCase()}
          </Link>
        </div>
      </nav>
    </header>
  );
}
