// src/pages/Suppliers.jsx
import "../Styles.css/Suppliers.css"
import useDataSuppliers from "../../components/suppliers/hook/useDataSupplier";

const Suppliers = () => {
  const {
    suppliers,
    loading,
    id,
    nombre,
    correo,
    telefono,
    pais,
    setNombre,
    setCorreo,
    setTelefono,
    setPais,
    saveSupplier,
    deleteSupplier,
    updateSupplier,
    handleEdit,
  } = useDataSuppliers();

  return (
    <div className="container-suppliers">
      <h1 className="title">Gestión de Proveedores</h1>

      <form onSubmit={id ? handleEdit : saveSupplier} className="form-suppliers">
        <input
          type="text"
          placeholder="Nombre del proveedor"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          type="text"
          placeholder="País"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        />
        <button type="submit">{id ? "Actualizar" : "Registrar"}</button>
      </form>

      <div className="list-suppliers">
        {loading ? (
          <p>Cargando proveedores...</p>
        ) : suppliers.length === 0 ? (
          <p>No hay proveedores registrados.</p>
        ) : (
          suppliers.map((prov) => (
            <div key={prov._id} className="card-supplier">
              <h3>{prov.Name}</h3>
              <p><strong>Correo:</strong> {prov.EmailSuppliers}</p>
              <p><strong>Teléfono:</strong> {prov.Phone}</p>
              <p><strong>País:</strong> {prov.Country}</p>
              <div className="buttons">
                <button onClick={() => updateSupplier(prov)}>Editar</button>
                <button onClick={() => deleteSupplier(prov._id)}>Eliminar</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Suppliers;
