import React, { useEffect, useState } from "react";
import RegisterProduct from "../../components/products/registerProduct";
import ListProduct from "../../components/products/lisProduct";
import toast, { Toaster } from "react-hot-toast";
import "../Styles.css/Product-management.css";

const ProductManagement = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:4000/api/products";

  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    let mounted = true;
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(API);
        const data = await res.json();
        if (mounted) setProducts(data);
      } catch (error) {
        console.error(error);
        toast.error("Error cargando productos");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchProducts();
    return () => {
      mounted = false;
    };
  }, [API]);

  // Save new product
  const saveProduct = async (e) => {
    e.preventDefault();
    const newProduct = { nombre, marca, precio: parseFloat(precio), stock: parseInt(stock) };

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      if (!res.ok) throw new Error("Error en respuesta al crear producto");
      toast.success("Producto registrado");
      resetForm();
      setActiveTab("list");
    } catch (error) {
      console.error(error);
      toast.error("Error al registrar producto");
    }
  };

  // Delete product
  const deleteProduct = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Error en respuesta al eliminar producto");
      toast.success("Producto eliminado");
    } catch (error) {
      console.error(error);
      toast.error("Error al eliminar producto");
    }
  };

  // Update product form filling
  const updateProduct = (data) => {
    setId(data._id);
    setNombre(data.nombre);
    setMarca(data.marca);
    setPrecio(data.precio);
    setStock(data.stock);
    setActiveTab("form");
  };

  // Edit product handler
  const handleEdit = async (e) => {
    e.preventDefault();
    const updatedProduct = { nombre, marca, precio: parseFloat(precio), stock: parseInt(stock) };

    try {
      const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      if (!res.ok) throw new Error("Error en respuesta al actualizar producto");
      toast.success("Producto actualizado");
      resetForm();
      setActiveTab("list");
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar producto");
    }
  };

  const resetForm = () => {
    setId("");
    setNombre("");
    setMarca("");
    setPrecio("");
    setStock("");
  };

  return (
    <div className="product-management-root">
      <div className="product-management-container">
        <h1 className="product-management-title">Gestión de Productos</h1>
        <div className="tab-buttons">
          <button onClick={() => setActiveTab("list")}>Listado</button>
          <button onClick={() => setActiveTab("form")}>{id ? "Editar Producto" : "Agregar Producto"}</button>
        </div>
        {activeTab === "list" && (
          <ListProduct
            products={products}
            loading={loading}
            deleteProduct={deleteProduct}
            updateProduct={updateProduct}
          />
        )}
        {activeTab === "form" && (
          <RegisterProduct
            nombre={nombre}
            marca={marca}
            precio={precio}
            stock={stock}
            setNombre={setNombre}
            setMarca={setMarca}
            setPrecio={setPrecio}
            setStock={setStock}
            saveProduct={saveProduct}
            handleEdit={handleEdit}
            id={id}
          />
        )}
      </div>
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default ProductManagement;
