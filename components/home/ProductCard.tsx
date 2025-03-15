import React, { memo } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "../ui/card";
import { Text } from "../ui/text";

interface ProductCardProps {
  product: {
    id: string;
    image: string;
    name: string;
    price: number;
    unit: string;
    stock: number;
  };
  quantity: number;
  onUpdateQuantity: (productId: string, increment: boolean) => void;
}

const ProductCard = memo<ProductCardProps>(
  ({ product, quantity, onUpdateQuantity }) => (
    <Card className="shadow-md m-2 w-[160] overflow-hidden rounded-lg">
      <Image
        source={{ uri: product.image }}
        className="w-full h-[120]"
        contentFit="cover"
        transition={1000}
      />
      <View className="p-4">
        <Text className="text-sm font-bold text-slate-900">{product.name}</Text>
        <Text className="text-xs text-slate-600 mt-1">
          {product.price.toFixed(2)} Ar / {product.unit}
        </Text>
        <Text className="text-xs text-slate-600 mt-1">
          Disponible: {product.stock} {product.unit}
        </Text>
        <View className="flex flex-row items-center justify-around mt-2">
          <TouchableOpacity
            className="p-1"
            onPress={() => onUpdateQuantity(product.id, false)}
          >
            <AntDesign name="minus" size={20} color="#FF6B6B" />
          </TouchableOpacity>
          <Text className="text-base font-bold ">{quantity}</Text>
          <TouchableOpacity
            className="p-1"
            onPress={() => onUpdateQuantity(product.id, true)}
          >
            <AntDesign name="plus" size={20} color="#4CAF50" />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  )
);



export default ProductCard;
