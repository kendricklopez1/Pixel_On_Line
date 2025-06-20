import { useState, useEffect } from "react";
import useDataMark from "../../components/mark/hook/useDataMark";
import useDataModels from "../../components/modelss/hook/useDataModel";
import useDataSuppliers from "../../components/suppliers/hook/useDataSupplier";
import "../../pages/Styles.css/Product-management.css";

const RegisterProducts = ({ onAddProduct, onEditProduct, editingProduct, cancelEdit }) => {
  const [form, setForm] = useState({
    Name: "",
    Price: "",
    Discount: "",
    Image: "",
    Mark_id: "",
    Model_id: "",
    Suppliers_id: ""
  });

  const { marks } = useDataMark();
  const { models } = useDataModels();
  const { suppliers } = useDataSuppliers();

  useEffect(() => {
    if (editingProduct) {
      setForm({
        Name: editingProduct.Name || "",
        Price: editingProduct.Price || "",
        Discount: editingProduct.Discount || "",
        Image: editingProduct.Image || "",
        Mark_id: editingProduct.Mark_id?._id || editingProduct.Mark_id || "",
        Model_id: editingProduct.Model_id?._id || editingProduct.Model_id || "",
        Suppliers_id: editingProduct.Suppliers_id?._id || editingProduct.Suppliers_id || ""
      });
    } else {
      setForm({
        Name: "",
        Price: "",
        Discount: "",
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
    if (editingProduct) {
      onEditProduct(editingProduct._id, form);
    } else {
      onAddProduct(form);
    }
    setForm({
      Name: "",
      Price: "",
      Discount: "",
      Image: "",
      Mark_id: "",
      Model_id: "",
      Suppliers_id: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-products">
      <input type="text" name="Name" value={form.Name} onChange={handleChange} placeholder="Nombre" required />
      <input type="number" name="Price" value={form.Price} onChange={handleChange} placeholder="Precio" required />
      <input type="number" name="Discount" value={form.Discount} onChange={handleChange} placeholder="Descuento" required />
      <input type="text" name="Image" value={form.Image} onChange={handleChange} placeholder="URL Imagen" required />

      <select name="Mark_id" value={form.Mark_id} onChange={handleChange} required>
        <option value="">Seleccionar Marca</option>
        {marks.map((mark) => (
          <option key={mark._id} value={mark._id}>{mark.name}</option>
        ))}
      </select>

      <select name="Model_id" value={form.Model_id} onChange={handleChange} required>
        <option value="">Seleccionar Modelo</option>
        {models.map((model) => (
          <option key={model._id} value={model._id}>{model.name}</option>
        ))}
      </select>

      <select name="Suppliers_id" value={form.Suppliers_id} onChange={handleChange} required>
        <option value="">Seleccionar Proveedor</option>
        {suppliers.map((supplier) => (
          <option key={supplier._id} value={supplier._id}>{supplier.name}</option>
        ))}
      </select>

      <button type="submit">{editingProduct ? "Actualizar" : "Agregar"}</button>
      {editingProduct && <button type="button" onClick={cancelEdit}>Cancelar</button>}
    </form>
  );
};

export default RegisterProducts;
