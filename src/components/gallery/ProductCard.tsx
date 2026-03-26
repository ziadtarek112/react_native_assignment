import { Image, StyleSheet, Text, View } from 'react-native';
import { Product } from '../../types/Product';

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;
  const hasDiscount = discount > 0;
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.images[0] }} style={styles.image} />
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
          <Text style={styles.star}>★</Text>
          <Text style={styles.rating}>{product.rating}</Text>
          <Text style={styles.reviewCount}>({product.reviewCount})</Text>
        </View>
        <View style={styles.expressTag}>
          <Text style={styles.expressText}>noon</Text>
          <Text style={styles.expressLabel}> Express</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 4,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    aspectRatio: 1,
    backgroundColor: '#f8f8f8',
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
    backgroundColor: '#f44336',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  discountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  info: {
    padding: 8,
  },
  category: {
    fontSize: 10,
    color: '#8e8e93',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  name: {
    fontSize: 13,
    fontWeight: '500',
    color: '#1a1a1a',
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
    color: '#1a1a1a',
  },
  originalPrice: {
    fontSize: 12,
    color: '#8e8e93',
    textDecorationLine: 'line-through',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginBottom: 6,
  },
  star: {
    color: '#f5a623',
    fontSize: 12,
  },
  rating: {
    fontSize: 11,
    color: '#1a1a1a',
    fontWeight: '600',
  },
  reviewCount: {
    fontSize: 11,
    color: '#8e8e93',
  },
  expressTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expressText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#feee00',
    backgroundColor: '#3866df',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 2,
    overflow: 'hidden',
  },
  expressLabel: {
    fontSize: 11,
    color: '#3866df',
    fontWeight: '600',
  },
});
