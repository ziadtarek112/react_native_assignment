import {StyleSheet, Text, View} from 'react-native';
import {Product} from '../../types/Product';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {colors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';

type ProductInfoProps = {
  product: Product;
};

const ProductInfo = ({product}: ProductInfoProps) => {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;
  return (
    <Animated.View
      entering={FadeInUp.delay(100).duration(400)}
      style={styles.infoSection}>
      <View style={styles.categoryRow}>
        <Text style={styles.category}>{product.category}</Text>
        {discount > 0 && (
          <View style={styles.discountTag}>
            <Text style={styles.discountTagText}>{discount}% OFF</Text>
          </View>
        )}
      </View>

      <Text style={styles.productName}>{product.name}</Text>

      <View style={styles.priceSection}>
        <Text style={styles.price}>AED {product.price}</Text>
        {product.originalPrice && (
          <Text style={styles.originalPrice}>AED {product.originalPrice}</Text>
        )}
      </View>

      {product.originalPrice && (
        <Text style={styles.saveText}>
          You save AED {product.originalPrice - product.price}
        </Text>
      )}

      <View style={styles.ratingSection}>
        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map(star => (
            <Icon
              key={star}
              name={star <= Math.round(product.rating) ? 'star' : 'star-outline'}
              size={16}
              color={
                star <= Math.round(product.rating)
                  ? colors.star
                  : colors.starInactive
              }
            />
          ))}
        </View>
        <Text style={styles.ratingText}>{product.rating}</Text>
        <Text style={styles.reviewCount}>({product.reviewCount} reviews)</Text>
      </View>
    </Animated.View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  infoSection: {
    padding: 16,
    backgroundColor: colors.background,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    color: colors.secondary,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  discountTag: {
    backgroundColor: colors.error,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  discountTagText: {
    color: colors.textOnSecondary,
    fontSize: 11,
    fontWeight: '700',
  },
  productName: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
    lineHeight: 28,
    marginBottom: 12,
  },
  priceSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 4,
  },
  price: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.textPrice,
  },
  originalPrice: {
    fontSize: 16,
    color: colors.textMuted,
    textDecorationLine: 'line-through',
  },
  saveText: {
    fontSize: 13,
    color: colors.success,
    fontWeight: '600',
    marginBottom: 12,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  reviewCount: {
    fontSize: 13,
    color: colors.textMuted,
  },
});
