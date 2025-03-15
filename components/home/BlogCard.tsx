import React, { memo, useRef, useCallback } from "react";
import { View, Pressable, Animated, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Text } from "../ui/text";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

interface BlogPost {
  id: string;
  image: string;
  title: string;
  shortDescription: string;
  tags: string[];
}

interface Props {
  post: BlogPost;
  onPress: () => void;
}

const BlogCard = memo(({ post, onPress }: Props) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = useCallback(() => {
    Animated.spring(scale, { toValue: 0.97, useNativeDriver: true }).start();
  }, [scale]);

  const handlePressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  // Génère une couleur aléatoire pour le dégradé
  const getRandomColor1 = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 70 + Math.floor(Math.random() * 30);
    const lightness = 50;
    return { hue, saturation, lightness };
  };

  const getRandomColor2 = (color1: {
    hue: number;
    saturation: number;
    lightness: number;
  }) => {
    const lightness = color1.lightness + (Math.random() > 0.5 ? 10 : -10);
    return `hsl(${color1.hue},${color1.saturation}%,${lightness}%)`;
  };

  const color1 = getRandomColor1();
  const color2 = getRandomColor2(color1);

  return (
    <Pressable onPress={onPress}>
      <View className="pt-1 flex flex-row flex-wrap mb-4">
        <Card className="bg-white overflow-hidden rounded-t-lg mr-3 ml-2 flex flex-col flex-nowrap justify-between w-[375]">
          <Image
            source={{ uri: post.image }}
            style={styles.blogImage}
            className="w-full h-[120] object-cover"
            transition={1000}
          />
          <CardHeader className="m-0">
            <CardTitle className="text-sm font-bold text-[#333]">
              {post.title}
            </CardTitle>
            <CardDescription className="text-xs text-[#666] mt-1">
              {post.shortDescription}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row flex-wrap m-0">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                className={`rounded-xl px-2 py-1 mr-1 mb-1 font-bold text-white/90 bg-gradient-to-r from-hsl(${color1.hue},${color1.saturation}%,${color1.lightness}%) to-${color2}`}
              >
                <Label className="text-sm text-white/90">{tag}</Label>
              </Badge>
            ))}
          </CardContent>
          <CardFooter className="m-0">
            <Button
              className="flex flex-row flex-nowrap items-center m-0"
              onPress={onPress}
            >
              <Label className="text-xs text-white mr-1">Voir plus</Label>
              <AntDesign name="arrowright" size={16} color="#fff" />
            </Button>
          </CardFooter>
        </Card>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  blogCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    margin: 8,
    width: 160,
  },
  blogImage: {
    width: "100%",
    height: 120,
  },
  blogContent: {
    padding: 8,
  },
  blogTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  blogDescription: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  tag: {
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 10,
    color: "#333",
  },
  readMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  readMoreText: {
    fontSize: 12,
    color: "#4CAF50",
    marginRight: 4,
  },
});

export default BlogCard;
