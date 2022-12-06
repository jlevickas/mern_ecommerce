import express from "express";
import { PORT, HOST } from "../config/config.js";
import productRouter from "./routes/product.routes.js";
import sessionRouter from "./routes/session.routes.js";
import connectDatabase from "./utils/connectDatabase.js";
import authenticate from "./middleware/sessionAuth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

connectDatabase();

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/session", sessionRouter);
app.use("/api/products", authenticate, productRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
