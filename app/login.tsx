// src/components/LoginScreen.tsx
import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, ActivityIndicator } from "react-native";
import useAuthStore from "../stores/authStore";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error, token } = useAuthStore();
  const [isVisible, setIsVisible] = useState(true);

  const handleLogin = async () => {
    await login(email, password);
  };

  const handleRegister = () => {
    router.navigate("/register");
  };

  useEffect(() => {
    // Navigation si le token est présent après connexion
    if (token) {
      router.navigate("/home");
    }
  }, [token]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar />
      <ScrollView className="flex-1 pt-2.5">
        <Image
          style={{ alignSelf: "center", height: 80, width: 58 }}
          source={require("@/assets/images/logo1.png")}
        />
        <View className="px-5 mt-3">
          <Text className="text-primary text-2xl font-medium">
            Se connecter
          </Text>
          <Text className="text-base font-normal text-gray-400 mt-2">
            Entrez vos identifiants pour continuer
          </Text>
          <Text className="text-base font-normal text-gray-400 mt-10">
            Email
          </Text>
          <View className="border-b-2 border-[#E3E3E3]">
            <Input
              className="text-base mt-1 border-none focus-within:ring-0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <Text className="text-base font-normal text-gray-400 mt-5">
            Mot de passe
          </Text>
          <View className="flex flex-row border-b-2 border-b-[#E3E3E3] justify-between items-center">
            <Input
              className="text-lg mt-1 flex-[0.9] border-none focus-within:ring-0"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={isVisible}
            />
            <MaterialCommunityIcons
              onPress={toggleVisibility}
              name={isVisible ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
            />
          </View>
          <Button
            className="bg-primary mt-8 h-16 rounded-3xl justify-center items-center"
            onPress={handleLogin}
            disabled={loading}
          >
            <Text className="text-2xl text-secondary font-medium">
              {loading ? `Connexion... ` : "Se connecter"}
            </Text>
          </Button>
          {error && (
            <Text className="text-red-500 text-center mt-4">{error}</Text>
          )}
        </View>
        <View className="flex-row justify-center items-center mt-5 gap-1">
          <Text className="text-base">Vous êtes nouveau ?</Text>
          <Button onPress={handleRegister} className="bg-transparent m-0 p-0">
            <Text className="text-base text-primary font-semibold ">
              S'inscrire
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
