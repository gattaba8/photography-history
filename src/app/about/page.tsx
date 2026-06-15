import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-14">
        <div className="max-w-[700px] mx-auto px-6 py-20">
          <h1 className="text-[32px] md:text-[42px] font-[family-name:var(--font-heading)] font-normal tracking-tight mb-10">
            À Propos
          </h1>

          <div className="space-y-6 text-[14px] text-[#555] leading-[1.8]">
            <p>
              Ce musée virtuel est dédié à l&apos;exploration de l&apos;histoire
              de la photographie, l&apos;une des inventions les plus
              transformatrices de l&apos;histoire humaine.
            </p>

            <p>
              Depuis les premières expériences de Nicéphore Niépce en 1826
              jusqu&apos;aux algorithmes de photographie computationnelle de nos
              smartphones, chaque avancée a redéfini notre façon de voir et de
              comprendre le monde. La photographie est bien plus qu&apos;une
              technique de capture d&apos;images — elle est le témoin silencieux
              de notre histoire collective.
            </p>

            <p>
              À travers une chronologie interactive et des articles détaillés,
              nous invitons le visiteur à découvrir les inventeurs, les artistes
              et les innovateurs qui ont fait de la photographie ce qu&apos;elle
              est aujourd&apos;hui.
            </p>

            <p>
              Des daguerréotypes précieux aux fichiers numériques partagés
              instantanément sur les réseaux sociaux, la photographie a parcouru
              un chemin extraordinaire. Chaque époque a apporté ses
              révolutions : le collodion humide a démocratisé le portrait, le
              film souple a libéré le photographe, le numérique a aboli les
              frontières entre amateur et professionnel, et le smartphone a fait
              de chaque être humain un photographe en puissance.
            </p>
          </div>

          <div className="mt-16 pt-10 border-t border-[#e5e5e5]">
            <h2 className="text-[18px] font-medium mb-6">Les époques</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: 'Les Pionniers', years: '1826–1860', id: 'pionniers' },
                {
                  name: "L'Âge du Collodion",
                  years: '1851–1880',
                  id: 'collodion',
                },
                {
                  name: 'La Démocratisation',
                  years: '1880–1920',
                  id: 'democratisation',
                },
                { name: "L'Âge d'Or", years: '1920–1960', id: 'age-dor' },
                {
                  name: 'La Révolution SLR',
                  years: '1960–1990',
                  id: 'revolution-slr',
                },
                {
                  name: "L'Ère Numérique",
                  years: '1990–2010',
                  id: 'numerique',
                },
                {
                  name: "L'Ère du Smartphone",
                  years: '2010–2026',
                  id: 'smartphone',
                },
              ].map((era) => (
                <Link
                  key={era.id}
                  href={`/timeline#${era.id}`}
                  className="flex justify-between items-center py-3 border-b border-[#f0f0f0] group"
                >
                  <span className="text-[14px] text-[#1a1a1a] group-hover:text-[#666] transition-colors">
                    {era.name}
                  </span>
                  <span className="text-[12px] text-[#bbb]">{era.years}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <footer className="border-t border-[#e5e5e5] py-8">
          <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-[#999]">
              Musée de la Photographie — 1826 à aujourd&apos;hui
            </p>
            <div className="flex gap-6">
              <Link
                href="/"
                className="text-[12px] text-[#999] hover:text-[#1a1a1a]"
              >
                Introduction
              </Link>
              <Link
                href="/timeline"
                className="text-[12px] text-[#999] hover:text-[#1a1a1a]"
              >
                Chronologie
              </Link>
              <Link
                href="/articles"
                className="text-[12px] text-[#999] hover:text-[#1a1a1a]"
              >
                Collection
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
