import React from "react";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="product-card">
      <img src={product.Image} alt={product.Name} className="product-image" />
      <h3>{product.Name}</h3>
      <p><strong>Precio:</strong> ${product.Price}</p>
      <p><strong>Descuento:</strong> {product.Discount}%</p>
      <p><strong>Marca:</strong> {product.Mark_id?.name || "Sin marca"}</p>
      <p><strong>Modelo:</strong> {product.Model_id?.name || "Sin modelo"}</p>
      <p><strong>Proveedor:</strong> {product.Suppliers_id?.name || "Sin proveedor"}</p>
      <div className="product-actions">
        <button className="edit-btn" onClick={() => onEdit(product)}>Editar</button>
        <button className="delete-btn" onClick={() => onDelete(product._id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ProductCard;
