import React, { useRef } from "react";
import { Animated, ScrollView } from "react-native";
import { products } from "@/data/products";
import { blogPostType } from "@/types/BlogPostType";
import AdvertisementCarousel from "@/components/home/AdvertissementCaroussel";
import TopFruits from "@/components/home/TopFruits";
import TopVegetables from "@/components/home/TopVegetables";
import Testimonials from "@/components/home/Testimonials";
import Partners from "@/components/home/Partners";
import FeaturedBlogPosts from "@/components/home/FeaturedBlogPosts";
import CapitalPoints from "@/components/home/CapitalPoints";
import { articleData } from "@/data/articlesData";
import { router } from "expo-router";
import useCartStore from "@/stores/cartStore"; // Import the Zustand store

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const { items, addToCart, updateQuantity } = useCartStore(); // Use the Zustand store

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  const handleBlogPress = (post: blogPostType) => {
    router.push(`/blog/articles/${post.id}`);
  };

  return (
    <Animated.ScrollView
      className="container mx-auto flex flex-col flex-grow "
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={16}
    >
      <AdvertisementCarousel />
      <CapitalPoints />
      <TopFruits
        products={products.fruits}
        cart={items.reduce((acc, item) => {
          acc[item.product.id] = item.quantity; // Utilisez 'item.product' à la place de 'item.productId'
          return acc;
        }, {} as { [key: string]: number })}
        onUpdateQuantity={(id, increment) => {
          if (increment) {
            addToCart(products.fruits.find((p) => p.id === id)!);
          } else {
            updateQuantity(id, false);
          }
        }}
      />
      <TopVegetables
        products={products.legumes}
        cart={items.reduce((acc, item) => {
          acc[item.product.id] = item.quantity; // Utilisez 'item.product' à la place de 'item.productId'
          return acc;
        }, {} as { [key: string]: number })}
        onUpdateQuantity={(id, increment) => {
          if (increment) {
            addToCart(products.legumes.find((p) => p.id === id)!);
          } else {
            updateQuantity(id, false);
          }
        }}
      />
      <Testimonials />
      <Partners />
      <FeaturedBlogPosts
        blogPosts={articleData.map((post) => ({
          ...post,
          content: post.description,
          date: (post as any).date ?? new Date().toISOString(), // Assertion de type + coalescence nulle
          image: post.heroImage,
          shortDescription: truncateDescription(post.description, 100),
        }))}
        onPress={handleBlogPress}
      />
    </Animated.ScrollView>
  );
}