// ArticlePosts.tsx
import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

interface ArticlePostsProps {
  heroImage: string;
  title: string;
  description: string;
  images?: string[];
  paragraphs?: string[];
  ingredients?: string[];
  recipe?: string | string[];
  tags: string[];
}

const ArticlePosts: React.FC<ArticlePostsProps> = ({
  heroImage,
  title,
  description,
  images = [],
  paragraphs = [],
  ingredients = [],
  recipe = "" || [],
  tags,
}) => {
  const isRecipe = tags.includes("recette");
  // const stepedRecipe = tags.includes('étape')

  return (
    <ScrollView style={styles.container}>
      {/* Hero Banner */}
      <Image source={{ uri: heroImage }} style={styles.heroImage} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      {isRecipe ? (
        // ( (stepedRecipe ? (
        <>
          {/* Structure 2: Recette */}
          <Text style={styles.sectionTitle}>Ingrédients</Text>
          {ingredients.map((item, index) => (
            <Text key={index} style={styles.listItem}>
              - {item}
            </Text>
          ))}
          <Image source={{ uri: images[0] }} style={styles.singleImage} />
          <Text style={styles.sectionTitle}>Recette</Text>

          {Array.isArray(recipe) ? (
            recipe.map((item, index) => (
              <View className="flex-row items-start space-x-2 p-3">
                <Text className="font-bold">{index + 1}.</Text>
                <Text className="text-gray-700">{item}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.paragraph}>{recipe}</Text>
          )}

          {images.length > 1 && (
            <Image source={{ uri: images[1] }} style={styles.singleImage} />
          )}
        </>
      ) : (
        <>
          {/* Structure 1: Article classique */}
          {images.length > 0 && (
            <Image source={{ uri: images[0] }} style={styles.singleImage} />
          )}
          {paragraphs.slice(0, 2).map((para, index) => (
            <Text key={index} style={styles.paragraph}>
              {para}
            </Text>
          ))}
          {images.length > 1 && (
            <Image source={{ uri: images[1] }} style={styles.singleImage} />
          )}
          {paragraphs.slice(2, 4).map((para, index) => (
            <Text key={index + 2} style={styles.paragraph}>
              {para}
            </Text>
          ))}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  heroImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 12,
  },
  singleImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    marginVertical: 12,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default ArticlePosts;
