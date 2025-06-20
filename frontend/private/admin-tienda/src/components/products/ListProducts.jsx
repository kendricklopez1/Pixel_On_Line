import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ListProducts = ({ onEdit }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("http://localhost:4000/api/products");
            const data = await res.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        await fetch(`http://localhost:4000/api/products/${id}`, {
            method: "DELETE"
        });
        setProducts(products.filter(product => product._id !== id));
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard
                    key={product._id}
                    product={product}
                    onEdit={onEdit}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default ListProducts;
