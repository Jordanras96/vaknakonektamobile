import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Text } from "../ui/text";

const partners = [
  "organic%20farm%20Madagascar%20logo%20minimal",
  "eco%20friendly%20delivery%20Madagascar%20service%20logo",
  "sustainable%20packaging%20Madagascar%20company%20logo",
  "local%20farmers%20Madagascar%20association%20logo",
  "Malagasy%20agriculture%20cooperative%20logo%20green",
  "fair%20trade%20Madagascar%20coffee%20company%20logo",
  "natural%20herbal%20products%20Madagascar%20logo",
  "renewable%20energy%20for%20agriculture%20Madagascar%20logo",
  "wild%20honey%20Madagascar%20organic%20logo",
  "traditional%20rice%20cultivation%20Madagascar%20association%20logo",
];

const Partners = () => {
  return (
    <View className="mb-4">
      <Text className="text-lg font-bold text-slate-900 ml-2 mb-2">
        Our Partners
      </Text>
      <View className="flex flex-row flex-wrap justify-evenly">
        {partners.map((prompt, index) => (
          <Image
            key={index}
            source={{
              uri: `https://api.a0.dev/assets/image?text=${prompt}&aspect=1:1`,
            }}
            className="h-[100] w-[48%] mb-4"
            contentFit="contain"
            transition={1000}
          />
        ))}
      </View>
    </View>
  );
};


export default Partners;
