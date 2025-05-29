import React from "react";

const ListProduct = ({ products, loading, deleteProduct, updateProduct }) => {
  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="product-list">
      <h2 className="list-title">Listado de Productos</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod._id}>
              <td>{prod._id.slice(-5)}</td>
              <td>{prod.nombre}</td>
              <td>{prod.marca}</td>
              <td>${prod.precio.toFixed(2)}</td>
              <td>{prod.stock}</td>
              <td>
                <button onClick={() => updateProduct(prod)} className="btn-edit">
                  Editar
                </button>
                <button onClick={() => deleteProduct(prod._id)} className="btn-delete">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
