import { PageHeader } from './components/PageHeader';
import { ProductForm } from './components/ProductForm';
import { ProductsTable } from './components/ProductsTable';
import { ProductsProvider } from './contexts/Products';

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader />

      <div className="flex flex-1">
        <ProductsProvider>
          <aside className="w-[350px] border-r border-blue-500 p-2 flex flex-col gap-5">
            <h2 className="text-xl text-center text-red-500 font-bold">Adicionar Produto</h2>

            <ProductForm />
          </aside>

          <main className="flex flex-col items-center gap-4 flex-1 p-4">
            <h2 className="text-2xl text-green-600 font-bold">Lista de Produtos</h2>

            <ProductsTable />
          </main>
        </ProductsProvider>
      </div>
    </div>
  );
}
