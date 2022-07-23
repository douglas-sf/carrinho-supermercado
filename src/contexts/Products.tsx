import { createContext, ReactNode, useState } from 'react';

import { Product } from '../models/Product';

interface ProductsContextData {
  products: Product[];
  total: number;
  addProduct: (name: string, price: number) => void;
  removeProduct: (product: Product) => void;
  changeAmount: (target: Product, value: number) => void;
}

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextData);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const total = products.reduce((a, b) => a + b.total, 0);

  function addProduct(name: string, price: number) {
    const product = new Product(name, price);
    setProducts([...products, product]);
  }

  function removeProduct(product: Product) {
    setProducts(products.filter(({ id }) => id !== product.id));
  }

  function changeAmount(target: Product, value: number) {
    setProducts(
      products.map((product) => {
        if (product.id !== target.id) return product;

        product.changeAmount(value);
        return product;
      })
    );
  }

  return (
    <ProductsContext.Provider value={{ products, total, addProduct, removeProduct, changeAmount }}>
      {children}
    </ProductsContext.Provider>
  );
}
