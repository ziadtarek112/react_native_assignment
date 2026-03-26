import { FlatList, StyleSheet } from 'react-native';
import { Product } from '../../types/Product';
import ProductCard from './ProductCard';
import Categories from './Categories';

type ProductsProps = {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const Products = ({
  products,
  categories,
  selectedCategory,
  setSelectedCategory,
}: ProductsProps) => {
  const renderProductItem = ({ item }: { item: Product }) => {
    return <ProductCard product={item} />;
  };
  const keyExtractor = (item: Product) => item.id;
  return (
    <>
      <FlatList
        contentContainerStyle={styles.grid}
        numColumns={2}
        data={products}
        removeClippedSubviews={true}
        maxToRenderPerBatch={8}
        windowSize={5}
        initialNumToRender={6}
        ListHeaderComponent={
          <Categories
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        }
        renderItem={renderProductItem}
        keyExtractor={keyExtractor}
      />
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
});
