import {create} from 'zustand';
import {Product} from '../types/Product';

type CartItem = {
  product: Product;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  getCartCount: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addToCart: product =>
    set(state => {
      const existing = state.items.find(i => i.product.id === product.id);
      if (existing) {
        return {
          items: state.items.map(i =>
            i.product.id === product.id
              ? {...i, quantity: i.quantity + 1}
              : i,
          ),
        };
      }
      return {items: [...state.items, {product, quantity: 1}]};
    }),
  removeFromCart: productId =>
    set(state => ({
      items: state.items.filter(i => i.product.id !== productId),
    })),
  getCartCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}));
