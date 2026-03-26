import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Product} from '../../types/Product';
import {colors} from '../../utils/colors';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

type ProductCardProps = {
  product: Product;
  onPress: () => void;
};
const ProductCard = ({product, onPress}: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;
  const hasDiscount = discount > 0;
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.imageContainer}>
        <Animated.Image
          source={{uri: product.images[0]}}
          style={styles.image}
          sharedTransitionTag={`product-image-${product.id}`}
        />
      </View>
      {hasDiscount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{discount}%</Text>
        </View>
      )}
      <View style={styles.info}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>AED {product.price}</Text>
          {product.originalPrice && (
            <Text style={styles.originalPrice}>
              AED {product.originalPrice}
            </Text>
          )}
        </View>
        <View style={styles.ratingRow}>
          <Icon name="star" size={12} color={colors.star} />
          <Text style={styles.rating}>{product.rating}</Text>
          <Text style={styles.reviewCount}>({product.reviewCount})</Text>
        </View>
        <View style={styles.expressTag}>
          <Text style={styles.expressText}>noon</Text>
          <Text style={styles.expressLabel}> Express</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    margin: 4,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    aspectRatio: 1,
    backgroundColor: colors.backgroundGrey,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: colors.error,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: {
    color: colors.textOnSecondary,
    fontSize: 10,
    fontWeight: '700',
  },
  info: {
    padding: 8,
  },
  category: {
    fontSize: 10,
    color: colors.textMuted,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  name: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.textPrimary,
    lineHeight: 18,
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrice,
  },
  originalPrice: {
    fontSize: 12,
    color: colors.textMuted,
    textDecorationLine: 'line-through',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginBottom: 6,
  },
  rating: {
    fontSize: 11,
    color: colors.textPrimary,
    fontWeight: '600',
  },
  reviewCount: {
    fontSize: 11,
    color: colors.textMuted,
  },
  expressTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expressText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.noonYellow,
    backgroundColor: colors.secondary,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 2,
    overflow: 'hidden',
  },
  expressLabel: {
    fontSize: 11,
    color: colors.secondary,
    fontWeight: '600',
  },
});
