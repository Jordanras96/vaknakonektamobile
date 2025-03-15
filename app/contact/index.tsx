// import React, { useState } from 'react';
// import { View, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
// import { styles } from "../styles/global";
// import Toast from 'react-native-toast-message';

// export default function ContactScreen() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [telephone, setTelephone] = useState('');
//   const [subject, setSubject] = useState('');

//   const sendContactForm = () => {
//     // Simuler l'envoi du formulaire
//     Toast.show({
//       type: 'success',
//       text1: 'Message sent!',
//       visibilityTime: 3000, // Durée d'affichage du toast en millisecondes
//     });

//     // Réinitialiser les champs du formulaire
//     setFullName('');
//     setEmail('');
//     setTelephone('');
//     setSubject('');
//   };

//   return (
//     <ScrollView contentContainerStyle={{ paddingBottom: 100 }} style={styles.scrollContainer}>
//       <View style={styles.contactContainer}>
//         <Text style={styles.contactTitle}>Contact</Text>
//         <Text style={styles.contactDescription}>
//           Let us know if you have any comments to make or partnership proposals.
//         </Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Full Name"
//           value={fullName}
//           onChangeText={setFullName}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Email Address"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Telephone Number"
//           value={telephone}
//           onChangeText={setTelephone}
//           keyboardType="phone-pad"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Subject"
//           value={subject}
//           onChangeText={setSubject}
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={sendContactForm}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

import { View, Text, TextInput, ScrollView } from "react-native";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Toast from "react-native-toast-message";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Feather, Wrench } from "lucide-react-native";

const InputField = ({
  label,
  value,
  setValue,
  placeholder,
}: {
  label: string;
  value: string;
  setValue: (text: string) => void;
  placeholder: string;
}) => (
  <View className="mb-6">
    <Text className="text-gray-700 mb-2">{label}</Text>
    <TextInput
      className="border border-gray-300 rounded-lg px-4 py-2"
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
    />
  </View>
);

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [sendCopy, setSendCopy] = useState(false);

  const handleSubmit = () => {
    Toast.show({
      type: "success",
      text1: "Message envoyé!",
      visibilityTime: 3000,
    });
    setName("");
    setEmail("");
    setTelephone("");
    setSubject("");
    setMessage("");
    setAgreed(false);
    setSendCopy(false);
  };

  return (
    <ScrollView className="p-6">
      <View className="mb-8">
        <Text className="text-2xl font-bold mb-4">Contactez vous</Text>
        <View className="bg-white rounded-lg shadow-lg p-6">
          <View className="mb-6">
            <Label className="mb-2">Votre nom</Label>
            <Input
              placeholder="Rakotovao Bertin"
              value={name}
              onChangeText={setName}
              className="w-full"
            />
          </View>
          <View className="mb-6">
            <Label className="mb-2">Votre adresse email</Label>
            <Input
              placeholder="rakoto@malgasymail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              className="w-full"
            />
          </View>
          <View className="mb-6">
            <Label className="mb-2">Votre numéro téléphone</Label>
            <Input
              placeholder="+261 3X XXX XX"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              className="w-full"
            />
          </View>
          <View className="mb-6">
            <Label className="mb-2">Votre Message</Label>
            <Textarea
              placeholder="Message"
              value={message}
              onChangeText={setMessage}
              className="w-full"
              numberOfLines={5}
            />
          </View>
          <View className="mb-6 flex-row items-center">
            <Checkbox
              checked={sendCopy}
              onCheckedChange={setSendCopy}
              className="mr-2"
            />
            <Label>Envoyez moi une copie</Label>
          </View>
          <Button
            onPress={handleSubmit}
            className="w-full bg-primary py-2 rounded-lg"
          >
            <Text className="text-white font-bold">Envoyer</Text>
          </Button>
        </View>
      </View>

      <View className="mt-8">
        <Text className="text-2xl font-bold mb-4">Comment nous contacter?</Text>
        <View className="flex-row flex-wrap">
          <View className="w-full md:w-6/12 lg:w-full xl:w-6/12 mb-8">
            <View className="flex-row items-start">
              <View className="bg-primary-100 p-4 rounded-md">
                <Wrench size={24} />
              </View>
              <View className="ml-6">
                <Text className="font-bold">Support technique</Text>
                <Text className="text-neutral-500">
                  technicalsupport@vaknakônekta.com
                </Text>
                <Text className="text-neutral-500">+261 234 567 89</Text>
              </View>
            </View>
          </View>
          <View className="w-full md:w-6/12 lg:w-full xl:w-6/12 mb-8">
            <View className="flex-row items-start">
              <View className="bg-primary-100 p-4 rounded-md">
                <Wrench size={24} />
              </View>
              <View className="ml-6">
                <Text className="font-bold">Support client</Text>
                <Text className="text-neutral-500">
                  customersupport@vaknakônekta.com
                </Text>
                <Text className="text-neutral-500">+261 234 567 89</Text>
              </View>
            </View>
          </View>
          <View className="w-full md:w-6/12 lg:w-full xl:w-6/12 mb-8">
            <View className="flex-row items-start">
              <View className="bg-primary-100 p-4 rounded-md">
                <Wrench size={24} />
              </View>
              <View className="ml-6">
                <Text className="font-bold">Partenariat</Text>
                <Text className="text-neutral-500">
                  partnership@vaknakônekta.com
                </Text>
                <Text className="text-neutral-500">+261 234 567 89</Text>
              </View>
            </View>
          </View>
          {/* Répétez la structure ci-dessus pour les autres informations de contact */}
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactScreen;
