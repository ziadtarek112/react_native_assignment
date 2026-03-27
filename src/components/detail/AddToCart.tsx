import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Product} from '../../types/Product';
import {useCartStore} from '../../store/useCartStore';
import {useState} from 'react';

type AddToCartProps = {
  product: Product;
  onFly?: () => void;
};

const AddToCart = ({product, onFly}: AddToCartProps) => {
  const buttonScale = useSharedValue(1);
  const checkOpacity = useSharedValue(0);
  const addToCart = useCartStore(s => s.addToCart);
  const [added, setAdded] = useState(false);

  const buttonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: buttonScale.value}],
  }));

  const checkAnimatedStyle = useAnimatedStyle(() => ({
    opacity: checkOpacity.value,
    transform: [{scale: checkOpacity.value}],
  }));

  const insets = useSafeAreaInsets();

  const handleAddToCart = () => {
    addToCart(product);

    onFly?.();

    buttonScale.value = withSequence(
      withSpring(0.9, {damping: 4, stiffness: 400}),
      withSpring(1.08, {damping: 4, stiffness: 400}),
      withSpring(1, {damping: 8, stiffness: 300}),
    );

    checkOpacity.value = withSequence(
      withSpring(1, {damping: 6, stiffness: 300}),
      withTiming(1, {duration: 1000}),
      withTiming(0, {duration: 300}),
    );

    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Animated.View
      entering={FadeInUp.delay(300).duration(400)}
      style={[styles.bottomBar, {paddingBottom: insets.bottom + 12}]}>
      <View style={styles.bottomPrice}>
        <Text style={styles.bottomPriceLabel}>Total Price</Text>
        <Text style={styles.bottomPriceValue}>AED {product.price}</Text>
      </View>

      <Animated.View style={[styles.addToCartWrapper, buttonAnimatedStyle]}>
        <Pressable
          onPress={handleAddToCart}
          style={[styles.addToCartButton, added && styles.addedButton]}>
          <Icon
            name={added ? 'checkmark-circle' : 'cart'}
            size={20}
            color={colors.textOnSecondary}
          />
          <Text style={styles.addToCartText}>
            {added ? 'Added!' : 'Add to Cart'}
          </Text>
        </Pressable>
        <Animated.View style={[styles.checkMark, checkAnimatedStyle]}>
          <Icon name="checkmark" size={16} color={colors.textOnSecondary} />
        </Animated.View>
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
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 12,
  },
  bottomPrice: {
    flex: 1,
  },
  bottomPriceLabel: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  bottomPriceValue: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.textPrimary,
    letterSpacing: -0.5,
    marginTop: 2,
  },
  addToCartWrapper: {
    flex: 1,
  },
  addToCartButton: {
    backgroundColor: colors.secondary,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  addedButton: {
    backgroundColor: colors.success,
  },
  addToCartText: {
    color: colors.textOnSecondary,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  checkMark: {
    position: 'absolute',
    top: -8,
    right: -4,
    backgroundColor: colors.success,
    borderRadius: 14,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
