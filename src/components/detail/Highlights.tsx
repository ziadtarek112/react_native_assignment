import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { colors } from '../../utils/colors';

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
  highlightsSection: {
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
  highlightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 6,
  },
  highlightIcon: {
    fontSize: 14,
    color: colors.success,
    fontWeight: '700',
  },
  highlightText: {
    fontSize: 14,
    color: colors.textPrimary,
  },
});
