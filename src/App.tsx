import FilterableProductTable from './components/FilterableProductTable';
import { PRODUCTS } from './data';

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-50 px-4 py-12">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">Catálogo de Produtos</h1>
      <FilterableProductTable products={PRODUCTS} />
      <p className="mt-8 max-w-xl text-center text-xs text-slate-400">
        Exemplo "Thinking in React" (react.dev) implementado com Vite + React + TypeScript + Tailwind CSS.
      </p>
    </div>
  );
}

export default App;
