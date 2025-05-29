import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

// Componente para registrar o actualizar modelos
// Props:
// - onSubmit: función para manejar el envío del formulario (crear o actualizar modelo)
// - selectedModel: modelo seleccionado para edición (opcional)
// - onCancel: función para cancelar la edición
const RegisterModels = ({ onSubmit, selectedModel, onCancel }) => {
  // Estado local para almacenar el nombre del modelo
  const [modelName, setModelName] = useState('');

  // useEffect para actualizar el campo cuando cambia el modelo seleccionado
  /*useEffect(() => {
    if (selectedModel) {
      setModelName(selectedModel.Model); // Carga el nombre del modelo para editar
    } else {
      setModelName(''); // Limpia el campo al no tener modelo seleccionado
    }
  }, [selectedModel]);*/

  // Función que maneja el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: el nombre no debe estar vacío ni solo espacios
    if (!modelName.trim()) {
      toast.error('El nombre del modelo es obligatorio');
      return;
    }

    // Preparar objeto con datos para enviar:
    // Si hay modelo seleccionado, actualizarlo; si no, crear nuevo
    const data = selectedModel
      ? { ...selectedModel, Model: modelName }
      : { Model: modelName };

    // Ejecutar la función pasada por props para manejar el submit
    onSubmit(data);

    // Limpiar el campo tras enviar
    setModelName('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-register">
      {/* Campo input para nombre del modelo */}
      <input
        type="text"
        placeholder="Nombre del modelo"
        value={modelName}
        onChange={(e) => setModelName(e.target.value)}
        className="input-field"
      />
      <div className="form-actions">
        {/* Botón para agregar o actualizar, dependiendo si hay modelo seleccionado */}
        <button type="submit" className="btn-add">
          {selectedModel ? 'Actualizar' : 'Agregar Modelo'}
        </button>

        {/* Botón para cancelar la edición (solo si hay modelo seleccionado) */}
        {selectedModel && (
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default RegisterModels;
