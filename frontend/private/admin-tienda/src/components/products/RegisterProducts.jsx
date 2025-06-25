import { useState, useEffect } from "react";
import useDataMark from "../../components/mark/hook/useDataMark";
import useDataModels from "../../components/modelss/hook/useDataModel";
import useDataSuppliers from "../../components/suppliers/hook/useDataSupplier";
import "../../pages/Styles.css/Product-management.css";

const RegisterProducts = ({ createProduct, updateProduct, editingProduct, cancelEdit }) => {
  const [form, setForm] = useState({
    Name: "",
    Price: "",
    Stock: "",
    Image: "",
    Mark_id: "",
    Model_id: "",
    Suppliers_id: ""
  });

  const { marks } = useDataMark();
  const { models } = useDataModels();
  const { suppliers } = useDataSuppliers();

  // 👈 LOGS PARA DEBUG - Puedes removerlos después
  console.log("🔍 Marcas:", marks);
  console.log("🔍 Modelos:", models);
  console.log("🔍 Proveedores:", suppliers);

  // Mostrar estructura del primer elemento si hay datos
  if (suppliers?.length > 0) {
    console.log("Estructura del primer proveedor:", suppliers[0]);
  }
  if (marks?.length > 0) {
    console.log("Estructura de la primera marca:", marks[0]);
  }
  if (models?.length > 0) {
    console.log("Estructura del primer modelo:", models[0]);
  }

  useEffect(() => {
    if (editingProduct) {
      setForm({
        Name: editingProduct.Name || "",
        Price: editingProduct.Price || "",
        Stock: editingProduct.Stock || "",
        Image: editingProduct.Image || "",
        Mark_id: editingProduct.Mark_id?._id || editingProduct.Mark_id || "",
        Model_id: editingProduct.Model_id?._id || editingProduct.Model_id || "",
        Suppliers_id: editingProduct.Suppliers_id?._id || editingProduct.Suppliers_id || ""
      });
    } else {
      setForm({
        Name: "",
        Price: "",
        Stock: "",
        Image: "",
        Mark_id: "",
        Model_id: "",
        Suppliers_id: ""
      });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Debug: mostrar qué datos se están enviando
    console.log("📤 Datos del formulario a enviar:", form);
    
    if (editingProduct) {
      updateProduct(editingProduct._id, form);
    } else {
      createProduct(form);
    }
    setForm({
      Name: "",
      Price: "",
      Stock: "",
      Image: "",
      Mark_id: "",
      Model_id: "",
      Suppliers_id: ""
    });
    if (editingProduct) cancelEdit();
  };

  return (
    <form onSubmit={handleSubmit} className="form-products">
      <input 
        type="text" 
        name="Name" 
        value={form.Name} 
        onChange={handleChange} 
        placeholder="Nombre" 
        required 
      />
      
      <input 
        type="number" 
        name="Price" 
        value={form.Price} 
        onChange={handleChange} 
        placeholder="Precio" 
        required 
      />
      
      <input 
        type="number" 
        name="Stock" 
        value={form.Stock} 
        onChange={handleChange} 
        placeholder="Stock" 
        required 
      />
      
      <input 
        type="text" 
        name="Image" 
        value={form.Image} 
        onChange={handleChange} 
        placeholder="URL de la imagen (ej: https://...)" 
        required 
      />

      {/* SELECT MARCAS - CORREGIDO */}
      <select name="Mark_id" value={form.Mark_id} onChange={handleChange} required>
        <option value="">Seleccionar Marca</option>
        {marks?.map((mark) => (
          <option key={mark._id} value={mark._id}>
            {mark.Mark}
          </option>
        ))}
      </select>

      {/* SELECT MODELOS - CORREGIDO */}
      <select name="Model_id" value={form.Model_id} onChange={handleChange} required>
        <option value="">Seleccionar Modelo</option>
        {models?.map((model) => (
          <option key={model._id} value={model._id}>
            {model.name || model.Name || model.Model}
          </option>
        ))}
      </select>

      {/* SELECT PROVEEDORES - CORREGIDO */}
      <select name="Suppliers_id" value={form.Suppliers_id} onChange={handleChange} required>
        <option value="">Seleccionar Proveedor</option>
        {suppliers?.map((supplier) => (
          <option key={supplier._id} value={supplier._id}>
            {supplier.Name}
          </option>
        ))}
      </select>

      <button type="submit">
        {editingProduct ? "Actualizar" : "Agregar"}
      </button>
      
      {editingProduct && (
        <button type="button" onClick={cancelEdit}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default RegisterProducts;