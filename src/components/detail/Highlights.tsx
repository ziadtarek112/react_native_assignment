import {StyleSheet, Text, View} from 'react-native';
import Animated, {FadeInUp} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../utils/colors';

const HIGHLIGHTS = [
  {icon: 'car-outline', text: 'Free delivery'},
  {icon: 'shield-checkmark-outline', text: 'Genuine product'},
  {icon: 'refresh-outline', text: 'Easy returns'},
  {icon: 'ribbon-outline', text: 'Warranty included'},
];

const Highlights = () => {
  return (
    <Animated.View
      entering={FadeInUp.delay(400).duration(400)}
      style={styles.highlightsSection}>
      <Text style={styles.sectionTitle}>Highlights</Text>
      {HIGHLIGHTS.map((item, index) => (
        <View key={index} style={styles.highlightRow}>
          <Icon name={item.icon} size={18} color={colors.success} />
          <Text style={styles.highlightText}>{item.text}</Text>
        </View>
      ))}
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
  highlightText: {
    fontSize: 14,
    color: colors.textPrimary,
  },
});
