// Importación del archivo CSS para estilos específicos del componente ListMark
import "../../pages/Styles.css/Mark.css";

// Componente funcional que recibe un arreglo de marcas y dos funciones para editar y eliminar
const ListMark = ({ marks, onEdit, onDelete }) => {
  return (
    <div className="list-mark">
      {/* Itera sobre el arreglo 'marks' para renderizar cada marca en una tarjeta */}
      {marks.map(mark => (
        <div key={mark._id} className="mark-card">
          {/* Muestra el nombre o descripción de la marca */}
          <p>{mark.Mark}</p>

          {/* Botón para editar la marca, ejecuta la función onEdit con el objeto completo */}
          <button onClick={() => onEdit(mark)}>Editar</button>

          {/* Botón para eliminar la marca, ejecuta la función onDelete con el id */}
          <button onClick={() => onDelete(mark._id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

// Exportación del componente para ser utilizado en otras partes de la aplicación
export default ListMark;
