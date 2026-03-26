import React, {useCallback, useRef} from 'react';
import {Dimensions, View, StyleSheet, ScrollView} from 'react-native';
import type {ProductDetailScreenProps} from '../types/navigation';
import ImageCarousel from '../components/detail/ImageCarousel';
import ProductInfo from '../components/detail/ProductInfo';
import Delivery from '../components/detail/Delivery';
import Description from '../components/detail/Description';
import Highlights from '../components/detail/Highlights';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../utils/colors';
import AddToCart from '../components/detail/AddToCart';
import FlyingImage, {
  FlyingImageHandle,
} from '../components/detail/FlyingImage';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export default function ProductDetailScreen({
  route,
}: ProductDetailScreenProps) {
  const {product} = route.params;
  const insets = useSafeAreaInsets();
  const flyingRef = useRef<FlyingImageHandle>(null);

  // Start from near the bottom bar, end near the header cart badge
  const startY = SCREEN_HEIGHT - 140 - insets.bottom;
  const endY = insets.top + 8;

  const handleFly = useCallback(() => {
    flyingRef.current?.fly();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        bounces={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100 + insets.bottom}}>
        <ImageCarousel images={product.images} productId={product.id} />
        <ProductInfo product={product} />
        <Delivery />
        <Description product={product} />
        <Highlights />
      </ScrollView>
      <AddToCart product={product} onFly={handleFly} />
      <FlyingImage
        ref={flyingRef}
        imageUri={product.images[0]}
        startY={startY}
        endY={endY}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
