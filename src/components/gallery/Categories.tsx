import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/colors';

type CategoriesProps = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};
const Categories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  const renderCategoryItem = ({ item }: { item: string }) => {
    return (
      <Pressable
        style={[
          styles.categoryItem,
          selectedCategory === item && styles.categoryItemActive,
        ]}
        onPress={() => setSelectedCategory(item)}
      >
        <Text
          style={[
            styles.categoryItemText,
            selectedCategory === item && styles.categoryItemTextActive,
          ]}
        >
          {item}
        </Text>
      </Pressable>
    );
  };

  const keyExtractor = (item: string) => item;
  return (
    <View>
      <FlatList
        data={categories}
        horizontal
        contentContainerStyle={styles.categoriesContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategoryItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    gap: 8,
  },
  categoryItem: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.backgroundGrey,
  },
  categoryItemActive: {
    backgroundColor: colors.primary,
  },

  categoryItemText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  categoryItemTextActive: {
    color: colors.textOnPrimary,
  },
});
