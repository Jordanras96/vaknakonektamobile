import React, { memo } from "react";
import { View, Text } from "react-native";
import { Image } from "expo-image";
import { usePathname } from "expo-router";
import styles from "@/app/styles/global";

const Header = () => {
  const pathname = usePathname();
  const currentRoute = pathname.split("/").pop() || "Welcome";
  return (
    <View
      style={styles.header}
      className="bg-white text-black p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
    >
      <View className="container mx-auto flex justify-between items-center">
      {/* <Text className="text-2xl font-bold text-slate-900">Vaknakônekta</Text> */}
        <Image
          
          source={require('@/assets/images/logo.png')}
          // style={styles.logo}
          className="w-[150] h-[60]"
          contentFit="contain"
          transition={1000}
        />
       
        <Text className="text-2xl font-bold text-slate-900">
          {currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1)}
        </Text>
      </View>
    </View>
  );
};

export default Header;
