import { Router } from "express";
import {
  getAllProducts,
  getProductBySlug,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:slug", getProductBySlug);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
