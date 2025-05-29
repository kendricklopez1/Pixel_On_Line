import { useState, useEffect } from 'react';
import toast from 'react-hot-toast'; // Librería para mostrar notificaciones tipo toast
import "../../pages/Styles.css/Mark.css"; // Importación de estilos específicos

// Componente para registrar o actualizar una marca
// Recibe props:
// - selectedMark: marca seleccionada para edición (si existe)
// - onSubmit: función para enviar datos al guardar o actualizar
// - onCancel: función para cancelar la edición
const RegisterMark = ({ selectedMark, onSubmit, onCancel }) => {
  // Estado local para manejar el valor del input de la marca
  const [mark, setMark] = useState('');

  // useEffect para actualizar el input cuando cambia la marca seleccionada
  useEffect(() => {
    if (selectedMark) {
      setMark(selectedMark.Mark); // Si hay marca seleccionada, mostrar su nombre
    } else {
      setMark(''); // Si no, limpiar el input
    }
  }, [selectedMark]);

  // Maneja el evento submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación: el campo no puede quedar vacío o solo espacios
    if (!mark.trim()) {
      toast.error('El nombre de la marca es obligatorio');
      return;
    }

    // Preparar datos para enviar:
    // Si es edición, actualizar objeto con nuevo nombre
    // Si es nuevo, crear objeto nuevo solo con la propiedad Mark
    const markData = selectedMark
      ? { ...selectedMark, Mark: mark }
      : { Mark: mark };

    // Ejecutar función onSubmit recibida desde el componente padre
    await onSubmit(markData);

    // Limpiar input después de enviar
    setMark('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-register">
      {/* Input controlado para ingresar el nombre de la marca */}
      <input
        type="text"
        placeholder="Nombre de la marca"
        value={mark}
        onChange={(e) => setMark(e.target.value)}
        className="input-field"
      />

      {/* Botón para agregar o actualizar según si hay marca seleccionada */}
      <button type="submit" className="btn-add">
        {selectedMark ? 'Actualizar Marca' : 'Agregar Marca'}
      </button>

      {/* Botón para cancelar visible solo si se está editando una marca */}
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
