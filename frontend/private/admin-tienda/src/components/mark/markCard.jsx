import { useState } from 'react';

const MarkCard = ({ mark, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(mark.Mark);

  const handleSave = () => {
    onEdit({ ...mark, Mark: editValue });
    setIsEditing(false);
  };

  return (
    <div className="card-item">
      {isEditing ? (
        <>
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="input-field"
          />
          <button className="btn-save" onClick={handleSave}>Guardar</button>
          <button className="btn-cancel" onClick={() => setIsEditing(false)}>Cancelar</button>
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
