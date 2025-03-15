import React from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Image } from "expo-image";
const AdvertisementCarousel = () => {
  const carouselItems = [
    "vibrant%20organic%20produce%20display%20in%20modern%20market",
    "fresh%20fruits%20and%20vegetables%20arranged%20colorfully",
    "modern%20advertisement%20for%20organic%20market",
  ];
  //**! add other images for carrousel, fetch image in Aina's Github */
  return (
    <View style={styles.heroContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      >
        {carouselItems.map((prompt, index) => (
          <Image
            key={index}
            source={require("../../assets/images/bg_1.jpg")}
            style={styles.carouselImage}
            contentFit="cover"
            transition={1000}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    height: 200,
    marginBottom: 16,
  },
  carousel: {
    flex: 1,
  },
  carouselImage: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
});

export default AdvertisementCarousel;
