import { Text, View } from 'react-native';
import { Product } from '../../types/Product';

type ProductCardProps = {
  product: Product;
};
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
};

export default ProductCard;
