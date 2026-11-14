import type { Product } from '../types';

interface ProductRowProps {
  product: Product;
}

function ProductRow({ product }: ProductRowProps) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span className="text-red-500">{product.name}</span>
  );

  return (
    <tr className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50">
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2 text-right">{product.price}</td>
    </tr>
  );
}

export default ProductRow;
