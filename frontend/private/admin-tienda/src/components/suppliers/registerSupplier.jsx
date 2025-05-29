import React from "react";

const RegisterSupplier = ({
  nombre,
  correo,
  telefono,
  pais,
  setNombre,
  setCorreo,
  setTelefono,
  setPais,
  saveSupplier,
  handleEdit,
  id,
}) => {
  return (
    <form onSubmit={id ? handleEdit : saveSupplier} className="suppliers-form">
      <h2 className="form-title">{id ? "Editar Proveedor" : "Nuevo Proveedor"}</h2>
      <div className="form-grid">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="País"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          required
        />
      </div>
      <div className="mt-4 text-center">
        <button type="submit" className="btn-submit">
          {id ? "Actualizar" : "Registrar"}
        </button>
      </div>
    </form>
  );
};

export default RegisterSupplier;
