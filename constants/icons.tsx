import { Ionicons } from "@expo/vector-icons";

// Définissez un type pour les icônes
type IconType = {
  [key: string]: (props: { color: string; focused: boolean }) => JSX.Element; // Utilisez 'any' ou un type plus spécifique si nécessaire
};

// Déclarez votre objet d'icônes avec le type défini
export const icon: IconType = {
  index: ({ color, focused }) =>
    focused ? (
      <Ionicons name="home" size={24} color={color} />
    ) : (
      <Ionicons name="home-outline" size={24} color={color} />
    ),
  discover: ({ color, focused }) =>
    focused ? (
      <Ionicons name="compass" size={25} color={color} />
    ) : (
      <Ionicons name="compass-outline" size={25} color={color} />
    ),
  saved: ({ color, focused }) =>
    focused ? (
      <Ionicons name="bookmarks" size={22} color={color} />
    ) : (
      <Ionicons name="bookmarks-outline" size={22} color={color} />
    ),
  settings: ({ color, focused }) =>
    focused ? (
      <Ionicons name="settings" size={24} color={color} />
    ) : (
      <Ionicons name="settings-outline" size={24} color={color} />
    ),
};