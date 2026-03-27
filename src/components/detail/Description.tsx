import {StyleSheet, Text} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {Product} from '../../types/Product';
import {colors} from '../../utils/colors';

type DescriptionProps = {
  product: Product;
};

const Description = ({product}: DescriptionProps) => {
  return (
    <Animated.View
      entering={FadeInUp.delay(300).duration(400)}
      style={styles.descriptionSection}>
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{product.description}</Text>
    </Animated.View>
  );
};

export default Description;

const styles = StyleSheet.create({
  descriptionSection: {
    marginHorizontal: 16,
    marginTop: 12,
    padding: 20,
    backgroundColor: colors.background,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.textPrimary,
    marginBottom: 10,
    letterSpacing: -0.2,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 23,
    letterSpacing: 0.1,
  },
});
