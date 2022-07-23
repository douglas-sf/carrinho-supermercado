import { CornersIn, Minus, Plus, Trash } from 'phosphor-react';
import { ChangeEvent, useEffect, useState } from 'react';
import { useProducts } from '../hooks/useProducts';

import { Product } from '../models/Product';

interface TableLineProps {
  product: Product;
  index: number;
}

export function TableLine({ product, index }: TableLineProps) {
  const { removeProduct, changeAmount } = useProducts();

  const [amount, setAmount] = useState(product.amount);

  function removeProductHandle() {
    const confirmation = confirm(`Deseja realmente excluir o produto: ${product.name}?`);
    if (confirmation) removeProduct(product);
  }

  function incrementAmount() {
    setAmount(amount + 1);
  }

  function decrementProduct() {
    if (amount > 1) setAmount(amount - 1);
    else removeProductHandle();
  }

  useEffect(() => {
    changeAmount(product, amount);
  }, [amount]);

  return (
    <tr className="odd:bg-blue-100 even:bg-blue-300 text-center" key={index}>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>{product.getFormattedPrice()}</td>
      <td>
        <div className="h-12 flex justify-center items-center">
          <button className="h-8 px-2 rounded-l bg-zinc-400 text-white" onClick={incrementAmount}>
            <Plus weight="bold" size={14} />
          </button>

          <input className="h-8 border border-zinc-400 text-center w-16" type="text" value={amount} readOnly />

          <button className="h-8 px-2 rounded-r bg-zinc-400 text-white" onClick={decrementProduct}>
            <Minus weight="bold" size={14} />
          </button>
        </div>
      </td>
      <td>{product.getFormattedTotal()}</td>
      <td>
        <div className="h-12 flex justify-center items-center">
          <button className="text-red-600" onClick={removeProductHandle}>
            <Trash weight="fill" size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
}
