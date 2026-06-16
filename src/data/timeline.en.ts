import type { Era, TimelineEvent } from './timeline'

export const eras: Era[] = [
  {
    id: 'pionniers',
    name: 'The Pioneers',
    startYear: 1826,
    endYear: 1860,
    description:
      'The era of the pioneers marks the birth of photography, from the earliest experiments by Niépce to the studio daguerreotypes. It was a period of intense experimentation in which chemists, physicists, and artists joined forces to permanently capture light.',
    color: 'amber',
  },
  {
    id: 'collodion',
    name: 'The Collodion Age',
    startYear: 1851,
    endYear: 1880,
    description:
      'The wet collodion process revolutionized photography by delivering remarkably sharp images at reduced costs. This period witnessed the rise of studio portraiture, documentary photography, and the first attempts at color reproduction.',
    color: 'rose',
  },
  {
    id: 'democratisation',
    name: 'The Democratization',
    startYear: 1880,
    endYear: 1920,
    description:
      'Thanks to the innovations of George Eastman and the advent of flexible film, photography ceased to be the exclusive domain of professionals. The slogan "You press the button, we do the rest" embodied this revolution, placing the camera in the hands of the general public.',
    color: 'emerald',
  },
  {
    id: 'age-or',
    name: 'The Golden Age',
    startYear: 1920,
    endYear: 1960,
    description:
      'The interwar and postwar periods constitute the golden age of film photography. The Leica ushered in the 35mm era, photojournalism established itself as a major art form, and color became accessible through negative films and instant processes.',
    color: 'sky',
  },
  {
    id: 'revolution-slr',
    name: 'The SLR Revolution',
    startYear: 1960,
    endYear: 1990,
    description:
      'The single-lens reflex (SLR) camera became the standard, offering precise through-the-lens viewing and a range of interchangeable lenses. Autofocus, automatic exposure, and the first digital sensors foreshadowed a radical transformation of the medium.',
    color: 'violet',
  },
  {
    id: 'numerique',
    name: 'The Digital Era',
    startYear: 1990,
    endYear: 2010,
    description:
      'The shift to digital upended the entire photographic chain, from capture to print. Retouching software, high-resolution sensors, and online sharing redefined the practices of amateurs and professionals alike.',
    color: 'cyan',
  },
  {
    id: 'smartphone',
    name: 'The Smartphone Era',
    startYear: 2010,
    endYear: 2026,
    description:
      'The smartphone turned every individual into a potential photographer, while artificial intelligence and computational photography pushed the boundaries of what was possible. Social networks became the world\'s foremost exhibition gallery.',
    color: 'fuchsia',
  },
];

export const timelineEvents: TimelineEvent[] = [
  // ─── The Pioneers (1826–1860) ───────────────────────────────────────
  {
    id: 'niepce-premiere-photo',
    year: 1826,
    title: 'The First Photograph by Niépce',
    summary:
      'Joseph Nicéphore Niépce produced "View from the Window at Le Gras," considered the oldest known surviving photograph. This heliograph on a tin plate coated with bitumen of Judea required an exposure lasting several days.',
    content:
      'In 1826, at his estate in Saint-Loup-de-Varennes in Burgundy, Joseph Nicéphore Niépce succeeded in permanently fixing the image formed by light inside a camera obscura. "View from the Window at Le Gras" depicts the view from his workshop window: the rooftops of surrounding buildings, a tree, and a sliver of sky. This modest-looking image constitutes the founding act of photography.\n\nThe process Niépce employed, which he called "heliography" (writing with sunlight), relies on the light sensitivity of bitumen of Judea. This substance, spread onto a polished tin plate, hardens where exposed to light and remains soluble in lavender oil where it has been shielded from it. After an exposure estimated at between eight hours and several days, the plate was washed to reveal the image.\n\nNiépce had been working on this problem since the early 1810s, initially motivated by a desire to reproduce engravings without the intervention of a draftsman. His earliest attempts used silver chloride, but the resulting images darkened rapidly when exposed to light. It was by turning to bitumen of Judea that he finally achieved permanent results.\n\nThe original plate of "View from the Window at Le Gras" is now preserved at the University of Texas at Austin. Long forgotten, it was rediscovered in 1952 by the historian Helmut Gernsheim. This foundational image, though blurry and rudimentary by today\'s standards, represents the culmination of centuries of research into fixing optical images and paved the way for the invention of modern photography.',
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
    title: 'The Calotype by William Henry Fox Talbot',
    summary:
      'William Henry Fox Talbot developed the calotype, the first negative-positive photographic process. This pivotal invention made it possible, for the first time, to reproduce a single image an unlimited number of times from one negative.',
    content:
      'In 1835, at his manor of Lacock Abbey in England, William Henry Fox Talbot produced his first "photogenic drawings" by placing objects, leaves, lace, feathers, on paper sensitized with silver chloride. Though rudimentary, these experiments laid the foundations for a revolutionary process he would later perfect under the name calotype (from the Greek kalos, meaning "beautiful").\n\nThe calotype, patented in 1841, represented a major conceptual advance over the daguerreotype: it produced a paper negative from which an unlimited number of positive prints could be made. The paper was first coated with silver iodide, then, just before exposure, sensitized with gallo-nitrate of silver. After an exposure of only a few minutes, a latent image appeared, which was then developed with gallic acid.\n\nWhile the daguerreotype offered incomparable precision of detail, the calotype possessed a distinctive aesthetic charm: the texture of the paper lent the images a softness reminiscent of charcoal drawing or watercolor. This quality appealed to many artistic photographers, notably David Octavius Hill and Robert Adamson in Scotland, who produced portraits of remarkable sensitivity.\n\nThe historical importance of the calotype lies in its introduction of the negative-positive principle, which would remain the foundation of film photography for over 150 years, until the advent of digital imaging. In inventing this process, Talbot not only created a photographic technique but also established the conceptual framework for the mechanical reproduction of images that would define the modern era of visual communication.',
    image: '/images/talbot_lacock.jpg',
    illustrations: [
      { url: '/images/calotype_pencil_of_nature.jpg', caption: 'Page from "The Pencil of Nature" (1844), the first book illustrated with photographs' },
    ],
    category: 'invention',
    era: 'pionniers',
  },
  {
    id: 'daguerreotype-1839',
    year: 1839,
    title: 'The Daguerreotype, Official Announcement',
    summary:
      'On August 19, 1839, the French Academy of Sciences unveiled the daguerreotype to the entire world. This process, invented by Louis Daguerre and offered to humanity by the French government, marks the official birth of photography.',
    content:
      'August 19, 1839, remains etched in history as the official birthday of photography. Before a joint assembly of the Academy of Sciences and the Academy of Fine Arts in Paris, François Arago, a politician and physicist, presented the details of the daguerreotype, a process developed by Louis-Jacques-Mandé Daguerre. The French government, recognizing the universal importance of this invention, had acquired the patent in order to offer it "free to the whole world", a decision of remarkable generosity.\n\nThe daguerreotype produced a unique image of stunning sharpness on a copper plate coated with polished silver, smooth as a mirror. The process involved exposing the plate to iodine vapor to make it light-sensitive, then placing it inside a camera obscura. After an exposure lasting several minutes, the latent image was revealed by mercury vapor and fixed with sodium thiosulfate (discovered by John Herschel).\n\nThe announcement triggered a veritable "daguerreotypomania" across the globe. Within months, daguerreotype studios opened in every major capital. The process captivated the public with the extraordinary fineness of its detail: under a magnifying glass, one could distinguish the bricks of a building, the leaves of a tree, the letters of a shop sign. The bourgeoisie rushed to have their portraits made, a luxury previously reserved for those who could afford the services of a painter.\n\nDaguerre himself had begun as a scenic painter and inventor of the diorama, a popular optical-illusion spectacle in Paris. His partnership with Niépce from 1829 onward, and the continuation of their shared research after the latter\'s death in 1833, culminated in this process that would forever transform our relationship with images and memory.',
    image: '/images/boulevard_du_temple.jpg',
    illustrations: [
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
      'Advances in optics and chemistry finally reduced exposure times enough to produce portraits. Robert Cornelius in Philadelphia and Parisian studios ushered in the era of photographic portraiture.',
    content:
      'From the moment the daguerreotype was presented in 1839, the dream of capturing the human face through photography fired the imagination. But the initial exposure times, on the order of fifteen to thirty minutes in full sunlight, made portraiture virtually impossible: no one could remain perfectly still for that long. It was Robert Cornelius, a silversmith and amateur chemist from Philadelphia, who produced one of the very first photographic self-portraits in late 1839, taking advantage of an improved lens.\n\nIn 1840, refinements introduced simultaneously by several inventors made commercial portraiture viable. The use of silver bromide in addition to silver iodide dramatically increased plate sensitivity. The Viennese optician Josef Petzval designed an f/3.6 lens that admitted sixteen times more light than Daguerre\'s. Exposure times fell to one or two minutes, then to mere seconds.\n\nPortrait studios then multiplied at a staggering pace. In Paris, ateliers installed on rooftops, their glass ceilings flooding the space with natural light, became hubs of bourgeois sociability. The portraitist had to master both the chemistry and the art of staging: choosing the backdrop, arranging props, posing the sitter. Hidden head braces behind the subjects kept them motionless.\n\nThe photographic portrait profoundly transformed social relations. For the first time in history, the middle class could preserve a faithful likeness of their loved ones, a privilege once reserved for the aristocracy. Family daguerreotypes became cherished objects, encased in velvet-and-leather cases to be carried on one\'s person or displayed in the parlor.',
    image: '/images/robert_cornelius.jpg',
    illustrations: [
      { url: '/images/victorian_daguerreotype.jpg', caption: 'A Victorian couple posing for a daguerreotype in the 1840s' },
    ],
    category: 'milestone',
    era: 'pionniers',
  },
  {
    id: 'premiere-photo-reportage',
    year: 1842,
    title: 'The First News Photograph',
    summary:
      'The great fire of Hamburg in May 1842 was documented by daguerreotypes, constituting one of the earliest examples of news photography. These images revealed the documentary potential of the new medium.',
    content:
      'In May 1842, a devastating fire ravaged the center of Hamburg for four days, destroying over 1,700 buildings and leaving thousands homeless. Among the witnesses to this catastrophe, the daguerreotypists Carl Ferdinand Stelzner and Hermann Biow conceived the idea of documenting the still-smoldering ruins. Their images constitute one of the earliest known examples of news photography, the use of the medium to bear witness to a current event.\n\nThe daguerreotypes made after the fire show gutted facades, the rubble of churches and public buildings, and devastated streets. Unlike press engravings, which invariably interpret and embellish reality, these images offered a raw and irrefutable testimony. The power of documentary photography was revealed for the first time: confronted with the photographic image, the viewer could no longer doubt what they saw.\n\nThis documentary use of the daguerreotype opened a path that would be widely followed in the decades ahead. As early as the Mexican-American War (1846–1848), daguerreotypists accompanied the troops. But it was above all the Crimean War (1854–1855), covered by Roger Fenton, and the American Civil War (1861–1865), documented by Mathew Brady and his assistants, that would consecrate photography as a major tool of historical documentation.\n\nThe daguerreotypes of the Hamburg fire, though few in number and modest in execution, laid the first stone of a tradition that would give birth to modern photojournalism. They illustrate a fundamental truth: photography is not merely an art of portraiture and landscape, but also, and above all, an art of bearing witness.',
    image: '/images/hamburg_1842.jpg',
    illustrations: [],
    category: 'milestone',
    era: 'pionniers',
  },
  {
    id: 'mission-heliographique',
    year: 1851,
    title: 'The Heliographic Mission in France',
    summary:
      'The French government commissioned five photographers to produce a systematic inventory of endangered historic monuments. This pioneering mission established photography as a tool for heritage documentation.',
    content:
      'In 1851, the Commission des Monuments historiques, led by Prosper Mérimée, entrusted five photographers with the task of documenting medieval and Renaissance buildings across France that were threatened by deterioration or destruction. Édouard Baldus, Hippolyte Bayard, Gustave Le Gray, Henri Le Secq, and Auguste Mestral traversed the country with their cumbersome equipment to produce hundreds of images of cathedrals, abbeys, castles, and ancient bridges.\n\nThis "Mission Héliographique" was the first official photographic commission by a state. It was born of a visionary conviction: photography could safeguard the memory of an architectural heritage in peril, with a fidelity and comprehensiveness that drawing could not match. Each photographer was assigned an itinerary covering a specific region of France.\n\nThe results were remarkable on both documentary and aesthetic grounds. Gustave Le Gray, in particular, produced images of striking beauty, masterfully playing with raking light across the sculpted stone of cathedrals. Henri Le Secq meticulously documented the portals and stained-glass windows of Strasbourg Cathedral. Édouard Baldus produced panoramic views of astonishing architectural precision.\n\nParadoxically, the calotypes from the Heliographic Mission were never published during their creators\' lifetimes, the Commission archived them without disseminating them. It would take until the twentieth century for their artistic and historical value to be fully recognized. Now preserved at the Médiathèque de l\'Architecture et du Patrimoine, these images constitute an invaluable treasure and the model for all heritage photography campaigns that followed.',
    image: '/images/le_gray_moissac.jpg',
    illustrations: [],
    category: 'movement',
    era: 'pionniers',
  },

  // ─── The Collodion Age (1851–1880) ──────────────────────────────────
  {
    id: 'collodion-humide',
    year: 1851,
    title: 'Frederick Scott Archer Invents the Wet Collodion Process',
    summary:
      'The wet collodion process on glass plates combined the sharpness of the daguerreotype with the reproducibility of the calotype. Left unpatented, it spread with lightning speed and dominated photography for three decades.',
    content:
      'In March 1851, the English sculptor and photographer Frederick Scott Archer published in the journal The Chemist the details of a new photographic process: wet collodion. The principle involved dissolving guncotton (nitrocellulose) in a mixture of ether and alcohol, then pouring this viscous solution onto a glass plate. The plate was then sensitized in a bath of silver nitrate and exposed while still wet, hence the name of the process.\n\nThe advantages of wet collodion were considerable. Like the daguerreotype, it offered exceptional sharpness and richness of detail thanks to the perfectly smooth glass support. Like the calotype, it produced a negative from which an unlimited number of positive prints could be made on albumen paper. Moreover, its sensitivity was far superior to that of both preceding processes, reducing exposure times to just a few seconds.\n\nArcher, with a generosity that would cost him dearly, refused to patent his invention. The process therefore spread freely around the world, rapidly supplanting both the daguerreotype and the calotype. Within a few years, wet collodion became the universal standard of photography. Its principal constraint, the plate had to be prepared, exposed, and developed within ten to fifteen minutes, before the collodion dried, obliged outdoor photographers to transport a veritable portable darkroom.\n\nDespite this logistical inconvenience, the wet collodion process engendered a golden age of photography. Intrepid pioneers transported their heavy equipment onto the battlefields of Crimea, to the summits of the Alps, into the ruins of ancient Egypt, and across the American West. Frederick Scott Archer himself died in poverty in 1857, having never derived the slightest financial profit from his revolutionary invention.',
    image: '/images/collodion_humide.jpg',
    illustrations: [
      { url: '/images/wet_plate_demo.jpg', caption: 'Modern demonstration of the wet plate collodion process on glass' },
    ],
    category: 'invention',
    era: 'collodion',
  },
  {
    id: 'carte-de-visite-disderi',
    year: 1854,
    title: 'Disdéri and the Carte de Visite',
    summary:
      'André-Adolphe-Eugène Disdéri patented a multi-lens camera that produced eight portraits on a single plate. The photographic "carte de visite" became a social phenomenon that democratized portraiture.',
    content:
      'In 1854, the Parisian photographer André-Adolphe-Eugène Disdéri filed a patent for a camera equipped with four, then eight lenses, capable of producing that many small portraits on a single collodion plate. Each print, measuring approximately 6 by 9 centimeters, was mounted on a card the size of a visiting card. The cost of a portrait dropped spectacularly: where a daguerreotype cost 50 to 100 francs, Disdéri offered his cards at 20 francs per dozen.\n\n"Cartomania" truly exploded in 1859, when Napoleon III, en route to Italy at the head of his troops, halted his column outside Disdéri\'s studio to have his photograph taken. The anecdote swept through Paris and the carte de visite became the indispensable social accessory. People exchanged portraits much as we exchange contacts on social networks today. Special albums were manufactured for collecting cartes de visite of one\'s friends and family, but also those of celebrities, sovereigns, actors, writers, which sold by the thousands.\n\nDisdéri did not merely innovate technically: he also transformed the staging of the portrait. Where the daguerreotype imposed rigidity, he introduced relaxed poses, elaborate sets with columns, curtains, and furniture, and above all the full-length portrait, which allowed the display of clothing, a crucial element of social distinction at the time.\n\nThe carte de visite represents the first true democratization of the photographic portrait. Between 1860 and 1870, hundreds of millions of cartes de visite are estimated to have been produced worldwide. Paradoxically, Disdéri, like Archer before him, ended up ruined: a victim of the fierce competition he himself had unleashed, he died at the Hôpital de la Charité in 1889.',
    image: '/images/disderi_carte_visite.jpg',
    illustrations: [
      { url: '/images/dickens_carte_visite.jpg', caption: 'Charles Dickens photographed as a carte de visite, circa 1865' },
    ],
    category: 'technique',
    era: 'collodion',
  },
  {
    id: 'premiere-photo-couleur',
    year: 1861,
    title: 'The First Color Photograph',
    summary:
      'Physicist James Clerk Maxwell demonstrated the principle of additive color synthesis by projecting three images filtered in red, green, and blue. This pioneering experiment paved the way for all future color photography.',
    content:
      'On May 17, 1861, during a lecture at the Royal Institution in London, the Scottish physicist James Clerk Maxwell presented the first color photograph in history. The subject was a modest tartan ribbon, but the method employed was of remarkable theoretical elegance and would underpin all color photography to come.\n\nMaxwell applied his own theory of trichromatic vision: any color can be reproduced by a mixture of three fundamental lights, red, green, and blue. He asked the photographer Thomas Sutton to make three exposures of the same ribbon through three different color filters. The three negatives were then printed as positive transparencies on glass, and each was projected onto a screen through the corresponding filter. The superimposition of the three projections reconstituted the original colors.\n\nFrom a strictly chemical standpoint, the experiment should not have worked as well as it did: the emulsions of the era, sensitive primarily to blue and ultraviolet light, could not properly record red or green. Later research showed that certain dyes in the tartan reflected ultraviolet light, producing, by a fortunate accident, an acceptable color separation.\n\nMaxwell\'s experiment nonetheless remains fundamental because it established the very principle of color reproduction through additive synthesis. This principle would be exploited half a century later by the Lumière brothers in their Autochrome process, and it remains the basis of all modern screens and digital sensors. Every pixel in your smartphone decomposes and recomposes light according to exactly the principle Maxwell demonstrated in 1861.',
    image: '/images/tartan_ribbon.jpg',
    illustrations: [],
    category: 'invention',
    era: 'collodion',
  },
  {
    id: 'gelatino-bromure',
    year: 1871,
    title: 'Invention of the Gelatin Silver Bromide Plate',
    summary:
      'Richard Leach Maddox proposed replacing collodion with gelatin as a binder for silver salts. This pivotal innovation allowed plates to be prepared in advance and opened the way to instantaneous photography.',
    content:
      'In 1871, the English physician and amateur photographer Richard Leach Maddox published an article in the British Journal of Photography describing a new process: the suspension of silver bromide in a gelatin emulsion, spread onto a glass plate. This seemingly modest innovation would radically transform photographic practice by solving the principal drawback of wet collodion: the obligation to prepare and expose the plate within a very short timeframe.\n\nGelatin silver bromide plates could be prepared well in advance, stored dry, and developed at the photographer\'s convenience. No more need to transport a portable darkroom! Moreover, gelatin, unlike collodion, could be heated ("ripened"), which dramatically increased the emulsion\'s sensitivity. Exposure times dropped from several seconds to fractions of a second.\n\nThese characteristics paved the way for the industrialization of photography. By the late 1870s, manufacturers such as the Britannia Works Company began producing ready-made dry plates in series. The photographer no longer needed to master chemistry: one simply bought plates, exposed them, and had them developed. The separation between the manufacture of the sensitive material and the act of taking a photograph was complete.\n\nThe gelatin dry plate also made action photography possible. Ultra-short exposure times allowed photographers to "freeze" motion, a capability that would fascinate pioneers like Eadweard Muybridge and Étienne-Jules Marey. It was also this technology that made flexible celluloid film conceivable, since gelatin could be coated onto any support, including a flexible strip. Richard Leach Maddox had thus laid, without knowing it, the foundations of all modern photography.',
    image: '/images/gelatino_plaque.jpg',
    illustrations: [],
    category: 'invention',
    era: 'collodion',
  },
  {
    id: 'muybridge-mouvement',
    year: 1878,
    title: 'Muybridge and the Decomposition of Motion',
    summary:
      'Eadweard Muybridge used a battery of twelve cameras to decompose the gallop of a horse, proving that all four hooves leave the ground simultaneously. His work prefigured the invention of cinema.',
    content:
      'In June 1878, on the training track of Leland Stanford\'s stud farm in Palo Alto, California, the British photographer Eadweard Muybridge achieved a technical feat that would upend our understanding of movement. Commissioned by the millionaire Leland Stanford to settle a debate among horsemen, does a galloping horse ever have all four hooves off the ground at once?, Muybridge set up twelve cameras along the track, each triggered by a thread stretched across the horse\'s path.\n\nThe results were stunning. The photographs irrefutably proved that yes, a galloping horse does experience a moment of total suspension, but not at all in the "legs splayed" posture that painters had depicted for centuries. The animal tucks all four legs beneath its belly, in a position the human eye is incapable of perceiving. Photography thus revealed a truth invisible to direct observation.\n\nEncouraged by this success, Muybridge embarked on a colossal project: the systematic decomposition of human and animal movement. Between 1884 and 1886, at the University of Pennsylvania, he produced more than 100,000 sequential photographs showing men, women, and animals walking, running, jumping, dancing, throwing, and lifting. The collection was published in 1887 in the monumental work "Animal Locomotion," containing 781 plates.\n\nTo animate his sequences, Muybridge invented the zoopraxiscope, a projection device that displayed images in rapid succession, creating the illusion of movement. This apparatus, first demonstrated in 1879, is considered one of the direct ancestors of the cinematograph. Muybridge\'s work profoundly influenced artists, notably Marcel Duchamp and Francis Bacon, and directly inspired Étienne-Jules Marey and Thomas Edison in their research on moving images.',
    image: '/images/horse_in_motion_anim.gif',
    illustrations: [
      { url: '/images/zoopraxiscope_anim.gif', caption: "Muybridge's zoopraxiscope animation, reconstructing the horse's gallop" },
    ],
    category: 'technique',
    era: 'collodion',
  },

  // ─── The Democratization (1880–1920) ───────────────────────────────────
  {
    id: 'kodak-n1-eastman',
    year: 1888,
    title: 'George Eastman Launches the Kodak No. 1',
    summary:
      'George Eastman marketed the Kodak No. 1, a simple camera preloaded with film for 100 exposures. With the slogan "You press the button, we do the rest," he opened photography to the general public.',
    content:
      'In 1888, the American industrialist George Eastman launched a product that would transform photography from an art reserved for specialists into a popular pastime: the Kodak No. 1. This box-shaped camera, sold for 25 dollars (a substantial but middle-class-accessible sum), was preloaded with a roll of film sufficient for 100 circular photographs measuring 6.5 centimeters in diameter.\n\nEastman\'s commercial genius lay in an entirely new concept: the complete separation of picture-taking from processing. Once all 100 exposures had been made, the customer returned the entire camera to the Kodak factory in Rochester, New York. The factory developed the film, made prints, reloaded the camera with fresh film, and sent everything back for 10 dollars. The slogan was crystalline: "You press the button, we do the rest."\n\nThis business model, a forerunner of the "razor and blades" approach practiced by many companies today, revolutionized the photographic industry. It was no longer necessary to understand chemistry, master exposure times, or possess a darkroom. Anyone could now photograph their family, their travels, their everyday moments. Amateur photography was born.\n\nThe word "Kodak" itself was an invention of Eastman\'s, who wanted a name that was short, distinctive, impossible to mispronounce in any language, and resembling no existing word. This name would become one of the most famous in the world, synonymous with photography itself for over a century. Eastman\'s vision, putting photography within everyone\'s reach, anticipated by a century the smartphone revolution: making the act of photographing as simple and natural as possible.',
    image: '/images/kodak_no1.jpg',
    illustrations: [],
    category: 'camera',
    era: 'democratisation',
  },
  {
    id: 'film-souple-celluloid',
    year: 1889,
    title: 'Flexible Celluloid Film',
    summary:
      'George Eastman developed the first flexible photographic film on a celluloid base, replacing heavy and fragile glass plates. This innovation made both portable photography and cinema possible.',
    content:
      'In 1889, the Eastman Kodak company introduced the first truly flexible photographic film, consisting of a gelatin silver bromide emulsion deposited on a transparent and flexible celluloid (cellulose nitrate) base. This innovation, which seems unremarkable today, represented a tremendous technological leap: it freed photography from glass.\n\nUntil then, glass plates had been the only support offering the transparency and flatness needed for a quality negative. But they were heavy, fragile, and cumbersome. A traveling photographer had to carry dozens of plates, each protected in an individual holder. Flexible film, by contrast, could be wound on a spool: a hundred exposures weighed just a few grams and fit in a pocket.\n\nFlexible film also transformed camera design. Bodies could now be much smaller and lighter, since they no longer had to accommodate a rigid plate holder for each exposure. A film-advance mechanism, operated by a simple knob, allowed rapid successive exposures. This was the indispensable technical precondition that would lead to the miniature cameras of the 1920s and 1930s.\n\nBut the most resounding impact of flexible film may lie outside still photography. Thomas Edison and his assistant William Kennedy Dickson immediately seized upon this innovation to create the kinetoscope (1891) and then the kinetograph, the earliest devices for capturing and projecting moving images. Without Eastman\'s flexible film, cinema as we know it could simply not have existed. Photography and cinema are, in this respect, two branches of the same technological tree.',
    image: '/images/film_35mm.jpg',
    illustrations: [],
    category: 'invention',
    era: 'democratisation',
  },
  {
    id: 'brownie-kodak',
    year: 1900,
    title: 'The Kodak Brownie',
    summary:
      'Kodak launched the Brownie, a camera sold for one dollar and within reach of every budget. This small cardboard box triggered a veritable cultural revolution by making photography accessible to children and modest families.',
    content:
      'In February 1900, Kodak launched the Brownie, a camera of extreme simplicity sold at the negligible price of one dollar. The body, a reinforced cardboard box covered in imitation leather, was fitted with a simple meniscus lens and a rotary shutter. It used Kodak\'s No. 117 roll film, which cost 15 cents for six exposures. The name "Brownie," inspired by the little elves illustrated by Palmer Cox in children\'s books, clearly indicated the intended audience: the young.\n\nThe success was immediate and phenomenal. Kodak sold 150,000 Brownies in the first year alone. For the first time, photography was no longer a luxury or even a pastime of the comfortable middle class: it became accessible to almost everyone. Working-class families could now document baptisms, communions, holidays, and everyday moments. An entire stratum of social history, hitherto invisible, began to be recorded.\n\nThe Brownie also inaugurated the concept of a low-cost "photographic system": the camera was sold at or near cost, while profits came from the ongoing sale of film and development services. This business model would be Kodak\'s throughout the twentieth century and would inspire countless companies in other industries.\n\nThe Brownie range evolved over the decades, spawning dozens of different models through 1986. Certain iconic versions, such as the Brownie Hawkeye (1949) or the Brownie Starflash (1957), accompanied entire generations of Americans and Europeans in their introduction to photography. In total, tens of millions of Brownies were sold, making the line one of the greatest commercial successes in the history of photography.',
    image: '/images/kodak_brownie.jpg',
    illustrations: [],
    category: 'camera',
    era: 'democratisation',
  },
  {
    id: 'autochrome-lumiere',
    year: 1907,
    title: 'The Lumière Autochrome',
    summary:
      'Brothers Auguste and Louis Lumière commercialized the Autochrome, the first truly practical color photography process. Based on microscopic grains of dyed potato starch, it offered the world images of dreamlike beauty.',
    content:
      'On June 10, 1907, the Lumière brothers officially presented the Autochrome to the Parisian press, and the process went on sale on September 1. It was the first color photography system simple and reliable enough to be used by knowledgeable amateurs. The enthusiasm was immense: the photographer Alfred Stieglitz declared that "color is now an accomplished fact."\n\nThe principle of the Autochrome was remarkably ingenious. A glass plate was covered with a mosaic of millions of microscopic grains of potato starch, dyed orange, green, and violet, the three complementary colors of red, blue, and green. These grains, with an average diameter of 15 micrometers, acted as countless tiny color filters. A layer of panchromatic black-and-white emulsion was applied on top. During exposure, light first passed through the starch mosaic, which selected the colors, before striking the emulsion.\n\nAfter reversal processing (to obtain a direct positive), each starch grain allowed through the color it had filtered, reconstituting the color image when the plate was viewed by transmitted light or projected. The result was of a singular beauty: the colors were soft, slightly pointillistic, evoking Impressionist paintings. Autochromes possess a nostalgic charm that modern color photography, more faithful but cooler, has never quite recaptured.\n\nThe Autochrome enjoyed considerable success, particularly among Pictorialist photographers and wealthy amateurs. Albert Kahn used it for his monumental "Archives of the Planet" project, sending photographers to document in color the peoples and landscapes of the entire world. Over 72,000 Autochromes were produced for this project between 1909 and 1931. The Autochrome would remain the dominant color process until the introduction of Kodachrome in 1935.',
    image: '/images/autochrome.jpg',
    illustrations: [],
    category: 'invention',
    era: 'democratisation',
  },
  {
    id: 'ur-leica-prototype',
    year: 1913,
    title: 'The First Leica Prototype (Ur-Leica)',
    summary:
      'Oskar Barnack, an engineer at Leitz, built a small camera using standard 35mm cinema film. This prototype, the Ur-Leica, inaugurated the era of miniature photography and would forever change the practice of the medium.',
    content:
      'In 1913, Oskar Barnack, an asthmatic engineer working for the optical firm Ernst Leitz in Wetzlar, Germany, built a small camera using standard 35mm motion picture film. His idea was simple yet revolutionary: instead of carrying the heavy large-format equipment of the day, why not use a small 24 by 36 mm negative and enlarge it during printing? This prototype, known today as the Ur-Leica, fit in the palm of the hand.\n\nBarnack was initially motivated by personal reasons: his asthma made it painful to carry the medium- and large-format cameras of the era, which weighed several kilograms with their tripods. He envisioned a camera that would fit in a coat pocket and allow hand-held photography, without a tripod, using available light.\n\nThe 35mm film, invented by Thomas Edison for cinema in 1892, had the advantage of being readily available and inexpensive. Barnack simply doubled the height of the standard cinema frame (18 by 24 mm) to obtain his 24 by 36 mm format, thus providing sufficient area for enlargements of acceptable quality. He designed a very fast 42mm lens and a precise focal-plane shutter.\n\nWorld War I interrupted the project\'s development. It would not be until 1925 that the Leica I (from LEItz CAmera) was finally brought to market. But as early as 1913, the two Ur-Leica specimens that Barnack used personally demonstrated the potential of the small format. The photographs he made in Wetzlar during the flooding of the Lahn River in 1920 were of remarkable quality and proved that the future of photography lay in miniaturization.',
    image: '/images/leica_i.jpg',
    illustrations: [],
    category: 'camera',
    era: 'democratisation',
  },
  {
    id: 'photo-grande-guerre',
    year: 1914,
    endYear: 1918,
    title: 'Photography During the Great War',
    summary:
      'World War I saw the massive use of photography for military, documentary, and propaganda purposes. Images from the trenches revealed to the world the horror of modern industrial warfare.',
    content:
      'The Great War of 1914–1918 marked a turning point in the history of war photography. For the first time, a conflict was documented systematically and on a massive scale, both by the photographic services of the armies and by the soldiers themselves. Aerial photography, in particular, became a military tool of primary importance for reconnaissance and mapping of enemy positions.\n\nEvery belligerent army created official photographic sections. The Section Photographique de l\'Armée (SPA), established in France in 1915, employed dozens of photographers and cinematographers. These images, carefully controlled by censors, served simultaneously as documentation, propaganda tools, and historical records. Operators like Pierre-Ambroise Richebé and Albert Moreau risked their lives on the front to capture the reality of combat.\n\nAlongside official images, millions of soldiers carried their personal cameras into the trenches, often Vest Pocket Kodaks, small enough to slip into a kit bag. These "soldier snapshots," long overlooked, now constitute an invaluable record of daily life at the front: the mud, the waiting, the comrades, the ruins, the moments of respite. They offer an intimate, unfiltered perspective that official photographers did not show.\n\nThe Great War also accelerated the development of aerial photography. In 1914, reconnaissance was carried out with the naked eye from balloons and airplanes. By 1915, specially designed cameras were mounted on aircraft, and the interpretation of aerial photographs became a military discipline in its own right. This expertise would be transferred after the war to the civilian fields of cartography, urban planning, and archaeology.',
    image: '/images/ww1_trench.jpg',
    illustrations: [
      { url: '/images/deserted_trench_ww1.jpg', caption: 'A deserted trench during World War I' },
    ],
    category: 'movement',
    era: 'democratisation',
  },

  // ─── The Golden Age (1920–1960) ──────────────────────────────────────────
  {
    id: 'leica-i-commercial',
    year: 1925,
    title: 'Commercial Launch of the Leica I',
    summary:
      'After years of hesitation, Ernst Leitz decided to market the 35mm camera designed by Oskar Barnack. The Leica I inaugurated the era of modern reportage photography and inspired a lineage of legendary cameras.',
    content:
      'In 1925, at the Leipzig trade fair, the firm Ernst Leitz of Wetzlar officially presented the Leica I (Leitz Camera), a compact camera using 35mm cinema film. The decision to bring it to market had been made by Ernst Leitz II in 1924, during a meeting that has become famous as the "Leica-Entscheidung" (the Leica decision), despite reservations from some colleagues who doubted the commercial potential of the small format.\n\nThe Leica I was a jewel of mechanical engineering: a compact metal body weighing less than 400 grams, equipped with a focal-plane shutter offering speeds from 1/20 to 1/500 of a second. Its Elmar 50mm f/3.5 lens, computed by Max Berek, delivered exceptional optical quality for such a small format. The 35mm film allowed 36 exposures per loading, compared to 8 to 16 for the medium-format cameras of the day.\n\nThe impact on photographic practice was immense. The Leica made it possible, for the first time, to photograph in a truly spontaneous manner, in the street, in crowds, in low light, without attracting attention. A new aesthetic emerged, founded on immediacy, bold framing, and proximity to the subject. Photographers such as André Kertész, then Henri Cartier-Bresson, Robert Capa, and many others would make the Leica their instrument of choice.\n\nThe Leica also spawned a veritable dynasty of cameras. The Leica II (1932) added a coupled rangefinder, the Leica III (1933) expanded the range of speeds. These cameras were produced in hundreds of thousands and imitated by dozens of manufacturers worldwide, notably in Japan (Canon, Nikon) and the USSR (FED, Zorki). The 24 by 36 mm format, born of Oskar Barnack\'s intuition, would become the universal standard of photography for the rest of the century.',
    image: '/images/leica_i.jpg',
    illustrations: [],
    category: 'camera',
    era: 'age-or',
  },
  {
    id: 'magazine-life',
    year: 1936,
    title: 'LIFE Magazine and Photojournalism',
    summary:
      'The launch of LIFE magazine by Henry Luce marked the advent of photojournalism as a major form of expression. The magazine published grand visual narratives that informed and moved millions of American readers.',
    content:
      'On November 23, 1936, the first issue of LIFE magazine appeared on American newsstands with a cover photograph by Margaret Bourke-White showing the Fort Peck Dam in Montana. The magazine\'s mission, as defined by its founder Henry Luce, was ambitious: "To see life; see the world; to eyewitness great events." LIFE embodied the apotheosis of photojournalism, a narrative form that used photography not as mere illustration but as the primary language of storytelling.\n\nThe success of LIFE was staggering: the initial print run of 466,000 copies sold out within hours. Within a few years, the magazine reached a circulation of several million copies per week. Its formula relied on grand "photo-essays" spanning multiple pages, entrusted to the finest photographers in the world: Margaret Bourke-White, Alfred Eisenstaedt, W. Eugene Smith, Gordon Parks, Robert Capa.\n\nLIFE did not emerge from nowhere. It drew on a tradition inaugurated in Germany by the magazines Berliner Illustrirte Zeitung and Münchner Illustrierte Presse in the 1920s, where picture editors like Stefan Lorant invented the concept of the photographic narrative. The rise of the Nazis drove many European journalists and photographers into exile in the United States, where they contributed to the growth of American photojournalism.\n\nThe influence of LIFE on the visual culture of the twentieth century is immeasurable. The magazine helped shape public opinion on the great events of the age: World War II, the civil rights movement, the space race, the Vietnam War. Certain images published in LIFE, the victory kiss in Times Square, the napalm girl, the earthrise seen from the Moon, became universal icons that transcend journalism and have inscribed themselves in the collective memory of humanity.',
    image: '/images/life_magazine_logo.svg',
    illustrations: [
      { url: '/images/bourke_white.jpg', caption: 'Margaret Bourke-White (1955), star photographer of LIFE magazine' },
      { url: '/images/eisenstaedt.jpg', caption: 'Alfred Eisenstaedt in New York (1954), iconic LIFE photographer' },
    ],
    category: 'movement',
    era: 'age-or',
  },
  {
    id: 'exakta-premier-slr-35mm',
    year: 1936,
    title: 'The Exakta, First 35mm SLR',
    summary:
      'The Ihagee Exakta, manufactured in Dresden, was the first single-lens reflex (SLR) camera to use 35mm film. It laid the foundations for a category of cameras that would dominate photography for half a century.',
    content:
      'In 1936, the Ihagee company of Dresden, Germany, launched the Kine Exakta, the first single-lens reflex (SLR) camera in 35mm format. The reflex principle, a mirror set at 45 degrees that redirects the image formed by the lens toward a focusing screen, had been known since the nineteenth century for large-format cameras, but adapting it to the small 35mm format posed a considerable technical challenge.\n\nThe fundamental advantage of the SLR is that the photographer sees exactly what the lens "sees." Unlike rangefinder cameras such as the Leica, there is no parallax offset between the viewfinder and the actual exposure, which is particularly valuable for close-up photography and the use of telephoto lenses. Furthermore, the system is inherently compatible with interchangeable lenses of any focal length.\n\nThe Kine Exakta was a remarkably innovative camera for its time. It featured a focal-plane shutter offering speeds up to 1/1000 of a second, a built-in self-timer, and a bayonet mount allowing rapid lens changes. Its shutter release was located on the left side of the body, a peculiarity that all subsequent Exakta models would retain.\n\nAlthough the Kine Exakta did not enjoy the same immediate commercial success as the Leica, it laid the foundations for a category of cameras that would dominate photography from the late 1950s through the 2000s. After the war, Japanese engineers drew extensive inspiration from the Exakta to develop their own SLRs, the Asahiflex (1952), the Nikon F (1959), the Canon F-1 (1971), which would bring the concept to its mechanical and optical perfection.',
    image: '/images/exakta.jpg',
    illustrations: [],
    category: 'camera',
    era: 'age-or',
  },
  {
    id: 'kodacolor-negatif-couleur',
    year: 1942,
    title: 'Kodacolor, the First Color Negative Film',
    summary:
      'Kodak launched Kodacolor, the first color negative film aimed at the general public. Unlike slides, color negatives allowed prints on paper, opening the way to mass color photography.',
    content:
      'In 1942, in the midst of World War II, Kodak introduced Kodacolor, the first color negative film intended for the amateur market. This film, initially available only in rolls for medium-format cameras, produced a negative in which colors were inverted and complementary, reds appeared as cyan, greens as magenta, blues as yellow, from which positive prints were made on color paper.\n\nColor negative film offered a decisive advantage over slides (Kodachrome, launched in 1935): it made it easy to obtain prints on paper, the favored format for family albums. Its exposure latitude was also more generous, better forgiving the errors of amateurs. On the other hand, the quality of the first Kodacolor prints was mediocre compared to the vivid Kodachrome slides, and the colors tended to degrade over time.\n\nThe importance of Kodacolor lies in the fact that it made color photography accessible to the greatest number of people. Before its appearance, color in photography was reserved for professionals and knowledgeable amateurs capable of handling the technical complexity of slides. With color negative film, the process was as simple as with black-and-white film: expose, have it developed, receive the prints.\n\nOver the decades, color negative film would be constantly improved. Kodacolor II (1972), Kodacolor VR (1983), and Kodak Gold (1988) offered ever-better performance in terms of grain, color fidelity, and stability. In the 1970s through the 1990s, color negative film accounted for the vast majority of the amateur market, with rapid-processing minilabs springing up in every shopping center and pharmacy.',
    image: '/images/kodachrome.jpg',
    illustrations: [
      { url: '/images/film_cartridges.jpg', caption: '35mm color film cartridges, descendants of the 1942 Kodacolor' },
    ],
    category: 'invention',
    era: 'age-or',
  },
  {
    id: 'polaroid-edwin-land',
    year: 1947,
    title: 'The Invention of the Polaroid by Edwin Land',
    summary:
      'Edwin Land presented the Polaroid Land Camera Model 95, which produced a finished photographic print in minutes without a darkroom. Instant photography was born, offering the immediate gratification of the image.',
    content:
      'On February 21, 1947, at a meeting of the Optical Society of America in New York, Edwin Herbert Land presented a device that seemed to border on magic: a camera that produced a finished black-and-white photograph in 60 seconds, with no darkroom, no chemicals, no manipulation whatsoever. The Polaroid Land Camera Model 95 was put on sale the following year, on November 26, 1948, at the Jordan Marsh department store in Boston. All 56 available units sold out within hours.\n\nThe idea for the Polaroid reportedly originated in 1943, when Land\'s daughter Jennifer, then three years old, asked him why she could not immediately see the photograph he had just taken. This childlike question triggered in Land an intense reflection that led, within the space of a few hours, to the complete theoretical conception of the instant photography system.\n\nThe genius of the Polaroid process lies in a chemical sandwich of prodigious complexity. The film contains, between the negative and the positive paper, a pod of reagents that bursts when the print passes between pressure rollers as it exits the camera. The reagents migrate between the layers, developing the negative image while simultaneously transferring a positive image onto the receiving paper. The entire process takes place in full daylight, within the thickness of the film itself.\n\nThe Polaroid went far beyond a mere gadget. Artists such as Ansel Adams (who served as a consultant for the firm), Andy Warhol, David Hockney, and Helmut Newton adopted it as a creative tool in its own right. The SX-70 format (1972), which eliminated the need to peel away a protective layer and offered colors of remarkable richness, became a cultural icon. Instant photography anticipated, in its own way, the need for immediate gratification that the digital screen and social networks would later fulfill.',
    image: '/images/polaroid_95.jpg',
    illustrations: [],
    category: 'invention',
    era: 'age-or',
  },
  {
    id: 'hasselblad-1600f',
    year: 1949,
    title: 'The Hasselblad 1600F',
    summary:
      'The Swedish firm Victor Hasselblad launched the 1600F, a modular medium-format reflex camera of exceptional build quality. It inaugurated a photographic system that would become the absolute reference for professionals.',
    content:
      'In 1949, Victor Hasselblad, a passionate ornithologist and photographer, presented the 1600F, the first camera from his eponymous firm founded in Gothenburg, Sweden. This single-lens reflex in the 6 by 6 cm format was of a radically modular design: the film back, viewfinder, and lens were all interchangeable, allowing the photographer to adapt the camera to any situation.\n\nThe Hasselblad 1600F, named for its maximum shutter speed of 1/1600 of a second, was born of the experience Victor Hasselblad had gained during World War II, when the Swedish military entrusted him with designing an aerial reconnaissance camera. The mechanical precision and robustness developed for military applications carried over into the civilian camera.\n\nThe Hasselblad system would be perfected with the 500C in 1957, which abandoned the focal-plane shutter in favor of a Compur Synchro leaf shutter integrated into each Carl Zeiss lens. This choice, costly but technically superior, offered flash synchronization at all speeds and exemplary reliability. The Zeiss lenses designed for the Hasselblad, notably the Planar 80mm f/2.8, are regarded as among the finest ever produced.\n\nThe Hasselblad would become the camera of choice for studio, fashion, and advertising photographers for several decades. Richard Avedon, Irving Penn, and Helmut Newton used it to create some of the most celebrated images of the twentieth century. But it was perhaps in space that the Hasselblad achieved its ultimate consecration: chosen by NASA from the Mercury program in 1962 onward, it accompanied the Apollo astronauts to the Moon in 1969, producing the most iconic photographs of the human space adventure.',
    image: '/images/hasselblad_500c.jpg',
    illustrations: [
      { url: '/images/earthrise_apollo8.jpg', caption: 'Earthrise, photographed from Apollo 8 with a Hasselblad (December 1968)' },
    ],
    category: 'camera',
    era: 'age-or',
  },
  {
    id: 'cartier-bresson-images-sauvette',
    year: 1952,
    title: 'Cartier-Bresson Publishes "Images à la Sauvette"',
    summary:
      'Henri Cartier-Bresson published his seminal work "Images à la Sauvette" (The Decisive Moment), whose preface theorized the concept of the "decisive moment." This book established the aesthetic foundations of modern reportage photography.',
    content:
      'In 1952, Éditions Verve published "Images à la Sauvette" (The Decisive Moment in the American edition), a collection of 126 photographs by Henri Cartier-Bresson accompanied by a preface that became the most influential theoretical text in the history of photography. The cover was illustrated by Henri Matisse, a friend of the photographer. The book brought together twenty years of work across Europe, Asia, and the Americas.\n\nIn his preface, Cartier-Bresson set forth his photographic philosophy with masterful clarity. Photography, he wrote, is "the simultaneous recognition, in a fraction of a second, of the significance of an event as well as of a precise organization of forms which give that event its proper expression." This is the very definition of what the American edition would call the "decisive moment", the instant when content and form simultaneously reach their peak intensity.\n\nCartier-Bresson also formulated practical principles that would influence generations of photographers: the refusal to crop (the frame must be final at the moment of exposure), the absolute discretion of the photographer (who must never interfere with the subject), the exclusive use of the Leica and the 50mm lens, the rejection of staging. These near-ascetic principles elevated reportage photography to the rank of a major art form.\n\nThe influence of "Images à la Sauvette" is immense and enduring. The book defines an ideal of photography as an art of observation, patience, and geometric intuition. Cartier-Bresson, co-founder of the Magnum agency in 1947, embodied a model of the photographer-author, independent and committed, who would inspire Robert Doisneau, Marc Riboud, Josef Koudelka, Sebastião Salgado, and countless other practitioners of humanist reportage.',
    image: '/images/cartier_bresson.png',
    illustrations: [],
    category: 'movement',
    era: 'age-or',
  },

  // ─── The SLR Revolution (1960–1990) ────────────────────────────────────
  {
    id: 'nikon-f',
    year: 1959,
    title: 'The Nikon F',
    summary:
      'Nikon launched the F, a professional 35mm SLR of unmatched ruggedness and versatility. Adopted by photojournalists worldwide, it marked the beginning of Japanese dominance over the photographic industry.',
    content:
      'In March 1959, Nippon Kogaku (later Nikon) unveiled the Nikon F, a 35mm single-lens reflex camera that would redefine the standards of professional photography. Designed by a team of engineers led by Yusaku Kamekura, the Nikon F combined a nearly indestructible build, a first-rate optical system, and remarkable modularity.\n\nThe Nikon F immediately won over professionals with its unwavering reliability. Where the German SLRs of the time required frequent adjustments and delicate maintenance, the Nikon F performed in the most extreme conditions: bitter cold, tropical heat, humidity, dust, and impacts. War correspondents in Vietnam adopted it en masse, some recounted how their Nikon F had stopped a bullet or survived an explosion. The Nikkor lens range, heir to a Japanese tradition of optical excellence, delivered image quality that rivaled the finest German glass.\n\nThe Nikon F also inaugurated the concept of the "professional system": dozens of interchangeable accessories, viewfinders, focusing screens, film backs, motor drives, allowed the camera to be configured for any photographic specialty. This concept of an integrated system would be adopted by every major manufacturer.\n\nThe impact of the Nikon F extended beyond the technical realm. It symbolized the transfer of the photographic industry\'s center of gravity from Germany to Japan, a shift that would accelerate in the decades that followed. Japanese firms, Nikon, Canon, Minolta, Pentax, Olympus, applied Japanese industrial production methods to camera manufacturing, offering consistent quality at competitive prices. The Nikon F and its successors (F2, F3, F4, F5, F6) formed the backbone of professional photojournalism for half a century.',
    image: '/images/nikon_f.jpg',
    illustrations: [],
    category: 'camera',
    era: 'revolution-slr',
  },
  {
    id: 'exposition-automatique',
    year: 1963,
    title: 'The First Camera with Automatic Exposure',
    summary:
      'The introduction of TTL (Through The Lens) light metering and automatic exposure radically simplified picture-taking. Photographers could now focus on framing and timing rather than technical settings.',
    content:
      'In the early 1960s, several Japanese manufacturers introduced light-metering systems built into SLR cameras. The Topcon RE Super (1963) was one of the first SLRs to offer TTL (Through The Lens) metering, meaning the photocell measured the light actually transmitted by the lens. This innovation eliminated errors caused by external light meters that did not account for filters, extension tubes, or the actual transmission of the lens.\n\nTTL metering paved the way for automatic exposure, where the camera itself determines the optimal shutter speed and aperture combination. The Canon FX (1963) incorporated a coupled CdS light meter, and the following years saw the introduction of cameras offering shutter-priority (the user selects the speed, the camera sets the aperture) or aperture-priority (the reverse). The Minolta SRT 101 (1966) popularized "center-weighted" metering, which gave greater importance to the center of the image.\n\nThese advances profoundly transformed photographic practice. Previously, the photographer had to estimate or measure ambient light, consult an exposure table or a separate meter, and then manually transfer the values to the camera, a process that took precious seconds and required genuine technical expertise. With automatic exposure, a beginner could obtain correctly exposed images from their very first attempts.\n\nSome purists worried that technology was supplanting craftsmanship. But professional photographers quickly recognized the advantage: freed from exposure calculations, they could concentrate entirely on framing, composition, and the decisive moment. The automation of exposure did not impoverish photography, it democratized it once more, just as the Kodak No. 1 had done seventy-five years earlier.',
    image: '/images/canonet.jpg',
    illustrations: [],
    category: 'technique',
    era: 'revolution-slr',
  },
  {
    id: 'instamatic-kodak',
    year: 1963,
    title: 'The Kodak Instamatic',
    summary:
      'Kodak launched the Instamatic, a camera using a simple drop-in film cartridge. With more than 50 million units sold, the Instamatic became the best-selling camera in history at that time.',
    content:
      'In February 1963, Kodak introduced the Instamatic, a compact camera using a new cartridge film format: the 126. The plastic cartridge slipped into the camera with a single gesture, requiring no handling of the film, no more risks of misloading, fogging, or film jams. The Instamatic 100, the entry-level model, was sold at a very accessible price, and the range quickly expanded to a dozen models.\n\nThe success of the Instamatic was staggering. Kodak sold more than 50 million cameras in the line over the following decade, an absolute record for the time. The 126 cartridge eliminated the last technical barrier that might have intimidated non-initiated users: loading the film. The camera was truly "point and shoot", aim and press the button, nothing more.\n\nThe Instamatic fit perfectly into Kodak\'s consistent strategy since George Eastman: simplify the act of photography to the maximum in order to sell as much film as possible. Every Instamatic sold at a low price guaranteed years of revenue from film and processing. The 126 format was followed by the 110 (Pocket Instamatic, 1972), even more compact, which enjoyed comparable success.\n\nBeyond its commercial triumph, the Instamatic had considerable cultural importance. It democratized color photography for social strata that had not yet had access to it. The snapshots taken with Instamatics now constitute a documentary treasure of daily life in the 1960s and 1970s: camping holidays, family celebrations, first cars, fashion trends. These images, often technically imperfect, possess an authenticity and emotional value that are irreplaceable.',
    image: '/images/instamatic.jpg',
    illustrations: [],
    category: 'camera',
    era: 'revolution-slr',
  },
  {
    id: 'photo-lunaire-apollo',
    year: 1969,
    title: 'Lunar Photography, Apollo 11',
    summary:
      'The Apollo 11 astronauts carried modified Hasselblad cameras to the Moon and brought back photographs that became the most famous images of the twentieth century. Photography accompanied humanity on its greatest journey.',
    content:
      'On July 20, 1969, Neil Armstrong and Buzz Aldrin set foot on the Moon, carrying with them two modified Hasselblad 500EL cameras adapted for the conditions of space. These cameras, designated Hasselblad EDC (Electric Data Camera), were fitted with Zeiss Biogon 60mm lenses and film backs containing special 70mm film. Crosshair reticles etched onto the glass plate in front of the film authenticated each image.\n\nThe modifications for space were extensive. Standard lubricants, which would have evaporated in the vacuum, were replaced with special formulations. Surfaces were painted silver to withstand extreme temperatures (from -150 degrees Celsius to +120 degrees Celsius). Controls were enlarged so they could be operated with the thick gloves of the spacesuits. The reflex viewfinder was replaced with a simple sighting frame, since the helmet prevented the astronaut from pressing an eye to the eyepiece.\n\nAmong the thousands of photographs brought back by the Apollo missions, some have become universal icons. The famous image of Buzz Aldrin standing on the lunar surface, photographed by Neil Armstrong (whose reflection is visible in the visor), is one of the most reproduced photographs in history. "Earthrise," taken by William Anders during Apollo 8 in December 1968, showing our blue planet rising above the lunar horizon, profoundly marked human consciousness and contributed to the emergence of the environmental movement.\n\nA remarkable fact: the Hasselblad cameras used on the lunar surface were left there, abandoned to lighten the ascent module. Only the film backs containing the exposed rolls were brought back to Earth. Twelve Hasselblads thus remain on the surface of the Moon to this day, silent witnesses to one of humanity\'s greatest achievements.',
    image: '/images/aldrin_apollo11.jpg',
    illustrations: [
      { url: '/images/earthrise_apollo8.jpg', caption: 'Earthrise, photographed from Apollo 8 with a Hasselblad (December 1968)' },
    ],
    category: 'milestone',
    era: 'revolution-slr',
  },
  {
    id: 'premier-appareil-numerique',
    year: 1975,
    title: 'The First Digital Camera',
    summary:
      'Steven Sasson, an engineer at Kodak, built the first digital camera. Weighing 3.6 kilograms and producing 0.01-megapixel images, this prototype heralded a revolution that Kodak itself would fail to exploit.',
    content:
      'In December 1975, Steven Sasson, a young 24-year-old engineer employed by Kodak in Rochester, New York, assembled a prototype of an entirely digital camera. The device, the size of a toaster and weighing 3.6 kilograms, used a CCD (Charge-Coupled Device) sensor of 100 by 100 pixels, that is, 0.01 megapixels, manufactured by Fairchild Semiconductor. The image, in black and white, was recorded onto a standard audio cassette and took 23 seconds to capture.\n\nTo view the image, Sasson had to connect the cassette player to a specially modified television. The first digital image in history showed the face of a laboratory assistant, Joy Marshall. The resolution was so low that it took an effort of imagination to make out the subject\'s features. Despite this rudimentary quality, Sasson immediately understood the revolutionary potential of his creation: photography without film, without chemistry, without waiting.\n\nSasson presented his invention to Kodak\'s management, who received the demonstration with a mixture of curiosity and skepticism. The reaction was symptomatic: "Who would want to look at their photos on a television?" he was asked. Kodak, whose profits rested almost entirely on the sale of film and processing, perceived digital as a threat rather than an opportunity. The invention was patented but shelved.\n\nThe tragic irony of this story is well known: Kodak, the company that invented digital photography, was destroyed by it. Unable to relinquish its business model built on film, Kodak allowed others, Canon, Nikon, Sony, to exploit digital technology. In 2012, the company declared bankruptcy. Steven Sasson, meanwhile, was awarded the National Medal of Technology by President Obama in 2009 for his visionary invention.',
    image: '/images/sasson_digital.jpg',
    illustrations: [],
    category: 'invention',
    era: 'revolution-slr',
  },
  {
    id: 'konica-c35-af-autofocus',
    year: 1977,
    title: 'The Konica C35 AF, First Autofocus Camera',
    summary:
      'Konica launched the C35 AF, the first consumer camera equipped with an autofocus system. Automatic focusing freed the photographer from one of the most delicate operations in picture-taking.',
    content:
      'In November 1977, Konica introduced the C35 AF (AutoFocus), the first camera in the world featuring an automatic focusing system intended for the general public. The system, developed by Honeywell, used a passive infrared module that measured scene contrast to determine the distance to the subject and automatically adjusted the lens position.\n\nManual focusing is one of the most delicate operations in photography. It demands good eyesight, experience, and time, fractions of a second that can make the difference between a sharp image and a blurred one, particularly in reportage or sports photography. Autofocus eliminated this difficulty, enabling even eyeglass wearers and beginners to obtain perfectly sharp images.\n\nThe Konica C35 AF was a fixed-lens compact, and its autofocus system was still rudimentary: it functioned well only in sufficient light and could not track a moving subject. But the principle had been established. The following years witnessed a race for innovation among Japanese manufacturers. Canon developed a phase-detection autofocus, Nikon a contrast-detection system, and Minolta a hybrid approach.\n\nThe true revolution would come in 1985 with the Minolta 7000, the first 35mm SLR with autofocus integrated into the body. But it was the Konica C35 AF that took the first step. Autofocus would progressively transform the whole of photography: by the early twenty-first century, it had become so fast and so precise that even sports photographers, the most demanding when it came to focusing, abandoned manual focus to entrust the task to their cameras.',
    image: '/images/konica_c35af.jpg',
    illustrations: [],
    category: 'invention',
    era: 'revolution-slr',
  },
  {
    id: 'minolta-7000-af-reflex',
    year: 1985,
    title: 'The Minolta 7000, First Autofocus SLR',
    summary:
      'The Minolta 7000 was the first 35mm SLR with autofocus and motorized film advance integrated into the body. It triggered a transformation of the industry and compelled every manufacturer to adopt autofocus.',
    content:
      'In February 1985, Minolta launched the 7000 AF, a camera that marked a turning point in the history of the 35mm SLR. It was the first SLR to integrate both an autofocus system and a film-advance motor in the body, along with a new lens mount (the A mount) specifically designed for autofocus. The lenses lacked a traditional manual focus ring, a bold choice that unambiguously declared the future belonged to automation.\n\nThe autofocus system of the 7000, based on phase detection with a central sensor, was impressively fast for the time. Coupled with lightweight motorized lenses, it achieved focus in a fraction of a second under most lighting conditions. The camera also offered fully automatic exposure modes (program, shutter priority, aperture priority) and an LCD display on the top plate.\n\nThe commercial success of the Minolta 7000 was immediate and forced the entire industry to respond. Nikon released the F-501 with autofocus as early as 1986; Canon responded more radically in 1987 with the EOS system and its new EF mount, designed entirely around autofocus. Pentax, Olympus, and others followed. Within a few years, the manually focused SLR gave way to the autofocus SLR.\n\nThe Minolta 7000 also symbolized the end of an era: that of the camera as a purely mechanical and optical instrument, mastered through the operator\'s skill. Henceforth, electronics and software assumed an ever-growing share of technical decisions. This evolution, while alarming to purists, opened photography to millions of new practitioners and prepared the ground for the digital revolution to come.',
    image: '/images/minolta_7000.jpg',
    illustrations: [],
    category: 'camera',
    era: 'revolution-slr',
  },

  // ─── The Digital Era (1990–2010) ─────────────────────────────────────
  {
    id: 'adobe-photoshop',
    year: 1990,
    title: 'Adobe Photoshop 1.0',
    summary:
      'Adobe launched Photoshop 1.0 for Macintosh, an image-editing software that would radically transform photographic processing. Digital post-production became an art form in its own right.',
    content:
      'On February 19, 1990, Adobe Systems launched Photoshop 1.0, a digital image-editing application for Macintosh developed by brothers Thomas and John Knoll. Thomas, a computer science doctoral student at the University of Michigan, had created the original program (then named Display) to visualize grayscale images on the monochrome screen of his Macintosh Plus. His brother John, a visual effects specialist at Industrial Light & Magic (George Lucas\'s company), had added image-processing functions.\n\nPhotoshop 1.0 already offered tools that would become iconic: levels, curves, color balance, the clone stamp, the lasso selection, blur and sharpen filters. For the first time, a photographer could modify images with a precision and freedom impossible in the traditional darkroom. Removing an unwanted element, correcting a color cast, adjusting contrast zone by zone, everything became possible on a computer screen.\n\nThe impact of Photoshop on photography is comparable to that of Talbot\'s invention of the negative: it entirely redefined what a photographic image is. The very notion of authenticity was called into question. If a photograph can be modified pixel by pixel, what still distinguishes a photo from a drawing or a painting? These questions, raised as early as the 1990s, have grown ever more pressing as the software\'s capabilities have expanded.\n\nPhotoshop rapidly became an industry standard used by photographers, graphic designers, advertising agencies, and newsrooms. Its name entered everyday language: to "Photoshop" an image means to retouch, modify, sometimes falsify it. By 2024, Photoshop counted more than 30 million subscribers and incorporated generative artificial intelligence features. The small program created by two brothers in their spare time became the most influential visual creation tool of the digital age.',
    image: '/images/photoshop_icon.svg',
    illustrations: [],
    category: 'digital',
    era: 'numerique',
  },
  {
    id: 'kodak-dcs-premier-reflex-numerique',
    year: 1991,
    title: 'The Kodak DCS, First Professional Digital SLR',
    summary:
      'Kodak launched the DCS (Digital Camera System), the first commercial digital SLR based on a Nikon F3 body. Despite its prohibitive price and limitations, it ushered in the era of digital photojournalism.',
    content:
      'In 1991, Kodak released the DCS 100, the first professional digital SLR camera. Based on a modified Nikon F3 body, it was equipped with a 1.3-megapixel CCD sensor developed by Kodak. The complete system comprised the modified body, a separate digital storage unit (DSU) containing a 200 MB hard drive, and connecting cables. The whole assembly weighed approximately 5 kilograms and cost the astronomical sum of $13,000.\n\nDespite these considerable limitations, the DCS 100 offered a decisive advantage for photojournalists: immediacy. Images could be transmitted to newsrooms by telephone line within minutes of capture, instead of waiting for film development and scanning. For news agencies, where every minute counts in the race for the scoop, this advantage justified the investment.\n\nKodak continued developing the DCS line with models still based on Nikon (and later Canon) bodies. The DCS 200 (1992) integrated storage within the body, eliminating the cumbersome external unit. The DCS 460 (1995) offered 6 megapixels. These cameras remained expensive and reserved for professionals, but they proved the viability of the concept.\n\nThe Kodak DCS inaugurated a transition that would take roughly fifteen years. The 1996 Atlanta Olympics saw the first entirely digital coverage by major agencies. The Kosovo conflict in 1999 accelerated adoption. At the 2008 Beijing Olympics, not a single press photographer was still using film. The irony of history is that Kodak, the pioneer of digital photography, was also the company that suffered most from it, unable to abandon the profits of its film empire.',
    image: '/images/kodak_dcs.jpg',
    illustrations: [],
    category: 'camera',
    era: 'numerique',
  },
  {
    id: 'nikon-d1',
    year: 1999,
    title: 'The Nikon D1',
    summary:
      'The Nikon D1 was the first digital SLR entirely designed by a traditional camera manufacturer. Its "affordable" price of $5,500 and its performance convinced professionals that digital had come of age.',
    content:
      'In June 1999, Nikon launched the D1, the first professional digital SLR entirely designed and manufactured by a traditional camera maker (previous digital models having been collaborations between camera body manufacturers and Kodak). Equipped with a 2.7-megapixel APS-C CCD sensor, it offered a burst rate of 4.5 frames per second and sensitivity up to ISO 1600. Its price of $5,500, though high, represented a fraction of the cost of Kodak DCS systems.\n\nThe D1 was a true photographer\'s camera, not an assemblage of electronics grafted onto an existing body. Its ergonomics were designed for the professional: a comfortable grip, controls accessible by feel, a weather-sealed construction, and battery life of 1,000 images per charge. It was compatible with the vast existing range of Nikkor lenses, allowing Nikon photographers to switch to digital without giving up their optical equipment.\n\nThe impact of the D1 on the industry was considerable. It demonstrated that digital had reached a level of quality and responsiveness sufficient for daily professional work. News agencies, magazines, and sports photographers began migrating to digital en masse. Canon responded with the D30 in 2000, then the 1D in 2001, launching a Nikon-Canon rivalry in the digital domain that would drive innovation for two decades.\n\nThe Nikon D1 was also a symbol of a paradigm shift in the industry\'s economics. In the film world, camera manufacturers sold bodies and lenses while Kodak and Fuji reaped the profits from film. In the digital world, camera manufacturers regained control of the entire value chain, since there were no consumables to buy. This economic upheaval sealed the fate of Kodak and Fuji (the latter brilliantly reinventing itself in other fields).',
    image: '/images/nikon_d1.jpg',
    illustrations: [],
    category: 'camera',
    era: 'numerique',
  },
  {
    id: 'premier-telephone-photo',
    year: 2000,
    title: 'The Sharp J-SH04, First Camera Phone',
    summary:
      'Sharp launched the J-SH04 in Japan, the first mobile phone with a built-in camera. This modest 0.11-megapixel sensor heralded a convergence that would transform photography more profoundly than any other innovation.',
    content:
      'In November 2000, the Japanese carrier J-Phone (later SoftBank) released the Sharp J-SH04, the world\'s first mobile phone equipped with a built-in camera. Its 0.11-megapixel (110,000-pixel) CMOS sensor produced images of 256 by 256 pixels of frankly mediocre quality. But the innovation did not lie in image quality: it lay in the fact that, for the first time, one could photograph and instantly share an image from a device one always had on hand.\n\nThe J-SH04 introduced the concept of "Sha-mail" (photo-mail): the ability to send a photo by message from one\'s telephone. In Japan, this feature was an instant hit. Within months, millions of Japanese developed the habit of photographing their meals, their friends, the events of their daily lives, and sharing these images instantly. A behavior that would seem unremarkable fifteen years later was in reality invented here, at the turn of the millennium.\n\nThe rest of the world followed with a delay. Nokia launched the 7650 with a camera in 2002; Sony Ericsson released the T68i with a detachable camera module. The first models often drew mockery from "serious" photographers: the quality was derisory, the optics minuscule, the ergonomics dreadful. But the adage that "the best camera is the one you have with you" held true: people photographed more with their phones than with any other device.\n\nIn retrospect, the Sharp J-SH04 appears as one of the most important devices in the history of photography. It inaugurated the convergence of the telephone and the camera, a fusion that, within the space of two decades, would render the compact camera obsolete for the vast majority of users. By 2024, more than 90 percent of all photographs worldwide were taken with a smartphone. The humble Japanese phone of the year 2000 changed the world.',
    image: '/images/sharp_jsh04.jpg',
    illustrations: [],
    category: 'milestone',
    era: 'numerique',
  },
  {
    id: 'canon-eos-300d',
    year: 2003,
    title: 'Canon EOS 300D, First Affordable Digital SLR',
    summary:
      'The Canon EOS 300D (Digital Rebel) was the first digital SLR sold under the $1,000 mark. It opened the digital SLR market to passionate amateurs and triggered a wave of democratization.',
    content:
      'In August 2003, Canon launched the EOS 300D, marketed as the Digital Rebel in North America, at the revolutionary price of $899 for body and lens. It was the first time a digital SLR had broken through the symbolic $1,000 barrier, a psychological threshold that opened the floodgates of the amateur market. The 6.3-megapixel APS-C CMOS sensor delivered remarkable image quality for the time.\n\nThe 300D largely shared the electronics of the professional Canon 10D (sold at $1,500 body only) in a lighter, more compact body. Canon accepted reduced margins to capture a mass market. The strategy paid off: the 300D sold briskly. Within a year, Canon moved over one million units, a figure never before achieved by a digital SLR.\n\nThe success of the 300D triggered a domino effect across the industry. Nikon responded with the D70 in 2004, Pentax with the *ist DS, and Olympus with the E-300. Prices dropped steadily: by 2006, decent digital SLRs could be had for $500. High-quality digital photography became accessible to the middle class, exactly as the Brownie had made photography accessible to all a century earlier.\n\nThe Canon 300D also sparked a cultural phenomenon: the rise of quality amateur photography. Online communities of passionate photographers blossomed, photo forums exploded in popularity, and photography blogs proliferated. Talented amateurs, armed with affordable digital SLRs, produced images that rivaled those of professionals. The boundary between amateur and professional, already blurry, began to erode in earnest.',
    image: '/images/canon_300d.jpg',
    illustrations: [],
    category: 'camera',
    era: 'numerique',
  },
  {
    id: 'flickr-partage-photos',
    year: 2004,
    title: 'Flickr and Online Photo Sharing',
    summary:
      'The launch of Flickr inaugurated the era of online photo sharing. For the first time, photographers worldwide could publish, organize, and comment on their images within a global community.',
    content:
      'In February 2004, the Canadian startup Ludicorp launched Flickr, an online photo-sharing platform that would transform how images were distributed and consumed. Initially conceived as a chat module within an online video game, Flickr rapidly evolved into a full-fledged photographic platform, offering unlimited photo hosting, a tagging system, thematic groups, and social features for commenting and favoriting.\n\nFlickr introduced several innovations that would become standards of the social web. The tagging system, which allowed each user to associate free-form keywords with their images, created a collaborative taxonomy of unprecedented richness. Creative Commons licenses, offered as an alternative to traditional copyright, encouraged the sharing and reuse of images. The "Explore" page, which algorithmically selected the best photos of the day, created a showcase of global creativity.\n\nThe impact of Flickr on photographic culture was profound. For the first time, an amateur photographer from any country could show their work to a worldwide audience, receive critique, find inspiration, and join a community of enthusiasts. The geographic and social boundaries that had limited the distribution of images collapsed. Photographic styles circulated at the speed of light, influenced and enriched by this worldwide cross-pollination.\n\nFlickr was acquired by Yahoo! in 2005 for an estimated $35 million. Although the platform subsequently declined in the face of competition from Instagram and social networks, its historical influence is undeniable. Flickr laid the foundations of online photo sharing and demonstrated that images were the universal language of the web. The very concept of "sharing a photo online", a daily act for billions of people today, was born with Flickr.',
    image: '/images/flickr_logo.svg',
    illustrations: [],
    category: 'digital',
    era: 'numerique',
  },

  // ─── The Smartphone Era (2010–2026) ──────────────────────────────────
  {
    id: 'iphone-photo-mobile',
    year: 2007,
    title: 'The iPhone and the Mobile Photography Revolution',
    summary:
      'The launch of the iPhone by Apple in 2007 redefined the mobile phone and, with it, everyday photography. Its touchscreen and intuitive interface transformed the photographic experience.',
    content:
      'On June 29, 2007, Apple launched the iPhone in the United States. Its built-in 2-megapixel camera was far from the most capable on the market, several Nokia and Sony Ericsson phones already offered better sensors. But the iPhone transformed the mobile photographic experience through its large 3.5-inch touchscreen, which served as both viewfinder and gallery, and its user interface of unprecedented fluidity.\n\nThe iPhone fundamentally changed the relationship between the photographer and the image. On previous phones, taking a photo was a tedious process: navigating through menus, triggering the shutter, then trying to see the result on a tiny screen. On the iPhone, everything was immediate: tap the camera icon, frame on the large screen, shoot, and the image appeared instantly in a gallery one could browse with a fingertip. Photography became a gesture as natural as unlocking the phone.\n\nThe App Store, launched in 2008, amplified the revolution. Applications such as Camera+ and Hipstamatic offered editing features and creative filters directly on the phone. The development of sharing apps, and soon Instagram, would create a complete ecosystem of photographic creation, editing, and distribution contained in a single pocket-sized device.\n\nIn terms of volume, the iPhone and its Android rivals triggered an unprecedented explosion in the number of photographs taken worldwide. It is estimated that more than 1.4 trillion photos were taken in 2023, compared to roughly 86 billion in 2000. Virtually all of this growth came from smartphones. The photographer Chase Jarvis perfectly summed up this revolution with his now-famous phrase: "The best camera is the one that\'s with you."',
    image: '/images/iphone_original.jpg',
    illustrations: [],
    category: 'milestone',
    era: 'smartphone',
  },
  {
    id: 'instagram-revolution',
    year: 2010,
    title: 'Instagram Transforms Photography',
    summary:
      'Kevin Systrom and Mike Krieger launched Instagram, a mobile photo-sharing application with built-in filters. Within months, Instagram redefined photographic aesthetics and created a new global visual culture.',
    content:
      'On October 6, 2010, Kevin Systrom and Mike Krieger launched Instagram on Apple\'s App Store. The application, available only on iPhone, offered a concept of devastating simplicity: take a photo, apply one of eleven available filters (inspired by the aesthetics of film photography and the Polaroid), and share it with followers. Within 24 hours, 25,000 people downloaded the app. Within a year, Instagram had 10 million users.\n\nInstagram\'s filters, X-Pro II, Earlybird, Nashville, Valencia, became veritable aesthetic signatures. The square format, imposed by the application (an homage to the Polaroid and the Hasselblad), created a creative constraint that unified and immediately identified Instagram images. An "Instagrammable" aesthetic emerged: warm colors, soft contrasts, golden light, carefully staged everyday moments.\n\nFacebook acquired Instagram in 2012 for one billion dollars, a sum deemed extravagant at the time, negligible today. The platform expanded to Android, added video, Stories, Reels, and surpassed one billion monthly active users. Instagram transformed photography into a social language: people no longer photographed solely to remember, but to communicate, to project an image of themselves, to participate in a worldwide visual conversation.\n\nInstagram\'s impact on professional photography has been ambivalent. On one hand, the platform democratized distribution, enabling talented photographers to build a following without going through traditional galleries and magazines. On the other, it contributed to a certain aesthetic uniformity and the economic devaluation of images, drowned in a flood of billions of photos posted daily. Instagram also profoundly influenced tourism, gastronomy, fashion, and architecture, places, dishes, and buildings are now designed to be "Instagrammable."',
    image: '/images/instagram_logo_2016.svg',
    illustrations: [],
    category: 'digital',
    era: 'smartphone',
  },
  {
    id: 'sony-a7-hybride-plein-format',
    year: 2013,
    title: 'The Sony A7, First Full-Frame Mirrorless Camera',
    summary:
      'Sony launched the Alpha 7 (A7), the first mirrorless camera equipped with a full-frame 24 by 36 mm sensor. This camera inaugurated a new category that would eventually supplant the traditional SLR.',
    content:
      'In October 2013, Sony unveiled the Alpha 7, the world\'s first mirrorless camera equipped with a 24.3-megapixel full-frame sensor. Simultaneously, Sony launched the A7R, featuring a 36.4-megapixel sensor without a low-pass filter. These two bodies, remarkably compact for full-frame cameras, demonstrated that the future of high-end photography did not necessarily belong to the SLR.\n\nThe principle of the mirrorless camera is to eliminate the reflex mirror and optical prism, replacing them with an electronic viewfinder (EVF) that displays in real time the image captured by the sensor. This mechanical simplification offers several advantages: the body is more compact and lighter, the shutter is silent, the viewfinder can display additional information (histogram, focus peaking, exposure simulation), and focusing can be performed across the entire sensor surface.\n\nThe Sony A7 was not the first mirrorless camera, Panasonic and Olympus had offered Micro Four Thirds systems since 2008, and Fujifilm the X-Pro1 with an APS-C sensor since 2012, but it was the first to offer the large full-frame sensor in a compact form factor. For professional photographers, attached to the image quality and shallow depth of field of full frame, this was a decisive argument.\n\nSony\'s success forced the giants of photography to react. Nikon launched the Z6 and Z7 in 2018, Canon the EOS R and RP in 2018–2019, and Panasonic the S1 in 2019. Within a few years, the entire industry shifted to mirrorless. The last professional SLRs (Nikon D6, Canon 1D X Mark III) were produced in the early 2020s, and manufacturers announced that their future development would focus exclusively on mirrorless systems. The reflex mirror, which had dominated photography for sixty years, took its final bow.',
    image: '/images/sony_a7.jpg',
    illustrations: [
      { url: '/images/sony_a7_no_cap.jpg', caption: 'Sony Alpha 7 (A7) without body cap, showing the full-frame sensor' },
    ],
    category: 'camera',
    era: 'smartphone',
  },
  {
    id: 'double-capteur-iphone7plus',
    year: 2016,
    title: 'Dual-Camera Systems (iPhone 7 Plus)',
    summary:
      'Apple launched the iPhone 7 Plus with a dual camera module combining a wide-angle and a telephoto lens. This multi-sensor system inaugurated a new era of computational photography on smartphones.',
    content:
      'In September 2016, Apple unveiled the iPhone 7 Plus, the first iPhone equipped with two rear cameras. The primary module offered a 12-megapixel sensor with an f/1.8 wide-angle lens, while the secondary module, also 12 megapixels, featured an f/2.8 telephoto lens providing 2x optical zoom. But the true innovation lay in the software: by combining data from both sensors, the iPhone could produce a simulated background blur (bokeh) effect mimicking that of a large-sensor camera.\n\nThis "Portrait" mode, added via a software update a few weeks after launch, used both sensors to construct a depth map of the scene. The main subject was isolated and the background was artificially blurred by an algorithm. The result, though imperfect (the algorithms struggled with hair, branches, and complex edges), was convincing enough to captivate millions of users.\n\nThe iPhone 7 Plus was not the first dual-camera smartphone, the HTC One M8 (2014) and the Huawei P9 (2016, with Leica optics) had preceded it. But Apple\'s massive installed base and the effectiveness of its Portrait mode popularized the concept among the general public. Within a few years, the dual camera became a triple, then a quadruple camera, each module offering a different focal length (ultra-wide, standard, telephoto, macro).\n\nThis multi-sensor approach illustrates a fundamental paradigm shift: in a smartphone, optics are constrained by the thinness of the body, but computing power is immense. Image quality no longer depends solely on the glass and the sensor, but increasingly on the software that processes the data. We have entered the era of computational photography, where algorithmic processing is as important as optical capture, a revolution that is only beginning.',
    image: '/images/iphone7plus.jpg',
    illustrations: [],
    category: 'technique',
    era: 'smartphone',
  },
  {
    id: 'photo-computationnelle-night-sight',
    year: 2018,
    title: 'Computational Photography (Night Sight)',
    summary:
      'Google launched Night Sight on the Pixel 3, a feature that produced astonishingly bright and detailed nighttime photographs through algorithmic processing. Computational photography surpassed the physical limits of miniature optics.',
    content:
      'In November 2018, Google deployed Night Sight, a software update for its Pixel smartphones that would astonish the photography world. This feature allowed users to take photos in extremely low-light conditions, near-total darkness, and obtain sharp, colorful, and detailed images where a conventional camera would have produced only a dark, noisy frame. The secret: a multi-image fusion algorithm of remarkable sophistication.\n\nNight Sight covertly captures up to fifteen consecutive images at slightly different exposures, then aligns and merges them through a process called "HDR+ enhanced." The random noise present in each individual image is averaged out and suppressed through superimposition. Machine-learning algorithms then adjust white balance, enhance details, and correct colors to produce an image that appears to have been taken in far better lighting conditions.\n\nThe result was so impressive that it sparked a wave of comparisons with dedicated cameras. In certain nighttime scenarios, the Google Pixel 3 with Night Sight produced better images than a full-frame SLR costing 3,000 euros. It was not that the smartphone\'s sensor was superior, it was objectively far inferior, but the software compensated for physical limitations with an algorithmic intelligence that traditional cameras did not possess.\n\nNight Sight illustrates the advent of computational photography, a field where image quality depends more on software than on hardware. Apple followed with Deep Fusion, Samsung with Nightography, and Huawei with its own night-mode algorithms. Within a few years, low-light photography, once the exclusive domain of cameras with large sensors and fast lenses, became accessible from any mid-range smartphone. It is perhaps the most spectacular demonstration of the power of computational processing applied to photography.',
    image: '/images/aurora_borealis.jpg',
    illustrations: [],
    category: 'technique',
    era: 'smartphone',
  },
  {
    id: 'capteurs-108-megapixels',
    year: 2020,
    title: '108-Megapixel Sensors',
    summary:
      'Samsung and Xiaomi introduced 108-megapixel sensors in smartphones, pushing the boundaries of mobile resolution. The pixel-binning technique allowed high resolution and good low-light performance to coexist.',
    content:
      'In February 2020, Samsung and Xiaomi released the first smartphones equipped with the Samsung ISOCELL Bright HM1 108-megapixel sensor. The Samsung Galaxy S20 Ultra and the Xiaomi Mi 10 Pro offered a raw resolution of 12,032 by 9,024 pixels, producing files exceeding 30 MB. This was a resolution surpassing that of many professional cameras.\n\nBut raw resolution tells only part of the story. The individual pixels of a 108 MP sensor in a smartphone are tiny, approximately 0.8 micrometers across, compared to 4 to 8 micrometers for a full-frame sensor. Pixels that small capture little light and are highly susceptible to noise. The solution is "pixel binning": in standard mode, the device groups 9 pixels into 1 (in a 3 by 3 configuration), producing a 12-megapixel image with virtual pixels of 2.4 micrometers. This compromise offers the best of both worlds: high resolution when light is abundant, good sensitivity in more challenging conditions.\n\nThe megapixel race on smartphones reached new heights with the Samsung ISOCELL HP1 at 200 megapixels in 2022, used in the Galaxy S23 Ultra. These titanic sensors are not mere marketing gimmicks: they enable acceptable-quality digital zoom (by cropping into the full-resolution image) and offer considerable post-processing flexibility.\n\nThis escalation illustrates the specificity of smartphone photography: constrained by the laws of physics (small sensor, miniature optics), it compensates through computing power and innovation in sensor design. The result is a photographic device of astonishing versatility that fits in a pocket, even if purists will note that a full-frame sensor with quality lenses retains a qualitative edge in demanding situations.',
    image: '/images/samsung_s20ultra.png',
    illustrations: [],
    category: 'technique',
    era: 'smartphone',
  },
  {
    id: 'ia-photographie-generative',
    year: 2023,
    endYear: 2026,
    title: 'AI and Generative Photography',
    summary:
      'Generative artificial intelligence (DALL-E, Midjourney, Stable Diffusion) upended the very foundations of photography by making it possible to create photorealistic images from text descriptions. The boundary between photography and generated imagery blurred.',
    content:
      'Between 2022 and 2026, the meteoric rise of generative artificial intelligence sent a seismic shock through the world of photography. Systems such as OpenAI\'s DALL-E (2022), Midjourney, and Stable Diffusion made it possible to generate photorealistic images from simple text descriptions (prompts). For the first time in history, one could create a "photograph" without a camera, without light, without a physical subject before a lens.\n\nThe quality of generated images progressed at a dizzying pace. In 2022, AI images were still identifiable by characteristic artifacts, distorted hands, illegible text, spatial inconsistencies. By 2024–2025, these flaws had been largely corrected, and generated images became virtually indistinguishable from genuine photographs to the untrained eye. AI-generated images won photography competitions, sparking passionate controversies about the very nature of photography.\n\nCamera and smartphone manufacturers quickly integrated AI into their products. Generative eraser functions (which replace removed elements with AI-generated content), frame extension, deblurring, and sky replacement became standard features. Samsung caused a scandal in 2024 when it was revealed that the "Space Zoom" function on its Galaxy phones superimposed AI-generated details onto zoomed photographs, producing images that showed details not present in the original scene.\n\nThese developments raise fundamental questions: what is a photograph if it can be generated without real light? How does one distinguish truth from fiction in a world of synthetic images? Is the profession of photographer under threat? Institutions have responded: competitions have created separate categories for AI images, metadata standards (C2PA) have been developed to certify photographic authenticity, and legislation on the transparency of generated content has been enacted. Photography has entered an era in which the veracity of the image can no longer be taken for granted, a philosophical rupture as profound as the invention of the medium itself.',
    image: '/images/theatre_opera_spatial.png',
    illustrations: [],
    category: 'digital',
    era: 'smartphone',
  },
];
