import React, {useCallback, useRef} from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
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

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const IMAGE_HEIGHT = SCREEN_WIDTH * 0.85;

export default function ProductDetailScreen({
  route,
}: ProductDetailScreenProps) {
  const {product} = route.params;
  const insets = useSafeAreaInsets();
  const flyingRef = useRef<FlyingImageHandle>(null);

  // Start from near the bottom bar, end near the header cart badge
  const startY = SCREEN_HEIGHT - 140 - insets.bottom;
  const endY = insets.top + 8;

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const parallaxStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
      [-IMAGE_HEIGHT / 2, 0, IMAGE_HEIGHT * 0.4],
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      scrollY.value,
      [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
      [1.5, 1, 1],
      Extrapolation.CLAMP,
    );

    const opacity = interpolate(
      scrollY.value,
      [0, IMAGE_HEIGHT * 0.8],
      [1, 0.3],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{translateY}, {scale}],
      opacity,
    };
  });

  const handleFly = useCallback(() => {
    flyingRef.current?.fly();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        bounces={true}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={{paddingBottom: 100 + insets.bottom}}>
        <Animated.View style={parallaxStyle}>
          <ImageCarousel images={product.images} productId={product.id} />
        </Animated.View>
        <View style={styles.contentContainer}>
          <ProductInfo product={product} />
          <Delivery />
          <Description product={product} />
          <Highlights />
        </View>
      </Animated.ScrollView>
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
  contentContainer: {
    backgroundColor: colors.background,
    zIndex: 1,
  },
});
