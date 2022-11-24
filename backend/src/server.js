import express from "express";
import { PORT, HOST } from "../config/config.js";
import productRouter from "./routes/product.routes.js";
import connectDatabase from "../config/connectDatabase.js";

connectDatabase();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
