import React from "react";
import { View, ScrollView } from "react-native";
import SectionHeader from "@/components/home/SectionHeader";
import ProductCard from "@/components/home/ProductCard";
import { products } from "@/data/products";
import styles from "@/app/styles/global";
import useCartStore from "@/stores/cartStore"; // Import the Zustand store

export default function MarketScreen() {
  const { items, addToCart, updateQuantity } = useCartStore(); // Use the Zustand store

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 100 }}
      style={styles.scrollContainer}
    >
      <SectionHeader title="Fruits frais" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          {products.fruits.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={items.find((item) => item.product.id === product.id)?.quantity || 0}
              onUpdateQuantity={(id, increment) => {
                if (increment) {
                  addToCart(product);
                } else {
                  updateQuantity(id, false);
                }
              }}
            />
          ))}
        </View>
      </ScrollView>
      <SectionHeader title="Légumes fraiches" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          {products.legumes.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={items.find((item) => item.product.id === product.id)?.quantity || 0}
              onUpdateQuantity={(id, increment) => {
                if (increment) {
                  addToCart(product);
                } else {
                  updateQuantity(id, false);
                }
              }}
            />
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
}