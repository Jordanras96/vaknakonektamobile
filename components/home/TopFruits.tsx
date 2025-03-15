import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";
import { Text } from "../ui/text";

interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  stock: number;
  image: string;
}

const TopFruits = ({
  products,
  cart,
  onUpdateQuantity,
}: {
  products: Product[];
  cart: { [key: string]: number };
  onUpdateQuantity: (id: string, increment: boolean) => void;
}) => {
  return (
    <View className="mb-4">
      <Text className="text-lg font-bold text-slate-900 ml-2 mb-2">Top Fruits</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={cart[product.id] || 0}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
  },
});

export default TopFruits;
