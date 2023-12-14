import React, { useState } from "react";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export const FormProduct = () => {
    const [product, setProduct] = useState({
        title: "",
        description: "",
        thumbnail: "",
        category: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleCreateProduct = () => {
        const db = getFirestore();
        const productsCollection = collection(db, 'products');

        addDoc(productsCollection, product)
            .then(({ id }) => {
                console.log(`Producto creado con ID: ${id}`);
                // Puedes hacer otras acciones después de crear el producto, como limpiar el formulario.
            })
            .catch(error => {
                console.error("Error al crear el producto:", error);
            });
    };

    return (
        <div>
            <input
                type="text"
                name="title"
                placeholder="Título"
                value={product.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Descripción"
                value={product.description}
                onChange={handleChange}
            />
            <input
                type="text"
                name="thumbnail"
                placeholder="URL de la Imagen"
                value={product.thumbnail}
                onChange={handleChange}
            />
            <input
                type="text"
                name="category"
                placeholder="Categoría"
                value={product.category}
                onChange={handleChange}
            />
            <button onClick={handleCreateProduct}>Crear Producto</button>
        </div>
    );
};
