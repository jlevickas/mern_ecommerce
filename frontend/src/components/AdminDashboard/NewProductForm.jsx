import React from "react";
import {
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { addProduct } from "../../utils/api";

const NewProductForm = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [stock, setStock] = React.useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      name,
      description,
      price,
      brand,
      category,
      stock,
    };
    addProduct(product);
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onSubmit={handleSubmit}
    >
      <TextField
        required
        label="Name"
        value={name}
        onChange={handleNameChange}
        style={{ margin: "1rem", width: "25ch" }}
      />
      <TextField
        label="Description"
        value={description}
        onChange={handleDescriptionChange}
        style={{ margin: "1rem", width: "25ch" }}
      />
      <TextField
        label="Price"
        value={price}
        onChange={handlePriceChange}
        style={{ margin: "1rem", width: "25ch" }}
      />

      <FormControl style={{ margin: "1rem", minWidth: "25ch" }}>
        <InputLabel id="brand-label">Brand</InputLabel>
        <Select
          labelId="brand-label"
          id="brand"
          value={brand}
          onChange={handleBrandChange}
          style={{ margin: "1rem", minWidth: "25ch" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="brand1">Brand 1</MenuItem>
          <MenuItem value="brand2">Brand 2</MenuItem>
          <MenuItem value="brand3">Brand 3</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ margin: "1rem", minWidth: "25ch" }}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          value={category}
          onChange={handleCategoryChange}
          style={{ margin: "1rem", minWidth: "25ch" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="category1">Category 1</MenuItem>
          <MenuItem value="category2">Category 2</MenuItem>
          <MenuItem value="category3">Category 3</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Stock"
        value={stock}
        onChange={handleStockChange}
        style={{ margin: "1rem", width: "25ch" }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ margin: "1rem" }}
      >
        Create Product
      </Button>
    </form>
  );
};

export default NewProductForm;
