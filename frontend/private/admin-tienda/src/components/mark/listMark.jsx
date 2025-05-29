import "../../pages/Styles.css/Mark.css";
const ListMark = ({ marks, onEdit, onDelete }) => {
  return (
    <div className="list-mark">
      {marks.map(mark => (
        <div key={mark._id} className="mark-card">
          <p>{mark.Mark}</p>
          <button onClick={() => onEdit(mark)}>Editar</button>
          <button onClick={() => onDelete(mark._id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ListMark;
