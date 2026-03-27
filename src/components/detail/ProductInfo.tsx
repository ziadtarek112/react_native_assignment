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
        <View style={styles.saveRow}>
          <Icon name="pricetag-outline" size={14} color={colors.success} />
          <Text style={styles.saveText}>
            You save AED {product.originalPrice - product.price}
          </Text>
        </View>
      )}

      <View style={styles.ratingSection}>
        <View style={styles.starsContainer}>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map(star => (
              <Icon
                key={star}
                name={star <= Math.round(product.rating) ? 'star' : 'star-outline'}
                size={15}
                color={
                  star <= Math.round(product.rating)
                    ? colors.star
                    : colors.starInactive
                }
              />
            ))}
          </View>
          <Text style={styles.ratingText}>{product.rating}</Text>
        </View>
        <Text style={styles.reviewCount}>{product.reviewCount} reviews</Text>
      </View>
    </Animated.View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  infoSection: {
    padding: 20,
    backgroundColor: colors.background,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    color: colors.accent,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  discountTag: {
    backgroundColor: colors.error,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  discountTagText: {
    color: colors.textOnSecondary,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  productName: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textPrimary,
    lineHeight: 30,
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  priceSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 10,
    marginBottom: 6,
  },
  price: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrice,
    letterSpacing: -0.5,
  },
  originalPrice: {
    fontSize: 16,
    color: colors.textMuted,
    textDecorationLine: 'line-through',
  },
  saveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#EDFBF0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 16,
    marginTop: 4,
  },
  saveText: {
    fontSize: 13,
    color: colors.success,
    fontWeight: '700',
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.subtleBg,
    borderRadius: 12,
    padding: 12,
    marginTop: 4,
  },
  starsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stars: {
    flexDirection: 'row',
    gap: 2,
  },
  ratingText: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  reviewCount: {
    fontSize: 13,
    color: colors.textMuted,
    fontWeight: '500',
  },
});
