import React, { useState } from "react";
import RegisterProducts from "../../components/products/RegisterProducts";
import ListProducts from "../../components/products/ListProducts";
import useDataProducts from "../../components/products/hook/useDataProducts";
import "../../pages/Styles.css/Product-management.css";
import "../../components/products/ListProducts"
import { Toaster } from "react-hot-toast";

const ProductManagement = () => {
  const [activeTab, setActiveTab] = useState("list");
  const { products, createProduct, deleteProduct,  } = useDataProducts();

  return (
    <div className="product-management-root">
      <div className="product-management-container">
        <h1 className="product-management-title">Gestión de Productos</h1>
        <div className="tab-buttons">
          <button onClick={() => setActiveTab("list")}>Listado</button>
          <button onClick={() => setActiveTab("form")}>Agregar Producto</button>
        </div>

        {activeTab === "list" && (
          <ListProducts products={products} deleteProduct={deleteProduct} />
        )}

        {activeTab === "form" && (
          <RegisterProducts createProduct={createProduct} />
        )}
      </div>
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default ProductManagement;
