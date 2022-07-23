import { useProducts } from '../hooks/useProducts';

import { TableLine } from './TableLine';

const tableHeaderTitles = ['Item', 'Produto', 'Preço', 'Quantia', 'Subtotal', 'Opções'];

export function ProductsTable() {
  const { products, total } = useProducts();

  return (
    <table className="w-full">
      <thead>
        <tr className="bg-blue-600 text-white">
          {tableHeaderTitles.map((title) => (
            <th className="p-2">{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <TableLine product={product} index={index} key={product.id} />
        ))}
      </tbody>
      <tfoot>
        <tr className="bg-blue-600 text-white">
          <th colSpan={3}></th>
          <th className="p-2 text-right">Total:</th>
          <th>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
}
