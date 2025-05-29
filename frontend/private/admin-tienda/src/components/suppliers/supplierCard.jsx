import React from "react";

const SupplierCard = ({ supplier, onEdit, onDelete }) => {
  return (
    <div className="supplier-card">
      <h3>{supplier.nombre}</h3>
      <p><strong>Correo:</strong> {supplier.correo}</p>
      <p><strong>Teléfono:</strong> {supplier.telefono}</p>
      <p><strong>Dirección:</strong> {supplier.direccion}</p>
      <div className="card-actions">
        <button onClick={() => onEdit(supplier)} className="btn-edit">Editar</button>
        <button onClick={() => onDelete(supplier._id)} className="btn-delete">Eliminar</button>
      </div>
    </div>
  );
};

export default SupplierCard;
