import React from "react";
import ModelCard from "./modelCard";

const ListModel = ({ models, onEdit, onDelete }) => {
  return (
    <div className="list-model">
      {models.length === 0 ? (
        <p>No hay modelos disponibles.</p>
      ) : (
        models.map((model) => (
          <ModelCard 
            key={model._id} 
            model={model} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))
      )}
    </div>
  );
};

export default ListModel;
