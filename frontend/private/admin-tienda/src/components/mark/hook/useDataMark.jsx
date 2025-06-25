import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const API_URL = "http://localhost:4000/api/mark";

const useDataMark = () => {
  const [marks, setMarks] = useState([]);
  const [selectedMark, setSelectedMark] = useState(null);

  const fetchMarks = async () => {
    try {
      console.log("🚀 Intentando obtener marcas de:", API_URL);
      const res = await axios.get(API_URL);
      console.log("✅ Respuesta de marcas:", res.data);
      console.log("📊 Cantidad de marcas:", res.data.length);
      
      // Mostrar estructura de la primera marca si existe
      if (res.data.length > 0) {
        console.log("🔍 Estructura de la primera marca:", res.data[0]);
      }
      
      setMarks(res.data);
    } catch (error) {
      console.error("❌ Error al cargar las marcas:", error);
      console.error("❌ Error details:", error.response?.data);
      toast.error("Error al cargar las marcas");
    }
  };

  const handleSubmit = async (mark) => {
    try {
      if (mark._id) {
        await axios.put(`${API_URL}/${mark._id}`, mark);
        toast.success("Marca actualizada");
      } else {
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

  const handleEdit = (mark) => {
    setSelectedMark(mark);
  };

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