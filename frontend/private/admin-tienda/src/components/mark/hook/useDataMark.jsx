// Hook/useDataMark.jsx
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const API_URL = "http://localhost:4000/api/mark";

const useDataMark = () => {
  const [marks, setMarks] = useState([]);
  const [selectedMark, setSelectedMark] = useState(null);

  // Cargar marcas
  const fetchMarks = async () => {
    try {
      const res = await axios.get(API_URL);
      setMarks(res.data);
    } catch (error) {
        console.error("Error al cargar las marcas:", error);
      toast.error("Error al cargar las marcas");
    }
  };

  // Agregar o actualizar marca
  const handleSubmit = async (mark) => {
    try {
      if (mark._id) {
        // Actualizar
        await axios.put(`${API_URL}/${mark._id}`, mark);
        toast.success("Marca actualizada");
      } else {
        // Crear
        await axios.post(API_URL, mark);
        toast.success("Marca agregada");
      }
      setSelectedMark(null);
      fetchMarks();
    } catch (error) {
        console.error("Error al guardar la marca:", error);
      toast.error("Error al guardar la marca");
    }
  };

  // Eliminar
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      toast.success("Marca eliminada");
      fetchMarks();
    } catch (error) {
        console.error("Error al eliminar la marca:", error);
      toast.error("Error al eliminar la marca");
    }
  };

  // Editar
  const handleEdit = (mark) => {
    setSelectedMark(mark);
  };

  // Cancelar edición
  const handleCancel = () => {
    setSelectedMark(null);
  };

  useEffect(() => {
    fetchMarks();
  }, []);

  return {
    marks,
    selectedMark,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleCancel,
  };
};

export default useDataMark;
