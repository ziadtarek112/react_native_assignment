import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../utils/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CartBadge from '../common/CartBadge';

type HeaderProps = {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
};
const Header = ({searchQuery, setSearchQuery}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <View style={styles.spacer} />
          <View style={styles.logoContainer}>
            <Text style={styles.logoNoon}>noon</Text>
          </View>
          <CartBadge />
        </View>
        <View style={styles.searchBar}>
          <Icon name="search-outline" size={18} color={colors.textMuted} />
          <TextInput
            style={styles.searchInput}
            placeholderTextColor={colors.textMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="What are you looking for?"
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  spacer: {
    width: 40,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoNoon: {
    fontSize: 30,
    fontWeight: '900',
    color: colors.secondary,
    letterSpacing: -1.5,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 44,
    gap: 10,
    shadowColor: colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: colors.textPrimary,
    letterSpacing: 0.1,
  },
});
