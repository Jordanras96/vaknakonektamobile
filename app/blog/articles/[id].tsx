// app/blog/[id].tsx (Expo Router dynamique)
import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import ArticlePosts from '@/components/ArticlePosts';
import articleData from '@/data/articlesData';
import { Text } from '@/components/ui/text';


const ArticlePage = () => {
  const { id } = useLocalSearchParams();
  const post = articleData.find((p) => p.id === id);

  if (!post) {
    return <Text>Article non trouvé</Text>;
  }

  return (
    <ArticlePosts
      heroImage={post.heroImage}
      title={post.title}
      description={post.description}
      images={post.images}
      paragraphs={post.paragraphs}
      ingredients={post.ingredients}
      recipe={post.recipe}
      tags={post.tags}
    />
  );
};

export default ArticlePage;