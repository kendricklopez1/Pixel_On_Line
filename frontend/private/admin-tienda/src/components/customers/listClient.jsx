import React from "react";
import RegisterClients from "./registerClient";
import "../../pages/Styles.css/Customer.css";

const ListClients = ({
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
}) => {
  return (
    <div className="list-clients">
      {clients.map((client) => (
        <div key={client._id} className="client-card">
          {editingId === client._id ? (
            <>
              <RegisterClients
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
                handleEdit={handleSave}
              />
              <button onClick={cancelEdit} className="btn-cancel">
                Cancelar
              </button>
            </>
          ) : (
            <>
              <p><strong>Nombre:</strong> {client.Name}</p>
              <p><strong>Edad:</strong> {client.Age}</p>
              <p><strong>Dirección:</strong> {client.Address}</p>
              <p><strong>Email:</strong> {client.Email}</p>
              <p><strong>Teléfono:</strong> {client.PhoneNumber}</p>
              <p><strong>DUI:</strong> {client.Dui}</p>
              <button onClick={() => startEdit(client)} className="btn-edit">
                Editar
              </button>
              <button onClick={() => deleteClient(client._id)} className="btn-delete">
                Eliminar
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListClients;
