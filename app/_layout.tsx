import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Slot } from "expo-router";
import Header from "@/components/layout/Header";
import TabBar from "@/components/layout/Tabbar";
import "@/global.css";

const Layout = () => {
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      if (value > 50 && isTabBarVisible) {
        setIsTabBarVisible(false);
      } else if (value <= 50 && !isTabBarVisible) {
        setIsTabBarVisible(true);
      }
    });

    return () => scrollY.removeListener(listener);
  }, [isTabBarVisible]);

  return (
    <View className="flex flex-1 bg-slate-50/75">
      <Header />
      <Slot />
      {isTabBarVisible && <TabBar />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default Layout;
