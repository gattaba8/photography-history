'use client';

import Link from 'next/link';

type ViewTab = 'collection' | 'index' | 'timeline';

interface NavigationProps {
  currentView?: ViewTab | null;
}

function TabIndicator({ active }: { active: boolean }) {
  if (active) {
    return (
      <span
        className="inline-block w-[10px] h-[10px] bg-[#ff6600] mr-1.5"
        aria-hidden="true"
      />
    );
  }
  return (
    <span
      className="inline-block w-[10px] h-[10px] border border-[#999] mr-1.5"
      aria-hidden="true"
    />
  );
}

export default function Navigation({ currentView = null }: NavigationProps) {
  const showTabs = currentView !== null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Primary nav bar */}
      <nav className="h-[60px] flex items-center justify-between px-6 border-b border-[#e5e5e5]">
        {/* Left: site name */}
        <Link
          href="/"
          className="text-[13px] font-medium tracking-[0.15em] uppercase text-[#1a1a1a]"
        >
          Musée de la Photographie
        </Link>

        {/* Right: text links separated by pipes */}
        <div className="flex items-center gap-0 text-[13px] text-[#666]">
          <Link
            href="/"
            className="hover:text-[#1a1a1a] transition-colors"
          >
            Introduction
          </Link>
          <span className="mx-3 text-[#ccc] select-none">|</span>
          <Link
            href="/collection"
            className="hover:text-[#1a1a1a] transition-colors"
          >
            Collection
          </Link>
          <span className="mx-3 text-[#ccc] select-none">|</span>
          <Link
            href="/about"
            className="hover:text-[#1a1a1a] transition-colors"
          >
            À Propos
          </Link>
        </div>
      </nav>

      {/* Secondary tab bar — only visible when currentView is set */}
      {showTabs && (
        <div className="h-[40px] flex items-center px-6 border-b border-[#e5e5e5] bg-white">
          <div className="flex items-center gap-6 text-[12px]">
            {/* Collection tab */}
            <Link
              href="/collection"
              className={`flex items-center transition-colors ${
                currentView === 'collection'
                  ? 'text-[#ff6600]'
                  : 'text-[#999] hover:text-[#666]'
              }`}
            >
              <TabIndicator active={currentView === 'collection'} />
              Collection
            </Link>

            {/* Index tab */}
            <Link
              href="/collection?view=index"
              className={`flex items-center transition-colors ${
                currentView === 'index'
                  ? 'text-[#ff6600]'
                  : 'text-[#999] hover:text-[#666]'
              }`}
            >
              <TabIndicator active={currentView === 'index'} />
              Index
            </Link>

            {/* Timeline / Chronologie tab */}
            <Link
              href="/timeline"
              className={`flex items-center transition-colors ${
                currentView === 'timeline'
                  ? 'text-[#ff6600]'
                  : 'text-[#999] hover:text-[#666]'
              }`}
            >
              <TabIndicator active={currentView === 'timeline'} />
              Chronologie
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
