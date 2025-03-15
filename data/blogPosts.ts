const viewsNumber = Math.floor(Math.random()*500) + 10
export const blogPosts = [
    {
      id: '1',
      title: "Recette de Rougail Tomate Malgache",
      shortDescription: "Découvrez la recette du rougail tomate, un accompagnement frais et épicé typique de Madagascar.",
      content: "Le rougail tomate est une sauce froide à base de tomates fraîches, d'oignons, de piment et de combava. Parfait pour accompagner du riz et des viandes grillées.",
      image: "https://api.a0.dev/assets/image?text=Malagasy%20rougail%20with%20parsley%20dish&aspect=4:3",
      tags: ["Recettes", "Cuisine malgache"],
      views: viewsNumber,
      date: '2024-07-15'
    },
    {
      id: '2',
      title: "Comment perdre du poids avec les fruits malgaches",
      shortDescription: "Découvrez les fruits de Madagascar qui peuvent vous aider à brûler les graisses naturellement.",
      content: "Mangue, ananas, citron, papaye... Ces fruits exotiques sont riches en fibres et en enzymes qui boostent le métabolisme et facilitent la digestion.",
      image: "https://api.a0.dev/assets/image?text=weight%20loss%20fruits%20from%20Madagascar&aspect=4:3",
      tags: ["Nutrition", "Santé", "Perte de poids"],
      views: viewsNumber,
      date: '2024-08-05'
    },
    {
      id: '3',
      title: "Boisson détox au gingembre et citron",
      shortDescription: "Un remède naturel pour booster votre immunité et purifier votre organisme.",
      content: "Une infusion à base de gingembre, de citron et de miel aide à éliminer les toxines et renforcer les défenses naturelles.",
      image: "https://api.a0.dev/assets/image?text=detox%20ginger%20lemon%20drink&aspect=4:3",
      tags: ["Santé", "Boisson", "Détox"],
      views: viewsNumber,
      date: '2024-09-10'
    },
    {
      id: '4',
      title: "Recette du Ravitoto : Le plat incontournable de Madagascar",
      shortDescription: "Apprenez à préparer le ravitoto, un plat traditionnel malgache à base de feuilles de manioc.",
      content: "Le ravitoto est cuisiné avec du lait de coco et de la viande de porc, un plat riche en saveurs et en histoire.",
      image: "https://api.a0.dev/assets/image?text=Malagasy%20rice%20with%20crushed%20cassava%20leaves%20dish&aspect=4:3",
      tags: ["Recettes", "Cuisine malgache"],
      views: viewsNumber,
      date: '2024-10-02'
    },
    {
      id: '5',
      title: "Les bienfaits du moringa pour la santé",
      shortDescription: "Le moringa est une plante miracle aux multiples vertus pour la santé et la nutrition.",
      content: "Riche en vitamines et minéraux, le moringa est utilisé pour renforcer le système immunitaire et lutter contre la malnutrition.",
      image: "https://api.a0.dev/assets/image?text=organic%20moringa%20leaves%20health%20benefits&aspect=4:3",
      tags: ["Santé", "Super-aliment"],
      views: viewsNumber,
      date: '2024-11-12'
    },
    {
      id: '6',
      title: "Plan alimentaire pour une prise de masse naturelle",
      shortDescription: "Un guide nutritionnel pour les sportifs souhaitant prendre du muscle grâce aux produits malgaches.",
      content: "Découvrez comment intégrer du riz rouge, des légumineuses et des fruits secs pour une prise de masse saine et efficace.",
      image: "https://api.a0.dev/assets/image?text=muscle%20gain%20diet%20with%20Madagascar%20products&aspect=4:3",
      tags: ["Nutrition", "Sport", "Musculation"],
      views: viewsNumber,
      date: '2024-12-05'
    },
    {
      id: '7',
      title: "Smoothie énergétique aux fruits de Madagascar",
      shortDescription: "Un smoothie sain et vitaminé, parfait pour un petit-déjeuner énergisant.",
      content: "Découvrez comment préparer un smoothie riche en nutriments avec des fruits typiques de Madagascar comme la banane, la mangue et le litchi.",
      tags: ["Recettes", "Santé", "Énergie"],
      views: viewsNumber,
      date: '2024-07-10',
      image: "https://api.a0.dev/assets/image?text=healthy%20smoothie%20with%20madagascar%20fruits&aspect=4:3"
    },
    {
      id: '8',
      title: "Salade minceur aux légumes malgaches",
      shortDescription: "Une recette légère et équilibrée pour favoriser la perte de poids.",
      content: "Apprenez à préparer une salade fraîche et croquante à base de carottes, radis et choux de Madagascar.",
      tags: ["Recettes", "Minceur", "Légumes"],
      views: viewsNumber,
      date: '2024-08-05',
      image: "https://api.a0.dev/assets/image?text=madagascar%20vegetable%20salad&aspect=4:3"
    },
    {
      id: '9',
      title: "Recette de riz coco aux légumes et épices malgaches",
      shortDescription: "Un plat traditionnel revisité pour une alimentation saine.",
      content: "Une recette savoureuse de riz parfumé à la noix de coco accompagné de légumes locaux.",
      tags: ["Recettes", "Tradition", "Cuisine malgache"],
      views: viewsNumber,
      date: '2024-09-15',
      image: "https://api.a0.dev/assets/image?text=coconut%20rice%20with%20madagascar%20vegetables&aspect=4:3"
    },
    {
      id: '10',
      title: "Jus détox aux agrumes et gingembre",
      shortDescription: "Un jus naturel pour booster le système immunitaire.",
      content: "Une boisson rafraîchissante à base d'oranges, citrons et gingembre de Madagascar.",
      tags: ["Santé", "Boisson", "Détox"],
      views: viewsNumber,
      date: '2024-10-20',
      image: "https://api.a0.dev/assets/image?text=detox%20citrus%20juice%20madagascar&aspect=4:3"
    },
    {
      id: '11',
      title: "Comment cuisiner la patate douce malgache ?",
      shortDescription: "Astuces pour préparer la patate douce de différentes manières.",
      content: "Explorez des recettes simples et gourmandes à base de patates douces de Madagascar.",
      tags: ["Recettes", "Astuces", "Légumes"],
      views: viewsNumber,
      date: '2024-11-30',
      image: "https://api.a0.dev/assets/image?text=madagascar%20sweet%20potato%20dishes&aspect=4:3"
    },
    {
      id: '12',
      title: "Recette spéciale pour diabétiques : gâteau sans sucre à la banane",
      shortDescription: "Un dessert gourmand adapté aux personnes atteintes de diabète.",
      content: "Préparez un délicieux gâteau moelleux à base de bananes et de farine de coco.",
      tags: ["Recettes", "Santé", "Diabète"],
      views: viewsNumber,
      date: '2024-12-25',
      image: "https://api.a0.dev/assets/image?text=madagascar%20sugar%20free%20banana%20cake&aspect=4:3"
    },
    {
      id: '13',
      title: "Les bienfaits des épinards dans votre alimentation",
      shortDescription: "Pourquoi intégrer les épinards malgaches dans votre alimentation ?",
      content: "Apprenez les valeurs nutritionnelles et les recettes possibles avec des épinards.",
      tags: ["Nutrition", "Santé", "Légumes"],
      views: viewsNumber,
      date: '2025-01-10',
      image: "https://api.a0.dev/assets/image?text=madagascar%20spinach%20nutrition&aspect=4:3"
    },
    {
      id: '14',
      title: "Boisson énergétique naturelle pour le sport",
      shortDescription: "Une boisson naturelle pour améliorer les performances sportives.",
      content: "Découvrez une recette simple à base de fruits et légumes malgaches pour un boost d’énergie.",
      tags: ["Sport", "Énergie", "Boisson"],
      views: viewsNumber,
      date: '2025-01-20',
      image: "https://api.a0.dev/assets/image?text=madagascar%20natural%20energy%20drink&aspect=4:3"
    },
    {
      id: '15',
      title: "Soupe réconfortante aux légumes malgaches",
      shortDescription: "Un plat parfait pour l’hiver.",
      content: "Une soupe nutritive avec des légumes bio de Madagascar.",
      tags: ["Recettes", "Hiver", "Santé"],
      views: viewsNumber,
      date: '2025-02-05',
      image: "https://api.a0.dev/assets/image?text=madagascar%20vegetable%20soup&aspect=4:3"
    },
    {
      id: '16',
      title: "Recettes saines pour booster votre système immunitaire",
      shortDescription: "Des plats naturels pour renforcer votre santé.",
      content: "Découvrez des recettes de jus, soupes et plats pour une immunité renforcée.",
      tags: ["Santé", "Immunité", "Recettes"],
      views: viewsNumber,
      date: '2025-02-18',
      image: "https://api.a0.dev/assets/image?text=madagascar%20immune%20boosting%20recipes&aspect=4:3"
    }
  ];
  