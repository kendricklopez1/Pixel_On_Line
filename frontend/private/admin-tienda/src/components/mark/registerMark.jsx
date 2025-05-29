import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const RegisterMark = ({ selectedMark, onSubmit, onCancel }) => {
  const [mark, setMark] = useState('');

  // Cuando cambie selectedMark, actualizo el input
  useEffect(() => {
    if (selectedMark) {
      setMark(selectedMark.Mark);
    } else {
      setMark('');
    }
  }, [selectedMark]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mark.trim()) {
      toast.error('El nombre de la marca es obligatorio');
      return;
    }

    // Enviar datos con _id si es edición
    const markData = selectedMark ? { ...selectedMark, Mark: mark } : { Mark: mark };

    await onSubmit(markData);

    // Limpiar después de enviar
    setMark('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-register">
      <input
        type="text"
        placeholder="Nombre de la marca"
        value={mark}
        onChange={(e) => setMark(e.target.value)}
        className="input-field"
      />
      <button type="submit" className="btn-add">
        {selectedMark ? 'Actualizar Marca' : 'Agregar Marca'}
      </button>
      {selectedMark && (
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default RegisterMark;
