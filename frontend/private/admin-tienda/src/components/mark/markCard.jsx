import { useState } from 'react';
import "./listMark"; // Importa estilos o funcionalidades relacionadas
import "../../pages/Styles.css/Mark.css"; // Importa estilos específicos para marcas

// Componente funcional que representa una tarjeta editable de una marca
const MarkCard = ({ mark, onDelete, onUpdate }) => {
  // Estado para controlar si está en modo edición o no
  const [isEditing, setIsEditing] = useState(false);

  // Estado para manejar el valor actualizado de la marca durante la edición
  const [newMark, setNewMark] = useState(mark.Mark);

  // Función para guardar los cambios hechos a la marca
  const handleSave = () => {
    // Verifica que el nuevo valor no esté vacío o solo espacios
    if (newMark.trim()) {
      // Llama a la función de actualización pasando la marca con el nuevo valor
      onUpdate({ ...mark, Mark: newMark });
      // Sale del modo edición
      setIsEditing(false);
    }
  };

  // Función para cancelar la edición y restaurar el valor original
  const handleCancel = () => {
    setNewMark(mark.Mark);  // Restaura el texto original
    setIsEditing(false);    // Sale del modo edición
  };

  return (
    <div className="card-item">
      {isEditing ? (
        // Vista en modo edición
        <>
          <input
            type="text"
            value={newMark}
            onChange={(e) => setNewMark(e.target.value)}
            className="input-edit-inline"
          />
          <div className="actions">
            <button className="btn-save" onClick={handleSave}>Guardar</button>
            <button className="btn-cancel" onClick={handleCancel}>Cancelar</button>
          </div>
        </>
      ) : (
        // Vista en modo lectura
        <>
          <span>{mark.Mark}</span>
          <div className="actions">
            <button className="btn-edit" onClick={() => setIsEditing(true)}>Editar</button>
            <button className="btn-delete" onClick={() => onDelete(mark._id)}>Eliminar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default MarkCard;
