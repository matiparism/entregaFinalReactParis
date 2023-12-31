import React from "react";
import { useAllProducts } from "../hooks/useProducts";
import { LoaderComponent, ItemListContainer } from "../components";

export const Home = () => {
  const { products, loading, error } = useAllProducts("products");

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};
