export interface blogPostType {
    id: string;
    title: string;
    content: string;
    date: string;
    image: string; // Ajouté
    shortDescription: string; // Ajouté
    tags: string[]; // Ajouté
  }