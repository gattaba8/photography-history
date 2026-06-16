export interface Illustration {
  url: string;
  caption: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  endYear?: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  illustrations?: Illustration[];
  category: 'invention' | 'technique' | 'camera' | 'movement' | 'digital' | 'milestone';
  era: string;
}

export interface Era {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  description: string;
  color: string;
}

export const eras: Era[] = [
  {
    id: 'pionniers',
    name: 'Les Pionniers',
    startYear: 1826,
    endYear: 1860,
    description:
      "L'ère des pionniers marque la naissance de la photographie, depuis les premières expériences de Niépce jusqu'aux daguerréotypes de studio. C'est une période d'expérimentation intense où chimistes, physiciens et artistes conjuguent leurs efforts pour fixer la lumière de manière permanente.",
    color: 'amber',
  },
  {
    id: 'collodion',
    name: "L'Âge du Collodion",
    startYear: 1851,
    endYear: 1880,
    description:
      "Le procédé au collodion humide révolutionne la photographie en offrant des images d'une netteté remarquable à des coûts réduits. Cette période voit l'essor des portraits de studio, de la photographie documentaire et des premières tentatives de reproduction de la couleur.",
    color: 'rose',
  },
  {
    id: 'democratisation',
    name: 'La Démocratisation',
    startYear: 1880,
    endYear: 1920,
    description:
      "Grâce aux innovations de George Eastman et à l'apparition du film souple, la photographie cesse d'être l'apanage des professionnels. Le slogan « You press the button, we do the rest » incarne cette révolution qui met l'appareil photo entre les mains du grand public.",
    color: 'emerald',
  },
  {
    id: 'age-or',
    name: "L'Âge d'Or",
    startYear: 1920,
    endYear: 1960,
    description:
      "L'entre-deux-guerres et l'après-guerre constituent l'âge d'or de la photographie argentique. Le Leica inaugure l'ère du 35 mm, le photojournalisme s'impose comme un art majeur, et la couleur devient accessible grâce aux films négatifs et aux procédés instantanés.",
    color: 'sky',
  },
  {
    id: 'revolution-slr',
    name: 'La Révolution SLR',
    startYear: 1960,
    endYear: 1990,
    description:
      "Le reflex mono-objectif (SLR) devient l'appareil de référence, offrant une visée précise et une gamme d'objectifs interchangeables. L'autofocus, l'exposition automatique et les premiers capteurs numériques préfigurent une transformation radicale du médium.",
    color: 'violet',
  },
  {
    id: 'numerique',
    name: "L'Ère Numérique",
    startYear: 1990,
    endYear: 2010,
    description:
      "Le passage au numérique bouleverse l'ensemble de la chaîne photographique, de la prise de vue au tirage. Les logiciels de retouche, les capteurs haute résolution et le partage en ligne redéfinissent les pratiques des amateurs comme des professionnels.",
    color: 'cyan',
  },
  {
    id: 'smartphone',
    name: "L'Ère du Smartphone",
    startYear: 2010,
    endYear: 2026,
    description:
      "Le smartphone transforme chaque individu en photographe potentiel, tandis que l'intelligence artificielle et la photographie computationnelle repoussent les limites du possible. Les réseaux sociaux deviennent la première galerie d'exposition mondiale.",
    color: 'fuchsia',
  },
];

export const timelineEvents: TimelineEvent[] = [
  // ─── Les Pionniers (1826–1860) ───────────────────────────────────────
  {
    id: 'niepce-premiere-photo',
    year: 1826,
    title: 'Première photographie de Niépce',
    summary:
      "Joseph Nicéphore Niépce réalise le « Point de vue du Gras », considéré comme la plus ancienne photographie permanente connue. Cette héliographie sur une plaque d'étain enduite de bitume de Judée nécessite une exposition de plusieurs jours.",
    content:
      "En 1826, dans sa propriété de Saint-Loup-de-Varennes en Bourgogne, Joseph Nicéphore Niépce parvient à fixer de manière permanente l'image formée par la lumière dans une chambre obscure. Le « Point de vue du Gras » représente la vue depuis la fenêtre de son atelier : les toits des bâtiments environnants, un arbre et un bout de ciel. Cette image, d'apparence modeste, constitue l'acte fondateur de la photographie.\n\nLe procédé utilisé par Niépce, qu'il nomme « héliographie » (écriture par le soleil), repose sur la sensibilité à la lumière du bitume de Judée. Cette substance, étalée sur une plaque d'étain polie, durcit aux endroits exposés à la lumière et reste soluble dans l'huile de lavande aux endroits restés dans l'ombre. Après une exposition estimée entre huit heures et plusieurs jours, la plaque est lavée pour révéler l'image.\n\nNiépce travaille sur ce problème depuis le début des années 1810, motivé initialement par le désir de reproduire des gravures sans l'intervention d'un dessinateur. Ses premières tentatives utilisent le chlorure d'argent, mais les images obtenues s'assombrissent rapidement à la lumière. C'est en se tournant vers le bitume de Judée qu'il obtient enfin des résultats permanents.\n\nLa plaque originale du « Point de vue du Gras » est aujourd'hui conservée à l'Université du Texas à Austin. Longtemps oubliée, elle a été redécouverte en 1952 par l'historien Helmut Gernsheim. Cette image fondatrice, bien que floue et rudimentaire selon nos critères actuels, représente l'aboutissement de siècles de recherches sur la fixation des images optiques et ouvre la voie à l'invention de la photographie moderne.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/View_from_the_Window_at_Le_Gras%2C_Joseph_Nic%C3%A9phore_Ni%C3%A9pce.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/View_from_the_Window_at_Le_Gras%2C_Joseph_Nic%C3%A9phore_Ni%C3%A9pce.jpg/800px-View_from_the_Window_at_Le_Gras%2C_Joseph_Nic%C3%A9phore_Ni%C3%A9pce.jpg', caption: 'Point de vue du Gras — la plus ancienne photographie connue, réalisée par Niépce vers 1826-1827' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Nic%C3%A9phore_Ni%C3%A9pce_Mus%C3%A9e_Nicephore_Niepce_090915_01.jpg/800px-Nic%C3%A9phore_Ni%C3%A9pce_Mus%C3%A9e_Nicephore_Niepce_090915_01.jpg', caption: 'Portrait de Nicéphore Niépce, inventeur de la photographie' },
    ],
    category: 'invention',
    era: 'pionniers',
  },
  {
    id: 'calotype-talbot',
    year: 1835,
    title: 'Le Calotype de William Henry Fox Talbot',
    summary:
      "William Henry Fox Talbot met au point le calotype, premier procédé photographique négatif-positif. Cette invention capitale permet pour la première fois de reproduire une même image à l'infini à partir d'un seul négatif.",
    content:
      "En 1835, dans son manoir de Lacock Abbey en Angleterre, William Henry Fox Talbot réalise ses premiers « dessins photogéniques » en posant des objets — feuilles, dentelles, plumes — sur du papier sensibilisé au chlorure d'argent. Bien que rudimentaires, ces expériences jettent les bases d'un procédé révolutionnaire qu'il perfectionnera sous le nom de calotype (du grec kalos, « beau »).\n\nLe calotype, breveté en 1841, représente une avancée conceptuelle majeure par rapport au daguerréotype : il produit un négatif sur papier à partir duquel on peut tirer un nombre illimité d'épreuves positives. Le papier est d'abord enduit d'iodure d'argent, puis, juste avant l'exposition, sensibilisé au gallo-nitrate d'argent. Après une exposition de quelques minutes seulement, une image latente apparaît, développée ensuite à l'acide gallique.\n\nSi le daguerréotype offre une précision de détail incomparable, le calotype possède un charme esthétique particulier : la texture du papier confère aux images une douceur qui rappelle le dessin au fusain ou l'aquarelle. Cette qualité séduira de nombreux photographes artistes, notamment David Octavius Hill et Robert Adamson en Écosse, qui réalisent des portraits d'une remarquable sensibilité.\n\nL'importance historique du calotype réside dans l'introduction du principe négatif-positif, qui restera le fondement de la photographie argentique pendant plus de 150 ans, jusqu'à l'avènement du numérique. En inventant ce procédé, Talbot a non seulement créé une technique photographique, mais il a posé le cadre conceptuel de la reproduction mécanique des images qui définira l'ère moderne de la communication visuelle.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/William_Henry_Fox_Talbot_%28British_-_The_Courtyard_at_Lacock_Abbey._-_Google_Art_Project.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/William_Henry_Fox_Talbot_%28British_-_The_Courtyard_at_Lacock_Abbey._-_Google_Art_Project.jpg/800px-William_Henry_Fox_Talbot_%28British_-_The_Courtyard_at_Lacock_Abbey._-_Google_Art_Project.jpg', caption: 'La cour de Lacock Abbey, calotype de William Henry Fox Talbot' },
    ],
    category: 'invention',
    era: 'pionniers',
  },
  {
    id: 'daguerreotype-1839',
    year: 1839,
    title: "Le Daguerréotype — annonce officielle",
    summary:
      "Le 19 août 1839, l'Académie des sciences de Paris dévoile le daguerréotype au monde entier. Ce procédé inventé par Louis Daguerre, offert à l'humanité par le gouvernement français, marque la naissance officielle de la photographie.",
    content:
      "Le 19 août 1839 reste gravé dans l'histoire comme le jour de naissance officielle de la photographie. Devant une assemblée conjointe de l'Académie des sciences et de l'Académie des beaux-arts à Paris, François Arago, député et physicien, présente les détails du daguerréotype, un procédé mis au point par Louis-Jacques-Mandé Daguerre. Le gouvernement français, reconnaissant l'importance universelle de cette invention, a acquis le brevet pour l'offrir « libre au monde entier » — une décision d'une générosité remarquable.\n\nLe daguerréotype produit une image unique d'une netteté stupéfiante sur une plaque de cuivre argentée polie comme un miroir. Le procédé consiste à exposer la plaque aux vapeurs d'iode pour la rendre sensible à la lumière, puis à la placer dans une chambre obscure. Après une exposition de plusieurs minutes, l'image latente est révélée par des vapeurs de mercure et fixée au thiosulfate de sodium (découvert par John Herschel).\n\nL'annonce provoque une véritable « daguerréotypomanie » à travers le monde. En quelques mois, des ateliers de daguerréotype ouvrent dans toutes les grandes capitales. Le procédé séduit par la finesse extraordinaire de ses détails : sous la loupe, on peut distinguer les briques d'un bâtiment, les feuilles d'un arbre, les lettres d'une enseigne. La bourgeoisie s'empresse de faire réaliser son portrait, un luxe jusque-là réservé à ceux qui pouvaient s'offrir les services d'un peintre.\n\nDaguerre lui-même avait commencé comme peintre décorateur et inventeur du diorama, un spectacle d'illusions optiques très populaire à Paris. Son association avec Niépce à partir de 1829, puis la poursuite de leurs recherches communes après la mort de ce dernier en 1833, aboutissent à ce procédé qui transformera à jamais notre rapport à l'image et à la mémoire.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Boulevard_du_Temple.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Boulevard_du_Temple.jpg/800px-Boulevard_du_Temple.jpg', caption: "Boulevard du Temple, Paris — daguerréotype de Daguerre, l'une des premières images montrant un être humain" },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Louis_Daguerre_2.jpg/800px-Louis_Daguerre_2.jpg', caption: 'Louis Jacques Mandé Daguerre, inventeur du daguerréotype' },
    ],
    category: 'milestone',
    era: 'pionniers',
  },
  {
    id: 'premier-portrait',
    year: 1840,
    title: 'Premier portrait photographique',
    summary:
      "Les progrès de l'optique et de la chimie permettent enfin de réduire les temps de pose suffisamment pour réaliser des portraits. Robert Cornelius à Philadelphie et les studios parisiens ouvrent l'ère du portrait photographique.",
    content:
      "Dès la présentation du daguerréotype en 1839, le rêve de fixer le visage humain par la photographie enflamme les imaginations. Mais les temps de pose initiaux, de l'ordre de quinze à trente minutes en plein soleil, rendent le portrait pratiquement impossible : nul ne peut rester parfaitement immobile aussi longtemps. C'est Robert Cornelius, un orfèvre et chimiste amateur de Philadelphie, qui réalise l'un des tout premiers autoportraits photographiques à la fin de 1839, en profitant d'un objectif amélioré.\n\nEn 1840, les perfectionnements apportés simultanément par plusieurs inventeurs rendent le portrait commercial viable. L'utilisation du bromure d'argent en complément de l'iodure augmente considérablement la sensibilité des plaques. L'opticien viennois Josef Petzval conçoit un objectif f/3.6 qui laisse passer seize fois plus de lumière que celui de Daguerre. Les temps de pose tombent à une ou deux minutes, puis à quelques secondes.\n\nLes studios de portrait se multiplient alors à une vitesse fulgurante. À Paris, les ateliers installés sur les toits des immeubles, avec leurs verrières laissant entrer un flot de lumière naturelle, deviennent des lieux de sociabilité bourgeoise. Le portraitiste doit maîtriser à la fois la technique chimique et l'art de la mise en scène : choix du fond, disposition des accessoires, pose du modèle. Des appareils de contention dissimulés derrière les sujets maintiennent leur tête immobile.\n\nLe portrait photographique bouleverse profondément les rapports sociaux. Pour la première fois dans l'histoire, la classe moyenne peut conserver une image fidèle de ses proches, un privilège autrefois réservé à l'aristocratie. Les daguerréotypes de famille deviennent des objets précieux, enchâssés dans des écrins de velours et de cuir, que l'on transporte avec soi ou que l'on expose dans le salon.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/RobertCornelius.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/RobertCornelius.jpg/800px-RobertCornelius.jpg', caption: "Autoportrait de Robert Cornelius (1839) — considéré comme le premier portrait et le premier selfie de l'histoire" },
    ],
    category: 'milestone',
    era: 'pionniers',
  },
  {
    id: 'premiere-photo-reportage',
    year: 1842,
    title: 'Première photographie de reportage',
    summary:
      "Le grand incendie de Hambourg en mai 1842 est documenté par des daguerréotypes, constituant l'un des premiers exemples de photographie de reportage. Ces images témoignent du potentiel documentaire du nouveau médium.",
    content:
      "En mai 1842, un terrible incendie ravage le centre de Hambourg pendant quatre jours, détruisant plus de 1700 bâtiments et laissant des milliers de personnes sans abri. Parmi les témoins de cette catastrophe, les daguerréotypistes Carl Ferdinand Stelzner et Hermann Biow ont l'idée de documenter les ruines encore fumantes. Leurs images constituent l'un des premiers exemples connus de photographie de reportage — l'utilisation du médium pour témoigner d'un événement d'actualité.\n\nLes daguerréotypes réalisés après l'incendie montrent les façades éventrées, les décombres des églises et des bâtiments publics, les rues dévastées. Contrairement aux gravures de presse, qui interprètent et embellissent invariablement la réalité, ces images offrent un témoignage brut et irréfutable. La puissance de la photographie documentaire se révèle pour la première fois : face à l'image photographique, le spectateur ne peut plus douter de ce qu'il voit.\n\nCet usage documentaire du daguerréotype ouvre une voie qui sera largement empruntée dans les décennies suivantes. Dès la guerre américano-mexicaine (1846-1848), des daguerréotypistes accompagnent les troupes. Mais c'est surtout la guerre de Crimée (1854-1855), couverte par Roger Fenton, et la guerre de Sécession américaine (1861-1865), documentée par Mathew Brady et ses assistants, qui consacreront la photographie comme outil majeur de documentation historique.\n\nLes daguerréotypes de l'incendie de Hambourg, bien que peu nombreux et de facture modeste, posent la première pierre d'une tradition qui donnera naissance au photojournalisme moderne. Ils illustrent cette vérité fondamentale : la photographie n'est pas seulement un art du portrait et du paysage, mais aussi et surtout un art du témoignage.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Jungfernstieg_und_Binnenalster_1842.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Jungfernstieg_und_Binnenalster_1842.jpg', caption: 'Daguerréotype des ruines de Hambourg après le grand incendie de 1842' },
    ],
    category: 'milestone',
    era: 'pionniers',
  },
  {
    id: 'mission-heliographique',
    year: 1851,
    title: 'La Mission Héliographique en France',
    summary:
      "Le gouvernement français commande à cinq photographes un inventaire systématique des monuments historiques menacés. Cette mission pionnière consacre la photographie comme outil de documentation patrimoniale.",
    content:
      "En 1851, la Commission des Monuments historiques, dirigée par Prosper Mérimée, confie à cinq photographes la mission de documenter les édifices médiévaux et renaissance de France menacés de dégradation ou de destruction. Édouard Baldus, Hippolyte Bayard, Gustave Le Gray, Henri Le Secq et Auguste Mestral sillonnent le territoire avec leur matériel encombrant pour réaliser des centaines de clichés de cathédrales, abbayes, châteaux et ponts anciens.\n\nCette « Mission Héliographique » constitue la première commande photographique officielle d'un État. Elle naît d'une conviction visionnaire : la photographie peut sauvegarder la mémoire d'un patrimoine architectural en péril, avec une fidélité et une exhaustivité que le dessin ne peut égaler. Chaque photographe se voit attribuer un itinéraire couvrant une région spécifique de la France.\n\nLes résultats sont remarquables tant sur le plan documentaire qu'esthétique. Gustave Le Gray, en particulier, réalise des images d'une beauté saisissante, jouant magistralement avec la lumière rasante sur les pierres sculptées des cathédrales. Henri Le Secq documente avec minutie les portails et les vitraux de la cathédrale de Strasbourg. Édouard Baldus produit des vues panoramiques d'une précision architecturale stupéfiante.\n\nParadoxalement, les calotypes de la Mission Héliographique ne seront jamais publiés de leur vivant — la Commission les archive sans les diffuser. Il faudra attendre le XXe siècle pour que leur valeur artistique et historique soit pleinement reconnue. Aujourd'hui conservées à la Médiathèque de l'Architecture et du Patrimoine, ces images constituent un trésor inestimable et le modèle de toutes les campagnes photographiques patrimoniales qui suivront.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Le_Gray%2C_Mestral%2C_Moissac.JPG',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Le_Gray%2C_Mestral%2C_Moissac.JPG', caption: "Abbaye de Moissac photographiée par Gustave Le Gray et Auguste Mestral lors de la Mission Héliographique (1851)" },
    ],
    category: 'movement',
    era: 'pionniers',
  },

  // ─── L'Âge du Collodion (1851–1880) ──────────────────────────────────
  {
    id: 'collodion-humide',
    year: 1851,
    title: "Frederick Scott Archer invente le collodion humide",
    summary:
      "Le procédé au collodion humide sur plaque de verre combine la netteté du daguerréotype et la reproductibilité du calotype. Non breveté, il se répand à une vitesse foudroyante et domine la photographie pendant trois décennies.",
    content:
      "En mars 1851, le sculpteur et photographe anglais Frederick Scott Archer publie dans la revue The Chemist les détails d'un nouveau procédé photographique : le collodion humide. Le principe consiste à dissoudre du coton-poudre (nitrocellulose) dans un mélange d'éther et d'alcool, puis à verser cette solution visqueuse sur une plaque de verre. La plaque est ensuite sensibilisée dans un bain de nitrate d'argent et exposée alors qu'elle est encore humide — d'où le nom du procédé.\n\nLes avantages du collodion humide sont considérables. Comme le daguerréotype, il offre une netteté et une richesse de détails exceptionnelles grâce au support en verre parfaitement lisse. Comme le calotype, il produit un négatif à partir duquel on peut tirer un nombre illimité d'épreuves positives sur papier albuminé. De surcroît, sa sensibilité est bien supérieure à celle des deux procédés précédents, réduisant les temps de pose à quelques secondes.\n\nArcher, avec une générosité qui lui coûtera cher, refuse de breveter son invention. Le procédé se répand donc librement dans le monde entier, supplantant rapidement le daguerréotype et le calotype. En quelques années, le collodion humide devient le standard universel de la photographie. Sa principale contrainte — la plaque doit être préparée, exposée et développée dans un délai de dix à quinze minutes, avant que le collodion ne sèche — oblige les photographes en extérieur à transporter un véritable laboratoire ambulant.\n\nMalgré cet inconvénient logistique, le collodion humide engendre un âge d'or de la photographie. Des pionniers intrépides transportent leurs lourds équipements sur les champs de bataille de Crimée, au sommet des Alpes, dans les ruines de l'Égypte ancienne et jusque dans l'Ouest sauvage américain. Frederick Scott Archer, lui, meurt dans la pauvreté en 1857, sans avoir tiré le moindre profit financier de son invention révolutionnaire.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Colodi%C3%B3n_h%C3%BAmedo%2C_collodion_wet_plate_process%2C_el_colodi%C3%B3n_se_vierte_en_una_placa_de_vidrio%2C_IPCE%2C_Madrid%2C_Espa%C3%B1a.jpg/800px-Colodi%C3%B3n_h%C3%BAmedo%2C_collodion_wet_plate_process%2C_el_colodi%C3%B3n_se_vierte_en_una_placa_de_vidrio%2C_IPCE%2C_Madrid%2C_Espa%C3%B1a.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Colodi%C3%B3n_h%C3%BAmedo%2C_collodion_wet_plate_process%2C_el_colodi%C3%B3n_se_vierte_en_una_placa_de_vidrio%2C_IPCE%2C_Madrid%2C_Espa%C3%B1a.jpg/800px-Colodi%C3%B3n_h%C3%BAmedo%2C_collodion_wet_plate_process%2C_el_colodi%C3%B3n_se_vierte_en_una_placa_de_vidrio%2C_IPCE%2C_Madrid%2C_Espa%C3%B1a.jpg', caption: "Démonstration du procédé au collodion humide — le collodion est versé sur une plaque de verre" },
    ],
    category: 'invention',
    era: 'collodion',
  },
  {
    id: 'carte-de-visite-disderi',
    year: 1854,
    title: 'Disdéri et la carte de visite photographique',
    summary:
      "André-Adolphe-Eugène Disdéri brevette un appareil à objectifs multiples qui produit huit portraits sur une seule plaque. La « carte de visite » photographique devient un phénomène de société qui démocratise le portrait.",
    content:
      "En 1854, le photographe parisien André-Adolphe-Eugène Disdéri dépose le brevet d'un appareil équipé de quatre, puis huit objectifs, capable de produire autant de petits portraits sur une seule plaque de collodion. Chaque épreuve, au format d'environ 6 × 9 cm, est collée sur un carton aux dimensions d'une carte de visite. Le coût d'un portrait tombe de manière spectaculaire : là où un daguerréotype coûtait 50 à 100 francs, Disdéri propose ses cartes à 20 francs la douzaine.\n\nLa « cartomania » explose véritablement en 1859, lorsque Napoléon III, en route vers l'Italie à la tête de ses troupes, fait arrêter sa colonne devant l'atelier de Disdéri pour se faire photographier. L'anecdote fait le tour de Paris et la carte de visite devient l'accessoire social indispensable. On échange ses portraits comme on échangerait aujourd'hui ses contacts sur les réseaux sociaux. Des albums spéciaux sont fabriqués pour collectionner les cartes de visite de ses proches, mais aussi celles des célébrités — souverains, arteurs, écrivains — vendues par milliers.\n\nDisdéri ne se contente pas d'innover techniquement : il transforme aussi la mise en scène du portrait. Là où le daguerréotype imposait la rigidité, il introduit des poses décontractées, des décors élaborés avec colonnes, rideaux et mobilier, et surtout le portrait en pied, qui permet de montrer la tenue vestimentaire — un élément crucial de distinction sociale à l'époque.\n\nLa carte de visite représente la première véritable démocratisation du portrait photographique. Entre 1860 et 1870, on estime que des centaines de millions de cartes de visite sont produites à travers le monde. Paradoxalement, Disdéri, comme Archer avant lui, finira ruiné : victime de la concurrence effrénée qu'il a lui-même déclenchée, il meurt à l'hôpital de la Charité en 1889.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Disd%C3%A9ri%2C_Andr%C3%A9_Adolphe_Eug%C3%A8ne_-_Carte_de_visite_Portr%C3%A4t_%28Zeno_Fotografie%29.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Disd%C3%A9ri%2C_Andr%C3%A9_Adolphe_Eug%C3%A8ne_-_Carte_de_visite_Portr%C3%A4t_%28Zeno_Fotografie%29.jpg', caption: 'Carte de visite photographique réalisée par le studio Disdéri' },
    ],
    category: 'technique',
    era: 'collodion',
  },
  {
    id: 'premiere-photo-couleur',
    year: 1861,
    title: 'Première photographie couleur',
    summary:
      "Le physicien James Clerk Maxwell démontre le principe de la synthèse additive des couleurs en projetant trois images filtrées en rouge, vert et bleu. Cette expérience pionnière ouvre la voie à toute la photographie couleur future.",
    content:
      "Le 17 mai 1861, lors d'une conférence à la Royal Institution de Londres, le physicien écossais James Clerk Maxwell présente la première photographie en couleurs de l'histoire. Le sujet est un modeste ruban de tartan écossais, mais la méthode utilisée est d'une élégance théorique remarquable qui fondera toute la photographie couleur à venir.\n\nMaxwell applique sa propre théorie de la vision trichromatique : toute couleur peut être reproduite par un mélange de trois lumières fondamentales — rouge, verte et bleue. Il demande au photographe Thomas Sutton de réaliser trois prises de vue du même ruban à travers trois filtres de couleur différents. Les trois négatifs sont ensuite tirés sur des plaques de verre positives, et chacune est projetée sur un écran à travers le filtre correspondant. La superposition des trois projections reconstitue les couleurs d'origine.\n\nD'un point de vue strictement chimique, l'expérience n'aurait pas dû fonctionner aussi bien : les émulsions de l'époque, sensibles principalement au bleu et à l'ultraviolet, ne pouvaient pas correctement enregistrer le rouge et le vert. Des recherches ultérieures ont montré que certaines teintures du tartan réfléchissaient de l'ultraviolet, produisant par un heureux hasard une séparation de couleurs acceptable.\n\nL'expérience de Maxwell reste néanmoins fondamentale car elle établit le principe même de la reproduction des couleurs par synthèse additive. Ce principe sera exploité un demi-siècle plus tard par les frères Lumière dans leur procédé Autochrome, et il demeure à la base de tous les écrans et capteurs numériques modernes. Chaque pixel de votre smartphone décompose et recompose la lumière exactement selon le principe démontré par Maxwell en 1861.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Tartan_Ribbon.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Tartan_Ribbon.jpg/800px-Tartan_Ribbon.jpg', caption: 'Le ruban de tartan — première photographie couleur réalisée par James Clerk Maxwell en 1861' },
    ],
    category: 'invention',
    era: 'collodion',
  },
  {
    id: 'gelatino-bromure',
    year: 1871,
    title: "Invention de la plaque au gélatino-bromure d'argent",
    summary:
      "Richard Leach Maddox propose de remplacer le collodion par la gélatine comme liant pour les sels d'argent. Cette innovation capitale permet de préparer les plaques à l'avance et ouvre la voie à la photographie instantanée.",
    content:
      "En 1871, le médecin et photographe amateur anglais Richard Leach Maddox publie dans le British Journal of Photography un article décrivant un nouveau procédé : la suspension de bromure d'argent dans une émulsion de gélatine, étalée sur une plaque de verre. Cette innovation, apparemment modeste, va transformer radicalement la pratique photographique en résolvant le principal inconvénient du collodion humide : l'obligation de préparer et d'exposer la plaque dans un délai très court.\n\nLes plaques au gélatino-bromure peuvent être préparées longtemps à l'avance, stockées à sec et développées quand le photographe le souhaite. Plus besoin de transporter un laboratoire ambulant ! De surcroît, la gélatine, contrairement au collodion, peut être chauffée (« mûrie »), ce qui augmente considérablement la sensibilité de l'émulsion. Les temps de pose passent de plusieurs secondes à des fractions de seconde.\n\nCes caractéristiques ouvrent la voie à l'industrialisation de la photographie. Dès la fin des années 1870, des fabricants comme la Britannia Works Company commencent à produire des plaques sèches en série, prêtes à l'emploi. Le photographe n'a plus besoin de maîtriser la chimie : il achète ses plaques, les expose et les fait développer. La séparation entre la fabrication du support sensible et la prise de vue est consommée.\n\nLa plaque sèche au gélatino-bromure rend également possible la photographie d'action. Les temps de pose ultra-courts permettent de « geler » le mouvement — une possibilité qui fascinera des pionniers comme Eadweard Muybridge et Étienne-Jules Marey. C'est aussi cette technologie qui rend concevable le film souple en celluloïd, car la gélatine peut être coulée sur n'importe quel support, y compris un ruban flexible. Richard Leach Maddox a ainsi posé, sans le savoir, les fondations de toute la photographie moderne.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Dry_plate.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Dry_plate.jpg', caption: "Plaque sèche au gélatino-bromure d'argent" },
    ],
    category: 'invention',
    era: 'collodion',
  },
  {
    id: 'muybridge-mouvement',
    year: 1878,
    title: 'Muybridge et la décomposition du mouvement',
    summary:
      "Eadweard Muybridge utilise une batterie de douze appareils photographiques pour décomposer le galop d'un cheval, prouvant que les quatre sabots quittent le sol simultanément. Ses travaux préfigurent l'invention du cinéma.",
    content:
      "En juin 1878, sur la piste d'entraînement du haras de Leland Stanford à Palo Alto en Californie, le photographe britannique Eadweard Muybridge réussit un exploit technique qui va bouleverser notre compréhension du mouvement. Commandité par le milliardaire Leland Stanford pour trancher un débat hippique — un cheval au galop a-t-il les quatre sabots en l'air en même temps ? —, Muybridge dispose douze appareils photographiques le long de la piste, chacun déclenché par un fil tendu en travers du passage du cheval.\n\nLes résultats sont stupéfiants. Les photographies prouvent irréfutablement que oui, un cheval au galop connaît un instant de suspension totale — mais pas du tout dans la posture « jambes écartées » que les peintres représentaient depuis des siècles. L'animal ramène ses quatre membres sous le ventre, dans une position que l'œil humain est incapable de percevoir. La photographie révèle ainsi une vérité invisible à l'observation directe.\n\nEncouragé par ce succès, Muybridge entreprend un projet colossal : la décomposition systématique du mouvement humain et animal. Entre 1884 et 1886, à l'Université de Pennsylvanie, il réalise plus de 100 000 photographies séquentielles montrant des hommes, des femmes et des animaux marchant, courant, sautant, dansant, lançant, soulevant. L'ensemble est publié en 1887 dans le monumental ouvrage « Animal Locomotion », qui contient 781 planches.\n\nPour animer ses séquences, Muybridge invente le zoopraxiscope, un appareil de projection qui fait défiler les images en succession rapide, créant l'illusion du mouvement. Ce dispositif, présenté pour la première fois en 1879, est considéré comme l'un des ancêtres directs du cinématographe. Les travaux de Muybridge influenceront profondément les artistes — notamment Marcel Duchamp et Francis Bacon — et inspireront directement Étienne-Jules Marey et Thomas Edison dans leurs recherches sur l'image animée.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/The_Horse_in_Motion-anim.gif',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/The_Horse_in_Motion.jpg', caption: "The Horse in Motion (1878) — Eadweard Muybridge prouve que les quatre sabots du cheval quittent le sol simultanément" },
    ],
    category: 'technique',
    era: 'collodion',
  },

  // ─── La Démocratisation (1880–1920) ───────────────────────────────────
  {
    id: 'kodak-n1-eastman',
    year: 1888,
    title: 'George Eastman lance le Kodak n°1',
    summary:
      "George Eastman commercialise le Kodak n°1, un appareil simple préchargé de pellicule pour 100 poses. Avec le slogan « You press the button, we do the rest », il ouvre la photographie au grand public.",
    content:
      "En 1888, l'industriel américain George Eastman lance un produit qui va transformer la photographie d'un art réservé aux spécialistes en un loisir populaire : le Kodak n°1. Cet appareil en forme de boîte, vendu 25 dollars (une somme conséquente mais accessible à la classe moyenne), est préchargé d'un rouleau de pellicule suffisant pour 100 photographies circulaires de 6,5 cm de diamètre.\n\nLe génie commercial d'Eastman réside dans un concept entièrement nouveau : la séparation totale entre la prise de vue et le traitement. Une fois les 100 poses exposées, le client renvoie l'appareil entier à l'usine Kodak de Rochester, dans l'État de New York. L'usine développe le film, tire les épreuves, recharge l'appareil avec une pellicule neuve et retourne le tout pour 10 dollars. Le slogan est limpide : « You press the button, we do the rest » (Vous appuyez sur le bouton, nous faisons le reste).\n\nCe modèle économique, ancêtre du « rasoir et lames » pratiqué aujourd'hui par de nombreuses entreprises, révolutionne l'industrie photographique. Il n'est plus nécessaire de comprendre la chimie, de maîtriser les temps de pose ou de posséder une chambre noire. N'importe qui peut désormais photographier sa famille, ses voyages, ses moments de vie quotidienne. La photographie amateur est née.\n\nLe mot « Kodak » lui-même est une invention d'Eastman, qui voulait un nom court, distinctif, impossible à mal prononcer dans n'importe quelle langue et ne ressemblant à aucun mot existant. Ce nom deviendra l'un des plus célèbres au monde, synonyme même de photographie pendant plus d'un siècle. La vision d'Eastman — mettre la photographie à la portée de tous — annonce avec un siècle d'avance la révolution du smartphone : rendre l'acte photographique aussi simple et naturel que possible.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Kodak_no1.jpg/800px-Kodak_no1.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Kodak_no1.jpg/800px-Kodak_no1.jpg', caption: 'Le Kodak n°1, lancé par George Eastman en 1888' },
    ],
    category: 'camera',
    era: 'democratisation',
  },
  {
    id: 'film-souple-celluloid',
    year: 1889,
    title: 'Le film souple en celluloïd',
    summary:
      "George Eastman met au point le premier film photographique souple sur support en celluloïd, remplaçant les plaques de verre lourdes et fragiles. Cette innovation rend possible à la fois la photographie portable et le cinéma.",
    content:
      "En 1889, la société Eastman Kodak introduit le premier film photographique véritablement souple, constitué d'une émulsion au gélatino-bromure d'argent déposée sur un support en celluloïd (nitrate de cellulose) transparent et flexible. Cette innovation, qui semble aujourd'hui banale, représente un bond technologique considérable : elle libère la photographie du verre.\n\nJusqu'alors, les plaques de verre étaient le seul support offrant la transparence et la planéité nécessaires pour un négatif de qualité. Mais elles étaient lourdes, fragiles et encombrantes. Un photographe voyageur devait transporter des dizaines de plaques protégées dans des châssis individuels. Le film souple, lui, s'enroule sur une bobine : cent vues ne pèsent que quelques grammes et tiennent dans la poche.\n\nLe film souple transforme également la conception des appareils photographiques. Les boîtiers peuvent désormais être beaucoup plus petits et légers, puisqu'ils n'ont plus à accueillir un châssis rigide pour chaque vue. Le mécanisme d'avancement du film, actionné par une simple molette, permet d'enchaîner les prises de vue rapidement. C'est la condition technique indispensable qui mènera aux appareils miniatures des années 1920-1930.\n\nMais l'impact le plus retentissant du film souple se situe peut-être en dehors de la photographie fixe. Thomas Edison et son assistant William Kennedy Dickson s'emparent immédiatement de cette innovation pour créer le kinétoscope (1891), puis le kinétographe, les premiers appareils de prise de vue et de projection d'images animées. Sans le film souple d'Eastman, le cinéma tel que nous le connaissons n'aurait tout simplement pas pu exister. La photographie et le cinéma sont, à ce titre, deux branches d'un même arbre technologique.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Undeveloped_film_in_cartridge.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Undeveloped_film_in_cartridge.jpg', caption: 'Film souple en rouleau — le support qui a révolutionné la photographie et rendu possible le cinéma' },
    ],
    category: 'invention',
    era: 'democratisation',
  },
  {
    id: 'brownie-kodak',
    year: 1900,
    title: 'Le Brownie de Kodak',
    summary:
      "Kodak lance le Brownie, un appareil photographique vendu un dollar, à la portée de toutes les bourses. Ce petit boîtier en carton déclenche une véritable révolution culturelle en mettant la photographie à la portée des enfants et des familles modestes.",
    content:
      "En février 1900, Kodak lance le Brownie, un appareil photographique d'une simplicité extrême vendu au prix dérisoire d'un dollar. Le boîtier, une boîte en carton renforcé recouverte de simili-cuir, est équipé d'un objectif ménisque simple et d'un obturateur rotatif. Il utilise le film en rouleau n°117 de Kodak, qui coûte 15 cents pour six poses. Le nom « Brownie », inspiré des petits lutins illustrés par Palmer Cox dans les livres pour enfants, indique clairement la cible visée : les jeunes.\n\nLe succès est immédiat et phénoménal. Kodak vend 150 000 Brownies dès la première année. Pour la première fois, la photographie n'est plus un luxe ni même un loisir de classe moyenne aisée : elle devient accessible à presque tout le monde. Les familles ouvrières peuvent désormais documenter les baptêmes, les communions, les vacances, les moments du quotidien. Un pan entier de l'histoire sociale, jusque-là invisible, commence à être enregistré.\n\nLe Brownie inaugure également le concept de « système photographique » à bas coût : l'appareil est vendu à perte ou presque, tandis que les bénéfices proviennent de la vente continue de pellicules et du service de développement. Ce modèle économique sera celui de Kodak pendant tout le XXe siècle et inspirera d'innombrables entreprises dans d'autres secteurs.\n\nLa gamme Brownie évoluera au fil des décennies, se déclinant en dizaines de modèles différents jusqu'en 1986. Certains modèles iconiques, comme le Brownie Hawkeye (1949) ou le Brownie Starflash (1957), accompagneront des générations entières d'Américains et d'Européens dans leur apprentissage de la photographie. Au total, des dizaines de millions de Brownies seront vendus, faisant de cette gamme l'un des plus grands succès commerciaux de l'histoire de la photographie.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Kodak_Brownie_No._2%2C_Model_F.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Kodak_Brownie_No._2%2C_Model_F.jpg', caption: 'Le Kodak Brownie — vendu 1 dollar, il met la photographie à la portée de tous' },
    ],
    category: 'camera',
    era: 'democratisation',
  },
  {
    id: 'autochrome-lumiere',
    year: 1907,
    title: "L'Autochrome Lumière",
    summary:
      "Les frères Auguste et Louis Lumière commercialisent l'Autochrome, le premier procédé de photographie couleur véritablement pratique. Basé sur des grains microscopiques de fécule de pomme de terre teintés, il offre au monde des images d'une beauté onirique.",
    content:
      "Le 10 juin 1907, les frères Lumière présentent officiellement l'Autochrome à la presse parisienne, et le procédé est mis en vente le 1er septembre suivant. C'est le premier système de photographie couleur suffisamment simple et fiable pour être utilisé par des amateurs éclairés. L'enthousiasme est immense : le photographe Alfred Stieglitz déclare que « la couleur est désormais un fait accompli ».\n\nLe principe de l'Autochrome est d'une ingéniosité remarquable. Une plaque de verre est recouverte d'une mosaïque de millions de grains microscopiques de fécule de pomme de terre, teintés en orange, vert et violet — les trois couleurs complémentaires du rouge, bleu et vert. Ces grains, d'un diamètre moyen de 15 micromètres, agissent comme autant de minuscules filtres colorés. Une couche d'émulsion panchromatique noir et blanc est appliquée par-dessus. Lors de la prise de vue, la lumière traverse d'abord la mosaïque de fécule, qui sélectionne les couleurs, avant d'impressionner l'émulsion.\n\nAprès développement par inversion (pour obtenir un positif direct), chaque grain de fécule laisse passer la couleur qu'il a filtrée, reconstituant l'image en couleurs lorsqu'on regarde la plaque par transparence ou qu'on la projette. Le résultat est d'une beauté singulière : les couleurs sont douces, légèrement pointillistes, évoquant les tableaux impressionnistes. Les autochromes possèdent un charme nostalgique que la photographie couleur moderne, plus fidèle mais plus froide, ne retrouvera jamais tout à fait.\n\nL'Autochrome connaît un succès considérable, notamment auprès des photographes pictorialistes et des amateurs fortunés. Albert Kahn l'utilise pour son monumental projet des « Archives de la Planète », envoyant des photographes documenter en couleurs les peuples et les paysages du monde entier. Plus de 72 000 autochromes seront réalisés pour ce projet entre 1909 et 1931. L'Autochrome restera le procédé couleur dominant jusqu'à l'introduction du Kodachrome en 1935.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Agar_Agar_Ausstellung_Autochrome_Auguste_und_Louis_Lumi%C3%A8re_Blumen.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Agar_Agar_Ausstellung_Autochrome_Auguste_und_Louis_Lumi%C3%A8re_Blumen.jpg', caption: 'Autochrome des frères Lumière — le rendu pointilliste caractéristique des grains de fécule de pomme de terre teints' },
    ],
    category: 'invention',
    era: 'democratisation',
  },
  {
    id: 'ur-leica-prototype',
    year: 1913,
    title: 'Le premier Leica prototype (Ur-Leica)',
    summary:
      "Oskar Barnack, ingénieur chez Leitz, construit un petit appareil utilisant le film cinématographique 35 mm. Ce prototype, l'Ur-Leica, inaugure l'ère de la photographie miniature et changera pour toujours la pratique du médium.",
    content:
      "En 1913, Oskar Barnack, un ingénieur souffrant d'asthme travaillant pour l'entreprise d'optique Ernst Leitz à Wetzlar en Allemagne, construit un petit appareil photographique utilisant le film cinématographique 35 mm standard. Son idée est simple mais révolutionnaire : au lieu de transporter le lourd matériel grand format de l'époque, pourquoi ne pas utiliser un petit négatif de 24 × 36 mm et l'agrandir au tirage ? Ce prototype, connu aujourd'hui sous le nom d'Ur-Leica, tient dans la paume de la main.\n\nBarnack est initialement motivé par des raisons personnelles : son asthme rend pénible le transport des appareils de format moyen ou grand format de l'époque, qui pèsent plusieurs kilogrammes avec leur trépied. Il imagine un appareil qui tiendrait dans la poche d'un manteau et permettrait de photographier à main levée, sans trépied, en profitant de la lumière disponible.\n\nLe film 35 mm, inventé par Thomas Edison pour le cinéma en 1892, présente l'avantage d'être facilement disponible et peu coûteux. Barnack double simplement la hauteur de l'image cinématographique (18 × 24 mm) pour obtenir son format 24 × 36 mm, offrant ainsi une surface suffisante pour des agrandissements de qualité acceptable. Il conçoit un objectif de 42 mm très lumineux et un obturateur à rideaux précis.\n\nLa Première Guerre mondiale interrompt le développement du projet. Il faudra attendre 1925 pour que le Leica I (pour LEItz CAmera) soit finalement commercialisé. Mais dès 1913, les deux exemplaires de l'Ur-Leica que Barnack utilise personnellement démontrent le potentiel du petit format. Les photographies qu'il réalise à Wetzlar lors de la crue de la Lahn en 1920 sont d'une qualité remarquable et prouvent que l'avenir de la photographie réside dans la miniaturisation.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/LEI0060_186_Leica_I_Mod_A_Elmar_-_Sn._5193_1927_-M-_Front-0.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/LEI0060_186_Leica_I_Mod_A_Elmar_-_Sn._5193_1927_-M-_Front-0.jpg', caption: 'Leica I Model A — version commerciale dérivée du prototype Ur-Leica de Barnack' },
    ],
    category: 'camera',
    era: 'democratisation',
  },
  {
    id: 'photo-grande-guerre',
    year: 1914,
    endYear: 1918,
    title: 'La photographie pendant la Grande Guerre',
    summary:
      "La Première Guerre mondiale voit l'utilisation massive de la photographie à des fins militaires, documentaires et de propagande. Les images des tranchées révèlent au monde l'horreur du conflit industriel moderne.",
    content:
      "La Grande Guerre de 1914-1918 constitue un tournant dans l'histoire de la photographie de guerre. Pour la première fois, le conflit est documenté de manière systématique et à grande échelle, tant par les services photographiques des armées que par les soldats eux-mêmes. La photographie aérienne, en particulier, devient un outil militaire de première importance pour la reconnaissance et la cartographie des positions ennemies.\n\nChaque armée belligérante crée des sections photographiques officielles. La Section Photographique de l'Armée (SPA), fondée en France en 1915, emploie des dizaines de photographes et d'opérateurs cinématographiques. Ces images, soigneusement contrôlées par la censure, servent à la fois de documentation, d'outil de propagande et de témoignage historique. Des opérateurs comme Pierre-Ambroise Richebé ou Albert Moreau risquent leur vie sur le front pour saisir la réalité des combats.\n\nParallèlement aux images officielles, des millions de soldats emportent dans les tranchées leurs appareils personnels — souvent des Vest Pocket Kodak, suffisamment petits pour se glisser dans un paquetage. Ces photographies « de poilu », longtemps ignorées, constituent aujourd'hui un témoignage inestimable sur la vie quotidienne au front : la boue, l'attente, les camarades, les ruines, les moments de répit. Elles offrent un regard intime et sans filtre que les photographes officiels ne montrent pas.\n\nLa Grande Guerre accélère également le développement de la photographie aérienne. En 1914, la reconnaissance se fait à l'œil nu depuis des ballons et des avions. Dès 1915, des caméras spécialement conçues sont montées sur les appareils, et l'interprétation des clichés aériens devient une discipline militaire à part entière. Cette expertise sera transférée après-guerre aux domaines civils de la cartographie, de l'urbanisme et de l'archéologie.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Cheshire_Regiment_trench_Somme_1916.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Cheshire_Regiment_trench_Somme_1916.jpg', caption: 'Soldats du Cheshire Regiment dans une tranchée de la Somme (1916)' },
    ],
    category: 'movement',
    era: 'democratisation',
  },

  // ─── L'Âge d'Or (1920–1960) ──────────────────────────────────────────
  {
    id: 'leica-i-commercial',
    year: 1925,
    title: 'Lancement commercial du Leica I',
    summary:
      "Après des années d'hésitation, Ernst Leitz décide de commercialiser l'appareil 35 mm conçu par Oskar Barnack. Le Leica I inaugure l'ère de la photographie de reportage moderne et inspire une lignée d'appareils légendaires.",
    content:
      "En 1925, lors de la foire de Leipzig, la firme Ernst Leitz de Wetzlar présente officiellement le Leica I (Leitz Camera), un appareil compact utilisant le film cinématographique 35 mm. La décision de le commercialiser a été prise par Ernst Leitz II en 1924, lors d'une réunion restée célèbre sous le nom de « Leica-Entscheidung » (la décision Leica), malgré les réticences de certains collaborateurs qui doutaient du potentiel commercial du petit format.\n\nLe Leica I est un bijou d'ingénierie mécanique : un boîtier métallique compact pesant moins de 400 grammes, équipé d'un obturateur à rideaux offrant des vitesses allant du 1/20 au 1/500 de seconde. Son objectif Elmar 50 mm f/3.5, calculé par Max Berek, offre une qualité optique exceptionnelle pour un format aussi petit. Le film de 35 mm permet 36 poses par chargement, contre 8 à 16 pour les appareils moyen format de l'époque.\n\nL'impact sur la pratique photographique est immense. Le Leica permet pour la première fois de photographier de manière véritablement spontanée, dans la rue, dans les foules, en lumière faible, sans attirer l'attention. Une nouvelle esthétique naît, fondée sur l'instantanéité, le cadrage audacieux et la proximité avec le sujet. Des photographes comme André Kertész, puis Henri Cartier-Bresson, Robert Capa et bien d'autres, feront du Leica leur instrument de prédilection.\n\nLe Leica engendre également une véritable dynastie d'appareils. Le Leica II (1932) ajoute un télémètre couplé, le Leica III (1933) élargit la gamme de vitesses. Ces appareils seront produits en centaines de milliers d'exemplaires et imités par des dizaines de fabricants dans le monde entier, notamment au Japon (Canon, Nikon) et en URSS (FED, Zorki). Le format 24 × 36 mm, né de l'intuition d'Oskar Barnack, deviendra le standard universel de la photographie pour le reste du siècle.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/LEI0060_186_Leica_I_Mod_A_Elmar_-_Sn._5193_1927_-M-_Front-0.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/LEI0060_186_Leica_I_Mod_A_Elmar_-_Sn._5193_1927_-M-_Front-0.jpg', caption: "Leica I Model A avec objectif Elmar 50mm — l'appareil qui a inventé la photographie 35mm" },
    ],
    category: 'camera',
    era: 'age-or',
  },
  {
    id: 'magazine-life',
    year: 1936,
    title: 'Le magazine LIFE et le photojournalisme',
    summary:
      "Le lancement du magazine LIFE par Henry Luce consacre l'avènement du photojournalisme comme forme d'expression majeure. Le magazine publie de grands récits en images qui informent et émeuvent des millions de lecteurs américains.",
    content:
      "Le 23 novembre 1936, le premier numéro du magazine LIFE paraît dans les kiosques américains avec en couverture une photographie de Margaret Bourke-White montrant le barrage de Fort Peck dans le Montana. La mission du magazine, telle que l'a définie son fondateur Henry Luce, est ambitieuse : « Voir la vie, voir le monde, être témoin des grands événements ». LIFE incarne l'apogée du photojournalisme, une forme narrative qui utilise la photographie non comme simple illustration, mais comme langage principal du récit.\n\nLe succès de LIFE est fulgurant : le premier tirage de 466 000 exemplaires est épuisé en quelques heures. En quelques années, le magazine atteint une diffusion de plusieurs millions d'exemplaires par semaine. Sa formule repose sur de grands « photo-essays » (essais photographiques) de plusieurs pages, confiés aux meilleurs photographes du monde : Margaret Bourke-White, Alfred Eisenstaedt, W. Eugene Smith, Gordon Parks, Robert Capa.\n\nLIFE ne naît pas ex nihilo. Il s'inscrit dans une tradition inaugurée en Allemagne par les magazines Berliner Illustrirte Zeitung et Münchner Illustrierte Presse dans les années 1920, où des rédacteurs photo comme Stefan Lorant inventent le concept du récit photographique. L'arrivée au pouvoir des nazis provoque l'exil de nombreux journalistes et photographes européens aux États-Unis, où ils contribuent à l'essor du photojournalisme américain.\n\nL'influence de LIFE sur la culture visuelle du XXe siècle est incommensurable. Le magazine contribue à forger l'opinion publique sur les grands événements de l'époque : la Seconde Guerre mondiale, la lutte pour les droits civiques, la conquête spatiale, la guerre du Vietnam. Certaines images publiées dans LIFE — le baiser de la victoire à Times Square, la fillette au napalm, le lever de terre vu depuis la Lune — sont devenues des icônes universelles qui transcendent le journalisme pour s'inscrire dans la mémoire collective de l'humanité.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/LIFE_magazine_logo.svg/800px-LIFE_magazine_logo.svg.png',
        illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Margaret_Bourke-White_at_Work.jpg/800px-Margaret_Bourke-White_at_Work.jpg', caption: 'Margaret Bourke-White, première femme photographe de guerre accréditée et photographe vedette de LIFE' },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Eisenstaedt_paris1963_full.jpg/800px-Eisenstaedt_paris1963_full.jpg', caption: 'Alfred Eisenstaedt à Paris en 1963 — photographe emblématique du magazine LIFE' },
    ],
    category: 'movement',
    era: 'age-or',
  },
  {
    id: 'exakta-premier-slr-35mm',
    year: 1936,
    title: "L'Exakta, premier SLR 35mm",
    summary:
      "L'Ihagee Exakta, fabriqué à Dresde, est le premier appareil reflex mono-objectif (SLR) à utiliser le film 35 mm. Il pose les bases d'une catégorie d'appareils qui dominera la photographie pendant un demi-siècle.",
    content:
      "En 1936, la firme Ihagee de Dresde en Allemagne lance le Kine Exakta, premier appareil reflex mono-objectif (single-lens reflex ou SLR) au format 35 mm. Le principe du reflex — un miroir à 45° qui renvoie l'image formée par l'objectif vers un verre de visée — était connu depuis le XIXe siècle pour les appareils grand format, mais son adaptation au petit format 35 mm représente un défi technique considérable.\n\nL'avantage fondamental du SLR est que le photographe voit exactement ce que l'objectif « voit ». Contrairement aux appareils à télémètre comme le Leica, il n'y a pas de décalage de parallaxe entre la visée et la prise de vue, ce qui est particulièrement précieux pour la photographie rapprochée et l'utilisation de téléobjectifs. De plus, le système est intrinsèquement compatible avec des objectifs interchangeables de toutes focales.\n\nLe Kine Exakta est un appareil remarquablement innovant pour son époque. Il dispose d'un obturateur à rideau offrant des vitesses allant jusqu'au 1/1000 de seconde, d'un retardateur intégré et d'une monture à baïonnette permettant le changement rapide d'objectifs. Son déclencheur est situé sur le côté gauche du boîtier — une particularité que conserveront tous les Exakta par la suite.\n\nBien que le Kine Exakta n'ait pas connu le succès commercial immédiat du Leica, il a posé les fondations d'une catégorie d'appareils qui dominera la photographie de la fin des années 1950 aux années 2000. Après la guerre, les ingénieurs japonais s'inspireront largement de l'Exakta pour développer leurs propres SLR — le Asahiflex (1952), le Nikon F (1959), le Canon F-1 (1971) — qui porteront le concept à sa perfection mécanique et optique.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Exakta_Varex_IIb_with_Zeiss_Pancolar.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Exakta_Varex_IIb_with_Zeiss_Pancolar.jpg', caption: "Exakta Varex IIb avec objectif Carl Zeiss Pancolar — descendant du premier SLR 35mm" },
    ],
    category: 'camera',
    era: 'age-or',
  },
  {
    id: 'kodacolor-negatif-couleur',
    year: 1942,
    title: 'Kodacolor, premier film négatif couleur',
    summary:
      "Kodak lance le Kodacolor, premier film négatif couleur destiné au grand public. Contrairement aux diapositives, le négatif couleur permet de réaliser des tirages sur papier, ouvrant la voie à la photographie couleur de masse.",
    content:
      "En 1942, en pleine Seconde Guerre mondiale, Kodak introduit le Kodacolor, premier film négatif couleur destiné au marché amateur. Ce film, d'abord disponible uniquement en rouleau pour appareils de format moyen, produit un négatif où les couleurs sont inversées et complémentaires — les rouges apparaissent en cyan, les verts en magenta, les bleus en jaune — à partir duquel on tire des épreuves positives sur papier couleur.\n\nLe film négatif couleur offre un avantage décisif sur les diapositives (Kodachrome, lancé en 1935) : il permet d'obtenir facilement des tirages sur papier, le format favori des albums de famille. Sa latitude d'exposition est également plus généreuse, pardonnant mieux les erreurs des amateurs. En revanche, la qualité des premiers tirages Kodacolor est médiocre par rapport aux éclatantes diapositives Kodachrome, et les couleurs ont tendance à se dégrader avec le temps.\n\nL'importance du Kodacolor réside dans le fait qu'il rend la photographie couleur accessible au plus grand nombre. Avant son apparition, la couleur en photographie était réservée aux professionnels et aux amateurs éclairés capables de gérer la complexité technique des diapositives. Avec le négatif couleur, le processus est aussi simple qu'avec un film noir et blanc : on expose, on fait développer, on reçoit ses tirages.\n\nAu fil des décennies, le film négatif couleur sera constamment amélioré. Le Kodacolor II (1972), le Kodacolor VR (1983) et le Kodak Gold (1988) offriront des performances toujours meilleures en termes de grain, de fidélité des couleurs et de stabilité. Dans les années 1970-1990, le négatif couleur représentera la quasi-totalité du marché amateur, les laboratoires de développement rapide (minilabs) fleurissant dans chaque centre commercial et chaque pharmacie.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Kodachrome_film_rolls.jpg/800px-Kodachrome_film_rolls.jpg',
        illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/16mm_Kodachrome_40_film_in_cartridge.jpg/800px-16mm_Kodachrome_40_film_in_cartridge.jpg', caption: 'Film Kodachrome en cartouche — le film couleur le plus célèbre de Kodak' },
    ],
    category: 'invention',
    era: 'age-or',
  },
  {
    id: 'polaroid-edwin-land',
    year: 1947,
    title: "L'invention du Polaroid par Edwin Land",
    summary:
      "Edwin Land présente l'appareil Polaroid Land Camera Model 95, qui produit une épreuve photographique en quelques minutes sans laboratoire. La photographie instantanée est née, offrant la gratification immédiate de l'image.",
    content:
      "Le 21 février 1947, lors d'une réunion de l'Optical Society of America à New York, Edwin Herbert Land présente un appareil qui semble relever de la magie : un boîtier qui produit une photographie finie en noir et blanc en 60 secondes, sans chambre noire, sans produits chimiques, sans aucune manipulation. Le Polaroid Land Camera Model 95 est commercialisé l'année suivante, le 26 novembre 1948, au grand magasin Jordan Marsh de Boston. Les 56 appareils disponibles sont vendus en quelques heures.\n\nL'idée du Polaroid serait née en 1943, lorsque la fille d'Edwin Land, Jennifer, alors âgée de trois ans, lui demanda pourquoi elle ne pouvait pas voir immédiatement la photographie qu'il venait de prendre. Cette question enfantine déclencha chez Land une réflexion intense qui aboutit, en l'espace de quelques heures, à la conception théorique complète du système de photographie instantanée.\n\nLe génie du procédé Polaroid réside dans un sandwich chimique d'une complexité prodigieuse. Le film contient, entre le négatif et le papier positif, une capsule de réactifs qui éclate lorsque l'épreuve passe entre des rouleaux presseurs à la sortie de l'appareil. Les réactifs migrent entre les couches, développant l'image négative et transférant simultanément une image positive sur le papier récepteur. Tout le processus se déroule en pleine lumière, dans l'épaisseur même du film.\n\nLe Polaroid va bien au-delà d'un simple gadget. Des artistes comme Ansel Adams (qui sera consultant pour la firme), Andy Warhol, David Hockney et Helmut Newton l'adopteront comme outil créatif à part entière. Le format SX-70 (1972), qui supprime la nécessité de peler une couche protectrice et offre des couleurs d'une richesse remarquable, deviendra une icône culturelle. La photographie instantanée anticipe, à sa manière, le besoin de gratification immédiate que satisferont plus tard l'écran numérique et les réseaux sociaux.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Polaroid_Land_Camera_Model_95_-_MIT_Museum_-_DSC03766.JPG',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Polaroid_Land_Camera_Model_95_-_MIT_Museum_-_DSC03766.JPG', caption: 'Polaroid Land Camera Model 95 — le premier appareil à développement instantané (MIT Museum)' },
    ],
    category: 'invention',
    era: 'age-or',
  },
  {
    id: 'hasselblad-1600f',
    year: 1949,
    title: 'Le Hasselblad 1600F',
    summary:
      "La firme suédoise Victor Hasselblad lance le 1600F, un appareil reflex moyen format modulaire d'une qualité de fabrication exceptionnelle. Il inaugure un système photographique qui deviendra la référence absolue des professionnels.",
    content:
      "En 1949, Victor Hasselblad, passionné d'ornithologie et de photographie, présente le 1600F, premier appareil de sa firme éponyme fondée à Göteborg en Suède. Cet appareil reflex mono-objectif au format 6 × 6 cm est d'une conception radicalement modulaire : le dos film, le viseur et l'objectif sont tous interchangeables, permettant au photographe d'adapter l'appareil à chaque situation.\n\nLe Hasselblad 1600F, nommé ainsi pour sa vitesse d'obturation maximale de 1/1600 de seconde, est né de l'expérience acquise par Victor Hasselblad pendant la Seconde Guerre mondiale, lorsque l'armée suédoise lui confia la conception d'une caméra de reconnaissance aérienne. La précision mécanique et la robustesse développées pour les applications militaires se retrouvent dans l'appareil civil.\n\nLe système Hasselblad sera perfectionné avec le 500C en 1957, qui abandonne l'obturateur focal au profit d'un obturateur central Compur Synchro intégré dans chaque objectif Carl Zeiss. Ce choix, coûteux mais techniquement supérieur, offre une synchronisation flash à toutes les vitesses et une fiabilité exemplaire. Les objectifs Zeiss conçus pour le Hasselblad — notamment le Planar 80 mm f/2.8 — sont considérés parmi les meilleurs jamais produits.\n\nLe Hasselblad deviendra l'appareil de prédilection des photographes de studio, de mode et de publicité pendant plusieurs décennies. Richard Avedon, Irving Penn, Helmut Newton l'utiliseront pour créer certaines des images les plus célèbres du XXe siècle. Mais c'est peut-être dans l'espace que le Hasselblad connaîtra sa consécration ultime : choisi par la NASA dès le programme Mercury en 1962, il accompagnera les astronautes d'Apollo sur la Lune en 1969, produisant les photographies les plus emblématiques de l'aventure spatiale humaine.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Hasselblad_500C.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Hasselblad_500C.jpg', caption: "Hasselblad 500C — l'appareil moyen format qui ira sur la Lune" },
    ],
    category: 'camera',
    era: 'age-or',
  },
  {
    id: 'cartier-bresson-images-sauvette',
    year: 1952,
    title: 'Cartier-Bresson publie « Images à la Sauvette »',
    summary:
      "Henri Cartier-Bresson publie son ouvrage fondateur « Images à la Sauvette », dont la préface théorise le concept de l'« instant décisif ». Ce livre établit les fondements esthétiques de la photographie de reportage moderne.",
    content:
      "En 1952, les éditions Verve publient « Images à la Sauvette » (The Decisive Moment dans l'édition américaine), un recueil de 126 photographies d'Henri Cartier-Bresson accompagné d'une préface devenue le texte théorique le plus influent de l'histoire de la photographie. La couverture est illustrée par Henri Matisse, ami du photographe. L'ouvrage rassemble vingt ans de travail à travers l'Europe, l'Asie et les Amériques.\n\nDans sa préface, Cartier-Bresson expose sa philosophie photographique avec une clarté magistrale. La photographie, écrit-il, est « la reconnaissance simultanée, dans une fraction de seconde, d'une part de la signification d'un fait, et de l'autre d'une organisation rigoureuse des formes perçues visuellement qui expriment ce fait ». C'est la définition même de ce que l'édition américaine appellera le « decisive moment » — l'instant où le contenu et la forme atteignent ensemble leur maximum d'intensité.\n\nCartier-Bresson formule également des principes pratiques qui influenceront des générations de photographes : le refus du recadrage (le cadrage doit être définitif au moment de la prise de vue), la discrétion absolue du photographe (qui ne doit jamais interférer avec son sujet), l'utilisation exclusive du Leica et de l'objectif 50 mm, le rejet de la mise en scène. Ces principes, presque ascétiques, élèvent la photographie de reportage au rang d'art majeur.\n\nL'influence d'« Images à la Sauvette » est immense et durable. Le livre définit un idéal de la photographie comme art de l'observation, de la patience et de l'intuition géométrique. Cartier-Bresson, cofondateur de l'agence Magnum en 1947, incarne un modèle du photographe-auteur, indépendant et engagé, qui inspirera Robert Doisneau, Marc Riboud, Josef Koudelka, Sebastião Salgado et d'innombrables autres praticiens du reportage humaniste.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Henri_Cartier-Bresson%2C_The_Decisive_Moment%2C_cover.jpg/800px-Henri_Cartier-Bresson%2C_The_Decisive_Moment%2C_cover.jpg',
        illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Henri_Cartier-Bresson%2C_The_Decisive_Moment%2C_cover.jpg/800px-Henri_Cartier-Bresson%2C_The_Decisive_Moment%2C_cover.jpg', caption: "Couverture de « Images à la Sauvette » (The Decisive Moment), dessinée par Henri Matisse (1952)" },
    ],
    category: 'movement',
    era: 'age-or',
  },

  // ─── La Révolution SLR (1960–1990) ────────────────────────────────────
  {
    id: 'nikon-f',
    year: 1959,
    title: 'Le Nikon F',
    summary:
      "Nikon lance le F, un reflex 35 mm professionnel d'une robustesse et d'une polyvalence inégalées. Adopté par les photojournalistes du monde entier, il marque le début de la domination japonaise sur l'industrie photographique.",
    content:
      "En mars 1959, Nippon Kogaku (futur Nikon) présente le Nikon F, un appareil reflex mono-objectif 35 mm qui va redéfinir les standards de la photographie professionnelle. Conçu par une équipe d'ingénieurs dirigée par Yusaku Kamekura, le Nikon F combine une construction quasi indestructible, un système optique de premier ordre et une modularité remarquable.\n\nLe Nikon F séduit immédiatement les professionnels par sa fiabilité à toute épreuve. Là où les reflex allemands de l'époque nécessitent des réglages fréquents et un entretien délicat, le Nikon F fonctionne dans les conditions les plus extrêmes : froid glacial, chaleur tropicale, humidité, poussière, chocs. Les correspondants de guerre au Vietnam l'adoptent massivement — certains racontent que leur Nikon F a arrêté une balle ou survécu à une explosion. La gamme d'objectifs Nikkor, héritière d'une tradition optique japonaise d'excellence, offre une qualité d'image qui rivalise avec les meilleurs verres allemands.\n\nLe Nikon F inaugure également le concept du « système professionnel » : des dizaines d'accessoires interchangeables — viseurs, écrans de mise au point, dos de chargement, moteurs d'entraînement — permettent de configurer l'appareil pour n'importe quelle spécialité photographique. Ce concept de système intégré sera repris par tous les fabricants majeurs.\n\nL'impact du Nikon F dépasse le cadre technique. Il symbolise le transfert du centre de gravité de l'industrie photographique de l'Allemagne vers le Japon, un mouvement qui s'accélérera dans les décennies suivantes. Les firmes japonaises — Nikon, Canon, Minolta, Pentax, Olympus — appliqueront les méthodes de production industrielle japonaises à la fabrication d'appareils photo, offrant une qualité constante à des prix compétitifs. Le Nikon F et ses successeurs (F2, F3, F4, F5, F6) formeront la colonne vertébrale du photojournalisme professionnel pendant un demi-siècle.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Nikon_F_with_FTn_Photomic_meter_head.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Nikon_F_with_FTn_Photomic_meter_head.jpg', caption: "Nikon F avec tête de mesure Photomic FTn — l'appareil des photojournalistes au Vietnam" },
    ],
    category: 'camera',
    era: 'revolution-slr',
  },
  {
    id: 'exposition-automatique',
    year: 1963,
    title: "Le premier appareil à exposition automatique",
    summary:
      "L'introduction de la mesure de lumière TTL (Through The Lens) et de l'exposition automatique simplifie radicalement la prise de vue. Le photographe peut désormais se concentrer sur le cadrage et l'instant plutôt que sur les réglages techniques.",
    content:
      "Au début des années 1960, plusieurs fabricants japonais introduisent des systèmes de mesure de lumière intégrés aux appareils reflex. Le Topcon RE Super (1963) est l'un des premiers SLR à offrir une mesure TTL (Through The Lens), c'est-à-dire que la cellule photoélectrique mesure la lumière effectivement transmise par l'objectif. Cette innovation élimine les erreurs dues aux posemètres externes qui ne tiennent pas compte des filtres, des tubes-allonge ou de la transmission réelle de l'objectif.\n\nLa mesure TTL ouvre la voie à l'exposition automatique, où l'appareil détermine lui-même le couple vitesse-diaphragme optimal. Le Canon FX (1963) intègre un posemètre CdS couplé, et les années suivantes voient apparaître des appareils offrant une priorité vitesse (l'utilisateur choisit la vitesse, l'appareil ajuste le diaphragme) ou une priorité diaphragme (l'inverse). Le Minolta SRT 101 (1966) popularise la mesure « pondérée centralement » qui donne plus d'importance au centre de l'image.\n\nCes avancées transforment profondément la pratique photographique. Auparavant, le photographe devait estimer ou mesurer la luminosité ambiante, consulter une table d'exposition ou un posemètre séparé, puis reporter manuellement les valeurs sur l'appareil — un processus qui prenait de précieuses secondes et exigeait une expertise technique certaine. Avec l'exposition automatique, un débutant peut obtenir des images correctement exposées dès ses premières prises de vue.\n\nCertains puristes s'inquiètent alors de voir la technique supplanter le savoir-faire. Mais les photographes professionnels reconnaissent rapidement l'avantage : libérés des calculs d'exposition, ils peuvent se concentrer entièrement sur le cadrage, la composition et l'instant. L'automatisation de l'exposition n'appauvrit pas la photographie — elle la démocratise une fois de plus, exactement comme le Kodak n°1 l'avait fait soixante-quinze ans plus tôt.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Canonet_QL17_GIII.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Canonet_QL17_GIII.jpg', caption: "Canon Canonet QL17 GIII — exemple d'appareil compact à exposition automatique des années 1970" },
    ],
    category: 'technique',
    era: 'revolution-slr',
  },
  {
    id: 'instamatic-kodak',
    year: 1963,
    title: "L'Instamatic de Kodak",
    summary:
      "Kodak lance l'Instamatic, un appareil utilisant une cartouche de film simple à charger. Avec plus de 50 millions d'exemplaires vendus, l'Instamatic devient l'appareil photo le plus vendu de l'histoire à cette date.",
    content:
      "En février 1963, Kodak présente l'Instamatic, un appareil photographique compact utilisant un nouveau format de film en cartouche : le 126. La cartouche en plastique s'insère dans l'appareil d'un simple geste, sans manipulation de film — fini les risques de mauvais chargement, de voile ou de film coincé. L'Instamatic 100, modèle d'entrée de gamme, est vendu à un prix très accessible, et la gamme s'étend rapidement à une dizaine de modèles.\n\nLe succès de l'Instamatic est vertigineux. Kodak vend plus de 50 millions d'appareils de la gamme au cours de la décennie suivante, un record absolu pour l'époque. La cartouche 126 élimine la dernière barrière technique qui pouvait intimider les utilisateurs non initiés : le chargement du film. L'appareil est véritablement « point and shoot » — viser et déclencher, rien de plus.\n\nL'Instamatic s'inscrit dans la stratégie constante de Kodak depuis George Eastman : simplifier l'acte photographique au maximum pour vendre le plus de film possible. Chaque Instamatic vendu à bas prix garantit des années de revenus sur les pellicules et le développement. Le format 126 sera suivi par le 110 (Pocket Instamatic, 1972), encore plus compact, qui connaîtra un succès comparable.\n\nAu-delà de son succès commercial, l'Instamatic a une importance culturelle considérable. Il démocratise la photographie couleur auprès de couches sociales qui n'y avaient pas encore accès. Les « snapshots » réalisés avec des Instamatic constituent aujourd'hui un trésor documentaire sur la vie quotidienne des années 1960-1970 : les vacances en camping, les fêtes de famille, les premières voitures, les modes vestimentaires. Ces images, souvent techniquement imparfaites, possèdent une authenticité et une valeur émotionnelle irremplaçables.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/2015_04_08_012_Kodak_Instamatic_50.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/2015_04_08_012_Kodak_Instamatic_50.jpg', caption: "Kodak Instamatic 50 avec sa cartouche de film 126 à chargement simplifié" },
    ],
    category: 'camera',
    era: 'revolution-slr',
  },
  {
    id: 'photo-lunaire-apollo',
    year: 1969,
    title: 'Photographie lunaire — Apollo 11',
    summary:
      "Les astronautes d'Apollo 11 emportent des Hasselblad modifiés sur la Lune et rapportent des photographies qui deviennent les images les plus célèbres du XXe siècle. La photographie accompagne l'humanité dans son plus grand voyage.",
    content:
      "Le 20 juillet 1969, Neil Armstrong et Buzz Aldrin posent le pied sur la Lune, emportant avec eux deux appareils Hasselblad 500EL modifiés pour les conditions spatiales. Ces appareils, désignés Hasselblad EDC (Electric Data Camera), sont équipés d'objectifs Zeiss Biogon 60 mm et de dos film contenant des pellicules 70 mm spéciales. Des réticules (crosshairs) gravées sur la plaque de verre devant le film authentifient chaque image.\n\nLes modifications pour l'espace sont considérables. Les lubrifiants standard, qui se volatiliseraient dans le vide, sont remplacés par des formulations spéciales. Les surfaces sont peintes en argent pour résister aux températures extrêmes (de -150°C à +120°C). Les commandes sont agrandies pour être manipulables avec les gants épais des combinaisons spatiales. Le viseur reflex est remplacé par un simple cadre de visée, car le casque empêche de coller l'œil à l'oculaire.\n\nParmi les milliers de photographies rapportées par les missions Apollo, certaines sont devenues des icônes universelles. La célèbre image de Buzz Aldrin debout sur le sol lunaire, photographié par Neil Armstrong (dont on aperçoit le reflet dans la visière), est l'une des photographies les plus reproduites de l'histoire. « Earthrise » (Lever de Terre), prise par William Anders lors d'Apollo 8 en décembre 1968, montrant notre planète bleue s'élevant au-dessus de l'horizon lunaire, a profondément marqué les consciences et contribué à l'émergence du mouvement écologiste.\n\nFait remarquable : les appareils Hasselblad utilisés sur la surface lunaire y sont restés, abandonnés pour alléger le module de remontée. Seuls les dos film contenant les pellicules exposées ont été rapportés sur Terre. Douze Hasselblad reposent ainsi encore aujourd'hui sur le sol de la Lune, témoins silencieux de l'un des plus grands exploits de l'humanité.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Aldrin_Apollo_11.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Aldrin_Apollo_11.jpg', caption: "Buzz Aldrin sur la Lune, photographié par Neil Armstrong avec un Hasselblad 500 EL (20 juillet 1969)" },
    ],
    category: 'milestone',
    era: 'revolution-slr',
  },
  {
    id: 'premier-appareil-numerique',
    year: 1975,
    title: 'Premier appareil photo numérique',
    summary:
      "Steven Sasson, ingénieur chez Kodak, construit le premier appareil photographique numérique. Pesant 3,6 kg et produisant des images de 0,01 mégapixel, ce prototype annonce une révolution que Kodak elle-même ne saura pas exploiter.",
    content:
      "En décembre 1975, Steven Sasson, un jeune ingénieur de 24 ans employé par Kodak à Rochester, New York, assemble un prototype d'appareil photographique entièrement numérique. L'engin, de la taille d'un grille-pain et pesant 3,6 kilogrammes, utilise un capteur CCD (Charge-Coupled Device) de 100 × 100 pixels — soit 0,01 mégapixel — fabriqué par Fairchild Semiconductor. L'image, en noir et blanc, est enregistrée sur une cassette audio standard et nécessite 23 secondes pour être capturée.\n\nPour visualiser l'image, Sasson doit connecter le lecteur de cassette à un téléviseur spécialement modifié. La première image numérique de l'histoire montre le visage d'une assistante de laboratoire, Joy Marshall. La résolution est si faible qu'il faut un effort d'imagination pour distinguer les traits du sujet. Malgré cette qualité rudimentaire, Sasson comprend immédiatement le potentiel révolutionnaire de sa création : la photographie sans film, sans chimie, sans attente.\n\nSasson présente son invention à la direction de Kodak, qui accueille la démonstration avec un mélange de curiosité et de scepticisme. La réaction est symptomatique : « Qui voudrait regarder ses photos sur un téléviseur ? » lui demande-t-on. Kodak, dont les bénéfices reposent presque entièrement sur la vente de film et le développement, perçoit le numérique comme une menace plutôt qu'une opportunité. L'invention est brevetée mais mise de côté.\n\nL'ironie tragique de cette histoire est bien connue : Kodak, entreprise qui a inventé la photographie numérique, sera détruite par elle. Incapable de renoncer à son modèle économique fondé sur le film argentique, Kodak laissera d'autres — Canon, Nikon, Sony — exploiter la technologie numérique. En 2012, l'entreprise se déclarera en faillite. Steven Sasson, lui, sera décoré de la National Medal of Technology par le président Obama en 2009 pour son invention visionnaire.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Kodak_Sasson_BL.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Kodak_Sasson_BL.jpg', caption: "Le premier appareil photo numérique, construit par Steven Sasson chez Kodak en 1975 — 0,01 mégapixel, 3,6 kg" },
    ],
    category: 'invention',
    era: 'revolution-slr',
  },
  {
    id: 'konica-c35-af-autofocus',
    year: 1977,
    title: 'Le Konica C35 AF, premier autofocus',
    summary:
      "Konica lance le C35 AF, premier appareil photographique grand public équipé d'un système autofocus. La mise au point automatique libère le photographe d'une des manipulations les plus délicates de la prise de vue.",
    content:
      "En novembre 1977, Konica présente le C35 AF (AutoFocus), premier appareil photographique au monde doté d'un système de mise au point automatique destiné au grand public. Le système, développé par Honeywell, utilise un module infrarouge passif qui mesure le contraste de la scène pour déterminer la distance du sujet et ajuster automatiquement la position de l'objectif.\n\nLa mise au point manuelle est l'une des opérations les plus délicates de la photographie. Elle exige une bonne vue, de l'expérience et du temps — des fractions de seconde qui peuvent faire la différence entre une image nette et une image floue, particulièrement en situation de reportage ou de photographie sportive. L'autofocus élimine cette difficulté, permettant même aux porteurs de lunettes et aux débutants d'obtenir des images parfaitement nettes.\n\nLe Konica C35 AF est un compact à objectif fixe, et son système autofocus est encore rudimentaire : il ne fonctionne bien qu'en lumière suffisante et ne peut pas suivre un sujet en mouvement. Mais le principe est posé. Les années suivantes verront une course à l'innovation entre les fabricants japonais. Canon développe un autofocus par détection de phase, Nikon un système par détection de contraste, Minolta un système hybride.\n\nLa véritable révolution surviendra en 1985 avec le Minolta 7000, premier appareil reflex 35 mm à autofocus intégré dans le boîtier. Mais c'est le Konica C35 AF qui a franchi le premier pas. L'autofocus transformera progressivement l'ensemble de la photographie : au début du XXIe siècle, il sera devenu si rapide et si précis que même les photographes sportifs, les plus exigeants en matière de mise au point, abandonneront la mise au point manuelle pour confier cette tâche à leurs appareils.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Konica_C_35_AF_%282760322682%29.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Konica_C_35_AF_%282760322682%29.jpg', caption: "Konica C35 AF (1977) — le premier appareil photo grand public avec autofocus" },
    ],
    category: 'invention',
    era: 'revolution-slr',
  },
  {
    id: 'minolta-7000-af-reflex',
    year: 1985,
    title: "Le Minolta 7000, premier reflex autofocus",
    summary:
      "Le Minolta 7000 est le premier reflex 35 mm avec autofocus et motorisation intégrés dans le boîtier. Il déclenche une transformation de l'industrie et oblige tous les fabricants à adopter l'autofocus.",
    content:
      "En février 1985, Minolta lance le 7000 AF, un appareil qui marque un tournant dans l'histoire du reflex 35 mm. C'est le premier SLR à intégrer à la fois un système autofocus et un moteur d'avancement du film dans le boîtier, avec une nouvelle monture d'objectif (la monture A) spécialement conçue pour l'autofocus. Les objectifs sont dépourvus de bague de mise au point manuelle classique — un choix audacieux qui affirme sans ambiguïté que l'avenir est à l'automatisation.\n\nLe système autofocus du 7000, basé sur la détection de phase avec un capteur central, est d'une rapidité impressionnante pour l'époque. Couplé à des objectifs motorisés légers, il permet de faire la mise au point en une fraction de seconde dans la plupart des conditions d'éclairage. L'appareil offre également des modes d'exposition entièrement automatiques (programme, priorité vitesse, priorité diaphragme) et un affichage LCD sur le dessus du boîtier.\n\nLe succès commercial du Minolta 7000 est immédiat et force l'ensemble de l'industrie à réagir. Nikon lance le F-501 avec autofocus dès 1986, Canon répond de manière plus radicale en 1987 avec le système EOS et sa nouvelle monture EF, entièrement conçue autour de l'autofocus. Pentax, Olympus et les autres suivront. En quelques années, le reflex manuel à mise au point par télémètre ou sur verre dépoli cède la place au reflex autofocus.\n\nLe Minolta 7000 symbolise aussi la fin d'une époque : celle de l'appareil photographique comme instrument purement mécanique et optique, maîtrisé par le savoir-faire de l'opérateur. Désormais, l'électronique et le logiciel prennent en charge une part croissante des décisions techniques. Cette évolution, qui inquiétera les puristes, ouvrira la photographie à des millions de nouveaux praticiens et préparera le terrain pour la révolution numérique à venir.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Minolta7000.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Minolta7000.jpg', caption: "Minolta 7000 AF (1985) — le premier reflex 35mm à autofocus intégré au boîtier" },
    ],
    category: 'camera',
    era: 'revolution-slr',
  },

  // ─── L'Ère Numérique (1990–2010) ─────────────────────────────────────
  {
    id: 'adobe-photoshop',
    year: 1990,
    title: 'Adobe Photoshop 1.0',
    summary:
      "Adobe lance Photoshop 1.0 sur Macintosh, un logiciel de retouche d'image qui va transformer radicalement le traitement photographique. La post-production numérique devient un art à part entière.",
    content:
      "Le 19 février 1990, Adobe Systems lance Photoshop 1.0, un logiciel de retouche d'images numériques pour Macintosh développé par les frères Thomas et John Knoll. Thomas, doctorant en informatique à l'Université du Michigan, avait créé le programme original (alors nommé Display) pour visualiser des images en niveaux de gris sur l'écran monochrome de son Macintosh Plus. Son frère John, spécialiste des effets visuels chez Industrial Light & Magic (la société de George Lucas), y avait ajouté des fonctions de traitement d'image.\n\nLe Photoshop 1.0 offre déjà des outils qui deviendront emblématiques : les niveaux, les courbes, la balance des couleurs, le tampon de duplication, le lasso de sélection, les filtres de flou et de netteté. Pour la première fois, un photographe peut modifier ses images avec une précision et une liberté impossibles en chambre noire traditionnelle. Supprimer un élément indésirable, corriger une dominante colorée, ajuster le contraste zone par zone — tout devient possible sur un écran d'ordinateur.\n\nL'impact de Photoshop sur la photographie est comparable à celui de l'invention du négatif par Talbot : il redéfinit entièrement ce qu'est une image photographique. La notion même d'authenticité est remise en question. Si une photographie peut être modifiée pixel par pixel, qu'est-ce qui distingue encore une photo d'un dessin ou d'une peinture ? Ces questions, posées dès les années 1990, deviennent de plus en plus pressantes à mesure que les capacités du logiciel s'accroissent.\n\nPhotoshop devient rapidement un standard industriel utilisé par les photographes, les graphistes, les agences de publicité et les rédactions. Son nom entre dans le langage courant : « photoshopper » une image signifie la retoucher, la modifier, parfois la falsifier. En 2024, Photoshop compte plus de 30 millions d'abonnés et intègre désormais des fonctions d'intelligence artificielle générative. Le petit programme créé par deux frères dans leur temps libre est devenu l'outil de création visuelle le plus influent de l'ère numérique.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/800px-Adobe_Photoshop_CC_icon.svg.png',
        illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/800px-Adobe_Photoshop_CC_icon.svg.png', caption: 'Icône Adobe Photoshop — le logiciel qui a redéfini la retouche photographique depuis 1990' },
    ],
    category: 'digital',
    era: 'numerique',
  },
  {
    id: 'kodak-dcs-premier-reflex-numerique',
    year: 1991,
    title: 'Le Kodak DCS, premier reflex numérique professionnel',
    summary:
      "Kodak lance le DCS (Digital Camera System), premier appareil reflex numérique commercial basé sur un boîtier Nikon F3. Malgré son prix prohibitif et ses limitations, il ouvre l'ère du photojournalisme numérique.",
    content:
      "En 1991, Kodak commercialise le DCS 100, premier appareil photo reflex numérique professionnel. Basé sur un boîtier Nikon F3 modifié, il est équipé d'un capteur CCD de 1,3 mégapixel développé par Kodak. L'ensemble comprend le boîtier modifié, une unité de stockage séparée (DSU) contenant un disque dur de 200 Mo, et les câbles de connexion. Le tout pèse environ 5 kilogrammes et coûte la somme astronomique de 13 000 dollars.\n\nMalgré ces limitations considérables, le DCS 100 offre un avantage décisif pour les photojournalistes : l'immédiateté. Les images peuvent être transmises aux rédactions par ligne téléphonique quelques minutes après la prise de vue, au lieu d'attendre le développement et le scan du film. Pour les agences de presse, où chaque minute compte dans la course au scoop, cet avantage justifie l'investissement.\n\nKodak poursuit le développement de la gamme DCS avec des modèles toujours basés sur des boîtiers Nikon (puis Canon). Le DCS 200 (1992) intègre le stockage dans le boîtier, éliminant l'unité externe encombrante. Le DCS 460 (1995) offre 6 mégapixels. Ces appareils restent chers et réservés aux professionnels, mais ils prouvent la viabilité du concept.\n\nLe Kodak DCS inaugure une transition qui prendra une quinzaine d'années. Les Jeux olympiques d'Atlanta en 1996 voient les premiers reportages entièrement numériques pour les grandes agences. Le conflit au Kosovo en 1999 accélère l'adoption. Aux Jeux olympiques de Pékin en 2008, plus aucun photographe de presse n'utilise de film. L'ironie de l'histoire veut que Kodak, pionnière du numérique, soit aussi l'entreprise qui en souffrira le plus, incapable d'abandonner les profits de son empire argentique.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Kodak_DCS_620.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Kodak_DCS_620.jpg', caption: "Kodak DCS 620 — successeur du DCS original, basé sur un boîtier Nikon" },
    ],
    category: 'camera',
    era: 'numerique',
  },
  {
    id: 'nikon-d1',
    year: 1999,
    title: 'Le Nikon D1',
    summary:
      "Le Nikon D1 est le premier reflex numérique conçu entièrement par un fabricant d'appareils photo traditionnel. Son prix « abordable » de 5 500 dollars et ses performances convainquent les professionnels que le numérique est mûr.",
    content:
      "En juin 1999, Nikon lance le D1, premier reflex numérique professionnel entièrement conçu et fabriqué par un constructeur photographique traditionnel (les précédents modèles numériques étant des collaborations entre fabricants de boîtiers et Kodak). Équipé d'un capteur CCD APS-C de 2,7 mégapixels, il offre une cadence de 4,5 images par seconde et une sensibilité allant jusqu'à 1600 ISO. Son prix de 5 500 dollars, bien qu'élevé, représente une fraction du coût des systèmes Kodak DCS.\n\nLe D1 est un véritable appareil de photographe, et non un assemblage d'électronique greffé sur un boîtier existant. Son ergonomie est pensée pour le professionnel : poignée confortable, commandes accessibles à l'aveugle, construction tropicalisée, autonomie de 1000 images par charge. Il est compatible avec l'immense parc d'objectifs Nikkor existants, ce qui permet aux photographes Nikon de passer au numérique sans renoncer à leur équipement optique.\n\nL'impact du D1 sur l'industrie est considérable. Il démontre que le numérique a atteint un niveau de qualité et de réactivité suffisant pour le travail professionnel quotidien. Les agences de presse, les magazines et les photographes sportifs commencent à migrer massivement vers le numérique. Canon réplique avec le D30 en 2000, puis le 1D en 2001, lançant une rivalité Nikon-Canon dans le domaine numérique qui stimulera l'innovation pendant deux décennies.\n\nLe Nikon D1 est aussi le symbole d'un changement de paradigme économique. Dans le monde argentique, les fabricants vendaient des boîtiers et des objectifs, tandis que Kodak et Fuji engrangeaient les profits sur le film. Dans le monde numérique, les fabricants d'appareils reprennent le contrôle de l'ensemble de la chaîne de valeur, puisqu'il n'y a plus de consommable à acheter. Ce basculement économique scellera le destin de Kodak et de Fuji (ce dernier se réinventant brillamment dans d'autres domaines).",
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Nikon_D1_8373.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Nikon_D1_8373.jpg', caption: "Nikon D1 — premier reflex numérique entièrement conçu par un fabricant d'appareils photo (1999)" },
    ],
    category: 'camera',
    era: 'numerique',
  },
  {
    id: 'premier-telephone-photo',
    year: 2000,
    title: 'Le Sharp J-SH04, premier téléphone avec appareil photo',
    summary:
      "Sharp lance au Japon le J-SH04, premier téléphone mobile intégrant un appareil photo. Ce modeste capteur de 0,11 mégapixel annonce une convergence qui transformera la photographie plus profondément que toute autre innovation.",
    content:
      "En novembre 2000, l'opérateur japonais J-Phone (futur SoftBank) commercialise le Sharp J-SH04, premier téléphone mobile au monde équipé d'un appareil photo intégré. Son capteur CMOS de 0,11 mégapixel (110 000 pixels) produit des images de 256 × 256 pixels d'une qualité franchement médiocre. Mais l'innovation ne réside pas dans la qualité de l'image : elle réside dans le fait que, pour la première fois, on peut photographier et partager instantanément une image depuis un appareil qu'on a toujours sur soi.\n\nLe J-SH04 lance le concept de « Sha-mail » (photo-mail) : la possibilité d'envoyer une photo par message depuis son téléphone. Au Japon, cette fonction connaît un succès fulgurant. En quelques mois, des millions de Japonais prennent l'habitude de photographier leur repas, leurs amis, les événements de leur quotidien, et de partager ces images instantanément. Un comportement qui semblera banal quinze ans plus tard est en réalité inventé ici, au tournant du millénaire.\n\nLe reste du monde suit avec retard. Nokia lance le 7650 avec appareil photo en 2002, Sony Ericsson le T68i avec un module photo détachable. Les premiers modèles suscitent souvent la moquerie des photographes « sérieux » : la qualité est dérisoire, les optiques sont minuscules, l'ergonomie est catastrophique. Mais l'adage selon lequel « le meilleur appareil photo est celui qu'on a sur soi » se vérifie : les gens photographient davantage avec leur téléphone qu'avec tout autre appareil.\n\nRétrospectivement, le Sharp J-SH04 apparaît comme l'un des appareils les plus importants de l'histoire de la photographie. Il inaugure la convergence entre le téléphone et l'appareil photo, une fusion qui, en l'espace de deux décennies, rendra obsolète l'appareil compact pour la grande majorité des utilisateurs. En 2024, plus de 90 % des photographies mondiales sont prises avec un smartphone. Le petit téléphone japonais de l'an 2000 a changé le monde.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/J-SH04.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/J-SH04.jpg', caption: "Sharp J-SH04 — le premier téléphone portable avec appareil photo intégré (2000)" },
    ],
    category: 'milestone',
    era: 'numerique',
  },
  {
    id: 'canon-eos-300d',
    year: 2003,
    title: 'Canon EOS 300D, premier reflex numérique abordable',
    summary:
      "Le Canon EOS 300D (Digital Rebel) est le premier reflex numérique vendu sous la barre des 1 000 dollars. Il ouvre le marché du reflex numérique aux amateurs passionnés et déclenche une vague de démocratisation.",
    content:
      "En août 2003, Canon lance l'EOS 300D, commercialisé sous le nom de Digital Rebel en Amérique du Nord, au prix révolutionnaire de 899 dollars boîtier avec objectif. C'est la première fois qu'un reflex numérique franchit la barre symbolique des 1 000 dollars, un seuil psychologique qui ouvre les vannes du marché amateur. Le capteur CMOS APS-C de 6,3 mégapixels offre une qualité d'image remarquable pour l'époque.\n\nLe 300D reprend largement l'électronique du Canon 10D professionnel (vendu 1 500 dollars boîtier nu) dans un boîtier plus léger et plus compact. Canon accepte de rogner ses marges pour conquérir un marché de masse. La stratégie est payante : le 300D se vend comme des petits pains. En un an, Canon écoule plus d'un million d'exemplaires, un chiffre jamais atteint par un reflex numérique.\n\nLe succès du 300D provoque un effet domino dans l'industrie. Nikon réplique avec le D70 en 2004, Pentax avec le *ist DS, Olympus avec l'E-300. Les prix chutent régulièrement : en 2006, on trouve des reflex numériques corrects pour 500 dollars. La photographie numérique de qualité reflex devient accessible à la classe moyenne, exactement comme le Brownie avait rendu la photographie accessible à tous un siècle plus tôt.\n\nLe Canon 300D déclenche également un phénomène culturel : la montée en puissance de la photographie amateur de qualité. Des communautés en ligne de photographes passionnés se développent, les forums photo explosent, les blogs photographiques se multiplient. Des amateurs talentueux, équipés de reflex numériques abordables, produisent des images qui rivalisent avec celles des professionnels. La frontière entre amateur et professionnel, déjà floue, commence à s'estomper sérieusement.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Canon_EOS_300D_%281%29.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Canon_EOS_300D_%281%29.jpg', caption: "Canon EOS 300D (Digital Rebel) — le premier reflex numérique à moins de 1000 dollars (2003)" },
    ],
    category: 'camera',
    era: 'numerique',
  },
  {
    id: 'flickr-partage-photos',
    year: 2004,
    title: 'Flickr et le partage de photos en ligne',
    summary:
      "Le lancement de Flickr inaugure l'ère du partage photographique en ligne. Pour la première fois, les photographes du monde entier peuvent publier, organiser et commenter leurs images au sein d'une communauté mondiale.",
    content:
      "En février 2004, la startup canadienne Ludicorp lance Flickr, une plateforme de partage de photographies en ligne qui va transformer la manière dont les images sont diffusées et consommées. Initialement conçu comme un module de chat dans un jeu vidéo en ligne, Flickr évolue rapidement en une plateforme photographique à part entière, offrant l'hébergement illimité de photos, un système de tags (étiquettes), des groupes thématiques et des fonctionnalités sociales de commentaire et de favori.\n\nFlickr introduit plusieurs innovations qui deviendront des standards du web social. Le système de tags, qui permet à chaque utilisateur d'associer des mots-clés libres à ses images, crée une taxonomie collaborative d'une richesse sans précédent. Les licences Creative Commons, proposées comme alternative au copyright classique, encouragent le partage et la réutilisation des images. La page « Explore », qui sélectionne algorithmiquement les meilleures photos du jour, crée une vitrine de la créativité mondiale.\n\nL'impact de Flickr sur la culture photographique est profond. Pour la première fois, un photographe amateur de n'importe quel pays peut montrer son travail à un public mondial, recevoir des critiques, trouver l'inspiration et rejoindre une communauté de passionnés. Les frontières géographiques et sociales qui limitaient la diffusion des images s'effondrent. Les styles photographiques circulent à la vitesse de la lumière, influencés et enrichis par cette pollinisation croisée mondiale.\n\nFlickr est racheté par Yahoo! en 2005 pour un montant estimé à 35 millions de dollars. Bien que la plateforme décline par la suite face à la concurrence d'Instagram et des réseaux sociaux, son influence historique est indéniable. Flickr a posé les fondations du partage photographique en ligne et démontré que les images étaient le langage universel du web. Le concept même de « partager une photo en ligne » — un geste quotidien pour des milliards de personnes aujourd'hui — est né avec Flickr.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Flickr.svg/800px-Flickr.svg.png',
        illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Flickr.svg/800px-Flickr.svg.png', caption: 'Logo Flickr — la plateforme pionnière du partage photographique en ligne (2004)' },
    ],
    category: 'digital',
    era: 'numerique',
  },

  // ─── L'Ère du Smartphone (2010–2026) ──────────────────────────────────
  {
    id: 'iphone-photo-mobile',
    year: 2007,
    title: "L'iPhone et la révolution de la photo mobile",
    summary:
      "Le lancement de l'iPhone par Apple en 2007 redéfinit le téléphone mobile et, avec lui, la photographie quotidienne. Son écran tactile et son interface intuitive transforment l'expérience photographique.",
    content:
      "Le 29 juin 2007, Apple lance l'iPhone aux États-Unis. Son appareil photo intégré de 2 mégapixels est loin d'être le plus performant du marché — plusieurs téléphones Nokia et Sony Ericsson offrent déjà de meilleurs capteurs. Mais l'iPhone transforme l'expérience photographique mobile grâce à son grand écran tactile de 3,5 pouces, qui sert à la fois de viseur et de galerie, et à son interface utilisateur d'une fluidité sans précédent.\n\nL'iPhone change fondamentalement la relation entre le photographe et son image. Sur les téléphones précédents, prendre une photo est un processus fastidieux : naviguer dans des menus, déclencher, puis tenter de voir le résultat sur un écran minuscule. Sur l'iPhone, tout est immédiat : on touche l'icône de l'appareil photo, on cadre sur le grand écran, on déclenche, et l'image apparaît instantanément dans une galerie que l'on parcourt du bout du doigt. La photographie devient un geste aussi naturel que de déverrouiller son téléphone.\n\nL'App Store, lancé en 2008, amplifie la révolution. Des applications comme Camera+ et Hipstamatic offrent des fonctionnalités de retouche et des filtres créatifs directement sur le téléphone. Le développement d'applications de partage — et bientôt d'Instagram — créera un écosystème complet de création, d'édition et de diffusion photographique contenu dans un seul appareil de poche.\n\nEn termes de volume, l'iPhone et ses rivaux Android provoquent une explosion sans précédent du nombre de photographies prises dans le monde. On estime que plus de 1,4 trillion de photos ont été prises en 2023, contre environ 86 milliards en 2000. La quasi-totalité de cette croissance provient des smartphones. Le photographe Chase Jarvis résume parfaitement cette révolution avec sa formule devenue célèbre : « The best camera is the one that's with you » — le meilleur appareil photo est celui que vous avez sur vous.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Original_iPhone_docked.jpg/800px-Original_iPhone_docked.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Original_iPhone_docked.jpg/800px-Original_iPhone_docked.jpg', caption: "L'iPhone original (2007) sur son dock — l'appareil qui a transformé la photographie mobile" },
    ],
    category: 'milestone',
    era: 'smartphone',
  },
  {
    id: 'instagram-revolution',
    year: 2010,
    title: 'Instagram transforme la photographie',
    summary:
      "Kevin Systrom et Mike Krieger lancent Instagram, une application mobile de partage de photos avec filtres intégrés. En quelques mois, Instagram redéfinit l'esthétique photographique et crée une nouvelle culture visuelle mondiale.",
    content:
      "Le 6 octobre 2010, Kevin Systrom et Mike Krieger lancent Instagram sur l'App Store d'Apple. L'application, disponible uniquement sur iPhone, propose un concept d'une simplicité redoutable : prendre une photo, lui appliquer l'un des onze filtres disponibles (inspirés de l'esthétique des films argentiques et du Polaroid), et la partager avec ses abonnés. En 24 heures, 25 000 personnes téléchargent l'application. En un an, Instagram compte 10 millions d'utilisateurs.\n\nLes filtres d'Instagram — X-Pro II, Earlybird, Nashville, Valencia — deviennent de véritables signatures esthétiques. Le format carré, imposé par l'application (en hommage au Polaroid et au Hasselblad), crée une contrainte créative qui uniformise et identifie immédiatement les images Instagram. Une esthétique « instagrammable » émerge : couleurs chaudes, contrastes doux, lumière dorée, mise en scène soignée du quotidien.\n\nFacebook rachète Instagram en 2012 pour un milliard de dollars — un montant jugé extravagant à l'époque, dérisoire aujourd'hui. La plateforme s'ouvre à Android, ajoute la vidéo, les Stories, les Reels, et dépasse le milliard d'utilisateurs actifs mensuels. Instagram transforme la photographie en langage social : on ne photographie plus seulement pour se souvenir, mais pour communiquer, pour projeter une image de soi, pour participer à une conversation visuelle mondiale.\n\nL'impact d'Instagram sur la photographie professionnelle est ambivalent. D'un côté, la plateforme a démocratisé la diffusion, permettant à des photographes talentueux de se faire connaître sans passer par les galeries et les magazines traditionnels. De l'autre, elle a contribué à une certaine uniformisation esthétique et à la dévaluation économique des images, noyées dans un flot de milliards de photos publiées chaque jour. Instagram a aussi profondément influencé le tourisme, la gastronomie, la mode et l'architecture — des lieux, des plats et des bâtiments étant désormais conçus pour être « instagrammables ».",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png',
        illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png', caption: "Logo Instagram — l'application qui a transformé la photographie en langage social" },
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png', caption: "Logo Instagram actuel — plus de 2 milliards d'utilisateurs actifs mensuels" },
    ],
    category: 'digital',
    era: 'smartphone',
  },
  {
    id: 'sony-a7-hybride-plein-format',
    year: 2013,
    title: 'Le Sony A7, premier hybride plein format',
    summary:
      "Sony lance l'Alpha 7 (A7), premier appareil photo hybride (mirrorless) équipé d'un capteur plein format 24 × 36 mm. Cet appareil inaugure une nouvelle catégorie qui finira par supplanter le reflex traditionnel.",
    content:
      "En octobre 2013, Sony présente l'Alpha 7, premier appareil hybride (sans miroir) au monde équipé d'un capteur plein format de 24,3 mégapixels. Simultanément, Sony lance l'A7R, doté d'un capteur de 36,4 mégapixels sans filtre passe-bas. Ces deux boîtiers, remarquablement compacts pour des appareils plein format, démontrent que l'avenir de la photographie haut de gamme n'appartient plus nécessairement au reflex.\n\nLe principe de l'appareil hybride consiste à supprimer le miroir reflex et le prisme optique, en les remplaçant par un viseur électronique (EVF) qui affiche en temps réel l'image captée par le capteur. Cette simplification mécanique offre plusieurs avantages : le boîtier est plus compact et plus léger, l'obturation est silencieuse, le viseur peut afficher des informations supplémentaires (histogramme, mise au point assistée, simulation d'exposition) et la mise au point peut s'effectuer sur l'ensemble de la surface du capteur.\n\nLe Sony A7 n'est pas le premier appareil hybride — Panasonic et Olympus proposent des systèmes micro 4/3 depuis 2008, et Fujifilm le X-Pro1 à capteur APS-C depuis 2012 — mais c'est le premier à offrir le grand capteur plein format dans un format compact. Pour les photographes professionnels, attachés à la qualité d'image et à la faible profondeur de champ du plein format, c'est un argument décisif.\n\nLe succès de Sony force les géants de la photographie à réagir. Nikon lance les Z6 et Z7 en 2018, Canon les EOS R et RP en 2018-2019, Panasonic le S1 en 2019. En quelques années, l'ensemble de l'industrie bascule vers l'hybride. Les derniers reflex professionnels (Nikon D6, Canon 1D X Mark III) sont produits au début des années 2020, et les fabricants annoncent que leurs futurs développements se concentreront exclusivement sur les systèmes hybrides. Le miroir reflex, qui a dominé la photographie pendant soixante ans, tire sa révérence.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Sony_Alpha_7R_IV_elevated_front_view_of_camera_body_with_exposed_sensor.jpg',
    illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Sony_Alpha_7R_IV_elevated_front_view_of_camera_body_with_exposed_sensor.jpg', caption: "Sony Alpha 7R IV — héritier de l'A7 original, premier hybride plein format" },
    ],
    category: 'camera',
    era: 'smartphone',
  },
  {
    id: 'double-capteur-iphone7plus',
    year: 2016,
    title: "Les appareils à double capteur (iPhone 7 Plus)",
    summary:
      "Apple lance l'iPhone 7 Plus avec un double module photo combinant un objectif grand-angle et un téléobjectif. Ce système multi-capteurs inaugure une nouvelle ère de photographie computationnelle sur smartphone.",
    content:
      "En septembre 2016, Apple dévoile l'iPhone 7 Plus, premier iPhone équipé de deux caméras arrière. Le module principal offre un capteur de 12 mégapixels avec un objectif grand-angle f/1.8, tandis que le second module, également de 12 mégapixels, est doté d'un téléobjectif f/2.8 offrant un zoom optique 2×. Mais la véritable innovation réside dans le logiciel : en combinant les données des deux capteurs, l'iPhone peut produire un effet de flou d'arrière-plan (bokeh) simulant celui d'un appareil à grand capteur.\n\nCe mode « Portrait », ajouté par mise à jour logicielle quelques semaines après le lancement, utilise les deux capteurs pour construire une carte de profondeur de la scène. Le sujet principal est isolé et l'arrière-plan est artificiellement flouté par un algorithme. Le résultat, bien qu'imparfait (les algorithmes peinent avec les cheveux, les branches et les bords complexes), est suffisamment convaincant pour séduire des millions d'utilisateurs.\n\nL'iPhone 7 Plus n'est pas le premier smartphone à double capteur — le HTC One M8 (2014) et le Huawei P9 (2016, avec des optiques Leica) l'ont précédé. Mais l'immense base installée d'Apple et l'efficacité de son mode Portrait popularisent le concept auprès du grand public. En quelques années, le double capteur devient un triple, puis un quadruple capteur, chaque module offrant une focale différente (ultra grand-angle, standard, téléobjectif, macro).\n\nCette approche multi-capteurs illustre un changement de paradigme fondamental : dans un smartphone, l'optique est contrainte par la minceur du boîtier, mais la puissance de calcul est immense. La qualité de l'image ne dépend plus seulement du verre et du capteur, mais de plus en plus du logiciel qui traite les données. On entre dans l'ère de la photographie computationnelle, où le traitement algorithmique est aussi important que la capture optique — une révolution qui ne fait que commencer.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/IPhone_7_Plus_%28a%29.jpg/800px-IPhone_7_Plus_%28a%29.jpg',
        illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/IPhone_7_Plus_%28a%29.jpg/800px-IPhone_7_Plus_%28a%29.jpg', caption: "iPhone 7 Plus — premier iPhone à double capteur photo, inaugurant le mode Portrait à effet bokeh" },
    ],
    category: 'technique',
    era: 'smartphone',
  },
  {
    id: 'photo-computationnelle-night-sight',
    year: 2018,
    title: 'La photographie computationnelle (Night Sight)',
    summary:
      "Google lance Night Sight sur le Pixel 3, une fonction qui produit des photographies nocturnes étonnamment lumineuses et détaillées grâce au traitement algorithmique. La photographie computationnelle dépasse les limites physiques de l'optique miniature.",
    content:
      "En novembre 2018, Google déploie Night Sight, une mise à jour logicielle pour ses smartphones Pixel qui va stupéfier le monde de la photographie. Cette fonction permet de prendre des photos en conditions de très faible luminosité — quasi-obscurité — et d'obtenir des images nettes, colorées et détaillées, là où un appareil conventionnel ne produirait qu'un cliché sombre et bruité. Le secret : un algorithme de fusion multi-images d'une sophistication remarquable.\n\nNight Sight capture secrètement jusqu'à quinze images consécutives à des expositions légèrement différentes, puis les aligne et les fusionne par un processus appelé « HDR+ enhanced ». Le bruit aléatoire, présent dans chaque image individuelle, est moyenné et supprimé par la superposition. Des algorithmes d'apprentissage automatique ajustent ensuite la balance des blancs, rehaussent les détails et corrigent les couleurs pour produire une image qui semble avoir été prise dans de bien meilleures conditions de lumière.\n\nLe résultat est si impressionnant qu'il provoque une vague de comparaisons avec des appareils photo dédiés. Dans certains scénarios nocturnes, le Google Pixel 3 avec Night Sight produit de meilleures images qu'un reflex plein format à 3 000 euros. Ce n'est pas que le capteur du smartphone est meilleur — il est objectivement bien inférieur — mais le logiciel compense les limitations physiques avec une intelligence algorithmique que les appareils traditionnels ne possèdent pas.\n\nNight Sight illustre l'avènement de la photographie computationnelle, un domaine où la qualité de l'image dépend davantage du logiciel que du matériel. Apple suivra avec Deep Fusion, Samsung avec Nightography, Huawei avec ses propres algorithmes nocturnes. En quelques années, la photographie en basse lumière, autrefois le domaine exclusif des appareils à grands capteurs et objectifs lumineux, devient accessible depuis n'importe quel smartphone de milieu de gamme. C'est peut-être la plus spectaculaire démonstration du pouvoir du traitement computationnel appliqué à la photographie.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Aurora_borealis_near_Salzdahlum_2024-10-10.jpg/800px-Aurora_borealis_near_Salzdahlum_2024-10-10.jpg',
        illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Aurora_borealis_near_Salzdahlum_2024-10-10.jpg/800px-Aurora_borealis_near_Salzdahlum_2024-10-10.jpg', caption: 'Aurore boréale capturée grâce à la photographie computationnelle — fusion de multiples expositions par algorithme' },
    ],
    category: 'technique',
    era: 'smartphone',
  },
  {
    id: 'capteurs-108-megapixels',
    year: 2020,
    title: 'Les capteurs de 108 mégapixels',
    summary:
      "Samsung et Xiaomi introduisent des capteurs de 108 mégapixels dans les smartphones, repoussant les limites de la résolution mobile. La technique du pixel binning permet de combiner haute résolution et bonne performance en basse lumière.",
    content:
      "En février 2020, Samsung et Xiaomi commercialisent les premiers smartphones équipés du capteur Samsung ISOCELL Bright HM1 de 108 mégapixels. Le Samsung Galaxy S20 Ultra et le Xiaomi Mi 10 Pro offrent une résolution brute de 12 032 × 9 024 pixels, produisant des fichiers de plus de 30 Mo. C'est une résolution qui dépasse celle de nombreux appareils photo professionnels.\n\nMais la résolution brute ne raconte qu'une partie de l'histoire. Les pixels individuels d'un capteur de 108 Mpx dans un smartphone sont minuscules — environ 0,8 micromètre de côté, contre 4 à 8 micromètres pour un capteur plein format. Des pixels aussi petits capturent peu de lumière et sont très sensibles au bruit. La solution est le « pixel binning » : en mode standard, l'appareil regroupe 9 pixels en 1 (configuration 3 × 3), produisant une image de 12 mégapixels avec des pixels virtuels de 2,4 micromètres. Ce compromis offre le meilleur des deux mondes : haute résolution quand la lumière est abondante, bonne sensibilité dans les conditions plus difficiles.\n\nLa course aux mégapixels sur smartphone atteint des sommets avec le Samsung ISOCELL HP1 de 200 mégapixels en 2022, utilisé dans le Galaxy S23 Ultra. Ces capteurs titanesques ne sont pas de simples arguments marketing : ils permettent un zoom numérique de qualité acceptable (en recadrant dans l'image pleine résolution) et offrent une flexibilité de post-traitement considérable.\n\nCette escalade illustre la spécificité de la photographie sur smartphone : contrainte par les lois de la physique (petit capteur, optique minuscule), elle compense par la puissance de calcul et l'innovation en conception de capteurs. Le résultat est un appareil photographique d'une polyvalence stupéfiante qui tient dans la poche — même si les puristes noteront qu'un capteur plein format avec de bons objectifs conserve un avantage qualitatif dans les situations exigeantes.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Samsung_Galaxy_S20_Ultra_5G.jpg/800px-Samsung_Galaxy_S20_Ultra_5G.jpg',
        illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Samsung_Galaxy_S20_Ultra_5G.jpg/800px-Samsung_Galaxy_S20_Ultra_5G.jpg', caption: 'Samsung Galaxy S20 Ultra 5G — équipé du capteur ISOCELL Bright HM1 de 108 mégapixels' },
    ],
    category: 'technique',
    era: 'smartphone',
  },
  {
    id: 'ia-photographie-generative',
    year: 2023,
    endYear: 2026,
    title: "L'IA et la photographie générative",
    summary:
      "L'intelligence artificielle générative (DALL-E, Midjourney, Stable Diffusion) bouleverse les fondements de la photographie en permettant de créer des images photoréalistes à partir de descriptions textuelles. La frontière entre photographie et image générée s'estompe.",
    content:
      "Entre 2022 et 2026, l'essor fulgurant de l'intelligence artificielle générative provoque un séisme dans le monde de la photographie. Des systèmes comme DALL-E d'OpenAI (2022), Midjourney et Stable Diffusion permettent de générer des images photoréalistes à partir de simples descriptions textuelles (prompts). Pour la première fois dans l'histoire, il est possible de créer une « photographie » sans appareil, sans lumière, sans sujet physique devant un objectif.\n\nLa qualité des images générées progresse à une vitesse vertigineuse. En 2022, les images IA sont encore identifiables par des artefacts caractéristiques — mains déformées, textes illisibles, incohérences spatiales. En 2024-2025, ces défauts sont largement corrigés et les images générées deviennent pratiquement indiscernables de véritables photographies pour un observateur non averti. Des images IA remportent des concours photographiques, suscitant des controverses passionnées sur la nature même de la photographie.\n\nLes fabricants d'appareils et de smartphones intègrent rapidement l'IA dans leurs produits. Les fonctions de gomme générative (qui remplacent des éléments supprimés par un contenu généré), d'extension de cadre, de défloutage et de remplacement de ciel deviennent standard. Samsung fait scandale en 2024 lorsqu'il est révélé que la fonction « zoom spatial » de ses Galaxy superpose des détails générés par IA aux photographies zoomées, produisant des images qui montrent des détails n'existant pas dans la scène originale.\n\nCes développements posent des questions fondamentales : qu'est-ce qu'une photographie si elle peut être générée sans lumière réelle ? Comment distinguer le vrai du faux dans un monde d'images synthétiques ? La profession de photographe est-elle menacée ? Les institutions réagissent : des concours créent des catégories distinctes pour les images IA, des standards de métadonnées (C2PA) sont développés pour certifier l'authenticité des photos, des législations sur la transparence des contenus générés sont adoptées. La photographie entre dans une ère où la véracité de l'image ne peut plus être tenue pour acquise — une rupture philosophique aussi profonde que l'invention du médium lui-même.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Th%C3%A9%C3%A2tre_D%27op%C3%A9ra_Spatial_%28adjusted%29.png/800px-Th%C3%A9%C3%A2tre_D%27op%C3%A9ra_Spatial_%28adjusted%29.png',
        illustrations: [
      { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Th%C3%A9%C3%A2tre_D%27op%C3%A9ra_Spatial_%28adjusted%29.png/800px-Th%C3%A9%C3%A2tre_D%27op%C3%A9ra_Spatial_%28adjusted%29.png', caption: "« Théâtre D'opéra Spatial » — image générée par Midjourney ayant remporté un prix au Colorado State Fair (2022)" },
    ],
    category: 'digital',
    era: 'smartphone',
  },
];
