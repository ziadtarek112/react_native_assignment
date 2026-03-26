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
            placeholder="Search"
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundGrey,
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 8,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  spacer: {
    width: 40,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoNoon: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.secondary,
    letterSpacing: -1,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: colors.textPrimary,
  },
});
