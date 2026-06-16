'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="h-[60px] flex items-center justify-between px-6 border-b border-[#e5e5e5]">
        <Link
          href="/"
          className="text-[13px] font-medium tracking-[0.15em] uppercase text-[#1a1a1a]"
        >
          Musée de la Photographie
        </Link>

        <div className="flex items-center gap-0 text-[13px] text-[#666]">
          <Link href="/" className="hover:text-[#1a1a1a] transition-colors">
            Introduction
          </Link>
          <span className="mx-3 text-[#ccc] select-none">|</span>
          <Link
            href="/timeline"
            className="hover:text-[#1a1a1a] transition-colors"
          >
            Chronologie
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
    </header>
  );
}
