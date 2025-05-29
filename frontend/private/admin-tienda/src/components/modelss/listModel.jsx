import React, { useEffect, useState } from "react";
import ListModels from "./listModel";

const ModelsContainer = () => {
  const [models, setModels] = useState([]);

  // Carga inicial de modelos desde API
  const fetchModels = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/models");
      const data = await res.json();
      setModels(data);
    } catch (error) {
      console.error("Error cargando modelos:", error);
    }
  };

  useEffect(() => {
    fetchModels();
  }, []);

  // Función para editar modelo (placeholder)
  const handleEdit = (model) => {
    console.log("Editar modelo:", model);
    // Aquí podrías abrir un modal con formulario para editar
  };

  // Función para eliminar modelo
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/models/${id}`, {
        method: "DELETE",
      });
      // Refrescar lista después de eliminar
      setModels((prev) => prev.filter((m) => m._id !== id));
    } catch (error) {
      console.error("Error eliminando modelo:", error);
    }
  };

  return (
    <ListModels models={models} onEdit={handleEdit} onDelete={handleDelete} />
  );
};

export default ModelsContainer;
