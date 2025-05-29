import React from "react";

const ModelCard = ({ model, onDelete, onEdit }) => {
  return (
    <div className="product-table-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", backgroundColor: "#fff", borderRadius: "0.5rem", marginBottom: "1rem", boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,0.1)" }}>
      <div>
        <h3 style={{ fontWeight: "600", fontSize: "1.125rem", marginBottom: "0.25rem" }}>{model.name}</h3>
        <p style={{ color: "#4b5563", fontSize: "0.875rem" }}>ID: {model._id}</p>
      </div>
      <div className="actions-cell">
        <button
          onClick={() => onEdit(model)}
          className="edit-button"
          type="button"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(model._id)}
          className="delete-button"
          type="button"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
