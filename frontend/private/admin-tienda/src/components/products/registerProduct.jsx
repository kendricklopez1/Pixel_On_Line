import React from "react";

const RegisterProduct = ({
  nombre,
  marca,
  precio,
  stock,
  setNombre,
  setMarca,
  setPrecio,
  setStock,
  saveProduct,
  handleEdit,
  id,
}) => {
  return (
    <form onSubmit={id ? handleEdit : saveProduct} className="product-form">
      <h2 className="form-title">{id ? "Editar Producto" : "Nuevo Producto"}</h2>
      <div className="form-grid">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
          min="0"
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
          min="0"
        />
      </div>
      <div className="mt-4 text-center">
        <button type="submit" className="btn-submit">
          {id ? "Actualizar" : "Registrar"}
        </button>
      </div>
    </form>
  );
};

export default RegisterProduct;
