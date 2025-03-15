// stores/cartStore.ts
import {create} from 'zustand';

interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  unit: string;
  stock: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, increment: boolean) => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],

  // Ajouter un produit au panier
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.product.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return { items: [...state.items, { product, quantity: 1 }] };
      }
    }),

  // Supprimer un produit du panier
  removeFromCart: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    })),

  // Mettre à jour la quantité d'un produit
  updateQuantity: (productId, increment) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + (increment ? 1 : -1)),
            }
          : item
      ),
    })),
}));

export default useCartStore;