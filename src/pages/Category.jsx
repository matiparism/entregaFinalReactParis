import { ItemListContainer, LoaderComponent } from "../components";
import { useParams } from "react-router-dom";
import { useProductsByCategory } from "../hooks/useProducts";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
export const Category = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const categoryQuery = query(
      collection(db, "products"),
      where("category", "==", categoryId)
    );

    getDocs(categoryQuery)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [categoryId]);

  // const { products, loading, error } = useProductsByCategory(categoryId)

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainer products={products} />
  );
};
