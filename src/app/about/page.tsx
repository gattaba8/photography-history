import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { eras } from '@/data/timeline'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation currentView={null} />

      <div className="pt-14">
        <div className="max-w-[700px] mx-auto px-6 py-16">
          <h1
            className="text-[32px] text-[#1a1a1a] mb-10"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            &Agrave; Propos
          </h1>

          <div className="space-y-6 text-[15px] text-[#444] leading-relaxed mb-14">
            <p>
              Le Mus&eacute;e de la Photographie est un espace virtuel
              d&eacute;di&eacute; &agrave; l&rsquo;histoire de l&rsquo;un des
              m&eacute;diums les plus transformateurs de l&rsquo;humanit&eacute;.
              De la premi&egrave;re h&eacute;liographie de Nic&eacute;phore
              Ni&eacute;pce en 1826 aux images g&eacute;n&eacute;r&eacute;es
              par intelligence artificielle, notre collection retrace deux
              si&egrave;cles d&rsquo;innovation, de cr&eacute;ation et de
              transformation du regard.
            </p>
            <p>
              Chaque &eacute;v&eacute;nement pr&eacute;sent&eacute; dans ce
              mus&eacute;e a &eacute;t&eacute; choisi pour son impact
              d&eacute;cisif sur l&rsquo;&eacute;volution du m&eacute;dium
              photographique. Des inventions techniques qui ont rendu la
              photographie possible, aux mouvements artistiques qui lui ont
              donn&eacute; ses lettres de noblesse, en passant par les
              appareils qui l&rsquo;ont d&eacute;mocratis&eacute;e &mdash;
              chaque pi&egrave;ce raconte un chapitre essentiel de cette
              histoire.
            </p>
            <p>
              Notre ambition est de rendre cette histoire accessible &agrave;
              tous, dans un cadre &eacute;pur&eacute; et contemplatif. Comme
              dans un v&eacute;ritable mus&eacute;e, nous privil&eacute;gions
              l&rsquo;espace, la lumi&egrave;re et le silence visuel pour
              laisser les images et les r&eacute;cits s&rsquo;exprimer
              pleinement.
            </p>
            <p>
              Ce projet est con&ccedil;u comme une exp&eacute;rience de
              d&eacute;couverte. Parcourez la chronologie pour suivre le fil du
              temps, explorez la collection pour naviguer librement entre les
              pi&egrave;ces, ou plongez dans un article pour approfondir un
              moment cl&eacute; de l&rsquo;histoire photographique.
            </p>
          </div>

          {/* Eras section */}
          <div>
            <h2
              className="text-[11px] uppercase tracking-[0.15em] text-[#999] mb-6"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
            >
              Les &eacute;poques
            </h2>
            <ul className="space-y-3">
              {eras.map((era) => (
                <li key={era.id}>
                  <Link
                    href={`/timeline#${era.id}`}
                    className="group flex items-baseline gap-3"
                  >
                    <span className="text-[13px] tabular-nums text-[#999]">
                      {era.startYear}&ndash;{era.endYear}
                    </span>
                    <span className="text-[15px] text-[#444] group-hover:text-[#1a1a1a] transition-colors">
                      {era.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Minimal footer */}
          <div className="mt-20 pt-8 border-t border-[#e5e5e5]">
            <p className="text-[12px] text-[#999]">
              Mus&eacute;e de la Photographie &mdash; 1826 &agrave;
              aujourd&rsquo;hui
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
