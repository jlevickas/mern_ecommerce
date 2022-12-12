import React, { useState, useEffect } from "react";
import Downshift from "downshift";
import { getProducts } from "../utils/api";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Input,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  const handleSelect = (selectedProduct) => {
    navigate(`/products/${selectedProduct.slug}`);
  };

  return (
    <Downshift onChange={handleSelect}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <Input
            {...getInputProps()}
            placeholder="Search"
            style={{
              width: "200px",
              height: "40px",
              borderRadius: "4px",
              padding: "0 10px",
            }}
          />
          <List
            {...getMenuProps()}
            style={{
              display: !isOpen && "none",
              position: "absolute",
              zIndex: 1,
              maxHeight: "200px",
              minWidth: "200px",
              overflow: "auto",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            {isOpen && inputValue
              ? products
                  .filter(
                    (product) =>
                      !inputValue ||
                      product.name
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                  )
                  .map((product, index) => (
                    <ListItem
                      {...getItemProps({
                        key: product.name,
                        index,
                        item: product.name,
                      })}
                    >
                      <ListItemButton>
                        <ListItemText
                          primary={product.name}
                          secondary={product.brand}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))
              : null}
          </List>
        </div>
      )}
    </Downshift>
  );
};

export default SearchBar;
