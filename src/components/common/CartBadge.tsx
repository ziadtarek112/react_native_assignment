import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {useCartStore} from '../../store/useCartStore';
import {colors} from '../../utils/colors';

const CartBadge = () => {
  const cartCount = useCartStore(s =>
    s.items.reduce((sum, i) => sum + i.quantity, 0),
  );
  const scale = useSharedValue(1);

  useEffect(() => {
    if (cartCount > 0) {
      scale.value = withSequence(
        withSpring(1.4, {damping: 3, stiffness: 300}),
        withSpring(1, {damping: 6, stiffness: 200}),
      );
    }
  }, [cartCount, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Icon name="cart-outline" size={24} color={colors.textPrimary} />
      {cartCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartCount}</Text>
        </View>
      )}
    </Animated.View>
  );
};

export default CartBadge;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.cartBadge,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: colors.textOnSecondary,
    fontSize: 10,
    fontWeight: '700',
  },
});
