import ListClients from "../../components/customers/listClient";
import useDataClients from "../../components/customers/hook/useDataClient";
import "../Styles.css/Customer.css";

const Customers = () => {
  const {
    clients,
    deleteClient,
    editingId,
    startEdit,
    cancelEdit,
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
    handleSave,
  } = useDataClients();

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

export default Customers;
