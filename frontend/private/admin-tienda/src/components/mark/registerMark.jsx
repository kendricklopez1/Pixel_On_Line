import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import "../../pages/Styles.css/Mark.css";

const RegisterMark = ({ selectedMark, onSubmit, onCancel }) => {
  const [mark, setMark] = useState('');

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

    const markData = selectedMark
      ? { ...selectedMark, Mark: mark }
      : { Mark: mark };

    await onSubmit(markData);
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
        <button
          type="button"
          className="btn-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
      )}
    </form>
  );
};

export default RegisterMark;
