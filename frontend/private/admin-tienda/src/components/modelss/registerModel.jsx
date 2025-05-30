import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import "../../pages/Styles.css/Models.css";

const RegisterModel = ({ selectedModel, onSubmit, onCancel }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (selectedModel) {
      setName(selectedModel.name || "");
    } else {
      setName("");
    }
  }, [selectedModel]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("El nombre del modelo es obligatorio");
      return;
    }

    const modelData = selectedModel
      ? { ...selectedModel, name }
      : { name };

    await onSubmit(modelData);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-register">
      <input
        type="text"
        placeholder="Nombre del modelo"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="btn-add">
        {selectedModel ? "Actualizar Modelo" : "Agregar Modelo"}
      </button>
      {selectedModel && (
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default RegisterModel;
