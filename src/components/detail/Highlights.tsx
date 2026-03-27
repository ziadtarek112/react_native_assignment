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
      <View style={styles.grid}>
        {HIGHLIGHTS.map((item, index) => (
          <View key={index} style={styles.highlightItem}>
            <View style={styles.iconContainer}>
              <Icon name={item.icon} size={20} color={colors.success} />
            </View>
            <Text style={styles.highlightText}>{item.text}</Text>
          </View>
        ))}
      </View>
    </Animated.View>
  );
};

export default Highlights;

const styles = StyleSheet.create({
  highlightsSection: {
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
    marginBottom: 14,
    letterSpacing: -0.2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '47%',
    backgroundColor: colors.subtleBg,
    borderRadius: 12,
    padding: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#EDFBF0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightText: {
    fontSize: 13,
    color: colors.textPrimary,
    fontWeight: '600',
    flex: 1,
  },
});
