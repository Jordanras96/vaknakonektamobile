import {
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { myColors } from "@/utils/MyColors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Input } from "@/components/ui/input";

const Register = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [userCrendentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCrendentials;
  console.log(email);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleRegister = () => {
    router.navigate("/home");
  };

  const handleLogin = () => {
    router.navigate("/login");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar />
      <ScrollView className="flex-1 pt-2.5">
        <Image
          style={{ alignSelf: "center", height: 80, width: 58 }}
          source={require("../assets/images/logo1.png")}
        />
        <View className="px-5 mt-3">
          <Text className="text-primary text-2xl font-medium">S'inscrire</Text>
          <Text className="text-base font-normal text-gray-400 mt-2">
            Entrez vos identifiants pour continuer
          </Text>
          <Text className="text-base font-medium text-gray-400 mt-10">
            Nom d'utilisateur
          </Text>
          <View className="border-b-2 border-[#E3E3E3]">
            <Input
              className="text-base mt-1 border-none focus-within:border-none focus-within:ring-0 focus:ring-0 focus-visible:ring-0 focus:border-none focus-visible:border-none focus-within:outline-none web:focus-visible:ring-0 web:focus-visible:ring-offset-0 focus-visible:ring-offset-0 focus-within:ring-offset-0 focus:ring-offset-0"
              maxLength={9}
              keyboardType="number-pad"
            />
          </View>
          <Text className="text-base font-medium text-gray-400 mt-5">
            Adresse Email
          </Text>
          <View className="border-b-2 border-[#E3E3E3]">
            <Input
              className=" text-base mt-1 border-none focus-within:border-none focus-within:ring-0 focus:ring-0 focus-visible:ring-0 focus:border-none focus-visible:border-none focus-within:outline-none web:focus-visible:ring-0 web:focus-visible:ring-offset-0 focus-visible:ring-offset-0 focus-within:ring-offset-0 focus:ring-offset-0"
              onChangeText={(value) => {
                setUserCredentials({ ...userCrendentials, email: value });
              }}
              keyboardType="email-address"
            />
          </View>
          <Text className="text-base font-medium text-gray-400 mt-5">
            Mot de passe
          </Text>
          <View className="flex flex-row border-b-2 border-[#E3E3E3]  justify-between items-center">
            <Input
              value={password}
              onChangeText={(value) => {
                setUserCredentials({ ...userCrendentials, password: value });
              }}
              secureTextEntry={isVisible}
              maxLength={9}
              keyboardType="ascii-capable"
              className="text-lg mt-1 flex-[0.9] border-none focus-within:border-none focus-within:ring-0 focus:ring-0 focus-visible:ring-0 focus:border-none focus-visible:border-none focus-within:outline-none web:focus-visible:ring-0 web:focus-visible:ring-offset-0 focus-visible:ring-offset-0 focus-within:ring-offset-0 focus:ring-offset-0"
            />
            <MaterialCommunityIcons
              onPress={toggleVisibility}
              name={isVisible ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
            />
          </View>
          <Text className="text-sm font-normal text-black mt-4 tracking-wider leading-6 w-[95%] opacity-70 line-clamp-2">
            En continuant, vous acceptez nos Conditions d'Utilsation et notre
            Politique de Confidentialité
          </Text>
          <Button
            onPress={handleRegister}
            className="bg-primary mt-8 h-16 rounded-3xl justify-center items-center"
          >
            <Text className="text-2xl text-secondary font-medium">Sign up</Text>
          </Button>

          <View className="flex-row justify-center items-center mt-5 gap-1">
            <Text className="text-base">Vous avez déjà un compte ?</Text>
            <Button onPress={handleLogin} className="bg-transparent m-0 p-0">
              <Text className="text-base text-primary font-semibold ">
                Se connecter
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
