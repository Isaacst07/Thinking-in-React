interface ProductCategoryRowProps {
  category: string;
}

function ProductCategoryRow({ category }: ProductCategoryRowProps) {
  return (
    <tr className="bg-slate-100">
      <th colSpan={2} className="px-4 py-2 text-left font-semibold text-slate-700">
        {category}
      </th>
    </tr>
  );
}

export default ProductCategoryRow;
