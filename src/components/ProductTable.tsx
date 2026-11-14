import type { ReactNode } from 'react';
import type { Product } from '../types';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

interface ProductTableProps {
  products: Product[];
  filterText: string;
  inStockOnly: boolean;
}

function ProductTable({ products, filterText, inStockOnly }: ProductTableProps) {
  const rows: ReactNode[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (!product.name.toLowerCase().includes(filterText.toLowerCase())) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="border-b-2 border-slate-300 text-left">
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2 text-right">Price</th>
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          rows
        ) : (
          <tr>
            <td colSpan={2} className="px-4 py-6 text-center text-slate-400">
              Nenhum produto encontrado.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;
