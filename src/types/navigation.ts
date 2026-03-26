import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {Product} from '../data/Products';

export type RootStackParamList = {
  Gallery: undefined;
  ProductDetail: {product: Product};
};

export type GalleryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Gallery'
>;

export type ProductDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetail'
>;
