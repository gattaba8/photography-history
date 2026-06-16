import type { Era, TimelineEvent } from './timeline'

export const eras: Era[] = [
  {
    id: 'pionniers',
    name: 'The Pioneers',
    startYear: 1826,
    endYear: 1860,
    description:
      "The pioneer era marks the birth of photography, from Niépce's first experiments to the daguerreotype studios of the 1850s. It is a period of intense experimentation in which chemists, physicists, and artists joined forces in pursuit of a single ambition: to fix light permanently on a surface.",
    color: 'amber',
  },
  {
    id: 'collodion',
    name: 'The Collodion Era',
    startYear: 1851,
    endYear: 1880,
    description:
      "The wet collodion process revolutionized photography by producing images of remarkable sharpness at greatly reduced cost. This period witnessed the rise of studio portraiture, the emergence of documentary photography, and the first tentative steps toward the reproduction of color.",
    color: 'rose',
  },
  {
    id: 'democratisation',
    name: 'The Democratization',
    startYear: 1880,
    endYear: 1920,
    description:
      'Through George Eastman\'s innovations and the advent of flexible roll film, photography ceased to be the exclusive preserve of professionals. The slogan "You press the button, we do the rest" embodied a revolution that placed the camera firmly in the hands of the general public.',
    color: 'emerald',
  },
  {
    id: 'age-or',
    name: 'The Golden Age',
    startYear: 1920,
    endYear: 1960,
    description:
      "The interwar years and the postwar decades constitute the golden age of film photography. The Leica ushered in the 35mm era, photojournalism established itself as a major art form, and color became accessible through negative films and instant processes.",
    color: 'sky',
  },
  {
    id: 'revolution-slr',
    name: 'The SLR Revolution',
    startYear: 1960,
    endYear: 1990,
    description:
      "The single-lens reflex (SLR) became the reference camera, offering precise through-the-lens viewing and a vast range of interchangeable lenses. Autofocus, automatic exposure, and the first digital sensors foreshadowed a radical transformation of the medium.",
    color: 'violet',
  },
  {
    id: 'numerique',
    name: 'The Digital Era',
    startYear: 1990,
    endYear: 2010,
    description:
      "The shift to digital upended the entire photographic chain, from capture to print. Editing software, high-resolution sensors, and online sharing redefined the practices of amateurs and professionals alike.",
    color: 'cyan',
  },
  {
    id: 'smartphone',
    name: 'The Smartphone Era',
    startYear: 2010,
    endYear: 2026,
    description:
      "The smartphone has turned every individual into a potential photographer, while artificial intelligence and computational photography continue to push the boundaries of the possible. Social networks have become the world's largest exhibition space.",
    color: 'fuchsia',
  },
]

export const timelineEvents: TimelineEvent[] = [
  // ─── The Pioneers (1826–1860) ────────────────────────────────────────
  {
    id: 'niepce-premiere-photo',
    year: 1826,
    title: "Niépce's First Photograph",
    summary:
      'Joseph Nicéphore Niépce creates the "View from the Window at Le Gras," considered the oldest known permanent photograph. This heliograph on a tin plate coated in bitumen of Judea required an exposure of several days.',
    content:
      'In 1826, at his estate in Saint-Loup-de-Varennes in Burgundy, Joseph Nicéphore Niépce succeeded in permanently fixing the image formed by light inside a camera obscura. The "View from the Window at Le Gras" shows the scene outside his workshop: the rooftops of neighboring buildings, a tree, and a stretch of sky. Modest in appearance, this image is the founding act of photography.\n\nThe process Niépce devised — which he called "heliography" (writing by the sun) — relies on the light-sensitivity of bitumen of Judea. This substance, spread over a polished tin plate, hardens where exposed to light and remains soluble in lavender oil wherever it has stayed in shadow. After an exposure estimated at between eight hours and several days, the plate is washed to reveal the image.\n\nNiépce had been working on this problem since the early 1810s, initially motivated by a desire to reproduce engravings without the intervention of a draftsman. His early attempts used silver chloride, but the images darkened rapidly when brought back into light. It was only when he turned to bitumen of Judea that he at last obtained permanent results.\n\nThe original plate of the "View from the Window at Le Gras" is today preserved at the University of Texas at Austin. Long forgotten, it was rediscovered in 1952 by the historian Helmut Gernsheim. Blurred and rudimentary by our current standards, this founding image nonetheless represents the culmination of centuries of inquiry into the fixing of optical images, and it opened the way to the invention of modern photography.',
    image: '/images/view_from_window_niepce.jpg',
    illustrations: [
      { url: '/images/niepce_portrait.jpg', caption: "Portrait of Nicéphore Niépce, inventor of heliography" },
    ],
    category: 'invention',
    era: 'pionniers',
  },
  {
    id: 'calotype-talbot',
    year: 1835,
    title: "William Henry Fox Talbot's Calotype",
    summary:
      "William Henry Fox Talbot develops the calotype, the first negative-positive photographic process. This pivotal invention made it possible for the first time to reproduce a single image an unlimited number of times from one negative.",
    content:
      'In 1835, at his manor of Lacock Abbey in England, William Henry Fox Talbot made his first "photogenic drawings" by laying objects — leaves, lace, feathers — on paper sensitized with silver chloride. Rudimentary as they were, these experiments laid the groundwork for a revolutionary process that he would refine under the name calotype (from the Greek kalos, "beautiful").\n\nThe calotype, patented in 1841, represented a major conceptual advance over the daguerreotype: it produced a paper negative from which an unlimited number of positive prints could be made. The paper was first coated with silver iodide, then, just before exposure, sensitized with silver gallonitrate. After an exposure of only a few minutes, a latent image appeared and was subsequently developed with gallic acid.\n\nWhile the daguerreotype offered incomparable sharpness of detail, the calotype possessed a distinctive aesthetic charm: the texture of the paper lent the images a softness reminiscent of charcoal drawing or watercolor. This quality appealed to many artist-photographers, notably David Octavius Hill and Robert Adamson in Scotland, who produced portraits of remarkable sensitivity.\n\nThe historical importance of the calotype lies in its introduction of the negative-positive principle, which would remain the foundation of film photography for more than 150 years, until the advent of the digital age. In inventing this process, Talbot not only created a photographic technique but also established the conceptual framework for the mechanical reproduction of images that would define the modern era of visual communication.',
    image: '/images/talbot_lacock.jpg',
    illustrations: [
      { url: '/images/talbot_lacock.jpg', caption: 'The courtyard of Lacock Abbey, calotype by William Henry Fox Talbot' },
    ],
    category: 'invention',
    era: 'pionniers',
  },
  {
    id: 'daguerreotype-1839',
    year: 1839,
    title: 'The Daguerreotype — Official Announcement',
    summary:
      "On 19 August 1839, the Paris Académie des sciences unveils the daguerreotype to the world. This process, invented by Louis Daguerre and offered to humanity by the French government, marks the official birth of photography.",
    content:
      'The 19th of August 1839 is engraved in history as the official birthday of photography. Before a joint assembly of the Académie des sciences and the Académie des beaux-arts in Paris, the deputy and physicist François Arago presented the full details of the daguerreotype, a process developed by Louis-Jacques-Mandé Daguerre. The French government, recognizing the universal importance of the invention, had acquired the patent in order to offer it "free to the entire world" — a decision of remarkable generosity.\n\nThe daguerreotype produced a unique image of breathtaking sharpness on a mirror-polished silver-coated copper plate. The process involved exposing the plate to iodine vapor to make it light-sensitive, then placing it inside a camera obscura. After an exposure lasting several minutes, the latent image was developed over mercury vapor and fixed with sodium thiosulfate (discovered by John Herschel).\n\nThe announcement triggered a full-blown "daguerreotypomania" across the globe. Within months, daguerreotype studios opened in every major capital. The process captivated the public with the extraordinary fineness of its detail: under a magnifying glass, one could make out the bricks of a building, the leaves of a tree, the letters on a shop sign. The bourgeoisie rushed to have their portraits made — a luxury previously confined to those who could afford a painter.\n\nDaguerre himself had begun his career as a decorative painter and inventor of the diorama, a spectacle of optical illusions hugely popular in Paris. His partnership with Niépce from 1829 onward, and the continuation of their joint research after the latter\'s death in 1833, led to a process that would transform forever our relationship with image and memory.',
    image: '/images/boulevard_du_temple.jpg',
    illustrations: [
      { url: '/images/boulevard_du_temple.jpg', caption: "Boulevard du Temple, Paris — daguerreotype by Daguerre, one of the earliest images to show a human being" },
      { url: '/images/louis_daguerre.jpg', caption: 'Louis Jacques Mandé Daguerre, inventor of the daguerreotype' },
    ],
    category: 'milestone',
    era: 'pionniers',
  },
  {
    id: 'premier-portrait',
    year: 1840,
    title: 'The First Photographic Portrait',
    summary:
      "Advances in optics and chemistry at last reduced exposure times enough to make portraiture possible. Robert Cornelius in Philadelphia and the studios of Paris opened the era of the photographic portrait.",
    content:
      "From the moment the daguerreotype was presented in 1839, the dream of fixing the human face by photography fired imaginations everywhere. But initial exposure times — on the order of fifteen to thirty minutes in full sunlight — made portraiture practically impossible: no one could remain perfectly still for so long. It was Robert Cornelius, an amateur silversmith and chemist in Philadelphia, who produced one of the very first photographic self-portraits in late 1839, taking advantage of an improved lens.\n\nBy 1840, refinements introduced simultaneously by several inventors made commercial portraiture viable. The use of silver bromide alongside silver iodide greatly increased the sensitivity of the plates. The Viennese optician Josef Petzval designed an f/3.6 lens that admitted sixteen times more light than Daguerre's original. Exposure times fell to one or two minutes, then to a matter of seconds.\n\nPortrait studios multiplied at astonishing speed. In Paris, ateliers installed atop buildings — their glass roofs flooding the interiors with natural light — became spaces of bourgeois sociability. The portraitist had to master both chemical technique and the art of staging: choice of backdrop, arrangement of props, positioning of the sitter. Hidden braces secured behind the subject kept the head perfectly still.\n\nThe photographic portrait profoundly transformed social relationships. For the first time in history, the middle classes could preserve a faithful likeness of their loved ones — a privilege previously reserved for the aristocracy. Family daguerreotypes became precious objects, encased in velvet and leather boxes, carried on one's person or displayed in the parlor.",
    image: '/images/robert_cornelius.jpg',
    illustrations: [
      { url: '/images/robert_cornelius.jpg', caption: "Self-portrait of Robert Cornelius (1839) — considered the first portrait photograph and the first selfie in history" },
    ],
    category: 'milestone',
    era: 'pionniers',
  },
  {
    id: 'premiere-photo-reportage',
    year: 1842,
    title: 'The First Photographic News Report',
    summary:
      "The great Hamburg fire of May 1842 is documented by daguerreotypes, constituting one of the earliest examples of photographic reportage. These images reveal the documentary potential of the new medium.",
    content:
      "In May 1842, a devastating fire swept through the center of Hamburg for four days, destroying more than 1,700 buildings and leaving thousands homeless. Among those who witnessed the catastrophe, daguerreotypists Carl Ferdinand Stelzner and Hermann Biow had the idea of documenting the still-smoldering ruins. Their images constitute one of the earliest known examples of photographic reportage — the use of the medium to bear witness to a current event.\n\nThe daguerreotypes made in the aftermath of the fire show gutted facades, the rubble of churches and public buildings, devastated streets. Unlike press engravings, which invariably interpreted and embellished reality, these images offered a raw, irrefutable testimony. The power of documentary photography revealed itself for the first time: confronted with a photographic image, the viewer could no longer doubt what lay before his eyes.\n\nThis documentary use of the daguerreotype opened a path that would be widely followed in the decades to come. As early as the Mexican-American War (1846–1848), daguerreotypists accompanied the troops. But it was above all the Crimean War (1854–1855), covered by Roger Fenton, and the American Civil War (1861–1865), documented by Mathew Brady and his assistants, that would consecrate photography as a major instrument of historical record.\n\nThe Hamburg fire daguerreotypes, few in number and modest in execution, nonetheless laid the first stone of a tradition that would give birth to modern photojournalism. They illustrate a fundamental truth: photography is not only an art of portraiture and landscape, but above all an art of witness.",
    image: '/images/hamburg_1842.jpg',
    illustrations: [
      { url: '/images/hamburg_1842.jpg', caption: 'Daguerreotype of the ruins of Hamburg after the great fire of 1842' },
    ],
    category: 'milestone',
    era: 'pionniers',
  },
  {
    id: 'mission-heliographique',
    year: 1851,
    title: 'The Missions Héliographiques in France',
    summary:
      "The French government commissions five photographers to carry out a systematic inventory of threatened historical monuments. This pioneering mission established photography as a tool for the documentation of cultural heritage.",
    content:
      "In 1851, the Commission des Monuments historiques, directed by Prosper Mérimée, entrusted five photographers with the mission of documenting the medieval and Renaissance buildings of France threatened with deterioration or destruction. Édouard Baldus, Hippolyte Bayard, Gustave Le Gray, Henri Le Secq, and Auguste Mestral traversed the country with their cumbersome equipment to produce hundreds of photographs of cathedrals, abbeys, châteaux, and ancient bridges.\n\nThis Missions Héliographiques represented the first official photographic commission by a state. It was born of a visionary conviction: photography could preserve the memory of an imperiled architectural heritage with a fidelity and comprehensiveness that drawing could never equal. Each photographer was assigned an itinerary covering a specific region of France.\n\nThe results were remarkable both as documents and as works of art. Gustave Le Gray in particular produced images of arresting beauty, playing masterfully with raking light on the carved stones of cathedral facades. Henri Le Secq minutely documented the portals and stained glass of Strasbourg Cathedral. Édouard Baldus produced panoramic views of breathtaking architectural precision.\n\nParadoxically, the calotypes of the Missions Héliographiques were never published during the photographers' lifetimes — the Commission archived them without disseminating them. It was not until the twentieth century that their artistic and historical value was fully recognized. Today preserved at the Médiathèque de l'Architecture et du Patrimoine, these images constitute an inestimable treasure and the model for all subsequent heritage photographic campaigns.",
    image: '/images/le_gray_moissac.jpg',
    illustrations: [
      { url: '/images/le_gray_moissac.jpg', caption: "Moissac Abbey photographed by Gustave Le Gray and Auguste Mestral during the Missions Héliographiques (1851)" },
    ],
    category: 'movement',
    era: 'pionniers',
  },

  // ─── The Collodion Era (1851–1880) ───────────────────────────────────
  {
    id: 'collodion-humide',
    year: 1851,
    title: 'Frederick Scott Archer Invents the Wet Collodion Process',
    summary:
      "The wet collodion process on glass plates combined the sharpness of the daguerreotype with the reproducibility of the calotype. Unpatented, it spread with astonishing speed and dominated photography for three decades.",
    content:
      "In March 1851, the English sculptor and photographer Frederick Scott Archer published in the journal The Chemist the details of a new photographic process: wet collodion. The principle consisted of dissolving guncotton (nitrocellulose) in a mixture of ether and alcohol, then pouring the viscous solution over a glass plate. The plate was subsequently sensitized in a bath of silver nitrate and exposed while still wet — hence the process's name.\n\nThe advantages of wet collodion were considerable. Like the daguerreotype, it offered exceptional sharpness and richness of detail thanks to the perfectly smooth glass support. Like the calotype, it produced a negative from which an unlimited number of positive prints could be made on albumen paper. Moreover, its sensitivity was far superior to that of either of the two preceding processes, reducing exposure times to a matter of seconds.\n\nArcher, with a generosity that would cost him dearly, declined to patent his invention. The process therefore spread freely throughout the world, rapidly superseding both the daguerreotype and the calotype. Within a few years, wet collodion became the universal standard of photography. Its principal constraint — the plate had to be prepared, exposed, and developed within a window of ten to fifteen minutes before the collodion dried — obliged photographers working outdoors to transport an entire traveling darkroom.\n\nDespite this logistical burden, wet collodion gave rise to a golden age of photography. Intrepid pioneers carried their heavy equipment onto the battlefields of the Crimea, to the summits of the Alps, among the ruins of ancient Egypt, and into the wild American West. Frederick Scott Archer, for his part, died in poverty in 1857, having earned not a penny from his revolutionary invention.",
    image: '/images/collodion_humide.jpg',
    illustrations: [
      { url: '/images/collodion_humide.jpg', caption: "Demonstration of the wet collodion process — collodion being poured onto a glass plate" },
    ],
    category: 'invention',
    era: 'collodion',
  },
  {
    id: 'carte-de-visite-disderi',
    year: 1854,
    title: "Disdéri and the Photographic Carte de Visite",
    summary:
      "André-Adolphe-Eugène Disdéri patents a multi-lens camera that produces eight portraits on a single plate. The photographic carte de visite becomes a social phenomenon that democratizes portraiture.",
    content:
      "In 1854, the Parisian photographer André-Adolphe-Eugène Disdéri registered a patent for a camera equipped with four — and later eight — lenses, capable of producing as many small portraits on a single collodion plate. Each print, measuring approximately 6 × 9 cm, was mounted on a card the size of a calling card. The cost of a portrait fell dramatically: where a daguerreotype had cost fifty to a hundred francs, Disdéri offered his cartes at twenty francs the dozen.\n\nThe \"cartomania\" truly erupted in 1859, when Napoleon III, en route to Italy at the head of his troops, ordered his column to halt outside Disdéri's studio so that he could be photographed. The episode swept through Paris, and the carte de visite became an indispensable social accessory. People exchanged portraits much as one might share contacts on a social network today. Special albums were produced for collecting the cartes of friends and family, but also those of celebrities — sovereigns, actors, writers — sold by the thousands.\n\nDisdéri did not confine himself to technical innovation: he also transformed the staging of the portrait. Where the daguerreotype had imposed rigidity, he introduced relaxed poses, elaborate sets complete with columns, drapes, and furniture, and above all the full-length portrait, which allowed the subject's attire to be shown — a crucial marker of social distinction in the era.\n\nThe carte de visite represented the first true democratization of the photographic portrait. Between 1860 and 1870, it is estimated that hundreds of millions of cartes were produced throughout the world. Paradoxically, Disdéri — like Archer before him — ended his days in ruin: the victim of the fierce competition he had himself unleashed, he died in the Hôpital de la Charité in 1889.",
    image: '/images/disderi_carte_visite.jpg',
    illustrations: [
      { url: '/images/disderi_carte_visite.jpg', caption: 'Photographic carte de visite produced by the Disdéri studio' },
    ],
    category: 'technique',
    era: 'collodion',
  },
  {
    id: 'premiere-photo-couleur',
    year: 1861,
    title: 'The First Color Photograph',
    summary:
      "The physicist James Clerk Maxwell demonstrates the principle of additive color synthesis by projecting three images filtered in red, green, and blue. This pioneering experiment opened the way to all future color photography.",
    content:
      "On 17 May 1861, during a lecture at the Royal Institution in London, the Scottish physicist James Clerk Maxwell presented the first color photograph in history. The subject was a modest length of tartan ribbon, but the method employed was of a theoretical elegance that would underpin all subsequent color photography.\n\nMaxwell applied his own theory of trichromatic vision: any color can be reproduced by a mixture of three primary lights — red, green, and blue. He asked the photographer Thomas Sutton to make three exposures of the same ribbon through three different color filters. The three negatives were then printed as positive transparencies on glass, and each was projected onto a screen through its corresponding filter. The superimposition of the three projections reconstituted the original colors.\n\nFrom a strictly photochemical standpoint, the experiment should not have worked as well as it did: the emulsions of the day, sensitive primarily to blue and ultraviolet light, could not accurately record red and green. Later research revealed that certain dyes in the tartan reflected ultraviolet light, producing by happy chance an acceptable color separation.\n\nMaxwell's experiment remains nonetheless fundamental, for it established the very principle of color reproduction by additive synthesis. This principle would be exploited half a century later by the Lumière brothers in their Autochrome process, and it remains the basis of every modern screen and digital sensor. Each pixel in your smartphone decomposes and recomposes light according precisely to the principle Maxwell demonstrated in 1861.",
    image: '/images/tartan_ribbon.jpg',
    illustrations: [
      { url: '/images/tartan_ribbon.jpg', caption: 'The tartan ribbon — the first color photograph, made by James Clerk Maxwell in 1861' },
    ],
    category: 'invention',
    era: 'collodion',
  },
  {
    id: 'gelatino-bromure',
    year: 1871,
    title: 'Invention of the Gelatin Silver Bromide Plate',
    summary:
      "Richard Leach Maddox proposes replacing collodion with gelatin as the binder for silver salts. This pivotal innovation allowed plates to be prepared in advance and opened the way to instantaneous photography.",
    content:
      "In 1871, the English physician and amateur photographer Richard Leach Maddox published an article in the British Journal of Photography describing a new process: the suspension of silver bromide in a gelatin emulsion, spread over a glass plate. This innovation, apparently modest, would radically transform photographic practice by resolving the principal drawback of wet collodion — the obligation to prepare, expose, and develop a plate within a very narrow window of time.\n\nGelatin dry plates could be prepared well in advance, stored dry, and developed at the photographer's convenience. No more portable darkrooms. Moreover, gelatin, unlike collodion, could be heated (\"ripened\"), which greatly increased the sensitivity of the emulsion. Exposure times fell from several seconds to fractions of a second.\n\nThese characteristics opened the door to the industrialization of photography. By the late 1870s, manufacturers such as the Britannia Works Company had begun producing ready-to-use dry plates in series. The photographer no longer needed to master chemistry: he bought his plates, exposed them, and had them developed. The separation between the manufacture of the light-sensitive support and the act of taking a picture was complete.\n\nThe gelatin dry plate also made action photography possible. Ultra-short exposure times allowed movement to be \"frozen\" — a possibility that fascinated pioneers such as Eadweard Muybridge and Étienne-Jules Marey. It was also this technology that made flexible celluloid roll film conceivable, since gelatin could be coated onto any support, including a flexible strip. Richard Leach Maddox had thus laid, without knowing it, the foundations of all modern photography.",
    image: '/images/gelatino_plaque.jpg',
    illustrations: [
      { url: '/images/gelatino_plaque.jpg', caption: "Gelatin silver bromide dry plate" },
    ],
    category: 'invention',
    era: 'collodion',
  },
  {
    id: 'muybridge-mouvement',
    year: 1878,
    title: 'Muybridge and the Decomposition of Motion',
    summary:
      "Eadweard Muybridge uses a battery of twelve cameras to decompose the gallop of a horse, proving that all four hooves leave the ground simultaneously. His work prefigured the invention of cinema.",
    content:
      "In June 1878, on the training track of Leland Stanford's stud farm at Palo Alto, California, the British photographer Eadweard Muybridge achieved a technical feat that would transform our understanding of movement. Commissioned by the millionaire Leland Stanford to settle a debate in equestrian circles — does a galloping horse have all four hooves off the ground at the same moment? — Muybridge arranged twelve cameras along the track, each triggered by a thread stretched across the horse's path.\n\nThe results were stunning. The photographs proved irrefutably that yes, a galloping horse does experience a moment of total suspension — but not at all in the \"splayed-leg\" posture that painters had depicted for centuries. The animal gathered all four limbs beneath its belly, in a position the human eye was incapable of perceiving. Photography thus revealed a truth invisible to direct observation.\n\nEncouraged by this success, Muybridge embarked on a colossal project: the systematic decomposition of human and animal motion. Between 1884 and 1886, at the University of Pennsylvania, he produced more than 100,000 sequential photographs of men, women, and animals walking, running, jumping, dancing, throwing, and lifting. The entire body of work was published in 1887 in the monumental Animal Locomotion, comprising 781 plates.\n\nTo animate his sequences, Muybridge invented the zoopraxiscope, a projection device that displayed images in rapid succession, creating the illusion of movement. First presented in 1879, this apparatus is considered one of the direct ancestors of the cinematograph. Muybridge's work profoundly influenced artists — among them Marcel Duchamp and Francis Bacon — and directly inspired Étienne-Jules Marey and Thomas Edison in their research into moving images.",
    image: '/images/horse_in_motion_anim.gif',
    illustrations: [
      { url: '/images/horse_in_motion.jpg', caption: "The Horse in Motion (1878) — Eadweard Muybridge proves that all four hooves leave the ground simultaneously" },
    ],
    category: 'technique',
    era: 'collodion',
  },

  // ─── The Democratization (1880–1920) ─────────────────────────────────
  {
    id: 'kodak-n1-eastman',
    year: 1888,
    title: 'George Eastman Launches the Kodak No. 1',
    summary:
      'George Eastman markets the Kodak No. 1, a simple box camera pre-loaded with film for 100 exposures. With the slogan "You press the button, we do the rest," he opened photography to the general public.',
    content:
      'In 1888, the American industrialist George Eastman launched a product that would transform photography from a specialist\'s art into a popular pastime: the Kodak No. 1. This box-shaped camera, sold for twenty-five dollars — a significant but accessible sum for the middle class — came pre-loaded with a roll of film sufficient for one hundred circular photographs, each measuring 6.5 cm in diameter.\n\nEastman\'s commercial genius lay in an entirely new concept: the complete separation of picture-taking from processing. Once the hundred exposures had been made, the customer mailed the entire camera to the Kodak factory in Rochester, New York. The factory developed the film, printed the pictures, reloaded the camera with a fresh roll, and returned the whole package for ten dollars. The slogan was unambiguous: "You press the button, we do the rest."\n\nThis business model — an ancestor of the "razor and blades" strategy practiced by countless companies today — revolutionized the photographic industry. It was no longer necessary to understand chemistry, to master exposure settings, or to own a darkroom. Anyone could now photograph their family, their travels, the moments of daily life. Amateur photography was born.\n\nThe word "Kodak" itself was Eastman\'s invention: he wanted a name that was short, distinctive, impossible to mispronounce in any language, and resembling no existing word. That name would become one of the most famous in the world, synonymous with photography itself for more than a century. Eastman\'s vision — placing photography within everyone\'s reach — anticipated by a hundred years the revolution of the smartphone: making the act of taking a picture as simple and natural as possible.',
    image: '/images/kodak_no1.jpg',
    illustrations: [
      { url: '/images/kodak_no1.jpg', caption: 'The Kodak No. 1, launched by George Eastman in 1888' },
    ],
    category: 'camera',
    era: 'democratisation',
  },
  {
    id: 'film-souple-celluloid',
    year: 1889,
    title: 'Flexible Celluloid Roll Film',
    summary:
      "George Eastman develops the first flexible photographic film on a celluloid base, replacing heavy and fragile glass plates. This innovation made portable photography possible — and made cinema possible as well.",
    content:
      "In 1889, the Eastman Kodak company introduced the first truly flexible photographic film: a gelatin silver bromide emulsion coated onto a transparent, flexible support of celluloid (cellulose nitrate). This innovation, which seems obvious today, represented a considerable technological leap: it liberated photography from glass.\n\nUntil then, glass plates were the only support offering the transparency and flatness required for a quality negative. But they were heavy, fragile, and cumbersome. A traveling photographer had to carry dozens of plates, each protected in its own individual holder. Roll film, by contrast, wound onto a spool: a hundred exposures weighed only a few grams and fit in a pocket.\n\nRoll film also transformed the design of cameras. Bodies could now be made far smaller and lighter, freed from the need to accommodate a rigid plate holder for each exposure. The film-advance mechanism, operated by a simple knob, allowed pictures to be taken in quick succession. This was the indispensable technical condition that would lead to the miniature cameras of the 1920s and 1930s.\n\nBut perhaps the most resonant impact of roll film lay outside still photography. Thomas Edison and his assistant William Kennedy Dickson immediately seized on the innovation to create the kinetoscope (1891), and then the kinetograph — the first motion picture capture and projection devices. Without Eastman's roll film, cinema as we know it simply could not have existed. Photography and cinema are, in this sense, two branches of the same technological tree.",
    image: '/images/film_35mm.jpg',
    illustrations: [
      { url: '/images/film_35mm.jpg', caption: 'Roll film — the support that revolutionized photography and made cinema possible' },
    ],
    category: 'invention',
    era: 'democratisation',
  },
  {
    id: 'brownie-kodak',
    year: 1900,
    title: 'The Kodak Brownie',
    summary:
      "Kodak launches the Brownie, a camera sold for one dollar and within reach of every budget. This small cardboard box triggered a genuine cultural revolution by placing photography in the hands of children and working-class families.",
    content:
      "In February 1900, Kodak launched the Brownie, a camera of extreme simplicity sold for the negligible price of one dollar. The body — a reinforced cardboard box covered in imitation leather — was fitted with a simple meniscus lens and a rotary shutter. It used Kodak's No. 117 roll film, which cost fifteen cents for six exposures. The name \"Brownie,\" drawn from the small elves illustrated by Palmer Cox in children's books, made the intended audience unmistakable: the young.\n\nThe success was immediate and phenomenal. Kodak sold 150,000 Brownies in the first year alone. For the first time, photography was no longer a luxury, nor even a pastime for the prosperous middle class: it became accessible to nearly everyone. Working-class families could now document baptisms, communions, holidays, and the moments of daily life. An entire stratum of social history, previously invisible, began to be recorded.\n\nThe Brownie also inaugurated the concept of the low-cost \"photographic system\": the camera was sold at cost or below, while profit came from the continuous sale of film and development services. This business model would be Kodak's throughout the twentieth century and would inspire countless companies in other sectors.\n\nThe Brownie line evolved across the decades, eventually comprising dozens of different models through 1986. Certain iconic designs — the Brownie Hawkeye (1949) and the Brownie Starflash (1957) — accompanied entire generations of Americans and Europeans in their first encounters with photography. In total, tens of millions of Brownies were sold, making the line one of the greatest commercial successes in the history of photography.",
    image: '/images/kodak_brownie.jpg',
    illustrations: [
      { url: '/images/kodak_brownie.jpg', caption: "The Kodak Brownie — sold for one dollar, it placed photography within everyone's reach" },
    ],
    category: 'camera',
    era: 'democratisation',
  },
  {
    id: 'autochrome-lumiere',
    year: 1907,
    title: 'The Lumière Autochrome',
    summary:
      "Brothers Auguste and Louis Lumière market the Autochrome, the first truly practical color photography process. Based on microscopic grains of dyed potato starch, it gave the world images of a dreamlike beauty.",
    content:
      "On 10 June 1907, the Lumière brothers officially presented the Autochrome to the Parisian press, and the process went on sale the following 1 September. It was the first color photography system simple and reliable enough for use by knowledgeable amateurs. The enthusiasm was immense: the photographer Alfred Stieglitz declared that \"color is now an accomplished fact.\"\n\nThe principle of the Autochrome is of remarkable ingenuity. A glass plate is covered with a mosaic of millions of microscopic grains of potato starch, dyed orange, green, and violet — the three complementary colors of red, blue, and green. These grains, averaging 15 micrometers in diameter, act as so many tiny color filters. A layer of panchromatic black-and-white emulsion is applied on top. During exposure, light passes first through the starch mosaic, which selects the colors, before striking the emulsion.\n\nAfter development by reversal (to obtain a direct positive), each starch grain transmits the color it has filtered, reconstituting the color image when the plate is viewed by transmitted light or projected. The result is of a singular beauty: the colors are soft, faintly pointillist, evoking Impressionist paintings. Autochromes possess a nostalgic charm that later, more faithful but colder, color photography would never quite recapture.\n\nThe Autochrome enjoyed considerable success, particularly among Pictorialist photographers and wealthy amateurs. Albert Kahn employed it for his monumental \"Archives of the Planet\" project, dispatching photographers to document in color the peoples and landscapes of the entire world. More than 72,000 Autochromes were made for this project between 1909 and 1931. The Autochrome would remain the dominant color process until the introduction of Kodachrome in 1935.",
    image: '/images/autochrome.jpg',
    illustrations: [
      { url: '/images/autochrome.jpg', caption: "Lumière Autochrome — the characteristic pointillist rendering produced by the dyed starch grains" },
    ],
    category: 'invention',
    era: 'democratisation',
  },
  {
    id: 'ur-leica-prototype',
    year: 1913,
    title: 'The First Leica Prototype (Ur-Leica)',
    summary:
      "Oskar Barnack, an engineer at Leitz, builds a small camera using 35mm cinematographic film. This prototype — the Ur-Leica — inaugurated the era of miniature photography and would change the practice of the medium forever.",
    content:
      "In 1913, Oskar Barnack, an asthmatic engineer working for the optical firm Ernst Leitz in Wetzlar, Germany, built a small camera using standard 35mm cinematographic film. His idea was simple but revolutionary: rather than carrying the heavy large-format equipment of the day, why not use a small 24 × 36mm negative and enlarge it at the printing stage? This prototype, known today as the Ur-Leica, fit in the palm of the hand.\n\nBarnack was initially motivated by personal reasons: his asthma made the transport of the medium- and large-format cameras of the era — which weighed several kilograms with their tripods — genuinely painful. He envisioned a camera that would fit in a coat pocket and allow photography to be done handheld, without a tripod, in available light.\n\nThe 35mm film, invented by Thomas Edison for cinema in 1892, had the advantage of being widely available and inexpensive. Barnack simply doubled the height of the cinema frame (18 × 24mm) to obtain his 24 × 36mm format, providing a surface area sufficient for acceptable enlargements. He designed a high-speed 42mm lens and a precise focal-plane shutter.\n\nThe First World War interrupted development. It would be 1925 before the Leica I (for LEItz CAmera) was finally placed on the market. But even in 1913, the two examples of the Ur-Leica that Barnack used personally demonstrated the potential of the small format. The photographs he made in Wetzlar during the flooding of the Lahn in 1920 are of remarkable quality and proved that the future of photography lay in miniaturization.",
    image: '/images/leica_i.jpg',
    illustrations: [
      { url: '/images/leica_i.jpg', caption: "Leica I Model A — the commercial version derived from Barnack's Ur-Leica prototype" },
    ],
    category: 'camera',
    era: 'democratisation',
  },
  {
    id: 'photo-grande-guerre',
    year: 1914,
    endYear: 1918,
    title: 'Photography During the Great War',
    summary:
      "The First World War saw the massive deployment of photography for military, documentary, and propaganda purposes. Images from the trenches revealed to the world the horror of modern industrial warfare.",
    content:
      "The Great War of 1914–1918 marked a turning point in the history of war photography. For the first time, a conflict was documented systematically and on a vast scale — by the photographic services of the armies as much as by the soldiers themselves. Aerial photography in particular became a primary military tool for the reconnaissance and mapping of enemy positions.\n\nEvery belligerent army created official photographic units. The Section Photographique de l'Armée (SPA), founded in France in 1915, employed dozens of photographers and cinematographers. These images, carefully controlled by censorship, served simultaneously as documentation, propaganda, and historical record. Operators such as Pierre-Ambroise Richebé and Albert Moreau risked their lives at the front to capture the reality of combat.\n\nAlongside official imagery, millions of soldiers carried personal cameras into the trenches — often Vest Pocket Kodaks, small enough to slip into a kit bag. These soldier photographs, long neglected, constitute today an invaluable testimony to daily life at the front: the mud, the waiting, the camaraderie, the ruins, the rare moments of respite. They offer an intimate, unfiltered view that the official photographers never showed.\n\nThe Great War also accelerated the development of aerial photography. In 1914, reconnaissance was conducted by naked eye from balloons and aircraft. By 1915, specially designed cameras were mounted on planes, and the interpretation of aerial photographs had become a military discipline in its own right. This expertise was transferred after the war to the civilian domains of cartography, urban planning, and archaeology.",
    image: '/images/ww1_trench.jpg',
    illustrations: [
      { url: '/images/ww1_trench.jpg', caption: 'Soldiers of the Cheshire Regiment in a trench on the Somme (1916)' },
    ],
    category: 'movement',
    era: 'democratisation',
  },

  // ─── The Golden Age (1920–1960) ──────────────────────────────────────
  {
    id: 'leica-i-commercial',
    year: 1925,
    title: 'Commercial Launch of the Leica I',
    summary:
      "After years of hesitation, Ernst Leitz decides to market the 35mm camera designed by Oskar Barnack. The Leica I inaugurated the era of modern reportage photography and inspired a lineage of legendary cameras.",
    content:
      'In 1925, at the Leipzig Fair, the Ernst Leitz firm of Wetzlar officially presented the Leica I (Leitz Camera), a compact camera using 35mm cinematographic film. The decision to market it had been taken by Ernst Leitz II in 1924, at a meeting that has come down in history as the "Leica-Entscheidung" (the Leica Decision), despite the reservations of colleagues who doubted the commercial potential of the small format.\n\nThe Leica I is a jewel of mechanical engineering: a compact metal body weighing less than 400 grams, fitted with a focal-plane shutter offering speeds from 1/20 to 1/500 of a second. Its Elmar 50mm f/3.5 lens, computed by Max Berek, offered exceptional optical quality for such a small format. The 35mm film allowed 36 exposures per loading, compared to 8 to 16 for the medium-format cameras of the day.\n\nThe impact on photographic practice was immense. The Leica made it possible, for the first time, to photograph truly spontaneously — in the street, in crowds, in low light, without drawing attention. A new aesthetic was born, founded on immediacy, bold framing, and proximity to the subject. Photographers such as André Kertész, then Henri Cartier-Bresson, Robert Capa, and many others, would make the Leica their instrument of choice.\n\nThe Leica also engendered a genuine dynasty of cameras. The Leica II (1932) added a coupled rangefinder; the Leica III (1933) expanded the range of shutter speeds. These cameras were produced in hundreds of thousands of examples and imitated by dozens of manufacturers worldwide, notably in Japan (Canon, Nikon) and the USSR (FED, Zorki). The 24 × 36mm format, born of Oskar Barnack\'s intuition, would become the universal standard of photography for the remainder of the century.',
    image: '/images/leica_i.jpg',
    illustrations: [
      { url: '/images/leica_i.jpg', caption: "Leica I Model A with Elmar 50mm lens — the camera that invented 35mm photography" },
    ],
    category: 'camera',
    era: 'age-or',
  },
  {
    id: 'magazine-life',
    year: 1936,
    title: 'LIFE Magazine and Photojournalism',
    summary:
      "The launch of LIFE magazine by Henry Luce consecrated photojournalism as a major form of expression. The magazine published grand pictorial narratives that informed and moved millions of American readers.",
    content:
      'On 23 November 1936, the first issue of LIFE magazine appeared on American newsstands, its cover bearing a photograph by Margaret Bourke-White of the Fort Peck Dam in Montana. The magazine\'s mission, as defined by its founder Henry Luce, was ambitious: "To see life, to see the world, to witness great events." LIFE embodied the apex of photojournalism, a narrative form that used photography not as mere illustration but as the primary language of storytelling.\n\nThe success of LIFE was instantaneous: the first print run of 466,000 copies sold out within hours. Within a few years, the magazine reached a circulation of several million copies a week. Its formula rested on extended photo-essays of several pages, entrusted to the finest photographers in the world: Margaret Bourke-White, Alfred Eisenstaedt, W. Eugene Smith, Gordon Parks, Robert Capa.\n\nLIFE did not emerge from nothing. It belonged to a tradition initiated in Germany by the magazines Berliner Illustrirte Zeitung and Münchner Illustrierte Presse in the 1920s, where picture editors such as Stefan Lorant invented the concept of the photographic narrative. The rise of the Nazis drove many European journalists and photographers into exile in the United States, where they contributed to the flourishing of American photojournalism.\n\nThe influence of LIFE on the visual culture of the twentieth century is beyond measure. The magazine helped shape public opinion on the defining events of the era: the Second World War, the civil rights struggle, the space race, the war in Vietnam. Certain images published in LIFE — the victory kiss in Times Square, the napalm girl, the Earthrise from the Moon — became universal icons that transcend journalism to lodge themselves in the collective memory of humanity.',
    image: '/images/life_magazine_logo.svg',
        illustrations: [
      { url: '/images/bourke_white.jpg', caption: 'Margaret Bourke-White, the first accredited female war photographer and a star photographer for LIFE' },
      { url: '/images/eisenstaedt.jpg', caption: 'Alfred Eisenstaedt in Paris in 1963 — an emblematic photographer of LIFE magazine' },
    ],
    category: 'movement',
    era: 'age-or',
  },
  {
    id: 'exakta-premier-slr-35mm',
    year: 1936,
    title: 'The Exakta, First 35mm SLR',
    summary:
      "The Ihagee Exakta, made in Dresden, is the first single-lens reflex (SLR) camera to use 35mm film. It laid the foundations for a category of cameras that would dominate photography for half a century.",
    content:
      "In 1936, the Ihagee firm of Dresden, Germany, launched the Kine Exakta, the world's first single-lens reflex (SLR) camera in the 35mm format. The reflex principle — a 45° mirror that diverts the image formed by the lens onto a viewing screen — had been known since the nineteenth century for large-format cameras, but its adaptation to the small 35mm format represented a considerable technical challenge.\n\nThe fundamental advantage of the SLR is that the photographer sees exactly what the lens sees. Unlike rangefinder cameras such as the Leica, there is no parallax error between the viewfinder and the taking lens, which is particularly valuable for close-up photography and the use of telephoto lenses. Moreover, the system is inherently compatible with interchangeable lenses of all focal lengths.\n\nThe Kine Exakta was a remarkably innovative camera for its time. It offered a focal-plane shutter with speeds up to 1/1000 of a second, a built-in self-timer, and a bayonet mount permitting the rapid exchange of lenses. Its shutter release was located on the left side of the body — a distinctive feature that all subsequent Exakta models would retain.\n\nAlthough the Kine Exakta did not achieve the immediate commercial success of the Leica, it laid the foundations for a category of cameras that would dominate photography from the late 1950s through the 2000s. After the war, Japanese engineers would draw heavily on the Exakta in developing their own SLR designs — the Asahiflex (1952), the Nikon F (1959), the Canon F-1 (1971) — which would bring the concept to its mechanical and optical perfection.",
    image: '/images/exakta.jpg',
    illustrations: [
      { url: '/images/exakta.jpg', caption: "Exakta Varex IIb with Carl Zeiss Pancolar lens — a descendant of the first 35mm SLR" },
    ],
    category: 'camera',
    era: 'age-or',
  },
  {
    id: 'kodacolor-negatif-couleur',
    year: 1942,
    title: 'Kodacolor, the First Color Negative Film',
    summary:
      "Kodak launches Kodacolor, the first color negative film aimed at the general public. Unlike slides, color negative film allows paper prints to be made, opening the way to mass color photography.",
    content:
      "In 1942, in the midst of the Second World War, Kodak introduced Kodacolor, the first color negative film intended for the amateur market. This film — initially available only in roll format for medium-format cameras — produced a negative in which colors were inverted and complementary: reds appeared as cyan, greens as magenta, blues as yellow. From this negative, positive color prints were made on paper.\n\nColor negative film offered a decisive advantage over slides (Kodachrome, launched in 1935): it made it easy to obtain prints on paper, the format preferred for family albums. Its exposure latitude was also more forgiving, leaving less room for the errors of amateurs. On the other hand, the quality of early Kodacolor prints was poor compared to the brilliant Kodachrome slides, and the colors tended to fade over time.\n\nThe significance of Kodacolor lies in making color photography accessible to the widest possible audience. Before its appearance, color in photography had been reserved for professionals and knowledgeable amateurs capable of managing the technical complexities of slide film. With color negative film, the process was as simple as with black and white: expose, have it developed, receive your prints.\n\nOver the decades, color negative film was continuously improved. Kodacolor II (1972), Kodacolor VR (1983), and Kodak Gold (1988) offered ever-better performance in terms of grain, color fidelity, and stability. Through the 1970s and 1990s, color negative film represented virtually the entire amateur market, as rapid processing labs (minilabs) proliferated in shopping centers and pharmacies everywhere.",
    image: '/images/kodachrome.jpg',
        illustrations: [
      { url: '/images/film_cartridges.jpg', caption: "Kodachrome film cartridge — Kodak's most celebrated color film" },
    ],
    category: 'invention',
    era: 'age-or',
  },
  {
    id: 'polaroid-edwin-land',
    year: 1947,
    title: "Edwin Land's Invention of the Polaroid",
    summary:
      "Edwin Land presents the Polaroid Land Camera Model 95, which produces a finished print in minutes without a darkroom. Instant photography is born, offering the immediate gratification of the image.",
    content:
      "On 21 February 1947, at a meeting of the Optical Society of America in New York, Edwin Herbert Land presented a camera that seemed to belong to the realm of magic: a device that produced a finished black-and-white print in sixty seconds, with no darkroom, no chemicals, no manipulation whatsoever. The Polaroid Land Camera Model 95 was placed on sale the following year, on 26 November 1948, at the Jordan Marsh department store in Boston. The fifty-six cameras available sold out within hours.\n\nThe idea for the Polaroid is said to have been born in 1943, when Land's three-year-old daughter Jennifer asked him why she could not see the photograph he had just taken of her. This childlike question set Land thinking with extraordinary intensity, and within the space of a few hours he had worked out the complete theoretical design of an instant photography system.\n\nThe genius of the Polaroid process lay in a chemically complex sandwich within the film itself. The film contained, between the negative and the positive paper, a pod of reagents that burst when the print passed between pressure rollers on exiting the camera. The reagents migrated between the layers, simultaneously developing the negative image and transferring a positive image to the receiving paper. The entire process took place in full daylight, within the thickness of the film itself.\n\nThe Polaroid went far beyond a mere novelty. Artists including Ansel Adams (who served as a consultant to the company), Andy Warhol, David Hockney, and Helmut Newton adopted it as a creative tool in its own right. The SX-70 format (1972), which eliminated the need to peel a protective layer and offered colors of remarkable richness, became a cultural icon. Instant photography anticipated, in its own way, the need for immediate gratification that would later be satisfied by the digital screen and social media.",
    image: '/images/polaroid_95.jpg',
    illustrations: [
      { url: '/images/polaroid_95.jpg', caption: 'Polaroid Land Camera Model 95 — the first instant-development camera (MIT Museum)' },
    ],
    category: 'invention',
    era: 'age-or',
  },
  {
    id: 'hasselblad-1600f',
    year: 1949,
    title: 'The Hasselblad 1600F',
    summary:
      "The Swedish firm Victor Hasselblad launches the 1600F, a modular medium-format reflex camera of exceptional build quality. It inaugurated a photographic system that would become the absolute benchmark for professionals.",
    content:
      "In 1949, Victor Hasselblad — an ornithologist and photography enthusiast — presented the 1600F, the first camera from his eponymous firm, founded in Gothenburg, Sweden. This single-lens reflex camera in the 6 × 6cm format was of a radically modular design: the film back, the viewfinder, and the lens were all interchangeable, allowing the photographer to configure the camera for any situation.\n\nThe Hasselblad 1600F, named for its maximum shutter speed of 1/1600 of a second, grew out of the experience Victor Hasselblad had gained during the Second World War, when the Swedish Army entrusted him with the design of an aerial reconnaissance camera. The mechanical precision and robustness developed for military applications were carried directly into the civilian model.\n\nThe Hasselblad system was perfected with the 500C in 1957, which abandoned the focal-plane shutter in favor of a Compur Synchro central shutter integrated within each Carl Zeiss lens. This costly but technically superior choice offered flash synchronization at all shutter speeds and exemplary reliability. The Zeiss lenses designed for the Hasselblad — notably the Planar 80mm f/2.8 — are considered among the finest ever made.\n\nThe Hasselblad would become the preferred camera of studio, fashion, and advertising photographers for several decades. Richard Avedon, Irving Penn, and Helmut Newton used it to create some of the most celebrated images of the twentieth century. But it was perhaps in space that the Hasselblad reached its ultimate consecration: chosen by NASA from the Mercury program in 1962, it accompanied the Apollo astronauts to the Moon in 1969, producing the most iconic photographs of the human space adventure.",
    image: '/images/hasselblad_500c.jpg',
    illustrations: [
      { url: '/images/hasselblad_500c.jpg', caption: "Hasselblad 500C — the medium-format camera that went to the Moon" },
    ],
    category: 'camera',
    era: 'age-or',
  },
  {
    id: 'cartier-bresson-images-sauvette',
    year: 1952,
    title: 'Cartier-Bresson Publishes "Images à la Sauvette"',
    summary:
      'Henri Cartier-Bresson publishes his landmark work "Images à la Sauvette," whose preface theorizes the concept of the "decisive moment." This book established the aesthetic foundations of modern reportage photography.',
    content:
      'In 1952, the Verve publishing house published Images à la Sauvette (The Decisive Moment in the American edition), a collection of 126 photographs by Henri Cartier-Bresson accompanied by a preface that became the most influential theoretical text in the history of photography. The cover was illustrated by Henri Matisse, a friend of the photographer. The book gathered twenty years of work across Europe, Asia, and the Americas.\n\nIn his preface, Cartier-Bresson set out his photographic philosophy with magisterial clarity. Photography, he wrote, is "the simultaneous recognition, in a fraction of a second, of the significance of an event as well as of a precise organization of forms which give that event its proper expression." This is the very definition of what the American edition would call the "decisive moment" — the instant at which content and form together reach their maximum intensity.\n\nCartier-Bresson also formulated practical principles that would influence generations of photographers: the refusal to crop (framing must be definitive at the moment of exposure), absolute discretion on the part of the photographer (who must never interfere with his subject), the exclusive use of the Leica and the 50mm lens, and the rejection of all staging. These almost ascetic principles elevated reportage photography to the status of a major art.\n\nThe influence of Images à la Sauvette has been immense and enduring. The book defined an ideal of photography as an art of observation, patience, and geometric intuition. Cartier-Bresson, a co-founder of the Magnum agency in 1947, embodied a model of the photographer-as-author — independent and committed — that would inspire Robert Doisneau, Marc Riboud, Josef Koudelka, Sebastião Salgado, and countless other practitioners of humanist reportage.',
    image: '/images/cartier_bresson.png',
        illustrations: [
      { url: '/images/cartier_bresson.png', caption: 'Cover of Images à la Sauvette (The Decisive Moment), designed by Henri Matisse (1952)' },
    ],
    category: 'movement',
    era: 'age-or',
  },

  // ─── The SLR Revolution (1960–1990) ──────────────────────────────────
  {
    id: 'nikon-f',
    year: 1959,
    title: 'The Nikon F',
    summary:
      "Nikon launches the F, a professional 35mm SLR of unrivaled robustness and versatility. Adopted by photojournalists worldwide, it marked the beginning of Japanese dominance of the photographic industry.",
    content:
      "In March 1959, Nippon Kogaku (later Nikon) presented the Nikon F, a 35mm single-lens reflex camera that would redefine the standards of professional photography. Designed by an engineering team led by Yusaku Kamekura, the Nikon F combined near-indestructible construction, a first-rate optical system, and remarkable modularity.\n\nThe Nikon F immediately won over professionals with its absolute reliability. Where the German SLRs of the day required frequent adjustments and delicate maintenance, the Nikon F functioned in the most extreme conditions: arctic cold, tropical heat, humidity, dust, and physical shock. War correspondents in Vietnam adopted it en masse — some reported that their Nikon F had stopped a bullet or survived an explosion. The Nikkor lens range, heir to a tradition of Japanese optical excellence, offered image quality that rivaled the finest German glass.\n\nThe Nikon F also inaugurated the concept of the \"professional system\": dozens of interchangeable accessories — viewfinders, focusing screens, film backs, motor drives — allowed the camera to be configured for any photographic specialty. This concept of the integrated system would be adopted by every major manufacturer.\n\nThe impact of the Nikon F extended beyond the technical sphere. It symbolized the shift of the photographic industry's center of gravity from Germany to Japan — a movement that would accelerate in the decades that followed. The Japanese firms — Nikon, Canon, Minolta, Pentax, Olympus — applied Japanese industrial production methods to camera manufacturing, delivering consistent quality at competitive prices. The Nikon F and its successors (F2, F3, F4, F5, F6) would form the backbone of professional photojournalism for half a century.",
    image: '/images/nikon_f.jpg',
    illustrations: [
      { url: '/images/nikon_f.jpg', caption: "Nikon F with Photomic FTn metering head — the camera of the photojournalists in Vietnam" },
    ],
    category: 'camera',
    era: 'revolution-slr',
  },
  {
    id: 'exposition-automatique',
    year: 1963,
    title: 'The First Camera with Automatic Exposure',
    summary:
      "The introduction of TTL (Through The Lens) light metering and automatic exposure radically simplified picture-taking. The photographer could now concentrate on framing and the decisive moment rather than on technical settings.",
    content:
      "In the early 1960s, several Japanese manufacturers introduced light-metering systems integrated within reflex cameras. The Topcon RE Super (1963) was among the first SLRs to offer TTL (Through The Lens) metering: the photoelectric cell measured the light actually transmitted by the lens. This innovation eliminated the errors caused by external light meters, which did not account for filters, extension tubes, or the actual transmission of the lens.\n\nTTL metering opened the way to automatic exposure, in which the camera itself determined the optimal aperture-speed combination. The Canon FX (1963) incorporated a coupled CdS meter, and the years that followed saw the emergence of cameras offering shutter-priority (the user selects the speed, the camera adjusts the aperture) or aperture-priority (the reverse). The Minolta SRT 101 (1966) popularized \"center-weighted\" metering, which gave greater importance to the center of the frame.\n\nThese advances profoundly transformed photographic practice. Previously, the photographer had to estimate or measure the ambient light, consult an exposure table or a separate meter, and then manually transfer the values to the camera — a process that consumed precious seconds and demanded a certain technical expertise. With automatic exposure, a beginner could obtain correctly exposed images from the very first frame.\n\nSome purists worried at the time that technology was supplanting craftsmanship. But professional photographers quickly recognized the advantage: freed from exposure calculations, they could concentrate entirely on framing, composition, and the moment. The automation of exposure did not impoverish photography — it democratized it once more, exactly as the Kodak No. 1 had done seventy-five years earlier.",
    image: '/images/canonet.jpg',
    illustrations: [
      { url: '/images/canonet.jpg', caption: "Canon Canonet QL17 GIII — an example of the automatic-exposure compact cameras of the 1970s" },
    ],
    category: 'technique',
    era: 'revolution-slr',
  },
  {
    id: 'instamatic-kodak',
    year: 1963,
    title: 'The Kodak Instamatic',
    summary:
      "Kodak launches the Instamatic, a camera using a drop-in film cartridge. With more than 50 million units sold, the Instamatic became the best-selling camera in history at that point.",
    content:
      "In February 1963, Kodak presented the Instamatic, a compact camera using a new cartridge film format: the 126. The plastic cartridge dropped into the camera in a single motion, with no film handling required — no more risks of incorrect loading, light leaks, or jammed film. The entry-level Instamatic 100 was sold at a very accessible price, and the range quickly expanded to a dozen models.\n\nThe success of the Instamatic was vertiginous. Kodak sold more than 50 million cameras in the line over the following decade — an absolute record for the era. The 126 cartridge eliminated the last technical barrier that might have intimidated uninitiated users: loading the film. The camera was truly \"point and shoot\" — aim and press the shutter, nothing more.\n\nThe Instamatic followed Kodak's constant strategy since George Eastman: to simplify the photographic act as completely as possible in order to sell the maximum amount of film. Each Instamatic sold at a low price guaranteed years of revenue from film and processing. The 126 format would be followed by the 110 (Pocket Instamatic, 1972), even more compact, which would enjoy comparable success.\n\nBeyond its commercial achievement, the Instamatic had considerable cultural importance. It democratized color photography among social groups for whom it had previously been out of reach. The snapshots made with Instamatics constitute today a documentary treasure trove of daily life in the 1960s and 1970s: camping holidays, family celebrations, first cars, fashions of the day. These images, often technically imperfect, possess an authenticity and an emotional value that nothing can replace.",
    image: '/images/instamatic.jpg',
    illustrations: [
      { url: '/images/instamatic.jpg', caption: "Kodak Instamatic 50 with its drop-in 126 film cartridge" },
    ],
    category: 'camera',
    era: 'revolution-slr',
  },
  {
    id: 'photo-lunaire-apollo',
    year: 1969,
    title: 'Lunar Photography — Apollo 11',
    summary:
      "The astronauts of Apollo 11 carry modified Hasselblads to the Moon and bring back photographs that become the most celebrated images of the twentieth century. Photography accompanies humanity on its greatest voyage.",
    content:
      "On 20 July 1969, Neil Armstrong and Buzz Aldrin set foot on the Moon, carrying with them two Hasselblad 500EL cameras modified for conditions in space. Designated the Hasselblad EDC (Electric Data Camera), these instruments were fitted with Zeiss Biogon 60mm lenses and film backs loaded with special 70mm film. Reseau plates — glass plates engraved with crosshairs — placed in front of the film authenticated each image.\n\nThe modifications for the space environment were extensive. Standard lubricants, which would have evaporated in the vacuum, were replaced by special formulations. Surfaces were painted silver to withstand the extreme temperatures (from -150°C to +120°C). Controls were enlarged to be operable with the thick gloves of a spacesuit. The reflex viewfinder was replaced by a simple frame viewfinder, as the helmet prevented the astronaut from pressing his eye to the eyepiece.\n\nAmong the thousands of photographs returned by the Apollo missions, certain images became universal icons. The celebrated picture of Buzz Aldrin standing on the lunar surface, photographed by Neil Armstrong (whose reflection appears in Aldrin's visor), is among the most reproduced photographs in history. \"Earthrise\" — taken by William Anders during Apollo 8 in December 1968, showing our blue planet rising above the lunar horizon — profoundly moved the world's conscience and contributed to the emergence of the environmental movement.\n\nA remarkable fact: the Hasselblad cameras used on the lunar surface were left there, abandoned to lighten the ascent module. Only the film backs containing the exposed rolls were brought back to Earth. Twelve Hasselblads still rest today on the surface of the Moon, silent witnesses to one of the greatest achievements in human history.",
    image: '/images/aldrin_apollo11.jpg',
    illustrations: [
      { url: '/images/aldrin_apollo11.jpg', caption: "Buzz Aldrin on the Moon, photographed by Neil Armstrong with a Hasselblad 500 EL (20 July 1969)" },
    ],
    category: 'milestone',
    era: 'revolution-slr',
  },
  {
    id: 'premier-appareil-numerique',
    year: 1975,
    title: 'The First Digital Camera',
    summary:
      "Steven Sasson, an engineer at Kodak, builds the first digital camera. Weighing 3.6 kg and producing images of 0.01 megapixels, this prototype announced a revolution that Kodak itself would fail to exploit.",
    content:
      "In December 1975, Steven Sasson, a twenty-four-year-old engineer employed by Kodak in Rochester, New York, assembled a prototype of a fully digital camera. The device — the size of a toaster and weighing 3.6 kilograms — used a CCD (Charge-Coupled Device) sensor of 100 × 100 pixels, amounting to 0.01 megapixels, manufactured by Fairchild Semiconductor. The image, in black and white, was recorded onto a standard cassette tape and required twenty-three seconds to capture.\n\nTo view the image, Sasson had to connect the cassette player to a specially modified television set. The first digital image in history showed the face of a laboratory assistant, Joy Marshall. The resolution was so low that some effort of imagination was required to make out the subject's features. Despite this rudimentary quality, Sasson immediately grasped the revolutionary potential of his creation: photography without film, without chemistry, without waiting.\n\nSasson presented his invention to Kodak's management, who greeted the demonstration with a mixture of curiosity and skepticism. The response was symptomatic: \"Who would want to look at their photos on a television?\" Kodak, whose profits rested almost entirely on the sale of film and processing, perceived the digital as a threat rather than an opportunity. The invention was patented but shelved.\n\nThe tragic irony of this story is well known: Kodak, the company that invented digital photography, was destroyed by it. Unable to abandon the business model built on film, Kodak allowed others — Canon, Nikon, Sony — to exploit digital technology. In 2012, the company filed for bankruptcy. Steven Sasson, for his part, was awarded the National Medal of Technology by President Obama in 2009 for his visionary invention.",
    image: '/images/sasson_digital.jpg',
    illustrations: [
      { url: '/images/sasson_digital.jpg', caption: "The first digital camera, built by Steven Sasson at Kodak in 1975 — 0.01 megapixels, 3.6 kg" },
    ],
    category: 'invention',
    era: 'revolution-slr',
  },
  {
    id: 'konica-c35-af-autofocus',
    year: 1977,
    title: 'The Konica C35 AF, First Autofocus Camera',
    summary:
      "Konica launches the C35 AF, the first mass-market camera equipped with an autofocus system. Automatic focusing freed the photographer from one of the most demanding operations in picture-taking.",
    content:
      "In November 1977, Konica presented the C35 AF (AutoFocus), the world's first camera with an automatic focusing system designed for the general public. The system, developed by Honeywell, used a passive infrared module that measured the contrast of the scene to determine the subject distance and automatically adjust the lens position.\n\nManual focusing is one of the most demanding operations in photography. It requires good eyesight, experience, and time — fractions of a second that can make the difference between a sharp and a blurred image, particularly in reportage or sports photography. Autofocus eliminated this difficulty, allowing even eyeglass wearers and beginners to obtain perfectly sharp images.\n\nThe Konica C35 AF was a fixed-lens compact, and its autofocus system was still rudimentary: it worked well only in sufficient light and could not track a moving subject. But the principle had been established. The years that followed saw a race for innovation among the Japanese manufacturers. Canon developed phase-detection autofocus, Nikon a contrast-detection system, and Minolta a hybrid system.\n\nThe real revolution would come in 1985 with the Minolta 7000, the first 35mm SLR with autofocus integrated into the camera body. But it was the Konica C35 AF that took the first step. Autofocus progressively transformed the whole of photography: by the early twenty-first century, it had become so fast and so accurate that even sports photographers — the most exacting users of all in terms of focusing — abandoned manual focus entirely, entrusting this task to their cameras.",
    image: '/images/konica_c35af.jpg',
    illustrations: [
      { url: '/images/konica_c35af.jpg', caption: "Konica C35 AF (1977) — the world's first mass-market autofocus camera" },
    ],
    category: 'invention',
    era: 'revolution-slr',
  },
  {
    id: 'minolta-7000-af-reflex',
    year: 1985,
    title: 'The Minolta 7000, First Autofocus SLR',
    summary:
      "The Minolta 7000 is the first 35mm SLR with autofocus and motor drive integrated into the body. It triggered a transformation of the entire industry and forced every manufacturer to adopt autofocus.",
    content:
      "In February 1985, Minolta launched the 7000 AF, a camera that marks a turning point in the history of the 35mm SLR. It was the first camera to integrate both an autofocus system and a film advance motor within the body, together with a new lens mount (the A-mount) designed specifically for autofocus. The lenses had no conventional manual focus ring — a bold choice that unambiguously declared that the future lay in automation.\n\nThe 7000's autofocus system, based on phase detection with a central sensor, was impressively fast for its time. Paired with lightweight motorized lenses, it achieved focus in a fraction of a second in most lighting conditions. The camera also offered fully automatic exposure modes (program, shutter priority, aperture priority) and an LCD display on the top plate.\n\nThe commercial success of the Minolta 7000 was immediate and forced the entire industry to react. Nikon launched the autofocus F-501 as early as 1986; Canon responded more radically in 1987 with the EOS system and its new EF mount, designed entirely around autofocus. Pentax, Olympus, and the others followed. Within a few years, the manual SLR, focused through a rangefinder or on a focusing screen, gave way to the autofocus SLR.\n\nThe Minolta 7000 also symbolized the end of an era: that of the camera as a purely mechanical and optical instrument, mastered through the photographer's own skill. Henceforth, electronics and software assumed an ever-growing share of the technical decisions. This evolution, which alarmed the purists, opened photography to millions of new practitioners and prepared the ground for the digital revolution to come.",
    image: '/images/minolta_7000.jpg',
    illustrations: [
      { url: '/images/minolta_7000.jpg', caption: "Minolta 7000 AF (1985) — the first 35mm SLR with autofocus integrated into the body" },
    ],
    category: 'camera',
    era: 'revolution-slr',
  },

  // ─── The Digital Era (1990–2010) ─────────────────────────────────────
  {
    id: 'adobe-photoshop',
    year: 1990,
    title: 'Adobe Photoshop 1.0',
    summary:
      "Adobe launches Photoshop 1.0 for Macintosh, an image-editing program that would radically transform photographic processing. Digital post-production becomes an art form in its own right.",
    content:
      "On 19 February 1990, Adobe Systems launched Photoshop 1.0, a digital image-editing program for the Macintosh developed by brothers Thomas and John Knoll. Thomas, a doctoral student in computer science at the University of Michigan, had created the original program (then called Display) to view grayscale images on the monochrome screen of his Macintosh Plus. His brother John, a visual effects specialist at Industrial Light & Magic (George Lucas's company), had added image-processing functions.\n\nPhotoshop 1.0 already offered tools that would become emblematic: levels, curves, color balance, the clone stamp, the lasso selection tool, blur and sharpening filters. For the first time, a photographer could alter images with a precision and freedom impossible in a traditional darkroom. Removing an unwanted element, correcting a color cast, adjusting contrast zone by zone — all of it became possible on a computer screen.\n\nThe impact of Photoshop on photography is comparable to that of Talbot's invention of the negative: it redefined entirely what a photographic image is. The very notion of authenticity was called into question. If a photograph can be modified pixel by pixel, what still distinguishes a photo from a drawing or a painting? These questions, raised from the 1990s onward, became ever more pressing as the software's capabilities grew.\n\nPhotoshop rapidly became an industry standard used by photographers, graphic designers, advertising agencies, and editorial offices. Its name entered everyday language: to \"photoshop\" an image means to retouch, alter, or sometimes falsify it. In 2024, Photoshop counted more than thirty million subscribers and now incorporates generative artificial intelligence functions. The small program created by two brothers in their spare time has become the most influential visual creation tool of the digital age.",
    image: '/images/photoshop_icon.svg',
        illustrations: [
      { url: '/images/photoshop_icon.svg', caption: 'Adobe Photoshop icon — the software that has redefined photographic editing since 1990' },
    ],
    category: 'digital',
    era: 'numerique',
  },
  {
    id: 'kodak-dcs-premier-reflex-numerique',
    year: 1991,
    title: 'The Kodak DCS, First Professional Digital SLR',
    summary:
      "Kodak launches the DCS (Digital Camera System), the first commercial digital SLR based on a Nikon F3 body. Despite its prohibitive price and its limitations, it opened the era of digital photojournalism.",
    content:
      "In 1991, Kodak marketed the DCS 100, the first professional digital SLR. Based on a modified Nikon F3 body, it was equipped with a 1.3-megapixel CCD sensor developed by Kodak. The complete system comprised the modified body, a separate Digital Storage Unit (DSU) containing a 200 MB hard drive, and the connecting cables. The whole assembly weighed approximately five kilograms and carried the astronomical price of thirteen thousand dollars.\n\nDespite these considerable limitations, the DCS 100 offered photojournalists a decisive advantage: immediacy. Images could be transmitted to editorial offices by telephone line within minutes of being taken, instead of waiting for film to be developed and scanned. For press agencies, where every minute matters in the race for a scoop, this advantage justified the investment.\n\nKodak continued developing the DCS line with models still based on Nikon (and later Canon) bodies. The DCS 200 (1992) integrated storage within the body, eliminating the cumbersome external unit. The DCS 460 (1995) offered six megapixels. These cameras remained expensive and confined to professionals, but they proved the viability of the concept.\n\nThe Kodak DCS inaugurated a transition that would take some fifteen years to complete. The 1996 Atlanta Olympics saw the first entirely digital coverage by the major agencies. The conflict in Kosovo in 1999 accelerated adoption. By the 2008 Beijing Olympics, not a single press photographer was using film. The irony of history decreed that Kodak, the pioneer of digital photography, would also be the company most devastated by it — incapable of abandoning the profits of its film empire.",
    image: '/images/kodak_dcs.jpg',
    illustrations: [
      { url: '/images/kodak_dcs.jpg', caption: "Kodak DCS 620 — successor to the original DCS, based on a Nikon body" },
    ],
    category: 'camera',
    era: 'numerique',
  },
  {
    id: 'nikon-d1',
    year: 1999,
    title: 'The Nikon D1',
    summary:
      'The Nikon D1 is the first digital SLR designed entirely by a traditional camera manufacturer. Its "affordable" price of $5,500 and its performance convinced professionals that digital was ready.',
    content:
      "In June 1999, Nikon launched the D1, the first professional digital SLR entirely designed and manufactured by a traditional camera maker (all previous digital models having been collaborations between camera manufacturers and Kodak). Equipped with a 2.7-megapixel APS-C CCD sensor, it offered a continuous shooting rate of 4.5 frames per second and sensitivity up to ISO 1600. Its price of $5,500, while high, was a fraction of the cost of the Kodak DCS systems.\n\nThe D1 was a genuine photographer's camera, not an assemblage of electronics grafted onto an existing body. Its ergonomics were designed for the professional: a comfortable grip, controls accessible by touch alone, a weathersealed construction, and a battery life of 1,000 frames per charge. It was compatible with the vast existing range of Nikkor lenses, allowing Nikon photographers to switch to digital without sacrificing their optical investment.\n\nThe impact of the D1 on the industry was considerable. It demonstrated that digital photography had reached a level of quality and responsiveness sufficient for professional daily use. Press agencies, magazines, and sports photographers began migrating to digital en masse. Canon replied with the D30 in 2000, then the 1D in 2001, launching a Nikon-Canon rivalry in the digital realm that would drive innovation for two decades.\n\nThe Nikon D1 also symbolized a shift in economic paradigm. In the analog world, camera and lens manufacturers sold equipment while Kodak and Fuji harvested the profits from film. In the digital world, camera manufacturers reclaimed control of the entire value chain, since there was no longer any consumable to sell. This economic shift sealed the fate of Kodak and Fuji — the latter brilliantly reinventing itself in other domains.",
    image: '/images/nikon_d1.jpg',
    illustrations: [
      { url: '/images/nikon_d1.jpg', caption: "Nikon D1 — the first digital SLR entirely designed by a camera manufacturer (1999)" },
    ],
    category: 'camera',
    era: 'numerique',
  },
  {
    id: 'premier-telephone-photo',
    year: 2000,
    title: 'The Sharp J-SH04, First Camera Phone',
    summary:
      "Sharp launches the J-SH04 in Japan, the world's first mobile phone to integrate a camera. This modest 0.11-megapixel sensor announced a convergence that would transform photography more profoundly than any other innovation.",
    content:
      "In November 2000, the Japanese carrier J-Phone (later SoftBank) marketed the Sharp J-SH04, the world's first mobile phone equipped with a built-in camera. Its 0.11-megapixel CMOS sensor (110,000 pixels) produced images of 256 × 256 pixels of frankly mediocre quality. But the innovation did not lie in image quality: it lay in the fact that, for the first time, one could photograph and instantly share an image from a device one always carried.\n\nThe J-SH04 launched the concept of \"Sha-mail\" (photo-mail): the ability to send a photograph by message from one's phone. In Japan, this feature was a runaway success. Within months, millions of Japanese people had formed the habit of photographing their meals, their friends, the events of daily life, and sharing these images instantly. A behavior that would seem entirely ordinary fifteen years later was in fact invented here, at the turn of the millennium.\n\nThe rest of the world followed more slowly. Nokia launched the photo-capable 7650 in 2002, Sony Ericsson the T68i with a detachable camera module. Early models often attracted derision from \"serious\" photographers: the image quality was derisory, the optics minuscule, the ergonomics catastrophic. But the maxim that \"the best camera is the one you have with you\" proved its truth: people photographed more with their phones than with any other device.\n\nIn retrospect, the Sharp J-SH04 appears as one of the most consequential cameras in the history of photography. It inaugurated the convergence of telephone and camera — a fusion that, within two decades, would render the compact camera obsolete for the vast majority of users. By 2024, more than 90% of all photographs taken in the world were captured on a smartphone. The little Japanese phone of the year 2000 changed everything.",
    image: '/images/sharp_jsh04.jpg',
    illustrations: [
      { url: '/images/sharp_jsh04.jpg', caption: "Sharp J-SH04 — the world's first mobile phone with a built-in camera (2000)" },
    ],
    category: 'milestone',
    era: 'numerique',
  },
  {
    id: 'canon-eos-300d',
    year: 2003,
    title: 'Canon EOS 300D, First Affordable Digital SLR',
    summary:
      "The Canon EOS 300D (Digital Rebel) is the first digital SLR sold for under $1,000. It opened the digital SLR market to enthusiast amateurs and triggered a wave of democratization.",
    content:
      "In August 2003, Canon launched the EOS 300D, marketed as the Digital Rebel in North America, at the revolutionary price of $899 body and kit lens. It was the first time a digital SLR had crossed the symbolic threshold of $1,000 — a psychological barrier whose passage opened the floodgates of the amateur market. The 6.3-megapixel APS-C CMOS sensor delivered image quality that was remarkable for the era.\n\nThe 300D shared much of the electronics of the professional Canon 10D (sold at $1,500 body only) in a lighter, more compact body. Canon accepted thinner margins to conquer a mass market. The strategy paid off: the 300D sold like wildfire. Within a year, Canon had shipped more than a million units — a figure never previously achieved by a digital SLR.\n\nThe success of the 300D produced a domino effect across the industry. Nikon replied with the D70 in 2004, Pentax with the *ist DS, Olympus with the E-300. Prices fell steadily: by 2006, a capable digital SLR could be found for $500. SLR-quality digital photography became accessible to the middle class, exactly as the Brownie had made photography accessible to everyone a century earlier.\n\nThe Canon 300D also triggered a cultural phenomenon: the rise of high-quality amateur photography. Online communities of passionate photographers developed, photo forums exploded in activity, photography blogs multiplied. Talented amateurs, equipped with affordable digital SLRs, began producing images that rivaled those of professionals. The boundary between amateur and professional — already blurring — began to dissolve in earnest.",
    image: '/images/canon_300d.jpg',
    illustrations: [
      { url: '/images/canon_300d.jpg', caption: "Canon EOS 300D (Digital Rebel) — the first digital SLR under $1,000 (2003)" },
    ],
    category: 'camera',
    era: 'numerique',
  },
  {
    id: 'flickr-partage-photos',
    year: 2004,
    title: 'Flickr and Online Photo Sharing',
    summary:
      "The launch of Flickr inaugurated the era of online photographic sharing. For the first time, photographers across the world could publish, organize, and comment on their images within a global community.",
    content:
      "In February 2004, the Canadian startup Ludicorp launched Flickr, an online photo-sharing platform that would transform the way images were disseminated and consumed. Originally conceived as a chat module within an online game, Flickr rapidly evolved into a dedicated photographic platform, offering unlimited photo hosting, a tagging system, thematic groups, and social features for commenting and favoriting.\n\nFlickr introduced several innovations that would become standards of the social web. Its tagging system, which allowed each user to associate freely chosen keywords with their images, created a collaborative taxonomy of unprecedented richness. Creative Commons licenses, offered as an alternative to conventional copyright, encouraged sharing and the reuse of images. The \"Explore\" page, which algorithmically selected the best photographs of the day, created a showcase of global creativity.\n\nThe impact of Flickr on photographic culture was profound. For the first time, an amateur photographer in any country could show their work to a worldwide audience, receive criticism, find inspiration, and join a community of enthusiasts. The geographic and social boundaries that had limited the circulation of images collapsed. Photographic styles traveled at the speed of light, influenced and enriched by this global cross-pollination.\n\nFlickr was acquired by Yahoo! in 2005 for an estimated $35 million. Although the platform subsequently declined in the face of competition from Instagram and social media, its historical influence is undeniable. Flickr laid the foundations of online photo sharing and demonstrated that images were the universal language of the web. The very concept of \"sharing a photo online\" — a daily gesture for billions of people today — was born with Flickr.",
    image: '/images/flickr_logo.svg',
        illustrations: [
      { url: '/images/flickr_logo.svg', caption: 'Flickr logo — the pioneering platform for online photographic sharing (2004)' },
    ],
    category: 'digital',
    era: 'numerique',
  },

  // ─── The Smartphone Era (2010–2026) ──────────────────────────────────
  {
    id: 'iphone-photo-mobile',
    year: 2007,
    title: 'The iPhone and the Mobile Photography Revolution',
    summary:
      "The launch of the iPhone by Apple in 2007 redefined the mobile phone and, with it, everyday photography. Its touchscreen and intuitive interface transformed the photographic experience.",
    content:
      "On 29 June 2007, Apple launched the iPhone in the United States. Its 2-megapixel integrated camera was far from the most capable on the market — several Nokia and Sony Ericsson phones already offered superior sensors. But the iPhone transformed the mobile photographic experience through its large 3.5-inch touchscreen, which served as both viewfinder and gallery, and through a user interface of unprecedented fluidity.\n\nThe iPhone fundamentally changed the relationship between the photographer and their image. On earlier phones, taking a picture was a laborious process: navigate through menus, press the shutter, and then attempt to view the result on a tiny screen. On the iPhone, everything was immediate: touch the camera icon, frame on the large screen, press the shutter, and the image appeared instantly in a gallery scrolled with a fingertip. Photography became a gesture as natural as unlocking one's phone.\n\nThe App Store, launched in 2008, amplified the revolution. Applications such as Camera+ and Hipstamatic offered creative editing features and filters directly on the phone. The development of sharing applications — and soon Instagram — would create a complete ecosystem of creation, editing, and distribution of photography, all contained within a single pocket device.\n\nIn terms of volume, the iPhone and its Android rivals triggered an unprecedented explosion in the number of photographs taken worldwide. It is estimated that more than 1.4 trillion photos were taken in 2023, compared to roughly 86 billion in 2000. Almost all of this growth came from smartphones. The photographer Chase Jarvis captured the revolution perfectly with his celebrated phrase: \"The best camera is the one that's with you.\"",
    image: '/images/iphone_original.jpg',
    illustrations: [
      { url: '/images/iphone_original.jpg', caption: "The original iPhone (2007) on its dock — the device that transformed mobile photography" },
    ],
    category: 'milestone',
    era: 'smartphone',
  },
  {
    id: 'instagram-revolution',
    year: 2010,
    title: 'Instagram Transforms Photography',
    summary:
      "Kevin Systrom and Mike Krieger launch Instagram, a mobile photo-sharing app with built-in filters. Within months, Instagram redefined photographic aesthetics and created a new global visual culture.",
    content:
      "On 6 October 2010, Kevin Systrom and Mike Krieger launched Instagram on the Apple App Store. The application — available exclusively on iPhone — offered a concept of disarming simplicity: take a photograph, apply one of eleven available filters (inspired by the aesthetics of film and Polaroid), and share it with your followers. Within twenty-four hours, 25,000 people had downloaded the app. Within a year, Instagram counted ten million users.\n\nInstagram's filters — X-Pro II, Earlybird, Nashville, Valencia — became genuine aesthetic signatures. The square format imposed by the app (in homage to the Polaroid and the Hasselblad) created a creative constraint that unified and immediately identified Instagram images. An \"instagrammable\" aesthetic emerged: warm tones, soft contrasts, golden light, carefully staged everyday scenes.\n\nFacebook acquired Instagram in 2012 for one billion dollars — a sum considered extravagant at the time, derisory today. The platform opened to Android, added video, Stories, Reels, and surpassed one billion monthly active users. Instagram transformed photography into a social language: one no longer photographed solely to remember, but to communicate, to project a self-image, to participate in a worldwide visual conversation.\n\nInstagram's impact on professional photography is ambivalent. On one hand, the platform democratized distribution, allowing talented photographers to make themselves known without passing through traditional galleries and magazines. On the other, it contributed to a certain aesthetic uniformity and to the economic devaluation of images, drowned in the flood of billions of photos published each day. Instagram has also profoundly influenced tourism, gastronomy, fashion, and architecture — places, dishes, and buildings now conceived to be \"instagrammable.\"",
    image: '/images/instagram_logo_2016.svg',
        illustrations: [
      { url: '/images/instagram_logo_2016.svg', caption: "Instagram logo — the app that transformed photography into a social language" },
      { url: '/images/instagram_logo_2022.svg', caption: "Current Instagram logo — over two billion monthly active users" },
    ],
    category: 'digital',
    era: 'smartphone',
  },
  {
    id: 'sony-a7-hybride-plein-format',
    year: 2013,
    title: 'The Sony A7, First Full-Frame Mirrorless Camera',
    summary:
      "Sony launches the Alpha 7 (A7), the world's first mirrorless camera equipped with a full-frame 24 × 36mm sensor. This camera inaugurated a new category that would eventually supplant the traditional SLR.",
    content:
      "In October 2013, Sony presented the Alpha 7, the world's first mirrorless camera equipped with a full-frame 24.3-megapixel sensor. At the same time, Sony launched the A7R, carrying a 36.4-megapixel sensor without an anti-aliasing filter. These two bodies, remarkably compact for full-frame cameras, demonstrated that the future of high-end photography no longer necessarily belonged to the SLR.\n\nThe mirrorless principle consists of eliminating the reflex mirror and optical prism, replacing them with an electronic viewfinder (EVF) that displays in real time the image captured by the sensor. This mechanical simplification offers several advantages: the body is more compact and lighter, the shutter is silent, the viewfinder can display additional information (histogram, focus assist, exposure simulation), and focusing can be performed across the entire sensor surface.\n\nThe Sony A7 was not the first mirrorless camera — Panasonic and Olympus had offered Micro Four Thirds systems since 2008, and Fujifilm the X-Pro1 with its APS-C sensor since 2012 — but it was the first to offer a large full-frame sensor in a compact body. For professional photographers attached to the image quality and shallow depth of field of the full-frame format, this was a decisive argument.\n\nThe success of Sony forced the giants of photography to respond. Nikon launched the Z6 and Z7 in 2018, Canon the EOS R and RP in 2018–2019, Panasonic the S1 in 2019. Within a few years, the entire industry pivoted to mirrorless. The last professional SLRs (Nikon D6, Canon 1D X Mark III) were produced in the early 2020s, and manufacturers announced that all future development would focus exclusively on mirrorless systems. The reflex mirror, which had dominated photography for sixty years, made its final bow.",
    image: '/images/sony_a7.jpg',
    illustrations: [
      { url: '/images/sony_a7.jpg', caption: "Sony Alpha 7R IV — heir to the original A7, the world's first full-frame mirrorless camera" },
    ],
    category: 'camera',
    era: 'smartphone',
  },
  {
    id: 'double-capteur-iphone7plus',
    year: 2016,
    title: 'Dual-Camera Systems (iPhone 7 Plus)',
    summary:
      "Apple launches the iPhone 7 Plus with a dual camera combining a wide-angle lens and a telephoto lens. This multi-sensor system inaugurated a new era of computational photography on smartphones.",
    content:
      "In September 2016, Apple unveiled the iPhone 7 Plus, the first iPhone to feature two rear cameras. The primary module offered a 12-megapixel sensor with an f/1.8 wide-angle lens, while the second module — also 12 megapixels — carried an f/2.8 telephoto lens offering 2× optical zoom. But the true innovation lay in the software: by combining the data from both sensors, the iPhone could produce a background blur effect (bokeh) simulating that of a larger-sensor camera.\n\nThis \"Portrait\" mode, added via a software update some weeks after launch, used both sensors to construct a depth map of the scene. The primary subject was isolated and the background artificially blurred by an algorithm. The result, while imperfect (the algorithms struggled with hair, branches, and complex edges), was sufficiently convincing to delight millions of users.\n\nThe iPhone 7 Plus was not the first dual-camera smartphone — the HTC One M8 (2014) and the Huawei P9 (2016, with Leica optics) had preceded it. But Apple's enormous installed base and the effectiveness of its Portrait mode popularized the concept with the general public. Within a few years, the dual sensor became a triple, then a quadruple sensor, each module offering a different focal length (ultra-wide, standard, telephoto, macro).\n\nThis multi-sensor approach illustrates a fundamental shift in paradigm: in a smartphone, optics are constrained by the thinness of the body, but computing power is immense. Image quality no longer depends solely on glass and sensor, but increasingly on the software processing the data. We entered the era of computational photography, in which algorithmic processing matters as much as optical capture — a revolution that is still only beginning.",
    image: '/images/iphone7plus.jpg',
        illustrations: [
      { url: '/images/iphone7plus.jpg', caption: "iPhone 7 Plus — the first dual-camera iPhone, inaugurating the Portrait mode bokeh effect" },
    ],
    category: 'technique',
    era: 'smartphone',
  },
  {
    id: 'photo-computationnelle-night-sight',
    year: 2018,
    title: 'Computational Photography (Night Sight)',
    summary:
      "Google launches Night Sight on the Pixel 3, a feature that produces astonishingly bright and detailed night photographs through algorithmic processing. Computational photography surpasses the physical limits of miniature optics.",
    content:
      "In November 2018, Google deployed Night Sight, a software update for its Pixel smartphones that would astonish the photographic world. This feature allowed photographs to be taken in conditions of extremely low light — near-darkness — and to obtain sharp, colorful, and detailed images where a conventional camera would have produced nothing but a dark, noisy frame. The secret: an algorithm for multi-image fusion of remarkable sophistication.\n\nNight Sight silently captured up to fifteen consecutive images at slightly varying exposures, then aligned and merged them through a process called \"enhanced HDR+.\" The random noise present in each individual image was averaged out and suppressed by superimposition. Machine learning algorithms then adjusted white balance, enhanced detail, and corrected color to produce an image that appeared to have been taken in far better light.\n\nThe result was so impressive that it provoked a wave of comparisons with dedicated cameras. In certain night scenarios, the Google Pixel 3 with Night Sight produced better images than a full-frame SLR costing three thousand euros. Not because the smartphone sensor was superior — objectively it was far inferior — but because the software compensated for physical limitations with an algorithmic intelligence that traditional cameras did not possess.\n\nNight Sight illustrates the advent of computational photography, a domain in which image quality depends more on software than on hardware. Apple followed with Deep Fusion, Samsung with Nightography, Huawei with its own night algorithms. Within a few years, low-light photography — once the exclusive domain of large-sensor cameras and fast lenses — became accessible from any mid-range smartphone. It is perhaps the most spectacular demonstration of the power of computational processing applied to photography.",
    image: '/images/aurora_borealis.jpg',
        illustrations: [
      { url: '/images/aurora_borealis.jpg', caption: 'Aurora borealis captured using computational photography — the fusion of multiple exposures by algorithm' },
    ],
    category: 'technique',
    era: 'smartphone',
  },
  {
    id: 'capteurs-108-megapixels',
    year: 2020,
    title: '108-Megapixel Sensors',
    summary:
      "Samsung and Xiaomi introduce 108-megapixel sensors in smartphones, pushing the boundaries of mobile resolution. The pixel binning technique makes it possible to combine high resolution with good low-light performance.",
    content:
      "In February 2020, Samsung and Xiaomi marketed the first smartphones equipped with the Samsung ISOCELL Bright HM1 108-megapixel sensor. The Samsung Galaxy S20 Ultra and the Xiaomi Mi 10 Pro offered a raw resolution of 12,032 × 9,024 pixels, producing files of more than 30 MB — a resolution exceeding that of many professional cameras.\n\nBut raw resolution tells only part of the story. The individual pixels of a 108-megapixel sensor in a smartphone are minuscule — approximately 0.8 micrometers across, compared to 4 to 8 micrometers for a full-frame sensor. Pixels so small capture little light and are highly susceptible to noise. The solution is \"pixel binning\": in standard mode, the camera groups 9 pixels into 1 (a 3 × 3 configuration), producing a 12-megapixel image with virtual pixels of 2.4 micrometers. This compromise offers the best of both worlds: high resolution when light is abundant, good sensitivity in more demanding conditions.\n\nThe megapixel race on smartphones reached new heights with the Samsung ISOCELL HP1 at 200 megapixels in 2022, used in the Galaxy S23 Ultra. These titanic sensors are not mere marketing arguments: they permit acceptable-quality digital zoom (by cropping within the full-resolution image) and offer considerable flexibility in post-processing.\n\nThis escalation illustrates the specific nature of smartphone photography: constrained by the laws of physics (small sensor, miniature optics), it compensates through computing power and sensor design innovation. The result is a photographic instrument of breathtaking versatility that fits in a pocket — even if purists will note that a full-frame sensor with good lenses retains a qualitative advantage in demanding situations.",
    image: '/images/samsung_s20ultra.png',
        illustrations: [
      { url: '/images/samsung_s20ultra.png', caption: 'Samsung Galaxy S20 Ultra 5G — equipped with the 108-megapixel ISOCELL Bright HM1 sensor' },
    ],
    category: 'technique',
    era: 'smartphone',
  },
  {
    id: 'ia-photographie-generative',
    year: 2023,
    endYear: 2026,
    title: 'AI and Generative Photography',
    summary:
      "Generative artificial intelligence (DALL-E, Midjourney, Stable Diffusion) disrupts the very foundations of photography by making it possible to create photorealistic images from text descriptions. The boundary between photography and generated imagery dissolves.",
    content:
      "Between 2022 and 2026, the meteoric rise of generative artificial intelligence triggered a seismic event in the world of photography. Systems such as OpenAI's DALL-E (2022), Midjourney, and Stable Diffusion made it possible to generate photorealistic images from simple text descriptions (prompts). For the first time in history, it became possible to create a \"photograph\" without a camera, without light, without any physical subject before a lens.\n\nThe quality of AI-generated images advanced at vertiginous speed. In 2022, AI images were still identifiable by characteristic artifacts — deformed hands, illegible text, spatial incoherence. By 2024–2025, these flaws were largely corrected and generated images had become practically indistinguishable from genuine photographs for the untrained eye. AI images won photography competitions, provoking passionate debate about the very nature of photography.\n\nCamera and smartphone manufacturers rapidly integrated AI into their products. Generative eraser functions (replacing removed elements with generated content), frame extension, deblurring, and sky replacement became standard features. Samsung caused a scandal in 2024 when it was revealed that the \"Space Zoom\" feature on its Galaxy phones superimposed AI-generated details onto zoomed photographs, producing images that depicted detail absent from the original scene.\n\nThese developments raised fundamental questions: what is a photograph if it can be generated without real light? How does one distinguish truth from falsehood in a world of synthetic images? Is the profession of photographer under threat? Institutions responded: competitions created distinct categories for AI-generated images, metadata standards (C2PA) were developed to certify the authenticity of photographs, and laws requiring transparency about generated content were adopted. Photography entered an era in which the veracity of the image can no longer be taken for granted — a philosophical rupture as profound as the invention of the medium itself.",
    image: '/images/theatre_opera_spatial.png',
        illustrations: [
      { url: '/images/theatre_opera_spatial.png', caption: "\"Théâtre D'Opéra Spatial\" — image generated by Midjourney that won a prize at the Colorado State Fair (2022)" },
    ],
    category: 'digital',
    era: 'smartphone',
  },
]
