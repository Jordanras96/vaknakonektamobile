import React, { useCallback, useRef, useState } from "react";
import { View, ScrollView, Pressable, Image } from "react-native";
import BlogCard from "../../components/home/BlogCard";
import styles from "../styles/global";
import { articleData } from "@/data/articlesData";

import Animated, { FadeIn } from "react-native-reanimated";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Text } from "../../components/ui/text";
import { blogPostType } from "@/types/BlogPostType";
import { router } from "expo-router";

interface BlogPost {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  image: string;
  tags: string[];
  date: string;
  views: number;
}
interface articleData {
  id: string;
  heroImage: string;
  title: string;
  description: string;
  images: string[];
  paragraphs: string[];
  tags: string[];
  ingredients?: undefined;
  recipe?: undefined;
}

export default function BlogScreen() {
  const [selectedBlog, setSelectedBlog] = useState<blogPostType | null>(null);
  const [sortBy, setSortBy] = useState<"date" | "views">("date");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleBlogPress = (post: blogPostType) => {
    router.push(`/blog/articles/${post.id}`);
  };

  const sortAndFilterPosts = () => {
    let filteredPosts = articleData.map((post) => ({
      id: post.id,
      title: post.title,
      shortDescription: post.description,
      content: post.paragraphs
        ? post.paragraphs.join("\n\n")
        : post.description,
      image: post.heroImage,
      tags: post.tags,
      date: (post as any).date ?? new Date().toISOString(),
      views: (post as any).views ?? 0,
    }));

    if (selectedTag) {
      filteredPosts = filteredPosts.filter((post) =>
        post.tags.includes(selectedTag)
      );
    }

    if (sortBy === "date") {
      filteredPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortBy === "views") {
      filteredPosts.sort((a, b) => b.views - a.views);
    }

    return filteredPosts;
  };

  return (
    <View style={styles.container} className="">
      <View className="flex flex-row flex-nowrap items-center justify-around">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Text>
                Trier par: {sortBy === "date" ? "Nouveauté" : "Plus vu"}
              </Text>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onPress={() => setSortBy("date")}>
              <Text>Nouveauté</Text>
            </DropdownMenuItem>
            <DropdownMenuItem onPress={() => setSortBy("views")}>
              <Text>Plus vu</Text>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Text>Filtrer par tag: {selectedTag || "Tous"}</Text>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onPress={() => setSelectedTag(null)}>
              <Text>Tous</Text>
            </DropdownMenuItem>
            {Array.from(new Set(articleData.flatMap((post) => post.tags))).map(
              (tag) => (
                <DropdownMenuItem key={tag} onPress={() => setSelectedTag(tag)}>
                  <Text>{tag}</Text>
                </DropdownMenuItem>
              )
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        style={styles.scrollContainer}
      >
        <View className="flex flex-row flex-wrap justify-between">
          {sortAndFilterPosts().map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onPress={() => handleBlogPress(post)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
