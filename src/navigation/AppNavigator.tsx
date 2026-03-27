import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GalleryScreen from '../screens/GalleryScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import {colors} from '../utils/colors';
import type {RootStackParamList} from '../types/navigation';
import CartBadge from '../components/common/CartBadge';

const Stack = createNativeStackNavigator<RootStackParamList>();
const renderCartBadge = () => <CartBadge />;

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.background},
        headerTintColor: colors.textPrimary,
        headerTitleStyle: {fontWeight: '700', fontSize: 16},
        headerShadowVisible: false,
        contentStyle: {backgroundColor: colors.backgroundGrey},
        animation: 'fade',
      }}>
      <Stack.Screen
        name="Gallery"
        options={{headerShown: false}}
        component={GalleryScreen}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({route}) => ({
          title: route.params.product.name,
          headerBackTitle: 'Back',
          headerRight: renderCartBadge,
        })}
      />
    </Stack.Navigator>
  );
}
