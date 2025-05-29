import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useDataClients = () => {
  const [clients, setClients] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Estados del formulario
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dui, setDui] = useState("");

  const getClients = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/clients");
      setClients(res.data);
    } catch {
      toast.error("Error al obtener los clientes");
    }
  };

  const deleteClient = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/clients/${id}`);
      toast.success("Cliente eliminado");
      getClients();
    } catch {
      toast.error("Error al eliminar cliente");
    }
  };

  const updateClient = async (id, updatedClient) => {
    try {
      await axios.put(`http://localhost:4000/api/clients/${id}`, updatedClient);
      toast.success("Cliente actualizado");
      getClients();
      cancelEdit();
    } catch {
      toast.error("Error al actualizar cliente");
    }
  };

  const startEdit = (client) => {
    setEditingId(client._id);
    setName(client.Name);
    setAge(client.Age || "");
    setAddress(client.Address || "");
    setEmail(client.Email);
    setPassword(client.password || "");
    setTelephone(client.PhoneNumber || "");
    setDui(client.Dui || "");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setName("");
    setAge("");
    setAddress("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setDui("");
  };

  const handleSave = () => {
    if (!age || !address) {
      toast.error("Por favor completa Edad y Dirección");
      return;
    }

    const updatedClient = {
      Name: name,
      Age: Number(age),
      Address: address,
      Email: email,
      password: password,
      PhoneNumber: telephone,
      Dui: dui,
    };

    updateClient(editingId, updatedClient);
  };

  useEffect(() => {
    getClients();
  }, []);

  return {
    clients,
    editingId,
    name,
    setName,
    age,
    setAge,
    address,
    setAddress,
    email,
    setEmail,
    password,
    setPassword,
    telephone,
    setTelephone,
    dui,
    setDui,
    deleteClient,
    startEdit,
    cancelEdit,
    handleSave,
  };
};

export default useDataClients;