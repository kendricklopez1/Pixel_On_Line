import React from "react";

const ProductCard = ({ product, onEdit, onDelete }) => {
  // ✅ Función para manejar imagen con fallback
  const getImageSrc = (imageUrl) => {
    if (!imageUrl || imageUrl === 'impresora' || imageUrl.length < 10) {
      // Usar imagen por defecto si no hay URL válida
      return 'https://via.placeholder.com/200x150/333/fff?text=Sin+Imagen';
    }
    return imageUrl;
  };

  const handleImageError = (e) => {
    // Si la imagen falla al cargar, usar imagen por defecto
    e.target.src = 'https://via.placeholder.com/200x150/333/fff?text=Error+Imagen';
  };

  return (
    <div className="product-card">
      <img 
        src={getImageSrc(product.Image)} 
        alt={product.Name} 
        className="product-image"
        onError={handleImageError}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
      />
      <h3>{product.Name}</h3>
      <p><strong>Precio:</strong> ${product.Price}</p>
      <p><strong>Stock:</strong> {product.Stock}</p>
      
      {/* ✅ CORREGIDO: Usar los nombres de campos correctos */}
      <p><strong>Marca:</strong> {product.Mark_id?.Mark || "Sin marca"}</p>
      <p><strong>Modelo:</strong> {product.Model_id?.name || "Sin modelo"}</p>
      <p><strong>Proveedor:</strong> {product.Suppliers_id?.Name || "Sin proveedor"}</p>
      
      <div className="product-actions">
        <button className="edit-btn" onClick={() => onEdit(product)}>Editar</button>
        <button className="delete-btn" onClick={() => onDelete(product._id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ProductCard;