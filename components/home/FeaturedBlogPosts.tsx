import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogCard from "./BlogCard";
import { blogPostType } from "@/types/BlogPostType";

const FeaturedBlogPosts = ({
  blogPosts,
  onPress,
}: {
  blogPosts: blogPostType[];
  onPress: (post: blogPostType) => void;
}) => {
  return (
    <View className="mb-4">
      <Text className="text-lg font-bold text-slate-900 mb-2 ml-2">Latest From Our Blog</Text>
      <View className="flex flex-row flex-wrap justify-between">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} onPress={() => onPress(post)} />
        ))}
      </View>
    </View>
  );
};



export default FeaturedBlogPosts;
