import { useEffect, useState } from 'react';
import axios from 'axios';
import ListModels from '../../components/modelss/listModel';
import RegisterModels from '../../components/modelss/registerModel';
import '../Styles.css/Models.css';

const Models = () => {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  const fetchModels = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/models');
      setModels(res.data);
    } catch (err) {
      console.error('Error al cargar los modelos:', err);
    }
  };

  useEffect(() => {
    fetchModels();
  }, []);

  const handleSubmit = async (modelData) => {
    try {
      if (modelData._id) {
        await axios.put(`http://localhost:4000/api/models/${modelData._id}`, modelData);
      } else {
        await axios.post('http://localhost:4000/api/models', modelData);
      }
      fetchModels();
      setSelectedModel(null);
    } catch (err) {
      console.error('Error al guardar modelo:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/models/${id}`);
      fetchModels();
    } catch (err) {
      console.error('Error al eliminar modelo:', err);
    }
  };

  return (
    <div className="product-management-container">
      <h1 className="product-management-title">Gestión de Modelos</h1>
      <RegisterModels
        onSubmit={handleSubmit}
        selectedModel={selectedModel}
        onCancel={() => setSelectedModel(null)}
      />
      <ListModels models={models} onEdit={setSelectedModel} onDelete={handleDelete} />
    </div>
  );
};

export default Models;
