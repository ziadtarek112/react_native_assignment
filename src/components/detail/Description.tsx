import { StyleSheet, Text } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Product } from '../../types/Product';
import { colors } from '../../utils/colors';

type DescriptionProps = {
  product: Product;
};

const Description = ({ product }: DescriptionProps) => {
  return (
    <Animated.View
      entering={FadeInUp.delay(300).duration(400)}
      style={styles.descriptionSection}
    >
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{product.description}</Text>
    </Animated.View>
  );
};

export default Description;

const styles = StyleSheet.create({
  descriptionSection: {
    padding: 16,
    backgroundColor: colors.background,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 22,
  },
});
