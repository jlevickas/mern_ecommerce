import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { accessToken } = useContext(UserContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/products", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products?.map((product, idx) => (
          <li key={idx}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
