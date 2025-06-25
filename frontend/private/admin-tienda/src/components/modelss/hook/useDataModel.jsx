import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const API_URL = "http://localhost:4000/api/models";

const useDataModel = () => {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  const getModels = async () => {
    try {
      const res = await axios.get(API_URL);
      setModels(res.data);
    } catch (error) {
      console.error("Error al obtener los modelos:", error);
      toast.error("Error al obtener los modelos");
    }
  };

  const handleSubmit = async (data) => {
    try {
      if (selectedModel) {
        await axios.put(`${API_URL}/${data._id}`, data);
        toast.success("Modelo actualizado");
      } else {
        await axios.post(API_URL, data);
        toast.success("Modelo agregado");
      }
      getModels();
      setSelectedModel(null);
    } catch (error) {
      console.error("Error al guardar el modelo:", error);
      toast.error("Error al guardar el modelo");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      toast.success("Modelo eliminado");
      getModels();
    } catch (error) {
      console.error("Error al eliminar el modelo:", error);
      toast.error("Error al eliminar modelo");
    }
  };

  const handleEdit = (model) => {
    setSelectedModel(model);
  };

  const handleCancel = () => {
    setSelectedModel(null);
  };

  useEffect(() => {
    getModels();
  }, []);

  return {
    models,
    selectedModel,
    handleSubmit,
    handleDelete,
    handleEdit,
    handleCancel,
  };
};

export default useDataModel;
