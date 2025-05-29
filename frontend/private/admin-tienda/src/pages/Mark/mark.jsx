import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListMark from '../../components/mark/listMark';
import RegisterMark from '../../components/mark/registerMark';
import "../Styles.css/Mark.css";


const Mark = () => {
  const [marks, setMarks] = useState([]);
  const [selectedMark, setSelectedMark] = useState(null);

  // Cargar marcas con axios dentro de useEffect
  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/mark');
        setMarks(res.data);
      } catch (error) {
        console.error('Error cargando marcas:', error);
      }
    };

    fetchMarks();
  }, []);

  // Guardar o actualizar marca
  const handleSubmit = async (markData) => {
    try {
      if (markData._id) {
        await axios.put(`http://localhost:4000/api/mark/${markData._id}`, markData);
      } else {
        await axios.post('http://localhost:4000/api/mark', markData);
      }
      setSelectedMark(null);
      // Recargar lista
      const res = await axios.get('http://localhost:4000/api/mark');
      setMarks(res.data);
    } catch (error) {
      console.error('Error guardando marca:', error);
    }
  };

  // Eliminar marca
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/mark/${id}`);
      // Recargar lista
      const res = await axios.get('http://localhost:4000/api/mark');
      setMarks(res.data);
    } catch (error) {
      console.error('Error eliminando marca:', error);
    }
  };

  // Seleccionar marca para editar
  const handleEdit = (mark) => {
    setSelectedMark(mark);
  };

  // Cancelar edición
  const handleCancelEdit = () => {
    setSelectedMark(null);
  };

  return (
    <div className="product-management-container">
      <h1 className="product-management-title">Gestión de Marcas</h1>
      <div className="add-product-button-container">
        <RegisterMark
          selectedMark={selectedMark}
          onSubmit={handleSubmit}
          onCancel={handleCancelEdit}
        />
      </div>
      <ListMark marks={marks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Mark;
