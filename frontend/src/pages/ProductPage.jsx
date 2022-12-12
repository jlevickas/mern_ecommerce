import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/products/${productSlug}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          }
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
    console.log(product);
  }, [productSlug]);

  return (
    <>
      {product ? (
        <div>
          <div>
            <Typography variant="overline">{product.brand}</Typography>
            <Typography variant="h3">{product.name}</Typography>
            <Typography variant="h4">${product.price}</Typography>
          </div>
          <Typography variant="body1">{product.description}</Typography>

          <img
            src={product?.images[0] || "https://via.placeholder.com/200"}
            alt={product?.name}
            title={product?.name}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProductPage;
