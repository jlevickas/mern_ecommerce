import React, { useState, useEffect } from "react";
import { getProducts } from "../../utils/api";
import { Grid, Box, Typography, Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <div>
      <h1>Admin Products</h1>
      <Button component={Link} to="create">
        Add Product
      </Button>
      {products.map((product) => (
        <Button component={Link} to={`edit/${product.slug}`}>
          <Grid item xs={12} sm={6} md={4} lg={2} key={product._id}>
            <Box sx={{ border: "1px solid #ccc", borderRadius: "4px", p: 2 }}>
              <img src={product.images[0]} alt={product.name} height={250} />
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="body1">${product.price}</Typography>
            </Box>
          </Grid>
        </Button>
      ))}
      <Outlet />
    </div>
  );
};

export default AdminProducts;
