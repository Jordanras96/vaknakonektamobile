import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useCartStore from '@/stores/cartStore'; // Import the Zustand store
import { Image } from 'expo-image';
import { Card } from '@/components/ui/card';

const CartScreen = () => {
  const { items, removeFromCart, updateQuantity } = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const shippingCost = 3000;
  const grandTotal = totalPrice + shippingCost;

  return (
    <ScrollView className="p-4">
      <View className='flex flex-row'></View>
      {items.map((item) => (
        <Card key={item.product.id} className="mb-4 p-4 border-b border-gray-200">
          <Image
            source={{ uri: item.product.image }}
            className="w-full h-40 rounded-lg"
            contentFit="cover"
          />
          <Text className="text-lg font-bold mt-2">{item.product.name}</Text>
          <Text className="text-sm text-gray-600">
            {item.product.price.toFixed(2)} Ar / {item.product.unit}
          </Text>
          <View className="flex flex-row items-center justify-between mt-2">
            <View className="flex flex-row items-center">
              <TouchableOpacity
                className="p-2"
                onPress={() => updateQuantity(item.product.id, false)}
              >
                <AntDesign name="minus" size={20} color="#FF6B6B" />
              </TouchableOpacity>
              <Text className="mx-4 text-lg font-bold">{item.quantity}</Text>
              <TouchableOpacity
                className="p-2"
                onPress={() => updateQuantity(item.product.id, true)}
              >
                <AntDesign name="plus" size={20} color="#4CAF50" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              className="p-2"
              onPress={() => removeFromCart(item.product.id)}
            >
              <AntDesign name="delete" size={20} color="#FF6B6B" />
            </TouchableOpacity>
          </View>
          <Text className="text-lg font-bold mt-2">
            Total: {(item.product.price * item.quantity).toFixed(2)} Ar
          </Text>
        </Card>
      ))}
      <View className="mt-4 p-4 border-t border-gray-200">
        <Text className="text-lg font-bold">Sous-total: {totalPrice.toFixed(2)} Ar</Text>
        <Text className="text-lg font-bold">Frais de transport: {shippingCost.toFixed(2)} Ar</Text>
        <Text className="text-xl font-bold mt-2">Total: {grandTotal.toFixed(2)} Ar</Text>
      </View>
    </ScrollView>
  );
};

export default CartScreen;