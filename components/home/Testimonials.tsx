import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "../ui/card";

const testimonials = [
  {
    name: "Tojo Ravalomanana",
    text: "VaknaKônekta est une véritable bénédiction pour ma famille ! Les courses deviennent un jeu d'enfant avec leur sélection de produits frais. Un grand merci à VaknaKônekta pour nous faire gagner du temps et économiser de l'argent !",
    rating: 4,
    image:
      "https://api.a0.dev/assets/image?text=happy%20Malagasy%20entrepreneur%20customer%20portrait&aspect=1:1",
  },
  {
    name: "Mialy Andrianarisoa",
    text: "Je ne peux plus me passer de VaknaKônekta pour mes courses ! Des produits frais à des prix imbattables. C'est vraiment une révolution, merci VaknaKônekta !",
    rating: 5,
    image:
      "https://api.a0.dev/assets/image?text=satisfied%20Malagasy%20woman%20office%20worker%20customer&aspect=1:1",
  },
  {
    name: "Hery Rakotomanga",
    text: "VaknaKônekta, c'est mon allié shopping incontournable. Des économies substantielles et des produits frais à foison. Merci à toute l'équipe !",
    rating: 5,
    image:
      "https://api.a0.dev/assets/image?text=smiling%20Malagasy%20farmer%20customer%20portrait&aspect=1:1",
  },
  {
    name: "Fano Randriamihaja",
    text: "Les courses ne sont plus une corvée grâce à VaknaKônekta. Des produits frais à des tarifs compétitifs, je suis conquise !",
    rating: 4,
    image:
      "https://api.a0.dev/assets/image?text=young%20Malagasy%20student%20happy%20customer&aspect=1:1",
  },
  {
    name: "Sarobidy Rasoanirina",
    text: "VaknaKônekta a changé ma vie quotidienne ! Des courses rapides, économiques et une qualité exceptionnelle. Merci VaknaKônekta !",
    rating: 5,
    image:
      "https://api.a0.dev/assets/image?text=eco-conscious%20Malagasy%20female%20customer%20portrait&aspect=1:1",
  },
  {
    name: "Nomena Raharimanana",
    text: " Le temps et l'argent que j'ai économisés sont incroyables. Merci pour cette opportunité, VaknaKônekta !",
    rating: 4,
    image:
      "https://api.a0.dev/assets/image?text=Malagasy%20mother%20buying%20organic%20food%20portrait&aspect=1:1",
  },
  {
    name: "Tiana Andrianantenaina",
    text: "Mes courses n'ont jamais été aussi simples qu'avec VaknaKônekta. Des produits frais à un prix défiant toute concurrence. Merci, VaknaKônekta !",
    rating: 4,
    image:
      "https://api.a0.dev/assets/image?text=Malagasy%20chef%20happy%20with%20fresh%20produce&aspect=1:1",
  },
  {
    name: "Lova Rakotobe",
    text: "VaknaKônekta a révolutionné ma façon de faire mes courses. Des économies significatives et des produits frais de qualité. Merci, VaknaKônekta !",
    rating: 5,
    image:
      "https://api.a0.dev/assets/image?text=Malagasy%20businessman%20customer%20testimonial&aspect=1:1",
  },
  {
    name: "Hanta Razafindrabe",
    text: "Enfin un marché qui valorise nos produits locaux ! Bravo pour cette initiative.",
    rating: 4,
    image:
      "https://api.a0.dev/assets/image?text=Malagasy%20grandmother%20happy%20customer%20portrait&aspect=1:1",
  },
  {
    name: "Fetra Ramaroson",
    text: "Chez VaknaKônekta, mes courses sont devenues un plaisir ! Une sélection exceptionnelle de produits frais à des prix compétitifs. Merci pour cette expérience, VaknaKônekta !",
    rating: 5,
    image:
      "https://api.a0.dev/assets/image?text=Malagasy%20young%20professional%20customer%20portrait&aspect=1:1",
  },
];

const Testimonials = () => {
  return (
    <View className="mb-4">
      <Text className="text-lg font-bold text-slate-900 mb-2 ml-2">What Our Customers Say</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="w-[200] mr-3 ml-2 bg-white overflow-hidden shadow-md">
            <Image
              source={{ uri: testimonial.image }}
              className="w-full h-[150]"
              contentFit="cover"
              transition={1000}
            />
            <View className="p-4">
              <Text className="text-base font-bold text-slate-900">{testimonial.name}</Text>
              <View className="flex flex-row mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <AntDesign key={i} name="star" size={16} color="#FFD700" />
                ))}
              </View>
              <Text className="text-sm text-slate-600 mt-2">{testimonial.text}</Text>
            </View>
          </Card>
        ))}
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
  testimonialCard: {
    width: 300,
    marginRight: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  testimonialImage: {
    width: "100%",
    height: 150,
  },
  testimonialContent: {
    padding: 16,
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  ratingContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  testimonialText: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
});

export default Testimonials;
