import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles.css/Customer.css";
import ListClients from "../../components/customers/listClient";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Estados para el formulario de edición
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
      alert("Error al obtener los clientes");
    }
  };

  const deleteClient = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/clients/${id}`);
      alert("Cliente eliminado");
      getClients();
    } catch {
      alert("Error al eliminar cliente");
    }
  };

  const updateClient = async (id, updatedClient) => {
    try {
      await axios.put(`http://localhost:4000/api/clients/${id}`, updatedClient);
      alert("Cliente actualizado");
      getClients();
      cancelEdit();
    } catch {
      alert("Error al actualizar cliente");
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  // Cuando inicia edición, rellenamos estados con los datos del cliente
  const startEdit = (client) => {
    setEditingId(client._id);
    setName(client.Name);
    setAge(client.Age || "");
    setAddress(client.Address || "");
    setEmail(client.Email);
    setPassword(client.password || "");
    setTelephone(client.PhoneNumber || "");
    setDui(client.Dui);
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
      alert("Por favor completa Edad y Dirección");
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

  return (
    <div className="container-client">
      <h1 className="title-client">Gestión de Clientes</h1>

      <ListClients
        clients={clients}
        deleteClient={deleteClient}
        editingId={editingId}
        startEdit={startEdit}
        cancelEdit={cancelEdit}
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        address={address}
        setAddress={setAddress}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        telephone={telephone}
        setTelephone={setTelephone}
        dui={dui}
        setDui={setDui}
        handleSave={handleSave}
      />
    </div>
  );
};

export default Clients;
