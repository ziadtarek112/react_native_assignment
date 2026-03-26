import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../utils/colors';

type HeaderProps = {
  searchQuery: string;
  setSearchQuery: (text: string) => void;
};
const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoNoon}>noon</Text>
        </View>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholderTextColor={colors.textMuted}
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search"
        />
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGrey,
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 8,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 8,
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
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: colors.textPrimary,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
});
