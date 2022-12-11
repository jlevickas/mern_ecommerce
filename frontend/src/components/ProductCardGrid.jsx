import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

const ProductCardGrid = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCardGrid;
