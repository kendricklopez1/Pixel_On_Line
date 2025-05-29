// Importación de React y del archivo de estilos específicos
import React from "react";
import "../../pages/Styles.css/Customer.css";

// Componente funcional que representa un formulario para registrar o editar datos de un cliente
const RegisterClients = ({
  name, setName,               // Nombre del cliente y su función para actualizar el estado
  age, setAge,                 // Edad del cliente y su función para actualizar el estado
  address, setAddress,         // Dirección del cliente y su función para actualizar el estado
  email, setEmail,             // Correo electrónico y su función para actualizar el estado
  password, setPassword,       // Contraseña del cliente y su función para actualizar el estado
  telephone, setTelephone,     // Teléfono del cliente y su función para actualizar el estado
  dui, setDui,                 // DUI y su función para actualizar el estado
  handleEdit,                  // Función que se ejecuta al enviar el formulario (guardar cambios)
}) => {
  return (
    // Formulario con clase personalizada. Ejecuta handleEdit al enviarse.
    <form
      onSubmit={(e) => {
        e.preventDefault();   // Evita el comportamiento por defecto del formulario
        handleEdit();         // Llama a la función para procesar los datos del formulario
      }}
      className="form-client"
    >
      {/* Campo para ingresar el nombre */}
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* Campo para ingresar la edad */}
      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />

      {/* Campo para ingresar la dirección */}
      <input
        type="text"
        placeholder="Dirección"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      {/* Campo para ingresar el correo electrónico */}
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {/* Campo para ingresar la contraseña */}
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {/* Campo para ingresar el teléfono */}
      <input
        type="text"
        placeholder="Teléfono"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        required
      />

      {/* Campo para ingresar el DUI */}
      <input
        type="text"
        placeholder="DUI"
        value={dui}
        onChange={(e) => setDui(e.target.value)}
        required
      />

      {/* Botón para enviar el formulario */}
      <button type="submit" className="btn-save">
        Guardar
      </button>
    </form>
  );
};

// Exportación del componente para ser reutilizado en otros módulos
export default RegisterClients;
