import React from "react";

// Componente para mostrar una lista de productos en una tabla
// Props:
// - products: arreglo de objetos producto a mostrar
// - loading: booleano que indica si los datos están cargando
// - deleteProduct: función para eliminar un producto por su id
// - updateProduct: función para iniciar la edición de un producto
const ListProduct = ({ products, loading, deleteProduct, updateProduct }) => {
  // Mostrar mensaje de carga mientras loading es true
  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="product-list">
      <h2 className="list-title">Listado de Productos</h2>

      {/* Tabla que contiene la lista de productos */}
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
          {products?.map((prod) => (
            <tr key={prod?._id}>
              {/* Mostrar últimos 5 caracteres del _id como referencia */}
              <td>{prod?._id.slice(-5)}</td>

              {/* Mostrar datos del prod?ucto */}
              <td>{prod?.nombre}</td>
              <td>{prod?.marca}</td>
              {/* Precio formateado a 2 decimales */}
              <td>${prod?.precio?.toFixed(2)}</td>
              <td>{prod?.stock}</td>

              {/* Botones para editar y eliminar */}
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
