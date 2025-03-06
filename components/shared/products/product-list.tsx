import React from "react";
import ProductCard from "./product-card";
import { Products } from "@/types";

type Props = {
  data: Products[];
  title?: string;
  limit?: number;
};

const ProductList: React.FC<Props> = ({ data, title, limit }) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-sm">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
