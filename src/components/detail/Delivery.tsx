import {StyleSheet, Text, View} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';
import {colors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const Delivery = () => {
  return (
    <Animated.View
      entering={FadeInUp.delay(200).duration(400)}
      style={styles.deliverySection}>
      <View style={styles.topRow}>
        <View style={styles.iconContainer}>
          <Icon name="flash" size={18} color={colors.noonYellow} />
        </View>
        <View style={styles.expressRow}>
          <View style={styles.noonExpressBadge}>
            <Text style={styles.noonExpressText}>noon</Text>
          </View>
          <Text style={styles.expressLabel}>Express</Text>
        </View>
      </View>
      <View style={styles.deliveryInfo}>
        <Text style={styles.deliveryText}>
          Get it by <Text style={styles.deliveryBold}>Tomorrow</Text>
        </Text>
        <Text style={styles.deliverySubtext}>Order within 4 hrs 23 mins</Text>
      </View>
    </Animated.View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  deliverySection: {
    marginHorizontal: 16,
    marginTop: 12,
    padding: 16,
    backgroundColor: colors.background,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  noonExpressBadge: {
    backgroundColor: colors.secondary,
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 3,
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
  deliveryInfo: {
    paddingLeft: 44,
  },
  deliveryText: {
    fontSize: 15,
    color: colors.textPrimary,
    fontWeight: '500',
  },
  deliveryBold: {
    fontWeight: '800',
    color: colors.success,
  },
  deliverySubtext: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 3,
  },
});
