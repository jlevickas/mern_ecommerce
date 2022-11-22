import express from "express";
import { PORT, HOST } from "../config/config.js";
import productRouter from "./routes/product.routes.js";

const app = express();

app.use("/api/products", productRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
