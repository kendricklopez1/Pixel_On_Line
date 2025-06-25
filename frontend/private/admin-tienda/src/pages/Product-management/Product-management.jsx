import React, { useState } from "react";
import RegisterProducts from "../../components/products/RegisterProducts";
import ListProducts from "../../components/products/ListProducts";
import useDataProducts from "../../components/products/hook/useDataProducts";
import "../../pages/Styles.css/Product-management.css";
import { Toaster } from "react-hot-toast";

const ProductManagement = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [editingProduct, setEditingProduct] = useState(null);

  const {
    products,
    createProduct,
    deleteProduct,
    updateProduct
  } = useDataProducts();

  const handleEdit = (product) => {
    setActiveTab("form");
    setEditingProduct(product);
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setActiveTab("list");
  };

  return (
    <div className="product-management-root">
      <div className="product-management-container">
        <h1 className="product-management-title">Gestión de Productos</h1>
        <div className="tab-buttons">
          <button onClick={() => { setActiveTab("list"); cancelEdit(); }}>Listado</button>
          <button onClick={() => { setActiveTab("form"); setEditingProduct(null); }}>Agregar Producto</button>
        </div>

        {activeTab === "list" && (
          <ListProducts
            products={products}
            deleteProduct={deleteProduct}
            onEdit={handleEdit}
          />
        )}

        {activeTab === "form" && (
          <RegisterProducts
            createProduct={createProduct}
            updateProduct={updateProduct}
            editingProduct={editingProduct}
            cancelEdit={cancelEdit}
          />
        )}
      </div>
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default ProductManagement;
