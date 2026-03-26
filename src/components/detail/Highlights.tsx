import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const Highlights = () => {
  return (
    <Animated.View
      entering={FadeInUp.delay(400).duration(400)}
      style={styles.highlightsSection}
    >
      <Text style={styles.sectionTitle}>Highlights</Text>
      <View style={styles.highlightRow}>
        <Text style={styles.highlightIcon}>✓</Text>
        <Text style={styles.highlightText}>Free delivery</Text>
      </View>
      <View style={styles.highlightRow}>
        <Text style={styles.highlightIcon}>✓</Text>
        <Text style={styles.highlightText}>Genuine product</Text>
      </View>
      <View style={styles.highlightRow}>
        <Text style={styles.highlightIcon}>✓</Text>
        <Text style={styles.highlightText}>Easy returns</Text>
      </View>
      <View style={styles.highlightRow}>
        <Text style={styles.highlightIcon}>✓</Text>
        <Text style={styles.highlightText}>Warranty included</Text>
      </View>
    </Animated.View>
  );
};

export default Highlights;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#1a1a1a',
  },
  headerTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center',
    marginHorizontal: 12,
  },
  headerRight: {
    width: 36,
  },
  infoSection: {
    padding: 16,
    backgroundColor: '#fff',
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  category: {
    fontSize: 12,
    color: '#3866df',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  discountTag: {
    backgroundColor: '#f44336',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  discountTagText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
  productName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
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
    color: '#1a1a1a',
  },
  originalPrice: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  saveText: {
    fontSize: 13,
    color: '#4caf50',
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
  star: {
    fontSize: 16,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  reviewCount: {
    fontSize: 13,
    color: '#999',
  },
  deliverySection: {
    padding: 16,
    marginTop: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  expressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  noonExpressBadge: {
    backgroundColor: '#3866df',
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  noonExpressText: {
    color: '#feee00',
    fontSize: 12,
    fontWeight: '800',
  },
  expressLabel: {
    fontSize: 14,
    color: '#3866df',
    fontWeight: '700',
  },
  deliveryText: {
    fontSize: 14,
    color: '#333',
  },
  deliveryBold: {
    fontWeight: '700',
    color: '#4caf50',
  },
  deliverySubtext: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  descriptionSection: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
  highlightsSection: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 8,
  },
  highlightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 6,
  },
  highlightIcon: {
    fontSize: 14,
    color: '#4caf50',
    fontWeight: '700',
  },
  highlightText: {
    fontSize: 14,
    color: '#333',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  bottomPrice: {
    flex: 1,
  },
  bottomPriceLabel: {
    fontSize: 12,
    color: '#999',
  },
  bottomPriceValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1a1a1a',
  },
  addToCartWrapper: {
    flex: 1,
  },
  addToCartButton: {
    backgroundColor: '#3866df',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  checkMark: {
    position: 'absolute',
    right: 16,
  },
  checkMarkText: {
    color: '#feee00',
    fontSize: 18,
    fontWeight: '700',
  },
});
