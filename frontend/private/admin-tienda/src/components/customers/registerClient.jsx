import React from "react";
import "../../pages/Styles.css/Customer.css";

const RegisterClients = ({
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
  handleEdit,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEdit();
      }}
      className="form-client"
    >
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Dirección"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={telephone}
        onChange={(e) => setTelephone(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="DUI"
        value={dui}
        onChange={(e) => setDui(e.target.value)}
        required
      />
      <button type="submit" className="btn-save">
        Guardar
      </button>
    </form>
  );
};

export default RegisterClients;
