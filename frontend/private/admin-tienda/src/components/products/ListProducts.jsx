import React from "react";
import ProductCard from "./ProductCard";

const ListProducts = ({ products, deleteProduct, onEdit }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onEdit={onEdit}
          onDelete={deleteProduct}
        />
      ))}
    </div>
  );
};

export default ListProducts;