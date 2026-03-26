import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { colors } from '../../utils/colors';

const Delivery = () => {
  return (
    <Animated.View
      entering={FadeInUp.delay(200).duration(400)}
      style={styles.deliverySection}
    >
      <View style={styles.expressRow}>
        <View style={styles.noonExpressBadge}>
          <Text style={styles.noonExpressText}>noon</Text>
        </View>
        <Text style={styles.expressLabel}>Express</Text>
      </View>
      <Text style={styles.deliveryText}>
        Get it by <Text style={styles.deliveryBold}>Tomorrow</Text>
      </Text>
      <Text style={styles.deliverySubtext}>Order within 4 hrs 23 mins</Text>
    </Animated.View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  deliverySection: {
    padding: 16,
    marginTop: 8,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.divider,
  },
  expressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  noonExpressBadge: {
    backgroundColor: colors.secondary,
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  noonExpressText: {
    color: colors.noonYellow,
    fontSize: 12,
    fontWeight: '800',
  },
  expressLabel: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: '700',
  },
  deliveryText: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  deliveryBold: {
    fontWeight: '700',
    color: colors.success,
  },
  deliverySubtext: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
});
