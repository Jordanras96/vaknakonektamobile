import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";

export const featuresCapitalPointsData = [
    {
      icon: <Ionicons name="medal-outline" size={32} color="#4CAF50" />,
      title: "#1",
      description: "Première plateforme locale de produits frais.",
    },
    {
      icon: <Ionicons name="leaf-outline" size={32} color="#4CAF50" />,
      title: "Produits frais",
      description: "Des produits ultra-frais en circuit court.",
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="piggy-bank-outline"
          size={32}
          color="#4CAF50"
        />
      ),
      title: "Facile et rapide",
      description: "Faites vos courses rapidement et à moindre coût.",
    },
    {
      icon: <Feather name="trash-2" size={32} color="#4CAF50" />,
      title: "Zéro déchet",
      description: "Un engagement pour une consommation responsable.",
    },
  ];