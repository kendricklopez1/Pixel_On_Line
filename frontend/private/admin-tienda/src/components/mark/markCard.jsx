import { useState } from 'react';
import "./listMark"
import "../../pages/Styles.css/Mark.css";

const MarkCard = ({ mark, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newMark, setNewMark] = useState(mark.Mark);

  const handleSave = () => {
    if (newMark.trim()) {
      onUpdate({ ...mark, Mark: newMark });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setNewMark(mark.Mark);
    setIsEditing(false);
  };

  return (
    <div className="card-item">
      {isEditing ? (
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
