// src/components/ProtectedScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import useAuthStore from '../stores/authStore';

const ProtectedScreen = () => {
  const { user } = useAuthStore();

  if (!user) {
    return <Text>Vous devez être connecté pour accéder à cette page.</Text>;
  }

  return (
    <View>
      <Text>Bienvenue, {user.email}!</Text>
    </View>
  );
};

export default ProtectedScreen;