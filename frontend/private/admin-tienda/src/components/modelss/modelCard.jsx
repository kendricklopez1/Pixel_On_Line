import React from "react";

const ModelCard = ({ model, onDelete, onEdit }) => {
  return (
    <div className="model-card">
      <div>
        <h3 className="model-name">{model.name}</h3>
      </div>
      <div className="actions-cell">
        <button onClick={() => onEdit(model)} className="edit-button" type="button">
          Editar
        </button>
        <button onClick={() => onDelete(model._id)} className="delete-button" type="button">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
