import React from "react";

// Componente para registrar o editar un producto
// Props:
// - nombre, marca, precio, stock: valores actuales del formulario
// - setNombre, setMarca, setPrecio, setStock: funciones para actualizar los valores en el estado padre
// - saveProduct: función para guardar un nuevo producto
// - handleEdit: función para actualizar un producto existente
// - id: si existe, indica que se está editando un producto (el id del producto)
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
    // Formulario que ejecuta handleEdit si hay id (editar), o saveProduct si no (nuevo)
    <form onSubmit={id ? handleEdit : saveProduct} className="product-form">
      {/* Título dinámico que cambia según acción */}
      <h2 className="form-title">{id ? "Editar Producto" : "Nuevo Producto"}</h2>

      {/* Grid para organizar inputs */}
      <div className="form-grid">
        {/* Input para nombre */}
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        {/* Input para marca */}
        <input
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
        />

        {/* Input para precio con step para decimales y valor mínimo 0 */}
        <input
          type="number"
          step="0.01"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
          min="0"
        />

        {/* Input para stock con valor mínimo 0 */}
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
          min="0"
        />
      </div>

      {/* Botón de envío con texto dinámico */}
      <div className="mt-4 text-center">
        <button type="submit" className="btn-submit">
          {id ? "Actualizar" : "Registrar"}
        </button>
      </div>
    </form>
  );
};

export default RegisterProduct;
