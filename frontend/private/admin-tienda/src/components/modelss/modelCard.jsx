import React from "react";

// Componente funcional que representa una tarjeta para un modelo específico
// Recibe props:
// - model: objeto con la información del modelo (nombre, id, etc.)
// - onDelete: función para eliminar el modelo
// - onEdit: función para editar el modelo
const ModelCard = ({ model, onDelete, onEdit }) => {
  return (
    <div
      // Contenedor con estilos en línea para diseño y espaciado
      className="product-table-row"
      style={{
        display: "flex",
        justifyContent: "space-between", // Separar contenido y botones
        alignItems: "center",
        padding: "1.25rem 1.5rem",
        backgroundColor: "#fff",
        borderRadius: "0.5rem",
        marginBottom: "1rem",
        boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,0.1)" // Sombra sutil
      }}
    >
      <div>
        {/* Nombre del modelo con estilo */}
        <h3 style={{ fontWeight: "600", fontSize: "1.125rem", marginBottom: "0.25rem" }}>
          {model.name}
        </h3>
        {/* Mostrar ID del modelo con estilo menos destacado */}
        <p style={{ color: "#4b5563", fontSize: "0.875rem" }}>
          ID: {model._id}
        </p>
      </div>

      {/* Contenedor para los botones de acción */}
      <div className="actions-cell">
        {/* Botón para activar edición, llama a onEdit con el modelo actual */}
        <button
          onClick={() => onEdit(model)}
          className="edit-button"
          type="button"
        >
          Editar
        </button>

        {/* Botón para eliminar, llama a onDelete con el id del modelo */}
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
