import { FlatList, View } from 'react-native';
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
    <View>
      <FlatList
        data={products}
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
    </View>
  );
};

export default Products;
