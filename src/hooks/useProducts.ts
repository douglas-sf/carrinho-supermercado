import { useContext } from 'react';

import { ProductsContext } from '../contexts/Products';

export function useProducts() {
  return useContext(ProductsContext);
}
