// data/articleData.ts
export const articleData = [
  // Article 1: Structure 1 (pas de tag "recette")
  {
    id: "1",
    heroImage:
      "https://api.a0.dev/assets/image?text=exploring%20madagascar%20culture&aspect=4:3",
    title: "Découverte de la Culture Malgache",
    description:
      "Un voyage à travers les traditions et l’histoire de Madagascar.",
    images: [
      "https://api.a0.dev/assets/image?text=malagasy%20dance&aspect=4:3",
      "https://api.a0.dev/assets/image?text=traditional%20malagasy%20village&aspect=4:3",
    ],
    paragraphs: [
      "Madagascar, île unique au large de la côte est de l’Afrique, est un véritable melting-pot culturel, où se croisent des influences africaines, asiatiques et européennes. L’histoire de l’île remonte à des millénaires, et sa diversité culturelle découle des vagues successives de peuples qui s’y sont installés. Dès leur arrivée, ces peuples ont su préserver leurs traditions tout en s’adaptant aux spécificités locales. Les habitants de Madagascar, appelés Malgaches, sont répartis en plusieurs groupes ethniques, chacun avec ses propres coutumes, langues et croyances. Par exemple, les Merina, qui habitent la région centrale de l’île, ont longtemps dominé politiquement, tandis que les Betsileo, dans le sud, se sont distingués par leur savoir-faire agricole. Chaque région de Madagascar possède son propre héritage culturel et historique, et à travers les âges, cette diversité est devenue un aspect fondamental de l’identité malgache. En explorant Madagascar, on découvre bien plus qu’un simple paysage ; on s’immisce dans un monde où chaque geste, chaque rituel, a une signification profonde. Les Malgaches sont fiers de leurs racines et, malgré les défis modernes, ils continuent de vivre selon des traditions anciennes qui leur sont chères.",
      'La danse traditionnelle malgache occupe une place centrale dans la vie sociale et culturelle de l’île. Elle est bien plus qu’une simple forme de divertissement ; elle est un moyen d’expression, de communication et de transmission des valeurs. Le "Hira Gasy" est sans doute l’un des spectacles les plus emblématiques de Madagascar. Cette danse théâtrale allie musique, chant et danse et raconte des histoires populaires ou des événements historiques, souvent avec une dimension comique. Le Hira Gasy n’est pas seulement un divertissement, c’est aussi un moment de rassemblement communautaire, un espace où les jeunes et les moins jeunes se rencontrent, échangent et apprennent les uns des autres. En dehors de cette forme théâtrale, la danse malgache se retrouve également dans des célébrations et des cérémonies religieuses. Chaque région a ses propres danses folkloriques, qu’elles soient liées à des rites de passage, des festivités ou des occasions particulières. Par exemple, dans le sud de l’île, on danse souvent lors des célébrations de récolte, symbolisant la gratitude envers la terre. De même, les danses exécutées lors des fêtes religieuses témoignent de l’importance du sacré dans la culture malgache, avec des mouvements fluides et gracieux censés apaiser les esprits.',
      'Les villages malgaches sont des témoins vivants de la diversité culturelle et des modes de vie ancestraux. Lorsqu’on se rend dans les régions reculées de Madagascar, on entre dans un autre monde, où la vie semble s’écouler à un rythme plus lent et plus naturel. Les habitations traditionnelles, appelées "huts" ou "faharoa", sont construites avec des matériaux locaux comme le bambou, le bois et les feuilles de palmier, permettant une intégration harmonieuse dans le paysage environnant. Ces villages sont souvent situés au cœur de la nature, loin des centres urbains, et sont organisés autour d’une place centrale où se déroulent la plupart des activités communautaires. Les familles y vivent dans une solidarité très forte, chacun ayant un rôle précis au sein de la communauté. Par exemple, les femmes jouent un rôle essentiel dans l’agriculture, la cuisine et l’artisanat, tandis que les hommes sont souvent impliqués dans les travaux de construction et de pêche. Cette organisation traditionnelle reflète une vision du monde où la nature et l’humain coexistent en parfaite harmonie. L’hospitalité malgache est légendaire, et les visiteurs sont toujours accueillis avec un sourire chaleureux et une générosité sans pareille. Au-delà des simples échanges matériels, c’est un véritable partage de culture, d’histoires et de rires qui s’établit entre les habitants et les visiteurs.',
      'La musique et les contes occupent également une place primordiale dans la transmission de l’histoire et des valeurs à Madagascar. Les contes, souvent racontés autour du feu ou lors des rassemblements familiaux, sont des instruments puissants de transmission orale. Ces histoires, transmises de génération en génération, racontent des exploits héroïques, des leçons de vie ou des croyances ancestrales. Les conteurs, ou "mpitolom-boky", sont des figures respectées dans les villages, capables de captiver leur auditoire avec des récits aussi fascinants qu’édifiants. La musique, quant à elle, occupe une place tout aussi essentielle. Les instruments traditionnels, tels que le valiha (un instrument à cordes typique de Madagascar), le marovany (un xylophone local), ou encore les percussions faites à partir de matériaux naturels, accompagnent les chants et danses dans de nombreux rituels et célébrations. La musique malgache est un véritable reflet de l’âme du peuple, avec des rythmes et des mélodies qui racontent l’histoire de l’île et ses luttes. Que ce soit pour exprimer la joie, la peine, ou rendre hommage aux ancêtres, la musique et les contes sont des moyens privilégiés pour entretenir la mémoire collective et transmettre les valeurs fondamentales de la société malgache.',
    ],
    tags: ["culture", "voyage"],
  },
  // Article 2: Structure 2 (tag "recette")
  {
    id: "2",
    heroImage:
      "https://api.a0.dev/assets/image?text=madagascar%20vanilla%20cake&aspect=4:3",
    title: "Gâteau à la Vanille de Madagascar",
    description:
      "La vanille de Madagascar est reconnue comme l’une des meilleures au monde, et quoi de mieux que de la sublimer dans un dessert simple et délicieux ? Le gâteau à la vanille de Madagascar est un classique de la pâtisserie malgache, alliant douceur et parfums envoûtants.",
    images: [
      "https://api.a0.dev/assets/image?text=vanilla%20cake%20ingredients&aspect=4:3",
      "https://api.a0.dev/assets/image?text=finished%20vanilla%20cake&aspect=4:3",
    ],
    ingredients: [
      "200g de farine",
      "150g de sucre",
      "3 œufs",
      "100ml de lait",
      "1 sachet de levure chimique",
      "1 gousse de vanille de Madagascar",
      "125 g de beurre",
    ],
    recipe: [
      "Préchauffez votre four à 180°C.",

      "Dans un saladier, fouettez les œufs avec le sucre jusqu’à ce que le mélange blanchisse.",

      "Ajoutez progressivement la farine tamisée et la levure chimique.",

      "Incorporez le beurre fondu et le lait.",

      "Fendez la gousse de vanille, grattez les graines et ajoutez-les à la préparation.",

      "Versez le tout dans un moule beurré et enfournez pendant environ 35 minutes.",

      "Laissez refroidir avant de déguster.",
    ],
    tags: ["recette", "cuisine"],
  },
  // Article 3: Structure 1 (pas de tag "recette")
  {
    id: "3",
    heroImage:
      "https://api.a0.dev/assets/image?text=madagascar%20wildlife&aspect=4:3",
    title: "La Faune Unique de Madagascar",
    description: "Découvrez les espèces endémiques de l’île rouge.",
    images: [
      "https://api.a0.dev/assets/image?text=lemurs%20in%20madagascar&aspect=4:3",
      "https://api.a0.dev/assets/image?text=chameleons%20of%20madagascar&aspect=4:3",
    ],
    paragraphs: [
      "Madagascar abrite une biodiversité exceptionnelle, avec 90% d’espèces endémiques.",
      "Les lémuriens, emblèmes de l’île, fascinent par leur diversité et leur comportement.",
      "Les caméléons, avec leurs couleurs éclatantes, sont un autre trésor local.",
      "La préservation de ces espèces est un défi majeur face à la déforestation.",
    ],
    tags: ["nature", "faune"],
  },
  // Article 4: Structure 2 (tag "recette")
  {
    id: "4",
    heroImage:
      "https://api.a0.dev/assets/image?text=madagascar%20rum%20cocktail&aspect=4:3",
    title: "Cocktail au Rhum de Madagascar",
    description: "Un cocktail tropical avec le rhum artisanal malgache.",
    images: [
      "https://api.a0.dev/assets/image?text=cocktail%20ingredients&aspect=4:3",
      "https://api.a0.dev/assets/image?text=finished%20rum%20cocktail&aspect=4:3",
    ],
    ingredients: [
      "50ml de rhum malgache",
      "20ml de jus de citron vert",
      "15ml de sirop de canne",
      "100ml d’eau gazeuse",
      "Glaçons",
    ],
    recipe:
      "Dans un verre, mélangez le rhum, le jus de citron vert et le sirop de canne. Ajoutez les glaçons, puis complétez avec l’eau gazeuse. Remuez légèrement et servez frais.",
    tags: ["recette", "boisson"],
  },
];

export default articleData;
