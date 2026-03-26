import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { colors } from '../../utils/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Product } from '../../types/Product';
import { useRef } from 'react';

type AddToCartProps = {
  product: Product;
};

const AddToCart = ({ product }: AddToCartProps) => {
  const buttonScale = useSharedValue(1);
  const buttonRef = useRef(null);
  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: buttonScale.value }],
  }));

  const insets = useSafeAreaInsets();
  const handleAddToCart = () => {};
  return (
    <Animated.View
      entering={FadeInUp.delay(300).duration(400)}
      style={[styles.bottomBar, { paddingBottom: insets.bottom + 12 }]}
    >
      <View style={styles.bottomPrice}>
        <Text style={styles.bottomPriceLabel}>Total Price</Text>
        <Text style={styles.bottomPriceValue}>AED {product.price}</Text>
      </View>

      <Animated.View style={[styles.addToCartWrapper, buttonAnimatedStyle]}>
        <Pressable
          ref={buttonRef}
          onPress={handleAddToCart}
          style={styles.addToCartButton}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  addToCartSection: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  addToCartText: {
    color: colors.textOnSecondary,
    fontSize: 16,
    fontWeight: '700',
  },
  bottomPrice: {
    flex: 1,
  },
  bottomPriceLabel: {
    fontSize: 12,
    color: colors.textMuted,
  },
  bottomPriceValue: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  addToCartWrapper: {
    flex: 1,
  },
  addToCartButton: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
});
