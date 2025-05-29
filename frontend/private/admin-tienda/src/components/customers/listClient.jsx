// Importación de React y del componente RegisterClients
import React from "react";
import RegisterClients from "./registerClient";

// Importación de estilos CSS específicos para clientes
import "../../pages/Styles.css/Customer.css";

// Componente funcional que muestra una lista de clientes y permite editar o eliminar cada uno
const ListClients = ({
  clients,        // Lista de objetos cliente
  deleteClient,   // Función para eliminar un cliente
  editingId,      // ID del cliente que está siendo editado actualmente
  startEdit,      // Función que inicia la edición de un cliente
  cancelEdit,     // Función que cancela la edición
  // Datos del formulario de edición
  name, setName,
  age, setAge,
  address, setAddress,
  email, setEmail,
  password, setPassword,
  telephone, setTelephone,
  dui, setDui,
  handleSave,     // Función para guardar los cambios del cliente editado
}) => {
  return (
    // Contenedor principal de la lista de clientes
    <div className="list-clients">
      {/* Iteración sobre la lista de clientes para renderizar cada tarjeta */}
      {clients.map((client) => (
        <div key={client._id} className="client-card">
          {/* Si el cliente actual está siendo editado, muestra el formulario de edición */}
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
                handleEdit={handleSave}  // Guarda los cambios al cliente
              />
              {/* Botón para cancelar la edición */}
              <button onClick={cancelEdit} className="btn-cancel">
                Cancelar
              </button>
            </>
          ) : (
            // Si no está en modo edición, se muestran los datos del cliente
            <>
              <p><strong>Nombre:</strong> {client.Name}</p>
              <p><strong>Edad:</strong> {client.Age}</p>
              <p><strong>Dirección:</strong> {client.Address}</p>
              <p><strong>Email:</strong> {client.Email}</p>
              <p><strong>Teléfono:</strong> {client.PhoneNumber}</p>
              <p><strong>DUI:</strong> {client.Dui}</p>

              {/* Botón para activar modo edición */}
              <button onClick={() => startEdit(client)} className="btn-edit">
                Editar
              </button>

              {/* Botón para eliminar el cliente */}
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

// Exportación del componente para que pueda ser utilizado en otras partes de la aplicación
export default ListClients;
