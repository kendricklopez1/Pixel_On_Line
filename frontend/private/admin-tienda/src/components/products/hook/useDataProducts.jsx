import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useDataProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      toast.error("Error al obtener productos");
    }
  };

  const createProduct = async (formData) => {
    try {
      await axios.post("http://localhost:4000/api/products", formData);
      toast.success("Producto registrado");
      getProducts();
    } catch (error) {
      console.error("Error al registrar producto:", error);
      toast.error("Error al registrar producto");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/products/${id}`);
      toast.success("Producto eliminado");
      getProducts();
    } catch (error) {
      console.error("Error al eliminar producto:", error);
      toast.error("Error al eliminar producto");
    }
  };

  const updateProduct = async (id, formData) => {
    try {
      await axios.put(`http://localhost:4000/api/products/${id}`, formData);
      toast.success("Producto actualizado");
      getProducts();
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      toast.error("Error al actualizar producto");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
    createProduct,
    deleteProduct,
    updateProduct,
  };
};

export default useDataProducts;