import { View, Image, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { myColors } from "@/utils/MyColors";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const Splash = () => {
  useEffect(() => {
    // const timer = setTimeout(()=>{
    //     router.replace('Signup')

    // })
    // setTimeout(()=>{
    // },5000)
    // return () => clearTimeout(timer)

    const timer = setTimeout(() => {
      const isLoggedIn = false;
      if (isLoggedIn) {
        router.replace("/home");
      }
      router.replace("/register");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View
      style={{
        backgroundColor: myColors.primary,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <StatusBar style="light" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
        }}
      >
        <Image
          source={require("../assets/images/logo1.png")}
          style={{
            height: 50,
            width: 35,
          }}
        />
        <View
          style={{
            flexDirection: "column",
            alignItems: "baseline",
            justifyContent: "flex-start",
            gap: 10,
          }}
        >
          <Image
            source={require("../assets/images/logo2.png")}
            style={{ height: 75, width: 170 }}
          />
          <Image
            source={require("../assets/images/logo3.png")}
            style={{ height: 20, width: 175 }}
          />
        </View>
      </View>
      <ActivityIndicator size="large" style={{ marginTop: 20 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 100,
  },
});

export default Splash;
