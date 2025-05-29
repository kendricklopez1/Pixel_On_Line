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
    <form
      onSubmit={id ? handleEdit : saveSupplier}
      className="suppliers-form"
      aria-label={id ? "Formulario para editar proveedor" : "Formulario para registrar proveedor"}
    >
      <h2 className="form-title">{id ? "Editar Proveedor" : "Nuevo Proveedor"}</h2>
      <div className="form-grid">
        <label>
          Nombre
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <label>
          Correo
          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </label>
        <label>
          Teléfono
          <input
            type="text"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </label>
        <label>
          País
          <input
            type="text"
            placeholder="País"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            required
          />
        </label>
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
