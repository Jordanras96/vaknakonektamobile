import React, { memo } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { usePathname } from 'expo-router';
import { router } from 'expo-router';
import { Text } from '../ui/text';
import useCartStore from '@/stores/cartStore'; // Import the Zustand store

const TabBar = memo(() => {
  const pathname = usePathname();
  const { items } = useCartStore(); // Use the Zustand store

  const currentRoute = pathname.split('/').pop() || 'home';

  const tabs = [
    { key: 'blog', icon: 'book-open' as const, label: 'Blog' },
    { key: 'market', icon: 'shopping-bag' as const, label: 'Market' },
    { key: 'home', icon: 'home' as const, label: 'Home' },
    { key: 'contact', icon: 'mail' as const, label: 'Contact' },
    { key: 'cart', icon: 'shopping-cart' as const, label: 'Cart' },
  ];

  return (
    <View className="flex flex-row bg-white px-4 py-2.5 border-t-2 border-t-gray-600/10 elevation-lg shadow-slate-400/50 drop-shadow-md">
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          className="flex-1 items-center justify-center py-2"
          style={[currentRoute === tab.key && styles.activeTab]}
          onPress={() =>
            router.push(
              `/${tab.key as 'home' | 'market' | 'blog' | 'contact' | 'cart'}`
            )
          }
        >
          <View>
            <Feather
              name={tab.icon}
              size={24}
              color={currentRoute === tab.key ? '#4CAF50' : '#666'}
            />
            {tab.key === 'cart' && items.length > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{items.length}</Text>
              </View>
            )}
          </View>
          <Text
            className="text-xs mt-1 text-gray-500"
            style={[currentRoute === tab.key && styles.activeTabLabel]}
          >
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  activeTab: {
    transform: [{ scale: 1.1 }],
  },
  activeTabLabel: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  badge: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default TabBar;