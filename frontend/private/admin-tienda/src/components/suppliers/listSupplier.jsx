import React from "react";

const ListSupplier = ({ suppliers, loading, deleteSupplier, updateSupplier }) => {
  // Muestra un mensaje mientras se cargan los datos
  if (loading) return <p>Cargando proveedores...</p>;

  return (
    <section className="suppliers-list">
      <h2 className="list-title">Listado de Proveedores</h2>
      <ul className="list-items">
        {suppliers.map((prov) => (
          <li key={prov._id} className="list-item">
            <p className="provider-name">{prov.Name}</p>
            <p>📧 {prov.EmailSuppliers}</p>
            <p>📞 {prov.Phone}</p>
            <p>📍 {prov.Country}</p>
            <div className="action-buttons">
              {/* Botón para editar proveedor */}
              <button onClick={() => updateSupplier(prov)} className="btn-edit">
                Editar
              </button>
              {/* Botón para eliminar proveedor */}
              <button onClick={() => deleteSupplier(prov._id)} className="btn-delete">
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListSupplier;
