import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/colors';

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
  const renderCategoryItem = ({item}: {item: string}) => {
    const isActive = selectedCategory === item;
    return (
      <Pressable
        style={[styles.categoryItem, isActive && styles.categoryItemActive]}
        onPress={() => setSelectedCategory(item)}>
        <Text
          style={[
            styles.categoryItemText,
            isActive && styles.categoryItemTextActive,
          ]}>
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
    paddingVertical: 14,
    gap: 8,
  },
  categoryItem: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: colors.background,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  categoryItemActive: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  categoryItemText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    letterSpacing: 0.2,
  },
  categoryItemTextActive: {
    color: colors.textOnSecondary,
  },
});
