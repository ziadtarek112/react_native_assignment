import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';

const empty = () => {
  return (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>No products found</Text>
    </View>
  );
};

export default empty;

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});
