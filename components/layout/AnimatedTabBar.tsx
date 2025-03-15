import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
import TabBar from "./Tabbar";
import styles from "@/app/styles/global";

interface Props {
  activeTab: string;
  onTabPress: (tab: string) => void;
  scrollY: Animated.Value;
}

const AnimatedTabBar = ({ activeTab, onTabPress, scrollY }: Props) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      if (value > 50) {
        // Faire disparaître le TabBar
        Animated.timing(translateY, {
          toValue: 100, // Déplacer vers le bas
          duration: 200,
          useNativeDriver: true,
        }).start();
      } else {
        // Faire réapparaître le TabBar
        Animated.timing(translateY, {
          toValue: 0, // Revenir à la position initiale
          duration: 200,
          useNativeDriver: true,
        }).start();
      }
    });

    return () => scrollY.removeListener(listener);
  }, [scrollY]);

  return (
    <Animated.View className="flex flex-row bg-white px-4 py-2.5 border-t-2 translate-y-2 duration-500 ease-in-out transition-all border-t-gray-600/10 elevation-lg shadow-slate-400/50 drop-shadow-md">
      <TabBar />
    </Animated.View>
  );
};

export default AnimatedTabBar;
