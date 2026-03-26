import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import type { ProductDetailScreenProps } from '../types/navigation';
import ImageCarousel from '../components/detail/ImageCarousel';
import ProductInfo from '../components/detail/ProductInfo';
import Delivery from '../components/detail/Delivery';
import Description from '../components/detail/Description';
import Highlights from '../components/detail/Highlights';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../utils/colors';

export default function ProductDetailScreen({
  route,
}: ProductDetailScreenProps) {
  const { product } = route.params;
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{product.name}</Text>
      <ScrollView
        bounces={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}
      >
        <ImageCarousel images={product.images} />
        <ProductInfo product={product} />
        <Delivery />
        <Description product={product} />
        <Highlights />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    textAlign: 'center',
    marginHorizontal: 12,
  },
});
