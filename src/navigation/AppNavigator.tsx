import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryScreen from '../screens/GalleryScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { colors } from '../utils/colors';
import type { RootStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.textPrimary,
        headerTitleStyle: { fontWeight: '600' },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.backgroundGrey },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Gallery" options={{ headerShown: false }} component={GalleryScreen} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          title: '',
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
}
