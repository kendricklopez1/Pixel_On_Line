import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const RegisterModels = ({ onSubmit, selectedModel, onCancel }) => {
  const [modelName, setModelName] = useState('');

  useEffect(() => {
    if (selectedModel) {
      setModelName(selectedModel.Model);
    } else {
      setModelName('');
    }
  }, [selectedModel]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!modelName.trim()) {
      toast.error('El nombre del modelo es obligatorio');
      return;
    }

    const data = selectedModel
      ? { ...selectedModel, Model: modelName }
      : { Model: modelName };

    onSubmit(data);
    setModelName('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-register">
      <input
        type="text"
        placeholder="Nombre del modelo"
        value={modelName}
        onChange={(e) => setModelName(e.target.value)}
        className="input-field"
      />
      <div className="form-actions">
        <button type="submit" className="btn-add">
          {selectedModel ? 'Actualizar' : 'Agregar Modelo'}
        </button>
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
