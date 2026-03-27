import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {Product} from '../../types/Product';
import {colors} from '../../utils/colors';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const CARD_WIDTH = (SCREEN_WIDTH - 32) / 2;

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
        {hasDiscount && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>-{discount}%</Text>
          </View>
        )}
      </View>
      <View style={styles.info}>
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
        <View style={styles.bottomRow}>
          <View style={styles.ratingRow}>
            <Icon name="star" size={11} color={colors.star} />
            <Text style={styles.rating}>{product.rating}</Text>
            <Text style={styles.reviewCount}>({product.reviewCount})</Text>
          </View>
          <View style={styles.expressTag}>
            <Text style={styles.expressText}>noon</Text>
            <Text style={styles.expressLabel}> Express</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    maxWidth: CARD_WIDTH,
    backgroundColor: colors.card,
    borderRadius: 16,
    margin: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.cardBorder,
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  imageContainer: {
    aspectRatio: 1,
    backgroundColor: colors.subtleBg,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: colors.error,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  discountText: {
    color: colors.textOnSecondary,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  info: {
    padding: 10,
    gap: 6,
  },
  name: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textPrimary,
    lineHeight: 18,
    letterSpacing: 0.1,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.textPrice,
    letterSpacing: -0.3,
  },
  originalPrice: {
    fontSize: 12,
    color: colors.textMuted,
    textDecorationLine: 'line-through',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  rating: {
    fontSize: 11,
    color: colors.textPrimary,
    fontWeight: '700',
  },
  reviewCount: {
    fontSize: 10,
    color: colors.textMuted,
  },
  expressTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expressText: {
    fontSize: 10,
    fontWeight: '800',
    color: colors.noonYellow,
    backgroundColor: colors.secondary,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  expressLabel: {
    fontSize: 10,
    color: colors.secondary,
    fontWeight: '700',
  },
});
