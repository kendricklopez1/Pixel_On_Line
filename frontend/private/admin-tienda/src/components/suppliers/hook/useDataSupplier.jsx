import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const API = "http://localhost:4000/api/suppliers";

const useDataSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pais, setPais] = useState("");

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

  const updateSupplier = (prov) => {
    setId(prov._id);
    setNombre(prov.Name);
    setCorreo(prov.EmailSuppliers);
    setTelefono(prov.Phone);
    setPais(prov.Country);
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
      fetchSuppliers();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
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
    resetForm,
    fetchSuppliers,
  };
};

export default useDataSuppliers;