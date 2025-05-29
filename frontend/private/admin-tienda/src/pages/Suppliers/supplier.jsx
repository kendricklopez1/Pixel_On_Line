import React, { useEffect, useState } from "react";
import RegisterSupplier from "../../components/suppliers/registerSupplier";
import ListSupplier from "../../components/suppliers/listSupplier";
import toast, { Toaster } from "react-hot-toast";
import "../Styles.css/Suppliers.css";

const Suppliers = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:4000/api/suppliers";

  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pais, setPais] = useState("");

  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSuppliers = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error("Error al cargar proveedores");
      const data = await res.json();
      setSuppliers(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const resetForm = () => {
    setId("");
    setNombre("");
    setCorreo("");
    setTelefono("");
    setPais("");
  };

  const saveSupplier = async (e) => {
    e.preventDefault();
    const newSupplier = {
      Name: nombre,
      EmailSuppliers: correo,
      Phone: telefono,
      Country: pais,
    };

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSupplier),
      });
      if (!res.ok) throw new Error("Error al registrar proveedor");

      toast.success("Proveedor registrado");
      resetForm();
      setActiveTab("list");
      fetchSuppliers();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteSupplier = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Error al eliminar proveedor");
      toast.success("Proveedor eliminado");
      fetchSuppliers();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const updateSupplier = (data) => {
    setId(data._id);
    setNombre(data.Name);
    setCorreo(data.EmailSuppliers);
    setTelefono(data.Phone);
    setPais(data.Country);
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const updatedSupplier = {
      Name: nombre,
      EmailSuppliers: correo,
      Phone: telefono,
      Country: pais,
    };

    try {
      const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedSupplier),
      });
      if (!res.ok) throw new Error("Error al actualizar proveedor");

      toast.success("Proveedor actualizado");
      resetForm();
      setActiveTab("list");
      fetchSuppliers();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="suppliers-root">
      <div className="suppliers-container">
        <h1 className="suppliers-title">Gestión de Proveedores</h1>
        <div className="tab-buttons">
          <button onClick={() => setActiveTab("list")}>Listado</button>
          <button onClick={() => setActiveTab("form")}>Agregar / Editar</button>
        </div>

        {activeTab === "list" && (
          <ListSupplier
            suppliers={suppliers}
            loading={loading}
            deleteSupplier={deleteSupplier}
            updateSupplier={updateSupplier}
          />
        )}
        {activeTab === "form" && (
          <RegisterSupplier
            nombre={nombre}
            correo={correo}
            telefono={telefono}
            pais={pais}
            setNombre={setNombre}
            setCorreo={setCorreo}
            setTelefono={setTelefono}
            setPais={setPais}
            saveSupplier={saveSupplier}
            handleEdit={handleEdit}
            id={id}
          />
        )}
      </div>
      <Toaster toastOptions={{ duration: 1500 }} />
    </div>
  );
};

export default Suppliers;
